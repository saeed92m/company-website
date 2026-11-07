## 2026-11-07 — Company submenu labels and board profile hero refinement (PR #97)

- Kept the top-level Company navigation group unchanged.
- Renamed its first submenu item to “معرفی” and the former CEO submenu item to “هیئت‌مدیره”; added equivalent labels across all eight supported locales.
- Preserved the existing board/CEO profile route and its content for future revision.
- Removed the oversized decorative logo from the profile hero. The shared site-header logo remains unchanged.
- Added regression tests for localized submenu labels and the logo-free profile hero.
- Changes remain in the PR preview branch. No Production source or deployment was changed.

## 2026-11-07 — Mobile navigation layout correction (PR #97)

- Hide dropdown content while its native disclosure group is closed. This prevents closed submenu content from appearing as an empty horizontal strip.
- Restore the compact mobile header grid: brand and language/theme controls share the first row; the horizontal navigation occupies the next row and can scroll when needed.
- Preserve RTL-aware dropdown positioning, touch targets, and the no-hamburger navigation decision.
- Added regression checks for closed submenu visibility and mobile header structure.
- Pending CI and visual device validation. This change is not merged or deployed to Production.

## 2026-11-07 — Persistent expandable navigation (PR #97)

- Preserved the existing horizontal primary navigation. No hamburger menu, side drawer, or full-screen navigation was introduced.
- Added native expandable dropdown groups for Company and the six activity domains.
- Kept Home, Projects, and Contact as direct navigation links.
- Kept language selection and the light/dark control visible in the header.
- Localized the primary-navigation landmark across all eight supported locales.
- Added Escape dismissal with focus return, outside-click dismissal, and automatic closure after link selection.
- Added responsive dropdown styling for desktop, tablet, and mobile, with minimum 44 CSS-pixel control heights.
- Extended Browser QA to exercise dropdown opening, six-domain link count, Escape behavior, focus return, and outside-click dismissal in Chromium, Firefox, and WebKit at mobile and desktop viewports.
- The Contact page was not changed. Shared technology infrastructure remains planned for the KEYHAN AI domain content; no standalone infrastructure pages were added.
- This change is under review in PR #97. It is not merged or deployed to Production.

## 2026-11-06 — Cross-page whitespace review and spacing normalization

- Reviewed shared section spacing and the page structures for Home, Company, CEO/Management, Projects, Contact, Fields, and the six discipline detail routes.
- Reduced the default vertical gap between sections on standard content pages while preserving larger spacing for the homepage's distinct visual sections.
- Applied a tighter section rhythm to all six discipline detail pages and reduced their internal vertical padding.
- Standardized section-heading bottom spacing on content pages.
- Changes are shared across all eight locales and retain responsive CSS behavior.
- Automated checks and visual review of the new preview build are pending; no Production changes were made.

## 2026-11-06 — Domain detail page layout correction

- Standardized the six localized domain detail routes with a dedicated page layout scope.
- Reduced excessive vertical spacing between content sections and tightened the domain hero.
- Removed decorative list markers from capability cards and aligned capability cards in a responsive grid.
- Presented application areas as a readable full-width content panel.
- Standardized related-project cards and empty-state spacing.
- Applied the same shared styles to all six domains and all eight locales; no domain-specific capability claims or project records were added.
- Automated validation and preview visual confirmation are pending on the latest pull-request commit.

## 2026-11-05 — Visual review, legal-content accuracy, and self-hosted typography

