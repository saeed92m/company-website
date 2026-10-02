# Visual Direction — Phase 2

## Status
In Progress

This document defines the visual direction before component implementation. It is intentionally system-oriented so the identity can scale across eight languages and future product/platform surfaces.

## Brand intent
The visual language should communicate:
- scientific credibility;
- engineering precision;
- technological depth;
- research and development;
- long-term technological ambition;
- restrained, professional corporate character.

The design must feel like a technology/R&D company rather than a generic startup landing page.

## Design principles
### 1. Precision over decoration
Use geometry, alignment, spacing, data-like structure, and controlled typography instead of decorative effects.

### 2. Technical depth without visual noise
Technical references may appear through diagrams, orbital/trajectory motifs, engineering grids, system maps, or restrained data visualization, but these must support content rather than become background decoration.

### 3. Strong information hierarchy
Every page should make the primary message, domain, evidence, and next action visually obvious.

### 4. Cross-domain coherence
Astronomy, aerospace, remote sensing, energy, AI, and motorsport should feel like parts of one engineering/R&D platform. Avoid giving each domain a disconnected visual identity.

### 5. Bilingual and multilingual resilience
The system must tolerate Persian/Arabic RTL text and Latin/Cyrillic/CJK text without relying on fixed widths, text-in-image, or typography that breaks when strings expand.

## Layout system
- Desktop-first design exploration, followed by responsive validation.
- Content container: fluid with a readable maximum width.
- Wide technical sections may use a wider container while long-form text remains constrained.
- Use a consistent spacing scale based on a small set of reusable tokens.
- Prefer asymmetric compositions only when they improve hierarchy; avoid gratuitous asymmetry.
- Cards should group meaningful information, not wrap every section by default.

## Typography
Typography must prioritize:
1. Persian/Arabic readability and correct shaping;
2. Latin readability;
3. Cyrillic support;
4. CJK coverage;
5. consistent numeric rendering.

The final typeface stack will be selected after testing the eight required locales.

Typography scale should support:
- display/hero;
- section heading;
- subsection heading;
- body;
- metadata/eyebrow;
- captions;
- buttons/controls.

Avoid overly futuristic display fonts for primary content.

## Color direction
The palette should be restrained and corporate, with:
- a dark technical foundation for high-contrast hero/technical areas;
- a light reading surface for long-form content;
- one primary brand accent derived from the approved company identity;
- a limited secondary accent set for states/data visualization only.

Exact color values are not frozen yet. They must be extracted/validated against the approved company logo/brand asset before implementation.

## Imagery
Prefer:
- authentic company/project imagery;
- scientific/engineering photography;
- technical diagrams;
- approved project screenshots;
- restrained abstract technical visualization.

Avoid:
- generic stock imagery;
- cliché space/AI imagery with no relation to the company;
- excessive 3D decoration;
- imagery that implies hardware, facilities, clients, or capabilities not supported by evidence.

## Approved domain imagery

The six-domain wallpaper set in Dropbox `/company website/wallpapers/BEST` is an approved visual reference set for the corporate website. It contains one reference wallpaper for each activity domain:

- Astronomy — `alpha-wallpaper-16-astronomy-transit.png`
- Aerospace — `alpha-wallpaper-17-aerospace-ascent.png`
- Energy — `alpha-wallpaper-18-energy-field.png`
- Artificial Intelligence — `alpha-wallpaper-19-ai-neural.png`
- Motorsport — `alpha-wallpaper-20-motorsport-circuit.png`
- Remote Sensing — `alpha-wallpaper-21-remote-sensing-swath.png`

These assets are design references/source assets; their use in a specific page or component remains subject to composition, readability, accessibility, performance, licensing/provenance, and responsive QA. They must not be treated as permission to imply unsupported capabilities or project claims.

## Motion
Motion should be purposeful and progressive-enhancement friendly.
Allowed:
- subtle entrance transitions;
- hover/focus transitions;
- restrained diagram/trajectory animation;
- state transitions.

Avoid:
- perpetual background animation;
- motion that competes with reading;
- animation required to understand core content.

Respect prefers-reduced-motion.

## Components
Initial design-system primitives:
- Header / navigation
- Language switcher
- Breadcrumbs
- Hero
- Section header
- Domain card
- Project card
- Capability list
- Timeline
- Metric/evidence block
- CTA
- Button/link
- Form controls
- Alert/status
- Footer

Each component must define:
- semantic HTML;
- keyboard behavior;
- focus state;
- responsive behavior;
- RTL behavior;
- localization constraints;
- accessible name/description where applicable.

## Accessibility
Target WCAG 2.2 AA as the design baseline.
Design must account for:
- visible focus;
- sufficient contrast;
- keyboard navigation;
- reduced motion;
- semantic hierarchy;
- touch target sizing;
- form error/success states;
- screen-reader-friendly navigation;
- RTL/LTR correctness.

## Responsive behavior
Required validation widths:
- small mobile;
- large mobile;
- tablet;
- laptop;
- wide desktop.

No critical content may depend on hover.

## Page-level visual hierarchy
### Home
Identity → value proposition → six domains → selected projects → vision → CEO → collaboration CTA.

### Domain
Domain identity → capability model → applications → evidence/related projects → future direction → CTA.

### Project
Project identity → purpose → status → factual technical scope → company relationship → future direction.

### CEO
Professional identity → summary → education/experience → selected projects/publications → skills/memberships → approved contact/social links.

### Contact
Purpose → inquiry type → contact method/form → privacy notice → success/error states.

## Content integrity
Visual design must never compensate for missing evidence by implying:
- a customer relationship;
- project completion;
- certification;
- production deployment;
- registered legal scope;
- technical performance;
- organizational scale.

## Next decisions
1. Validate approved logo/brand asset.
2. Freeze color tokens.
3. Select multilingual-safe font stack.
4. Define spacing/grid tokens.
5. Define component states.
6. Produce implementation-ready design-system specification.
7. Validate the visual system against the eight locales before frontend implementation.
