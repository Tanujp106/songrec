export function getSongDetailMotion(reducedMotion: boolean) {
  const blur = reducedMotion ? "blur(0px)" : "blur(10px)";
  const exitBlur = reducedMotion ? "blur(0px)" : "blur(8px)";

  return {
    initial: { opacity: 0, filter: blur },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: exitBlur },
    transition: { duration: reducedMotion ? 0.12 : 0.22, ease: "easeOut" as const }
  };
}
