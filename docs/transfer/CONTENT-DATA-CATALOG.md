# Content and Data Catalog

## 1. Data ownership and source hierarchy

The authoritative content policy is `docs/content/01-source-of-truth.md`.

Use this order:
1. Current explicit owner-approved project decisions.
2. Current supplied CEO resume for the CEO's professional biography, education, experience, projects, publications, skills, memberships, courses/certificates, and professional languages.
3. Current approved company profile for corporate identity and registration facts that have not been superseded by a current explicit decision.

When sources conflict, do not silently reconcile them. Record the conflict and ask the owner to approve the public wording. Do not expose private contact details or sensitive personal data from the resume without approval.

## 2. Content data modules

| File | Data responsibility | Transfer action |
|---|---|---|
| `src/content/site.ts` | Localized site model: company identity, founding/location fields, founder label, tagline, intro, activity domains, projects, navigation | Preserve all locale records; audit factual accuracy and translation completeness |
| `src/content/localized-fields.ts` | Localized domain content and related information | Validate six domain records in every locale |
| `src/content/corporate-copy.ts` | Expanded corporate copy and company narrative | Check against approved company profile and legal wording |
| `src/content/ceo.ts` | CEO profile and professional biography data | Verify every claim against current resume; remove unapproved personal data |
| `src/content/ceo-additional.ts` | Additional CEO sections / supporting details | Check source traceability and publication permission |
| `src/content/domain-projects.ts` | Relationships between domains and projects | Verify links and project maturity labels |
| `src/content/publications.ts` | Publications and publication metadata | Verify exact source record, author list, title, date, identifier, and link |
| `src/content/ui.ts` | Localized interface labels, messages, form/contact and project UI copy | Check all visible states and every locale |
| `src/data/locales.ts` | Locale list, labels, text direction | Keep locale code and direction in sync with route generation |
| `src/data/routes.ts` | Locale-aware route and base-path helper | Test root and non-root deployment base paths |
| `src/data/brand.ts` | Brand asset URL | Check actual approved logo asset and deployment path |
| `src/data/domain-assets.ts` | Domain slug to image path mapping | Verify each mapping against public asset tree |

This catalog describes responsibilities from source inspection. It does not certify that every text string is translated or approved.

## 3. Supported locales and direction

| Code | Language | Direction |
|---|---|---|
| `fa` | Persian | RTL |
| `en` | English | LTR |
| `ar` | Arabic | RTL |
| `ru` | Russian | LTR |
| `de` | German | LTR |
| `zh` | Chinese (Simplified in current font/data baseline) | LTR |
| `fr` | French | LTR |
| `es` | Spanish | LTR |

Persian is the current source language for original corporate copy unless another source is explicitly approved. Verify locale coverage for every page, component, metadata field, validation message, error, empty state, form state, and SEO alternate declaration. Do not infer translation completeness from the locale list.

## 4. Company content model

The public site identifies one company:
- Persian legal identity: **شرکت پیشگامان نواندیش فناورگستر کیهان (مسئولیت محدود)**.
- English display identity in current source: **Pishgaman Novandish Fannavargostar Keyhan (Ltd.)**.
- Founder and CEO: **سعید معمارزاده / Saeed Memarzadeh**.
- Founding year in current README: 2023 (Solar Hijri 1402).
- Location in current site data: Tabriz, East Azerbaijan, Iran.
- Six public activity areas: Astronomy, Aerospace, Remote Sensing, Energy, Artificial Intelligence, Motorsport.

Important legal caveat: README and source-of-truth documents distinguish the six public activity areas from the registered statutory scope. The supplied company profile describes Motorsport / Performance Parts as a development-roadmap area pending formal addition to the articles of association. Do not imply that all six areas are registered statutory activities. Ask for current official registration evidence before publishing a legal-scope statement.

## 5. Domain data

