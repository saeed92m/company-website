# Design Tokens — Phase 2

## Status
Working baseline — derived from the approved logo asset and subject to contrast/accessibility validation.

## Brand colors
The supplied logo asset contains a dominant corporate blue and neutral gray.

- Brand Blue: #003C92 — RGB 0,60,146
- Brand Gray: #A8A8A8 — RGB 168,168,168

These values are source brand colors, not a complete UI palette.

### Semantic roles
- brand.primary → Brand Blue
- brand.neutral → Brand Gray
- surface.light → white / near-white
- surface.dark → deep neutral, to be selected during contrast validation
- text.primary → high-contrast neutral
- text.secondary → accessible secondary neutral
- border.default → restrained neutral
- focus → accessible focus treatment derived from the brand system
- success / warning / error / info → semantic colors independent of brand identity

Brand colors must not be used blindly for text/background combinations. Every production combination must pass WCAG contrast validation.

## Typography
The site must support Persian, Arabic, English, Russian, German, Chinese, French and Spanish.

Requirements:
- correct Persian/Arabic shaping
- Cyrillic support
- intended Simplified Chinese glyph coverage
- Latin diacritics
- legible and consistent numerals
- no major performance regression from font loading

Final font selection remains pending validation against real translated strings.

## Spacing
Initial token scale: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128.

## Layout
- Constrain long-form reading width.
- Allow wider containers for technical/visual sections.
- Support RTL/LTR without duplicated layouts.
- Avoid absolute positioning for primary content.
- Prefer CSS logical properties.

## Shape and elevation
- Moderate corner radius.
- Avoid excessive rounded cards.
- Prefer borders, tonal separation and spacing over shadows.
- Reserve elevation for menus, dialogs and floating controls.

## Iconography
- Consistent stroke/weight.
- Semantic icons or explicitly decorative icons.
- Mirror directional icons correctly in RTL.
- Do not use emoji as interface icons.

## Motion
- Fast interaction: approximately 120–180ms
- Standard transition: approximately 200–300ms
- Large layout transition: approximately 300–450ms

Non-essential motion must respect prefers-reduced-motion.

## Component states
Every interactive component should account for:
- default
- hover
- focus-visible
- active/pressed
- disabled
- loading where applicable
- success/error where applicable

## RTL/LTR
Use logical CSS properties, mirror directional icons, preserve semantic reading order, and test navigation, forms and breadcrumbs with real localized strings.

## Validation gates
1. Contrast matrix
2. Multilingual font rendering
3. Real-string expansion tests
4. RTL/LTR component tests
5. Responsive breakpoint tests
6. Accessibility keyboard/focus review
7. Font and asset performance validation

## Source
Brand colors are derived from the supplied company logo asset. The exact asset remains the authoritative visual reference.
