# 🎵 songrec

A mood-based music recommendation app that curates personalized song picks from a handpicked collection. Built with Next.js, React, and Spotify API.

![songrec](https://img.shields.io/badge/songrec-music%20recommendations-5A54F2)

## ✨ Features

- **Mood-Based Selection** — Choose from 8 different moods (indie, party, love, chill, energetic, focus, sad, hiphop)
- **Popularity Slider** — Fine-tune recommendations from underrated gems to mainstream hits
- **Smooth Animations** — Polished UI with Framer Motion transitions and entrance effects
- **Interactive Album Art** — 3D tilt effect with cursor/finger tracking and holographic glossy reflection
- **Gyroscope Parallax** — Mobile devices tilt the album art based on device orientation
- **Dynamic Loading Grid** — Animated album tile grid with continuous swapping during loading
- **Spotify Integration** — Add recommended songs directly to your Spotify library

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- Spotify Developer Account (for API credentials)
- Supabase project (for database)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Tanujp106/songrec.git
   cd songrec
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   npm install

   # Install frontend dependencies
   cd frontend
   npm install
   cd ..
   ```

3. **Set up environment variables**

   Create `.env.local` in the root directory:
   ```env
   # Spotify API
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret

   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development servers**

   In two separate terminals:

   **Terminal 1 - Backend (Next.js API)**
   ```bash
   npm run dev
   # Runs on http://localhost:3000
   ```

   **Terminal 2 - Frontend (Vite)**
   ```bash
   cd frontend
   npm run dev
   # Runs on http://localhost:5173
   ```

5. **Open the app**

   Navigate to `http://localhost:5173` in your browser.

## 🎨 Tech Stack

### Frontend
- **React 18** — UI library
- **Vite** — Build tool and dev server
- **Framer Motion** — Animation library
- **Tailwind CSS** — Utility-first CSS framework
- **TypeScript** — Type safety

### Backend
- **Next.js 15** — API routes and server functions
- **Spotify Web API** — Music data and recommendations
- **Supabase** — Database for storing song metadata

## 📁 Project Structure

```
songrec/
├── src/
│   └── app/
│       └── api/
│           └── get-song/     # Spotify API integration
├── frontend/
│   └── src/
│       ├── app/
│       │   ├── components/   # React components
│       │   │   ├── MoodDial.tsx
│       │   │   ├── PopularitySlider.tsx
│       │   │   ├── LoadingScreen.tsx
│       │   │   └── SongResult.tsx
│       │   ├── lib/
│       │   │   └── api.ts    # API client
│       │   └── App.tsx       # Main app component
│       └── index.html
└── README.md
```

## 🎮 How It Works

1. **Select a Mood** — Spin the mood dial to choose your current vibe
2. **Adjust Popularity** — Use the slider to pick between underground tracks and popular hits
3. **Get Recommendation** — Click "Recommend" to fetch a perfect match
4. **Interactive Experience** — Tilt your device or move your cursor over the album art
5. **Save to Spotify** — One-click to add the song to your Spotify library

## 🔧 Configuration

### Spotify API Setup

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new app
3. Add `http://localhost:5173` to Redirect URIs
4. Copy Client ID and Client Secret to `.env.local`

### Supabase Setup

1. Create a new project at [Supabase](https://supabase.com)
2. Copy the project URL and anon key to `.env.local`
3. Set up your database schema (tables for songs, moods, etc.)

## 🎯 Key Interactions

### 3D Tilt Effect
- **Desktop**: Hover over album art with mouse
- **Mobile**: Touch and drag on album art
- Creates realistic depth with dynamic shadows and glossy reflection

### Gyroscope Parallax (Mobile)
- Automatically activates on mobile devices
- Subtle floating effect based on device tilt
- Respects `prefers-reduced-motion` settings

### Loading Animation
- 63-tile grid (7×9) with staggered blur-in entrance
- Continuous random tile swapping during loading
- Deterministic hero tile morphs to final result

## 🚢 Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
vercel --prod
```

### Backend (Vercel)
```bash
vercel --prod
```

Update frontend `.env.production` with deployed API URL.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Tanuj Patel**
- Website: [tanujpatel.design](https://www.tanujpatel.design/)
- GitHub: [@Tanujp106](https://github.com/Tanujp106)

---

Built with ❤️ by Tanuj
