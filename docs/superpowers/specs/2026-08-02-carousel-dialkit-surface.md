# Songrec Final Carousel DialKit Surface

## Goal

Keep only meaningful development-time controls for tuning the final recommendation carousel and remove controls that are dead, redundant, or able to violate product invariants.

## Design

DialKit will expose five focused groups:

- `geometry`: slide width, cover width, track gap, top gap, detail slot height, and detail gap.
- `appearance`: inactive scale, inactive opacity, inactive blur, and album border radius.
- `image`: album crop position on X and Y.
- `motion`: inactive-card spring stiffness, damping, and mass.
- `interaction`: first-swipe threshold, subsequent-swipe threshold, and Embla snap duration.

The active cover remains fixed at scale 1 with no pointer or gyro motion. Embla remains centered, looped for multiple songs, non-free-drag, and non-skip-snapping; those are product invariants and are not DialKit controls. The edge-cue overlay and shadow layer are removed because they are disabled in the standard composition and do not serve the requested final-screen tuning workflow.

DialKit remains development-only with one standard `DialRoot`, one `useDialKit` panel, typed defaults, and versioned persistence.

## Verification

Focused source-contract tests will assert the reduced group names, absence of removed controls, live mapping of the remaining controls, fixed Embla invariants, and the new snap-duration option. The full suite, typechecks, frontend build, and diff check will run afterward.
