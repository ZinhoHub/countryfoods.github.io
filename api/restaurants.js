// Restaurant suggestions for a country's cuisine, from OpenStreetMap.
// GET /api/restaurants?country=Hungary -> { country, city, results: [...], source, ... }
//
// Order of preference:
//   1. fresh Redis cache (refreshed within a week)
//   2. bundled snapshot in data/restaurants.json, while it's reasonably recent
//   3. live Overpass query (several mirrors), which then populates the cache
//   4. stale Redis cache, then the snapshot regardless of age
// Overpass is free but frequently overloaded, which is why the snapshot exists.

const { redis, configured, cleanText } = require('../lib/redis');
const { CUISINES } = require('../lib/cuisines');
const { CITY, TOTAL_BUDGET_MS, buildQuery, queryOverpass, normalise, searchUrlFor } = require('../lib/overpass');
const snapshot = require('../data/restaurants.json');

const FRESH_MS = 7 * 24 * 60 * 60 * 1000;
const SNAPSHOT_FRESH_MS = 45 * 24 * 60 * 60 * 1000;

function fromSnapshot(country) {
    const entry = snapshot.countries && snapshot.countries[country];
    if (!entry) return null;
    return { country, city: CITY.name, terms: CUISINES[country], results: entry.results, regional: entry.regional || null,
             searchUrl: searchUrlFor(country), source: 'OpenStreetMap', fetchedAt: entry.fetchedAt, snapshot: true };
}

module.exports = async (req, res) => {
    const country = cleanText(req.query && req.query.country, 80);
    const terms = CUISINES[country];
    if (!terms) return res.status(400).json({ error: 'Unknown country' });

    const cacheKey = `globalEats:restaurants:${country}`;
    const forceLive = 'refresh' in (req.query || {});
    res.setHeader('Cache-Control', 'public, max-age=3600');

    let cached = null;
    if (configured) {
        try { const raw = await redis('GET', cacheKey); if (raw) cached = JSON.parse(raw); } catch (_) { /* ignore */ }
    }
    if (cached && !forceLive && Date.now() - (cached.fetchedAt || 0) < FRESH_MS) {
        return res.status(200).json({ ...cached, cached: true });
    }

    const snap = fromSnapshot(country);
    if (snap && !forceLive && Date.now() - (snap.fetchedAt || 0) < SNAPSHOT_FRESH_MS) {
        return res.status(200).json(snap);
    }

    try {
        const results = normalise(await queryOverpass(buildQuery(terms), cached || snap ? 12000 : TOTAL_BUDGET_MS));
        const payload = { country, city: CITY.name, terms, results, searchUrl: searchUrlFor(country), source: 'OpenStreetMap', fetchedAt: Date.now() };
        if (configured) {
            try { await redis('SET', cacheKey, JSON.stringify(payload)); } catch (_) { /* ignore */ }
        }
        return res.status(200).json({ ...payload, cached: false });
    } catch (err) {
        if (cached) return res.status(200).json({ ...cached, cached: true, stale: true });
        if (snap) return res.status(200).json({ ...snap, stale: true });
        const detail = 'debug' in (req.query || {}) ? err.message : undefined;
        return res.status(502).json({ error: 'Restaurant lookup is busy right now', country, city: CITY.name, searchUrl: searchUrlFor(country), detail });
    }
};
