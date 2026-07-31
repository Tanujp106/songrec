# Stationary Song Details Blur Implementation Plan

**Goal:** Make song metadata change through a blur crossfade while album artwork remains the only swiping element, and obscure the next-album preview until navigation completes.

**Motion package:** `motion@12.23.24` is already installed and imported from `motion/react`; do not add or reinstall a motion dependency.

## Interaction contract

- The album artwork continues its existing left/right swipe behavior.
- The title, artist, and album live in one fixed-height detail slot below the artwork.
- On navigation, outgoing details animate only `opacity` and `filter: blur(...)`; incoming details animate only `opacity` and `filter: blur(0px)`.
- Detail transitions use no positional (`x`/`y`) or size animation, so the text never swipes or shifts layout.
- The primary and secondary action buttons remain stationary; their target updates with the active recommendation.
- The right-side next-album preview remains visible as a cue but uses a clipped, slightly enlarged image with a non-interactive blur treatment. It must not reveal on hover.
- Reduced motion disables blur and uses a short opacity-only crossfade.

## Implementation steps

1. Add a small, tested motion-config helper describing normal and reduced-motion detail states. Tests must prove the states contain blur/opacity but no `x`, `y`, `scale`, or height properties.
2. Split `SongResult` into a stationary frame, an artwork-only swipe layer, and a fixed detail slot. Use `AnimatePresence` around only the detail content.
3. Apply the helper’s Motion states to title, artist, and album; retain existing marquee overflow behavior.
4. Apply a constant blur and oversized crop to the right-side preview image, preserving its current position and swipe cue.
5. Run tests, typecheck, backend/frontend builds, `git diff --check`, and browser verification on the running feature ports. Merge the verified branch into `main` and push `origin/main`.
