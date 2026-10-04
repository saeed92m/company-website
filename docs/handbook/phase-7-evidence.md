# Phase 7 — Production QA and release closeout

Date: 2026-10-04

## Scope

Final production hardening after the Test 1/2/3 visual feedback cycle.

## Completed

- Removed the homepage "CEO Resume" CTA requested in Test 2.
- Replaced the CEO text link on the Company page with a localized View / مشاهده button requested in Test 3.
- Corrected the navigation label from CEO to Management across all eight locales.
- Corrected the English founding-year source text from Solar Hijri 1402 to Gregorian 2023; localized presentation remains handled by src/utils/date-format.ts.
- Added automated Chromium production QA covering all eight locale home/company/CEO/fields/projects/contact routes at mobile (390×844) and desktop (1440×900) viewports.
- Browser QA verifies HTTP success, document language, RTL/LTR direction, title, main/header presence, inline brand SVG, stylesheet presence, visible content, and absence of horizontal overflow.
- Existing deployment smoke QA continues to verify sitemap, robots.txt, all core routes, field routes, stylesheet markers, logo SVG and domain assets.
- Latest main branch automated gates passed: CI, CodeQL, and GitHub Pages deployment.

## Remaining manual limitation

Automated browser QA validates the deployed DOM/layout contract but does not replace human visual judgment for typography, exact spacing, imagery aesthetics, or cross-device rendering on every physical browser. Those are monitored as ongoing QA rather than blockers for the current static corporate release.

## Release status

**Production-ready for the current scope.**

Future work remains intentionally deferred where it depends on external inputs: custom .ir domain/DNS, corporate email, CMS/API/CRM/portal integration, and additional brand assets.
## Post-release accessibility hardening — 2026-10-04
- PR #48 added accessibility contract assertions to production Browser QA.
- Run `37189378543` failed on two unlabeled publication-summary controls on `/fa/company/ceo/` at the mobile viewport; this was a valid defect caught by the new gate.
- PR #49 fixed the controls and corrected the QA accessible-name assertion.
- PR #49 merged as `90e4cd3e696e27b423a05789c2d4824a9ec31706`.
- Final CI `37198896329`, CodeQL `37198896316`, Pages deployment `37198896307`, and production Browser QA `37198959825` all passed.

## Final status

**Production-ready for the current static corporate scope.** `v0.1.0` remains the immutable initial release baseline; post-release hardening is retained on `main`.

## Recovery points
- `v0.1.0` — initial production baseline
- `90e4cd3e696e27b423a05789c2d4824a9ec31706` — hardened production `main`
- `37198959825` — final Browser QA
- `37198896307` — final Pages deployment
