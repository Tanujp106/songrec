import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import {
  AnimatePresence,
  animate as animateMotion,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import svgPaths from "../../imports/svg-iturtluduq";
import imgAlbum from "@/assets/256b80c8e3feddbc7d9121f96f8a5007c5f523ae.png";
import type { SongRecommendation } from "../lib/api";
import {
  createDiscoveryDeckState,
  DISCOVERY_ARTWORK_DRAG_MAX_TRAVEL_PX,
  DISCOVERY_DRAG_MAX_TRAVEL_PX,
  DISCOVERY_FINDING_GRID_COLUMNS,
  DISCOVERY_FINDING_TILE_COUNT,
  DISCOVERY_MORPH_SOURCE_INDICES,
  enterDiscovery,
  finishDiscovery,
  getActiveSongIndex,
  getDiscoveryArtworkDragOffset,
  getDiscoveryArtworkReleaseVelocity,
  getDiscoveryArtworkScale,
  getDiscoveryCardDragOffset,
  getDiscoveryCardMotionPhase,
  getDiscoveryExitTravel,
  getDeckCardLayout,
  getDiscoveryGesture,
  getDiscoveryImagePool,
  getDiscoveryMorphSourceImage,
  getDiscoveryMorphTargetFrame,
  getDiscoverySongs,
  getDiscoverySwipeAction,
  isDiscoveryPointInsideChamber,
  returnToPrimary,
  sendDiscoveryCardToBack,
  type DiscoveryGesture,
} from "../lib/discovery-deck";
import { getSongDetailMotion } from "../lib/detail-motion";

const RESULT_MAX_WIDTH = "min(100%, 1120px)";
const DISCOVERY_CARD_SIZE = "min(80vw, 55svh, 560px, max(180px, calc(100dvh - 420px)))";
const DISCOVERY_TOP_GAP_PX = 40;
const DISCOVERY_DETAIL_GAP_PX = 12;
const DISCOVERY_DETAIL_HEIGHT_PX = 120;
const DISCOVERY_RADIUS_PX = 24;
const DISCOVERY_CARD_INSET_PERCENT = 12;
const DISCOVERY_CHAMBER_PEEK_PX = 20;
const DISCOVERY_CHAMBER_DELAY_MS = 1600;
const DISCOVERY_FINDING_DURATION_MS = 2500;
const DISCOVERY_MORPH_PREP_DURATION_MS = 300;
const DISCOVERY_MORPH_HANDOFF_DURATION_MS = 560;
const DISCOVERY_PANEL_SPRING = {
  type: "spring" as const,
  stiffness: 190,
  damping: 38,
  mass: 1,
};
const DISCOVERY_CARD_SPRING = {
  type: "spring" as const,
  visualDuration: 0.2,
  bounce: 0.05,
};
const DISCOVERY_STACK_TUNING = {
  x: 8,
  y: 4,
  rotate: 7,
  scaleStep: 0.02,
  opacityStep: 0,
  shadowBlur: 34,
};
const DISCOVERY_SWIPE_THRESHOLD_PX = 36;
const DISCOVERY_EXIT_TRAVEL_PERCENT = 12;
const DISCOVERY_EXIT_TILT_DEG = 4;
const DISCOVERY_EXIT_DURATION_S = 0.23;
const DISCOVERY_ARTWORK_RETURN_SPRING = {
  type: "spring" as const,
  stiffness: 300,
  damping: 28,
  mass: 0.8,
};
const DISCOVERY_ARTWORK_EDGE_GAP_PX = 4;
const DISCOVERY_ARTWORK_INSET_PX =
  DISCOVERY_ARTWORK_EDGE_GAP_PX + DISCOVERY_ARTWORK_DRAG_MAX_TRAVEL_PX;

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
  lastX: number;
  lastY: number;
  lastTime: number;
  velocityX: number;
  velocityY: number;
  startsInsideChamber: boolean;
  startsInsidePrimaryArtwork: boolean;
}

interface DiscoveryMorphSourceRect {
  deckIndex: number;
  left: number;
  top: number;
  width: number;
  height: number;
}

interface DiscoveryMorphCapture {
  chamberWidth: number;
  sources: DiscoveryMorphSourceRect[];
}

