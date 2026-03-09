Screen: Mood Selection (Home)
Goal: let user select a mood via circular wheel and set popularity with a slider, then tap Recommend.

Layout Structure

Full‑screen card with rounded corners (32px), centered on mobile width.
Background: vertical gradient (mood‑based primary → soft tint), with subtle noise overlay.
Top header: songrec (left) and curated by tanuj (right), serif font, white 90% opacity.
Main prompt centered: “What would you want to listen twin?” in serif, 24px.
Mood wheel: 8 segments around center circle (drag to select).
Center mascot: circular 200px, white background, subtle shadow, ring around it.
Mood label pill under mascot (rounded, translucent, border glow).
Popularity slider below: long pill with ticks and thumb.
Labels: “Underrated” (left), “Popular” (right).
CTA button: full‑width pill, primary mood color, “Recommend”.
Mood System (8 moods)

party
feel-good
soft
indie
retro
sad
love
hiphop
Color Handling

Each mood has primary, primarySoft, glow, pillBg, pillBorder.
Apply color tokens to:
Background gradient
Mood ring stroke/glow
CTA button
Mood pill background/border
Animations

On mood change:
Background gradient crossfade
Ring glow intensity change
Mood label crossfade
Mascot morph/transition (smooth, 300–500ms)
Wheel drag snaps to nearest mood with subtle easing.
Slider thumb animates slightly on drag.
Fonts

Primary serif: Spectral (titles, mood label, prompt).
Secondary sans: Switzer (slider labels, button).
Assets

Mood wheel ring graphic (8 segments)
Mascot illustrations (1 per mood) with transition strategy:
Option: morphable SVGs or Lottie with transitions
If pixel style: 8 pixel mascots, crossfade + micro‑pop
Interaction Behavior

Drag wheel to select mood.
Slider range 0–100 for popularity bias.
Recommend CTA triggers next screen.
