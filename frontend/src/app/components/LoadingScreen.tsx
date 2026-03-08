import React, { useMemo, useState, useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";
import { useDialKit } from "dialkit";
import { toThumb } from "@/app/lib/api";
import imgAlbum from "@/assets/256b80c8e3feddbc7d9121f96f8a5007c5f523ae.png";

interface LoadingScreenProps {
  mood: string;
  popularity: string;
  images?: string[];
  highlightImageUrl?: string | null;
  morph: {
    startRadius: number;
    endRadius: number;
    spring: {
      type: "spring";
      stiffness: number;
      damping: number;
      mass: number;
    };
  };
}

const COLS = 7;
const MAX_ROWS = 11;
const MAX_TILES = COLS * MAX_ROWS;

function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

/* ── B: ProgressiveImage — shows placeholder until image loads ── */
function ProgressiveImage({
  src,
  alt = "",
  className,
  style,
}: {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [loaded, setLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Check if already cached by the browser
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  // Reset loaded state when src changes
  useEffect(() => {
    setLoaded(false);
    setCurrentSrc(src);
  }, [src]);

  return (
    <>
      {/* Placeholder — subtle shimmer until image loads */}
      {!loaded && (
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "rgba(255,255,255,0.08)",
            animation: "pulse 1.5s ease-in-out infinite",
          }}
        />
      )}
      <img
        ref={imgRef}
        alt={alt}
        className={className}
        src={currentSrc}
        loading="eager"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (currentSrc !== imgAlbum) {
            setCurrentSrc(imgAlbum);
          }
        }}
        style={{
          ...style,
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </>
  );
}

/* ── CyclingTile — swaps image with blur-out / scale-in transition ── */
function CyclingTile({
  initialSrc,
  imagePool,
  startDelay,
  introDelay,
  config,
}: {
  initialSrc: string;
  imagePool: string[];
  startDelay: number;
  introDelay: number;
  config: {
    cycleMin: number;
    cycleJitter: number;
    hideDuration: number;
    showDuration: number;
    hideScale: number;
    showScale: number;
    hideOpacity: number;
    hideBlur: number;
    showBlur: number;
    swapDelay: number;
    settleDelay: number;
    introOpacity: number;
    introScale: number;
    introBlur: number;
    introDuration: number;
  };
}) {
  const [src, setSrc] = useState(initialSrc);
  const [phase, setPhase] = useState<"intro" | "visible" | "hiding" | "showing">("intro");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const innerTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const doSwap = useCallback(() => {
    setPhase("hiding");
    // Swap image at peak blur (when hiding animation completes)
    innerTimerRef.current = setTimeout(() => {
      const next =
        imagePool.length > 0
          ? imagePool[Math.floor(Math.random() * imagePool.length)]
          : initialSrc ?? imgAlbum;
      setSrc(next);
      setPhase("showing");
      innerTimerRef.current = setTimeout(() => {
        setPhase("visible");
        // Schedule NEXT swap after cycleMin wait
        const interval = config.cycleMin + Math.random() * config.cycleJitter;
        timerRef.current = setTimeout(doSwap, interval);
      }, config.settleDelay);
    }, config.hideDuration * 1000);
  }, [imagePool, config, initialSrc]);

  // Transition from "intro" to "visible" after intro animation completes
  useEffect(() => {
    if (phase === "intro") {
      const t = setTimeout(() => setPhase("visible"), (config.introDuration + introDelay) * 1000 + 50);
      return () => clearTimeout(t);
    }
  }, [phase, config.introDuration, introDelay]);

  useEffect(() => {
    // startDelay is the ONLY wait before the first swap
    const delay = setTimeout(doSwap, startDelay);
    return () => {
      clearTimeout(delay);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (innerTimerRef.current) clearTimeout(innerTimerRef.current);
    };
  }, [startDelay, doSwap]);

  return (
    <motion.div
      className="relative rounded-full shrink-0 size-[60px] overflow-hidden"
      initial={{
        opacity: config.introOpacity,
        scale: config.introScale,
        filter: `blur(${config.introBlur}px)`
      }}
      animate={{
        scale: phase === "hiding" ? config.hideScale : phase === "showing" ? config.showScale : 1,
        opacity: phase === "hiding" ? config.hideOpacity : 1,
        filter: phase === "hiding" ? `blur(${config.hideBlur}px)` : phase === "showing" ? `blur(${config.showBlur}px)` : "blur(0px)",
      }}
      transition={{
        duration: phase === "intro" ? config.introDuration : phase === "hiding" ? config.hideDuration : phase === "showing" ? config.showDuration : 0.3,
        ease: [0.4, 0, 0.2, 1],
        delay: phase === "intro" ? introDelay : 0,
      }}
    >
      <ProgressiveImage
        src={src ?? imgAlbum}
        className="absolute inset-0 max-w-none object-cover size-full"
        style={{
          filter: "drop-shadow(0px 8px 14px rgba(19,15,41,0.35))",
        }}
      />
    </motion.div>
  );
}

/* ── LoadingScreen ── */
export function LoadingScreen({
  mood,
  popularity,
  images = [],
  highlightImageUrl,
  morph,
}: LoadingScreenProps) {
  const dial = useDialKit("Loading Screen", {
    grid: {
      introBlur: [3, 0, 40],
      introScale: [0.8, 0.7, 1.1],
      introDuration: [2, 0.4, 3],
      introOpacity: [1, 0, 1],
    },
    tile: {
      // Wait between subsequent swaps (after the first one)
      cycleMin: [4000, 1000, 12000],
      cycleJitter: [2000, 0, 4000],
      hideDuration: [0.7, 0.1, 1.5],
      showDuration: [1.2, 0.1, 2],
      hideScale: [0.85, 0.4, 1],
      showScale: [1.08, 0.9, 1.4],
      hideOpacity: [0.1, 0, 1],
      hideBlur: [5, 0, 24],
      showBlur: [0, 0, 12],
      swapDelay: [1220, 100, 2000],
      settleDelay: [320, 100, 1200],

      // Intro animation (row-by-row)
      introOpacity: [0, 0, 1],
      introScale: [0.85, 0.3, 1],
      introBlur: [6, 0, 20],
      introDuration: [0.5, 0.1, 1.2],
      introDelayPerTile: [0.1, 0, 0.3],
      introDelayJitter: [0.4, 0, 0.8],

      // How soon the first tile starts its first swap (ms)
      cycleStartMin: [800, 200, 2000],
      // Total stagger window — tiles spread their first swap across this range (ms)
      cycleStartSpread: [6000, 2000, 15000],
    },
    hero: {
      size: [56, 40, 90],
      spring: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        mass: 1,
      },
      // Hero intro animation
      introOpacity: [0, 0, 1],
      introScale: [0.6, 0.3, 1],
      introBlur: [8, 0, 20],
      introDuration: [0.3, 0.1, 1],
    },
    copy: {
      titleDelay: [0.3, 0, 1],
      titleDuration: [0.9, 0.2, 1.5],
    },
  });

  const { rows, hero, imagePool } = useMemo(() => {
    const normalizedImages = images.filter(Boolean);
    const uniqueImages = Array.from(new Set(normalizedImages));
    const highlight = highlightImageUrl ?? null;
    const highlightThumb = highlight ? toThumb(highlight) : null;
    const pool = uniqueImages.filter((img) => img !== highlightThumb);
    const shuffled = [...pool].sort(() => Math.random() - 0.5);

    let expanded = shuffled.slice(0, MAX_TILES);
    if (expanded.length === 0) expanded = [imgAlbum];

    // If we need more images, distribute repeats evenly across the grid
    if (expanded.length < MAX_TILES) {
      const base = [...expanded];
      const needed = MAX_TILES - expanded.length;
      const repeatsPerImage = Math.ceil(needed / base.length);

      // Create a distributed repeat pattern
      const repeats: string[] = [];
      for (let r = 0; r < repeatsPerImage; r++) {
        const shuffledBase = [...base].sort(() => Math.random() - 0.5);
        repeats.push(...shuffledBase);
      }

      expanded.push(...repeats.slice(0, needed));
      // Final shuffle to distribute repeats
      expanded = expanded.sort(() => Math.random() - 0.5);
    }

    const chunked: string[][] = [];
    for (let i = 0; i < expanded.length; i += COLS) {
      const row = expanded.slice(i, i + COLS);
      if (row.length === 0) break;
      chunked.push(row);
      if (chunked.length >= MAX_ROWS) break;
    }

    if (chunked.length === 0) chunked.push([imgAlbum]);

    let heroRowIndex = 0;
    let heroColIndex = 0;
    if (highlightThumb) {
      const seed = hashString(highlightThumb);
      heroRowIndex = seed % chunked.length;
      heroColIndex = Math.min(
        Math.floor(seed / chunked.length) % COLS,
        COLS - 1
      );
      const targetRow = chunked[heroRowIndex] ?? [];
      if (!targetRow.includes(highlightThumb)) {
        targetRow[heroColIndex] = highlightThumb;
      }
      chunked[heroRowIndex] = targetRow;
    }

    return {
      rows: chunked,
      hero: highlightThumb
        ? { rowIndex: heroRowIndex, colIndex: heroColIndex, url: highlightThumb }
        : null,
      imagePool: shuffled.length > 0 ? shuffled : [imgAlbum],
    };
  }, [images, highlightImageUrl]);

  return (
    <div className="w-screen flex flex-col items-center flex-1 pt-[24px]">
      {/* Shimmer keyframe (injected once) */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>

      {/* Title text */}
      <motion.p
        className="font-['Spectral',serif] text-[24px] text-center text-white leading-[28px] w-full px-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: dial.copy.titleDuration, delay: dial.copy.titleDelay }}
      >
        Recommending the perfect one from our hand picked collection
      </motion.p>

      {/* Album art grid */}
      <motion.div
        className="flex-1 w-screen flex flex-col justify-evenly gap-[12px] mt-[48px] pb-6 pointer-events-none"
        style={{
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        {rows.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="relative w-screen flex justify-center h-[72px]"
          >
            <div className="flex gap-[18px] justify-center">
              {row.map((src, colIndex) => {
                const isHero =
                  hero &&
                  rowIndex === hero.rowIndex &&
                  colIndex === hero.colIndex;

                // Row-by-row appearance with visible blur sweep
                const introDelay = rowIndex * 0.04; // ~0.44s total for all 11 rows

                if (isHero) {
                  return (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className="relative rounded-full shrink-0 overflow-visible"
                      style={{ width: dial.hero.size, height: dial.hero.size }}
                    >
                      <motion.div
                        className="absolute inset-0 overflow-hidden"
                        layoutId="song-album"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ borderRadius: morph.startRadius }}
                        transition={{
                          layout: {
                            ...morph.spring,
                          },
                          opacity: { duration: 0.4, delay: introDelay },
                          scale: { duration: 0.4, delay: introDelay },
                        }}
                      >
                        <ProgressiveImage
                          src={src ?? imgAlbum}
                          className="absolute inset-0 max-w-none object-cover size-full"
                        />
                      </motion.div>
                    </div>
                  );
                }

                // Stagger start times evenly across all tiles
                const tileIndex = rowIndex * COLS + colIndex;
                const totalNonHero = rows.reduce((s, r) => s + r.length, 0) - (hero ? 1 : 0);
                const startDelay = dial.tile.cycleStartMin
                  + (tileIndex / Math.max(1, totalNonHero - 1)) * dial.tile.cycleStartSpread
                  + Math.random() * 500;

                return (
                  <CyclingTile
                    key={`${rowIndex}-${colIndex}`}
                    initialSrc={src}
                    imagePool={imagePool}
                    startDelay={startDelay}
                    introDelay={introDelay}
                    config={dial.tile}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