The six domain slugs and public names:
- `astronomy` — Astronomy
- `aerospace` — Aerospace
- `remote-sensing` — Remote Sensing
- `energy` — Energy
- `artificial-intelligence` — Artificial Intelligence
- `motorsport` — Motorsport / Performance Parts

The current Persian and English site content contains domain summaries and capability bullet lists. Review each statement for maturity and source support. Distinguish:
- current demonstrated capability;
- area of activity or research interest;
- intended development;
- future roadmap.

Do not turn a capability list into a claim that the company has delivered every listed product or service.

## 6. Project data and public-link policy

The localized project data includes:

### Alpha Linux
Current description: an AI-native workstation platform based on Ubuntu 26.04 LTS and COSMIC. Current public status is Alpha. The copy explicitly says this does not mean installation is validated on all hardware or that a stable release is available.

### ZTF Classifier
Current description: a CPU-first astronomical data analysis and discovery platform for Zwicky Transient Facility data. Current copy mentions light-curve acquisition and validation, scientific feature generation, machine-learning classification, probability calibration, conformal prediction, and out-of-distribution diagnostics. The software version stated in current content is 1.0.1. The copy also warns that the current benchmark has limited size and reference-label constraints and must not be generalized to the full ZTF population.

### Company Platform
Current description: a separate modular digital foundation for company information, activity areas, projects, products/services, collaboration, consultation, and meeting workflows. It is under development and is separate from this website repository.

**Link policy:** Do not expose GitHub repository URLs for Alpha Linux or ZTF Classifier. Do not expose the Company Platform repository URL. A descriptive website card is allowed at the approved content level.

## 7. Publications, media, and assets

- Publication records are maintained in `src/content/publications.ts`. Verify metadata against the exact owner-supplied publication records.
- Domain image mapping is in `src/data/domain-assets.ts`.
- Public domain and project artwork is in `public/assets/domains/`.
- The current web logo derivative is in `public/brand/alpha-team-mark.svg`; see `public/brand/README.md` for the distinction between supplied master artwork and the current derivative.
- Self-hosted font subsets are in `src/assets/fonts/`; license texts are in `licenses/fonts/`.
- The public repository does not contain every original source file supplied in chat or every external Dropbox/Notion item. Record provenance, licensing, approval, and source location for each asset.

For every public asset, record: filename, media type, dimensions, purpose, source/creator, license/permission, approval status, alt text, locale variants, optimized derivative, and page/component usage. Do not use expiring external share URLs as production asset dependencies.

## 8. Contact and form data

Current UI copy says public contact details and collaboration processes will be published after final privacy review and corporate email configuration. The UX contract lists inquiry categories:
- General inquiry
- Business collaboration
- Research collaboration
- Project inquiry
- Meeting request

Do not invent an email address, phone number, postal address, working form endpoint, CRM route, or data-retention policy. The final transfer must state whether a form is visible, whether it submits anywhere, what data it collects, where it is stored, who receives it, retention, spam protection, error handling, and privacy notice. If no verified backend exists, label the form as pending/non-operational and do not simulate successful submission.

## 9. Content QA and traceability

For each published claim, maintain:
- claim ID;
- exact public wording;
- locale;
- source document and page/section;
- source date/version;
- approval owner and date;
- maturity classification;
- last review date;
- related route and component.

For each locale, test native script rendering, line wrapping, punctuation, numerals, dates, mixed-direction strings, long labels, long names, fallback behavior, and missing translations. For Arabic and Persian, verify semantic order, punctuation, inline LTR terms, icons, and keyboard focus order.

## 10. External source records still to obtain or confirm

The repository references external records that are not automatically contained in the repository ZIP:
- Notion: Corporate Website — Master Handbook v0.1.0.
- Current approved company profile and CEO resume source files.
- Owner-supplied original logo artwork and its final approved derivative.
- External design/Figma source files, if any.
- External Dropbox media source files, if any.
- GitHub repository metadata, issues, PR discussions, Actions logs/artifacts, and settings.

Transfer these through their owners and approved access controls. Do not place sensitive originals into the public repository without a separate publication review.
