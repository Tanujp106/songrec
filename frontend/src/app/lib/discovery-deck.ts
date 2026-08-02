import { RESULT_CONTENT_REVEAL_DELAY_MS } from "./detail-motion";

export const DISCOVERY_SWIPE_THRESHOLD_PX = 72;
export const DISCOVERY_FINDING_DURATION_MS = 1400;
export const DISCOVERY_CHAMBER_REVEAL_DELAY_MS = RESULT_CONTENT_REVEAL_DELAY_MS;
export const DISCOVERY_CHAMBER_HINT_DELAY_MS = 650;
export const DISCOVERY_CHAMBER_HINT_DURATION_MS = 900;
export const DISCOVERY_CHAMBER_HINT_INTERVAL_MS = 3600;
export const DISCOVERY_CHAMBER_HINT_TRAVEL_PX = 14;
export const DISCOVERY_MAX_SONGS = 4;
export const DISCOVERY_CANDIDATE_POOL_SIZE = 64;
export const DISCOVERY_FINDING_TILE_COUNT = 36;
export const DISCOVERY_FINDING_GRID_COLUMNS = 6;
export const DISCOVERY_MORPH_SOURCE_INDICES = [14, 15, 20, 21] as const;
export const DISCOVERY_DRAG_MAX_TRAVEL_PX = 3;
export const DISCOVERY_ARTWORK_DRAG_MAX_TRAVEL_PX = 3;
export const DISCOVERY_ARTWORK_DRAG_RESISTANCE = 6;
export const DISCOVERY_ARTWORK_SCALE_DISTANCE_PX = 250;
export const DISCOVERY_ARTWORK_MIN_SCALE = 0.94;
export const DISCOVERY_ARTWORK_MAX_RELEASE_VELOCITY = 240;

export interface DiscoveryDeckTuning {
  stackX: number;
  stackY: number;
  stackRotate: number;
  stackScaleStep: number;
  stackOpacityStep: number;
}

export const DEFAULT_DISCOVERY_DECK_TUNING: DiscoveryDeckTuning = {
  stackX: 4,
  stackY: 3,
  stackRotate: 2.8,
  stackScaleStep: 0.02,
  stackOpacityStep: 0.1,
};

export type DiscoveryView = "primary" | "finding" | "deck";
export type DiscoveryGesture = "next" | "previous" | null;
export type DiscoverySwipeAction = "advance" | "return" | null;
export type DiscoveryStackCyclePhase = "lift" | "settle";

export function getDiscoveryChamberHintMotion(
  reducedMotion: boolean,
  isPrimary: boolean,
) {
  if (reducedMotion || !isPrimary) return { x: 0 };

  return {
    x: [0, -DISCOVERY_CHAMBER_HINT_TRAVEL_PX, 0],
    transition: {
      duration: DISCOVERY_CHAMBER_HINT_DURATION_MS / 1000,
      delay: DISCOVERY_CHAMBER_HINT_DELAY_MS / 1000,
      repeat: Infinity,
      repeatDelay: (DISCOVERY_CHAMBER_HINT_INTERVAL_MS - DISCOVERY_CHAMBER_HINT_DURATION_MS) / 1000,
      ease: "easeInOut" as const,
      times: [0, 0.42, 1],
    },
  };
}

const DISCOVERY_DRAG_RESISTANCE = 1.75;

export interface DiscoveryDeckState {
  view: DiscoveryView;
  deckIndex: number;
  hasFoundSongs: boolean;
}

export interface DiscoveryGestureInput {
  startX: number;
  endX: number;
  startY: number;
  endY: number;
}

export interface DiscoveryPoint {
  x: number;
  y: number;
}

