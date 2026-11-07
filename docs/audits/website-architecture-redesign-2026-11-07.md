# Website architecture redesign — 2026-11-07

## Scope
- Added localized `/platforms/`, `/engineering/`, `/how-we-work/`, and `/collaborate/` pages for all eight supported locales.
- Added the five shared technology platforms and their target/not-started status.
- Added the nine-stage product lifecycle with stage gates and evidence requirements.
- Added potential collaboration pathways with explicit non-partner caveats.
- Added localized project status labels and the ASTROINTEL association for ZTF Classifier.
- Added a seven-layer company architecture view.
- Kept Company-Platform separate as an internal corporate operating and integration system.
- Removed Company-Platform from the public Projects listing.
- Added six approved domain architecture labels to homepage cards and domain-page metadata.
- Replaced the mobile horizontal navigation strip with an accessible disclosure menu.
- Added regression tests for the public/internal product boundary, domain labels, shared platforms, and mobile navigation.

## Content integrity
- The six activity domains remain separate from shared infrastructure.
- Company-Platform is labelled In Progress and is not described as a public commercial product.
- The five shared technology platforms are labelled Not started / target architecture.
- Engineering, IT, governance, and business functions are described as target scope, not current operational capacity.
- No customer, certification, laboratory, equipment, or delivery claim was added.
- No Alpha Linux or ZTF Classifier repository link was added.

## Validation
- Automated local build and browser validation were not available in the execution environment.
- CI, Astro check, and Chromium/Firefox/WebKit Browser QA must run on the pull request.
- Visual, accessibility, mobile, RTL/LTR, and localized-text review remain pending PR preview validation.
- No production deployment or merge was performed.
