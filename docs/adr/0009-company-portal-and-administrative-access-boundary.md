# ADR-0009 — Company Portal and Administrative Access Boundary

- **Status:** Accepted for phased implementation. The public entry-page scope is implemented. Authentication and administration remain disabled until the release gates pass.
- **Date:** 2026-11-15
- **Decision owner:** CEO / Product Owner
- **Scope:** User portal entry, administrator entry, authentication, authorization, and website administration.

## Context

The public website uses Astro with static output and GitHub Pages. It has no server-side request handler. The connected Supabase project exists, but the website has no Supabase client, application tables, or deployed Edge Functions.

A static page can display a sign-in interface. It cannot safely validate passwords, create trusted sessions, or enforce administrator permissions by itself.

Supabase password authentication supports email/password or phone/password. Its standard password sign-in method does not accept a username. Administrator username sign-in therefore needs a private server-side identifier resolver. The resolver must not expose account email addresses to anonymous clients.

## Decision proposed

1. Keep the public website and its Astro/GitHub Pages deployment.
2. Add localized entry pages at `/[locale]/company/user-panel/` and `/[locale]/company/admin-panel/`.
3. Keep the user panel limited to its sign-in entry page in this phase. Do not add post-login user features.
4. Accept a username for the user portal. Accept a username or email for the administrator portal.
5. Do not enable either sign-in action until a trusted authentication service is deployed and tested.
6. Do not render or expose administrative data, actions, or routes to anonymous users.
7. Keep the future administration API separate from the public static frontend. The API must validate sessions and roles on every protected operation.
8. Use server-managed authorization data. Do not use user-editable profile metadata as a role source.
9. Enforce authorization in the API and database. A hidden menu item or client-side route guard is not an access-control boundary.
10. Never put a service-role key, private token, or privileged credential in browser code or the public repository.

## Proposed security model for the backend phase

- Use a supported identity provider, such as the existing Supabase Auth project, only after its database and Auth configuration can be inspected and tested.
- Resolve administrator usernames on the server. Do not perform username-to-email lookup in browser code.
- Store trusted roles in server-managed claims or an access-control table. Use a server-controlled source such as Supabase `app_metadata`. Do not authorize from `user_metadata`.
- Require MFA for administrator accounts.
- Apply rate limits and generic authentication errors. Avoid account enumeration.
- Enforce least privilege and row-level access policies for every data resource.
- Record administrator sign-in events and sensitive changes in an audit log.
- Define session expiry, revocation, recovery, and initial administrator provisioning before launch.
- Keep content publishing traceable. A future CMS/API must use a reviewed publication workflow. Do not expose a GitHub personal access token to the browser.

## Future administration scope

The full administration product may include:

- Company overview and legal/public content.
- Six domain pages and their localized content.
- Project descriptions, maturity labels, and publication state.
- Navigation, metadata, SEO, and structured data.
- Media assets and approved brand files.
- User accounts, administrator roles, and access reviews.
- Contact requests only after retention, privacy, and incident-handling rules are approved.
- Audit history, draft/review/publish workflow, and controlled rollback.
- System configuration that does not expose hosting secrets or privileged deployment credentials.

This is a target scope. It does not mean these modules exist today.

## Hosting and integration constraints

- GitHub Pages remains the public static host.
- Authenticated operations require a separate server-side service or API.
- Supabase Edge Functions are a possible integration point. This change deploys no function.
- The static website must use only public client configuration. Privileged keys remain server-side.
- Do not create production database tables until the migration baseline, schema ownership, RLS policy model, and recovery plan are verified.
- Keep business email independent of website hosting.

## Consequences and risks

- The sign-in pages are visible but inactive.
- The user portal has no post-login workspace in this phase.
- The administrator dashboard is not enabled until authentication, authorization, audit, and protected API controls pass verification.
- The current public pages are not a security barrier. All future protected data must remain on the backend.
- A change in hosting or API architecture may be required before a complete management panel can go live.

## Acceptance criteria for backend activation

- A documented authentication and authorization architecture is approved.
- An initial administrator account is provisioned through a verified secure process.
- Username resolution works without disclosing private account data.
- Admin MFA, session expiry, revocation, rate limiting, and audit logging are tested.
- Every privileged API operation checks trusted roles server-side.
- Database RLS policies are tested with anonymous, ordinary-user, and administrator identities.
- Automated negative tests prove that an ordinary user cannot access administrative resources.
- No privileged key or secret appears in Git, static assets, browser network payloads, or build artifacts.
- Login, logout, recovery, lockout, and rollback paths pass the release test plan.

## Reconsideration triggers

Revisit this decision if the website moves from static hosting to a server-rendered platform or if a concrete CMS/API requirement changes the integration boundary.


## Decision record — 2026-11-16

The Product Owner accepted the staged security model documented in [Administrative Authentication — Security Implementation Plan](../security/ADMIN-AUTH-IMPLEMENTATION-PLAN.md).

Approved account intent:
- `saeed.m92x@gmail.com`: `owner`, `admin`, and `user`.
- `Alphateamstartup@gmail.com`: `admin`.

The approved policy sets a 12-character minimum for privileged passwords (16+ random characters recommended), mandatory TOTP MFA for administrators, trusted server-managed roles, verified email-based provisioning, and secure account recovery. Passwords, MFA codes, and recovery codes must never be shared in chat.

Implementation is deliberately staged:
- A source-controlled Edge Function authorization gate has been added. It validates the JWT, requires `admin` or `owner` in trusted `app_metadata.roles`, and requires AAL2.
- The function is not yet deployed to production.
- No Auth configuration, user account, role, database schema, migration, or production setting has been changed.
- Initial sign-in will use email. Username resolution remains deferred until a private server-side resolver can be implemented without account enumeration.
- The login UI remains disabled. Do not expose protected data or actions until the activation blockers in the implementation plan pass.

This amendment accepts the architecture. It does not certify the system as production-ready.