export interface DiscoveryChamberBounds {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

export interface DiscoveryDragOffset {
  x: number;
  y: number;
}

export interface DeckCardLayout {
  x: number;
  y: number;
  rotate: number;
  scale: number;
  opacity: number;
}

export interface DiscoveryStackCardState extends DeckCardLayout {
  zIndex: number;
  canDrag: boolean;
}

export interface DiscoveryStackCycleState extends DeckCardLayout {
  zIndex: number;
}

export interface DiscoveryMorphTargetFrame {
  left: number;
  top: number;
  width: number;
  height: number;
  rotate: number;
  opacity: number;
}

const DECK_CARD_LAYOUTS: readonly DeckCardLayout[] = [
  { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 },
  { x: -4, y: -3, rotate: -2.8, scale: 0.98, opacity: 0.9 },
  { x: 4, y: -6, rotate: 3.6, scale: 0.96, opacity: 0.8 },
  { x: 6, y: -9, rotate: 2.4, scale: 0.94, opacity: 0.72 },
];

function normalizeIndex(index: number, length: number): number {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
}

export function createDiscoveryDeckState(): DiscoveryDeckState {
  return {
    view: "primary",
    deckIndex: 0,
    hasFoundSongs: false,
  };
}

export function getDiscoverySongs<T>(songs: readonly T[]): T[] {
  return songs.slice(1, DISCOVERY_MAX_SONGS + 1);
}

export function getDiscoveryImagePool(
  selectedImages: readonly string[],
  candidateImages: readonly string[],
  maxImages = DISCOVERY_CANDIDATE_POOL_SIZE,
): string[] {
  return Array.from(new Set([...selectedImages, ...candidateImages].filter(Boolean))).slice(0, maxImages);
}

export function getDiscoveryMorphDeckIndex(tileIndex: number): number | null {
  const deckIndex = DISCOVERY_MORPH_SOURCE_INDICES.indexOf(tileIndex as (typeof DISCOVERY_MORPH_SOURCE_INDICES)[number]);
  return deckIndex === -1 ? null : deckIndex;
}

export function getDiscoveryMorphSourceImage(
  tileIndex: number,
  recommendationImages: readonly string[],
  fallbackImage: string,
): string | null {
  const deckIndex = getDiscoveryMorphDeckIndex(tileIndex);
  if (deckIndex === null) return null;
  return recommendationImages[deckIndex] ?? fallbackImage;
}

export interface DiscoveryMorphTargetFrame {
  left: number;
  top: number;
  width: number;
  height: number;
  rotate: number;
  opacity: number;
}

export function getDiscoveryMorphTargetFrame(
  layout: DeckCardLayout,
  chamberWidth: number,
  cardInsetPercent: number,
): DiscoveryMorphTargetFrame {
  const inset = Math.max(0, chamberWidth * cardInsetPercent / 100);
  const baseSize = Math.max(0, chamberWidth - inset * 2);
  const width = baseSize * layout.scale;
  const height = baseSize * layout.scale;
  const round = (value: number) => Number(value.toFixed(4));

  return {
    left: round(inset + layout.x + (baseSize - width) / 2),
    top: round(inset + layout.y + (baseSize - height) / 2),
    width: round(width),
    height: round(height),
    rotate: layout.rotate,
    opacity: layout.opacity,
  };
}

export function getDiscoveryGesture({
  startX,
  endX,
  startY,
  endY,
}: DiscoveryGestureInput, swipeThresholdPx = DISCOVERY_SWIPE_THRESHOLD_PX): DiscoveryGesture {
  const deltaX = endX - startX;
  const deltaY = endY - startY;

  if (
    Math.abs(deltaX) < swipeThresholdPx ||
    Math.abs(deltaX) <= Math.abs(deltaY)
  ) {
    return null;
  }

  return deltaX < 0 ? "next" : "previous";
}

export function isDiscoveryPointInsideChamber(
  point: DiscoveryPoint,
  chamber: DiscoveryChamberBounds,
): boolean {
  return point.x >= chamber.left &&
    point.x <= chamber.right &&
    point.y >= chamber.top &&
    point.y <= chamber.bottom;
}

export function getDiscoveryDragOffset(
  deltaX: number,
  deltaY: number,
  maxHorizontalTravelPx: number,
  maxVerticalTravelPx = maxHorizontalTravelPx,
  resistance = DISCOVERY_DRAG_RESISTANCE,
): DiscoveryDragOffset {
  const clamp = (value: number, limit: number) => {
    const safeLimit = Math.max(0, limit);
    if (safeLimit === 0) return 0;
    const safeResistance = Math.max(1, resistance);
    return Math.sign(value) * safeLimit * Math.tanh(
      Math.abs(value) / (safeLimit * safeResistance),
    );
  };

  return {
    x: clamp(deltaX, maxHorizontalTravelPx),
    y: clamp(deltaY, maxVerticalTravelPx),
  };
}

export function getDiscoveryArtworkDragOffset(
  deltaX: number,
  deltaY: number,
): DiscoveryDragOffset {
  return getDiscoveryDragOffset(
    deltaX,
    deltaY,
    DISCOVERY_ARTWORK_DRAG_MAX_TRAVEL_PX,
    DISCOVERY_ARTWORK_DRAG_MAX_TRAVEL_PX,
    DISCOVERY_ARTWORK_DRAG_RESISTANCE,
  );
}

export function getDiscoveryCardDragOffset(
  deltaX: number,
  deltaY: number,
): DiscoveryDragOffset {
  return getDiscoveryArtworkDragOffset(deltaX, deltaY);
}

export function getDiscoveryArtworkScale(
  deltaX: number,
  deltaY: number,
): number {
  const progress = Math.min(
    1,
    Math.hypot(deltaX, deltaY) / DISCOVERY_ARTWORK_SCALE_DISTANCE_PX,
  );
  return 1 - (1 - DISCOVERY_ARTWORK_MIN_SCALE) * progress;
}

export function getDiscoveryArtworkReleaseVelocity(velocity: number): number {
  return Math.sign(velocity) * Math.min(
    Math.abs(velocity),
    DISCOVERY_ARTWORK_MAX_RELEASE_VELOCITY,
  );
}

export function getDiscoverySwipeAction(
  gesture: DiscoveryGesture,
  view: DiscoveryView,
  startsInsideChamber: boolean,
): DiscoverySwipeAction {
  if (gesture === null) return null;
  if (gesture === "next") return "advance";
  if (view === "deck" && startsInsideChamber) return "advance";
  return "return";
}

export function enterDiscovery(
  state: DiscoveryDeckState,
  discoverySongCount: number,
): DiscoveryDeckState {
  if (discoverySongCount <= 0) return state;
  return {
    ...state,
    view: state.hasFoundSongs ? "deck" : "finding",
    deckIndex: normalizeIndex(state.deckIndex, discoverySongCount),
  };
}

export function finishDiscovery(
  state: DiscoveryDeckState,
  discoverySongCount: number,
): DiscoveryDeckState {
  if (discoverySongCount <= 0) return state;
  return {
    view: "deck",
    deckIndex: normalizeIndex(state.deckIndex, discoverySongCount),
    hasFoundSongs: true,
  };
}

export function shuffleDiscoveryDeck(
  state: DiscoveryDeckState,
  discoverySongCount: number,
): DiscoveryDeckState {
  if (state.view !== "deck" || discoverySongCount <= 0) return state;
  return {
    ...state,
    deckIndex: normalizeIndex(state.deckIndex + 1, discoverySongCount),
  };
}

export function sendDiscoveryCardToBack(
  order: readonly number[],
  cardIndex: number,
): number[] {
  const position = order.indexOf(cardIndex);
  if (position < 0) return [...order];
  return [...order.slice(0, position), ...order.slice(position + 1), cardIndex];
}

export function returnToPrimary(
  state: DiscoveryDeckState,
): DiscoveryDeckState {
  return {
    ...state,
    view: "primary",
  };
}

export function getActiveSongIndex(
  state: DiscoveryDeckState,
  discoverySongCount: number,
): number {
  if (state.view !== "deck" || discoverySongCount <= 0) return 0;
  return normalizeIndex(state.deckIndex, discoverySongCount) + 1;
}

export function getDeckCardLayout(
  position: number,
  tuning: DiscoveryDeckTuning = DEFAULT_DISCOVERY_DECK_TUNING,
): DeckCardLayout {
  if (position <= 0) return { ...DECK_CARD_LAYOUTS[0] };
  const safePosition = Math.max(
    0,
    Math.min(DECK_CARD_LAYOUTS.length - 1, Math.trunc(position)),
  );
  const multiplier = safePosition === 3 ? 1.5 : 1;
  const rotationMultiplier = safePosition === 2 ? 9 / 7 : safePosition === 3 ? 6 / 7 : 1;
  return {
    x: safePosition === 1 ? -tuning.stackX : tuning.stackX * multiplier,
    y: -tuning.stackY * safePosition,
    rotate: safePosition === 1 ? -tuning.stackRotate : tuning.stackRotate * rotationMultiplier,
    scale: Math.max(0.5, Math.min(1, 1 - tuning.stackScaleStep * safePosition)),
    opacity: Math.max(
      0,
      Math.min(1, 1 - tuning.stackOpacityStep * (safePosition === 3 ? 2.8 : safePosition)),
    ),
  };
}

export function getDiscoveryStackCardState(
  position: number,
  cardCount: number,
  isCyclingCard: boolean,
  isCycleActive: boolean,
  tuning: DiscoveryDeckTuning = DEFAULT_DISCOVERY_DECK_TUNING,
): DiscoveryStackCardState {
  return {
    ...getDeckCardLayout(position, tuning),
    zIndex: isCyclingCard
      ? Math.max(1, cardCount + 1)
      : Math.max(1, cardCount - Math.max(0, position)),
    canDrag: position === 0 && !isCycleActive,
  };
}

export function getDiscoveryStackCycleState(
  direction: Exclude<DiscoveryGesture, null>,
  phase: DiscoveryStackCyclePhase,
  backLayout: DeckCardLayout,
  cardCount: number,
): DiscoveryStackCycleState {
  if (phase === "settle") {
    return {
      ...backLayout,
      opacity: 1,
      zIndex: Math.max(1, cardCount + 1),
    };
  }

  const side = direction === "previous" ? 1 : -1;
  return {
    x: side * 24,
    y: 2,
    rotate: side * 5,
    scale: 0.985,
    opacity: 1,
    zIndex: Math.max(1, cardCount + 1),
  };
}
