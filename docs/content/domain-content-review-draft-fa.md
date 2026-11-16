# Domain Content Review — Persian Draft

**Status:** Review draft; not approved for production publication.  
**Audience:** General visitors, engineers, researchers, technical partners.  
**Scope:** Six activity domains.  
**Publication rule:** No production merge or deployment is authorized by this draft.

## Editorial objectives

- Explain each domain to a technically curious general reader and to a specialist.
- Describe scientific foundations, engineering workflows, applications, validation and limitations.
- Separate documented projects from capabilities and development areas.
- Avoid unsupported claims about completed products, commercial services, facilities, customers, certifications or measured performance.
- Keep proprietary code, model parameters, detailed designs, customer data and confidential operating data out of public copy.

## Domain page structure

1. Existing domain hero and concise summary.
2. Existing capabilities and application areas.
3. Scientific and engineering introduction.
4. Technical foundations, with explanatory paragraphs.
5. Engineering workflow.
6. Validation and quality principles.
7. Public-disclosure boundary.
8. Visual-content plan.
9. Related documented projects and engineering topics.
10. Development approach.

## Domain-specific review

### Astronomy

Emphasis: photometry, light curves, variable and transient sources, time-series analysis, cross-survey matching, machine-learning evaluation and reproducibility.

Public project: ZTF Classifier. Do not publish repository links or proprietary implementation details. Do not imply that candidate ranking is observational confirmation.

Visuals: sample light curve, reference/observation/difference images, confusion matrix and probability-calibration plot. Every plot must state data provenance and whether it is illustrative.

### Aerospace

Emphasis: aerodynamics, flight mechanics, structures and materials, spacecraft subsystems, mission requirements and reliability.

CanSat, CubeSat, UAV health monitoring and radiation analysis are capability or development topics unless project evidence confirms execution. Do not imply flight qualification, launch or operational deployment.

Visuals: educational CFD field, FEA stress plot and small-satellite subsystem diagram.

### Remote Sensing

Emphasis: optical and multispectral imaging, SAR, preprocessing, multi-temporal analysis, GIS and independent map validation.

Landsat and Sentinel are public data-source examples, not company-owned assets. A spectral index alone does not prove crop health or economic outcome.

Visuals: optical/SAR comparison, land-cover classification and before/after change map with source, date and legend.

### Artificial Intelligence

Emphasis: problem definition, data quality, ML/DL, computer vision, RAG, lifecycle management, model evaluation, monitoring, privacy and human oversight.

KEYHAN AI is the activity domain. KEYHAN AI CORE and related shared infrastructure remain roadmap architecture concepts unless separately verified as implemented products.

Visuals: model lifecycle, computer-vision demo and RAG retrieval/generation diagram.

### Energy

Emphasis: solar and wind generation, storage, converters, microgrids, load/generation balance, technical-economic assessment and safety.

Do not imply that a listed capability means a commissioned plant or operational energy-management system. Economic savings and payback claims require site-specific inputs and a transparent model.

Visuals: microgrid single-line diagram, sample generation/load profile and battery-storage schematic.

### Motorsport

Emphasis: engine thermodynamics, turbocharger matching, powertrain, vehicle dynamics, telemetry, testing and reliability.

Do not equate the domain with unverified tuning services or claim performance gains without repeatable test evidence. Protect ECU maps, engine setup and customer telemetry.

Visuals: educational powertrain cutaway, generic turbocharger diagram and sample telemetry traces.

## Status language

Use these terms consistently:
- **Documented project:** evidence exists and the project relationship is approved for public disclosure.
- **Development area:** a subject included in the company's technical scope or roadmap.
- **Capability:** a method or engineering discipline relevant to the company's work; not automatically a commercial service.
- **Illustrative example:** educational content or synthetic/public data, not a company project result.

## Image and chart acceptance rules

- Confirm source, licence and attribution before publication.
- Use synthetic or public data for examples unless explicit disclosure approval exists.
- Label illustrative material clearly.
- Include units, axes, legend, scale, date and method where applicable.
- Do not present AI-generated equipment or laboratory imagery as a real company asset.
- Provide meaningful alternative text and responsive optimized formats.

## Localization

This implementation adds the expanded technical copy in Persian only. The other seven locales retain their existing copy. Do not claim full eight-language parity. Translation must be completed and technically reviewed before production publication.

## Validation checklist

- [ ] Technical review by a subject-matter reviewer for each domain.
- [ ] Verify all company/project status statements against approved records.
- [ ] Verify corporate/legal scope wording against current registration documents.
- [ ] Review public-disclosure boundaries.
- [ ] Verify image licences, provenance, labels and alt text.
- [ ] Complete English and other locale content.
- [ ] Run Astro check, production build and test suite.
- [ ] Browser QA in Chromium, Firefox and WebKit.
- [ ] Check desktop, tablet and mobile, RTL/LTR, keyboard and reduced motion.
- [ ] Compare screenshots with the approved production navigation; do not change navigation or mobile menu.
- [ ] Obtain explicit owner approval before merge to main or production deployment.
