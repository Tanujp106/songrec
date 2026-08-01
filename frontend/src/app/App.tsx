import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { MoodPicker, MOOD_COLORS, entranceProps } from "./components/MoodDial";
import { PopularitySlider } from "./components/PopularitySlider";
import { LoadingScreen } from "./components/LoadingScreen";
import { SongResult } from "./components/SongResult";
import { getResultScreenLayout } from "./lib/carousel";
import {
  fetchAllMoodImages,
  fetchRecommendations,
  preloadImageFiles,
  type SongRecommendation,
} from "./lib/api";
import { Agentation } from "agentation";
import { Analytics } from "@vercel/analytics/react";
import { createRequestGuard } from "./lib/request-guard";
import { DialRoot } from "dialkit";

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

function mixHex(a: string, b: string, ratio: number): string {
  const t = Math.max(0, Math.min(1, ratio));
  const aR = parseInt(a.slice(1, 3), 16);
  const aG = parseInt(a.slice(3, 5), 16);
  const aB = parseInt(a.slice(5, 7), 16);
  const bR = parseInt(b.slice(1, 3), 16);
  const bG = parseInt(b.slice(3, 5), 16);
  const bB = parseInt(b.slice(5, 7), 16);
  const toHex = (v: number) => Math.round(v).toString(16).padStart(2, "0");
  return `#${toHex(aR + (bR - aR) * t)}${toHex(aG + (bG - aG) * t)}${toHex(aB + (bB - aB) * t)}`;
}

function DevTools() {
  return import.meta.env.DEV ? <DialRoot /> : null;
}

