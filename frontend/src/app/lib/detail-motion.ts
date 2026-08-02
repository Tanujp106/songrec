export const RESULT_CONTENT_REVEAL_DELAY_MS = 1300;
export const RESULT_ACTION_HEIGHT = "clamp(48px, 7.6svh, 60px)";

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
