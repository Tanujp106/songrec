const SWIPE_THRESHOLD_PX = 56;

import type { DialConfig } from "dialkit";

export interface FinalCarouselDialValues {
  geometry: {
    slideWidthPercent: number;
    coverWidthPercent: number;
    trackGapPx: number;
    carouselTopGapPx: number;
    detailSlotHeightPx: number;
    detailGapPx: number;
  };
  appearance: {
    activeScale: number;
    inactiveScale: number;
    inactiveOpacity: number;
    inactiveBlurPx: number;
    borderRadiusPx: number;
    shadowY: number;
    shadowBlurPx: number;
    shadowOpacity: number;
  };
  image: {
    objectPositionXPercent: number;
    objectPositionYPercent: number;
  };
  tilt: {
    gyroXStrength: number;
    gyroYStrength: number;
    pointerTiltStrength: number;
    springStiffness: number;
    springDamping: number;
    springMass: number;
  };
  track: {
    loop: boolean;
    dragFree: boolean;
    skipSnaps: boolean;
    alignStart: boolean;
  };
  edgeCue: {
    enabled: boolean;
    widthPx: number;
    blurPx: number;
    opacity: number;
  };
  interaction: {
    centerActive: boolean;
    firstSwipeDragThresholdPx: number;
    normalDragThresholdPx: number;
  };
}

export const defaultFinalCarouselDials: FinalCarouselDialValues = {
  geometry: {
    slideWidthPercent: 80,
    coverWidthPercent: 100,
    trackGapPx: 4,
    carouselTopGapPx: 24,
    detailSlotHeightPx: 120,
    detailGapPx: 12,
  },
  appearance: {
    activeScale: 0.9,
    inactiveScale: 0.7,
    inactiveOpacity: 0.4,
    inactiveBlurPx: 8,
    borderRadiusPx: 32,
    shadowY: 0,
    shadowBlurPx: 0,
    shadowOpacity: 0,
  },
  image: {
    objectPositionXPercent: 50,
    objectPositionYPercent: 50,
  },
  tilt: {
    gyroXStrength: 6,
    gyroYStrength: 3,
    pointerTiltStrength: 4,
    springStiffness: 260,
    springDamping: 30,
    springMass: 0.6,
  },
  track: {
    loop: true,
    dragFree: true,
    skipSnaps: true,
    alignStart: true,
  },
  edgeCue: {
    enabled: false,
    widthPx: 52,
    blurPx: 14,
    opacity: 0.14,
  },
  interaction: {
    centerActive: true,
    firstSwipeDragThresholdPx: 48,
    normalDragThresholdPx: 12,
  },
};

export const finalCarouselDialConfig = {
  geometry: {
    slideWidthPercent: [80, 55, 100, 1],
    coverWidthPercent: [100, 70, 120, 1],
    trackGapPx: [4, 0, 96, 1],
    carouselTopGapPx: [24, 0, 64, 1],
    detailSlotHeightPx: [120, 48, 160, 1],
    detailGapPx: [12, 0, 48, 1],
  },
  appearance: {
    activeScale: [0.9, 0.7, 1.1, 0.01],
    inactiveScale: [0.7, 0.5, 1, 0.01],
    inactiveOpacity: [0.4, 0, 1, 0.01],
    inactiveBlurPx: [8, 0, 20, 1],
    borderRadiusPx: [32, 0, 96, 1],
    shadowY: [0, 0, 32, 1],
    shadowBlurPx: [0, 0, 64, 1],
    shadowOpacity: [0, 0, 1, 0.01],
  },
  image: {
    objectPositionXPercent: [50, 0, 100, 1],
    objectPositionYPercent: [50, 0, 100, 1],
  },
  tilt: {
    gyroXStrength: [6, 0, 20, 0.5],
    gyroYStrength: [3, 0, 20, 0.5],
    pointerTiltStrength: [4, 0, 16, 0.5],
    springStiffness: [260, 40, 600, 1],
    springDamping: [30, 5, 80, 1],
    springMass: [0.6, 0.1, 2, 0.05],
  },
  track: {
    loop: true,
    dragFree: true,
    skipSnaps: true,
    alignStart: true,
  },
  edgeCue: {
    enabled: false,
    widthPx: [52, 0, 120, 1],
    blurPx: [14, 0, 40, 1],
    opacity: [0.14, 0, 1, 0.01],
  },
  interaction: {
    centerActive: true,
    firstSwipeDragThresholdPx: [48, 10, 80, 1],
    normalDragThresholdPx: [12, 1, 40, 1],
  },
} satisfies DialConfig;

export function getResultScreenLayout() {
  return {
    actionInsetPx: 24,
    carouselInsetPx: 0,
    resultMaxWidth: "none",
  };
}

export function getFinalCarouselLayout(dials: FinalCarouselDialValues = defaultFinalCarouselDials) {
  return {
    albumWidth: `${dials.geometry.coverWidthPercent}%`,
    gapPx: dials.geometry.trackGapPx,
    slideFlexBasis: `${dials.geometry.slideWidthPercent}%`,
    carouselTopGapPx: dials.geometry.carouselTopGapPx,
    detailSlotHeightPx: dials.geometry.detailSlotHeightPx,
    detailGapPx: dials.geometry.detailGapPx,
  };
}

export function getFinalCarouselOptions(
  songCount: number,
  dials: FinalCarouselDialValues = defaultFinalCarouselDials,
  hasInteracted = false,
) {
  return {
    // Centering is the default final-screen composition. Keep alignStart as
    // an escape hatch for experiments when centerActive is turned off.
    align: dials.interaction.centerActive
      ? ("center" as const)
      : dials.track.alignStart
        ? ("start" as const)
        : ("center" as const),
    containScroll: false as const,
    dragThreshold: hasInteracted
      ? dials.interaction.normalDragThresholdPx
      : dials.interaction.firstSwipeDragThresholdPx,
    dragFree: dials.track.dragFree,
    loop: songCount > 1 && dials.track.loop,
    skipSnaps: dials.track.skipSnaps,
  };
}

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

export function getCarouselIndex(selectedSnap: number, length: number): number {
  return normalizeIndex(selectedSnap, length);
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
