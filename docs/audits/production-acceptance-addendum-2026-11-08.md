# Production acceptance addendum — 2026-11-08

**Repository:** `saeed92m/company-website`  
**Production branch:** `main`  
**Verified merge commit:** `3ea71856cae18245c55efc8ef7014a65cff59826`  
**Overall status:** In Progress.

## 2026-11-08 — Mobile project artwork fit and Pages smoke-test repair

- PR [#114](https://github.com/saeed92m/company-website/pull/114) updated the shared project-page artwork behavior at the mobile breakpoint. Mobile artwork uses intrinsic image sizing and `object-fit: contain`; desktop behavior was retained. A regression test was added. PR #114 was merged to `main` at `382eb7054848bffd222c883035de1bce821a27e5`.
- The first post-merge Pages run [42513105176](https://github.com/saeed92m/company-website/actions/runs/42513105176) deployed successfully but its smoke job failed. Investigation found stale SVG assertions in `.github/workflows/deploy-pages.yml`; the current six domain assets are WebP.
- PR [#115](https://github.com/saeed92m/company-website/pull/115) updated all six asset paths and validates the deployed MIME type as `image/webp`, while retaining HTTP 200 and base-path checks. It changed the deployment workflow only and was merged to `main` at `3ea71856cae18245c55efc8ef7014a65cff59826`.
- Post-merge CI [42514257000](https://github.com/saeed92m/company-website/actions/runs/42514257000): success.
- Post-merge CodeQL [42514258660](https://github.com/saeed92m/company-website/actions/runs/42514258660): success.
- Post-merge Dependency Security Audit [42514256971](https://github.com/saeed92m/company-website/actions/runs/42514256971): success.
- GitHub Pages workflow [42514256970](https://github.com/saeed92m/company-website/actions/runs/42514256970): build, deploy, and deployed-route smoke jobs all completed successfully.
- This verifies automated deployment and smoke assertions. It does not constitute manual visual review on a physical mobile device; no manual site/preview visit was performed.

### Supabase read-only status check — 2026-11-08

- Project `company-website` (`jjypkzunhwtkxzeepgag`) reported `ACTIVE_HEALTHY`, PostgreSQL 17.11.
- Public schema inspection returned no tables. Migration history contains the previously recorded migration `20261014120423_revoke_public_execution_on_rls_auto_enable`.
- Security, Performance, and Health Advisors returned no findings at this check.
- No database schema, data, policies, grants, keys, or project settings were changed. Supabase remains outside the static website runtime; no new database migration is warranted for this frontend-only correction.

### Project status

- Mobile project-artwork CSS correction: merged and deployed; automated regression coverage is present.
- Pages WebP smoke-test correction: merged and deployed; build/deploy/smoke all pass.
- Overall Production acceptance remains **In Progress**. Manual WCAG 2.2 AA, physical-device review, Lighthouse/Core Web Vitals, live security-header verification, GitHub security alert/settings review, backup/restore and rollback drills, and private vulnerability reporting remain open under [Issue #69](https://github.com/saeed92m/company-website/issues/69).
- Production hosting remains GitHub Pages. Cloudflare Pages remains Preview only. No DNS, email, hosting, privacy, or backend scope changed.

