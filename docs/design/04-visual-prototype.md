# Visual Prototype — Design System Implementation

## Status
Prototype implementation prepared on a dedicated branch. It is not a production release.

## Purpose
Apply the approved visual baseline to the existing Astro website so the owner can review real page layouts before the design is frozen.

## Visual direction
- Scientific and engineering-focused corporate identity.
- Restrained technical details; no decorative imagery that implies unsupported capability.
- Original company brand colors remain unchanged: blue `#003C91`, gray `#A8A8A8`.
- Existing company mark remains unchanged. This prototype does not replace or modify the logo asset.
- Night and Day are separate semantic palettes, not simple color inversions.

## Implemented tokens
- Spacing: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128 px.
- Controls: 48 px primary control height; 44 px minimum interaction target.
- Typography: responsive display and heading scale; body text starts at 16 px.
- Shape: 8, 14 and 22 px radius tiers.
- Layout: 1240 px content maximum; 72ch long-form reading measure.
- Motion: short state transitions; reduced-motion override.

## Component coverage
- Header, navigation, language selector and theme toggle.
- Homepage hero and brand presentation.
- Domain and project cards.
- Split information sections, contact CTA and footer.
- Dialog surfaces inherit the semantic theme tokens.

## Validation still required
- Astro build and Astro Check.
- Unit tests, including color contrast and token regression.
- Chromium, Firefox and WebKit.
- Eight locales, including Persian and Arabic RTL.
- Mobile, tablet, laptop and wide desktop.
- Keyboard-only navigation and screen-reader review.
- Image/font loading and performance checks.

## Review rule
This is a reviewable prototype. The owner must approve the visual direction before it becomes the final design system. Do not merge into `main` without explicit approval.