- The owner provisionally approved the current visual direction in PR [#86](https://github.com/saeed92m/company-website/pull/86). This approval does not authorize merge or Production deployment.
- Added seven subsetted variable WOFF2 files for Vazirmatn (Arabic/Latin/Latin Extended) and IBM Plex Sans (Cyrillic/Cyrillic Extended/Latin/Latin Extended). Added the SIL Open Font License notices and source provenance in `docs/design/05-self-hosted-typography.md`.
- Removed the external Google Fonts CSS dependency and its preconnect hints. The browser matrix now checks local font loading and external font requests.
- Moved the founding month and Gazette notice from the homepage to the Company page. Removed the unsupported exact `foundingDate` value from Organization JSON-LD.
- Kept statutory-scope claims off the public page until current official registration documents are verified. The Company page presents Motorsport & Performance Parts as a development-roadmap area, consistent with the supplied company profile.
- Extended CodeQL and Dependency Security Audit pull-request triggers to stacked feature/design branches.
- On latest PR #86 head `b6f530be6c74be32d9c920d44068764ca4636cb3`, CI passed **27/27 tests**, Astro check reported **0 errors and 0 warnings**, and the build generated **98 pages**. CodeQL passed. Dependency Audit reported **0 vulnerabilities** in both the full and production dependency graphs. Browser QA passed **288 PR-build route/viewport checks** (96 each in Chromium, Firefox, and WebKit), including local WOFF2 loading and no external Google Fonts requests. Cloudflare Preview deployment passed; the owner's reported network still could not establish a secure connection to that host. Supabase Preview was skipped; no database changes were made.
- Production `main` remains `ecaa7ab5b931bd20691f5744298be1a34c151234`. No Production source or deployment was changed.

## 2026-11-05 — PR-build browser QA and project-card CSS defect

- Updated PR [#81](https://github.com/saeed92m/company-website/pull/81) to test the built PR itself on `pull_request` events. The workflow builds with the production GitHub Pages base path and serves `dist` under `/company-website`; post-deployment runs continue to test Production.
- Current PR #81 head: `83a8882c8839a00ed9cb9ca4df1232208a149684`. CI [41908868254](https://github.com/saeed92m/company-website/actions/runs/41908868254), CodeQL [41908868213](https://github.com/saeed92m/company-website/actions/runs/41908868213), and Dependency Audit [41908868219](https://github.com/saeed92m/company-website/actions/runs/41908868219) passed. Chromium and Firefox each passed 96 PR-build checks; WebKit installation remains in progress.
- The previous PR #81 head `cda6338...` passed 288 production checks across Chromium, Firefox, and WebKit. Those checks exercised the deployed site, not the PR build.
- Source review found a literal backslash-n before `.project-card{` in `src/styles/global.css`. Opened PR [#83](https://github.com/saeed92m/company-website/pull/83) to restore the CSS selector and add a regression test.
- PR #83 CI [41909341146](https://github.com/saeed92m/company-website/actions/runs/41909341146), CodeQL [41909341109](https://github.com/saeed92m/company-website/actions/runs/41909341109), and Dependency Audit [41909340996](https://github.com/saeed92m/company-website/actions/runs/41909340996) passed. The new regression test passed (3 tests total, 0 failures).
- PRs #81 and #83 remain open and unmerged. No production source or deployment change has been made.

## 2026-11-05 — Production acceptance evidence refresh

- Verified production `main` remains at `06af87e1053e7d25a3efd263ba8fefde0d997589`.
- Re-checked main CI [41896492766](https://github.com/saeed92m/company-website/actions/runs/41896492766), CodeQL [41896492580](https://github.com/saeed92m/company-website/actions/runs/41896492580), GitHub Pages [41896492601](https://github.com/saeed92m/company-website/actions/runs/41896492601), Dependency Security Audit [41896492684](https://github.com/saeed92m/company-website/actions/runs/41896492684), and Chromium Browser QA [41896664184](https://github.com/saeed92m/company-website/actions/runs/41896664184). All jobs completed successfully.
- Re-read the dependency-audit log: both the full locked npm dependency graph and production-only dependency audit reported `found 0 vulnerabilities`.
- Re-read the main Browser QA log: `PASS: 96 production route/viewport checks`.
- Re-checked PR [#81](https://github.com/saeed92m/company-website/pull/81), head `cda633885acd460fbe25e4bc7613c3282c6a90ba). CI, CodeQL, Dependency Security Audit, and Browser QA passed. Chromium, Firefox, and WebKit each reported 96 successful production route/viewport checks (288 total).
- PR #81 changes only `.github/workflows/browser-qa.yml`; it remains open and unmerged. Its Browser QA targets the deployed production URL and does not validate an unmerged application build.
- Production acceptance remains In Progress. Security-setting/alert inventory, branch protection, deployed headers, manual WCAG 2.2 AA, Lighthouse/Core Web Vitals, physical-device review, recovery drills, and private vulnerability reporting remain open. See [Issue #69](https://github.com/saeed92m/company-website/issues/69).
- No production source, deployment, DNS, hosting, email, database, or security setting was changed by this evidence refresh.

## 2026-11-04 — Production acceptance and evidence alignment

- Current production `main`: `1ccc79611aafcade6ca506c42c41ba515284a6af` (PR #77).
- Main CI [41890668100](https://github.com/saeed92m/company-website/actions/runs/41890668100): success on the current commit; repository validation, dependency installation, JSON-LD regression tests, Astro check, and production build passed.
- Main CodeQL [41890668278](https://github.com/saeed92m/company-website/actions/runs/41890668278): workflow success on the current commit. Alert-backlog review remains open.
- GitHub Pages [41890668470](https://github.com/saeed92m/company-website/actions/runs/41890668470): build, deploy, and smoke jobs passed on the current commit.
- Production Chromium Browser QA [41890810578](https://github.com/saeed92m/company-website/actions/runs/41890810578): success; job log confirms 96 route/viewport checks across eight locales, six route families, and mobile/desktop viewports.
- PR #76 aligned README, Handbook, Phase 7 evidence, and Changelog. Production acceptance remains In Progress; see Issue #69.
- PR #75 (logo refresh) was closed without merge at the owner's request. The current repository-local brand SVG remains in production.
- No production runtime, database, DNS, hosting, email, or security settings were changed by this documentation work.

## 2026-11-04 — Security hardening already merged

- PR #72: JSON-LD script-context escaping and regression tests merged to `main`.
- PR #73: deterministic npm lockfile, `npm ci`, and Playwright 1.64.1 advisory remediation merged to `main`.
- PR #74: GitHub Actions references pinned to full commit SHAs in CI, Browser QA, CodeQL, and Pages workflows; least-privilege workflow permissions retained.
- Main-branch validation for the current baseline is recorded above. The successful CodeQL workflow does not establish that the alert backlog is empty.
- PR #75 logo refresh was not merged and is deferred.

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

## 2026-11-06 — UI/UX Phase 1 implementation (review)

- Extended the sticky navigation background and border to the full viewport width while retaining the centered content grid.
- Added a localized Home navigation item and clarified the management destination as the CEO page.
- Improved the Fields page introduction, removed the duplicate heading, and standardized the domain grid to three columns on desktop, two on tablet, and one on mobile.
- Expanded the Projects page introduction in all eight locales. Project repository links remain unpublished.
- Reframed the Contact page as a four-path business engagement gateway. No form backend or public email address was added; meeting requests are not presented as confirmed bookings.
- Applied compact responsive card layouts to CEO profile lists. Language proficiency remains descriptive; no unverified star scores were introduced.
- Converted the homepage management link into a compact secondary action.
- Validation is pending CI and browser review on the pull request preview.

- Added localized homepage sections for the company's development vision, current roadmap stage, and CEO introduction.
- Distinguished the registered legal form from the company name on the homepage, with responsive wrapping on narrow screens.
- Expanded all six localized domain detail routes with capability scope, documented related work where the supplied CV supports it, and a clear development-status note. Motorsport is identified as a roadmap area, not represented as an already registered business scope.
- Added a responsive, localized skills taxonomy to the CEO profile. The groups use the supplied CV skill order and do not assign unverified proficiency scores.
- Added localized application-area descriptions and clarified the methods, technologies, and specialist-scope heading on all six domain detail pages.
- Removed the current-stage statement from the homepage Vision and Development Path section in all eight locales; retained the next-step statement.


## 2026-11-07 — Mobile expandable navigation correction

- Fixed mobile navigation clipping: disclosure submenus now open in normal document flow instead of inside a horizontally scrolling container.
- Changed the mobile navigation row to wrap within the viewport. An expanded group occupies the available row width and displays its submenu below the summary.
- Kept the desktop dropdown positioning and the persistent horizontal navigation pattern. No hamburger menu was added.
- Added regression coverage for mobile wrapping, visible overflow, and in-flow expanded submenus.
- Mobile browser and physical-device visual validation are required before merge.


## 2026-11-08 — Fixed navigation overlay containing block

- Removed backdrop filtering from the sticky header. A filtered ancestor can become the containing block for fixed-position descendants and clip the navigation panel to the header.
- Kept the translucent header background and the glass blur on the menu panel itself.
- Extended Browser QA to verify that the open panel uses viewport-fixed positioning and occupies the expected viewport height without clipping.
- Pending CI, deployment, and physical-device validation. Preview only; no Production change.
