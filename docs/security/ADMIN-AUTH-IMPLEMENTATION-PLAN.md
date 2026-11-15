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


## Think-tank security review — 2026-11-16

The review used the roles and working methods defined in the Company-Website think-tank charter: Chief Product & Systems Architect, Principal Software Architect, Enterprise Integration Architect, Accessibility/QA, Application Security & Privacy, and DevSecOps/SRE. The security review used evidence-based review, a weighted decision approach, and a Red Team / pre-mortem pass.

### Decisions retained

- Keep Astro + GitHub Pages for public content. Do not add a server runtime to the public site solely to host authentication.
- Keep authentication and privileged operations behind Supabase Auth and Edge Functions.
- Use email as the initial sign-in identifier. A username resolver adds account-enumeration and identity-mapping risk; defer it until there is a demonstrated requirement and a private server-side design.
- Use trusted `app_metadata` for roles. Do not authorize from editable `user_metadata`.
- Require both AAL2 and an explicit `totp` authentication method for administrator gateway access. A generic AAL2 result alone is not enough because other second-factor types may be enabled.
- Do not grant administrator roles until the intended mailbox is verified and TOTP enrollment is complete.
- Keep the gateway data-free until authorization, audit, rate-limit, and RLS controls are ready.

### Red-team findings and required controls

| Threat / failure mode | Current control | Remaining requirement |
|---|---|---|
| Forged or expired bearer token | Edge Function platform JWT verification plus Auth `getUser` validation | Test expired, malformed, and revoked-session cases |
| User edits their own role | Role read from server-managed `app_metadata` | Restrict role mutation to a controlled provisioning operator; audit every change |
| Admin authenticates with only one factor | Require AAL2 and `totp` in current authentication methods | Test TOTP, non-TOTP AAL2, recovery, and factor removal |
| CORS origin spoofing | Exact origin allowlist | Treat CORS only as browser policy; authorization must remain independent of Origin |
| Brute force / credential stuffing | Supabase Auth platform controls are available | Inspect actual Auth rate limits and configure alerts before activation |
| Session remains valid after account/role change | Each request validates the user with Auth | Add short session lifetime and a session-revocation check for sensitive operations; test role-change propagation |
| Privileged changes cannot be investigated | No admin data or mutation is exposed yet | Add append-only audit events before the first write operation |
| Database data exposed by permissive policy | No application tables exist | Establish canonical migration baseline and test RLS with anonymous/user/admin identities before creating data tables |
| Recovery process bypasses MFA | No recovery operation is exposed yet | Approve a documented recovery procedure with identity proofing, notification, and audit trail |

### Architecture decision scorecard

Scores are qualitative (1 = weak, 5 = strong), based on the current static-hosting constraint and the need to avoid exposing secrets.

| Option | Security boundary | Fit with current hosting | Operational complexity | Decision |
|---|---:|---:|---:|---|
| Frontend-only login / role checks | 1 | 5 | 2 | Reject |
| Move the whole site to a server-rendered host now | 4 | 2 | 4 | Defer; no current need |
| Static site + Supabase Auth + protected Edge Functions | 4 | 5 | 3 | Accept in phases |
| Static site + client-side role lookup | 1 | 5 | 2 | Reject |

The selected design is not yet a production security certification. Its current gateway is a no-data authorization check. The remaining controls above are release blockers for any administrative data or mutation.
