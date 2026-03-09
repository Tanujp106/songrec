import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { MoodPicker, MOOD_COLORS } from "./components/MoodDial";
import { PopularitySlider } from "./components/PopularitySlider";
import { LoadingScreen } from "./components/LoadingScreen";
import { SongResult } from "./components/SongResult";
import {
  fetchAllMoodImages,
  fetchRecommendation,
  preloadImageFiles,
  type SongRecommendation,
} from "./lib/api";
import { Agentation } from "agentation";

const DEFAULT_FROM = "#5A54F2";

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
  const [albumImagesMood, setAlbumImagesMood] = useState<string | null>(null);
  const [dialNudge, setDialNudge] = useState(false);
  const [btnShake, setBtnShake] = useState(false);
  const appDial = {
    bgTransitionDuration: 0.5,
    bgBrightnessOffset: 0.22,
    screenFadeDuration: 0.6,
  };
  const morphDial = {
    startRadius: 999,
    endRadius: 32,
    spring: {
      type: "spring" as const,
      stiffness: 120,
      damping: 24,
      mass: 1,
    },
  };

  const handleMoodConfirmed = useCallback((moodName: string | null) => {
    setConfirmedMood(moodName);
  }, []);

  const colors = confirmedMood && MOOD_COLORS[confirmedMood]
    ? MOOD_COLORS[confirmedMood]
    : { from: DEFAULT_FROM, to: DEFAULT_FROM };

  // Popularity 0 (underrated) → slightly lighter, 3 (popular) → full saturated color
  const brightnessFactor = 1.2 - (popularity / 3) * 0.2;
  const accentColor = adjustBrightness(colors.from, brightnessFactor);
  const bgFromColor = adjustBrightness(colors.from, brightnessFactor);
  const bgToColor = adjustBrightness(colors.from, brightnessFactor + appDial.bgBrightnessOffset);

  // Unique key per mood so AnimatePresence crossfades between moods
  const bgKey = confirmedMood ?? "__default__";

  // ── A: Pre-fetch ALL mood images on mount ──
  const imageCache = useRef<Map<string, string[]>>(new Map());
  const [albumImages, setAlbumImages] = useState<string[]>([]);
  const preloadedMoodRef = useRef<string | null>(null);

  // Fire all 8 mood image fetches on app mount — runs once
  useEffect(() => {
    fetchAllMoodImages(80).then((map) => {
      imageCache.current = map;
      // If user already picked a mood before fetch finished, apply it now
      if (confirmedMood && map.has(confirmedMood)) {
        setAlbumImages(map.get(confirmedMood)!);
        setAlbumImagesMood(confirmedMood);
      }
    }).catch(() => undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── C: Priority-preload first 20 images when mood is confirmed ──
  useEffect(() => {
    if (!confirmedMood) return;
    if (preloadedMoodRef.current === confirmedMood) return;

    const cached = imageCache.current.get(confirmedMood);
    if (cached && cached.length > 0) {
      setAlbumImages(cached);
      setAlbumImagesMood(confirmedMood);
      // Priority-preload first 20 files, rest fire-and-forget
      preloadImageFiles(cached, 20);
      preloadedMoodRef.current = confirmedMood;
    }
  }, [confirmedMood]);

  const handleRecommend = useCallback(async () => {
    if (!confirmedMood) return;
    const mood = confirmedMood;
    const sliderValue = Math.round((popularity / 3) * 100);
    setSong(null);
    setScreen("loading");

    // Set to desired delay for testing (e.g., 2000 = 2s), 3500 for production
    const LOADING_DELAY = import.meta.env.DEV ? 2000 : 3500;

    const minDelay = new Promise((resolve) => setTimeout(resolve, LOADING_DELAY));

    // Images should already be in cache from mount fetch.
    // If not yet in state (race condition), pull from cache now.
    if (albumImagesMood !== mood || albumImages.length === 0) {
      const cached = imageCache.current.get(mood);
      if (cached && cached.length > 0) {
        setAlbumImages(cached);
        setAlbumImagesMood(mood);
        preloadImageFiles(cached, 20);
      }
    }

    const result = await fetchRecommendation(mood, sliderValue);
    setSong(result);
    await minDelay;
    setScreen("result");
  }, [confirmedMood, popularity, albumImagesMood, albumImages.length]);

  const handleStartOver = () => {
    setScreen("mood");
    setSong(null);
    // Don't clear albumImages — they're cached in imageCache ref
    // and will be re-applied when user picks a mood
  };

  return (
    <div
      className="relative overflow-hidden flex flex-col items-center justify-between font-['Inter',sans-serif]"
      style={{ minHeight: "100dvh", height: "100dvh" }}
    >
      {import.meta.env.DEV ? <Agentation /> : null}

      {/* Background gradient layers — crossfade between moods */}
      <AnimatePresence>
        <motion.div
          key={bgKey}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: appDial.bgTransitionDuration, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Live background that responds to slider brightness */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: `linear-gradient(to bottom, ${bgFromColor}, ${bgToColor})`,
        }}
        transition={{ duration: appDial.bgTransitionDuration, ease: "easeInOut" }}
      />

      {/* Main Container */}
      <main
        className="relative z-10 w-full flex flex-col items-center justify-between px-[24px] pt-[calc(16px+env(safe-area-inset-top))] pb-[calc(16px+env(safe-area-inset-bottom))] overflow-hidden"
        style={{ height: "100dvh", gap: "clamp(8px, 1.5svh, 24px)" }}
      >

        {/* Header — always visible */}
        <header className="w-full flex justify-between items-center text-white font-['Spectral',serif] tracking-wide shrink-0" style={{ fontSize: "clamp(15px, 2.4svh, 18px)" }}>
          <span>songrec</span>
          <span>curated by tanuj</span>
        </header>

        {/* Screen content with crossfade transitions */}
        <LayoutGroup>
          <div className="relative flex-1 w-full">
            <AnimatePresence mode="sync">
              {screen === "mood" && (
                <motion.div
                  key="mood-screen"
                  className="absolute inset-0 flex flex-col items-center justify-between w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: appDial.screenFadeDuration, ease: "easeInOut" }}
                >
                  <div className="w-full max-w-[400px] mx-auto flex flex-col items-center justify-between flex-1">
                    {/* Content Area */}
                    <div className="flex-1 flex flex-col items-center justify-center w-full mx-[0px] mt-[16px] mb-[0px]">
                      <MoodPicker
                        onMoodConfirmed={handleMoodConfirmed}
                        accentColor={accentColor}
                        selectedMood={confirmedMood}
                        nudge={dialNudge}
                      />
                    </div>

                    {/* Bottom Controls */}
                    <div className="w-full flex flex-col items-center" style={{ gap: "clamp(12px, 2svh, 16px)", marginTop: "clamp(12px, 2svh, 16px)", marginBottom: "clamp(4px, 0.8svh, 8px)" }}>
                      <PopularitySlider accentColor={accentColor} onValueChange={setPopularity} />

                      <motion.button
                        className="w-full text-white font-medium rounded-full transition-shadow duration-300 active:scale-[0.98] cursor-pointer"
                        style={{
                          fontSize: "clamp(15px, 2.6svh, 18px)",
                          padding: "clamp(10px, 1.8svh, 14px) 0",
                          opacity: confirmedMood ? 1 : 0.55,
                          cursor: confirmedMood ? "pointer" : "not-allowed",
                        }}
                        animate={{
                          backgroundColor: accentColor,
                          boxShadow: `0 4px 12px ${accentColor}4D`,
                          x: btnShake ? [0, -8, 8, -6, 6, -3, 3, 0] : 0,
                        }}
                        transition={{
                          duration: 0.8,
                          ease: "easeInOut",
                          x: { duration: 0.5, ease: "easeInOut" },
                        }}
                        onClick={() => {
                          if (!confirmedMood) {
                            setBtnShake(true);
                            setDialNudge(true);
                            setTimeout(() => {
                              setBtnShake(false);
                              setDialNudge(false);
                            }, 800);
                            return;
                          }
                          handleRecommend();
                        }}
                        aria-disabled={!confirmedMood}
                      >
                        Recommend
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}

              {screen === "loading" && (
                <motion.div
                  key="loading-screen"
                  className="absolute inset-0 flex flex-col items-center w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeOut" } }}
                  transition={{ duration: appDial.screenFadeDuration, ease: "easeIn" }}
                >
                  <LoadingScreen
                    mood={confirmedMood || "indie"}
                    popularity={String(popularity)}
                    images={albumImages}
                    highlightImageUrl={song?.album_image ?? null}
                    morph={morphDial}
                  />
                </motion.div>
              )}

              {screen === "result" && (
                <motion.div
                  key="result-screen"
                  className="absolute inset-0 flex flex-col items-center w-full"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: appDial.screenFadeDuration, ease: "easeOut" }}
                >
                  <div className="w-full max-w-[400px] mx-auto flex flex-col items-center flex-1">
                    <SongResult
                      mood={confirmedMood || "indie"}
                      popularity={popularity}
                      accentColor={accentColor}
                      onStartOver={handleStartOver}
                      song={song}
                      morph={morphDial}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </LayoutGroup>

      </main>
    </div>
  );
}
