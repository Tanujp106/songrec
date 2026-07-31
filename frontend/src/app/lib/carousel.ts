const SWIPE_THRESHOLD_PX = 56;

function normalizeIndex(index: number, length: number): number {
  if (length <= 0) return 0;
  return ((index % length) + length) % length;
}

export function getNextIndex(index: number, length: number): number {
  return normalizeIndex(index + 1, length);
}

export function getPreviousIndex(index: number, length: number): number {
  return normalizeIndex(index - 1, length);
}

export function getSwipeDirection({
  startX,
  endX,
  startY,
  endY
}: {
  startX: number;
  endX: number;
  startY: number;
  endY: number;
}): "next" | "previous" | null {
  const deltaX = endX - startX;
  const deltaY = endY - startY;
  if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX || Math.abs(deltaX) <= Math.abs(deltaY)) return null;
  return deltaX < 0 ? "next" : "previous";
}
