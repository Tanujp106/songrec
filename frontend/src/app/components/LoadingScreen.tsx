import React, { useMemo, useState, useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";
import { getLoadingImagePool } from "../lib/detail-motion";

interface LoadingScreenProps {
  mood: string;
  popularity: string;
  images?: string[];
  imagesMood?: string | null;
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

type PerfProfile = {
  cols: number;
  rows: number;
  tileSize: number;
  tileGap: number;
  rowGap: number;
  titleDelay: number;
  titleDuration: number;
  gridIntroDuration: number;
  gridIntroBlur: number;
  enableCycling: boolean;
  /** ms between individual tile swaps */
  swapIntervalMs: number;
  /** random variance around swap interval in ms */
  swapJitterMs: number;
  /** how many tiles swap per interval */
  swapsPerTick: number;
  /** ms for shrink phase (blur+scale down) */
  shrinkMs: number;
  /** ms for grow phase (unblur+scale up) */
  growMs: number;
  heroSize: number;
};

const FULL_PROFILE: PerfProfile = {
  cols: 7,
  rows: 9,
  tileSize: 56,
  tileGap: 14,
  rowGap: 10,
  titleDelay: 0.15,
  titleDuration: 0.55,
  gridIntroDuration: 0.9,
  gridIntroBlur: 18,
  enableCycling: true,
  swapIntervalMs: 380,
  swapJitterMs: 100,
  swapsPerTick: 1,
  shrinkMs: 220,
  growMs: 260,
  heroSize: 58,
};

const LITE_PROFILE: PerfProfile = {
  cols: 5,
  rows: 7,
  tileSize: 46,
  tileGap: 10,
  rowGap: 8,
  titleDelay: 0.1,
  titleDuration: 0.45,
  gridIntroDuration: 0.85,
  gridIntroBlur: 16,
  enableCycling: true,
  swapIntervalMs: 450,
  swapJitterMs: 120,
  swapsPerTick: 1,
  shrinkMs: 200,
  growMs: 240,
  heroSize: 50,
};

function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

const ProgressiveImage = React.memo(function ProgressiveImage({
  src,
  alt,
  className,
  loading = "eager",
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  style?: React.CSSProperties;
}) {
  const [loaded, setLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  useEffect(() => {
    setLoaded(false);
    setCurrentSrc(src);
  }, [src]);

  return (
    <>
      {!loaded && (
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "rgba(255,255,255,0.08)",
            animation: "pulse 1.6s ease-in-out infinite",
          }}
        />
      )}
      <img
        ref={imgRef}
        alt={alt}
        className={className}
        src={currentSrc}
        loading={loading}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        style={{
          ...style,
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.22s ease",
        }}
      />
    </>
  );
});

export function LoadingScreen({
  mood,
  popularity,
  images = [],
  imagesMood = null,
  highlightImageUrl,
  morph,
}: LoadingScreenProps) {
  const [isLowPerf, setIsLowPerf] = useState(false);
  // Per-tile state: src is the displayed image, phase controls the animation
  const [tileStates, setTileStates] = useState<Map<number, { src: string; phase: 'idle' | 'shrinking' | 'growing' }>>(new Map());
  const recentSwapIndicesRef = useRef<number[]>([]);
  const swapTimersRef = useRef<number[]>([]);
  const tileStatesRef = useRef(tileStates);
  tileStatesRef.current = tileStates;
  const lastImagesKeyRef = useRef<string | null>(null);
  const frozenMoodRef = useRef<string | null>(null);
  const [frozenImages, setFrozenImages] = useState<string[]>(() => {
    if (imagesMood === mood && images.length > 0) {
      const initial = Array.from(new Set(images.filter(Boolean))).sort();
      if (initial.length > 0) {
        frozenMoodRef.current = mood;
        return initial;
      }
    }
    return [];
  });

  useEffect(() => {
    const nav = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean };
    };

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = nav.connection?.saveData === true;
    const lowMemory = typeof nav.deviceMemory === "number" && nav.deviceMemory <= 2;
    const lowCores = typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency <= 2;

    setIsLowPerf(reducedMotion || saveData || (lowMemory && lowCores));
  }, []);

  const baseProfile = isLowPerf ? LITE_PROFILE : FULL_PROFILE;

  const profile: PerfProfile = {
    ...baseProfile,
  };

  const maxTiles = profile.cols * profile.rows;

  const baseImages = useMemo(
    () => getLoadingImagePool(images, imagesMood, mood),
    [images, imagesMood, mood]
  );

  useEffect(() => {
    if (imagesMood !== mood) {
      frozenMoodRef.current = null;
      if (frozenImages.length > 0) {
        setFrozenImages([]);
      }
      return;
    }
    if (baseImages.length === 0) return;
    if (frozenMoodRef.current !== mood || frozenImages.length === 0) {
      frozenMoodRef.current = mood;
      setFrozenImages(baseImages);
    }
  }, [baseImages, mood, imagesMood, frozenImages.length]);

  // Stable key derived from image content — only reshuffle when actual URLs change
  const imagesKey = useMemo(() => frozenImages.join('\0'), [frozenImages]);

  const gridDataRef = useRef<{
    rows: string[][];
    hero: { rowIndex: number; colIndex: number } | null;
    imagePool: string[];
    key: string;
    cols: number;
    maxTiles: number;
  } | null>(null);

  if (
    !gridDataRef.current ||
    gridDataRef.current.key !== imagesKey ||
    gridDataRef.current.cols !== profile.cols ||
    gridDataRef.current.maxTiles !== maxTiles
  ) {
    const basePool = frozenImages;

    const shuffledBase = [...basePool].sort(() => Math.random() - 0.5);
    const expanded: string[] = [];

    for (let i = 0; i < maxTiles; i += 1) {
      expanded.push(shuffledBase.length > 0 ? shuffledBase[i % shuffledBase.length] : "");
    }

    const chunked: string[][] = [];
    for (let i = 0; i < expanded.length; i += profile.cols) {
      const row = expanded.slice(i, i + profile.cols);
      if (row.length === 0) break;
      chunked.push(row);
      if (chunked.length >= profile.rows) break;
    }

    let heroRowIndex = 0;
    let heroColIndex = 0;

    const seed = hashString(imagesKey.length > 0 ? imagesKey : "seed");
    heroRowIndex = seed % chunked.length;
    heroColIndex = Math.min(
      Math.floor(seed / Math.max(1, chunked.length)) % profile.cols,
      Math.max(0, profile.cols - 1)
    );

    gridDataRef.current = {
      rows: chunked,
      hero: { rowIndex: heroRowIndex, colIndex: heroColIndex },
      imagePool: shuffledBase,
      key: imagesKey,
      cols: profile.cols,
      maxTiles,
    };
  }

  const { rows, hero, imagePool } = gridDataRef.current;
  const totalTiles = rows.length * profile.cols;

  // When the image list changes (e.g. after fetch), reset tiles to the new base pool
  useEffect(() => {
    if (lastImagesKeyRef.current === imagesKey) return;
    lastImagesKeyRef.current = imagesKey;
    recentSwapIndicesRef.current = [];

    setTileStates(() => {
      const next = new Map<number, { src: string; phase: 'idle' | 'shrinking' | 'growing' }>();
      for (let i = 0; i < totalTiles; i += 1) {
        const src = imagePool.length > 0 ? imagePool[i % imagePool.length] : "";
        next.set(i, { src, phase: 'idle' });
      }
      return next;
    });
  }, [imagesKey, imagePool, totalTiles]);
  // Pick random tiles and run the 3-phase swap: shrink → change image → grow
  const swapRandomTiles = useCallback(() => {
    if (imagePool.length < 2) return;
    const heroIndex = hero ? hero.rowIndex * profile.cols + hero.colIndex : -1;

    for (let s = 0; s < profile.swapsPerTick; s++) {
      let tileIdx: number;
      let attempts = 0;
      do {
        tileIdx = Math.floor(Math.random() * totalTiles);
        attempts += 1;
      } while (
        attempts < 20 &&
        (tileIdx === heroIndex || recentSwapIndicesRef.current.includes(tileIdx))
      );

      recentSwapIndicesRef.current = [...recentSwapIndicesRef.current, tileIdx].slice(-6);

      // Phase 1: Start shrinking (blur + scale down) with current image
      setTileStates((prev) => {
        const next = new Map(prev);
        const currentSrc = prev.get(tileIdx)?.src ?? imagePool[tileIdx % imagePool.length];
        next.set(tileIdx, { src: currentSrc, phase: 'shrinking' });
        return next;
      });

      // Pick new image
      const currentSrc = tileStatesRef.current.get(tileIdx)?.src ?? imagePool[tileIdx % imagePool.length];
      let newSrc: string;
      let imageAttempts = 0;
      do {
        newSrc = imagePool[Math.floor(Math.random() * imagePool.length)];
        imageAttempts += 1;
      } while (newSrc === currentSrc && imageAttempts < 5);

      // Phase 2: After shrink completes, swap image and start growing
      const t1 = window.setTimeout(() => {
        setTileStates((prev) => {
          const next = new Map(prev);
          next.set(tileIdx, { src: newSrc, phase: 'growing' });
          return next;
        });
      }, profile.shrinkMs);

      // Phase 3: After grow completes, set to idle
      const t2 = window.setTimeout(() => {
        setTileStates((prev) => {
          const next = new Map(prev);
          next.set(tileIdx, { src: newSrc, phase: 'idle' });
          return next;
        });
      }, profile.shrinkMs + profile.growMs);

      swapTimersRef.current.push(t1, t2);
    }
  }, [imagePool, rows, hero, profile.cols, profile.swapsPerTick, profile.shrinkMs, profile.growMs]);

  // Start random swapping shortly after grid intro
  useEffect(() => {
    if (!profile.enableCycling || imagePool.length < 2) return;

    let swapTimer: number | undefined;
    let cancelled = false;

    const scheduleNextSwap = () => {
      const jitter = (Math.random() * 2 - 1) * profile.swapJitterMs;
      const delay = Math.max(200, profile.swapIntervalMs + jitter);
      swapTimer = window.setTimeout(() => {
        if (cancelled) return;
        swapRandomTiles();
        scheduleNextSwap();
      }, delay);
    };

    // Start swaps right as grid intro finishes (no extra delay)
    const startDelay = window.setTimeout(() => {
      swapRandomTiles(); // immediate first swap
      scheduleNextSwap();
    }, profile.gridIntroDuration * 1000);

    return () => {
      cancelled = true;
      window.clearTimeout(startDelay);
      if (swapTimer) window.clearTimeout(swapTimer);
      swapTimersRef.current.forEach((t) => window.clearTimeout(t));
      swapTimersRef.current = [];
    };
  }, [
    imagePool.length,
    profile.enableCycling,
    profile.gridIntroDuration,
    profile.swapIntervalMs,
    profile.swapJitterMs,
    swapRandomTiles,
  ]);

  const getTileDisplay = (tileIndex: number): { src: string; phase: 'idle' | 'shrinking' | 'growing' } => {
    const state = tileStates.get(tileIndex);
    if (state) return state;
    const src = imagePool.length > 0
      ? imagePool[tileIndex % imagePool.length]
      : "";
    return { src, phase: 'idle' };
  };

  return (
    <div className="w-screen flex flex-col items-center flex-1 pt-[32px] sm:pt-[40px]">
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>

      <motion.p
        className="font-['Spectral',serif] text-center text-white w-full px-6"
        style={{ fontSize: "clamp(20px, 3.4svh, 24px)", lineHeight: "clamp(24px, 4svh, 28px)" }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: profile.titleDuration, delay: profile.titleDelay }}
      >
        Recommending the perfect one from our hand picked collection
      </motion.p>

      <div
        className="flex-1 w-screen flex flex-col justify-center pointer-events-none"
        style={{
          marginTop: 24,
          paddingBottom: "clamp(8px, 1.5svh, 24px)",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
          gap: profile.rowGap,
        }}
      >
        {rows.map((row, rowIndex) => {
          const totalRows = rows.length;
          const perRowDuration = 0.45;
          const staggerGap = totalRows > 1 ? (profile.gridIntroDuration - perRowDuration) / (totalRows - 1) : 0;
          const rowDelay = rowIndex * staggerGap;

          return (
          <motion.div
            key={`row-${rowIndex}-${imagesKey}`}
            className="relative w-screen flex justify-center items-center"
            initial={{ opacity: 0, filter: `blur(${profile.gridIntroBlur}px)`, y: 18 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: perRowDuration, delay: rowDelay, ease: "easeOut" }}
            style={{ willChange: "filter, opacity, transform" }}
          >
            <div
              className="flex justify-center"
              style={{ gap: profile.tileGap }}
            >
              {row.map((defaultSrc, colIndex) => {
                const tileIndex = rowIndex * profile.cols + colIndex;
                const isHero =
                  hero &&
                  rowIndex === hero.rowIndex &&
                  colIndex === hero.colIndex;

                if (isHero) {
                  const heroSrc = highlightImageUrl ?? defaultSrc;
                  return (
                    <div
                      key={`hero-${rowIndex}-${colIndex}`}
                      className="relative rounded-full shrink-0 overflow-visible"
                      style={{ width: profile.heroSize, height: profile.heroSize }}
                    >
                      <motion.div
                        className="absolute inset-0 overflow-hidden"
                        layoutId="song-album"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ borderRadius: morph.startRadius }}
                        transition={{
                          layout: { ...morph.spring },
                          opacity: { duration: 0.28, delay: 0.08 },
                          scale: { duration: 0.28, delay: 0.08 },
                        }}
                      >
                        {heroSrc ? (
                          <ProgressiveImage
                            key={heroSrc}
                            src={heroSrc}
                            alt="Featured album cover"
                            className="absolute inset-0 max-w-none object-cover size-full"
                            loading="eager"
                          />
                        ) : (
                          <div
                            className="absolute inset-0 rounded-full"
                            style={{
                              background: "rgba(255,255,255,0.08)",
                              animation: "pulse 1.6s ease-in-out infinite",
                            }}
                          />
                        )}
                      </motion.div>
                    </div>
                  );
                }

                const tile = getTileDisplay(tileIndex);
                const isShrinking = tile.phase === 'shrinking';
                const isGrowing = tile.phase === 'growing';

                return (
                  <div
                    key={`tile-${rowIndex}-${colIndex}`}
                    className="relative rounded-full shrink-0 overflow-hidden"
                    style={{ width: profile.tileSize, height: profile.tileSize }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        transform: isShrinking ? 'scale(0.72)' : 'scale(1)',
                        filter: isShrinking ? 'blur(6px)' : 'blur(0px)',
                        transition: isShrinking
                          ? `transform ${profile.shrinkMs}ms ease-in, filter ${profile.shrinkMs}ms ease-in`
                          : isGrowing
                            ? `transform ${profile.growMs}ms ease-out, filter ${profile.growMs}ms ease-out`
                            : 'none',
                      }}
                    >
                      {tile.src ? (
                        <ProgressiveImage
                          src={tile.src}
                          alt="Album cover art"
                          className="absolute inset-0 max-w-none object-cover size-full"
                          loading="lazy"
                        />
                      ) : (
                        <div
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: "rgba(255,255,255,0.08)",
                            animation: "pulse 1.6s ease-in-out infinite",
                          }}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
          );
        })}
      </div>
    </div>
  );
}
