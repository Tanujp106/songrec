import assert from "node:assert/strict";
import test from "node:test";

import { getAlbumSlideMotion } from "../frontend/src/app/lib/carousel-motion";

test("keeps album covers sharp while carousel position changes", () => {
  const active = getAlbumSlideMotion({ rotateX: 3, rotateY: -2 }, true);
  const inactive = getAlbumSlideMotion({ rotateX: 3, rotateY: -2 }, false);

  assert.deepEqual(active, { rotateX: 3, rotateY: -2, opacity: 1 });
  assert.deepEqual(inactive, { rotateX: 0, rotateY: 0, opacity: 1 });
  assert.equal("filter" in active, false);
  assert.equal("filter" in inactive, false);
});
