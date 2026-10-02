# Localization Architecture

## Supported locales
- `fa` — Persian (RTL)
- `en` — English (LTR)
- `ar` — Arabic (RTL)
- `ru` — Russian (LTR)
- `de` — German (LTR)
- `zh` — Chinese (LTR)
- `fr` — French (LTR)
- `es` — Spanish (LTR)

## Rules
- Persian is the current source/authoring locale unless a later project decision changes this.
- UI strings, navigation labels, metadata and content are localization resources; reusable components must not contain repeated translated copies.
- Direction is derived from locale: Persian and Arabic are RTL; the other locales are LTR.
- Localized pages must expose language-aware `html lang` and direction attributes.
- Production routes must emit canonical URLs and appropriate `hreflang` alternates.
- Translation must preserve approved technical terminology and source-of-truth wording.
- Missing translations must follow an explicit fallback policy and must not silently produce mixed-language production pages.
- Date, number and locale-sensitive formatting must use locale-aware APIs.
- Typography must be validated across Persian/Arabic shaping, Cyrillic, Latin and CJK before final font selection.

## Workflow
Source → Draft → Technical review → Language review → Approval → Publication → Revision history.

## QA matrix
Each release candidate tests all eight locales for routing, metadata, hreflang, text wrapping, RTL/LTR layout, forms, keyboard navigation, responsive breakpoints and glyph coverage.
