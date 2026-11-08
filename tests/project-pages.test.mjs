import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const page = await readFile(new URL("../src/pages/[locale]/projects/[slug].astro", import.meta.url), "utf8");
const cards = await readFile(new URL("../src/components/ProjectCards.astro", import.meta.url), "utf8");
const definitions = [
  ["Alpha Linux", "alpha-linux", "Alpha-Linux.webp"],
  ["Company Platform", "company-platform", "Company-Platform.webp"],
  ["ZTF Classifier", "ztf-classifier", "ZTF-Classifier.webp"]
];

test("three dedicated project routes use the matching project content and artwork", () => {
  for (const [title, slug, image] of definitions) {
    assert.ok(page.includes(`title: "${title}", slug: "${slug}", image: "${image}"`));
    assert.ok(cards.includes(`"${title}": { slug: "${slug}", filename: "${image}" }`));
    assert.match(cards, /projects\/\$\{artwork\.slug\}/);
  }
  assert.match(page, /locales\.flatMap/);
  assert.match(page, /content\[locale\]\.projects\.find/);
  assert.match(page, /Missing .* content for locale/);
});

test("project pages expose a descriptive image, overview, and locale-aware navigation", () => {
  assert.match(page, /alt=\{.*project\.title/);
  assert.match(page, /copy\.overview/);
  assert.match(page, /route\(locale, "projects"\)/);
  assert.match(page, /import\.meta\.env\.BASE_URL/);
  assert.match(page, /fetchpriority="high"/);
  assert.match(page, /@media\(max-width:720px\)/);
  assert.match(page, /\.project-detail__visual img \{ aspect-ratio:auto; max-height:none; object-fit:contain; \}/);
  assert.match(page, /<SiteLayout/);
});
