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

## Historical release status — 2026-10-04 (superseded)

**Production-ready for the then-current static scope.** This historical statement does not represent the current production acceptance status.

Future work remains intentionally deferred where it depends on external inputs: custom .ir domain/DNS, corporate email, CMS/API/CRM/portal integration, and additional brand assets.
## Post-release accessibility hardening — 2026-10-04
- PR #48 added accessibility contract assertions to production Browser QA.
- Run `37189378543` failed on two unlabeled publication-summary controls on `/fa/company/ceo/` at the mobile viewport; this was a valid defect caught by the new gate.
- PR #49 fixed the controls and corrected the QA accessible-name assertion.
- PR #49 merged as `90e4cd3e696e27b423a05789c2d4824a9ec31706`.
- Final CI `37198896329`, CodeQL `37198896316`, Pages deployment `37198896307`, and production Browser QA `37198959825` all passed.

## Historical final status — 2026-10-04 (superseded)

**Production-ready for the then-current static corporate scope.** This historical statement does not represent the current production acceptance status. `v0.1.0` remains the immutable initial release baseline; post-release hardening is retained on `main`.

## Recovery points
- `v0.1.0` — initial production baseline
- `90e4cd3e696e27b423a05789c2d4824a9ec31706` — hardened production `main`
- `37198959825` — final Browser QA
- `37198896307` — final Pages deployment


## Post-fix production verification — 2026-10-18

