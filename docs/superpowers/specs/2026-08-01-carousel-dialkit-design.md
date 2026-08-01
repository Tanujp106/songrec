# Final Carousel DialKit Design

## Goal

Make the final Songrec recommendation screen show a smaller active album cover with adjacent covers visibly peeking in, while adding a development-only standard DialKit surface for tuning the carousel without changing production behavior.

## Constraints

- Keep the existing Embla track as the only swipe surface and preserve looped one-card snapping.
- Preserve the existing fixed song-detail layer and blur crossfade.
- Preserve the 40px track gap as the default source-of-truth value.
- Do not add a manually positioned preview card or horizontal cover offsets.
- Use the normal DialKit panel; do not build a custom tuning UI.
- Mount DialKit only in Vite development mode and never ship its panel in production.
- Keep the change frontend-only and preserve unrelated untracked OG assets.

## Architecture

`frontend/src/app/lib/carousel.ts` will own the typed default carousel tuning values and translate them into Embla options and render layout values. `SongResult` will call one stable `useDialKit` panel and pass the returned values through the existing layout and Motion pipelines. `App` will mount one development-only `DialRoot`, while `main.tsx` will import DialKit's standard stylesheet.

The default geometry will use a 78% slide basis, a 100% cover width inside each slide, and the existing 40px track gap. This creates a visible neighboring card without stacking a second preview system on top of Embla. All values remain adjustable from DialKit so the layout can be tuned against different viewport sizes.

## DialKit controls

The panel id will be `songrec-final-carousel` and the visible panel name will be `SONGREC final carousel`.

- `geometry`: `slideWidthPercent`, `coverWidthPercent`, `trackGapPx`, `carouselTopGapPx`, `detailSlotHeightPx`, `detailGapPx`
- `appearance`: `activeScale`, `inactiveScale`, `inactiveOpacity`, `inactiveBlurPx`, `borderRadiusPx`, `shadowY`, `shadowBlurPx`, `shadowOpacity`
- `image`: `objectPositionXPercent`, `objectPositionYPercent`
- `tilt`: `gyroXStrength`, `gyroYStrength`, `pointerTiltStrength`, `springStiffness`, `springDamping`, `springMass`
- `track`: `loop`, `dragFree`, `skipSnaps`, `alignStart`
- `edgeCue`: `enabled`, `widthPx`, `blurPx`, `opacity`

Controls that are not meaningful to this carousel, such as arbitrary DOM offsets or independent animation timelines, will not be exposed.

## Runtime behavior

DialKit values will be read on every render and connected directly to the existing `Carousel`, `CarouselContent`, `CarouselItem`, album Motion wrapper, image frame, details slot, and edge cue. The panel will be visible on the final screen during local development, persist its own local tuning state under DialKit's stable id, and disappear from production builds.

## Verification

- Add focused tests for the default tuning values, layout translation, Embla options, and Motion mapping.
- Run the focused test suite, both project typechecks, frontend Vite build, and `git diff --check`.
- Verify the existing port 3000 listener serves the active checkout, open the final screen, confirm the DialKit panel is visible, and change the slide-width/cover controls to confirm the live carousel responds.
