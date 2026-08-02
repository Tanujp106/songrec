import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import svgPaths from "../../imports/svg-iturtluduq";
import imgAlbum from "@/assets/256b80c8e3feddbc7d9121f96f8a5007c5f523ae.png";
import type { SongRecommendation } from "../lib/api";
import {
  createDiscoveryDeckState,
  DISCOVERY_FINDING_GRID_COLUMNS,
  DISCOVERY_FINDING_TILE_COUNT,
  enterDiscovery,
  finishDiscovery,
  getActiveSongIndex,
  getDiscoveryCardMotionPhase,
  getDeckCardLayout,
  getDiscoveryGesture,
  getDiscoveryImagePool,
  getDiscoveryMorphDeckIndex,
  getDiscoverySongs,
  getDiscoverySwipeAction,
  returnToPrimary,
  shuffleDiscoveryDeck,
  type DiscoveryGesture,
} from "../lib/discovery-deck";
import { getSongDetailMotion } from "../lib/detail-motion";
import { useDiscoveryDeckDial } from "./useDiscoveryDeckDial";

const RESULT_MAX_WIDTH = "min(100%, 1120px)";

interface SongResultProps {
  mood: string;
  popularity: number;
  accentColor: string;
  onStartOver: () => void;
  songs: SongRecommendation[];
  albumImages?: string[];
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

interface GestureStart {
  pointerId: number;
  startX: number;
  startY: number;
  startsInsideActiveCard: boolean;
}

function FindingAnimation({
  candidateImages,
  shouldReduceMotion,
}: {
  candidateImages: string[];
  shouldReduceMotion: boolean;
}) {
  const tileCount = DISCOVERY_FINDING_TILE_COUNT;
  const columns = DISCOVERY_FINDING_GRID_COLUMNS;
  const pool = candidateImages.length > 0 ? candidateImages : [imgAlbum];
  const [tileStates, setTileStates] = useState(() => {
    const initial = new Map<number, { src: string; phase: "idle" | "shrinking" | "growing" }>();
    for (let index = 0; index < tileCount; index += 1) {
      initial.set(index, { src: pool[index % pool.length], phase: "idle" });
    }
    return initial;
  });

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timers: number[] = [];
    const swapTimer = window.setInterval(() => {
      const tileIndex = Math.floor(Math.random() * tileCount);
      let nextSrc = pool[Math.floor(Math.random() * pool.length)];

      setTileStates((current) => {
        const next = new Map(current);
        const currentSrc = current.get(tileIndex)?.src;
        if (pool.length > 1) {
          let attempts = 0;
          while (nextSrc === currentSrc && attempts < 5) {
            nextSrc = pool[Math.floor(Math.random() * pool.length)];
            attempts += 1;
          }
        }
        next.set(tileIndex, { src: currentSrc ?? nextSrc, phase: "shrinking" });
        return next;
      });

      timers.push(window.setTimeout(() => {
        setTileStates((current) => {
          const next = new Map(current);
          next.set(tileIndex, { src: nextSrc, phase: "growing" });
          return next;
        });
      }, 220));

      timers.push(window.setTimeout(() => {
        setTileStates((current) => {
          const next = new Map(current);
          next.set(tileIndex, { src: nextSrc, phase: "idle" });
          return next;
        });
      }, 480));
    }, 380);
    return () => {
      window.clearInterval(swapTimer);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [pool, shouldReduceMotion]);

  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-0 grid"
      data-slot="discovery-finding-animation"
      initial={{ opacity: 0, filter: "blur(18px)", y: 18 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: "easeOut" }}
      style={{
        gridTemplateColumns: "repeat(" + String(columns) + ", minmax(0, 1fr))",
        gap: "6px",
        padding: "5%",
      }}
    >
      {Array.from({ length: tileCount }, (_, index) => {
        const tile = tileStates.get(index) ?? { src: pool[index % pool.length], phase: "idle" as const };
        const isShrinking = tile.phase === "shrinking";
        const isGrowing = tile.phase === "growing";
        return (
          <motion.div
            key={index}
            className="relative aspect-square overflow-hidden rounded-full"
            data-slot="discovery-candidate"
            layoutId={getDiscoveryMorphDeckIndex(index) === null
              ? undefined
              : "discovery-card-" + String(getDiscoveryMorphDeckIndex(index))}
          >
            <div
              className="absolute inset-0"
              style={{
                transform: isShrinking ? "scale(0.72)" : "scale(1)",
                filter: isShrinking ? "blur(6px)" : "blur(0px)",
                transition: isShrinking
                  ? "transform 220ms ease-in, filter 220ms ease-in"
                  : isGrowing
                    ? "transform 260ms ease-out, filter 260ms ease-out"
                    : "none",
              }}
            >
              <img
                alt=""
                className="absolute inset-0 size-full object-cover"
                draggable={false}
                src={tile.src}
              />
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export function SongResult({
  mood,
  accentColor,
  albumImages = [],
  onStartOver,
  songs,
  morph,
}: SongResultProps) {
  const dial = useDiscoveryDeckDial();
  const cardSize = "min(" + dial.layout.cardWidthVw + "vw, " + dial.layout.cardHeightVh + "svh, " + dial.layout.cardMaxPx + "px)";
  const shouldReduceMotion = useReducedMotion() ?? false;
  const detailMotion = getSongDetailMotion(shouldReduceMotion);
  const discoverySongs = getDiscoverySongs(songs);
  const selectedImages = discoverySongs.map((candidate) => candidate.album_image).filter(Boolean) as string[];
  const candidateImages = getDiscoveryImagePool(selectedImages, albumImages);
  const [deckState, setDeckState] = useState(createDiscoveryDeckState);
  const [departingDeckIndex, setDepartingDeckIndex] = useState<number | null>(null);
  const [reenteringDeckIndex, setReenteringDeckIndex] = useState<number | null>(null);
  const [isChamberRevealed, setIsChamberRevealed] = useState(false);
  const gestureRef = useRef<GestureStart | null>(null);

  const activeSongIndex = getActiveSongIndex(deckState, discoverySongs.length);
  const song = songs[activeSongIndex] ?? songs[0] ?? null;
  const title = song?.song_name ?? "No song found";
  const artist = song?.artist?.length ? song.artist.join(", ") : "Unknown Artist";
  const album = song?.album_name ?? "Unknown album";
  const spotifyUrl = song?.spotify_url ?? null;
  const activeSongKey = song?.spotify_url ?? (song?.song_name ?? "empty") + "-" + String(activeSongIndex);
  const isPrimary = deckState.view === "primary";
  const isFinding = deckState.view === "finding";
  const isDeck = deckState.view === "deck";
  const hasDiscovery = discoverySongs.length > 0;
  const description = isPrimary
    ? "Here's a perfect " + mood + " song for you"
    : "More " + mood + " songs you might like";

  useEffect(() => {
    setDeckState(createDiscoveryDeckState());
    setDepartingDeckIndex(null);
    setReenteringDeckIndex(null);
    gestureRef.current = null;
  }, [songs]);

  useEffect(() => {
    if (reenteringDeckIndex === null) return;
    const frame = window.requestAnimationFrame(() => {
      setReenteringDeckIndex(null);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [reenteringDeckIndex]);

  useEffect(() => {
    setIsChamberRevealed(false);
    if (!hasDiscovery) return;
    if (shouldReduceMotion) {
      setIsChamberRevealed(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setIsChamberRevealed(true);
    }, dial.timing.chamberDelay);
    return () => window.clearTimeout(timer);
  }, [dial.timing.chamberDelay, hasDiscovery, shouldReduceMotion, songs]);

  useEffect(() => {
    if (!isFinding) return;
    const timer = window.setTimeout(() => {
      setDeckState((state) => finishDiscovery(state, discoverySongs.length));
    }, dial.timing.findingDuration);
    return () => window.clearTimeout(timer);
  }, [dial.timing.findingDuration, discoverySongs.length, isFinding]);

  const enterOrAdvance = useCallback(() => {
    if (!hasDiscovery || isFinding || departingDeckIndex !== null) return;

    if (isPrimary) {
      setDeckState((state) => enterDiscovery(state, discoverySongs.length));
      return;
    }

    if (shouldReduceMotion) {
      setDeckState((state) => shuffleDiscoveryDeck(state, discoverySongs.length));
      return;
    }

    setDepartingDeckIndex(deckState.deckIndex);
  }, [
    deckState.deckIndex,
    departingDeckIndex,
    discoverySongs.length,
    hasDiscovery,
    isFinding,
    isPrimary,
    shouldReduceMotion,
  ]);

  const goBackToPrimary = useCallback(() => {
    if (isPrimary) return;
    setDepartingDeckIndex(null);
    setDeckState((state) => returnToPrimary(state));
  }, [isPrimary]);

  const commitGesture = useCallback((
    direction: DiscoveryGesture,
    startsInsideActiveCard: boolean,
  ) => {
    const action = getDiscoverySwipeAction(
      direction,
      deckState.view,
      startsInsideActiveCard,
    );
    if (action === "advance") enterOrAdvance();
    if (action === "return") goBackToPrimary();
  }, [deckState.view, enterOrAdvance, goBackToPrimary]);

  const resetGesture = useCallback(() => {
    gestureRef.current = null;
  }, []);

  const handlePointerDown = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || departingDeckIndex !== null) return;
    gestureRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startsInsideActiveCard:
        event.target instanceof Element &&
        event.target.closest('[data-slot="discovery-card"][data-active="true"]') !== null,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }, [departingDeckIndex]);

  const handlePointerMove = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const gesture = gestureRef.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;
    const deltaX = event.clientX - gesture.startX;
    const deltaY = event.clientY - gesture.startY;
    if (Math.abs(deltaX) > Math.abs(deltaY)) event.preventDefault();
  }, []);

  const handlePointerUp = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const gesture = gestureRef.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;

    const direction = getDiscoveryGesture({
      startX: gesture.startX,
      endX: event.clientX,
      startY: gesture.startY,
      endY: event.clientY,
    }, dial.interaction.swipeThreshold);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    resetGesture();
    commitGesture(direction, gesture.startsInsideActiveCard);
  }, [commitGesture, dial.interaction.swipeThreshold, resetGesture]);

  const handleKeyDown = useCallback((event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      enterOrAdvance();
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goBackToPrimary();
    }
  }, [enterOrAdvance, goBackToPrimary]);

  const completeDeckShuffle = useCallback((index: number) => {
    if (departingDeckIndex !== index) return;
    setReenteringDeckIndex(index);
    setDeckState((state) => shuffleDiscoveryDeck(state, discoverySongs.length));
    setDepartingDeckIndex(null);
  }, [departingDeckIndex, discoverySongs.length]);

  return (
    <div
      className="relative mx-auto flex-1 min-h-0 touch-pan-y"
      style={{ width: RESULT_MAX_WIDTH }}
    >
      <div className="relative z-10 flex h-full w-full flex-1 flex-col items-center justify-between">
        <div
          className="mt-auto flex w-full flex-col items-center"
          style={{ gap: String(dial.layout.topGap) + "px" }}
        >
          <div className="flex w-full flex-col items-center">
            <AnimatePresence initial={false} mode="wait">
              <motion.p
                key={isPrimary ? "primary-heading" : "discovery-heading"}
                className="w-full text-center font-['Spectral',serif] text-white"
                style={{
                  fontSize: "clamp(20px, 3.4svh, 24px)",
                  lineHeight: "clamp(24px, 4svh, 28px)",
                }}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
              >
                {description}
              </motion.p>
            </AnimatePresence>
          </div>

          <div
            aria-label={
              isPrimary
                ? "Primary song recommendation. Swipe left to find more songs."
                : "More song recommendations. Swipe left to shuffle and right to return to the original song."
            }
            className="group relative w-full select-none overflow-hidden outline-none"
            data-view={deckState.view}
            onKeyDown={handleKeyDown}
            onLostPointerCapture={resetGesture}
            onPointerCancel={resetGesture}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            role="group"
            style={{
              height: cardSize,
              WebkitTapHighlightColor: "transparent",
            }}
            tabIndex={0}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative aspect-square"
                data-slot="primary-song"
                animate={{
                  x: isPrimary ? 0 : "calc(-225% - 48px)",
                  opacity: isPrimary ? 1 : 0.35,
                  scale: isPrimary ? 1 : 0.96,
                }}
                transition={shouldReduceMotion ? { duration: 0 } : dial.timing.panelSpring as never}
                style={{ width: cardSize, willChange: "transform" }}
              >
                <motion.div
                  className="absolute inset-0 overflow-hidden"
                  layoutId="song-album"
                  style={{ borderRadius: dial.layout.radius }}
                  transition={{ layout: { ...morph.spring } }}
                >
                  <img
                    alt={isPrimary ? album : ""}
                    className="absolute inset-0 size-full max-w-none object-cover"
                    draggable={false}
                    src={songs[0]?.album_image ?? imgAlbum}
                    style={{ objectPosition: "50% 50%" }}
                  />
                </motion.div>
              </motion.div>
            </div>

            {hasDiscovery && isChamberRevealed && (
              <motion.div
                aria-hidden={isPrimary}
                className="absolute top-0 aspect-square border-2 border-dashed border-white/45 group-focus-visible:border-white/80"
                data-slot="discovery-chamber"
                initial={{
                  left: "calc(100% - 10px)",
                  x: "0%",
                  opacity: 0,
                }}
                animate={{
                  left: isPrimary ? "calc(100% - " + dial.layout.chamberPeek + "px)" : "50%",
                  x: isPrimary ? "0%" : "-50%",
                  opacity: 1,
                }}
                transition={shouldReduceMotion ? { duration: 0 } : dial.timing.panelSpring as never}
                style={{
                  width: cardSize,
                  borderRadius: dial.layout.radius,
                  willChange: "left, transform",
                }}
              >
                <AnimatePresence initial={false} mode="sync">
                  {isFinding && (
                    <motion.div
                      key="finding"
                      className="absolute inset-0"
                      data-slot="discovery-finding"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
                    >
                      <FindingAnimation
                        candidateImages={candidateImages.length > 0 ? candidateImages : [imgAlbum]}
                        shouldReduceMotion={shouldReduceMotion}
                      />
                    </motion.div>
                  )}

                  {isDeck && (
                    <motion.div
                      key="deck"
                      className="absolute inset-0"
                      data-slot="discovery-deck"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: "easeOut" }}
                    >
                      {discoverySongs.map((candidate, index) => {
                        const position = (
                          index - deckState.deckIndex + discoverySongs.length
                        ) % discoverySongs.length;
                        const layout = getDeckCardLayout(position, {
                          stackX: dial.stack.x,
                          stackY: dial.stack.y,
                          stackRotate: dial.stack.rotate,
                          stackScaleStep: dial.stack.scaleStep,
                          stackOpacityStep: dial.stack.opacityStep,
                        });
                        const isTopCard = position === 0;
                        const motionPhase = getDiscoveryCardMotionPhase({
                          index,
                          departingDeckIndex,
                          reenteringDeckIndex,
                        });
                        const candidateKey = candidate.spotify_url ??
                          candidate.song_name + "-" + String(index);

                        return (
                          <motion.div
                            key={candidateKey}
                            layoutId={"discovery-card-" + String(index)}
                            layout
                            aria-hidden={!isTopCard}
                            className="absolute overflow-hidden"
                            data-active={isTopCard ? "true" : "false"}
                            data-slot="discovery-card"
                            animate={motionPhase === "departing"
                              ? {
                                  x: "-" + dial.interaction.exitDistance + "%",
                                  y: 8,
                                  rotate: -dial.interaction.exitTilt,
                                  scale: 0.98,
                                  opacity: 0,
                                }
                              : {
                                  x: layout.x,
                                  y: layout.y,
                                  rotate: layout.rotate,
                                  scale: layout.scale,
                                  opacity: layout.opacity,
                                }}
                            onAnimationComplete={() => completeDeckShuffle(index)}
                            style={{
                              inset: String(dial.layout.cardInset) + "%",
                              borderRadius: dial.layout.radius - 6,
                              zIndex: discoverySongs.length - position,
                              willChange: "transform, opacity",
                              boxShadow: "0 18px " + dial.stack.shadowBlur + "px rgba(23,16,39,0.22)",
                            }}
                            transition={{
                              layout: shouldReduceMotion || motionPhase === "reentering"
                                ? { duration: 0 }
                                : morph.spring,
                              default: shouldReduceMotion || motionPhase === "reentering"
                                ? { duration: 0 }
                                : motionPhase === "departing"
                                  ? { duration: dial.timing.exitDuration, ease: "easeOut" }
                                  : dial.timing.cardSpring,
                            } as never}
                          >
                            <img
                              alt={isTopCard ? candidate.album_name ?? candidate.song_name : ""}
                              className="absolute inset-0 size-full max-w-none object-cover"
                              draggable={false}
                              src={candidate.album_image ?? imgAlbum}
                            />
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </div>

          <div
            aria-live="polite"
            className="relative w-full px-[24px]"
            style={{ height: String(dial.layout.detailHeight) + "px" }}
          >
            <AnimatePresence initial={false} mode="wait">
              {isFinding ? (
                <motion.div
                  key="finding-copy"
                  className="absolute inset-x-0 top-0 flex w-full flex-col items-center"
                  style={{ gap: String(dial.layout.detailGap) + "px" }}
                  initial={detailMotion.initial}
                  animate={detailMotion.animate}
                  exit={detailMotion.exit}
                  transition={detailMotion.transition}
                >
                  <p
                    className="songrec-copy-shimmer w-full overflow-hidden text-ellipsis whitespace-nowrap text-center font-['Spectral',serif] tracking-[-0.96px]"
                    style={{
                      fontSize: "clamp(20px, 3.4svh, 24px)",
                      lineHeight: "clamp(24px, 4svh, 28px)",
                    }}
                  >
                    Finding more songs for this mood
                  </p>
                  <p
                    className="w-full text-center text-white/80"
                    style={{ fontSize: "clamp(14px, 2.3svh, 16px)" }}
                  >
                    Hang on a second, twin.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={activeSongKey}
                  className="absolute inset-x-0 top-0 flex w-full flex-col items-center"
                  style={{ gap: String(dial.layout.detailGap) + "px" }}
                  initial={detailMotion.initial}
                  animate={detailMotion.animate}
                  exit={detailMotion.exit}
                  transition={detailMotion.transition}
                >
                  <p
                    className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-center font-['Spectral',serif] tracking-[-0.96px] text-white"
                    style={{
                      fontSize: "clamp(20px, 3.4svh, 24px)",
                      lineHeight: "clamp(24px, 4svh, 28px)",
                    }}
                  >
                    {title}
                  </p>
                  <div
                    className="flex w-full flex-col items-center tracking-[-0.48px] text-white/80"
                    style={{ fontSize: "clamp(14px, 2.3svh, 16px)" }}
                  >
                    <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-center">
                      by {artist}
                    </p>
                    <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-center">
                      From {album}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div
          className="mt-auto flex w-full flex-col items-center"
          style={{
            gap: "clamp(6px, 1.2svh, 8px)",
            paddingInline: "24px",
          }}
        >
          <motion.a
            aria-disabled={!spotifyUrl}
            aria-label={"Open " + title + " on Spotify"}
            className="flex w-full cursor-pointer items-center justify-center gap-[8px] rounded-[1000px] text-white"
            href={spotifyUrl ?? undefined}
            rel={spotifyUrl ? "noopener noreferrer" : undefined}
            target={spotifyUrl ? "_blank" : undefined}
            style={{
              padding: "clamp(10px, 1.8svh, 16px) 0",
              opacity: spotifyUrl ? 1 : 0,
              pointerEvents: spotifyUrl ? "auto" : "none",
              WebkitTapHighlightColor: "transparent",
            }}
            animate={{ backgroundColor: accentColor }}
            transition={{
              backgroundColor: { duration: 0.8, ease: "easeInOut" },
              scale: { duration: 0.18, ease: "easeOut" },
              y: { duration: 0.18, ease: "easeOut" },
            }}
            whileHover={spotifyUrl ? { scale: 1.01 } : undefined}
            whileTap={spotifyUrl ? { scale: 0.98, y: 1 } : undefined}
          >
            <div aria-hidden="true" className="relative size-[20px] shrink-0 overflow-clip">
              <svg
                aria-label="Spotify logo"
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                role="img"
                style={{ transform: "scaleY(-1)" }}
                viewBox="0 0 19.6984 19.6984"
              >
                <path d={svgPaths.p2d573100} fill="white" />
              </svg>
            </div>
            <span
              className="whitespace-nowrap font-['Switzer',sans-serif] font-medium tracking-[-0.16px]"
              style={{ fontSize: "clamp(14px, 2.3svh, 16px)" }}
            >
              Add to Spotify
            </span>
          </motion.a>

          <motion.button
            className="relative flex w-full cursor-pointer items-center justify-center gap-[8px] rounded-[1000px] bg-transparent"
            onClick={onStartOver}
            style={{
              padding: "clamp(10px, 1.8svh, 16px) 0",
              WebkitTapHighlightColor: "transparent",
            }}
            transition={{
              scale: { duration: 0.18, ease: "easeOut" },
              y: { duration: 0.18, ease: "easeOut" },
            }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98, y: 1 }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[1000px] border border-solid border-white/80"
            />
            <div aria-hidden="true" className="relative size-[20px] shrink-0">
              <svg
                aria-label="Replay icon"
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                role="img"
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
            <span
              className="whitespace-nowrap font-['Switzer',sans-serif] font-medium tracking-[-0.16px] text-white/80"
              style={{ fontSize: "clamp(14px, 2.3svh, 16px)" }}
            >
              Start over
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
