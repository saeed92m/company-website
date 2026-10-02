# Architecture

## Principles

- Static-first and performance-oriented.
- Content separated from application code.
- Componentized UI with a documented design system.
- Multilingual from the architectural foundation.
- Correct RTL/LTR behavior is mandatory.
- Accessibility, SEO, security, and observability are release requirements.
- Future CMS/API/CRM/portal integrations must not require a full rewrite.

## Proposed implementation direction

A modern static/hybrid frontend is planned. Astro is the current preferred candidate, subject to Phase 1/2 validation and final technology decision.

## Environments

Development → Preview/Staging → Production

## Future expansion

The architecture must allow addition of APIs, headless CMS or WordPress, CRM, authenticated portals, research services, analytics, and other backend capabilities without restructuring the public-facing information architecture.
