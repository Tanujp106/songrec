import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-iturtluduq";
import imgAlbum from "@/assets/256b80c8e3feddbc7d9121f96f8a5007c5f523ae.png";
import type { SongRecommendation } from "../lib/api";

const POPULARITY_LABELS = ["underrated", "moderate", "well-known", "popular"];

interface SongResultProps {
  mood: string;
  popularity: number;
  accentColor: string;
  onStartOver: () => void;
  song: SongRecommendation | null;
  error?: string | null;
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

export function SongResult({
  mood,
  popularity,
  accentColor,
  onStartOver,
  song,
  error,
  morph,
}: SongResultProps) {
  const popLabel = POPULARITY_LABELS[popularity] || "popular";
  const title = song?.song_name ?? "No song found";
  const artist = song?.artist?.length ? song.artist.join(", ") : "Unknown Artist";
  const album = song?.album_name ?? "Unknown album";
  const albumImage = song?.album_image ?? imgAlbum;
  const spotifyUrl = song?.spotify_url ?? null;
  const hasError = !!error;

  // Auto-scroll marquee for artist text if it overflows
  const artistTextRef = useRef<HTMLSpanElement>(null);
  const artistContainerRef = useRef<HTMLDivElement>(null);
  const [artistOverflow, setArtistOverflow] = useState(0);

  useEffect(() => {
    const text = artistTextRef.current;
    const container = artistContainerRef.current;
    if (text && container) {
      const overflow = text.scrollWidth - container.clientWidth;
      setArtistOverflow(overflow > 0 ? overflow : 0);
    }
  }, [artist]);

  return (
    <div className="w-full flex flex-col items-center justify-between flex-1">
      {/* Top content */}
      <div className="flex flex-col items-center gap-[32px] w-full mt-auto">
        {/* Description text */}
        <motion.div
          className="flex flex-col items-center w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p className="font-['Spectral',serif] text-[24px] text-center text-white leading-[28px] w-full">
            {hasError ? (
              "We couldn't fetch a song right now"
            ) : (
              <>
                {`Here's a perfect ${popLabel} `}
                <br />
                {`${mood} song for you`}
              </>
            )}
          </p>
          {hasError && (
            <p className="text-[14px] text-white/70 text-center mt-2">
              {error}
            </p>
          )}
        </motion.div>

        {/* Album art — morph target for layoutId transition */}
        <div className="w-full">
          <div
            className="relative w-full aspect-square max-h-[354px]"
            style={{ borderRadius: morph.endRadius }}
          >
            <motion.div
              className="absolute inset-0 overflow-hidden"
              layoutId="song-album"
              style={{ borderRadius: morph.endRadius }}
              transition={{
                layout: {
                  ...morph.spring,
                },
              }}
            >
              <img
                alt={album}
                className="absolute inset-0 max-w-none object-cover size-full"
                src={albumImage}
              />
            </motion.div>
          </div>
        </div>

        {/* Song info */}
        <motion.div
          className="flex flex-col items-center gap-[4px] w-full px-[24px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="font-['Spectral',serif] text-[24px] text-white tracking-[-0.96px] text-center overflow-hidden text-ellipsis whitespace-nowrap w-full leading-[28px]">
            {title}
          </p>
          <div className="flex flex-col items-center text-[16px] text-white/80 tracking-[-0.48px] w-full">
            {/* Artist — single-line with auto-scrolling marquee if overflowing */}
            <div
              ref={artistContainerRef}
              className="overflow-hidden whitespace-nowrap w-full relative"
              style={{ maskImage: artistOverflow > 0 ? "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" : undefined, WebkitMaskImage: artistOverflow > 0 ? "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" : undefined }}
            >
              <motion.span
                ref={artistTextRef}
                className="inline-block text-center w-full"
                style={{ width: artistOverflow > 0 ? "auto" : "100%" }}
                animate={artistOverflow > 0 ? { x: [0, -artistOverflow, 0] } : { x: 0 }}
                transition={artistOverflow > 0 ? { duration: Math.max(10, artistOverflow / 12), repeat: Infinity, ease: "easeInOut", repeatDelay: 2.5 } : undefined}
              >
                by {artist}
              </motion.span>
            </div>
            {/* Album — single-line, truncated */}
            <p className="overflow-hidden text-center w-full whitespace-nowrap text-ellipsis">From {album}</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom buttons */}
      <motion.div
        className="flex flex-col gap-[8px] items-center w-full mt-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
      >
        {/* Add to Spotify button */}
        <motion.a
          className="w-full flex gap-[8px] items-center justify-center py-[16px] rounded-[1000px] text-white cursor-pointer"
          animate={{
            backgroundColor: accentColor,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          whileTap={{ scale: 0.98 }}
          href={spotifyUrl ?? undefined}
          target={spotifyUrl ? "_blank" : undefined}
          rel={spotifyUrl ? "noopener noreferrer" : undefined}
          aria-disabled={!spotifyUrl}
          style={{ opacity: spotifyUrl ? 1 : 0.6, pointerEvents: spotifyUrl ? "auto" : "none" }}
        >
          {/* Spotify icon */}
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 19.6984 19.6984"
              style={{ transform: "scaleY(-1)" }}
            >
              <path d={svgPaths.p2d573100} fill="white" />
            </svg>
          </div>
          <span className="font-['Switzer',sans-serif] text-[16px] tracking-[-0.16px] whitespace-nowrap font-medium">
            Add to Spotify
          </span>
        </motion.a>

        {/* Start over button */}
        <button
          className="w-full flex gap-[8px] items-center justify-center py-[16px] rounded-[1000px] relative cursor-pointer bg-transparent"
          onClick={onStartOver}
        >
          <div
            aria-hidden="true"
            className="absolute border border-white/80 border-solid inset-0 pointer-events-none rounded-[1000px]"
          />
          {/* Replay icon */}
          <div className="relative shrink-0 size-[20px]">
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 20 20"
            >
              <mask
                height="20"
                id="mask_replay"
                maskUnits="userSpaceOnUse"
                style={{ maskType: "alpha" }}
                width="20"
                x="0"
                y="0"
              >
                <rect fill="#D9D9D9" height="20" width="20" />
              </mask>
              <g mask="url(#mask_replay)">
                <path d={svgPaths.p3810fe00} fill="white" fillOpacity="0.8" />
              </g>
            </svg>
          </div>
          <span className="font-['Switzer',sans-serif] text-[16px] text-white/80 tracking-[-0.16px] whitespace-nowrap font-medium">
            Start over
          </span>
        </button>
      </motion.div>
    </div>
  );
}
