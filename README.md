# songrec

Mood-based music recommendations from a handpicked Spotify collection. Pick a vibe, tune the popularity slider, get a track.

## Features

- Pick a mood and adjust a popularity slider to get a song recommendation
- Save recommended tracks directly to your Spotify library

## Stack

**Frontend** — React 18, Vite, TypeScript, Tailwind CSS, Framer Motion  
**Backend** — Next.js 14 API routes, Spotify Web API, Supabase

## Setup

**Prerequisites:** Node.js 18+, Spotify Developer credentials, Supabase project

1. Clone and install

   ```bash
   git clone https://github.com/Tanujp106/songrec.git
   cd songrec
   npm install
   cd frontend && npm install && cd ..
   ```

2. Create `.env.local` in the root:

   ```env
   SPOTIFY_CLIENT_ID=
   SPOTIFY_CLIENT_SECRET=
   SUPABASE_URL=
   SUPABASE_SECRET_KEY=
   # Optional: required only for the playlist-import OAuth flow.
   SPOTIFY_REDIRECT_URI=http://127.0.0.1:3001/api/spotify/callback
   ```

3. Run both servers:

   ```bash
   # Starts the frontend at http://localhost:3000 and API at http://localhost:3001
   npm run dev
   ```

4. Open `http://localhost:3000`

## Spotify Setup

1. Create an app in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Add `http://127.0.0.1:3001/api/spotify/callback` to Redirect URIs
3. Copy Client ID and Secret into `.env.local`

## Deployment

```bash
# Frontend
cd frontend && npm run build && vercel --prod

# Backend
vercel --prod
```

Update `frontend/.env.production` with the deployed API URL.

---

Built by [Tanuj Patel](https://www.tanujpatel.design/) · MIT License
