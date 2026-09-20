// Shared review storage for the Global Eats Spinner.
// Runs as a Vercel serverless function and stores every review in a Redis hash,
// so the whole group sees the same list no matter which device they use.
//
// Storage is connected through the Vercel dashboard (Storage -> Redis / Upstash),
// which injects the REST URL + token below as environment variables.

const { randomUUID } = require('crypto');

const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const HASH_KEY = 'globalEats:reviews';

async function redis(...command) {
    const res = await fetch(REDIS_URL, {
        method: 'POST',
        headers: { Authorization: `Bearer ${REDIS_TOKEN}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(command)
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    return data.result;
}

function clampScore(value) {
    const n = parseFloat(value);
    if (Number.isNaN(n)) return 5;
    return Math.min(10, Math.max(1, Math.round(n * 2) / 2));
}

function cleanText(value, maxLength) {
    return String(value ?? '').trim().slice(0, maxLength);
}

// Only keep the fields we know about, with sane limits, so nobody can stuff junk in the shared list.
function sanitize(body) {
    const b = body && typeof body === 'object' ? body : {};
    const country = cleanText(b.country, 80);
    if (!country) throw Object.assign(new Error('Country is required'), { status: 400 });

    const food = clampScore(b.food), service = clampScore(b.service), vibe = clampScore(b.vibe);
    const overall = parseFloat((food * 0.6 + service * 0.3 + vibe * 0.1).toFixed(1));
    const date = /^\d{4}-\d{2}-\d{2}$/.test(b.date || '') ? b.date : new Date().toISOString().slice(0, 10);

    return {
        country,
        restaurant: cleanText(b.restaurant, 120) || 'Unnamed',
        food, service, vibe, overall,
        notes: cleanText(b.notes, 1000),
        date
    };
}

async function readBody(req) {
    if (req.body && typeof req.body === 'object') return req.body;
    if (typeof req.body === 'string' && req.body) return JSON.parse(req.body);
    return {};
}

module.exports = async (req, res) => {
    res.setHeader('Cache-Control', 'no-store');

    if (!REDIS_URL || !REDIS_TOKEN) {
        return res.status(503).json({ error: 'Shared storage is not configured yet.' });
    }

    try {
        switch (req.method) {
            case 'GET': {
                const flat = await redis('HGETALL', HASH_KEY);
                const reviews = [];
                for (let i = 1; i < (flat || []).length; i += 2) reviews.push(JSON.parse(flat[i]));
                return res.status(200).json(reviews);
            }
            case 'POST': {
                const entry = sanitize(await readBody(req));
                entry.id = randomUUID();
                entry.createdAt = new Date().toISOString();
                await redis('HSET', HASH_KEY, entry.id, JSON.stringify(entry));
                return res.status(201).json(entry);
            }
            case 'PUT': {
                const body = await readBody(req);
                const id = cleanText(body.id, 64);
                if (!id) return res.status(400).json({ error: 'Review id is required' });
                const existing = await redis('HGET', HASH_KEY, id);
                if (!existing) return res.status(404).json({ error: 'Review not found' });
                const entry = { ...JSON.parse(existing), ...sanitize(body), id, updatedAt: new Date().toISOString() };
                await redis('HSET', HASH_KEY, id, JSON.stringify(entry));
                return res.status(200).json(entry);
            }
            case 'DELETE': {
                const id = cleanText(req.query && req.query.id, 64);
                if (!id) return res.status(400).json({ error: 'Review id is required' });
                const removed = await redis('HDEL', HASH_KEY, id);
                return res.status(removed ? 200 : 404).json({ deleted: Boolean(removed) });
            }
            default:
                res.setHeader('Allow', 'GET, POST, PUT, DELETE');
                return res.status(405).json({ error: 'Method not allowed' });
        }
    } catch (err) {
        return res.status(err.status || 500).json({ error: err.message || 'Something went wrong' });
    }
};
