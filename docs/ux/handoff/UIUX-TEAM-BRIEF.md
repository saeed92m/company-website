# UI/UX Team Handoff — Company Website

**Prepared:** 2026-11-13  
**Repository:** https://github.com/saeed92m/company-website  
**Baseline branch:** `main`  
**Baseline commit:** `ad395c19f958f0bdc2f0ac235c7264e584347c9a`  
**Package status:** Handoff specification prepared from the repository baseline; not a claim of final UX approval or production acceptance.

## 1. Purpose and expected engagement

This package is for an independent professional UI/UX team. The team must inspect the supplied source and artifacts, evaluate the current experience, and deliver a complete, implementation-ready UX/UI system. Do not assume that the current website is final. Do not redesign from a blank slate without first reviewing accepted decisions and existing implementation.

The requested engagement covers discovery, UX research validation, information architecture, interaction design, visual design, design-system completion, responsive specifications, prototypes, usability validation, and developer handoff.

The output must be sufficiently precise for an engineering team to implement without inventing missing behavior.

## 2. Company identity and non-negotiable facts

- Official Persian legal identity: **شرکت پیشگامان نواندیش فناورگستر کیهان (مسئولیت محدود)**.
- Founder and CEO: **سعید معمارزاده**.
- Primary corporate identity is the registered company name. Alpha Team is not the registered company name and must not be used as the site-wide primary brand.
- Corporate source colors: Blue `#003C91`; Gray `#A8A8A8`. These are source identity colors, not a complete accessible UI palette.
- Six public activity areas: Astronomy, Aerospace, Remote Sensing, Energy, Artificial Intelligence, Motorsport.
- Do not describe all six activity areas as registered statutory scope. The company profile and current README distinguish public activity areas from the narrower registered scope. In particular, Motorsport/Performance Parts is a development-roadmap area pending formal addition to the articles of association; verify legal wording with the owner before publication.
- Do not invent capabilities, customers, partners, awards, certifications, facilities, staff, equipment, metrics, or completed projects.
- Alpha Linux and ZTF Classifier may be described at the approved level, but do not add their GitHub repository links. No repository links should be added without explicit owner approval.
- Company Platform is a separate project and must not be confused with the website repository.

## 3. Product and technical baseline

The website is a multilingual corporate technology/R&D platform, not a generic startup landing page.

- Framework: Astro 7.4.2; static output.
- Language/runtime: TypeScript/JavaScript; Node.js >= 22.23.4.
- Production hosting: GitHub Pages.
- Preview hosting: Cloudflare Pages.
- Current locales: `fa`, `en`, `ar`, `ru`, `de`, `zh`, `fr`, `es`.
- RTL locales: Persian (`fa`) and Arabic (`ar`); all other current locales are LTR.
- Current architecture separates localized content from page components and uses locale-first routes.
- Current repository includes source, assets, fonts, design-system CSS, UX/design documentation, tests, workflows, and audit records.

Do not propose a framework migration as a design deliverable. UX recommendations must respect the current Astro architecture unless a material, evidenced limitation is documented and approved separately.

## 4. Existing audience hypotheses — validate, do not assume

The current UX research baseline identifies these audiences:
1. Prospective partners and organizations.
2. Research and technical collaborators.
3. Potential clients and industrial partners.
4. Investors and strategic stakeholders.
5. General visitors, media, and the public.

The team must validate these audience hypotheses. For each audience, define:
- goals and top tasks;
- information required to make a decision;
- trust questions and evidence expected;
- barriers and accessibility needs;
- preferred contact/collaboration route;
- success criteria.

Use real user research where possible. If access to participants is not available, label assumptions and research limitations. Do not present synthetic personas as validated research.

## 5. Current information architecture and page inventory

The current repository has these page families and localized routes:

