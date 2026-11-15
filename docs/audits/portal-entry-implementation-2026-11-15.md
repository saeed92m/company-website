# Portal Entry Implementation — 2026-11-15

- **Repository:** `saeed92m/company-website`
- **Production baseline:** `ad395c19f958f0bdc2f0ac235c7264e584347c9a`
- **Feature branch:** `feat/company-user-admin-portals`
- **Production branch:** `main`
- **Status:** Frontend entry routes implemented on a feature branch; backend authentication and full administration remain blocked.

## User requirement

- Add User Portal and Admin Panel under Company, after Board of Directors.
- User Portal: username and password entry only. Do not add post-login features in this phase.
- Admin Panel: username or email plus password. The target is a complete website administration system.
- Preserve the current site and verify the changes before merge.

## Repository findings

- The website uses Astro 7.4.2 and static output on GitHub Pages.
- The website has eight locales: Persian, English, Arabic, Russian, German, Chinese, French, and Spanish. Persian and Arabic use RTL.
- The current website has no authentication client or protected backend route.
- The connected Supabase project is `company-website` (`jjypkzunhwtkxzeepgag`), reported as `ACTIVE_HEALTHY`.
- The Supabase function inventory returned no Edge Functions.
- A live table and migration inspection could not complete. The database connector returned PostgreSQL error `28P01` (password authentication failed). This change did not retry with guessed credentials or alter database state.
- The previous repository audit recorded zero public application tables and no website/Supabase runtime integration. This historical snapshot is not treated as a fresh database inspection.

## Implemented in this branch

- Added localized User Portal and Admin Panel links after Board of Directors in the Company submenu.
- Added localized sign-in entry routes for all eight locales.
- User Portal asks for username and password.
- Admin Panel asks for username or email and password.
- The sign-in action is disabled. The page does not include a form submission handler or an API request.
- The pages show a clear notice that sign-in is not active. The page does not send or store the entered values.
- Added `noindex,nofollow,noarchive` metadata. Excluded the pages from sitemap generation.
- Added smoke-test routes for GitHub Pages and browser test routes for Chromium, Firefox, and WebKit.
- Added regression tests for menu order, translations, disabled sign-in, no client credential submission, noindex, sitemap exclusion, and test-route coverage.

## Not implemented

- No account registration or password recovery.
- No real user or administrator authentication.
- No user dashboard after login.
- No administrator dashboard or CRUD operations.
- No user/role database tables, RLS policies, migrations, or Edge Functions.
- No administrator account or credential was created.
- No Supabase project settings, database, hosting, DNS, or production configuration was changed.

## Security rationale

- Static GitHub Pages cannot validate credentials or protect server-side resources.
- Supabase's standard password sign-in accepts email or phone with a password. It does not accept a username as the identifier. The administrator username option requires a private server-side resolver.
- Administrator permissions must be enforced by a protected API and database policies. A frontend-only role check is not sufficient.
- Privileged Supabase keys must remain server-side.
- Administrator MFA, rate limits, audit logs, session controls, and RLS tests are prerequisites for activation.

## Verification record

The implementation must not be marked complete until the PR checks pass. Required evidence:

- `npm test`
- `npm run check`
- `npm run build`
- GitHub Actions CI
- CodeQL
- Dependency Security Audit
- Browser QA (8 locales, 2 viewports, 3 browser engines)
- GitHub Pages build/deploy/smoke workflow after merge

The public production branch remains unchanged by this feature branch. The PR must remain unmerged until the Product Owner reviews it and the required checks pass.

## Next blocker

Before activating login, reconcile the Supabase database migration baseline and inspect Auth provider settings. Provision the first administrator through a secure, verified process. Then implement the private username resolver, server-side RBAC, MFA, RLS, audit logs, and protected admin API. Re-test anonymous and ordinary-user denial before enabling any administrative action.
