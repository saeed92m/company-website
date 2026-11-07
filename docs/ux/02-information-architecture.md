# Information Architecture — Phase 1

## IA goals

The information architecture must make the company understandable within a small number of steps while leaving room for future content and services.

## Proposed primary navigation

- Home
- Company
- Fields
- Projects
- CEO
- Vision
- Contact

Language switcher is a global utility, not a primary content destination.

## Sitemap

```
/
├── /about/
├── /fields/
│   ├── /astronomy/
│   ├── /aerospace/
│   ├── /remote-sensing/
│   ├── /energy/
│   ├── /artificial-intelligence/
│   └── /motorsport/
├── /projects/
│   ├── /alpha-linux/
│   └── /ztf-classifier/
├── /ceo/
├── /vision/
└── /contact/
```

Localized routes must follow the project's localization strategy.

The localized `/projects/` listing includes Alpha Linux and ZTF Classifier. Company-Platform is described on the Platforms page as an internal corporate operating system, not a public project or commercial product.


## Home page information hierarchy

1. Corporate identity and value proposition
2. Concise company introduction
3. Six activity domains
4. Selected projects
5. Development vision / future direction
6. Founder & CEO introduction
7. Collaboration/contact call to action

## Page contracts

### About
Must answer:
- Who is the company?
- When/where was it founded?
- What is its mission?
- What kind of work does it undertake?

### Fields
Must answer:
- What does the company work on?
- What are the six domains?
- What capabilities/applications belong to each?

### Domain page
Must answer:
- What is this domain?
- What does the company intend to develop/do in it?
- What applications are relevant?
- Which projects are related?

### Projects
Must answer:
- What is the project?
- Why does it exist?
- What is its current public status?
- What is the relationship to the company?

### CEO
Must answer:
- Who is Saeed Memarzadeh?
- What is his professional background?
- What relevant experience and work can be publicly presented?

### Vision
Must answer:
- What is the company's development direction?
- How do the six domains connect?
- What is the long-term R&D orientation?

### Contact
Must answer:
- How can someone contact the company?
- How can someone request a meeting?
- How can someone request collaboration?
- What information should be included in an inquiry?

## Navigation rules

- Do not hide the six domains behind an unnecessary mega-menu on mobile.
- Preserve a clear path back to Fields from every domain page.
- Project pages must clearly distinguish project description from company-wide capabilities.
- Contact must be reachable globally.
- Language switching must be persistent and accessible.
- Future sections such as Research, News, Careers, Publications, Portal, or CMS content must be additive rather than requiring navigation redesign.

## IA status

**Phase 1 working baseline — ready for stakeholder review.**

The IA should proceed to wireframing only after checking it against the approved company content and actual content volume.


## Architecture update — 2026-11-07

The localized `/platforms/` route is part of the primary navigation and sitemap.

The page separates:
1. Company-Platform as the internal corporate operating and integration system.
2. The six independent activity domains.
3. Five shared technology platforms.
4. Engineering and hardware capability scope.
5. Digital infrastructure and IT.
6. Governance and assurance.
7. Business and market development.

Company-Platform is not listed as a public project or commercial product. It is shown only as an internal corporate system with its current status labelled In Progress.

The five shared technology platforms are labelled Not started / target architecture. Engineering, IT, governance, and business capabilities are described as target scope, not evidence of current operational capacity.

Each activity domain uses its approved architecture label: ASTROINTEL, AEROINTEL, GEOINTEL, KEYHAN AI, ENERGIQ, and MOTIONIQ.

The mobile primary navigation uses a keyboard-operable disclosure control. It must be verified in Chromium, Firefox, WebKit, RTL, and with long translated labels.
