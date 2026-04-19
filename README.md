# songrec

Mood-based music recommendations from a handpicked Spotify collection. Pick a vibe, tune the popularity slider, get a track.

## Features

- Pick a mood and adjust a popularity slider to get a song recommendation
- Save recommended tracks directly to your Spotify library

## Stack

**Frontend** — React 18, Vite, TypeScript, Tailwind CSS, Framer Motion  
**Backend** — Next.js 15 API routes, Spotify Web API, Supabase

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
   NEXT_PUBLIC_SUPABASE_URL=
   NEXT_PUBLIC_SUPABASE_ANON_KEY=
   ```

3. Run both servers:

   ```bash
   # Terminal 1 — API (localhost:3000)
   npm run dev

   # Terminal 2 — Frontend (localhost:5173)
   cd frontend && npm run dev
   ```

4. Open `http://localhost:5173`

## Spotify Setup

1. Create an app in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Add `http://localhost:5173` to Redirect URIs
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
