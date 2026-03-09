import { useRef, useState, useEffect } from "react";
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
  morph,
}: SongResultProps) {
  const popLabel = POPULARITY_LABELS[popularity] || "popular";
  const title = song?.song_name ?? "No song found";
  const artist = song?.artist?.length ? song.artist.join(", ") : "Unknown Artist";
  const album = song?.album_name ?? "Unknown album";
  const albumImage = song?.album_image ?? imgAlbum;
  const spotifyUrl = song?.spotify_url ?? null;

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
      <div className="flex flex-col items-center w-full mt-auto" style={{ gap: "clamp(16px, 3svh, 32px)" }}>
        {/* Description text */}
        <motion.div
          className="flex flex-col items-center w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p className="font-['Spectral',serif] text-center text-white w-full" style={{ fontSize: "clamp(20px, 3.4svh, 24px)", lineHeight: "clamp(24px, 4svh, 28px)" }}>
            {`Here's a perfect ${popLabel} `}
            <br />
            {`${mood} song for you`}
          </p>
        </motion.div>

        {/* Album art — morph target for layoutId transition */}
        <div className="w-full">
          <div
            className="relative w-full aspect-square mx-auto"
            style={{
              maxWidth: "min(100%, 76vw)",
              maxHeight: "min(320px, 36vh)",
            }}
          >
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ borderRadius: morph.endRadius }}
              initial={{ opacity: 0, boxShadow: "0px 0px 0px rgba(19,15,41,0)" }}
              animate={{ opacity: 1, boxShadow: "0px 9px 14px rgba(19,15,41,0.5)" }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            />

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
          className="flex flex-col items-center w-full px-[24px]"
          style={{ gap: "clamp(2px, 0.6svh, 4px)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="font-['Spectral',serif] text-white tracking-[-0.96px] text-center overflow-hidden text-ellipsis whitespace-nowrap w-full" style={{ fontSize: "clamp(20px, 3.4svh, 24px)", lineHeight: "clamp(24px, 4svh, 28px)" }}>
            {title}
          </p>
          <div className="flex flex-col items-center text-white/80 tracking-[-0.48px] w-full" style={{ fontSize: "clamp(14px, 2.3svh, 16px)" }}>
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
        className="flex flex-col items-center w-full mt-auto"
        style={{ gap: "clamp(6px, 1.2svh, 8px)" }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
      >
        {/* Add to Spotify button */}
        <motion.a
          className="w-full flex gap-[8px] items-center justify-center rounded-[1000px] text-white cursor-pointer"
          style={{
            padding: "clamp(10px, 1.8svh, 16px) 0",
            opacity: spotifyUrl ? 1 : 0.6,
            pointerEvents: spotifyUrl ? "auto" : "none",
          }}
          animate={{
            backgroundColor: accentColor,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          whileTap={{ scale: 0.98 }}
          href={spotifyUrl ?? undefined}
          target={spotifyUrl ? "_blank" : undefined}
          rel={spotifyUrl ? "noopener noreferrer" : undefined}
          aria-disabled={!spotifyUrl}
          aria-label={`Open ${title} on Spotify`}
        >
          {/* Spotify icon */}
          <div className="overflow-clip relative shrink-0 size-[20px]" aria-hidden="true">
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 19.6984 19.6984"
              role="img"
              aria-label="Spotify logo"
              style={{ transform: "scaleY(-1)" }}
            >
              <path d={svgPaths.p2d573100} fill="white" />
            </svg>
          </div>
          <span className="font-['Switzer',sans-serif] tracking-[-0.16px] whitespace-nowrap font-medium" style={{ fontSize: "clamp(14px, 2.3svh, 16px)" }}>
            Add to Spotify
          </span>
        </motion.a>

        {/* Start over button */}
        <button
          className="w-full flex gap-[8px] items-center justify-center rounded-[1000px] relative cursor-pointer bg-transparent"
          style={{ padding: "clamp(10px, 1.8svh, 16px) 0" }}
          onClick={onStartOver}
        >
          <div
            aria-hidden="true"
            className="absolute border border-white/80 border-solid inset-0 pointer-events-none rounded-[1000px]"
          />
          {/* Replay icon */}
          <div className="relative shrink-0 size-[20px]" aria-hidden="true">
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 20 20"
              role="img"
              aria-label="Replay icon"
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
          <span className="font-['Switzer',sans-serif] text-white/80 tracking-[-0.16px] whitespace-nowrap font-medium" style={{ fontSize: "clamp(14px, 2.3svh, 16px)" }}>
            Start over
          </span>
        </button>
      </motion.div>
    </div>
  );
}
