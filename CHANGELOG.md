## 2026-11-04 — GitHub Actions pinning (in review)

- Pinned all third-party actions in CI, Browser QA, CodeQL, and GitHub Pages workflows to full commit SHAs. Version comments are retained for maintainers.
- Recorded upstream reference resolution, least-privilege workflow permissions, source-review findings, and security-settings visibility limits in `docs/audits/github-actions-pinning-2026-11-04.md`.
- Validation and merge are pending PR checks. No production settings or runtime application code changed.

## 2026-11-04 — Previous security hardening changes merged

- PR #72 (JSON-LD script-context hardening) was squash-merged to `main` as `c566b02c2d86e5cd16fb9348b6339f7029966bec`. CI and CodeQL passed.
- PR #73 (deterministic npm lockfile and Playwright advisory remediation) was squash-merged to `main` as `a59bb7fc558be2f31d163fed006c55ddfde7588c`.
- Main CI, CodeQL, GitHub Pages build/deploy/smoke, and post-deployment Browser QA passed on the PR #73 merge commit. Browser QA reported 96 route/viewport checks.
- The earlier review notes below describe their status at the time. They are superseded by this closeout record.

## 2026-11-04 — Localized project summary dialogs (review)

- Added a reusable project-card component with native, keyboard-dismissible summary dialogs on the homepage and Projects page.
- Added source-grounded project overviews for Alpha Linux, ZTF Classifier, and Company Platform; distinguished Alpha release phase, ZTF software v1.0.1 release with continued product development, and Company Platform development status.
- Added localized dialog headings, collaboration actions, and close labels for all eight supported locales.
- Added responsive dark/light dialog styling, RTL/LTR layout support, backdrop dismissal, and reduced-motion handling.
- Extended Browser QA to verify three project cards, dialog opening, non-empty overview content, and Escape dismissal on homepage and Projects routes.
- Merged in PR #68 to main as commit c3793220bd637007ea9e4a1f336ba888192a600b. CI, CodeQL, GitHub Pages deployment/smoke tests, and production Chromium Browser QA passed on that commit.

## 2026-11-04 — Company Platform project listing (review)

- Added Company Platform as the third project in the shared localized project content for all eight supported locales.
- Described it as a unified digital platform for company activity and project management, coordination, and development; status is explicitly under development.
- Kept the Company Platform implementation repository separate from the corporate website repository and did not publish a repository URL.
- Updated the Projects content contract and information architecture. Merged in PR #68 to main as commit c3793220bd637007ea9e4a1f336ba888192a600b; deployment and configured automated QA passed.

## 2026-10-18 — Production Pages metadata verification

- Rechecked the live GitHub Pages homepage using a fresh external fetch; it returned HTTP 200 and resolved to the Persian homepage at `/fa/`.
- Verified live Open Graph and Twitter image metadata use the project-base-aware URL `https://saeed92m.github.io/company-website/brand/alpha-team-mark.svg`, addressing the malformed social-image URL previously tracked in issue #52 / PR #61.
- Confirmed latest main commit `1e8a3fd99d4eb34d2082d5560eef81981799fa7e` has successful CI (38985578466), CodeQL (38985578444), Pages deploy/smoke (38985578426), and Playwright Browser QA (38986084634).
- Updated issue #52 with the current evidence. Independent human-operated device/browser visual acceptance remains open; automated checks and external HTTP 200 do not prove visual acceptance on a physical device.

## 2026-10-15 — Supabase migration provenance verification

- Retrieved the exact remote SQL for migration `20261014120423_revoke_public_execution_on_rls_auto_enable`.
- Confirmed the live function ACL matches the intended revocation of EXECUTE from `PUBLIC`, `anon`, and `authenticated`; inspected the `ensure_rls` event-trigger binding.
- Added `docs/audits/supabase-migration-provenance-2026-10-14.md` and updated `docs/decisions/SUPABASE-ASSESSMENT.md`.
- Merged documentation PR #58 as `a1370840bd9e720c99a56aa746b5e628e04368e3`.
- No production database/schema/grant/settings changes were made. The original migration file is still absent from the website repository; Supabase integration remains deferred until a concrete backend requirement is approved.

## 2026-10-14 — Repository and Supabase alignment audit

- Audited the current `main` repository structure, package scripts, static Astro architecture, localization/content organization, CI, CodeQL, Browser QA, and GitHub Pages deployment workflow.
- Inspected the connected `company-website` Supabase project. It is healthy but has no public application tables, views, or policies and is not integrated into the static frontend.
- Updated `docs/decisions/SUPABASE-ASSESSMENT.md` to remove the stale claim that no Supabase projects exist and to document the current verified state and integration gate.
- Added `docs/audits/repository-supabase-alignment-2026-10-14.md` with the inventory, evidence, limitations, and follow-up checklist.
- No database schema, application data, secrets, production settings, or website runtime code were changed. Supabase integration remains deferred until a concrete backend requirement is approved.

## 2026-10-04 — Phase 7 production release closeout

