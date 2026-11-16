# Completeness and Acceptance Matrix

## 1. How to use this matrix

Status values:
- **Verified** — direct evidence exists for the exact commit/environment.
- **In progress** — implementation or evidence exists, but acceptance is incomplete.
- **Blocked** — cannot proceed until a named dependency or owner decision is resolved.
- **Not verified** — no current evidence was inspected.
- **Deferred** — intentionally outside current scope.

A checked file or an existing workflow is not proof that the associated capability passed. Attach evidence links, commit SHA, run IDs, dates, and reviewer for every Verified item.

## 2. Transfer scope matrix

| Area | Required transfer material | Current evidence / source | Status |
|---|---|---|---|
| Repository source | Full source snapshot and exact commit SHA | Git tree inventory in SYSTEM-INVENTORY.md | In progress — final SHA must be pinned |
| Git history | Branches, tags, refs, commit history | GitHub repository / mirror | Not verified in ZIP |
| Product context | Product purpose, company identity, audience, scope | README, handbook, UX brief | In progress — owner review |
| UX/UI | Research, IA, page contracts, wireframes, tokens, design system | docs/ux and docs/design | In progress — design acceptance not granted |
| Page inventory | All routes and templates | src/pages and route audit | In progress — rebuild and compare deployed routes |
| Content | All localized source data and publication metadata | src/content and docs/content | In progress — claim/locale QA required |
| Legal/corporate facts | Legal name, statutory scope, founder identity | approved company profile and source-of-truth | Blocked for legal-scope claims pending current official evidence |
| CEO profile | Resume-backed public biography | src/content/ceo*.ts and current resume | In progress — privacy and claim review |
| Domain content | Six domain descriptions and capability maturity | site.ts and localized-fields.ts | In progress — source and maturity review |
| Projects | Project status, maturity, relation, link policy | site.ts, project contracts | In progress — no repo links without approval |
| Media/assets | Original sources, derivatives, licenses, alt text, usage | public/assets, public/brand, font licenses | In progress — provenance/approval audit |
| Localization | Eight locales, native scripts, translation completeness | locales.ts and localized content | In progress — human language review |
| RTL/LTR | Persian/Arabic and six LTR locales | locale metadata and CSS | In progress — manual verification |
| Runtime | Astro static build and Node requirements | package.json, astro.config.mjs | Verified as configured; clean build not run for this package |
| Tests | Unit/regression tests and scripts | tests/, test/, scripts/ | In progress — exact-commit run required |
| CI/CD | Workflow definitions and run evidence | .github/workflows | In progress — check exact head commit |
| SEO | Sitemap, robots, canonical, alternate links, JSON-LD | src/pages, src/utils, docs/seo | In progress — live validation required |
| Accessibility | WCAG 2.2 AA | workflow + manual assessment requirement | In progress — independent manual assessment open |
| Performance | Lighthouse/Core Web Vitals | workflow + audit requirement | In progress — representative live measurements open |
| Security | CodeQL, dependency audit, source review, headers, GitHub settings | SECURITY.md, audit docs, workflows | In progress — open gates remain |
| Contact/privacy | Data collection, delivery, consent, retention, privacy | ui.ts and content contracts | Blocked — contact publication and email setup pending |
| Deployment | GitHub Pages production, Cloudflare PR preview | README and workflows | Verified as documented; revalidate current production |
| Backup | Git mirror/bundle, external copy, restore evidence | operations runbooks | In progress — external backup/restore drill pending |
| Rollback | Procedure and executed drill | production-recovery.md | In progress — drill not executed |
| Email | Independent corporate email architecture | handbook scope | Deferred / owner decision |
| CMS/API/CRM/Portal | Future integration boundaries | README and architecture docs | Deferred — not in initial scope |
| Notion handbook | External Master Handbook | handbook index | Not included in ZIP; separate authorized transfer required |
| GitHub metadata | Issues, PRs, comments, settings, rulesets, Actions artifacts | GitHub account | Not included in ZIP; separate export required |
| Production acceptance | All release gates and owner approval | Issue #69 and dated audits | In progress — not approved |

