import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const layout = await readFile(new URL("../src/layouts/SiteLayout.astro", import.meta.url), "utf8");
const home = await readFile(new URL("../src/pages/[locale]/index.astro", import.meta.url), "utf8");

test("the legal company name is the shared website and social identity", () => {
  assert.match(layout, /og:site_name" content=\{site\.companyName\}/);
  assert.match(layout, /"name": site\.companyName/);
  assert.match(layout, /brand-wordmark">\{site\.companyName\}/);
  assert.doesNotMatch(layout, /ALPHA TEAM/);
});

test("the homepage presents the registered company name before the tagline", () => {
  assert.match(home, /hero-company-name">\{site\.companyName\}/);
  assert.doesNotMatch(home, /ALPHA TEAM/);
});
