# Production acceptance addendum — 2026-11-09

**Repository:** `saeed92m/company-website`  
**Production branch:** `main`  
**Verified main commit:** `b4bde1bbf19a55006a6f5edc7ac4d3b5ee6ba404`  
**Production host:** GitHub Pages  
**Preview host:** Cloudflare Pages  
**Overall status:** **In Progress — not yet accepted.**

No manual visit to Production or Preview was performed. All deployed-site checks in this addendum ran through GitHub Actions.

## 1. Changes merged

| PR | Change | Result |
|---|---|---|
| #119 | Retain Lighthouse JSON reports and compare mobile/desktop | Merged |
| #121 | Add automated GitHub Pages response-header audit | Merged |
| #122 | Compress WebP images during build and preload locale-critical fonts | Merged |
| #123 | Run post-deploy audits after Pages deployment; retain axe details; add targeted accessibility checks; fix header parser | Merged |

Production hosting remains GitHub Pages. No DNS, domain, email, database, or hosting migration was made.

## 2. Post-deploy verification

All workflows below ran against main commit `b4bde1bbf19a55006a6f5edc7ac4d3b5ee6ba404`.

| Check | Run | Result |
|---|---|---|
| CI | [42522862574](https://github.com/saeed92m/company-website/actions/runs/42522862574) | Passed |
| Pages build/deploy/smoke | [42522862577](https://github.com/saeed92m/company-website/actions/runs/42522862577) | Passed |
| CodeQL | [42522862627](https://github.com/saeed92m/company-website/actions/runs/42522862627) | Passed |
| Dependency Security Audit | [42522862563](https://github.com/saeed92m/company-website/actions/runs/42522862563) | Passed |
| Backup/restore validation | [42522862589](https://github.com/saeed92m/company-website/actions/runs/42522862589) | Passed |
| Browser QA | [42522941524](https://github.com/saeed92m/company-website/actions/runs/42522941524) | 288/288 passed |
| Accessibility Audit | [42522941456](https://github.com/saeed92m/company-website/actions/runs/42522941456) | 48 scans; 0 violations |
| Lighthouse Audit | [42522941478](https://github.com/saeed92m/company-website/actions/runs/42522941478) | 12 reports; see Section 4 |
| Security Headers Audit | [42522941440](https://github.com/saeed92m/company-website/actions/runs/42522941440) | 4 resources returned HTTP 200; see Section 5 |

## 3. Image and typography optimization

PR #122 adds build-time WebP compression to the generated `dist` output. Source images remain unchanged.

- Ten WebP images: 18,330,346 → 2,362,434 bytes.
- Image payload reduction: **87.1%**.
- Every image retains its 1,672 × 941 dimensions.
- Filenames, URLs, and aspect ratios remain unchanged.
- The GitHub Pages artifact is 2,898,677 bytes.
- Independent image comparison: SSIM 0.94857–0.96371 and PSNR 35.24–38.26 dB across all ten images.
- A visual sample was inspected. No material visual defect was found.
- Locale-critical self-hosted WOFF2 fonts are preloaded.

The Lighthouse baseline before optimization recorded about 16,003 KiB for the Persian homepage and about 5,079 KiB for a projects page. The corrected post-deploy run recorded 2,150–2,161 KiB for homepages and 726–736 KiB for projects pages.

## 4. Lighthouse results

The corrected Lighthouse workflow ran after the successful Pages deployment. It stored 12 JSON reports for eight locales, route families, and mobile/desktop profiles.

| Metric | Result |
|---|---|
| Performance | 72–100; 11 of 12 runs scored 93 or higher |
| Accessibility | 98–100 |
| Best Practices | 100 in all 12 runs |
| SEO | 100 in all 12 runs |
| CLS | 0 in all 12 runs |
| LCP | 0.4–1.6 seconds |
| TBT | 0–320 ms in 11 runs; one 1,780 ms outlier |

The 1,780 ms TBT occurred on the English contact page in one mobile lab run. The report identified eight long tasks, including unattributable tasks. It did not identify a third-party script. This single result is not enough to prove a stable defect. Repeat the audit before changing application code.

The home and projects pages still have responsive-image and cache opportunities. Lighthouse estimates about 0.57 MB of further image savings on those routes. These are follow-up optimizations, not current release blockers.

## 5. Accessibility results

The deployed axe audit covered 48 route/viewport combinations across all eight locales.

- Confirmed axe violations: **0**.
- Incomplete checks: 80 occurrences across two rules.
- `color-contrast`: 48 occurrences on decorative moon/menu symbols inside `aria-hidden` spans. Computed token contrast is 15.24:1 in dark mode and 15.18:1 in light mode.
- `aria-valid-attr-value`: 32 occurrences on project-summary buttons. Each `aria-controls` reference points to an `HTMLDialogElement` in the DOM.

PR #123 adds Browser QA checks for both conditions. Browser QA also checks keyboard operation and accessible labels.

The full axe JSON report is retained as a 14-day GitHub Actions artifact. Automated checks do not replace a manual keyboard, screen-reader, zoom, or cognitive review.

## 6. Browser QA

The post-deploy browser matrix passed:

- Chromium: 96/96 checks.
- Firefox: 96/96 checks.
- WebKit: 96/96 checks.
- Total: **288/288 checks passed**.

The matrix covers eight locales, six route families, two viewport sizes, language and direction attributes, font loading, navigation, horizontal overflow, skip links, accessible labels, dialog references, and menu/theme icon contrast.

This does not prove compatibility on physical iOS Safari, Android Chrome, or every Windows device.

## 7. Security headers

The corrected automated audit tested the Persian homepage, English homepage, a static image, and the sitemap. All four returned HTTP 200.

| Header | Result |
|---|---|
| Strict-Transport-Security | Present: `max-age=31556952` |
| Content-Security-Policy | Missing |
| X-Content-Type-Options | Missing |
| Referrer-Policy | Missing |
| Permissions-Policy | Missing |
| X-Frame-Options | Missing |

GitHub Pages does not provide repository-level custom response-header configuration. Source review found no CSP or Referrer-Policy meta fallback.

The site is static and has no contact form or user-upload feature. This reduces exposure, but it does not replace the missing headers.

**Owner decision required:** Keep GitHub Pages or approve a controlled edge proxy/host that supports custom headers. Do not change Production hosting without a migration plan, secured Cloudflare account, tests, and rollback plan.

## 8. Account and repository security

### Cloudflare Preview account

Read-only account inspection found:

- One accepted account member.
- That member has Super Administrator / all privileges.
- MFA is disabled for the connected user.
- Cloudflare Pages remains Preview only.

**Owner action:** Enable MFA. Prefer an authenticator app or hardware security key. Store recovery codes in encrypted storage. Consider a second trusted administrator after the owner approves the person.

Do not migrate Production to this account until MFA is enabled and recovery access is tested.

### GitHub repository settings

The active `main-protection` ruleset (ID `26575062`) remains enabled. It requires pull requests and the configured CI, CodeQL, dependency, and browser checks.

These settings remain **Not Verified** because the connected GitHub settings endpoints were unavailable:

- Secret Scanning and Push Protection.
- Dependabot alert inventory and security-update settings.
- Code Scanning alert inventory.
- Actions repository/workflow permissions.
- `github-pages` environment protection.
- Full collaborator/team access inventory.
- Private vulnerability reporting.

No setting was changed. Owner-side review in GitHub Settings is required.

## 9. Backup and restore

Backup run [42522862589](https://github.com/saeed92m/company-website/actions/runs/42522862589) produced artifact `13633229811`.

Independent validation:

- `git bundle verify`: passed; 226 refs recorded.
- Clone from bundle: passed.
- `git fsck --full`: passed.
- Restored main matches `b4bde1bbf19a55006a6f5edc7ac4d3b5ee6ba404`.
- Bundle size: 21,747,901 bytes.
- Bundle SHA-256: `28e40e0d35766783d50a80396ab6a09a144e223de96a4a3808e3df8c472cd98b`.

A downloadable ZIP with restore instructions was prepared:

- `company-website-backup-b4bde1bb-2026-11-09.zip`
- ZIP SHA-256: `1638580d53de6cf0bd4475c8cc50cf17ab5868866b48e39194b05a1ce0f1024b`

**Open gate:** The package is not encrypted and has not been saved to owner-controlled off-platform storage. The owner must save it to encrypted storage and verify the copied file's SHA-256.

The Git bundle does not include GitHub settings, secrets, issues, pull-request discussions/reviews, release assets, Pages settings, DNS, or external services.

## 10. Contact, privacy, and business email

The contact page presents four static enquiry paths. It has no form, submission endpoint, public email, phone link, or booking integration. All eight locales show a pending message.

The repository has no localized Privacy Policy, Terms, or Cookie Policy route.

**Owner input required before implementation:**

1. Approve a public business email, or confirm that the address must remain private.
2. Identify the mailbox or service that will receive form submissions.
3. Decide whether meeting requests need a scheduling service or a manual-review form.
4. Approve the privacy notice, purpose, fields, recipient, retention period, deletion process, and responsible person.

No email account, form backend, or personal contact detail was created or published.

## 11. Remaining acceptance gates

| Gate | Status | Required evidence or action |
|---|---|---|
| Main branch protection | Completed | Active ruleset and required checks verified |
| CI, CodeQL, dependency audit | Completed | Successful main-commit runs |
| Pages build, deploy, smoke | Completed | Successful main-commit run |
| WebP optimization | Completed | 87.1% reduction; dimensions and image quality checked |
| Browser automation | Completed | 288/288 Chromium, Firefox, WebKit checks |
| Automated axe | Completed with manual follow-up | 48 scans, 0 violations; manual review still required |
| Lighthouse | Completed with one outlier | Repeat mobile English contact TBT result |
| Response headers | Open | Owner decision on edge proxy or host with custom headers |
| Cloudflare account MFA | Awaiting owner action | Enable MFA; review second administrator |
| GitHub security settings | Not Verified | Owner-side Settings review |
| Off-platform backup | Awaiting owner action | Save encrypted backup and verify checksum |
| Rollback drill | Not Tested | Run a controlled rollback rehearsal; no Production rollback without approval |
| Manual accessibility | Not Tested | Keyboard, focus, VoiceOver/NVDA, zoom, form/error review |
| Physical-device QA | Not Tested | iOS Safari, Android Chrome, Windows browsers, tablet |
| Human translation review | Not Tested | Review all eight languages with qualified reviewers |
| Contact workflow | Awaiting user input | Approved email/recipient, form scope, privacy and retention rules |
| Final acceptance | **In Progress** | Close the open gates and issue a signed Go/Conditional Go/No-Go report |

## 12. Decision

**Do not mark Production acceptance complete yet.**

The static site builds, deploys, and passes its automated browser and accessibility checks. The image payload is much smaller. The main remaining blockers depend on owner decisions or physical/manual evidence.

Track all open work in [GitHub Issue #69](https://github.com/saeed92m/company-website). No Production hosting change, DNS change, email setup, database change, or rollback was performed during this work.
