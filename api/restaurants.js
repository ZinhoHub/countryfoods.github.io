// Restaurant suggestions for a country's cuisine, from OpenStreetMap (via the Overpass API).
// GET /api/restaurants?country=Hungary -> { country, city, results: [...], source, cached }
//
// Overpass is free but slow and often busy, so we try several mirrors and cache each
// country's results in Redis. Cached lists are refreshed after a week, but if Overpass
// is down at that point we keep serving the older list rather than nothing.

const { redis, configured, cleanText } = require('../lib/redis');
const { CUISINES } = require('../lib/cuisines');

// Greater London bounding box (south, west, north, east).
const CITY = { name: 'London', bbox: '51.28,-0.51,51.70,0.33' };
const FRESH_MS = 7 * 24 * 60 * 60 * 1000;
const TOTAL_BUDGET_MS = 24000;   // stay under the function's 30s limit
const MAX_RESULTS = 8;
const MIRRORS = [
    'https://z.overpass-api.de/api/interpreter',
    'https://overpass-api.de/api/interpreter',
    'https://lz4.overpass-api.de/api/interpreter',
    'https://overpass.private.coffee/api/interpreter'
];

function escapeRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

function buildQuery(terms) {
    // "sri lankan" should match the tag "sri_lankan" and the name "Sri Lankan".
    const cuisineRe = terms.map(t => escapeRegex(t).replace(/ /g, '[ _]')).join('|');
    const nameRe = escapeRegex(terms[0]).replace(/ /g, '[ _]');
    return `[out:json][timeout:12];
(
  nwr["amenity"~"^(restaurant|cafe|fast_food)$"]["cuisine"~"${cuisineRe}",i](${CITY.bbox});
  nwr["amenity"~"^(restaurant|cafe|fast_food)$"]["name"~"${nameRe}",i](${CITY.bbox});
);
out center tags 40;`;
}

async function queryOverpass(query, budgetMs = TOTAL_BUDGET_MS) {
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
                signal: AbortSignal.timeout(Math.min(12000, remaining))
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

module.exports = async (req, res) => {
    const country = cleanText(req.query && req.query.country, 80);
    const terms = CUISINES[country];
    if (!terms) return res.status(400).json({ error: 'Unknown country' });

    const searchUrl = `https://www.google.com/maps/search/${encodeURIComponent(`${terms[0]} restaurant ${CITY.name}`)}`;
    const cacheKey = `globalEats:restaurants:${country}`;
    res.setHeader('Cache-Control', 'public, max-age=3600');

    let cached = null;
    if (configured) {
        try { const raw = await redis('GET', cacheKey); if (raw) cached = JSON.parse(raw); } catch (_) { /* ignore */ }
    }
    const fresh = cached && Date.now() - (cached.fetchedAt || 0) < FRESH_MS;
    if (fresh && !('refresh' in (req.query || {}))) {
        return res.status(200).json({ ...cached, cached: true });
    }

    try {
        // Spend less time on a background-style refresh when we already have something to show.
        const results = normalise(await queryOverpass(buildQuery(terms), cached ? 12000 : TOTAL_BUDGET_MS));
        const payload = { country, city: CITY.name, terms, results, searchUrl, source: 'OpenStreetMap', fetchedAt: Date.now() };
        if (configured) {
            try { await redis('SET', cacheKey, JSON.stringify(payload)); } catch (_) { /* ignore */ }
        }
        return res.status(200).json({ ...payload, cached: false });
    } catch (err) {
        if (cached) return res.status(200).json({ ...cached, cached: true, stale: true });
        const detail = 'debug' in (req.query || {}) ? err.message : undefined;
        return res.status(502).json({ error: 'Restaurant lookup is busy right now', country, city: CITY.name, searchUrl, detail });
    }
};
