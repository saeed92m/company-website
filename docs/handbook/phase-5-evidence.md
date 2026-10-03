# Phase 5 Evidence — Publications, Domain Imagery & Contact Location

## Scope

This phase implements three requested content/UX refinements:

1. Scientific publications now expose an article/source link and a PDF/full-text action.
2. Each of the six activity domains uses its corresponding domain artwork as a restrained, blurred visual layer on field cards and field-detail heroes.
3. The Contact location card now includes the approved company location statement: based at the East Azerbaijan Science & Technology Park.

## Publication sources

- *The New Ephemeris of BZ Leo, V2545 Cyg and V0402 Gem* — ResearchGate publication record and HAL record for full-text access.
- *O-C Study of 545 Lunar Occultations from 13 Double Stars* — ResearchGate publication record with full-text availability.

The website does not mirror third-party PDFs into the repository. The download/full-text controls route users to the source records.

## Domain visual treatment

The existing six domain-specific assets are retained and reused:

- Astronomy
- Aerospace
- Remote Sensing
- Energy
- Artificial Intelligence
- Motorsport

The assets are rendered as low-opacity, blurred background layers so that domain identity is visible without competing with readable text. Light and dark themes receive separate overlay treatment.

## Contact

The canonical geographic location remains Tabriz, East Azerbaijan, Iran. A separate localized contact note identifies the company as based at the East Azerbaijan Science & Technology Park.

## Validation targets

- TypeScript/Astro build
- all eight locale CEO pages
- all eight locale Contact pages
- all six field cards and field-detail routes
- dark/light theme rendering
- RTL/LTR rendering
- external publication links
- accessibility/focus behavior for the new actions