## 3. Mandatory final verification

### Repository and source
- [ ] Record exact final transfer commit SHA.
- [ ] Record exact production `main` SHA and compare it with transfer baseline.
- [ ] Record all open PRs, branches and tags relevant to the handoff.
- [ ] Confirm complete archive download and SHA-256.
- [ ] For history-preserving transfer, clone/mirror and verify refs with `git fsck --full`.
- [ ] Confirm no secrets or private information are present in tracked files or generated artifacts.

### Content and data
- [ ] Inventory every content/data module and every locale.
- [ ] Confirm every public claim against its source.
- [ ] Confirm legal scope and company facts against current approved records.
- [ ] Verify all CEO claims and remove unapproved personal information.
- [ ] Confirm project maturity, version statements, and repository-link restrictions.
- [ ] Verify publication identifiers and external URLs.
- [ ] Inventory every image, font, logo, icon and license.
- [ ] Confirm no broken assets, placeholder copy, or stale references remain.

### Routes and functionality
- [ ] Generate route inventory from the exact build.
- [ ] Compare generated routes with the deployed sitemap and live HTTP status.
- [ ] Verify navigation, dialogs, language switcher, theme control, and all interactive states.
- [ ] Verify contact UI does not claim successful delivery without a working approved endpoint.
- [ ] Verify 404, empty, unavailable, loading, validation, success and failure states.

### Quality
- [ ] `npm ci`
- [ ] `npm run check`
- [ ] `npm test`
- [ ] `npm run build`
- [ ] Preview review at 360, 390, 768, 1024, 1440 and 1920 CSS px.
- [ ] Chromium, Firefox and WebKit review.
- [ ] Manual WCAG 2.2 AA assessment.
- [ ] Lighthouse and Core Web Vitals measurement.
- [ ] SEO and structured-data validation.
- [ ] RTL/LTR review in actual translated strings.
- [ ] HTTPS response-header and security review.
- [ ] Production smoke test and rollback readiness check.

### Transfer package
- [ ] UI/UX team brief is complete and owner-approved.
- [ ] Engineering and operations handoff is complete.
- [ ] Content source files and external references are accessible to the receiving team.
- [ ] GitHub and Notion access is provisioned with least privilege.
- [ ] Open questions, blocked items, deferred work, and responsible owners are listed.
- [ ] Receiving team confirms access and can run the project from a clean environment.

## 4. Known limitations and unresolved dependencies

1. The initial UI/UX brief uses a pinned historical baseline. It must be reconciled with current `main` and open PRs.
2. The current package contains the repository source, but a ZIP does not contain Git history or GitHub operational metadata.
3. The Notion Master Handbook and some source/asset originals are external to the repository.
4. Live route screenshots and a full route-by-route visual comparison have not been verified by this package.
5. Translation quality requires native-language review.
6. Contact publication, privacy review, and corporate email configuration remain pending in current source documentation.
7. Production acceptance remains In Progress. Do not interpret green automated checks as full production approval.
8. External backup, restore, and rollback drills require execution evidence.
9. Exact current GitHub security settings, alerts, secrets, Pages settings, and Actions artifacts require separate authorized inspection.
10. Final owner approval is required before merge, design acceptance, or production release.

## 5. Handoff sign-off

| Role | Name | Decision | Date | Evidence |
|---|---|---|---|---|
| Company owner / Product Owner |  | Pending |  |  |
| Product / UX lead |  | Pending |  |  |
| Content / localization lead |  | Pending |  |  |
| Engineering lead |  | Pending |  |  |
| QA / accessibility lead |  | Pending |  |  |
| Security / operations lead |  | Pending |  |  |
| Receiving team representative |  | Pending |  |  |

**Transfer acceptance:** Not granted.  
**Production acceptance:** In Progress.  
**Do not close these statuses without evidence.**
