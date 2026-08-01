import assert from "node:assert/strict";
import test from "node:test";

import { getAlbumSlideMotion } from "../frontend/src/app/lib/carousel-motion";
import { defaultFinalCarouselDials } from "../frontend/src/app/lib/carousel";

test("maps active and inactive album appearance while carousel position changes", () => {
  const active = getAlbumSlideMotion({ rotateX: 3, rotateY: -2 }, true, defaultFinalCarouselDials);
  const inactive = getAlbumSlideMotion({ rotateX: 3, rotateY: -2 }, false, defaultFinalCarouselDials);

  assert.deepEqual(active, { rotateX: 3, rotateY: -2, scale: 0.9, opacity: 1, filter: "blur(0px)" });
  assert.deepEqual(inactive, { rotateX: 0, rotateY: 0, scale: 0.65, opacity: 0.4, filter: "blur(8px)" });
});

test("maps tuned inactive cover appearance into Motion values", () => {
  const dials = {
    ...defaultFinalCarouselDials,
    appearance: {
      ...defaultFinalCarouselDials.appearance,
      inactiveScale: 0.7,
      inactiveOpacity: 0.4,
      inactiveBlurPx: 5,
    },
  };

  assert.deepEqual(getAlbumSlideMotion({ rotateX: 0, rotateY: 0 }, false, dials), {
    rotateX: 0,
    rotateY: 0,
    scale: 0.7,
    opacity: 0.4,
    filter: "blur(5px)",
  });
});
