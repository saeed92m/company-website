# Corporate Website Handbook

The master project handbook defines the product vision, UX/UI process, information architecture, technical architecture, content governance, localization, SEO, accessibility, performance, security, email, DNS, CI/CD, QA, deployment, operations, governance, future expansion, and master roadmap.

## Master source

The operational master handbook is maintained in Notion:

**Corporate Website — Master Handbook v0.1.0**

The repository documentation is the engineering source for implementation details; Notion remains the project-level knowledge and decision record. The current implementation uses Astro with static output and a locale-first route/content architecture. Significant decisions must be reflected in both places when they affect project direction.

## Current phase

**Phase 3 — Content Architecture / Multilingual Implementation**

## Phase 0 Definition of Done / Evidence

- Repository created and private.
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

CI evidence is required on PR #6 before merge.


## Projects & SEO implementation evidence
- Added `/<locale>/projects/` for all eight locales; Alpha Linux and ZTF Classifier remain descriptive only with no external/repository links.
- Added Organization, Person and WebSite JSON-LD to the shared layout when `PUBLIC_SITE_URL` is configured. Astro's deployment `site` URL is also the prerequisite for canonical/sitemap generation. 
