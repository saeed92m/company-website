# Corporate Website Handbook

The master project handbook defines the product vision, UX/UI process, information architecture, technical architecture, content governance, localization, SEO, accessibility, performance, security, email, DNS, CI/CD, QA, deployment, operations, governance, future expansion, and master roadmap.

## Master source

The operational master handbook is maintained in Notion:

**Corporate Website — Master Handbook v0.1.0**

The repository documentation is the engineering source for implementation details; Notion remains the project-level knowledge and decision record. The current implementation uses Astro with static output and a locale-first route/content architecture. Significant decisions must be reflected in both places when they affect project direction.

## Current phase

**Phase 6 — Brand & Content Integration — logo replacement, canonical publication sources, multilingual routes, CI/CD and deployed smoke QA complete; independent browser/device visual QA remains the final manual gate**

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