| Page family | Current route pattern | Required design coverage |
|---|---|---|
| Locale entry / home | `/{locale}/` | Full homepage, all responsive states |
| Company overview | `/{locale}/company/` | Identity, mission, R&D orientation, legal-scope clarity |
| CEO profile | `/{locale}/company/ceo/` | Approved professional biography and source-backed facts |
| Activity areas index | `/{locale}/fields/` | Six-domain overview and cross-domain relationships |
| Domain detail | `/{locale}/fields/{slug}/` | Six templates/states: astronomy, aerospace, remote sensing, energy, AI, motorsport |
| Projects index | `/{locale}/projects/` | Project status, hierarchy, clear separation of project maturity |
| Project detail | `/{locale}/projects/{slug}/` | Approved project description and status; repository links withheld |
| Contact | `/{locale}/contact/` | Inquiry types, contact path, form states, privacy explanation |
| Not found | `/404.html` or host fallback | Localized recovery and navigation |
| Sitemap / robots | `/sitemap.xml`, `/robots.txt` | Technical SEO; not visual page templates |

The source IA also includes Vision as a proposed content destination. The current route inventory must be checked against live routes and open PRs before adding, removing, or renaming a navigation item. Do not assume every proposed IA page is already implemented.

## 6. Existing design decisions to preserve unless evidence supports change

- Visual direction: technical editorial / research atlas.
- Brand expression: scientific credibility, engineering precision, technology depth, research and development, restrained corporate character.
- Prefer information hierarchy, grids, alignment, data structures, meaningful diagrams, and authentic technical imagery.
- Avoid generic startup templates, gratuitous orbital graphics, cliché space/AI stock images, and decorative effects that do not explain a real capability.
- Night/Dark is the default theme; Day/Light is a first-class selectable theme.
- Preserve the exact owner-supplied logo artwork. Do not redraw, approximate, stretch, crop, rotate, recolor, mask, or substitute it.
- Source colors: `#003C91` and `#A8A8A8`; derive theme-specific semantic colors and validate contrast.
- Current font implementation and provisional type decisions must be verified against the design-system and visual-prototype documents. Do not silently replace fonts. Test actual Persian, Arabic, Latin, Cyrillic, and Simplified Chinese strings.
- Keep the horizontal primary navigation model. Existing content contract explicitly rejects replacing it with a hamburger-only menu, side drawer, or full-screen navigation. If proposing a change, show usability evidence and document the trade-off.
- Keep language selection and theme control visible in the header at all viewport sizes.
- Use semantic HTML, logical CSS properties, visible focus, reduced motion, and touch targets of at least 44 CSS px.
- RTL and LTR are first-class layout modes, not mirrored screenshots.

Relevant accepted decisions:
- `docs/adr/0008-registered-corporate-identity-primary.md`
- `docs/adr/ADR-003-exact-supplied-logo.md`

## 7. Required UI/UX work

### Workstream A — Audit and discovery
- Review the live site and source repository.
- Review all existing UX, design, content, architecture, ADR, and audit documents.
- Capture a baseline of current pages and components.
- Identify design debt, inconsistencies, missing states, and conflicting requirements.
- Separate verified findings from assumptions.
- Do not overwrite the existing approved design direction without an evidence-based change proposal.

### Workstream B — Research and strategy
- Validate audience segments and their top tasks.
- Define value proposition comprehension tests.
- Map user journeys for company discovery, domain exploration, project evaluation, leadership evaluation, and collaboration/contact.
- Identify trust signals and proof requirements.
- Produce a prioritized usability issue register.

### Workstream C — Information architecture
- Validate navigation labels, grouping, hierarchy, page relationships, breadcrumbs, footer, and cross-linking.
- Provide a complete sitemap and route matrix for all eight locales.
- Define the purpose, content hierarchy, primary CTA, secondary CTA, and cross-links for every page template.
- Clearly distinguish activity areas, registered corporate scope, projects, products, capabilities, and future plans.

