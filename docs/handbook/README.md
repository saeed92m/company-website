# Corporate Website Handbook

The master project handbook defines the product vision, UX/UI process, information architecture, technical architecture, content governance, localization, SEO, accessibility, performance, security, email, DNS, CI/CD, QA, deployment, operations, governance, future expansion, and master roadmap.

## Master source

The operational master handbook is maintained in Notion:

**Corporate Website — Master Handbook v0.1.0**

The repository documentation is the engineering source for implementation details; Notion remains the project-level knowledge and decision record. The current implementation uses Astro with static output and a locale-first route/content architecture. Significant decisions must be reflected in both places when they affect project direction.

## Current phase

**Current status: In Progress — automated release gates pass, but production security and operational acceptance remain open.**

## Current brand and audit decision — 2026-11-05

- ADR 0008 is the current identity decision: the registered legal company name is primary; Alpha Team is only a secondary team/project reference and is not presented as a registered or primary brand.
- Corporate colors: Blue `#003C91`; Gray `#A8A8A8`.
- Night/Dark is the default theme; Day/Light is a first-class selectable theme.
- Live-site audit: 96/96 localized HTML routes returned HTTP 200; the sitemap contains 96 URLs and 864 alternate-language declarations. See `docs/audits/website-design-architecture-audit-2026-11-05.md`.
- Confirmed fixes required: Chinese date suffix duplication, duplicated base path in CEO JSON-LD URL, light-theme contrast gaps, and site-wide Alpha Team identity usage.
- The transparent logo PNG is a review candidate only. Do not publish or commit it as the canonical mark before owner approval.
- The redesign must use a feature branch and PR. Do not change the static Astro architecture or `main` directly.

## Phase 0 Definition of Done / Evidence

- Repository created and public by project decision.
- Main branch established as the production branch.
- Core repository documentation created.
- Handbook index created.
- Branch/PR conventions documented.
- Security baseline documented.
- Initial CI skeleton prepared.
- Architecture decisions recorded.
- Baseline evidence recorded in docs/handbook/phase-0-evidence.md.
- CI workflow is present and the Astro frontend foundation has passed CI on main.


## Phase 1 implementation evidence

The current implementation now includes localized Company, CEO and Contact route contracts for all eight locales. Shared navigation, skip-link labels, CEO section labels, metadata and the Contact publication state are localized. Alpha Linux and ZTF Classifier remain descriptive only and expose no repository URLs.

Content review also removed capability wording that was not directly supported by the current supplied company profile/resume. The website retains the six project-defined activity areas while preserving the source-backed wording for capabilities.

PR #6 was merged after CI validation; Phase 3 implementation is now recorded in `docs/handbook/phase-3-evidence.md`.


## Projects & SEO implementation evidence
- Added `/<locale>/projects/` for all eight locales; Alpha Linux and ZTF Classifier remain descriptive only with no external/repository links.
- Added Organization, Person and WebSite JSON-LD to the shared layout when `PUBLIC_SITE_URL` is configured. Astro's deployment `site` URL is also the prerequisite for canonical/sitemap generation. 


## Phase 4 route and deployment evidence

- Shared navigation uses the centralized locale route helper so GitHub Pages base paths are preserved.
- Root redirect uses the same route helper; it no longer assumes a domain-root deployment.
- Canonical and Open Graph URLs are derived from the current request path and configured site origin.
- Locale alternate links preserve the active content path and deployment base path.
- GitHub Pages deployment is operational on `main`; the latest production deployment completed successfully. The production custom domain remains intentionally deferred until the .ir domain is purchased and DNS is configured.
- Brand integration uses the ALPHA TEAM presentation layer while retaining the legal company identity in content.


## Current Phase 4 execution evidence — 2026-10-02

- PR #15 (base-path routing and SEO URL hardening) merged to `main` as `bec682f0c71ede5d854fcb582b504e74b12ba364`.
- PR #15 CI run `37002030730` completed successfully.
- The deployment workflow is present at `.github/workflows/deploy-pages.yml` and has successfully deployed from `main`.
- Deployment run `37055705802` completed successfully on 2026-10-02; both build and deploy jobs passed.
- The deployment workflow is configured for `https://saeed92m.github.io/company-website` with `/company-website` base-path handling.
- The supplied logo integration is now complete through the canonical SVG web asset; the source raster remains project input rather than a repository runtime dependency.
- Next gate: perform independent browser/device/locale/RTL/SEO/accessibility/performance visual validation against the deployed site, then close the remaining manual release gate.

## Latest visual-system implementation evidence — 2026-10-03

- Premium scientific/engineering visual-system implementation has been applied to the shared layout and global CSS.
- Night/Day theme switching is implemented with persisted user preference; Day imagery remains an intentionally deferred asset set.
- Persian is the default locale; the existing eight-locale route architecture remains selectable from the shared header.
- The approved BEST Dropbox set was re-verified as six domain-specific source assets: Astronomy, Aerospace, Energy, AI, Motorsport, and Remote Sensing. Production must not use expiring Dropbox download URLs.
- A repository domain-asset manifest now maps each domain slug to its future committed asset path.

## Latest validated deployment evidence — 2026-10-03

- No open GitHub issues or pull requests remain at this checkpoint.
- PR #46 (`feat: apply supplied logo and canonical HAL publication links`) was merged to `main` as `70a7b2f970b26c416aa965e701f8b07e1554504c`.
- GitHub Pages run `37124874329` for that exact commit completed successfully with build, deploy, and deployed-route smoke checks.
- The smoke test covers all eight locales, core pages, six field-detail routes per locale, sitemap, robots.txt, the global stylesheet, canonical brand asset references, and all six domain SVG assets.
- The supplied logo is now the canonical `public/brand/alpha-team-mark.svg` used by the header, home hero, and favicon.
- Both scientific-publication actions now point to the exact owner-supplied HAL records; no repository copy of the publications is maintained.
- Remaining release gate is independent browser/device visual QA; no unverified public visual claim is promoted to “complete”.

