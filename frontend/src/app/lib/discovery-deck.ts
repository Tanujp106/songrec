export const DISCOVERY_SWIPE_THRESHOLD_PX = 72;
export const DISCOVERY_FINDING_DURATION_MS = 1400;
export const DISCOVERY_CHAMBER_REVEAL_DELAY_MS = 1300;
export const DISCOVERY_MAX_SONGS = 4;
export const DISCOVERY_CANDIDATE_POOL_SIZE = 24;

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

export interface DeckCardLayout {
  x: number;
  y: number;
  rotate: number;
  scale: number;
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

export function getDiscoverySwipeAction(
  gesture: DiscoveryGesture,
  view: DiscoveryView,
  startsInsideActiveCard: boolean,
): DiscoverySwipeAction {
  if (gesture === null) return null;
  if (gesture === "next") return "advance";
  if (view === "deck" && startsInsideActiveCard) return "advance";
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
