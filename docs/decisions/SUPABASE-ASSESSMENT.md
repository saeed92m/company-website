# Supabase Assessment and Architecture Decision

**Status:** Not needed for current static-site scope  
**Reviewed:** 2026-10-12  
**Scope:** Corporate website

## Decision summary

The current Astro-based multilingual corporate site is primarily a static website. Supabase should not be added solely because it is available; static delivery avoids backend operations, credentials, attack surface, and recurring cost.

The connected Supabase account currently lists no projects. No project, deployment, or data was created or changed.

## Reconsider only if a requirement appears

Potential future uses include authenticated customer areas, a CMS-backed content workflow, persistent consultation/meeting requests, or a carefully designed form backend. Before adoption, compare with the existing deployment and simpler form/CRM providers. Prefer a server-side adapter/API boundary so the site can change providers without rewriting its content layer.

Any public-facing data access must use least privilege and appropriate Row Level Security; service-role secrets must never be exposed to browser code. Validate spam protection, rate limits, data minimization, consent, retention, deletion, and operational ownership before storing personal information.

## Acceptance gate

A named feature requirement, cost/architecture comparison, security and privacy review, tested failure behavior, and explicit go/no-go decision are required before introducing a backend dependency.

## Changelog

- 2026-10-12: Added initial assessment; no website code or hosting changes.