- Verified the current deployed Persian homepage via a fresh external fetch: HTTP 200; canonical destination `https://saeed92m.github.io/company-website/fa/`.
- Verified `og:image` and `twitter:image` resolve to `https://saeed92m.github.io/company-website/brand/alpha-team-mark.svg`, including the repository base path.
- Latest `main` commit checked: `1e8a3fd99d4eb34d2082d5560eef81981799fa7e`.
- CI: [38985578466](https://github.com/saeed92m/company-website/actions/runs/38985578466) — success.
- CodeQL: [38985578444](https://github.com/saeed92m/company-website/actions/runs/38985578444) — success.
- Pages deployment and smoke tests: [38985578426](https://github.com/saeed92m/company-website/actions/runs/38985578426) — success.
- Browser QA across the configured eight-locale mobile/desktop matrix: [38986084634](https://github.com/saeed92m/company-website/actions/runs/38986084634) — success.

### Acceptance boundary

This is fresh external reachability and automated-test evidence, not a claim of human visual approval. Physical-device rendering, typography, perceived spacing, and browser-specific behavior still require an ordinary user-operated browser/device check. Issue #52 remains the tracking record until that evidence is supplied.


## Status clarification — 2026-11-04

The earlier statements that the site was fully production-ready describe a historical acceptance checkpoint. They do not close the current security and operational acceptance work.

Current status: **In Progress**. Production `main` is `1ccc79611aafcade6ca506c42c41ba515284a6af` (PR #77). On this commit:
- CI [41890668100](https://github.com/saeed92m/company-website/actions/runs/41890668100) passed repository validation, `npm ci`, JSON-LD regression tests, Astro check, and production build.
- CodeQL [41890668278](https://github.com/saeed92m/company-website/actions/runs/41890668278) completed successfully. The alert backlog remains a separate review.
- Pages [41890668470](https://github.com/saeed92m/company-website/actions/runs/41890668470) passed build, deploy, and smoke jobs.
- Production Chromium Browser QA [41890810578](https://github.com/saeed92m/company-website/actions/runs/41890810578) passed **96 route/viewport checks** across eight locales, six route families, and mobile/desktop viewports.

Independent WCAG 2.2 AA, Lighthouse/Core Web Vitals, Firefox/WebKit, physical-device review, repository security-setting and alert review, deployed response headers, and backup/restore/rollback evidence remain open in Issue #69.

The logo refresh is deferred. PR #75 was closed without merge; the current repository-local SVG remains in production.


## Current verified state — 2026-11-05

**Production acceptance: In Progress.** The current production `main` commit is `06af87e1053e7d25a3efd263ba8fefde0d997589`.

### Main-branch verification

- CI [41896492766](https://github.com/saeed92m/company-website/actions/runs/41896492766): success. Repository validation, dependency installation, JSON-LD regression tests, Astro check, and production build all passed.
- CodeQL [41896492580](https://github.com/saeed92m/company-website/actions/runs/41896492580): success. Workflow success is not proof that the alert backlog is empty.
- GitHub Pages [41896492601](https://github.com/saeed92m/company-website/actions/runs/41896492601): build, deploy, and smoke jobs all passed.
- Dependency Security Audit [41896492684](https://github.com/saeed92m/company-website/actions/runs/41896492684): both the full locked npm dependency graph and production-only audit reported zero vulnerabilities.
- Chromium Browser QA [41896664184](https://github.com/saeed92m/company-website/actions/runs/41896664184): job log reports `PASS: 96 production route/viewport checks`.

### Cross-browser production verification — PR #81

- PR: [#81](https://github.com/saeed92m/company-website/pull/81)
- Head: `cda633885acd460fbe25e4bc7613c3282c6a90ba`
- Base: `main` at `06af87e1053e7d25a3efd263ba8fefde0d997589`
- Changed file: `.github/workflows/browser-qa.yml` only.
- Browser QA run [41900713833](https://github.com/saeed92m/company-website/actions/runs/41900713833): success.
- Job logs explicitly report 96 successful checks in Chromium, 96 in Firefox, and 96 in WebKit. Total: **288 successful production route/viewport checks**.
- CI [41900713882](https://github.com/saeed92m/company-website/actions/runs/41900713882), CodeQL [41900713688](https://github.com/saeed92m/company-website/actions/runs/41900713688), and Dependency Security Audit [41900713892](https://github.com/saeed92m/company-website/actions/runs/41900713892): success.
- The matrix checks the deployed production URL. It does not validate an unmerged application build.
- PR #81 remains open and unmerged. Production application source and deployment are unchanged by this PR.

### Remaining acceptance gates

- GitHub branch protection and required checks: last verified repository metadata reported `main.protected=false`; the rulesets endpoint returned no rulesets. This requires owner action in GitHub repository settings. The connected GitHub tool cannot configure branch protection.
- Secret Scanning, Push Protection, Dependabot alert inventory, CodeQL alert backlog, and Actions repository permissions: Unverified.
- Deployed HTTPS response headers: Unverified. GitHub Pages does not provide repository-level custom response-header configuration. Do not add a nonfunctional `_headers` file. A CDN/hosting architecture decision is required before enforcing custom headers.
- Independent WCAG 2.2 AA assessment: Pending.
- Lighthouse and Core Web Vitals: Pending.
- Physical-device visual review: Pending.
- Backup/restore and deployment rollback drills: Pending.
- Private vulnerability reporting route: Pending. `SECURITY.md` still refers to a private channel that has not been established.

### Scope boundary

No DNS, custom domain, business email, hosting, production secrets, production database, or production settings were changed. The Contact page remains informational. Do not add a form backend until privacy, retention, access, and incident-handling requirements are approved.

Keep Issue [#69](https://github.com/saeed92m/company-website/issues/69) open until every Definition of Done gate has evidence.


## PR-build browser QA and CSS source review — 2026-11-05

- PR [#81](https://github.com/saeed92m/company-website/pull/81) head `83a8882c8839a00ed9cb9ca4df1232208a149684` now builds the proposed Astro site with `PUBLIC_BASE_PATH=/company-website`, serves the built output under that path, and runs the browser matrix against the PR build.
- Browser QA [41908868252](https://github.com/saeed92m/company-website/actions/runs/41908868252): Chromium 96/96 and Firefox 96/96 passed on the PR build. WebKit browser installation is still in progress. CI [41908868254](https://github.com/saeed92m/company-website/actions/runs/41908868254), CodeQL [41908868213](https://github.com/saeed92m/company-website/actions/runs/41908868213), and Dependency Audit [41908868219](https://github.com/saeed92m/company-website/actions/runs/41908868219) passed.
- The earlier PR #81 head `cda6338...` passed 288 checks on the deployed Production site. It did not test an unmerged app build.
- Source review found a literal `\n` before the `.project-card` selector in `src/styles/global.css`. PR [#83](https://github.com/saeed92m/company-website/pull/83) fixes it and adds a regression test. CI [41909341146](https://github.com/saeed92m/company-website/actions/runs/41909341146), CodeQL [41909341109](https://github.com/saeed92m/company-website/actions/runs/41909341109), and Dependency Audit [41909340996](https://github.com/saeed92m/company-website/actions/runs/41909340996) passed. The new regression test passed.
- PRs #81 and #83 remain open and unmerged. Production is unchanged.

## 2026-11-05 — Production baseline and PR #86 release evidence

### Production baseline

- Production `main` is `ecaa7ab5b931bd20691f5744298be1a34c151234`.
- CI [41940065948](https://github.com/saeed92m/company-website/actions/runs/41940065948), CodeQL [41940066085](https://github.com/saeed92m/company-website/actions/runs/41940066085), GitHub Pages [41940065926](https://github.com/saeed92m/company-website/actions/runs/41940065926), and Dependency Audit [41940065918](https://github.com/saeed92m/company-website/actions/runs/41940065918) completed successfully on this commit.
- Production Browser QA [41940225986](https://github.com/saeed92m/company-website/actions/runs/41940225986) passed 96 route/viewport checks in each of Chromium, Firefox, and WebKit (288 total).
- The active `main-protection` ruleset requires pull requests and required CI, CodeQL, dependency-audit, Chromium, Firefox, and WebKit checks. It blocks deletion and non-fast-forward updates. It currently requires zero approving reviews.

### PR #86 — visual and implementation hardening

- The owner provisionally approved the current visual direction. This does not authorize merge or Production deployment.
- PR #86 remains open, based on `feat/legal-company-identity-theme-foundation-2026-11-05`. PRs #84 and #85 also remain open. Do not merge the stack without separate owner authorization.
- The homepage remains content-first; the orbital graphic and vanity metrics are removed.
- The founding month and Gazette notice are on the Company page. Organization JSON-LD no longer asserts an exact founding date.
- Seven subsetted WOFF2 assets are self-hosted for Vazirmatn and IBM Plex Sans. SIL OFL notices and source provenance are committed. External Google Fonts requests are removed.
- The Company page presents Motorsport & Performance Parts as a development-roadmap area. Do not publish an unverified statutory-scope claim until current official registration documents are checked.
- CodeQL and Dependency Security Audit now run on pull requests targeting stacked `feat/**` and `design/**` branches, not only `main`.

### Latest validation checkpoint

- Code-equivalent PR #86 checkpoint `ce301ca3292f8c93a9809fed1f1d9cd292b0c404`: CI passed 27/27 tests, Astro check reported 0 errors and 0 warnings, and the production build generated 98 pages.
- CodeQL and Dependency Audit passed on that checkpoint.
- Browser QA on the built PR preview passed 96 checks in Chromium and 96 in Firefox. WebKit was still running at the time of this record.
- Latest documentation head `90369471a5d27bb534fe98a8350191b6dd77afbe` has fresh checks running. Update this evidence only after the latest head completes all three browser engines.

### Hosting and network

- Production deployment remains GitHub Pages. Cloudflare Pages is used for PR previews only and is not a Production dependency.
- The owner reported that the Cloudflare Preview URL failed to establish a secure connection from their network. This does not prove a Production GitHub Pages failure.
- VPN-free access from intended user networks, including Iranian mobile networks, remains unverified.

### Remaining acceptance gates

- Secret Scanning and Push Protection settings.
- Dependabot alert inventory and security-update settings.
- CodeQL alert inventory and unresolved high/critical findings.
- GitHub Actions permission review and complete source review.
- Deployed HTTPS response-header verification and an enforceable hosting policy.
- Independent WCAG 2.2 AA assessment.
- Lighthouse/Core Web Vitals.
- Physical-device and target-network access review without VPN.
- Backup/restore and rollback drills.
- Private vulnerability-reporting route and SECURITY.md update.

Keep Issue [#69](https://github.com/saeed92m/company-website/issues/69) open. Production remains unchanged until all gates and the owner's additional pre-release task are complete and separately authorized.
