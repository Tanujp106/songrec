import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-iturtluduq";
import imgAlbum from "@/assets/256b80c8e3feddbc7d9121f96f8a5007c5f523ae.png";
import type { SongRecommendation } from "../lib/api";

const POPULARITY_LABELS = ["underrated", "moderate", "well-known", "popular"];

/* ── Gyroscope-driven parallax float (mobile only) ───────────── */
function useGyroParallax(
  containerRef: React.RefObject<HTMLDivElement | null>,
  maxOffset = 6,
  maxRotation = 3,
) {
  const [permissionGranted, setPermissionGranted] = useState(false);

  // iOS Safari 13+ requires explicit permission from a user gesture
  const requestPermission = useCallback(async () => {
    if (permissionGranted) return;

    const DOE = DeviceOrientationEvent as unknown as {
      requestPermission?: () => Promise<string>;
    };

    if (typeof DOE.requestPermission === "function") {
      try {
        const result = await DOE.requestPermission();
        if (result === "granted") {
          setPermissionGranted(true);
        }
      } catch (err) {
        console.warn("DeviceOrientation permission denied:", err);
      }
    } else {
      // Non-iOS or older iOS - permission not required
      setPermissionGranted(true);
    }
  }, [permissionGranted]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!permissionGranted) return; // Wait for permission on iOS

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let active = false;
    let baseBeta: number | null = null;
    let raf: number;

    const SMOOTHING = 0.07;
    const START_DELAY = 800; // wait for morph animation to settle

    const handleOrientation = (e: DeviceOrientationEvent) => {
      const gamma = e.gamma ?? 0; // left/right tilt
      const beta = e.beta ?? 0; // front/back tilt
      // Calibrate: first reading = neutral position
      if (baseBeta === null) baseBeta = beta;
      target.x = Math.max(-1, Math.min(1, gamma / 30));
      target.y = Math.max(-1, Math.min(1, (beta - baseBeta) / 30));
      active = true;
    };

    window.addEventListener("deviceorientation", handleOrientation);

    let started = false;
    const startTimer = window.setTimeout(() => {
      started = true;
    }, START_DELAY);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      if (active && started) {
        current.x = lerp(current.x, target.x, SMOOTHING);
        current.y = lerp(current.y, target.y, SMOOTHING);

        const tx = current.x * maxOffset;
        const ty = current.y * maxOffset;
        const rx = -current.y * maxRotation;
        const ry = current.x * maxRotation;

        el.style.transform =
          `perspective(800px) translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
      cancelAnimationFrame(raf);
      window.clearTimeout(startTimer);
      el.style.transform = "";
    };
  }, [containerRef, maxOffset, maxRotation, permissionGranted]);

  return { requestPermission };
}

/* ── Subtle 3D tilt with cursor/finger tracking ──── */
function use3DTilt(
  containerRef: React.RefObject<HTMLDivElement | null>,
  maxRotation = 4,
) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMove = (clientX: number, clientY: number) => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const bounds = el.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;

        const percentX = (clientX - centerX) / (bounds.width / 2);
        const percentY = (clientY - centerY) / (bounds.height / 2);

        setTilt({
          rotateY: percentX * maxRotation,
          rotateX: -percentY * maxRotation,
        });
      });
    };

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) handleMove(e.touches[0].clientX, e.touches[0].clientY);
    };
    const handleReset = () => setTilt({ rotateX: 0, rotateY: 0 });
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) handleMove(e.touches[0].clientX, e.touches[0].clientY);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleReset);
    el.addEventListener("touchstart", handleTouchStart);
    el.addEventListener("touchmove", handleTouchMove);
    el.addEventListener("touchend", handleReset);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleReset);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("touchend", handleReset);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [containerRef, maxRotation]);

  return { tilt };
}

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

  // Gyroscope parallax on album art
  const albumContainerRef = useRef<HTMLDivElement>(null);
  const { requestPermission: requestGyroPermission } = useGyroParallax(albumContainerRef);
  const { tilt } = use3DTilt(albumContainerRef);

  // Auto-request permission on mount for non-iOS (Android doesn't need user gesture)
  useEffect(() => {
    const DOE = DeviceOrientationEvent as unknown as {
      requestPermission?: () => Promise<string>;
    };
    if (typeof DOE.requestPermission !== "function") {
      // Not iOS - trigger immediately
      requestGyroPermission();
    }
  }, [requestGyroPermission]);

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
            {`Here's a perfect ${mood} song for you`}
          </p>
        </motion.div>

        {/* Album art — morph target for layoutId transition */}
        <div className="w-full">
          <motion.div
            ref={albumContainerRef}
            className="relative aspect-square mx-auto"
            style={{
              width: "min(100%, 76vw, 36vh)",
              willChange: "transform",
            }}
            animate={{
              rotateX: tilt.rotateX,
              rotateY: tilt.rotateY,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 30,
              mass: 0.6,
            }}
            onTouchStart={requestGyroPermission}
          >
            {/* Shadow — fades in only after the morph animation settles */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ borderRadius: morph.endRadius }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, boxShadow: "0px 8px 24px rgba(19,15,41,0.45)" }}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
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
          </motion.div>
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
            WebkitTapHighlightColor: "transparent",
          }}
          animate={{
            backgroundColor: accentColor,
          }}
          transition={{
            backgroundColor: { duration: 0.8, ease: "easeInOut" },
            scale: { duration: 0.18, ease: "easeOut" },
            y: { duration: 0.18, ease: "easeOut" },
          }}
          whileHover={spotifyUrl ? { scale: 1.01 } : undefined}
          whileTap={spotifyUrl ? { scale: 0.98, y: 1 } : undefined}
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
        <motion.button
          className="w-full flex gap-[8px] items-center justify-center rounded-[1000px] relative cursor-pointer bg-transparent"
          style={{ padding: "clamp(10px, 1.8svh, 16px) 0", WebkitTapHighlightColor: "transparent" }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98, y: 1 }}
          transition={{
            scale: { duration: 0.18, ease: "easeOut" },
            y: { duration: 0.18, ease: "easeOut" },
          }}
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
        </motion.button>
      </motion.div>
    </div>
  );
}
