# System and Repository Inventory

## 1. Verified repository identity

- Repository: `saeed92m/company-website`
- Visibility: Public (documented project decision).
- Default / production branch: `main`.
- Application: multilingual corporate website.
- Framework: Astro `7.4.2`.
- Output mode: static.
- Runtime requirement: Node.js `>=22.23.4`.
- Package manager lockfile: `package-lock.json`.
- Production hosting: GitHub Pages.
- PR preview hosting: Cloudflare Pages.
- Configurable deployment values: `PUBLIC_SITE_URL`, `PUBLIC_BASE_PATH` (see `astro.config.mjs` and workflow files).

The repository is not a monorepo for the company's other products.

## 2. Repository tree inventory

The transfer branch tree was queried through the GitHub Git Trees API on 2026-11-13. It returned **181 tree entries**, including directory entries. This is a point-in-time inventory; rerun it against the final transfer SHA before release. The complete tree is present in the Git repository itself.

### Root and project controls

- `.github/dependabot.yml`
- `.github/workflows/`
- `README.md`
- `CHANGELOG.md`
- `CONTRIBUTING.md`
- `SECURITY.md`
- `package.json`
- `package-lock.json`
- `astro.config.mjs`
- `tsconfig.json`

### Application source

- `src/components/`: `BrandMark.astro`, `ProjectCards.astro`
- `src/layouts/`: `SiteLayout.astro`
- `src/content/`: `site.ts`, `localized-fields.ts`, `corporate-copy.ts`, `ceo.ts`, `ceo-additional.ts`, `domain-projects.ts`, `publications.ts`, `ui.ts`
- `src/data/`: `brand.ts`, `domain-assets.ts`, `locales.ts`, `routes.ts`
- `src/pages/`:
  - `index.astro`, `404.astro`
  - `[locale]/index.astro`
  - `[locale]/company/index.astro`
  - `[locale]/company/ceo.astro`
  - `[locale]/fields/index.astro`
  - `[locale]/fields/[slug].astro`
  - `[locale]/projects/index.astro`
  - `[locale]/projects/[slug].astro`
  - `[locale]/contact/index.astro`
  - `robots.txt.ts`, `sitemap.xml.ts`
- `src/styles/`: `global.css`, `design-system.css`, `screenshot-review.css`
- `src/utils/`: date formatting, JSON-LD serialization, and site URL utilities.

### Public assets and fonts

- `public/brand/`: current SVG web mark and brand asset notes.
- `public/favicon.svg`
- `public/assets/domains/`: six domain illustrations, six SVG counterparts, three project/Company Platform artwork files, and a six-domain overview image.
- `src/assets/fonts/`: self-hosted IBM Plex Sans and Vazirmatn WOFF2 subsets.
- `licenses/fonts/`: font license text.
- `scripts/`: WebP optimization and sitemap validation scripts.

The exact logo master files supplied by the owner are documented in `public/brand/README.md`. The repository notes that the current SVG is a lightweight derivative and must not be mistaken for the final approved master. Recheck owner approval and source asset ingestion before final brand acceptance.

### Tests and validation

- `tests/`: brand identity, date format, design system, navigation, project artwork/pages, JSON-LD serialization, site URL, and theme contrast tests.
- `test/`: global CSS regression test.
- `scripts/optimize-static-webp.test.mjs`
- `scripts/validate-sitemap.py`

Run `npm test`, `npm run check`, and `npm run build`. Inspect the scripts and test output; this inventory does not claim that the commands were run for this transfer branch.

### Documentation

- `docs/adr/`: architecture and identity decisions.
- `docs/architecture/`: frontend and localization architecture.
- `docs/audits/`: design/architecture, security, dependency, workflow, operational and production-acceptance evidence.
- `docs/content/`: source-of-truth and publication rules.
- `docs/decisions/`: Supabase assessment and related decisions.
- `docs/design/`: visual direction, tokens, design system, prototype, typography.
- `docs/handbook/`: project handbook and phase evidence.
- `docs/operations/`: backup, restore and recovery procedures.
- `docs/seo/`: indexing guidance.
- `docs/ux/`: research, IA, content contracts, wireframes and UI/UX handoff.
- `docs/transfer/`: this complete project transfer package.

## 3. Route and page-template inventory

Current route templates are generated from locale-first page components. The page families documented by the source are:

| Family | Route pattern |
|---|---|
| Home | `/{locale}/` |
| Company | `/{locale}/company/` |
| CEO / Management | `/{locale}/company/ceo/` |
| Activity domains index | `/{locale}/fields/` |
| Domain detail | `/{locale}/fields/{slug}/` |
| Projects index | `/{locale}/projects/` |
| Project detail | `/{locale}/projects/{slug}/` |
| Contact | `/{locale}/contact/` |
| Not found | `/404.html` or host fallback |
| Sitemap | `/sitemap.xml` |
| Robots | `/robots.txt` |

The domain slugs are `astronomy`, `aerospace`, `remote-sensing`, `energy`, `artificial-intelligence`, and `motorsport`.

Project records currently include Alpha Linux, ZTF Classifier, and Company Platform in the localized content. Do not infer that every project has a detail route: the IA explicitly says Company Platform is a listing entry only. Confirm actual generated routes from the final build output.

The handbook records a live audit of 96 localized HTML routes, 96 sitemap URLs, and 864 alternate-language declarations on 2026-11-05. Treat this as historical evidence, not proof of the current transfer branch. Re-run route and sitemap validation against the exact final commit and deployed site.

## 4. Technology and data flow

- Astro generates static HTML.
- Content and locale metadata are maintained in TypeScript modules under `src/content/` and `src/data/`.
- Page templates consume these data modules.
- Shared layout and reusable components provide site chrome and project cards.
- Styles are maintained in the global and design-system stylesheets.
- Public assets are served from `public/`; font files are self-hosted.
- Sitemap and robots output are generated by dedicated Astro endpoints.
- JSON-LD and canonical/alternate URL behavior depend on the configured public site URL and base path.

This repository has no confirmed production CMS, application database, server-side form processor, or CRM integration. Supabase documentation says it is outside the static website runtime; the 2026-11-08 inspection reported no public-schema tables. Do not add or assume database dependencies without a separately approved architecture decision.

## 5. Design and brand baseline

- Primary identity: registered company name, not Alpha Team.
- Brand source colors: blue `#003C91`, gray `#A8A8A8`.
- Night/Dark is the default theme; Day/Light is a first-class theme.
- Exact owner-supplied logo artwork must be preserved. Do not redraw, stretch, crop, rotate, recolor, mask, or substitute it.
- Current documented visual direction: technical editorial / research atlas.
- Use semantic HTML, logical CSS properties, visible focus, reduced motion, and touch targets of at least 44 CSS px.
- Keep RTL and LTR as first-class layout modes.

See ADRs `0008-registered-corporate-identity-primary.md` and `ADR-003-exact-supplied-logo.md`, plus `docs/design/`.

## 6. Branch, release, and history

A ZIP is not a Git repository and does not preserve commit history or refs. For an engineering transfer, clone or mirror the repository and verify:
- all required branches and tags;
- latest `main` SHA;
- release tags;
- open and merged PR references;
- Git bundle integrity with `git fsck --full`.

Do not merge this documentation branch or change production as part of the transfer without the normal review and owner authorization.
