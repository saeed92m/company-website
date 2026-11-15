# Administrative Authentication — Security Implementation Plan

- **Status:** Accepted architecture; implementation is staged and not production-ready.
- **Date:** 2026-11-16
- **Repository:** `saeed92m/company-website`
- **Supabase project:** `company-website` (`jjypkzunhwtkxzeepgag`)

## Approved identity and access model

| Account | Intended access | Provisioning |
|---|---|---|
| `saeed.m92x@gmail.com` | `owner`, `admin`, `user` | Pending secure invitation and verified ownership |
| `Alphateamstartup@gmail.com` | `admin` | Pending secure invitation and verified ownership |

- Password minimum for privileged accounts: 12 characters. Use a randomly generated password with at least 16 characters.
- TOTP MFA is mandatory for every administrator. Google Authenticator and compatible TOTP apps are supported.
- Recovery must use a verified account recovery flow and separately stored recovery material. Never request passwords, TOTP values, or recovery codes in chat.
- Role assignment is server-controlled. Never authorize from `user_metadata`.
- An `owner` role includes administrative capability. A normal `user` role does not.
- Sign-in uses verified email initially. Username lookup is deferred until a private, non-enumerating server-side resolver is designed and tested.

## Security architecture

1. Astro/GitHub Pages remains a static public frontend.
2. Supabase Auth manages password authentication, sessions, email verification, and TOTP MFA.
3. The browser may contain only the Supabase project URL and publishable key. No secret or service-role key may enter the browser bundle.
4. Protected operations use Supabase Edge Functions with platform JWT verification enabled.
5. Every administrative request validates the user with Supabase Auth, reads roles from trusted `app_metadata`, and requires AAL2.
6. Any future database table must have reviewed grants and RLS policies. Do not create tables before a canonical migration baseline and recovery plan exist.
7. Administrative changes require an append-only audit trail with actor, action, target, timestamp, and request correlation ID. Never log passwords, access tokens, MFA secrets, or recovery codes.

## Implemented in this phase

- Added a source-controlled `admin-gateway` Edge Function.
- The gateway accepts only GET (plus CORS preflight), validates the bearer JWT with Supabase Auth, checks trusted `app_metadata.roles` for `admin` or `owner`, requires AAL2, and confirms the authentication-method claim includes `totp` (not merely any second factor).
- Platform JWT verification is required at deployment.
- The function uses only a publishable/legacy anon key and never uses a service-role key.
- The gateway returns no administrative data and performs no mutation. It is a protected authorization gate only.
- The implementation pins `@supabase/supabase-js` to `2.119.0`.

## Not yet implemented — activation blockers

- Supabase Auth settings review and configuration for email verification, password policy, session lifetime, and abuse protection.
- Secure invitations and trusted role assignment for the two approved accounts.
- Frontend sign-in, TOTP enrollment/challenge, logout, password reset, email change, and session-expiry UX.
- Recovery-code workflow and documented recovery operator procedure.
- Username resolver (deferred; email sign-in is the initial target).
- Database schema, RLS policies, and audit-log persistence. No tables were created.
- Rate limiting for sensitive administrative actions and automated alerting.
- Automated tests against real anonymous, user, admin-AAL1, admin-AAL2, and revoked-session identities.
- Deployment of the Edge Function to production and end-to-end browser verification.

## Release gates

Do not enable the login button or expose admin data until all activation blockers that apply to the first release are closed. In particular:
- Both invitations must be accepted from the intended mailboxes.
- The first owner account must enroll and verify TOTP before receiving the owner role.
- The second account must enroll and verify TOTP before receiving the admin role.
- Negative authorization tests must prove that anonymous users, ordinary users, admins at AAL1, and revoked sessions cannot access protected operations.
- Security Advisor, code scanning, dependency audit, CI, and browser tests must pass.
- No secrets may appear in Git, build output, browser network requests, or logs.

## Operational notes

The connected project currently has no public application tables and no Edge Functions. The existing remote migration baseline must be reconciled with the repository before any database DDL. No production database, Auth setting, account, role, or function was changed as part of preparing this source-controlled foundation.
