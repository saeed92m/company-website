# Phase 1 Evidence — Localized Corporate Frontend

## Scope

GitHub Issue #5 covers the first production-facing frontend implementation and content-completeness pass.

## Implemented

- Eight locale shells: fa, en, ar, ru, de, zh, fr, es.
- RTL for Persian and Arabic; LTR for the other locales.
- Localized shared navigation and accessibility labels.
- Localized Company, CEO and Contact routes.
- Localized field-detail routes for all available activity content.
- Canonical and hreflang metadata when `PUBLIC_SITE_URL` is configured.
- Open Graph title/description metadata.
- Alpha Linux and ZTF Classifier are descriptive only; repository URLs remain unpublished.
- Public activity capabilities were reviewed against the current supplied company profile and resume, with unsupported claims removed.

## Route contract

For every supported locale:

- `/<locale>/`
- `/<locale>/company/`
- `/<locale>/company/ceo/`
- `/<locale>/fields/<slug>/`
- `/<locale>/contact/`

## Content governance

The supplied company profile is the corporate source for identity and registration context; the supplied CEO resume is the source for the CEO biography and project history. Personal phone/contact details are not published. Public corporate contact details remain deferred until privacy review and independent corporate-email setup are complete.

## Validation

- PR #6: CI required before merge.
- Existing main baseline CI passed before PR #6.
- Build-time route generation is covered by the Astro production build.

## Remaining work

- Complete visual QA across real browsers/devices.
- Add final corporate brand assets after the correct company logo asset is approved.
- Configure the real production domain and `PUBLIC_SITE_URL`.
- Add production sitemap/robots configuration once the canonical production domain is known.
- Complete public contact/email publication after the corporate-email architecture is operational.
