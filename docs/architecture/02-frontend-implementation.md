# Frontend Implementation Architecture

## Decision status

**Implementation baseline — Astro selected for the first production implementation.**

The project previously identified Astro as the preferred candidate. The implementation baseline now adopts Astro because the public site is primarily content-driven and benefits from static output, componentized UI, and an incremental path to interactive islands and future integrations.

## Runtime model
- Static output is the default production target.
- Interactive behavior is introduced only where it provides clear user value.
- Backend/application services remain outside the public frontend until a concrete requirement exists.
- Future APIs, CMS/WordPress, CRM, authenticated portals and research services integrate behind stable content and route contracts.

## Project structure
- `src/pages/` — route entry points.
- `src/layouts/` — shared document/page shells.
- `src/components/` — reusable UI primitives.
- `src/content/` — localized content.
- `src/data/` — structured configuration and navigation metadata.
- `src/styles/` — tokens and global styles.
- `public/` — static brand/media assets.

## Validation
The implementation gate requires dependency installation, `npm run check`, `npm run build`, responsive and RTL/LTR QA, accessibility audit, SEO validation, dependency/security audit, deployment verification and rollback verification.
