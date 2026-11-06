import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const layout = await readFile(new URL("../src/layouts/SiteLayout.astro", import.meta.url), "utf8");
const home = await readFile(new URL("../src/pages/[locale]/index.astro", import.meta.url), "utf8");
const styles = await readFile(new URL("../src/styles/global.css", import.meta.url), "utf8");

test("the corporate source colors remain explicit design tokens", () => {
  assert.match(styles, /--brand:#003c91/);
  assert.match(styles, /--brand-gray:#a8a8a8/);
});

test("the legal company name is the shared website and social identity", () => {
  assert.match(layout, /og:site_name" content=\{site\.companyName\}/);
  assert.match(layout, /"name": site\.companyName/);
  assert.match(layout, /brand-wordmark">\{site\.companyName\}/);
  assert.doesNotMatch(layout, /ALPHA TEAM/);
});

test("the homepage presents the registered company name before the tagline", () => {
  const companyName = home.indexOf("new-company-name");
  const tagline = home.indexOf('<h1 id="hero-title">');
  assert.ok(companyName >= 0, "homepage must render the registered company name");
  assert.ok(tagline > companyName, "registered company name must appear before the tagline");
  assert.match(home, /legalNameParts\?\.\[1\] \?\? site\.companyName/);
  assert.doesNotMatch(home, /ALPHA TEAM/);
});
