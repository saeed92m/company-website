# Design System Specification — Phase 2

## Status

Implementation-ready baseline.

This specification converts the visual direction and design tokens into reusable UI contracts for the first public website release.

## 1. System principles

- Content hierarchy comes before decoration.
- Components are semantic, reusable, and localization-safe.
- RTL and LTR are first-class layouts, not separate implementations.
- Components must remain usable with long translated strings.
- Interaction states must be visible without relying on color alone.
- Responsive behavior must be defined per component.
- Accessibility is part of the component contract.
- Public UI must never imply unsupported company/project claims.

## 2. Global layout

### Container
Use a fluid container with readable maximum width.
- inline padding: 16px mobile, 24px tablet, 32px desktop
- reading measure: approximately 65–80 characters per line
- wide technical sections may expand beyond the reading measure
- use CSS logical properties such as margin-inline, padding-inline, and inset-inline

### Grid
- Mobile: single-column by default.
- Tablet: 6-column conceptual grid where useful.
- Desktop: 12-column grid for complex compositions.
- Avoid fixed-position content for primary information.
- Preserve source/reading order when visual layout changes.

## 3. Typography contract

Required text roles:
- Display
- H1
- H2
- H3
- Body large
- Body
- Body small
- Eyebrow / metadata
- Caption
- Button / control label

Rules:
- One logical H1 per page.
- Do not encode text inside images.
- Allow wrapping in all controls unless a specific compact control requires a documented alternative.
- Use locale-aware line-height and font fallback.
- Numerals must remain legible across Persian/Arabic and Latin/CJK contexts.

## 4. Core components

### Header
Anatomy:
- brand
- primary navigation
- language switcher
- mobile navigation trigger

States:
- default
- scrolled/sticky where required
- mobile open
- focus-visible

Requirements:
- keyboard-operable
- Escape closes mobile navigation
- focus remains controlled when a modal-style mobile menu is open
- current page is programmatically identifiable
- no navigation item depends on hover

### Language switcher
Requirements:
- expose all eight supported locales
- identify current locale
- keyboard accessible
- preserve current route/context when a translation exists
- use language names and/or standard locale identifiers consistently
- do not use flags as the sole language identifier

Locales: fa, en, ar, ru, de, zh, fr, es

RTL locales: fa, ar

### Breadcrumbs
- semantic navigation landmark
- current page is identifiable
- directional separator must mirror correctly in RTL
- collapse only when documented for narrow screens

### Hero
Anatomy:
- eyebrow/identity
- primary heading
- supporting statement
- primary CTA
- optional secondary CTA
- optional evidence/visual

Rules:
- primary message must remain understandable without animation
- visual must not obscure text
- CTA labels must remain usable after localization

### Section header
Anatomy:
- optional eyebrow
- heading
- optional supporting text
- optional action

Use for major page sections; avoid excessive section wrappers.

### Domain card
Required:
- domain name
- concise description
- optional capability/application summary
- link to domain page

Rules:
- entire card must not become a misleading link target if only one action is intended
- iconography is secondary to text
- six domains use the same component contract

### Project card
Required:
- project name
- purpose/summary
- current public status
- company relationship
- link to project page

Repository links for Alpha Linux and ZTF Classifier remain excluded until explicitly approved.

### Capability list
Use semantic lists for capabilities and applications. Avoid decorative bullets that obscure hierarchy.

### Timeline
Use for CEO experience or company/project development only when chronology materially improves comprehension.
- semantic list structure
- dates remain readable in all locales
- no dependency on horizontal scrolling on mobile

### Evidence / metric block
Use only for approved factual evidence.
- source/context should be available where appropriate
- never invent metrics
- avoid presenting aspirations as measurements

### CTA
A CTA must have:
- clear action label
- sufficient context
- keyboard focus
- accessible name

### Button / link
Use real button elements for actions and real anchors for navigation.

States:
- default
- hover
- focus-visible
- active
- disabled where applicable
- loading where applicable

Never disable a control solely as a substitute for validation feedback.

### Form controls
Required:
- visible label
- help text where necessary
- error state
- success state where applicable
- autocomplete/input semantics where applicable
- keyboard access

Fields must tolerate translated labels and error messages.

### Alert / status
Status must be conveyed by text/icon plus semantic state, not color alone.

### Footer
Include:
- company identity
- primary navigation
- six domains
- contact
- legal/privacy links when available

Footer must remain usable in RTL and on small screens.

## 5. Responsive behavior

### Small mobile
- single-column content
- compact header
- no horizontal scrolling
- cards stack naturally
- touch targets must remain comfortably operable

### Large mobile / tablet
- allow controlled two-column layouts where content supports it
- preserve reading order

### Desktop / wide desktop
- use grid for hierarchy, not decoration
- allow wider technical visualizations
- constrain long-form text

No critical interaction may depend on hover.

## 6. RTL/LTR contract

Set document direction from locale.

Use CSS logical properties throughout.

RTL validation must cover:
- header/navigation
- language switcher
- breadcrumbs
- cards
- icon direction
- forms
- validation messages
- timelines
- footer
- modal/dialog controls

Directional icons such as arrows must mirror when their semantic direction changes.

Brand marks and non-directional technical diagrams must not be mirrored automatically.

## 7. Accessibility contract

Baseline: WCAG 2.2 AA.

Every component must provide:
- semantic structure
- keyboard operation
- visible focus
- accessible name
- sufficient contrast
- appropriate state semantics
- reduced-motion behavior where motion exists

Additional requirements:
- skip link
- logical landmark structure
- no keyboard traps
- errors associated with their controls
- status updates announced where necessary
- no information conveyed by color alone

## 8. Motion contract

Default motion should be subtle and non-essential.

Use existing token ranges:
- fast interaction: 120–180ms
- standard transition: 200–300ms
- larger layout transition: 300–450ms

When prefers-reduced-motion: reduce is active:
- remove non-essential movement
- preserve state changes and feedback
- do not hide content behind animation

## 9. Content/localization constraints

Components must support:
- short and long strings
- translated headings with different line counts
- CJK text without forced word-wrapping assumptions
- Persian/Arabic shaping
- Cyrillic
- Latin diacritics
- locale-aware dates/numbers where applicable

Do not hard-code English sentence structure into components.

## 10. Validation matrix

Before implementation is considered complete, test:
1. all eight locales
2. both RTL and LTR
3. small mobile, large mobile, tablet, laptop, wide desktop
4. keyboard-only navigation
5. visible focus
6. screen-reader semantics for navigation/forms
7. contrast
8. reduced motion
9. long translated strings
10. form error/success/loading states
11. no horizontal overflow
12. no unsupported claims introduced by UI

## 11. Implementation boundary

The design system defines behavior and contracts, not a mandatory framework.

The implementation may use Astro and component technology selected during the architecture implementation phase, provided these contracts remain intact.

## 12. Next step

Proceed to implementation architecture and frontend scaffold only after:
- design-system contract accepted
- multilingual font stack validated
- implementation framework selected
- content baseline prepared for the initial pages
