# Fields overview image

## Decision

Use the owner-supplied six-panel composite image as the visual introduction to the Fields overview page. Place it after the localized introduction and before the six domain cards.

## Asset

- Path: `public/assets/fields/six-domains-overview.webp`
- Source: image supplied by the company owner in the project conversation.
- Encoded dimensions: 480 × 270 pixels (16:9).
- Format: WebP.
- Purpose: one overview image representing astronomy, aerospace, remote sensing, energy, artificial intelligence, and motorsport.
- Accessibility: localized alternative text is provided for all eight supported locales.
- Delivery: responsive width, intrinsic aspect ratio, lazy loading, and asynchronous decoding.

The image is not a replacement for the six individual domain cards or their navigation. The cards and detail routes remain unchanged.

## Validation

A regression test checks placement, localized alternative text, image loading attributes, aspect ratio, and the WebP file signature. Build, full test suite, browser visual QA, and deployment validation remain pending CI and preview review.

## Publication status

The change is proposed on `feat/fields-overview-image`. It must not be treated as Production until the pull request is reviewed, merged, and deployment is verified.
