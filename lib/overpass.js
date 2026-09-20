// Everything that talks to OpenStreetMap's Overpass API: query building, mirror failover
// and normalising the raw elements into restaurant records. Shared by the API function
// and the snapshot builder script.

const { CUISINES } = require('./cuisines');

// Greater London bounding box (south, west, north, east).
const CITY = { name: 'London', bbox: '51.28,-0.51,51.70,0.33' };
const TOTAL_BUDGET_MS = 24000;   // stay under the function's 30s limit

function searchUrlFor(country) {
    const terms = CUISINES[country] || [country];
    return `https://www.google.com/maps/search/${encodeURIComponent(`${terms[0]} restaurant ${CITY.name}`)}`;
}
const MAX_RESULTS = 8;
const MIRRORS = [
    'https://z.overpass-api.de/api/interpreter',
    'https://overpass-api.de/api/interpreter',
    'https://lz4.overpass-api.de/api/interpreter',
    'https://overpass.private.coffee/api/interpreter'
];

function escapeRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

// Same matching rules as the Overpass query, applied locally to a bulk download.
function cuisineMatcher(terms) {
    const cuisineRe = new RegExp(terms.map(t => escapeRegex(t).replace(/ /g, '[ _]')).join('|'), 'i');
    return tags => Boolean(tags.name) && /^(restaurant|cafe|fast_food)$/.test(tags.amenity || '')
        && ((tags.cuisine && cuisineRe.test(tags.cuisine)) || cuisineRe.test(tags.name));
}

function buildQuery(terms, timeoutSec = 12) {
    // "sri lankan" should match the tag "sri_lankan" and the name "Sri Lankan".
    const cuisineRe = terms.map(t => escapeRegex(t).replace(/ /g, '[ _]')).join('|');
    const nameRe = escapeRegex(terms[0]).replace(/ /g, '[ _]');
    return `[out:json][timeout:${Math.round(Math.max(10, timeoutSec))}];
(
  nwr["amenity"~"^(restaurant|cafe|fast_food)$"]["cuisine"~"${cuisineRe}",i](${CITY.bbox});
  nwr["amenity"~"^(restaurant|cafe|fast_food)$"]["name"~"${nameRe}",i](${CITY.bbox});
);
out center tags 40;`;
}

async function queryOverpass(query, budgetMs = TOTAL_BUDGET_MS, perRequestMs = 12000) {
    let lastError;
    const deadline = Date.now() + budgetMs;
    for (const url of MIRRORS) {
        const remaining = deadline - Date.now();
        if (remaining < 3000) break;
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': 'GlobalEats/1.0 (group food challenge site)' },
                body: 'data=' + encodeURIComponent(query),
                signal: AbortSignal.timeout(Math.min(perRequestMs, remaining))
            });
            const text = await res.text();
            if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}: ${text.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 160)}`);
            let data;
            try { data = JSON.parse(text); } catch (_) { throw new Error(`${url} -> non-JSON: ${text.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 160)}`); }
            if (!Array.isArray(data.elements)) throw new Error(`${url} -> unexpected response`);
            return data.elements;
        } catch (err) {
            lastError = new Error(`${lastError ? lastError.message + ' | ' : ''}${err.name === 'TimeoutError' ? url + ' -> timed out' : err.message}`);
        }
    }
    throw lastError || new Error('All Overpass mirrors failed');
}

function formatAddress(t) {
    const street = [t['addr:housenumber'], t['addr:street']].filter(Boolean).join(' ');
    return [street, t['addr:city'] && t['addr:city'] !== CITY.name ? t['addr:city'] : null, t['addr:postcode']]
        .filter(Boolean).join(', ');
}

function normalise(elements) {
    const seen = new Set();
    const results = [];
    for (const el of elements) {
        const t = el.tags || {};
        if (!t.name) continue;
        const key = t.name.toLowerCase();
        if (seen.has(key)) continue;
        seen.add(key);
        const lat = el.lat ?? el.center?.lat, lon = el.lon ?? el.center?.lon;
        const address = formatAddress(t);
        results.push({
            name: t.name,
            type: t.amenity === 'fast_food' ? 'Fast food' : t.amenity === 'cafe' ? 'Café' : 'Restaurant',
            cuisine: (t.cuisine || '').split(';').map(c => c.trim().replace(/_/g, ' ')).filter(Boolean),
            address,
            website: t.website || t['contact:website'] || null,
            phone: t.phone || t['contact:phone'] || null,
            hours: t.opening_hours || null,
            lat, lon,
            mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${t.name} ${address || CITY.name}`)}`
        });
    }
    // Places with an address or website are more useful — surface them first.
    results.sort((a, b) => (Boolean(b.address) + Boolean(b.website)) - (Boolean(a.address) + Boolean(a.website)));
    return results.slice(0, MAX_RESULTS);
}

module.exports = { CITY, MIRRORS, TOTAL_BUDGET_MS, buildQuery, queryOverpass, normalise, searchUrlFor, cuisineMatcher };
