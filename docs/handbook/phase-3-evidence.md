# Phase 3 Evidence — Content Architecture / Multilingual Implementation

## Scope

Phase 3 continues the production-facing multilingual frontend after the initial localized page contracts.

## Implemented

- Added a localized `/<locale>/fields/` index for all eight supported locales.
- Updated global navigation so Company and Fields resolve to their dedicated localized routes instead of home-page anchors.
- Strengthened the home page project and CEO pathways.
- Added concise summaries to activity-field cards.
- Reviewed non-source locale field capabilities against the supplied corporate source baseline and removed unsupported additions (for example, satellite launchers, biological capsules, disaster-monitoring claims, and other capabilities not present in the approved source material).
- Preserved the rule that Alpha Linux and ZTF Classifier remain descriptive only; repository links are not published.
- No personal phone number or private contact information was added.

## Validation

- Changes are isolated on branch `feat/phase-3-frontend-completion`.
- Main branch remains unchanged by this phase until review/merge.
- Existing main CI is green on commit `a3f9b07a72c76a3fad321e1f37d765ad3f68e226`.
- A new CI run is required for the phase branch before merge.

## Remaining Phase 3 work

- Visual QA on real browser/device sizes.
- Multilingual typography validation with actual rendered strings.
- Production domain / `PUBLIC_SITE_URL`.
- Sitemap and robots configuration after the canonical domain is known.
- Public contact workflow after corporate email architecture is operational.
- Final brand asset decision remains pending; the currently supplied image is an Alpha Team logo/color reference, not an approved PNFK corporate wordmark.

## 2026-11-05 — Visual direction and typography hardening

- The owner provisionally approved the current visual direction and appearance in PR [#86](https://github.com/saeed92m/company-website/pull/86). This is design approval only; it does not authorize merge or Production deployment.
- The homepage is content-first. The oversized orbital illustration and vanity-metric strip remain removed.
- The founding month and official-gazette notice now appear on the Company page, not on the homepage. Organization JSON-LD no longer claims an exact founding date because the supplied profile supports a month, not an exact founding day.
- Seven subsetted variable WOFF2 assets are self-hosted for Vazirmatn (Arabic, Latin, Latin Extended) and IBM Plex Sans (Cyrillic, Cyrillic Extended, Latin, Latin Extended). The original SIL Open Font License notices are committed. Google Fonts runtime requests have been removed.
- Chinese remains on a script-aware system fallback stack. Its actual glyph coverage must be checked on target devices; no CJK font binary is bundled.
- Motorsport and Performance Parts are presented as a development-roadmap area. The public page does not publish a statutory registered-scope claim until current official registration documents are verified.
- Current prototype branch: `design/visual-system-prototype-2026-11-05`. PR #86 remains open and unmerged. Production `main` is unchanged.
- CI on the current validated checkpoint passed 27/27 tests, Astro check (0 errors, 0 warnings), and a 98-page build. Cross-browser PR-build QA is still being completed on the latest head.
- Typography source provenance, subset mapping, and remaining validation are recorded in `docs/design/05-self-hosted-typography.md`.
