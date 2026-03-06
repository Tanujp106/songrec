import React from "react";
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
}

export function SongResult({
  mood,
  popularity,
  accentColor,
  onStartOver,
  song,
  error
}: SongResultProps) {
  const popLabel = POPULARITY_LABELS[popularity] || "popular";
  const title = song?.song_name ?? "No song found";
  const artist = song?.artist?.length ? song.artist.join(", ") : "Unknown Artist";
  const album = song?.album_name ?? "Unknown album";
  const albumImage = song?.album_image ?? imgAlbum;
  const spotifyUrl = song?.spotify_url ?? null;
  const hasError = !!error;

  return (
    <div className="w-full flex flex-col items-center justify-between flex-1">
      {/* Top content */}
      <div className="flex flex-col items-center gap-[32px] w-full mt-4">
        {/* Description text */}
        <motion.div
          className="flex flex-col items-center w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
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

        {/* Album art */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full aspect-square max-h-[354px] rounded-[32px] shadow-[0px_9px_14px_0px_rgba(19,15,41,0.5)] overflow-hidden">
            <img
              alt={album}
              className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full"
              src={albumImage}
            />
            <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_12px_8px_0px_rgba(0,0,0,0.25)]" />
          </div>
        </motion.div>

        {/* Song info */}
        <motion.div
          className="flex flex-col items-center gap-[4px] w-full px-[24px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <p className="font-['Spectral',serif] text-[24px] text-white tracking-[-0.96px] text-center overflow-hidden text-ellipsis whitespace-nowrap w-full leading-[28px]">
            {title}
          </p>
          <div className="flex flex-col items-center text-[16px] text-white/80 tracking-[-0.48px] w-full">
            <p className="overflow-hidden text-center w-full">by {artist}</p>
            <p className="overflow-hidden text-center w-full">From {album}</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom buttons */}
      <motion.div
        className="flex flex-col gap-[8px] items-center w-full mt-6 mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
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
