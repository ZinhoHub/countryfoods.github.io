// Shared Redis access for the API functions. Storage is connected through the Vercel
// dashboard (Storage -> Upstash), which injects the REST URL + token as environment variables.

const REST_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const REST_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

const configured = Boolean(REST_URL && REST_TOKEN);

// Upstash REST: POST ["HSET", key, field, value] -> { result }
async function redis(...command) {
    const res = await fetch(REST_URL, {
        method: 'POST',
        headers: { Authorization: `Bearer ${REST_TOKEN}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(command)
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    return data.result;
}

function cleanText(value, maxLength) {
    return String(value ?? '').trim().slice(0, maxLength);
}

async function readBody(req) {
    if (req.body && typeof req.body === 'object') return req.body;
    if (typeof req.body === 'string' && req.body) return JSON.parse(req.body);
    return {};
}

module.exports = { redis, configured, cleanText, readBody };