## Repository visibility decision

The repository is intentionally **public**. This is compatible with the project's public corporate website role and removes the GitHub Free/private-repository constraint for GitHub Pages. Public repository visibility does not change the security rule: secrets, credentials, private keys, unpublished sensitive company information, and other restricted material must remain outside the repository.

The repository's public status must be treated as a current project fact in future handbook updates unless an explicit architecture/governance decision changes it.


## Phase 7 release evidence — 2026-10-04

- Test 2 homepage CEO Resume CTA removed.
- Test 3 CEO text link replaced by localized View/مشاهده button.
- Navigation now uses Management equivalents rather than CEO as the menu label across all locales.
- English founding-year source corrected to Gregorian 2023; presentation remains locale-aware.
- Added `.github/workflows/browser-qa.yml` for deployed Chromium checks at mobile and desktop viewports across all eight locales and core routes.
- Phase evidence is recorded in `docs/handbook/phase-7-evidence.md`.
- Custom `.ir` domain, corporate email, CMS/API/CRM/Portal remain future integrations and are not blockers for the current static release.

## Final Phase 7 closeout evidence — 2026-10-04
- Release `v0.1.0` is published and remains the immutable initial production baseline.
- PR #48 added production Browser QA accessibility contract checks.
- Browser QA run `37189378543` correctly exposed two unlabeled publication-summary controls on the CEO page.
- PR #49 fixed those controls and corrected the Browser QA accessible-name assertion.
- PR #49 merged to `main` as `90e4cd3e696e27b423a05789c2d4824a9ec31706`.
- Final CI `37198896329`: PASS; CodeQL `37198896316`: PASS; GitHub Pages deployment `37198896307`: PASS; production Browser QA `37198959825`: PASS.
- Final production validation therefore passed on the exact hardened `main` commit above.
- No new release/tag is required for this closeout; `v0.1.0` remains the immutable release baseline.

## Recovery baseline
- Hardened production `main`: `90e4cd3e696e27b423a05789c2d4824a9ec31706`.
- Immutable initial production baseline: `v0.1.0`.
- Engineering evidence: `docs/handbook/` and `CHANGELOG.md`.
- Project-level knowledge/decisions: Notion **Corporate Website — Master Handbook v0.1.0**.
- Never back up or commit secrets, credentials, private keys, or unpublished sensitive material.


## Current acceptance status — 2026-11-04

- Production `main` baseline: `c25b16bcbd3ff50c7c1bf7f501116d6aa34da0d9`.
- CI, CodeQL, Pages deployment/smoke, and Chromium Browser QA pass on the current baseline; Browser QA reports 96 route/viewport checks.
- GitHub Actions are pinned to full commit SHAs.
- Logo refresh is deferred. PR #75 was closed without merge. The repository-local SVG remains the deployed brand asset.
- Production acceptance remains open under [Issue #69](https://github.com/saeed92m/company-website/issues/69). Open evidence includes GitHub security settings/alert inventory, deployed security headers, independent WCAG 2.2 AA review, Lighthouse/Core Web Vitals, Firefox/WebKit, physical-device review, backup/restore and rollback drills, and private vulnerability reporting.
- The Supabase migration-provenance issue #57 is separate from the static website runtime and remains open.

Do not use older phase snapshots below as proof of current production acceptance. Use the latest dated audit and Issue #69 for current status.


## Current production acceptance evidence — 2026-11-05

- Production `main`: `06af87e1053e7d25a3efd263ba8fefde0d997589`.
- Main CI, CodeQL, Pages deployment/smoke, dependency audit, and Chromium Browser QA all passed. Dependency audit logs report zero vulnerabilities in both the full locked npm graph and production dependencies. Chromium QA reports 96 checks.
- PR [#81](https://github.com/saeed92m/company-website/pull/81) adds Firefox and WebKit to Browser QA. Its head `cda633885acd460fbe25e4bc7613c3282c6a90ba` passed 96 production checks in each of Chromium, Firefox, and WebKit (288 total). PR #81 remains open and unmerged. It changes the workflow only and tests the deployed production site.
- Branch protection remains a blocker. The last verified branch metadata reported `main.protected=false`, and the rulesets endpoint returned no rulesets. The repository owner must configure protection and required checks in GitHub settings.
- Manual WCAG 2.2 AA, Lighthouse/Core Web Vitals, physical-device review, deployed response headers, GitHub security settings and alert inventory, backup/restore, rollback, and private vulnerability reporting remain open.
- Current status is **In Progress**. See [Issue #69](https://github.com/saeed92m/company-website/issues/69) and `docs/handbook/phase-7-evidence.md`.

Do not use older phase snapshots as proof of current production acceptance.


## Additional verification — 2026-11-05

- PR #81 now tests both the proposed local PR build and the deployed Production site. Current head `83a8882c8839a00ed9cb9ca4df1232208a149684`: Chromium and Firefox each passed 96 checks against the PR build; WebKit installation remains in progress. CI, CodeQL, and Dependency Audit passed.
- Previous PR #81 head `cda6338...` passed 288 production checks across three browser engines.
- PR #83 fixes the malformed `.project-card` CSS selector and adds a regression test. Its CI, CodeQL, and Dependency Audit passed; the regression test passed.
- PRs #81 and #83 remain open and unmerged. Production acceptance remains In Progress. See Issue #69.