### Workstream D — Interaction design
Specify all interaction states, including:
- header and expandable navigation groups;
- keyboard, touch, pointer, Escape, outside-click and focus return;
- locale selector and locale fallback;
- theme selector and persistence behavior;
- breadcrumbs and active navigation;
- cards, links, buttons, disclosures, tabs or accordions if used;
- form validation, loading, success, failure, spam/error states;
- 404, empty, unavailable, and external-link states;
- reduced-motion behavior;
- long-text, missing-image, and content-overflow states.

### Workstream E — Visual system
Deliver:
- final visual direction with rationale;
- semantic color tokens for Night and Day themes;
- typography families, weights, scale, line-height, and script fallback matrix;
- spacing, container, grid, breakpoints, borders, radii, elevation, iconography, and motion tokens;
- component inventory and variants;
- component anatomy and responsive behavior;
- content density and image aspect-ratio rules;
- diagrams and data-visualization style;
- design usage and anti-pattern guidance.

### Workstream F — Responsive and localization design
At minimum, design and validate representative widths:
- 360 px narrow mobile;
- 390 px mobile;
- 768 px tablet;
- 1024 px laptop/small desktop;
- 1440 px desktop;
- 1920 px wide desktop.

Test actual translated content in all eight locales. Include long labels, long names, mixed-direction strings, numerals, dates, punctuation, and CJK glyphs. Do not validate localization only with English placeholder text.

### Workstream G — Accessibility and usability
Target WCAG 2.2 AA, subject to a documented conformance assessment. Include:
- keyboard-only operation;
- screen-reader name, role, value and state;
- focus order and focus visibility;
- contrast in both themes;
- zoom and text resize;
- reduced motion;
- touch target size;
- form labels and error association;
- semantic headings and landmarks;
- RTL reading order;
- usability testing with representative users.

Automated axe checks are not a substitute for manual accessibility testing.

## 8. Required deliverables from the UI/UX team

1. **Audit report:** current-state screenshots, issue inventory, severity, evidence, and recommended disposition.
2. **Research report:** methods, participants, limitations, findings, validated tasks, and open questions.
3. **Personas or audience models:** clearly labeled as validated or provisional.
4. **User journeys and task flows:** including collaboration/contact and language switching.
5. **Sitemap and navigation specification:** current and proposed versions with rationale.
6. **Page-template matrix:** all page families, sections, content requirements, CTA, and states.
7. **Low-fidelity wireframes:** desktop, tablet, mobile, RTL and LTR.
8. **High-fidelity Figma design:** complete page templates and responsive variants.
9. **Interactive prototype:** navigation, locale switching, theme switching, primary CTAs, and contact flows.
10. **Design system:** tokens, typography, components, variants, interaction states, usage guidance.
11. **Asset register:** source, license, dimensions, crop, alt-text intent, and usage restrictions.
12. **Localization specification:** all eight locales, RTL/LTR, typography and expansion rules.
13. **Accessibility report:** WCAG 2.2 AA mapping, manual test evidence, and unresolved issues.
14. **Usability test report:** task success, observed failures, severity, and retest.
15. **Developer handoff:** Figma links, inspectable component specs, tokens, measurements, interaction logic, assets, and open questions.
16. **Traceability matrix:** requirement → design artifact → validation method → evidence.
17. **Decision log:** alternatives, rationale, trade-offs, dissent, owner, and approval status.

Do not mark a deliverable complete merely because a Figma frame exists. It must be reviewed and have sufficient implementation detail.

## 9. Figma file structure

Create one Figma project/file with these pages:
1. `00 — Read Me & Project Context`
2. `01 — Research & User Journeys`
3. `02 — Information Architecture`
4. `03 — Wireframes`
5. `04 — Design Foundations`
6. `05 — Components`
7. `06 — Desktop UI`
8. `07 — Tablet UI`
9. `08 — Mobile UI`
10. `09 — RTL & Localization`
11. `10 — Prototype & Flows`
12. `11 — Accessibility & QA`
13. `12 — Handoff & Specs`
14. `99 — Archive / Rejected Concepts`