export default function App() {
  const [confirmedMood, setConfirmedMood] = useState<string | null>(null);
  const [popularity, setPopularity] = useState(0); // 0–3
  const [screen, setScreen] = useState<Screen>("mood");
  const [songs, setSongs] = useState<SongRecommendation[]>([]);
  const resultScreenLayout = getResultScreenLayout();
  const [albumImagesMood, setAlbumImagesMood] = useState<string | null>(null);
  const [dialNudge, setDialNudge] = useState(false);
  const [btnShake, setBtnShake] = useState(false);
  const [isRecommending, setIsRecommending] = useState(false);
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
  const browserThemeColor = mixHex(bgFromColor, bgToColor, 0.5);

  const effectiveMood = confirmedMood ?? "indie";

  const moodTitle = effectiveMood
    ? `songrec — ${effectiveMood}`
    : "songrec";

  const moodDescription = effectiveMood
    ? `songrec picks a ${effectiveMood} track for you based on your mood and popularity slider.`
    : "songrec — mood-based music recommendations tailored to your vibe.";

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.style.setProperty("--app-bg-from", bgFromColor);
    root.style.setProperty("--app-bg-to", bgToColor);
    const themeMeta = document.querySelector("meta[name='theme-color']");
    if (themeMeta) {
      themeMeta.setAttribute("content", browserThemeColor);
    }

    // Title + description
    document.title = moodTitle;
    const descMeta = document.querySelector("meta[name='description']");
    if (descMeta) {
      descMeta.setAttribute("content", moodDescription);
    }

    // Dynamic favicon (SVG data URI)
    const faviconSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='16' ry='16' fill='${bgFromColor}'/><circle cx='32' cy='32' r='18' fill='rgba(255,255,255,0.9)'/><circle cx='26' cy='28' r='3' fill='#2a2a2a'/><circle cx='38' cy='28' r='3' fill='#2a2a2a'/><path d='M22 38 Q32 45 42 38' stroke='#2a2a2a' stroke-width='3.5' fill='none' stroke-linecap='round'/></svg>`;
    const faviconUrl = `data:image/svg+xml;utf8,${encodeURIComponent(faviconSvg)}`;
    const iconLink = document.querySelector<HTMLLinkElement>("link[rel='icon']");
    if (iconLink) {
      iconLink.setAttribute("href", faviconUrl);
    }

    const appleTouch = document.querySelector<HTMLLinkElement>("link[rel='apple-touch-icon']");
    if (appleTouch) {
      appleTouch.setAttribute("href", faviconUrl);
    }
  }, [bgFromColor, bgToColor, browserThemeColor]);

  // Unique key per mood so AnimatePresence crossfades between moods
  const bgKey = confirmedMood ?? "__default__";

  // ── A: Pre-fetch ALL mood images on mount ──
  const imageCache = useRef<Map<string, string[]>>(new Map());
  const recommendRequestGuard = useRef(createRequestGuard());
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
    const requestId = recommendRequestGuard.current.begin();
    if (requestId === null) return;

    setIsRecommending(true);

    try {
      const mood = confirmedMood;
      const sliderValue = Math.round((popularity / 3) * 100);
      setSongs([]);
      setScreen("loading");

      // 60s in dev for tuning, 2.5s in prod
      const LOADING_DELAY = import.meta.env.DEV ? 2000 : 2000;

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

      const result = await fetchRecommendations(mood, sliderValue);
      await minDelay;
      if (recommendRequestGuard.current.isCurrent(requestId)) {
        setSongs(result);
        setScreen("result");
      }
    } finally {
      if (recommendRequestGuard.current.isCurrent(requestId)) {
        recommendRequestGuard.current.release(requestId);
        setIsRecommending(false);
      }
    }
  }, [confirmedMood, popularity, albumImagesMood, albumImages.length]);

  const handleStartOver = () => {
    recommendRequestGuard.current.cancel();
    setIsRecommending(false);
    setScreen("mood");
    setSongs([]);
    // Don't clear albumImages — they're cached in imageCache ref
    // and will be re-applied when user picks a mood
  };

  return (
    <div
      className="relative overflow-hidden flex flex-col items-center justify-between font-['Inter',sans-serif]"
      style={{ minHeight: "100svh", height: "100dvh" }}
    >
      {import.meta.env.DEV ? <><Agentation /><DevTools /></> : null}

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
        className="relative z-10 w-full flex flex-col items-center justify-between pt-[calc(16px+env(safe-area-inset-top))] pb-[calc(16px+env(safe-area-inset-bottom))] overflow-hidden"
        style={{ minHeight: "100svh", height: "100dvh", gap: "clamp(8px, 1.5svh, 24px)" }}
      >

        {/* Header — always visible */}
        <motion.header
          className="w-full flex justify-between items-center text-white font-['Spectral',serif] tracking-wide shrink-0"
          style={{ fontSize: "clamp(15px, 2.4svh, 18px)", paddingInline: `${resultScreenLayout.actionInsetPx}px` }}
          {...entranceProps(0)}
        >
          <span>songrec</span>
          <span>
            curated by{" "}
            <a
              href="https://www.tanujpatel.design/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              tanuj
            </a>
          </span>
        </motion.header>

        {/* Screen content with crossfade transitions */}
        <LayoutGroup>
          <div className="relative flex-1 w-full">
            <AnimatePresence mode="sync">
              {screen === "mood" && (
                <motion.div
                  key="mood-screen"
                  className="absolute inset-0 flex flex-col items-center justify-between w-full px-[24px]"
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
                        entranceDelay={0.08}
                      />
                    </div>

                    {/* Bottom Controls */}
                    <div className="w-full flex flex-col items-center" style={{ gap: "clamp(12px, 2svh, 16px)", marginTop: "clamp(12px, 2svh, 16px)", marginBottom: "clamp(4px, 0.8svh, 8px)" }}>
                      <motion.div className="w-full" {...entranceProps(0.38)}>
                        <PopularitySlider accentColor={accentColor} onValueChange={setPopularity} />
                      </motion.div>

                      <motion.div className="w-full" {...entranceProps(0.48)}>
                        <motion.button
                          className="w-full text-white font-medium rounded-full transition-shadow duration-300 cursor-pointer"
                          style={{
                            fontSize: "clamp(15px, 2.6svh, 18px)",
                            padding: "clamp(10px, 1.8svh, 14px) 0",
                            opacity: confirmedMood && !isRecommending ? 1 : 0.55,
                            cursor: confirmedMood && !isRecommending ? "pointer" : "not-allowed",
                            WebkitTapHighlightColor: "transparent",
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
                          whileHover={confirmedMood && !isRecommending ? { scale: 1.01 } : undefined}
                          whileTap={confirmedMood && !isRecommending ? { scale: 0.98, y: 1 } : undefined}
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
                          disabled={!confirmedMood || isRecommending}
                          aria-disabled={!confirmedMood || isRecommending}
                        >
                          Recommend
                        </motion.button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}

              {screen === "loading" && (
                <motion.div
                  key="loading-screen"
                  className="absolute inset-0 flex flex-col items-center w-full px-[24px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeOut" } }}
                  transition={{ duration: appDial.screenFadeDuration, ease: "easeIn" }}
                >
                  <LoadingScreen
                    mood={confirmedMood || "indie"}
                    popularity={String(popularity)}
                    images={albumImages}
                    imagesMood={albumImagesMood}
                    highlightImageUrl={songs[0]?.album_image ?? null}
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
                  <SongResult
                    mood={confirmedMood || "indie"}
                    popularity={popularity}
                    accentColor={accentColor}
                    onStartOver={handleStartOver}
                    songs={songs}
                    morph={morphDial}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </LayoutGroup>

      </main>
      <Analytics />
    </div>
  );
}
