import { defaultFinalCarouselDials, type FinalCarouselDialValues } from "./carousel";

export function getAlbumSlideMotion(
  tilt: { rotateX: number; rotateY: number },
  isActive: boolean,
  dials: FinalCarouselDialValues = defaultFinalCarouselDials,
) {
  return {
    rotateX: isActive ? tilt.rotateX : 0,
    rotateY: isActive ? tilt.rotateY : 0,
    scale: isActive ? dials.appearance.activeScale : dials.appearance.inactiveScale,
    opacity: isActive ? 1 : dials.appearance.inactiveOpacity,
    filter: `blur(${isActive ? 0 : dials.appearance.inactiveBlurPx}px)`,
  };
}
