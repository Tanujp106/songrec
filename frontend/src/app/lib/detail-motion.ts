export const RESULT_CONTENT_REVEAL_DELAY_MS = 1300;
export const RESULT_ACTION_HEIGHT = "clamp(44px, 6.4svh, 52px)";
export const RESULT_ACTION_MAX_WIDTH = "min(100%, 560px)";
export const RESULT_DETAIL_SIDE_PADDING = 24;
export const RESULT_TOP_PADDING = "clamp(12px, 2.8svh, 24px)";
export const RESULT_ACTION_BOTTOM_PADDING = "clamp(20px, 3.5svh, 32px)";
export const RESULT_ACTION_TOP_GAP = "clamp(8px, 2svh, 20px)";
export const RESULT_DETAIL_HEIGHT = "clamp(88px, 14svh, 120px)";
export const RESULT_DISCOVERY_TOP_GAP = "clamp(16px, 4svh, 40px)";
export const RESULT_DETAIL_GAP = "clamp(6px, 1.4svh, 12px)";
export const RESULT_CARD_SIZE = "min(80vw, 55svh, 560px, max(120px, calc(100dvh - 470px)))";

export function getLoadingImagePool(
  images: readonly string[],
  imagesMood: string | null | undefined,
  mood: string,
): string[] {
  if (imagesMood !== mood) return [];
  return Array.from(new Set(images.filter(Boolean))).sort();
}

export function getStableArtworkSource(
  primaryImageUrl: string | null | undefined,
  fallbackImageUrl: string,
): string {
  return primaryImageUrl ?? fallbackImageUrl;
}

export function getResultContentMotion(reducedMotion: boolean) {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: reducedMotion ? 0 : 0.42, ease: "easeOut" as const },
  };
}

export function getSongDetailMotion(reducedMotion: boolean) {
  const blur = reducedMotion ? "blur(0px)" : "blur(12px)";
  const exitBlur = reducedMotion ? "blur(0px)" : "blur(12px)";

  return {
    initial: { opacity: 0, filter: blur },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: exitBlur },
    transition: { duration: reducedMotion ? 0.12 : 0.26, ease: "easeOut" as const }
  };
}