Use Auto Layout, reusable components, variants, variables/tokens, semantic layer names, and documented responsive constraints. Do not flatten the UI into screenshots. Keep rejected concepts separate from approved design.

## 10. Design acceptance gates

A design handoff is ready only when:
- every current route family is accounted for;
- all required page templates have desktop and mobile layouts;
- tablet and wide desktop behavior is specified;
- RTL and LTR are validated with real strings;
- both themes are designed and contrast-checked;
- navigation is keyboard- and touch-operable;
- every interactive component has all states documented;
- forms have complete error/success/loading/privacy states;
- no unsupported corporate or scientific claim is introduced;
- the supplied logo remains unchanged;
- project maturity and link restrictions are respected;
- assets have source and usage rights recorded;
- developer handoff contains inspectable specs and tokens;
- open issues, assumptions, and decisions are explicit;
- Product Owner reviews and approves the deliverables.

## 11. Known limitations and risks at handoff

This is a source/documentation snapshot, not a certification that the website is complete.

The repository's latest acceptance notes identify follow-up work in areas such as human accessibility review, full-page responsive review, localization quality, contact and privacy decisions, security headers, independent backup storage, and production rollback verification. Re-check the current branch and latest evidence before treating any item as unresolved or complete.

A previous design audit found:
- contact journey and contact mechanism need completion;
- information architecture has proposed extensions that must be reconciled with implemented routes;
- mobile navigation requires interaction and assistive-technology review;
- theme contrast and typography/localization need evidence across real strings;
- production design/operational acceptance was not complete in the audit snapshot.

Do not present a stale audit as a current defect. Re-test and date all findings.

## 12. Working rules and communication

- Use evidence, not personal taste, as the basis for recommendations.
- Apply ASD-STE100 principles where suitable: short sentences, one instruction per sentence, active voice, consistent terms, and defined technical terms.
- Record assumptions and confidence.
- Do not make direct changes to the production branch.
- Deliver design files and specifications through reviewable milestones.
- Do not use AI-generated placeholder content as factual company copy.
- Do not publish project repository links or sensitive personal information.
- Ask the owner only for decisions that cannot be resolved from approved sources.

## 13. Source files to read first

Read these files before starting:
- `README.md`
- `docs/handbook/README.md`
- `docs/content/01-source-of-truth.md`
- `docs/adr/0008-registered-corporate-identity-primary.md`
- `docs/adr/ADR-003-exact-supplied-logo.md`
- `docs/ux/01-user-research.md`
- `docs/ux/02-information-architecture.md`
- `docs/ux/03-page-content-contracts.md`
- `docs/ux/04-wireframes.md`
- `docs/design/01-visual-direction.md`
- `docs/design/02-design-tokens.md`
- `docs/design/03-design-system.md`
- `docs/design/04-visual-prototype.md`
- `docs/audits/website-design-architecture-audit-2026-11-05.md`
- `docs/audits/production-acceptance-addendum-2026-11-09.md`

## 14. Final handoff checklist

- [ ] Current website inspected on live deployment.
- [ ] Main branch and open PRs checked for changes after the package baseline.
- [ ] Every page family captured and reviewed.
- [ ] Eight locales reviewed with real content.
- [ ] RTL and LTR behavior reviewed.
- [ ] Night and Day themes reviewed.
- [ ] Desktop, tablet, and mobile reviewed.
- [ ] Research assumptions and limitations documented.
- [ ] All design deliverables listed in Section 8 delivered.
- [ ] Figma file organized as specified.
- [ ] All assets and licenses recorded.
- [ ] Accessibility and usability tests documented.
- [ ] Design-to-requirement traceability completed.
- [ ] Open issues and unresolved decisions listed.
- [ ] Owner approval recorded.

**Owner approval:** Awaiting review.  
**Design acceptance:** Not yet granted.
