# Songrec

Handpicked songs for every mood. Choose a vibe, tune how popular you want the pick to be, and get a track from Songrec's curated Spotify collection.

## How it works

1. Choose one of Songrec's eight moods: party, feel-good, soft, indie, retro, sad, love, or hiphop.
2. Adjust the popularity slider to control how familiar or unexpected the recommendation should be.
3. Get up to five recommendations from the curated collection.
4. Open a recommendation on Spotify when a Spotify link is available.
5. Start over whenever you want to choose another mood or popularity level.

## Architecture

```text
React + Vite frontend (3000) → Next.js API server (3001) → Spotify Web API and Supabase
```

- `frontend/` contains the React + Vite frontend and its public SEO files.
- `src/` contains the Next.js API server and server-side application code.
- `VITE_API_BASE_URL` configures the frontend API base URL. For local development, the frontend uses the API server at `http://localhost:3001`.
- Spotify and Supabase credentials are server-only values. Keep them in the root `.env.local` and do not expose them through frontend variables.

## Setup

Prerequisites: Node.js 18.17+, Spotify Developer credentials, and a Supabase project.

1. Install the root and frontend dependencies:

   ```bash
   npm install
   cd frontend && npm install && cd ..
   ```

2. Create `.env.local` in the repository root using `.env.local.example`. Set the server-only `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SUPABASE_URL`, and `SUPABASE_SECRET_KEY` values. The Spotify OAuth variables are only required for the playlist-import flow. Set a strong random `IMPORT_API_TOKEN` before enabling playlist imports; requests must send `Authorization: Bearer <token>`.

   The OAuth callback does not display refresh tokens in production. For a local development-only setup, explicitly set `SPOTIFY_OAUTH_DISPLAY_TOKEN=1` while running `next dev`, then turn it off after copying the token.

   For frontend-only values, copy `frontend/.env.example` to `frontend/.env.local`. Keep `VITE_API_BASE_URL` pointed at the API server and leave the analytics IDs blank until their production properties exist.

3. Start the frontend and API server together:

   ```bash
   npm run dev
   ```

   The frontend runs at `http://localhost:3000` and the API server runs at `http://localhost:3001`.

## Commands

```bash
npm run dev                 # Start the frontend and API server
npm test                    # Run the test suite
npm run typecheck          # Type-check the API and frontend
cd frontend && npm run build # Build the frontend
```

## SEO, AEO, and GEO

The canonical site is [songrec.tanujpatel.design](https://songrec.tanujpatel.design/). Public discovery and reference files are available at:

- `/about/` — factual product and recommendation overview.
- `/robots.txt` — crawler guidance and the sitemap location.
- `/sitemap.xml` — the public URL sitemap.
- `/llms.txt` — concise product facts and public page links for AI systems.

Vercel Analytics is mounted in the frontend. Google Analytics 4 is installed as the standard static Google tag on the homepage and About page. Microsoft Clarity remains a production-only, opt-in integration:

- `VITE_CLARITY_PROJECT_ID` — the Clarity project ID.

The GA4 Measurement ID is public by design and is included in both page `<head>` blocks so Google’s installation checker and browser tools can detect it before the React app mounts. Set the Clarity project ID in the frontend's Vercel environment before a production build; it is intentionally not committed to the repository. After deployment, verify GA4 with Tag Assistant and Clarity from its Setup page.

## Deployment

Build the frontend with:

```bash
cd frontend && npm run build
```

Deploy the frontend and API with Vercel after configuring the production environment variables. Set `VITE_API_BASE_URL` to the deployed API URL for the frontend deployment.

---

Built by [Tanuj Patel](https://www.tanujpatel.design/) · MIT License
