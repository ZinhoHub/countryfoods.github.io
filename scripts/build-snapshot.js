// Builds data/restaurants.json: London restaurant suggestions for every country.
//
// Rather than one Overpass query per country (slow, and Overpass rate-limits), this pulls
// every named restaurant/café/fast-food place in Greater London in ONE query and matches
// them against each country's cuisine terms locally. Run occasionally and commit the result:
//
//   node scripts/build-snapshot.js
//   node scripts/build-snapshot.js path/to/saved-overpass.json   # reuse a previous download

const fs = require('fs');
const path = require('path');
const { CUISINES, REGIONS } = require('../lib/cuisines');
const { CITY, MIRRORS, normalise, cuisineMatcher } = require('../lib/overpass');

const OUT = path.join(__dirname, '..', 'data', 'restaurants.json');
const QUERY = `[out:json][timeout:240][maxsize:536870912];
nwr["amenity"~"^(restaurant|cafe|fast_food)$"]["name"](${CITY.bbox});
out center tags;`;

async function download() {
    let lastError;
    for (const url of MIRRORS) {
        process.stdout.write(`fetching from ${url} … `);
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': 'GlobalEats/1.0 (snapshot build)' },
                body: 'data=' + encodeURIComponent(QUERY),
                signal: AbortSignal.timeout(300000)
            });
            const text = await res.text();
            const data = JSON.parse(text);
            if (!Array.isArray(data.elements)) throw new Error('unexpected response');
            console.log(`${data.elements.length} places`);
            return data.elements;
        } catch (err) {
            console.log(`failed (${err.name === 'TimeoutError' ? 'timed out' : err.message.slice(0, 80)})`);
            lastError = err;
        }
    }
    throw lastError;
}

(async () => {
    const source = process.argv[2];
    const elements = source ? JSON.parse(fs.readFileSync(source, 'utf8')).elements : await download();

    const snapshot = { generatedAt: Date.now(), city: CITY.name, source: 'OpenStreetMap', countries: {} };
    let empty = 0;
    let withRegional = 0;
    for (const country of Object.keys(CUISINES)) {
        const matches = cuisineMatcher(CUISINES[country]);
        const results = normalise(elements.filter(el => matches(el.tags || {})));
        const entry = { results, fetchedAt: snapshot.generatedAt };

        // Thin direct coverage: add the nearest regional cuisine so there's still somewhere to go.
        if (results.length < 3 && REGIONS[country]) {
            const regional = cuisineMatcher(REGIONS[country]);
            const seen = new Set(results.map(r => r.name.toLowerCase()));
            const extra = normalise(elements.filter(el => regional(el.tags || {}) && !seen.has((el.tags.name || '').toLowerCase())));
            if (extra.length) { entry.regional = { terms: REGIONS[country], results: extra }; withRegional++; }
        }
        snapshot.countries[country] = entry;
        if (results.length === 0 && !entry.regional) empty++;
    }
    fs.writeFileSync(OUT, JSON.stringify(snapshot) + '\n');
    console.log(`wrote ${OUT}: ${Object.keys(snapshot.countries).length} countries, ${withRegional} using a regional fallback, ${empty} with nothing at all`);
})().catch(err => { console.error(err); process.exit(1); });
