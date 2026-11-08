# Six-Domain Scientific Content Standard — Review Draft

**Status:** Review preview; not approved for Production  
**Source language:** Persian  
**Detailed copy available:** Persian and English  
**Other locales:** Existing localized interface labels remain. Detailed domain copy currently falls back to English and requires professional translation before multilingual acceptance.

## Purpose

The six domain pages must explain the engineering problem, scientific basis, technical scope, workflow, validation approach, limitations, interdisciplinary links and public-disclosure boundary. They must not read as keyword lists or imply that every listed capability is an operational commercial service.

## Page structure

1. Domain identity and concise mission statement.
2. A problem statement that explains why the domain matters.
3. Scientific and engineering foundations.
4. Capabilities grouped by technical track.
5. A clear engineering workflow.
6. Validation and quality-control principles.
7. Limitations and interpretation cautions.
8. Interdisciplinary links to the other company domains.
9. Documented work separated from technical focus areas.
10. Public-disclosure boundary.

## Evidence and status rules

- A documented project must be traceable to an approved company profile, CV, publication or project record.
- A technical topic is not a project by default.
- A capability is not proof of an operational service, certified system or completed product.
- Do not invent performance values, customer outcomes, certifications, contracts, test results or production readiness.
- Historical experience must be described as historical experience.
- Current product status must be stated only when supported by an approved source.
- ZTF Classifier and Alpha Linux repository links remain unpublished unless the owner explicitly approves them.
- The Aerospace project summaries use only public, high-level descriptions. Mission parameters, drawings, implementation details and customer-controlled information are excluded.
- Energy, AI and Motorsport pages distinguish technical focus areas from documented projects where no specific public project record is available.
- Motorsport is a development-roadmap area. Do not imply that its formal registration scope has already been amended.

## Public-disclosure framework

### Public
- Problem statements and scientific context.
- General methods and standard engineering principles.
- Public data sources and properly attributed educational examples.
- High-level workflow diagrams.
- Verified project names, dates and relationships that are already approved for public use.
- Non-sensitive, reproducible example outputs.

### Requires review
- Selected performance plots.
- Process diagrams beyond a high-level view.
- Test results and model metrics.
- Customer or partner references.
- Any image that may reveal a facility, location, asset or design.

### Confidential
- Source code and proprietary algorithms.
- Internal model weights, private training data and prompts.
- CAD, manufacturing drawings, dimensions and tolerances.
- Mission parameters, detailed subsystem budgets and operating settings.
- Customer data, contracts, credentials, private keys and infrastructure details.
- Unreleased findings and unverified performance claims.

## Visual asset rules

The six SVG diagrams under `public/assets/domains/technical/` are original conceptual illustrations. Each is labelled as conceptual and must not be represented as a measured company result, a validated simulation, a customer deliverable or an operational system.

For future real project visuals:
- record source, licence, date and author;
- identify the geographic or experimental scope;
- show units, axes, legends and processing context on plots;
- remove sensitive metadata and location details;
- use `Demo` or `Illustrative` labels where appropriate;
- provide useful alternative text.

## Domain-specific editorial requirements

### Astronomy
Explain photometry, irregular time series, survey cross-matching, classification versus anomaly detection, uncertainty and follow-up confirmation. Do not generalise a limited benchmark to the full survey population.

### Aerospace
Separate aeronautical and astronautical systems in future expansions. Explain system requirements, interfaces, mass and power constraints, modelling assumptions, integration and verification. A CFD/FEA image is not flight or launch qualification.

### Remote sensing
Explain optical versus SAR observations, sensor resolution, preprocessing, co-registration, temporal effects and independent map validation. A spectral index alone does not prove a cause or a field condition.

### Artificial intelligence
Explain the data-to-deployment lifecycle, baselines, evaluation, calibration, drift, security and human review. Do not use AI as a label for ordinary automation.

### Energy
Explain resource variability, generation, storage, conversion, grid interaction, technical constraints and lifecycle economics. Nameplate capacity is not guaranteed energy yield.

### Motorsport
Explain powertrain integration, turbocharger matching, thermodynamics, thermal limits, vehicle dynamics, telemetry and controlled testing. Do not publish private vehicle settings or claim a commercial product without evidence.

## Locale policy

Persian is the authoring source for corporate content. English is the secondary technical edition. Arabic, Russian, German, Chinese, French and Spanish require professional domain-aware translation and review. Do not treat English fallback as completed localisation.

## Acceptance checklist

- [ ] Technical claims have a source or are clearly identified as general engineering principles.
- [ ] Documented projects and technical focus areas are visually distinct.
- [ ] No unsupported commercial, certification or performance claims.
- [ ] No confidential data, source code, private settings or customer information.
- [ ] Each diagram has an accessible description and a conceptual-use caption.
- [ ] Persian RTL and English LTR layouts are checked.
- [ ] Mobile layout is checked without changing the approved mobile navigation.
- [ ] All eight locale routes render; detailed non-FA/EN translation remains pending.
- [ ] Build, automated tests, browser QA and preview review pass.
- [ ] Owner approves the content before Production merge.