- Removed the homepage CEO Resume CTA after Test 2 review.
- Replaced the Company-page CEO text link with a localized View button after Test 3 review.
- Renamed the CEO navigation item to Management across all eight locales.
- Corrected the English founding-year source to Gregorian 2023.
- Added automated Chromium production QA for mobile and desktop route validation across all eight locales.
- Recorded final release evidence in `docs/handbook/phase-7-evidence.md`.

## 2026-10-03 — Phase 5 content and visual refinements

- Added source/article and PDF/full-text actions to the CEO scientific-publications section.
- Added localized labels for publication actions across all eight locales.
- Refined the six domain cards and field-detail heroes to use their domain-specific artwork as restrained blurred background layers.
- Added the East Azerbaijan Science & Technology Park location note to the localized Contact card.
- Recorded implementation evidence in `docs/handbook/phase-5-evidence.md`.

# Changelog

## 2026-10-03 — Production styling regression fix and QA hardening

- Identified a real production regression from supplied screenshots: shared SiteLayout did not import src/styles/global.css, so deployed pages could return valid HTML while rendering without the intended UI styling.
- Fixed the root cause in PR #38 and merged commit 488aebdfc6c92a54eb9f8e93cb651ca0dac65ad9.
- Added production smoke assertions in PR #39 and merged commit 92f6314e1ad451a43537c15b318f664b404dbf56.
- The deployed smoke test now verifies the production stylesheet link, expected UI CSS selectors, the brand SVG, and all six domain SVG assets in addition to route HTTP 200 checks.
- Automated checks for PR #39 passed: CI run 37119257384 and CodeQL run 37119257379.
- Final release acceptance still requires live browser/device visual confirmation after the post-merge Pages deployment.


## 2026-10-03 — Phase 4 automated production QA closeout

- Confirmed no open GitHub issues or pull requests remain.
- Recorded successful GitHub Pages deployment run `37082876063`.
- Recorded successful build, deploy, and expanded deployed-route smoke validation across all eight locales and public route families.
- Synchronized repository documentation with the actual Phase 4 state.
- Independent browser/device visual QA remains the final release gate.



## 2026-10-02 — Production baseline QA

- Added a generated multilingual XML sitemap covering all supported locales and public routes.
- Added a branded 404 page for GitHub Pages.
- Validated Astro type checking and production build through CI.
- Validated CodeQL analysis successfully.
- Deployed the resulting main commit to GitHub Pages successfully.

## 2026-10-02 — Phase 3 frontend completion

- Added the localized activity-fields index route for all eight supported locales.
- Aligned global navigation with dedicated Company and Fields routes.
- Strengthened home-page project and CEO navigation paths.
- Corrected non-source locale capability translations to remain within the approved company-profile/resume content baseline.
- Recorded implementation evidence in `docs/handbook/phase-3-evidence.md`.

All notable changes to this project will be documented here.

## [Unreleased]

- Repository foundation created.
- Initial engineering and documentation baseline established.
- Corporate website Handbook v0.1.0 established in Notion.

## 2026-10-02

- Phase 1 frontend contracts expanded with localized Company, CEO and Contact routes.
- Shared navigation, skip-link labels, metadata and contact-state messaging are localized across all eight supported locales.
- Public activity copy was aligned with the supplied company profile/resume source hierarchy; unsupported capability claims were removed.

## 2026-10-02

- Added a dedicated localized Projects route while keeping project repository links unpublished.
- Added Organization, Person and WebSite JSON-LD metadata to the shared layout when the production site URL is configured.

## 2026-10-04 — v0.1.0 closeout and accessibility hardening
- Preserved immutable release baseline `v0.1.0`.
- PR #48 added production Browser QA accessibility contract checks.
- Browser QA `37189378543` exposed two unlabeled CEO publication-summary controls.
- PR #49 fixed the defect and corrected the QA accessible-name assertion.
- PR #49 merged as `90e4cd3e696e27b423a05789c2d4824a9ec31706`.
- Final CI `37198896329`, CodeQL `37198896316`, Pages deployment `37198896307`, and Browser QA `37198959825` all passed.
- Current static corporate scope is production-ready.


## 2026-11-04 — JSON-LD script-context hardening (review)

- Added defense-in-depth escaping for HTML-significant characters and Unicode line separators in the serialized JSON-LD payload before Astro inserts it into a script element.
- The existing payload is generated from repository-controlled structured data. This change hardens the script context; it does not claim that all source or dependency security review is complete.
- Proposed on branch `security/jsonld-script-escaping`; validation and merge remain pending.


## 2026-11-04 — Deterministic npm installation and Browser QA dependency security

- Added a generated npm v3 lockfile and validated clean `npm ci`, JSON-LD regression tests, Astro checks, and a 98-page production build with Node.js 22.23.4.
- Reproduced and identified the Browser QA High npm advisory: GHSA-7mvr-c777-76hp affects Playwright versions below 1.55.1. Updated the exact Playwright development dependency to 1.64.1.
- Changed CI, GitHub Pages build, and Browser QA to install from the committed lockfile with `npm ci`.
- Audited the locked dependency graph. Both the full dependency audit and production-only audit report zero vulnerabilities.
- Prepared on branch `maintenance/deterministic-npm-lockfile`; production `main` is unchanged pending PR review and checks.
