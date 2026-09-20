# Global Eats Spinner

Pick a country on the world map, go eat its food, then log a review. The whole group shares one list of reviews, one map and one leaderboard.

Live site: https://countryfoods-github-io.vercel.app

## How it works

- `index.html`, `styles.css`, `script.js` — the site. No build step.
- `map.js` — the interactive world map (renders the jsvectormap `world` path data as one inline SVG; handles the selection roll and zoom). Microstates without a shape in the data are drawn as markers at their capital.
- `api/reviews.js` — a Vercel serverless function that stores reviews in Redis so everyone sees the same data.
- Pushing to `main` redeploys the site on Vercel automatically.

Reviews are shared. Only the list of countries *picked but not yet reviewed* is per-device (that's what "Return picked countries to the pool" clears — it never touches reviews).

## One-time setup: connect shared storage

Until this is done the site still works, but shows **"Saved on this device only"** and keeps reviews in each browser separately. Once connected, any reviews already saved in a browser are uploaded to the shared list automatically the next time that browser opens the site.

1. Open the project on Vercel: https://vercel.com/zinho1/countryfoods-github-io
2. Go to the **Storage** tab → **Create Database** → pick **Upstash** (Serverless DB → Redis) → create it on the free plan.
   Use Upstash specifically, not the "Redis" (Redis Labs) option: the Redis Labs free tier is RAM-only with no persistence, so a restart would wipe every review.
3. When asked, **connect it to this project** (all environments). Vercel adds the `KV_REST_API_URL` and `KV_REST_API_TOKEN` environment variables for you.
4. Go to **Deployments** → open the latest one → **Redeploy** (env vars only apply to new deployments).
5. Reload the site. The pill under the title should now say **"Shared with the group"**.

## API

| Method | Path | Body / query | Does |
| --- | --- | --- | --- |
| `GET` | `/api/reviews` | – | List all reviews |
| `POST` | `/api/reviews` | review JSON | Add a review |
| `PUT` | `/api/reviews` | review JSON incl. `id` | Update a review |
| `DELETE` | `/api/reviews?id=…` | – | Delete a review |

The overall score is recalculated on the server as `food × 0.6 + service × 0.3 + vibe × 0.1`.
