# Mobile Swipe Arc Affordance Design

## Intent

On mobile recommendation screens, replace the right-side album preview with a visible empty arc that gently communicates horizontal swipe affordance. The desktop recommendation cue remains unchanged.

## Visual Contract

- Mobile renders one thin white arc at the right edge of the active carousel.
- The arc contains no album image, gradient, label, or other text.
- The default border is 2px white at 85% opacity, making it clearly visible against the current background.
- The default arc is 28px wide and 46% of the carousel height.
- The arc nudges 4px from right to left and back over 1800ms, continuously and delicately.
- Reduced-motion users receive a stationary arc.

## Responsive Contract

- Below the `sm` breakpoint, the mobile SVG arc is rendered and the desktop suggestion dome is hidden.
- At `sm` and above, the mobile arc is hidden and the existing blurred album suggestion dome remains rendered.
- No carousel thresholds, centered snapping, navigation, or active-album interaction behavior changes.

## DialKit Contract

The existing `SONGREC final carousel` panel keeps one `visual` group. It gains only these mobile-affordance controls:

```json
{
  "mobileArcStrokeWidthPx": 2,
  "mobileArcOpacity": 0.85,
  "mobileArcWidthPx": 28,
  "mobileArcHeightPercent": 46,
  "mobileArcNudgeDistancePx": 4,
  "mobileArcNudgeDurationMs": 1800
}
```

## Implementation

`SongResult.tsx` keeps the desktop dome and adds a sibling `mobile-swipe-arc` SVG containing only a stroked Bézier path. `index.css` owns the reduced-motion-safe `mobile-swipe-arc-nudge` keyframes; DialKit values are passed as CSS custom properties for distance and duration.

## Verification

- Focused tests cover the six defaults, DialKit ranges, mobile-only selectors, and reduced-motion keyframes.
- Browser verification confirms the mobile dome is hidden, the white arc is visible with no text/image, the nudge reaches approximately 4px, and normal mobile swipe navigation remains centered.
- Browser verification confirms desktop still shows the original blurred dome and no mobile arc.
