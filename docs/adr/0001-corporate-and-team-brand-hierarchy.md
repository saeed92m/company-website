# ADR 0001: Corporate identity and team-brand hierarchy

- Status: Proposed; no site-wide rebrand authorized
- Date: 2026-10-18
- Scope: Public corporate website and its design system

## Context

The company profile identifies **Pishgaman Novandish Fanavargostar Keyhan (Ltd.)** / **شرکت پیشگامان نواندیش فناورگستر کیهان (مسئولیت محدود)** as the registered corporate identity. The founder's CV also records participation in CanSat, CubeSat and astronomy publication work under **Team Alpha / Alpha Team**.

These names have different roles. The legal company name must not be silently replaced by a project/team identity. A possible future holding-company vision is not evidence that a holding structure currently exists.

## Decision proposed for review

1. Keep the registered company name as the primary corporate/legal identity in the website footer, contact/legal contexts, metadata where appropriate, and company/about content.
2. Treat **ALPHA TEAM** as a team/project brand associated with relevant work only, unless the owner explicitly approves a broader brand architecture.
3. Do not use **“Alpha Team Startup”** as the default lockup; “startup” describes a business stage, not a durable brand identifier.
4. Do not globally replace the existing company wordmark, logo, page titles, or SEO identity before the brand decision is approved.
5. Do not infer that Team Alpha owns all six company domains or that a holding/subsidiary structure is already established.
6. Defer wallpaper and secondary collateral. Prioritize web-critical assets: responsive symbol/wordmark lockups, light/dark variants, favicon and Apple touch icon, social preview, color and typography tokens, spacing, focus states, and RTL/LTR behavior.

## Visual direction

Use a restrained science-and-engineering system that can represent all six domains: Astronomy, Aerospace, Remote Sensing, Energy, Artificial Intelligence, and Motorsport. Abstract orbital, telemetry, sensing, computational, and engineering-drawing motifs may be explored, but avoid a space-only identity, generic stock-space imagery, and unsupported corporate claims.

The existing stylesheet defines a dark-first palette, blue brand tokens, Manrope and IBM Plex Sans Arabic font families, spacing tokens, and a visible focus token. Treat these as the current implementation baseline; refine only through a separate reviewed design-system change.

## Source basis

- `README.md`: current product scope, eight locales, Astro static architecture, and operational caveats.
- `docs/handbook/README.md`: repository engineering docs and Notion Master Handbook relationship.
- `src/styles/global.css`: existing design tokens and typography.
- Supplied company profile: registered company name, six domains, and long-term holding vision.
- Supplied CV: documented Team Alpha / Alpha Team project participation.

## Consequences and safeguards

- No production UI, domain, company name, or SEO metadata is changed by this ADR.
- Before adopting ALPHA TEAM as the site-wide public brand, obtain explicit owner approval and record the approved lockup and exact legal-name presentation.
- Any later implementation should be a separate PR with visual evidence, responsive checks, all-eight-locale checks, accessibility checks, and updated release notes.
- The static site remains independent of Supabase at runtime unless a separately reviewed architecture change is approved.
