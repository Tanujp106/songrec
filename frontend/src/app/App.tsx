import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MoodPicker, MOOD_COLORS } from "./components/MoodDial";
import { PopularitySlider } from "./components/PopularitySlider";
import { LoadingScreen } from "./components/LoadingScreen";
import { SongResult } from "./components/SongResult";
import { fetchRecommendation, type SongRecommendation } from "./lib/api";

const DEFAULT_FROM = "#4A30F0";
const DEFAULT_TO = "#ffffff";

type Screen = "mood" | "loading" | "result";

/** Adjust a hex colour's brightness. factor < 1 darkens, > 1 brightens. */
function adjustBrightness(hex: string, factor: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const adjust = (c: number) => {
    if (factor > 1) {
      return Math.round(c + (255 - c) * (factor - 1));
    }
    return Math.round(c * factor);
  };

  const clamp = (v: number) => Math.max(0, Math.min(255, v));
  const toHex = (v: number) => clamp(v).toString(16).padStart(2, "0");

  return `#${toHex(adjust(r))}${toHex(adjust(g))}${toHex(adjust(b))}`;
}

export default function App() {
  const [confirmedMood, setConfirmedMood] = useState<string | null>(null);
  const [popularity, setPopularity] = useState(0); // 0–3
  const [screen, setScreen] = useState<Screen>("mood");
  const [song, setSong] = useState<SongRecommendation | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleMoodConfirmed = useCallback((moodName: string | null) => {
    setConfirmedMood(moodName);
  }, []);

  const colors = confirmedMood && MOOD_COLORS[confirmedMood]
    ? MOOD_COLORS[confirmedMood]
    : { from: DEFAULT_FROM, to: DEFAULT_TO };

  // Popularity 0 (underrated) → slightly lighter, 3 (popular) → full saturated color
  const brightnessFactor = 1.2 - (popularity / 3) * 0.2;
  const accentColor = adjustBrightness(colors.from, brightnessFactor);
  const bgFromColor = adjustBrightness(colors.from, brightnessFactor);

  // Unique key per mood so AnimatePresence crossfades between moods
  const bgKey = confirmedMood ?? "__default__";

  const handleRecommend = useCallback(async () => {
    const mood = confirmedMood ?? "indie";
    const sliderValue = Math.round((popularity / 3) * 100);
    setError(null);
    setSong(null);
    setScreen("loading");

    try {
      const result = await fetchRecommendation(mood, sliderValue);
      setSong(result);
      setScreen("result");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to fetch song.";
      setError(message);
      setScreen("result");
    }
  }, [confirmedMood, popularity]);

  const handleStartOver = () => {
    setScreen("mood");
    setConfirmedMood(null);
    setPopularity(0);
    setSong(null);
    setError(null);
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-between font-['Inter',sans-serif]">

      {/* Background gradient layers — crossfade between moods */}
      <AnimatePresence>
        <motion.div
          key={bgKey}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Live background that responds to slider brightness */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: `linear-gradient(to bottom, ${bgFromColor}, ${colors.to})`,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.35] mix-blend-overlay pointer-events-none z-[1]" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      
      {/* Main Container */}
      <main className="relative z-10 w-full max-w-[400px] min-h-[100dvh] flex flex-col items-center justify-between px-6 py-6 mx-auto">
        
        {/* Header — always visible */}
        <header className="w-full flex justify-between items-center text-white/90 font-['Spectral',serif] text-[18px] tracking-wide mt-1 shrink-0">
          <span className="text-[#ffffff] text-[18px]">songrec</span>
          <span className="text-white/90 text-[18px] text-[#ffffff]">curated by tanuj</span>
        </header>

        {/* Screen content with crossfade transitions */}
        <AnimatePresence mode="wait">
          {screen === "mood" && (
            <motion.div
              key="mood-screen"
              className="flex-1 flex flex-col items-center justify-between w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* Content Area */}
              <div className="flex-1 flex flex-col items-center justify-center w-full mx-[0px] mt-[16px] mb-[0px]">
                <MoodPicker onMoodConfirmed={handleMoodConfirmed} accentColor={accentColor} />
              </div>

              {/* Bottom Controls */}
              <div className="w-full flex flex-col items-center gap-4 mt-4 mb-2">
                <PopularitySlider accentColor={accentColor} onValueChange={setPopularity} />
                
                <motion.button
                  className="w-full text-white text-[18px] font-medium py-[14px] rounded-full transition-shadow duration-300 active:scale-[0.98] cursor-pointer"
                  animate={{
                    backgroundColor: accentColor,
                    boxShadow: `0 4px 12px ${accentColor}4D`,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  onClick={handleRecommend}
                >
                  Recommend
                </motion.button>
              </div>
            </motion.div>
          )}

          {screen === "loading" && (
            <motion.div
              key="loading-screen"
              className="flex-1 flex flex-col items-center justify-center w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <LoadingScreen mood={confirmedMood || "indie"} popularity={String(popularity)} />
            </motion.div>
          )}

          {screen === "result" && (
            <motion.div
              key="result-screen"
              className="flex-1 flex flex-col items-center justify-between w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <SongResult
                mood={confirmedMood || "indie"}
                popularity={popularity}
                accentColor={accentColor}
                onStartOver={handleStartOver}
                song={song}
                error={error}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </main>
    </div>
  );
}
