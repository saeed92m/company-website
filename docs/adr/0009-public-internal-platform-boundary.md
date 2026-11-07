# ADR-0009: Public Product and Internal Platform Boundary

- **Status:** Accepted
- **Date:** 2026-11-07
- **Decision owners:** Company leadership

## Context

The company operates six independent activity domains. Shared technology platforms and corporate operating systems support those domains but are not additional commercial domains.

Company-Platform is the internal corporate operating and integration system. It supports company strategy, portfolio, projects, customers, workflows, identity, and access management. It is not currently approved as a public commercial product.

The public website previously included Company-Platform in the Projects listing. That presentation could imply that it is a public product or customer-facing service.

## Decision

1. Keep Company-Platform as an internal corporate system.
2. Do not list Company-Platform as a public project or commercial product.
3. Describe Company-Platform on the company architecture page only, with the status **In Progress**.
4. Keep the six activity domains distinct from shared technology platforms.
5. Describe the five shared technology platforms as target architecture with status **Not started** until evidence confirms implementation.
6. Describe engineering, digital infrastructure, governance, and business capabilities as target scope unless operational evidence supports a stronger claim.
7. Do not publish repository links for Alpha Linux or ZTF Classifier until explicit approval.
8. Do not infer customers, partners, licences, laboratories, equipment, certifications, or delivery capacity from architecture diagrams or capability lists.

## Consequences

- The public Projects listing contains Alpha Linux and ZTF Classifier only.
- ZTF Classifier is associated with ASTROINTEL / Astronomy.
- The Platforms & Technology page documents the internal platform and shared technology architecture.
- Project status is explicit and localized.
- Public and private platform capabilities remain separate.
- Future Company-Website integration with Company-Platform must use documented APIs and controlled publication workflows.

## Validation

- Automated content tests verify that Company-Platform is absent from the public Projects data.
- Browser QA verifies the expected public project count and architecture page structure.
- Content review must confirm that target capabilities are not presented as operational services.
