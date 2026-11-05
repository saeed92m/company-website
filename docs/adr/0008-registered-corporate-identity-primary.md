# ADR 0008 — Registered corporate identity as the primary website brand

- Status: Accepted
- Date: 2026-11-05
- Scope: Public website identity, metadata, structured data, design system, and brand asset usage

## Context

The registered legal company name is:

**شرکت پیشگامان نواندیش فناورگستر کیهان (مسئولیت محدود)**

The owner has confirmed that **Alpha Team is not a registered company name or registered primary brand**. It may be used only as a secondary team/project reference where the context and source material support it.

The owner has also confirmed the corporate colors:

- Primary Blue: `#003C91`
- Brand Gray: `#A8A8A8`

The visual direction is a scientific and engineering system with Night/Dark and Day/Light themes.

## Decision

1. Use the registered Persian legal name as the primary company identity across the website.
2. Use an approved Latin rendering of the legal name in non-Persian locales. Until the owner approves an exact Latin legal-name rendering, retain the current transliteration as a working translation and do not present it as a separately registered English name.
3. Do not use **ALPHA TEAM** as the site-wide primary brand, site name, primary wordmark, or Organization/Brand identity in structured data.
4. Use Alpha Team only as a secondary team/project reference when it is relevant and supported by the source record. Do not imply that it is a registered company or registered trademark.
5. Preserve the exact owner-supplied logo artwork. Do not redraw, approximate, stretch, recolor, or replace its geometry. Background removal is permitted only as a controlled alpha-channel derivative that preserves the visible artwork and is reviewed against the source.
6. Use `#003C91` and `#A8A8A8` as the corporate source colors. Derive accessible theme-specific UI colors from these values; do not force the same foreground color onto both light and dark surfaces.
7. Night/Dark is the default theme. Day/Light is a first-class theme with independent surface, text, border, focus, and interaction tokens.
8. Keep all eight locales and current RTL/LTR routing. Persian and Arabic remain RTL; other locales remain LTR.
9. Do not change the Astro static architecture, route model, hosting, or runtime as part of this identity decision.

## Implementation requirements

- Update the shared header, homepage hero, footer, favicon, Open Graph, Twitter metadata, canonical brand labels, and JSON-LD.
- Keep legal identity and team/project references semantically separate.
- Validate all eight locales, both themes, and RTL/LTR.
- Add regression tests for brand metadata, theme contrast tokens, date formatting, and structured-data URLs.
- Make all changes on a feature branch and merge only through a pull request after required checks pass.
- Do not publish a new logo derivative until the owner approves the asset.

## Supersession

This ADR supersedes the site-wide ALPHA TEAM presentation decision in ADR 0003. It does not invalidate factual historical references to Team Alpha in documented project experience.

## Consequences

The website presents the registered company as the accountable corporate entity. Alpha Team is not used as a substitute for the legal company identity. The website remains a static Astro application and retains its existing extension path for future CMS, API, CRM, or portal services.
