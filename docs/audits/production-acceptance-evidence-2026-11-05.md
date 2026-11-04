# Production acceptance evidence — 2026-11-05

## Status

**In Progress.** Production application source remains on `main`. This record separates verified automation from acceptance gates that still need human or repository-owner action.

## Production baseline

- Repository: `saeed92m/company-website`
- Production branch: `main`
- Verified production commit: `06af87e1053e7d25a3efd263ba8fefde0d997589`
- Hosting: GitHub Pages
- Tracking issue: [#69 — Complete production security and operational acceptance](https://github.com/saeed92m/company-website/issues/69)

## Main-branch workflow evidence

| Gate | Run | Result | Evidence |
|---|---:|---|---|
| CI | [41896492766](https://github.com/saeed92m/company-website/actions/runs/41896492766) | PASS | Repository checks, JSON-LD regression tests, Astro check, production build |
| CodeQL | [41896492580](https://github.com/saeed92m/company-website/actions/runs/41896492580) | PASS | Analysis job completed; alert inventory is separate |
| GitHub Pages | [41896492601](https://github.com/saeed92m/company-website/actions/runs/41896492601) | PASS | Build, deploy, smoke jobs |
| Dependency audit | [41896492684](https://github.com/saeed92m/company-website/actions/runs/41896492684) | PASS | Full locked graph and production-only npm audits each reported zero vulnerabilities |
| Chromium Browser QA | [41896664184](https://github.com/saeed92m/company-website/actions/runs/41896664184) | PASS | 96 production route/viewport checks |

## Cross-browser evidence — PR #81

- PR: [#81](https://github.com/saeed92m/company-website/pull/81)
- Head: `cda633885acd460fbe25e4bc7613c3282c6a90ba`
- Base: `main` at `06af87e1053e7d25a3efd263ba8fefde0d997589`
- Changed file: `.github/workflows/browser-qa.yml` only.
- Browser QA run: [41900713833](https://github.com/saeed92m/company-website/actions/runs/41900713833) — PASS.
- Chromium: 96 checks. Firefox: 96 checks. WebKit: 96 checks. Total: **288 checks**.
- CI [41900713882](https://github.com/saeed92m/company-website/actions/runs/41900713882), CodeQL [41900713688](https://github.com/saeed92m/company-website/actions/runs/41900713688), and Dependency Security Audit [41900713892](https://github.com/saeed92m/company-website/actions/runs/41900713892): PASS.
- Browser QA tested the deployed production URL. It did not test an unmerged application build.
- PR #81 is still open and unmerged. Production application source and deployment have not changed as a result of this PR.

## Repository security and operational gates

| Gate | Status | Required evidence / action |
|---|---|---|
| Branch protection | BLOCKED | Last verified metadata reported `main.protected=false`; no rulesets were returned. Owner must configure required checks, block force pushes, and prevent branch deletion. |
| Secret Scanning | UNVERIFIED | Inspect repository security settings. |
| Push Protection | UNVERIFIED | Inspect repository security settings. |
| Dependabot alerts and security updates | UNVERIFIED | Review alert backlog and settings. Weekly update configuration alone is not proof. |
| CodeQL alert inventory | UNVERIFIED | Review open alerts and confirm no unresolved high/critical findings. |
| Actions repository permissions | UNVERIFIED | Review default token permissions and workflow-specific permissions. |
| Private vulnerability reporting | BLOCKED | Establish a private reporting route, then update `SECURITY.md`. |
| Deployed response headers | UNVERIFIED | Inspect live HTTPS headers. GitHub Pages does not support repository-level custom response headers; choose a supported hosting/CDN architecture before implementing CSP/HSTS and related headers. |
| WCAG 2.2 AA | PENDING | Complete manual keyboard, screen-reader, contrast, focus, and interaction review. |
| Lighthouse / Core Web Vitals | PENDING | Capture repeatable measurements for representative routes and locales. |
| Physical-device review | PENDING | Review responsive layout and interactions on real devices. |
| Backup / restore | PENDING | Execute and record a restore test for source and deployment configuration. |
| Deployment rollback | PENDING | Execute and record a rollback drill. |

## Safety and scope

- No DNS, custom domain, business email, hosting, production secret, production database, or production setting was changed for this audit.
- The Contact page remains informational. Do not add a submission backend until privacy, retention, access, and incident-handling requirements are approved.
- Keep this repository separate from ZTF Classifier, Alpha Linux, and Company Platform.
- Do not publish unapproved project repository links.
- Never commit credentials, secrets, or private keys.

## Definition of Done

Close Issue #69 only after every gate has a verified result, no unresolved critical/high security finding remains without a documented risk decision, and backup/restore plus rollback drills have passed.
