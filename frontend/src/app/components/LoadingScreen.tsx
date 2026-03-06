import React, { useMemo } from "react";
import { motion } from "motion/react";
import imgAlbum from "@/assets/256b80c8e3feddbc7d9121f96f8a5007c5f523ae.png";

interface LoadingScreenProps {
  mood: string;
  popularity: string;
  images?: string[];
  highlightImageUrl?: string | null;
  freezeMotion?: boolean;
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

export function LoadingScreen({
  mood,
  popularity,
  images = [],
  highlightImageUrl,
  freezeMotion = false,
}: LoadingScreenProps) {
  const { rows, hero } = useMemo(() => {
    const normalizedImages = images.filter(Boolean);
    const uniqueImages = Array.from(new Set(normalizedImages));
    const highlight = highlightImageUrl ?? null;
    const pool = uniqueImages.filter((img) => img !== highlight);
    const shuffled = [...pool].sort(() => Math.random() - 0.5);

    let expanded = shuffled.slice(0, MAX_TILES);
    if (expanded.length === 0) expanded = [imgAlbum];

    if (expanded.length < MAX_TILES) {
      const base = [...expanded];
      let i = 0;
      while (expanded.length < MAX_TILES) {
        expanded.push(base[i % base.length]);
        i += 1;
      }
    }

    const chunked: string[][] = [];
    for (let i = 0; i < expanded.length; i += COLS) {
      const row = expanded.slice(i, i + COLS);
      if (row.length === 0) break;
      chunked.push(row);
      if (chunked.length >= MAX_ROWS) break;
    }

    if (chunked.length === 0) {
      chunked.push([imgAlbum]);
    }

    let heroRowIndex = 0;
    let heroColIndex = 0;
    if (highlight) {
      const seed = hashString(highlight);
      heroRowIndex = seed % chunked.length;
      heroColIndex = Math.min(Math.floor(seed / chunked.length) % COLS, COLS - 1);

      const targetRow = chunked[heroRowIndex] ?? [];
      if (!targetRow.includes(highlight)) {
        targetRow[heroColIndex] = highlight;
      }
      chunked[heroRowIndex] = targetRow;
    }

    return {
      rows: chunked,
      hero: highlight
        ? { rowIndex: heroRowIndex, colIndex: heroColIndex, url: highlight }
        : null
    };
  }, [images, highlightImageUrl]);

  return (
    <div className="w-screen flex flex-col items-center flex-1 pt-[80px]">
      {/* Title text */}
      <motion.p
        className="font-['Spectral',serif] text-[24px] text-center text-white leading-[28px] w-full max-w-[320px]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Recommending the perfect one from hand picked collection
      </motion.p>

      {/* Album art grid */}
      <motion.div
        className="flex-1 w-screen flex flex-col justify-evenly gap-[12px] mt-4 pb-6 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        }}
      >
        {rows.map((row, rowIndex) => {
          const loopRow = freezeMotion ? row : [...row, ...row];
          const direction = rowIndex % 2 === 0 ? "left" : "right";
          const duration = 18 + rowIndex * 2;
          const marqueeClass = freezeMotion
            ? "flex gap-[18px] justify-center w-full"
            : `flex w-max min-w-full gap-[18px] ${
                direction === "left" ? "marquee-left" : "marquee-right"
              }`;
          return (
            <div
              key={`row-${rowIndex}`}
              className="relative w-screen overflow-visible h-[72px]"
            >
              <motion.div
                className={marqueeClass}
                style={
                  freezeMotion
                    ? undefined
                    : ({
                        ["--marquee-duration" as any]: `${duration}s`,
                        animationPlayState: "running"
                      } as React.CSSProperties)
                }
              >
                {loopRow.map((src, index) => {
                  const isHero =
                    hero &&
                    rowIndex === hero.rowIndex &&
                    index === hero.colIndex;
                  return (
                    <div
                      key={`${rowIndex}-${index}`}
                      className="relative rounded-full shadow-[0px_8px_14px_rgba(19,15,41,0.35)] shrink-0 size-[60px] overflow-visible"
                    >
                      <motion.div
                        className="absolute inset-0"
                        layoutId={isHero ? "song-album" : undefined}
                        transition={{ type: "spring", stiffness: 320, damping: 34 }}
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-cover size-full rounded-full"
                          src={src ?? imgAlbum}
                          style={{ filter: "drop-shadow(0px 8px 14px rgba(19,15,41,0.35))" }}
                        />
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
