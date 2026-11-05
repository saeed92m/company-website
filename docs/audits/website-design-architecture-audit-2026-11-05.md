# Website UX, brand, and architecture audit — 2026-11-05

## Status

**Audit: In Progress — initial live-site and source audit completed.** This report records verified findings from the public site and the current repository. It is not a claim that visual, accessibility, performance, or production acceptance is complete.

## Baseline

- Repository: `saeed92m/company-website`
- Production branch: `main`
- Audited repository head: `ecaa7ab5b931bd20691f5744298be1a34c151234`
- Hosting: GitHub Pages
- Framework: Astro 7.4.2, static output
- Locales: `fa`, `en`, `ar`, `ru`, `de`, `zh`, `fr`, `es`
- Direction: `fa` and `ar` RTL; other locales LTR
- Page families: home, company, CEO, fields index, six field details, projects, contact
- Expected localized HTML routes: 12 routes × 8 locales = 96

## Live-site route and link audit

The live site was crawled with a bounded full-site crawl.

| Check | Result |
|---|---|
| Localized HTML pages | 96 found |
| HTTP status for localized HTML pages | 96/96 returned 200 |
| Page titles | 96/96 present |
| Locale `lang` and `dir` | All 96 matched the route locale and direction |
| Unique internal link targets | 96 |
| Internal link targets missing from the crawl | 0 |
| Sitemap | HTTP 200 |
| Sitemap URL entries | 96 |
| Sitemap alternate declarations | 864 (8 locale links + x-default per URL) |
| External links | 6 unique URLs |

External-link verification:
- GitHub profile: HTTP 200.
- Both HAL publication records: HTTP 200.
- LinkedIn, Instagram, and Google Scholar could not be verified by the automated scraper. This is an unverified result, not proof that those links are broken.

This crawl validates route reachability and extracted link targets. It does not replace a human visual review or a full browser interaction test for every page.

## Confirmed findings

### P0 — Corporate identity mismatch

The current shared layout uses ALPHA TEAM in the header, footer, homepage eyebrow, Open Graph site name, structured-data Brand, and WebSite name. The owner has confirmed that the registered company name must be primary and Alpha Team must not be presented as the registered or primary brand.

Required change: implement ADR 0008 across all locales and shared metadata. Preserve only source-supported historical references to Team Alpha in relevant project records.

### P1 — Theme contrast gaps

The current stylesheet has fixed accent colors that remain unchanged in the light theme. Sample WCAG contrast calculations:

| Foreground | Light surface | Contrast | Result for normal text |
|---|---|---:|---|
| `#6FAEFF` | `#F8FAFC` | 2.19:1 | Fail |
| `#78B6FF` | `#FFFFFF` | 2.11:1 | Fail |
| `#79B8FF` | `#F8FAFC` | 1.98:1 | Fail |
| `#2B73D6` | `#FFFFFF` | 4.64:1 | Pass for normal text |

These are representative token checks, not a complete contrast audit. Every actual text, control, icon, border, and focus combination must be checked in both themes.

Required change: define semantic theme tokens for text, muted text, surfaces, borders, focus, links, and controls. Keep `#003C91` and `#A8A8A8` as source brand colors, not universal foreground colors.

### P1 — JSON-LD URL construction

The live homepage JSON-LD contains a malformed `Person.url` with the GitHub Pages base path duplicated:

`https://saeed92m.github.io/company-website/company-website/fa/company/ceo/`

The shared layout concatenates `origin` and a route helper that already includes the deployment base path. Use URL resolution instead of string concatenation and add a regression test.

### P1 — Chinese date formatting

The Chinese CEO page renders membership dates with duplicated year suffixes, for example `2011年年`. The source string already contains the Chinese year suffix and the formatter adds another one.

Required change: normalize the localized date source or format the date without duplicating locale suffixes. Add a regression test for Chinese date text and retain tests for the other seven locales.

### P1 — Logo source and current web mark

The repository currently renders `public/brand/alpha-team-mark.svg` through an inline traced `BrandMark.astro` component. The brand documentation identifies the supplied raster artwork as the source of truth and says the current SVG is only a lightweight derivative.

The owner supplied a high-resolution PNG without text. A transparent PNG candidate was created outside the repository by removing the white background and preserving the visible artwork. It has not been committed or made the production logo. It remains a review candidate until the owner approves the exact source and derivative.

Required change: confirm the final canonical source, compare the derivative against it, then replace the traced SVG only through a reviewed asset-ingestion PR. Keep the source file and derivative provenance documented.

### P1 — Contact journey is incomplete

The current Contact page provides a location and a pending-publication notice. It has no working inquiry form or public contact mechanism. The UX wireframe requires inquiry type, contact mechanism, privacy notice, and success/error states.