function updateGestureVelocity(
  gesture: GestureStart,
  clientX: number,
  clientY: number,
  timeStamp: number,
) {
  const elapsedMs = Math.max(1, timeStamp - gesture.lastTime);
  const instantVelocityX = (clientX - gesture.lastX) / elapsedMs * 1000;
  const instantVelocityY = (clientY - gesture.lastY) / elapsedMs * 1000;
  const smoothing = 0.35;

  gesture.velocityX = gesture.velocityX * (1 - smoothing) + instantVelocityX * smoothing;
  gesture.velocityY = gesture.velocityY * (1 - smoothing) + instantVelocityY * smoothing;
  gesture.lastX = clientX;
  gesture.lastY = clientY;
  gesture.lastTime = timeStamp;
}

function DiscoveryDraggableCard({
  canDrag,
  children,
  onSendToBack,
  swipeThresholdPx,
}: {
  canDrag: boolean;
  children: ReactNode;
  onSendToBack: (direction: DiscoveryGesture) => void;
  swipeThresholdPx: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  const rotateX = useTransform(
    y,
    [-DISCOVERY_DRAG_MAX_TRAVEL_PX, DISCOVERY_DRAG_MAX_TRAVEL_PX],
    [3, -3],
  );
  const rotateY = useTransform(
    x,
    [-DISCOVERY_DRAG_MAX_TRAVEL_PX, DISCOVERY_DRAG_MAX_TRAVEL_PX],
    [-3, 3],
  );

  return (
    <motion.div
      className="absolute inset-0"
      drag={canDrag}
      dragMomentum={false}
      onDrag={canDrag ? (_, info) => {
        const offset = getDiscoveryCardDragOffset(info.offset.x, info.offset.y);
        x.set(offset.x);
        y.set(offset.y);
        scale.set(getDiscoveryArtworkScale(info.offset.x, info.offset.y));
      } : undefined}
      onDragEnd={canDrag ? (_, info) => {
        const direction = getDiscoveryGesture({
          startX: 0,
          endX: info.offset.x,
          startY: 0,
          endY: info.offset.y,
        }, swipeThresholdPx);
        animateMotion(x, 0, {
          ...DISCOVERY_ARTWORK_RETURN_SPRING,
          velocity: getDiscoveryArtworkReleaseVelocity(info.velocity.x),
        });
        animateMotion(y, 0, {
          ...DISCOVERY_ARTWORK_RETURN_SPRING,
          velocity: getDiscoveryArtworkReleaseVelocity(info.velocity.y),
        });
        animateMotion(scale, 1, DISCOVERY_ARTWORK_RETURN_SPRING);
        if (direction !== null) onSendToBack(direction);
      } : undefined}
      onPointerDown={(event) => {
        if (canDrag) event.stopPropagation();
      }}
      style={{
        rotateX,
        rotateY,
        scale,
        touchAction: canDrag ? "none" : undefined,
        x,
        y,
      }}
    >
      {children}
    </motion.div>
  );
}

function FindingAnimation({
  candidateImages,
  morphImages,
  lockMorphSources,
  hideMorphSources,
  onMorphSourceRef,
  shouldReduceMotion,
}: {
  candidateImages: string[];
  morphImages: string[];
  lockMorphSources: boolean;
  hideMorphSources: boolean;
  onMorphSourceRef: (tileIndex: number, element: HTMLDivElement | null) => void;
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
    if (shouldReduceMotion || lockMorphSources) return;
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
  }, [lockMorphSources, pool, shouldReduceMotion]);

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
        const morphSourceImage = getDiscoveryMorphSourceImage(index, morphImages, imgAlbum);
        const isMorphSourceLocked = lockMorphSources && morphSourceImage !== null;
        const isShrinking = !isMorphSourceLocked && tile.phase === "shrinking";
        const isGrowing = !isMorphSourceLocked && tile.phase === "growing";
        return (
          <motion.div
            key={index}
            className="relative aspect-square overflow-hidden rounded-full"
            data-slot="discovery-candidate"
            ref={(element) => onMorphSourceRef(index, element)}
            style={{
              borderRadius: "9999px",
              opacity: hideMorphSources && morphSourceImage !== null ? 0 : 1,
            }}
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
                src={isMorphSourceLocked ? morphSourceImage : tile.src}
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
  const cardSize = DISCOVERY_CARD_SIZE;
  const shouldReduceMotion = useReducedMotion() ?? false;
  const detailMotion = getSongDetailMotion(shouldReduceMotion);
  const discoverySongs = getDiscoverySongs(songs);
  const selectedImages = discoverySongs.map((candidate) => candidate.album_image).filter(Boolean) as string[];
  const morphImages = discoverySongs.map((candidate) => candidate.album_image ?? imgAlbum);
  const candidateImages = getDiscoveryImagePool(selectedImages, albumImages);
  const [deckState, setDeckState] = useState(createDiscoveryDeckState);
  const [deckOrder, setDeckOrder] = useState<number[]>(() => []);
  const [departingDeckIndex, setDepartingDeckIndex] = useState<number | null>(null);
  const [departingGesture, setDepartingGesture] = useState<DiscoveryGesture>(null);
  const [reenteringDeckIndex, setReenteringDeckIndex] = useState<number | null>(null);
  const [isDiscoveryMorphing, setIsDiscoveryMorphing] = useState(false);
  const [morphCapture, setMorphCapture] = useState<DiscoveryMorphCapture | null>(null);
  const [isChamberRevealed, setIsChamberRevealed] = useState(false);
  const primaryArtworkDragX = useMotionValue(0);
  const primaryArtworkDragY = useMotionValue(0);
  const primaryArtworkDragScale = useMotionValue(1);
  const chamberRef = useRef<HTMLDivElement | null>(null);
  const morphSourceRefs = useRef(new Map<number, HTMLDivElement>());
  const gestureRef = useRef<GestureStart | null>(null);

  const registerMorphSource = useCallback((tileIndex: number, element: HTMLDivElement | null) => {
    if (element) {
      morphSourceRefs.current.set(tileIndex, element);
    } else {
      morphSourceRefs.current.delete(tileIndex);
    }
  }, []);

  const resetPrimaryArtworkDrag = useCallback((velocityX = 0, velocityY = 0) => {
    if (shouldReduceMotion) {
      primaryArtworkDragX.set(0);
      primaryArtworkDragY.set(0);
      primaryArtworkDragScale.set(1);
      return;
    }

    animateMotion(primaryArtworkDragX, 0, {
      ...DISCOVERY_ARTWORK_RETURN_SPRING,
      velocity: getDiscoveryArtworkReleaseVelocity(velocityX),
    });
    animateMotion(primaryArtworkDragY, 0, {
      ...DISCOVERY_ARTWORK_RETURN_SPRING,
      velocity: getDiscoveryArtworkReleaseVelocity(velocityY),
    });
    animateMotion(primaryArtworkDragScale, 1, DISCOVERY_ARTWORK_RETURN_SPRING);
  }, [primaryArtworkDragScale, primaryArtworkDragX, primaryArtworkDragY, shouldReduceMotion]);

  const visibleDeckOrder = deckOrder.length === discoverySongs.length
    ? deckOrder
    : discoverySongs.map((_, index) => index);
  const activeSongIndex = deckState.view === "deck" && visibleDeckOrder.length > 0
    ? visibleDeckOrder[0] + 1
    : getActiveSongIndex(deckState, discoverySongs.length);
  const song = songs[activeSongIndex] ?? songs[0] ?? null;
  const title = song?.song_name ?? "No song found";
  const artist = song?.artist?.length ? song.artist.join(", ") : "Unknown Artist";
  const album = song?.album_name ?? "Unknown album";
  const spotifyUrl = song?.spotify_url ?? null;
  const activeSongKey = song?.spotify_url ?? (song?.song_name ?? "empty") + "-" + String(activeSongIndex);
  const isPrimary = deckState.view === "primary";
  const isFinding = deckState.view === "finding";
  const isDeck = deckState.view === "deck";
  const showFinding = isFinding || isDiscoveryMorphing;
  const hasDiscovery = discoverySongs.length > 0;
  const description = isPrimary
    ? "Here's a perfect " + mood + " song for you"
    : "More " + mood + " songs you might like";

  useEffect(() => {
    setDeckState(createDiscoveryDeckState());
    setDeckOrder(discoverySongs.map((_, index) => index));
    setDepartingDeckIndex(null);
    setDepartingGesture(null);
    setReenteringDeckIndex(null);
    setIsDiscoveryMorphing(false);
    setMorphCapture(null);
    gestureRef.current = null;
  }, [discoverySongs.length, songs]);

  useEffect(() => {
    if (reenteringDeckIndex === null) return;
    const frame = window.requestAnimationFrame(() => {
      setReenteringDeckIndex(null);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [reenteringDeckIndex]);

  useEffect(() => {
    if (!isFinding || shouldReduceMotion) return;
    const timer = window.setTimeout(() => {
      setIsDiscoveryMorphing(true);
    }, Math.max(0, DISCOVERY_FINDING_DURATION_MS - DISCOVERY_MORPH_PREP_DURATION_MS));
    return () => window.clearTimeout(timer);
  }, [discoverySongs.length, isFinding, shouldReduceMotion]);

  useEffect(() => {
    if (!isDiscoveryMorphing || isFinding || shouldReduceMotion) return;
    const timer = window.setTimeout(() => {
      setIsDiscoveryMorphing(false);
    }, DISCOVERY_MORPH_HANDOFF_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [isDiscoveryMorphing, isFinding, shouldReduceMotion]);

  useLayoutEffect(() => {
    if (!isDiscoveryMorphing || shouldReduceMotion) {
      setMorphCapture(null);
      return;
    }

    const chamber = chamberRef.current?.getBoundingClientRect();
    if (!chamber) return;

    const expectedSourceCount = Math.min(discoverySongs.length, DISCOVERY_MORPH_SOURCE_INDICES.length);
    const sources = DISCOVERY_MORPH_SOURCE_INDICES
      .slice(0, expectedSourceCount)
      .map((tileIndex, deckIndex) => {
        const element = morphSourceRefs.current.get(tileIndex);
        const rect = element?.getBoundingClientRect();
        if (!rect) return null;
        return {
          deckIndex,
          left: rect.left - chamber.left,
          top: rect.top - chamber.top,
          width: rect.width,
          height: rect.height,
        };
      })
      .filter((source): source is DiscoveryMorphSourceRect => source !== null);

    if (sources.length === expectedSourceCount) {
      setMorphCapture({ chamberWidth: chamber.width, sources });
    }
  }, [discoverySongs.length, isDiscoveryMorphing, shouldReduceMotion]);

  useEffect(() => {
    setIsChamberRevealed(false);
    if (!hasDiscovery) return;
    if (shouldReduceMotion) {
      setIsChamberRevealed(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setIsChamberRevealed(true);
    }, DISCOVERY_CHAMBER_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [hasDiscovery, shouldReduceMotion, songs]);

  useEffect(() => {
    if (!isFinding) return;
    const timer = window.setTimeout(() => {
      setDeckState((state) => finishDiscovery(state, discoverySongs.length));
    }, DISCOVERY_FINDING_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [discoverySongs.length, isFinding]);

  const sendCardToBackImmediately = useCallback((cardIndex: number) => {
    const nextOrder = sendDiscoveryCardToBack(visibleDeckOrder, cardIndex);
    setDeckOrder(nextOrder);
    setDeckState((state) => ({
      ...state,
      deckIndex: nextOrder[0] ?? state.deckIndex,
    }));
  }, [visibleDeckOrder]);

  const enterOrAdvance = useCallback((
    gesture: DiscoveryGesture = "next",
    cardIndex = visibleDeckOrder[0] ?? deckState.deckIndex,
  ) => {
    if (!hasDiscovery || isFinding || departingDeckIndex !== null) return;

    if (isPrimary) {
      setDepartingGesture(null);
      setDeckState((state) => enterDiscovery(state, discoverySongs.length));
      return;
    }

    if (shouldReduceMotion) {
      setDepartingGesture(null);
      sendCardToBackImmediately(cardIndex);
      return;
    }

    setDepartingGesture(gesture);
    setDepartingDeckIndex(cardIndex);
  }, [
    deckState.deckIndex,
    departingDeckIndex,
    discoverySongs.length,
    hasDiscovery,
    isFinding,
    isPrimary,
    shouldReduceMotion,
    sendCardToBackImmediately,
    visibleDeckOrder,
  ]);

  const goBackToPrimary = useCallback(() => {
    if (isPrimary) return;
    setDepartingDeckIndex(null);
    setDepartingGesture(null);
    setIsDiscoveryMorphing(false);
    setDeckState((state) => returnToPrimary(state));
  }, [isPrimary]);

  const commitGesture = useCallback((
    direction: DiscoveryGesture,
    startsInsideChamber: boolean,
  ) => {
    const action = getDiscoverySwipeAction(
      direction,
      deckState.view,
      startsInsideChamber,
    );
    if (action === "advance") enterOrAdvance(direction);
    if (action === "return") goBackToPrimary();
  }, [deckState.view, enterOrAdvance, goBackToPrimary]);

  const resetGesture = useCallback(() => {
    const gesture = gestureRef.current;
    if (!gesture) return;

    gestureRef.current = null;
    resetPrimaryArtworkDrag(gesture.velocityX, gesture.velocityY);
  }, [resetPrimaryArtworkDrag]);

  const handlePointerDown = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 || departingDeckIndex !== null) return;
    const chamber = chamberRef.current?.getBoundingClientRect();
    const startsInsideChamber = chamber !== undefined && isDiscoveryPointInsideChamber(
      { x: event.clientX, y: event.clientY },
      chamber,
    );
    const startsInsidePrimaryArtwork = isPrimary &&
      event.target instanceof Element &&
      event.target.closest('[data-slot="primary-album-artwork"]') !== null;

    gestureRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      lastX: event.clientX,
      lastY: event.clientY,
      lastTime: event.timeStamp,
      velocityX: 0,
      velocityY: 0,
      startsInsideChamber,
      startsInsidePrimaryArtwork,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }, [departingDeckIndex, isPrimary]);

  const handlePointerMove = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const gesture = gestureRef.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;
    const deltaX = event.clientX - gesture.startX;
    const deltaY = event.clientY - gesture.startY;
    updateGestureVelocity(gesture, event.clientX, event.clientY, event.timeStamp);

    if (gesture.startsInsidePrimaryArtwork && isPrimary && !shouldReduceMotion) {
      const offset = getDiscoveryArtworkDragOffset(deltaX, deltaY);
      primaryArtworkDragX.set(offset.x);
      primaryArtworkDragY.set(offset.y);
      primaryArtworkDragScale.set(getDiscoveryArtworkScale(deltaX, deltaY));
      event.preventDefault();
    }

    if (!gesture.startsInsideChamber || !isDeck) return;
    if (Math.abs(deltaX) <= Math.abs(deltaY)) return;
    event.preventDefault();
  }, [
    isDeck,
    isPrimary,
    primaryArtworkDragScale,
    primaryArtworkDragX,
    primaryArtworkDragY,
    shouldReduceMotion,
  ]);

  const handlePointerUp = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const gesture = gestureRef.current;
    if (!gesture || gesture.pointerId !== event.pointerId) return;
    updateGestureVelocity(gesture, event.clientX, event.clientY, event.timeStamp);

    const direction = getDiscoveryGesture({
      startX: gesture.startX,
      endX: event.clientX,
      startY: gesture.startY,
      endY: event.clientY,
    }, DISCOVERY_SWIPE_THRESHOLD_PX);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    resetGesture();
    commitGesture(direction, gesture.startsInsideChamber);
  }, [commitGesture, resetGesture]);

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
    const nextOrder = sendDiscoveryCardToBack(visibleDeckOrder, index);
    setReenteringDeckIndex(index);
    setDeckOrder(nextOrder);
    setDeckState((state) => ({
      ...state,
      deckIndex: nextOrder[0] ?? state.deckIndex,
    }));
    setDepartingDeckIndex(null);
    setDepartingGesture(null);
  }, [departingDeckIndex, visibleDeckOrder]);

  return (
    <div
      className="relative mx-auto flex-1 min-h-0 touch-pan-y"
      style={{ width: RESULT_MAX_WIDTH }}
    >
      <div
        className="relative z-10 flex h-full min-h-0 w-full flex-1 flex-col items-center justify-between"
      >
        <div
          className="mt-auto flex w-full flex-col items-center"
          style={{
            gap: String(DISCOVERY_TOP_GAP_PX) + "px",
            paddingBottom: "12px",
          }}
        >
          <div className="flex w-full flex-col items-center">
            <AnimatePresence initial={false} mode="wait">
              <motion.p
                key={isPrimary ? "primary-heading" : "discovery-heading"}
                className="w-full text-center font-['Spectral',serif] text-white"
                style={{
                  fontSize: "clamp(20px, 3.4svh, 24px)",
                  lineHeight: "clamp(24px, 4svh, 28px)",
                  paddingInline: "20px",
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
                : "More song recommendations. Swipe left or right inside the chamber to shuffle. Swipe right outside the chamber to return to the original song."
            }
            className="group relative w-full select-none outline-none"
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
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ paddingInline: "20px" }}
            >
              <motion.div
                className="relative aspect-square"
                data-slot="primary-song"
                animate={{
                  x: isPrimary ? 0 : "calc(-225% - 48px)",
                  opacity: isPrimary ? 1 : 0.35,
                  scale: isPrimary ? 1 : 0.96,
                }}
                transition={shouldReduceMotion ? { duration: 0 } : DISCOVERY_PANEL_SPRING}
                style={{ width: cardSize, willChange: "transform" }}
              >
                <motion.div
                  className="absolute inset-0 overflow-hidden"
                  data-slot="primary-album-artwork"
                  layoutId="song-album"
                  style={{
                    inset: String(DISCOVERY_ARTWORK_INSET_PX) + "px",
                    borderRadius: DISCOVERY_RADIUS_PX,
                    x: primaryArtworkDragX,
                    y: primaryArtworkDragY,
                    scale: primaryArtworkDragScale,
                    touchAction: "none",
                    willChange: "transform",
                  }}
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
                className="absolute top-0 aspect-square border-2 border-dashed border-white/45 group-focus-visible:border-white/80"
                data-slot="discovery-chamber"
                ref={chamberRef}
                initial={{
                  left: "calc(100% - 10px)",
                  x: "0%",
                  opacity: 0,
                }}
                animate={{
                  left: isPrimary ? "calc(100% - " + DISCOVERY_CHAMBER_PEEK_PX + "px)" : "50%",
                  x: isPrimary ? "0%" : "-50%",
                  opacity: 1,
                }}
                transition={shouldReduceMotion ? { duration: 0 } : DISCOVERY_PANEL_SPRING}
                style={{
                  width: cardSize,
                  borderRadius: DISCOVERY_RADIUS_PX,
                  willChange: "left, transform",
                }}
              >
                <AnimatePresence initial={false} mode="sync">
                  {showFinding && (
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
                        hideMorphSources={Boolean(isDiscoveryMorphing && isDeck && morphCapture)}
                        lockMorphSources={isDiscoveryMorphing}
                        morphImages={morphImages}
                        onMorphSourceRef={registerMorphSource}
                        shouldReduceMotion={shouldReduceMotion}
                      />
                    </motion.div>
                  )}

                  {isDiscoveryMorphing && isDeck && morphCapture && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 z-20"
                      data-slot="discovery-morph-overlay"
                    >
                      {discoverySongs.map((candidate, index) => {
                        const source = morphCapture.sources.find((item) => item.deckIndex === index);
                        if (!source) return null;

                        const position = visibleDeckOrder.indexOf(index);
                        const layout = getDeckCardLayout(position, {
                          stackX: DISCOVERY_STACK_TUNING.x,
                          stackY: DISCOVERY_STACK_TUNING.y,
                          stackRotate: DISCOVERY_STACK_TUNING.rotate,
                          stackScaleStep: DISCOVERY_STACK_TUNING.scaleStep,
                          stackOpacityStep: DISCOVERY_STACK_TUNING.opacityStep,
                        });
                        const target = getDiscoveryMorphTargetFrame(
                          layout,
                          morphCapture.chamberWidth,
                          DISCOVERY_CARD_INSET_PERCENT,
                        );
                        const candidateKey = candidate.spotify_url ??
                          candidate.song_name + "-" + String(index);

                        return (
                          <motion.div
                            key={candidateKey}
                            className="absolute overflow-hidden"
                            data-slot="discovery-morph-card"
                            initial={{
                              left: source.left,
                              top: source.top,
                              width: source.width,
                              height: source.height,
                              rotate: 0,
                              opacity: 1,
                              borderRadius: "9999px",
                            }}
                            animate={{
                              left: target.left,
                              top: target.top,
                              width: target.width,
                              height: target.height,
                              rotate: target.rotate,
                              opacity: target.opacity,
                              borderRadius: DISCOVERY_RADIUS_PX,
                            }}
                            transition={{
                              duration: DISCOVERY_MORPH_HANDOFF_DURATION_MS / 1000,
                              ease: "easeInOut",
                            }}
                            style={{
                              zIndex: discoverySongs.length - position,
                              willChange: "left, top, width, height, transform, opacity",
                            }}
                          >
                            <img
                              alt=""
                              className="absolute inset-0 size-full max-w-none object-cover"
                              draggable={false}
                              src={candidate.album_image ?? imgAlbum}
                            />
                          </motion.div>
                        );
                      })}
                    </div>
                  )}

                  {isDeck && !isDiscoveryMorphing && (
                    <motion.div
                      key="deck"
                      className="absolute inset-0"
                      data-slot="discovery-deck"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: "easeOut" }}
                      style={{ perspective: 600 }}
                    >
                      {discoverySongs.map((candidate, index) => {
                        const position = visibleDeckOrder.indexOf(index);
                        const layout = getDeckCardLayout(position, {
                          stackX: DISCOVERY_STACK_TUNING.x,
                          stackY: DISCOVERY_STACK_TUNING.y,
                          stackRotate: DISCOVERY_STACK_TUNING.rotate,
                          stackScaleStep: DISCOVERY_STACK_TUNING.scaleStep,
                          stackOpacityStep: DISCOVERY_STACK_TUNING.opacityStep,
                        });
                        const isTopCard = position === 0;
                        const motionPhase = getDiscoveryCardMotionPhase({
                          index,
                          departingDeckIndex,
                          reenteringDeckIndex,
                        });
                        const departingX = getDiscoveryExitTravel(
                          departingGesture,
                          DISCOVERY_EXIT_TRAVEL_PERCENT,
                        );
                        const candidateKey = candidate.spotify_url ??
                          candidate.song_name + "-" + String(index);

                        return (
                          <motion.div
                            key={candidateKey}
                            className="absolute"
                            data-active={isTopCard ? "true" : "false"}
                            data-slot="discovery-card"
                            style={{
                              inset: String(DISCOVERY_CARD_INSET_PERCENT) + "%",
                              borderRadius: DISCOVERY_RADIUS_PX,
                              zIndex: discoverySongs.length - position,
                              willChange: "transform, opacity",
                              boxShadow: "0 18px " + DISCOVERY_STACK_TUNING.shadowBlur + "px rgba(23,16,39,0.22)",
                            }}
                          >
                            <DiscoveryDraggableCard
                              canDrag={isDeck && departingDeckIndex === null && !shouldReduceMotion}
                              onSendToBack={(direction) => enterOrAdvance(direction, index)}
                              swipeThresholdPx={DISCOVERY_SWIPE_THRESHOLD_PX}
                            >
                              <motion.div
                                animate={motionPhase === "departing"
                                  ? {
                                      x: String(departingX) + "%",
                                      y: 0,
                                      rotate: departingGesture === "previous"
                                        ? DISCOVERY_EXIT_TILT_DEG
                                        : -DISCOVERY_EXIT_TILT_DEG,
                                      scale: 0.98,
                                      opacity: 0.96,
                                    }
                                  : {
                                      x: layout.x,
                                      y: layout.y,
                                      rotate: layout.rotate,
                                      scale: layout.scale,
                                      opacity: layout.opacity,
                                    }}
                                className="absolute inset-0 overflow-hidden"
                                style={{ borderRadius: DISCOVERY_RADIUS_PX }}
                                onAnimationComplete={() => completeDeckShuffle(index)}
                                transition={{
                                  default: shouldReduceMotion || motionPhase === "reentering"
                                    ? { duration: 0 }
                                    : motionPhase === "departing"
                                      ? { duration: DISCOVERY_EXIT_DURATION_S, ease: "easeOut" }
                                      : DISCOVERY_CARD_SPRING,
                                } as never}
                              >
                                <img
                                  alt={isTopCard ? candidate.album_name ?? candidate.song_name : ""}
                                  className="absolute inset-0 size-full max-w-none object-cover"
                                  draggable={false}
                                  src={candidate.album_image ?? imgAlbum}
                                  style={{ borderRadius: DISCOVERY_RADIUS_PX }}
                                />
                              </motion.div>
                            </DiscoveryDraggableCard>
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
            style={{ height: String(DISCOVERY_DETAIL_HEIGHT_PX) + "px" }}
          >
            <AnimatePresence initial={false} mode="wait">
              {showFinding ? (
                <motion.div
                  key="finding-copy"
                  className="absolute inset-x-0 top-0 flex w-full flex-col items-center"
                  style={{ gap: String(DISCOVERY_DETAIL_GAP_PX) + "px" }}
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
                  style={{ gap: String(DISCOVERY_DETAIL_GAP_PX) + "px" }}
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
