import React, { useMemo, useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
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
  cycleMs: number;
  cycleBuckets: number;
  heroSize: number;
};

const FULL_PROFILE: PerfProfile = {
  cols: 7,
  rows: 9,
  tileSize: 56,
  tileGap: 14,
  rowGap: 10,
  titleDelay: 0.15,
  titleDuration: 0.5,
  gridIntroDuration: 0.6,
  gridIntroBlur: 8,
  enableCycling: true,
  cycleMs: 2200,
  cycleBuckets: 4,
  heroSize: 58,
};

const LITE_PROFILE: PerfProfile = {
  cols: 5,
  rows: 7,
  tileSize: 46,
  tileGap: 10,
  rowGap: 8,
  titleDelay: 0.08,
  titleDuration: 0.35,
  gridIntroDuration: 0.4,
  gridIntroBlur: 4,
  enableCycling: false,
  cycleMs: 0,
  cycleBuckets: 1,
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
        onError={() => {
          if (currentSrc !== imgAlbum) {
            setCurrentSrc(imgAlbum);
          }
        }}
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
  highlightImageUrl,
  morph,
}: LoadingScreenProps) {
  const [isLowPerf, setIsLowPerf] = useState(false);
  const [cycleStep, setCycleStep] = useState(0);

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

  const profile = isLowPerf ? LITE_PROFILE : FULL_PROFILE;
  const maxTiles = profile.cols * profile.rows;

  const { rows, hero, imagePool } = useMemo(() => {
    const normalizedImages = images.filter(Boolean);
    const uniqueImages = Array.from(new Set(normalizedImages));
    const highlight = highlightImageUrl ?? null;
    const highlightThumb = highlight ? toThumb(highlight) : null;

    const poolWithoutHero = uniqueImages.filter((img) => img !== highlightThumb);
    const basePool = poolWithoutHero.length > 0 ? poolWithoutHero : [imgAlbum];

    const shuffledBase = [...basePool].sort(() => Math.random() - 0.5);
    const expanded: string[] = [];

    for (let i = 0; i < maxTiles; i += 1) {
      expanded.push(shuffledBase[i % shuffledBase.length]);
    }

    const chunked: string[][] = [];
    for (let i = 0; i < expanded.length; i += profile.cols) {
      const row = expanded.slice(i, i + profile.cols);
      if (row.length === 0) break;
      chunked.push(row);
      if (chunked.length >= profile.rows) break;
    }

    if (chunked.length === 0) {
      chunked.push([imgAlbum]);
    }

    let heroRowIndex = 0;
    let heroColIndex = 0;

    if (highlightThumb) {
      const seed = hashString(highlightThumb);
      heroRowIndex = seed % chunked.length;
      heroColIndex = Math.min(
        Math.floor(seed / Math.max(1, chunked.length)) % profile.cols,
        Math.max(0, profile.cols - 1)
      );

      const targetRow = chunked[heroRowIndex] ?? [];
      targetRow[heroColIndex] = highlightThumb;
      chunked[heroRowIndex] = targetRow;
    }

    return {
      rows: chunked,
      hero: highlightThumb
        ? { rowIndex: heroRowIndex, colIndex: heroColIndex }
        : null,
      imagePool: shuffledBase,
    };
  }, [images, highlightImageUrl, maxTiles, profile.cols, profile.rows]);

  useEffect(() => {
    setCycleStep(0);
  }, [imagePool]);

  useEffect(() => {
    if (!profile.enableCycling || imagePool.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setCycleStep((prev) => prev + 1);
    }, profile.cycleMs);

    return () => window.clearInterval(interval);
  }, [imagePool.length, profile.cycleMs, profile.enableCycling]);

  const getTileSrc = (tileIndex: number) => {
    if (imagePool.length === 0) return imgAlbum;

    if (!profile.enableCycling || imagePool.length < 2) {
      return imagePool[tileIndex % imagePool.length];
    }

    const bucket = tileIndex % profile.cycleBuckets;
    const progression = Math.floor((cycleStep + bucket) / profile.cycleBuckets);
    const sourceIndex = (tileIndex + progression) % imagePool.length;
    return imagePool[sourceIndex] ?? imgAlbum;
  };

  const activeBucket = profile.enableCycling
    ? cycleStep % profile.cycleBuckets
    : -1;

  return (
    <div className="w-screen flex flex-col items-center flex-1 pt-[16px] sm:pt-[24px]">
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

      <motion.div
        className="flex-1 w-screen flex flex-col justify-center pointer-events-none"
        style={{
          marginTop: 24,
          paddingBottom: "clamp(8px, 1.5svh, 24px)",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
          gap: profile.rowGap,
          willChange: "filter, opacity",
        }}
        initial={{ opacity: 0, filter: `blur(${profile.gridIntroBlur}px)` }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: profile.gridIntroDuration, ease: "easeOut" }}
      >
        {rows.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="relative w-screen flex justify-center items-center"
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
                        <ProgressiveImage
                          src={defaultSrc ?? imgAlbum}
                          alt="Featured album cover"
                          className="absolute inset-0 max-w-none object-cover size-full"
                          loading="eager"
                        />
                      </motion.div>
                    </div>
                  );
                }

                const tileSrc = getTileSrc(tileIndex);
                const bucket = tileIndex % profile.cycleBuckets;
                const animatePulse = profile.enableCycling && bucket === activeBucket;

                return (
                  <motion.div
                    key={`tile-${rowIndex}-${colIndex}`}
                    className="relative rounded-full shrink-0 overflow-hidden"
                    style={{ width: profile.tileSize, height: profile.tileSize, willChange: "transform, opacity" }}
                    animate={
                      animatePulse
                        ? { opacity: [0.78, 1], scale: [0.985, 1] }
                        : { opacity: 1, scale: 1 }
                    }
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  >
                    <ProgressiveImage
                      src={tileSrc}
                      alt="Album cover art"
                      className="absolute inset-0 max-w-none object-cover size-full"
                      loading="lazy"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
