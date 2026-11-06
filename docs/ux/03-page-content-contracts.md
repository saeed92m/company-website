# Page Content Contracts — Phase 1

This document defines what each initial page must accomplish before visual copywriting begins.

## Global content rules

- Corporate facts must come from approved company sources.
- CEO facts must come from the supplied CV/profile.
- Do not invent metrics, customers, partnerships, awards, certifications, or technical achievements.
- Keep current capabilities distinct from future ambitions.
- Use consistent terminology across all languages.
- Persian is the current source language for original corporate copy unless another source is explicitly approved.

## Home

**Objective:** Establish identity, credibility, domains, projects, vision, and a path to contact.

Required sections:
- Hero/value proposition
- Company introduction
- Six domains
- Selected projects
- Vision/development direction
- CEO preview
- Collaboration/contact CTA

## About

**Objective:** Provide the authoritative corporate introduction.

Required content:
- legal/company name, with the legal form visually subordinate to the company name
- founding year
- location
- a substantive, source-grounded corporate overview
- mission/purpose and R&D orientation
- explanation of the interdisciplinary relationship between the six domains
- clear distinction between current capabilities, areas of focus, and future development

The homepage hero and Company page must use distinct copy. The hero gives a concise, differentiated value proposition. The Company page provides the authoritative, expanded corporate introduction. Do not reuse the same paragraph in both locations.

## Fields

**Objective:** Give visitors an understandable map of company capabilities.

Each field requires:
- title
- concise description
- detailed capability description
- relevant applications
- related projects when applicable

## Projects

**Objective:** Introduce public-facing projects without overstating completion.

Each project requires:
- name
- purpose
- short description
- localized summary-dialog overview
- current public status, stated precisely
- company relationship
- optional technical highlights
- future link policy

The homepage and Projects page must use the same localized project-card component. Each card opens an accessible native dialog with a project title, a concise summary heading, source-grounded overview text, a clear close control, and a localized contact action. The dialog must support keyboard dismissal, focus handling, RTL/LTR, reduced motion, mobile viewports, and the light/dark themes.

Alpha Linux and ZTF Classifier must not expose repository URLs until explicitly approved.

Company Platform may be listed as a company digital platform under development. Its implementation repository is separate from this website repository and must not be linked publicly unless explicitly approved.

## CEO

**Objective:** Present the founder and CEO professionally.

Content source:
- supplied official CV/resume
- approved corporate biography

Avoid unnecessary personal information.

## Vision

**Objective:** Explain the development direction and relationship between the six domains.

The page should communicate:
- innovation
- research and development
- interdisciplinary engineering
- future technology development

Avoid unsupported market-size or growth claims.

## Contact

**Objective:** Convert legitimate interest into an actionable inquiry.

Contact categories:
- General inquiry
- Business collaboration
- Research collaboration
- Project inquiry
- Meeting request

Required form design decisions will be finalized during implementation based on the selected contact/email architecture.

## Content workflow

Source → Draft → Technical review → Language review → Approval → Publication → Revision history

## Status

**Phase 1 implementation — in review.**

The Phase 1 implementation includes localized corporate copy, six domain detail routes, documented related-work references where supported by the supplied CV, application areas, homepage vision and CEO preview, grouped CEO skills, and the four-path contact gateway. Automated validation and visual review must pass before merge.
