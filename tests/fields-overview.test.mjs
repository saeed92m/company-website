import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const page = await readFile(new URL("../src/pages/[locale]/fields/index.astro", import.meta.url), "utf8");
const asset = await readFile(new URL("../public/assets/fields/six-domains-overview.webp", import.meta.url));

test("Fields overview displays the six-domain image before the domain cards", () => {
  const imageAt = page.indexOf('class="fields-overview"');
  const cardsAt = page.indexOf('class="domain-grid"');
  assert.ok(imageAt >= 0, "missing Fields overview figure");
  assert.ok(cardsAt > imageAt, "overview image must appear before the domain cards");
  assert.match(page, /loading="lazy" decoding="async"/);
  assert.match(page, /width="480" height="270"/);
  assert.match(page, /aspect-ratio:\s*16\s*\/\s*9/);
});

test("Fields overview provides localized alternative text for all supported locales", () => {
  for (const locale of ["fa", "en", "ar", "ru", "de", "zh", "fr", "es"]) {
    assert.ok(page.includes(`  ${locale}: "`), `missing ${locale} alternative text`);
  }
  assert.match(page, /alt={fieldsOverviewAlt\[locale\]}/);
  assert.match(page, /BASE_URL\.endsWith\("\/"\)/);
});

test("Fields overview image is a valid WebP asset", () => {
  assert.equal(asset.toString("ascii", 0, 4), "RIFF");
  assert.equal(asset.toString("ascii", 8, 12), "WEBP");
  assert.ok(asset.byteLength > 10000);
});
