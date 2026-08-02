# Final Carousel Suggestion Dome Design

## Intent

The final recommendation screen keeps one album as the unmistakable active result. A blurred, curved preview at the right edge hints that more recommendations are available. Swiping must have a deterministic commit threshold: a swipe below the threshold returns to the current song, while a swipe at or beyond it advances exactly one song and finishes with that album centered.

## Visual Contract

- The active album remains centered and uses the existing `visual.mainImageWidthPercent` and `visual.borderRadiusPx` DialKit values. Its production cap is `min(82vw, 52svh, 560px)` so a narrow right-side cue remains visible on mobile without exposing a left-side card.
- No previous album artwork is visible on the left at rest or while dragging.
- When more than one song exists, the right edge shows one narrow, vertically curved dome containing the next album artwork. At rest it begins exactly `visual.imageGapPx` after the active album's right edge.
- The dome is slightly visible at rest, expands toward the center during a left swipe, and retracts after release.
- The preview uses the existing `visual.sideImageWidthPercent`, `visual.imageGapPx`, `visual.sideImageBlurPx`, and `visual.sideImageOpacity` values. No interaction or motion controls are added to DialKit.
- The active album has no tap, hover, press, or pointer-tilt effect. Drag feedback is expressed by the dome, not by depressing or scaling the active art.

## Interaction Contract

- Embla remains the snap and loop engine, but native pointer dragging is disabled. Song changes happen only through the explicit gesture controller or keyboard navigation.
- The first committed gesture requires 72 pixels of horizontal displacement. Later gestures require 48 pixels.
- A gesture must be more horizontal than vertical. Vertical page scrolling never changes the song.
- A left swipe at or beyond the current threshold advances exactly one song.
- A right swipe at or beyond the current threshold returns exactly one song. It retains no left-side visual preview.
- Swipe velocity alone never commits a change. A fast short flick below the displacement threshold cancels.
- A cancelled gesture leaves the active index unchanged and returns the dome to its resting width.
- Arrow Right advances one song and Arrow Left returns one song.
- Tapping the active album or the dome does nothing.

## Architecture

`frontend/src/app/lib/carousel.ts` owns pure gesture decisions and fixed interaction constants. It exposes the current threshold and returns `next`, `previous`, or `null` from displacement values, making the first-swipe behavior directly testable.

`frontend/src/app/components/SongResult.tsx` owns transient pointer state and dome reveal progress. It uses pointer capture so mouse, pen, and touch share one path. On release it asks the pure helper for a decision and calls Embla's `scrollNext()` or `scrollPrev()`; Embla's `select` event remains the only source of truth for `activeIndex`.

The Embla track uses full-width slides with centered alignment and `watchDrag: false`. This removes neighboring artwork from the viewport and prevents Embla's internal momentum threshold from making the commit decision. The next-song dome is rendered separately from the track and reads the wrapped next index.

## Motion

- Dome progress is clamped from 0 to 1 using leftward horizontal displacement divided by the current commit threshold.
- At rest, only a narrow cue is visible. It uses a 5% fluid width with a 48px minimum and 80px maximum. At full progress it grows to 25% with a 360px maximum and sweeps left across the active album's right edge; the active artwork itself never translates, scales, or depresses.
- Release animates the dome back to rest. A committed navigation uses the existing carousel snap duration and spring values.
- With reduced motion enabled, progress still communicates the gesture but release and snap transitions become immediate.

## Edge Cases

- Zero or one song: no dome, no swipe navigation, and no invalid wrapped index.
- Pointer cancellation: reset the gesture without changing songs.
- Vertical-dominant movement: reset the horizontal preview and allow vertical scrolling.
- Song list replacement: reset the active song, first-swipe threshold state, and dome progress.
- Looping: the final song previews and advances to the first song.

## Verification

- Unit tests cover 72-pixel first-swipe and 48-pixel later-swipe boundaries, short fast swipe cancellation by displacement, horizontal dominance, wrapped next indices, and the full-width centered Embla options.
- Source-level integration checks confirm native Embla dragging is disabled, only the existing `visual` DialKit group remains, the dome renders the wrapped next song, and active artwork has no tap or hover behavior.
- Typecheck, the complete test suite, and the frontend production build must pass.
- Browser verification must use the already-running Songrec port when available and confirm: center alignment, no left artwork, right dome at rest, progressive reveal, below-threshold cancellation, one-song commit above threshold, and inert active-card taps.
