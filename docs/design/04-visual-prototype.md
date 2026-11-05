# Visual Prototype v2 — Structural Homepage Redesign

## Status
In progress on the review branch. This version replaces the previous token-only draft because it did not create a sufficiently distinct visual result.

## Direction
Technical editorial / research atlas. The design uses a clear typographic hierarchy, a central orbital identity diagram, structured metrics, and an image-led six-domain index.

## Scope
- Recompose the homepage hero and navigation hierarchy.
- Present six activity areas in a bento-style grid with existing domain artwork.
- Recompose projects, company overview, and contact call to action.
- Keep all copy sourced from existing localized content.
- Support all eight locales, with RTL for Persian and Arabic.
- Keep the company logo artwork unchanged.
- Maintain independent Night and Day palettes.

## Non-goals
- No change to company claims or legal identity.
- No publication of project repository links.
- No production merge before owner review.

## Validation
Build, Astro Check, unit tests, browser QA, mobile layout, eight locales, RTL/LTR, keyboard navigation, and color contrast must pass before the prototype is considered review-ready.

## Typography decision — provisional approval (2026-11-05)

The project owner has provisionally approved the following primary typefaces for the next design iteration:

| Script / language use | Typeface | Decision |
|---|---|---|
| Persian (fa) | Vazirmatn | Provisionally approved |
| English (en) | IBM Plex Sans | Provisionally approved |

### Implementation constraints

- Treat these as approved design choices for the prototype, not as an irreversible or production-final decision.
- Do not silently substitute B Nazanin or Apple SF Pro.
- Before enabling the fonts in production, verify the exact font files, license, required weights, subset coverage, file size, and self-hosting strategy.
- Use appropriate script-specific fallbacks for Arabic and Chinese. Do not assume that Vazirmatn or IBM Plex Sans covers all eight supported locales.
- Test Persian shaping, punctuation, numerals, mixed-direction text, headings, body copy, form controls, and navigation at mobile and desktop sizes.
- Keep typography tokens centralized. Avoid hard-coding font-family declarations in individual components.
- Compare rendering and readability in both Night and Day themes. Confirm layout stability and avoid font-induced cumulative layout shift.
- The font files have not yet been added or loaded by this decision record.

### Next validation

1. Select and verify the exact licensed font assets and supported weights.
2. Define the global font stacks and script-aware fallback stacks.
3. Add typography regression checks and visual samples for fa/en/ar/ru/de/zh/fr/es.
4. Review real browser rendering before treating typography as production-ready.
