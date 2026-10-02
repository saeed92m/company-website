# ADR 0002: Astro as the Initial Frontend Framework

## Status
Accepted for the initial production implementation.

## Context
The website is a multilingual, content-heavy corporate platform with strong requirements for performance, accessibility, SEO, RTL/LTR correctness and future extensibility toward APIs, CMS, CRM and portals. The repository had identified Astro as the preferred candidate but had not yet implemented a frontend scaffold.

## Decision
Use Astro as the initial frontend framework with static output as the default deployment model. Keep application logic, content and integrations separated so future server capabilities can be added without replacing the public information architecture.

## Consequences
Positive: strong static-first fit, low client-side JavaScript by default, componentized pages, and a clear path to interactive islands. Negative: the team must establish localization/content conventions carefully and validate any future dynamic requirements before adding server infrastructure.

## Reconsideration triggers
Revisit this decision if authenticated application workflows, highly dynamic server rendering, or another concrete requirement makes the current static-first model materially insufficient.
