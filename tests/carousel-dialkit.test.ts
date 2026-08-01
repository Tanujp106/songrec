import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const appSource = fs.readFileSync(new URL("../frontend/src/app/App.tsx", import.meta.url), "utf8");
const mainSource = fs.readFileSync(new URL("../frontend/src/main.tsx", import.meta.url), "utf8");
const resultSource = fs.readFileSync(
  new URL("../frontend/src/app/components/SongResult.tsx", import.meta.url),
  "utf8",
);
const carouselSource = fs.readFileSync(
  new URL("../frontend/src/app/lib/carousel.ts", import.meta.url),
  "utf8",
);

test("defines the complete standard DialKit carousel control surface", () => {
  assert.match(carouselSource, /finalCarouselDialConfig/);
  for (const group of ["geometry", "appearance", "image", "tilt", "track", "edgeCue", "interaction"]) {
    assert.match(carouselSource, new RegExp(group + ":"));
  }
  assert.match(carouselSource, /slideWidthPercent:/);
  assert.match(carouselSource, /inactiveBlurPx:/);
  assert.match(carouselSource, /pointerTiltStrength:/);
  assert.match(carouselSource, /alignStart:/);
  assert.match(carouselSource, /widthPx:/);
  assert.match(carouselSource, /centerActive:/);
  assert.match(carouselSource, /firstSwipeDragThresholdPx:/);
  assert.match(carouselSource, /normalDragThresholdPx:/);
});

test("mounts one development-only DialRoot and the standard stylesheet", () => {
  assert.match(appSource, /import \{ DialRoot \} from ["']dialkit["']/);
  assert.match(appSource, /import\.meta\.env\.DEV \? <DialRoot \/>/);
  assert.match(mainSource, /import ["']dialkit\/styles\.css["']/);
});

test("registers a stable persisted panel and connects dials to the carousel", () => {
  assert.match(resultSource, /useDialKit/);
  assert.match(resultSource, /SONGREC final carousel/);
  assert.match(resultSource, /songrec:final-carousel:v3/);
  assert.match(resultSource, /getFinalCarouselLayout\(carouselDials\)/);
  assert.match(resultSource, /getFinalCarouselOptions\(songs\.length, carouselDials, hasExploredSongs\)/);
  assert.match(resultSource, /getAlbumSlideMotion\(tilt, isActive, carouselDials\)/);
  assert.match(resultSource, /objectPosition/);
  assert.match(resultSource, /edgeCue/);
  assert.match(resultSource, /hasExploredSongs/);
  assert.match(resultSource, /More \$\{mood\} songs you might like/);
});

test("activates the selected slide as soon as Embla selects it", () => {
  assert.match(resultSource, /carouselApi\.on\("select", syncActiveSong\)/);
  assert.doesNotMatch(resultSource, /carouselApi\.on\("settle", syncActiveSong\)/);
});

test("activates a tapped side slide", () => {
  assert.match(resultSource, /onClick=\{!isActive \? \(\) => carouselApi\?\.scrollTo\(index\) : undefined\}/);
});
