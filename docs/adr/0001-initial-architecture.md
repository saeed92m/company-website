# ADR 0001 — Initial Architecture Direction

- **Status:** Accepted for Phase 0
- **Date:** 2026-10-02

## Context

The corporate website must be fast, accessible, multilingual, SEO-friendly, maintainable, and extensible toward future CMS, API, CRM, and portal capabilities.

## Decision

Use a static-first modern frontend architecture as the initial direction. Astro is the preferred candidate for implementation, subject to validation during the architecture and UX/UI phases.

Content must remain separated from presentation and application logic. Localization must be architectural from the beginning.

The website, domain/DNS, and business email remain operationally independent.

WordPress is not part of the initial implementation, but the architecture must not prevent future CMS/headless WordPress integration.

## Consequences

- Strong performance and SEO baseline.
- Reduced client-side complexity.
- Easier multilingual content management.
- Future integrations can be introduced behind APIs/services.
- Final framework selection remains explicitly subject to validation rather than being treated as irreversible.

## Reconsideration triggers

Reopen this decision only if:
- validated UX requirements require a different rendering model;
- content/editorial requirements materially change;
- CMS/API integration requirements cannot be satisfied without architectural compromise;
- performance, accessibility, security, or maintainability evidence indicates a better direction.