Do not add a submission backend until the company approves the destination, data minimization, retention period, access control, and incident-handling process.

### P2 — Information architecture gaps

The UX documents include a Vision page and standalone project pages, but the current route set has no Vision route and no dedicated Alpha Linux or ZTF Classifier detail routes. Project descriptions currently open in modal dialogs.

The domain-detail pages primarily show a title, summary, and capability list. They do not yet provide the full applications, evidence, related projects, and development direction described in the page contracts.

Required change: review page purpose and source-backed content before adding routes. Do not invent project status, capabilities, customers, facilities, or outcomes. Keep Alpha Linux and ZTF Classifier repository links unpublished.

### P2 — Shared CSS maintainability

`screenshot-review.css` loads after `global.css` and overrides typography and section layout. This creates a second cascade layer that must be considered during every visual change.

Required change: consolidate approved responsive typography rules into the main token/component system after capturing the current baseline. Keep visual-only changes separate from route and content logic.

### P2 — Mobile navigation

The current mobile navigation is a horizontally scrollable row. It has no dedicated collapsed-menu trigger. This is functional but does not match the mobile-navigation component described in the wireframe.

Required change: prototype an accessible mobile navigation pattern and validate keyboard, touch, focus, RTL, and long translated labels before implementation.

## Architecture assessment

The current architecture is suitable for a visual redesign without a framework or route rewrite:

- Astro static output.
- Locale-first route generation.
- Shared `SiteLayout.astro`.
- Localized content separated under `src/content/`.
- Locale and route configuration under `src/data/`.
- Global and review CSS separated under `src/styles/`.
- Reusable components under `src/components/`.
- Static brand and domain assets under `public/`.

Recommended change boundaries:

| Change class | Main files | Risk |
|---|---|---|
| Brand text and metadata | `SiteLayout.astro`, `src/content/site.ts`, `src/data/brand.ts` | Medium |
| Logo asset ingestion | `public/brand/`, `BrandMark.astro`, `src/data/brand.ts` | Medium |
| Theme tokens and visual styling | `global.css`, `screenshot-review.css` | Medium |
| Page composition | localized page templates and shared components | Medium |
| Localization/routing architecture | locale routes and page generation | High; avoid unless required |
| Hosting/runtime/framework | Astro config and workflows | High; out of redesign scope |

A visual redesign can preserve the current architecture. It cannot be guaranteed to be risk-free. Use small commits, regression tests, PR-build Browser QA, and reviewable screenshots. Do not change route generation, static output, hosting, or localization contracts as part of the first visual pass.

## Automated validation and repository controls

Verified on the audited `main` commit:
- CI: success.
- CodeQL workflow: success.
- GitHub Pages build/deploy/smoke: success.
- Dependency Security Audit: success.
- Browser QA: Chromium, Firefox, and WebKit jobs all succeeded on the latest main workflow run.

The repository currently has an active `main-protection` ruleset. It requires pull requests, blocks deletion and non-fast-forward updates, and requires these status checks:
- Repository baseline
- CodeQL analysis (javascript-typescript)
- Audit locked npm dependency graph
- browser (chromium)
- browser (firefox)
- browser (webkit)

The ruleset requires zero approving reviews. The production acceptance issue #69 remains open. Automated checks do not close the separate manual WCAG, Lighthouse/Core Web Vitals, physical-device, security-alert inventory, response-header, backup/restore, rollback, and private vulnerability-reporting gates.

## Recommended execution sequence

1. **Identity and asset foundation:** apply ADR 0008; confirm canonical logo; update header, footer, metadata, and structured data.
2. **Theme foundation:** define semantic Night/Day tokens and complete the contrast matrix.
3. **Shared shell:** refine header, mobile navigation, hero, footer, focus, and theme controls.
4. **Page templates:** improve Home, Company, Fields, Domain, Projects, CEO, and Contact without changing route contracts.
5. **Content and IA:** decide whether to add Vision and standalone project pages. Use only approved source-backed content.
6. **Localization QA:** verify all eight locales, RTL/LTR, date and number formatting, and text expansion.
7. **Release QA:** CI, all three browser engines, accessibility, Lighthouse, physical devices, SEO, security, deployment, and rollback.

## Evidence and limits

- Live-site crawl: 97 collected documents (96 HTML pages plus sitemap), all returned HTTP 200.
- Sitemap: 96 URL entries and 864 alternate declarations.
- The three external links verified successfully were the GitHub profile and the two HAL publications.
- Contrast ratios were calculated from the current CSS color values using WCAG relative luminance.
- Source review covered the route/layout/content/style/component/config/test/workflow and project design/architecture documents relevant to the current redesign.
- Manual visual review, assistive-technology review, Lighthouse measurement, and physical-device review remain pending.
