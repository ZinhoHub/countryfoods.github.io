// Countries the group has picked but not reviewed yet, shared by everyone.
// Stored as a Redis set of country names.

const { redis, configured, cleanText, readBody } = require('../lib/redis');

const SET_KEY = 'globalEats:picks';

module.exports = async (req, res) => {
    res.setHeader('Cache-Control', 'no-store');

    if (!configured) {
        return res.status(503).json({ error: 'Shared storage is not configured yet.' });
    }

    try {
        switch (req.method) {
            case 'GET':
                return res.status(200).json(await redis('SMEMBERS', SET_KEY));
            case 'POST': {
                const country = cleanText((await readBody(req)).country, 80);
                if (!country) return res.status(400).json({ error: 'Country is required' });
                await redis('SADD', SET_KEY, country);
                return res.status(201).json(await redis('SMEMBERS', SET_KEY));
            }
            case 'DELETE': {
                // ?country=X removes one pick; no query clears them all.
                const country = cleanText(req.query && req.query.country, 80);
                if (country) await redis('SREM', SET_KEY, country);
                else await redis('DEL', SET_KEY);
                return res.status(200).json(await redis('SMEMBERS', SET_KEY));
            }
            default:
                res.setHeader('Allow', 'GET, POST, DELETE');
                return res.status(405).json({ error: 'Method not allowed' });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message || 'Something went wrong' });
    }
};
