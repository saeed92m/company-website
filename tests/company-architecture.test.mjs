import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const siteSource = readFileSync(new URL("../src/content/site.ts", import.meta.url), "utf8");
const platformSource = readFileSync(new URL("../src/content/platforms.ts", import.meta.url), "utf8");
const homeSource = readFileSync(new URL("../src/pages/[locale]/index.astro", import.meta.url), "utf8");
const layoutSource = readFileSync(new URL("../src/layouts/SiteLayout.astro", import.meta.url), "utf8");

test("Company-Platform is not presented as a public project", () => {
  assert.equal((siteSource.match(/title:"Company Platform"/g) ?? []).length, 0);
  assert.match(platformSource, /COMPANY-PLATFORM/);
  assert.match(platformSource, /not a public commercial product|محصول تجاری عمومی نیست/);
});

test("six domain architecture labels are present", () => {
  for (const label of ["ASTROINTEL", "AEROINTEL", "GEOINTEL", "ENERGIQ", "KEYHAN AI", "MOTIONIQ"]) {
    assert.ok(platformSource.includes(label), "Missing domain label: " + label);
  }
});

test("five shared technology platforms are documented", () => {
  for (const label of ["KEYHAN AI CORE", "KEYHAN DATA PLATFORM", "NEXUS IoT", "KEYHAN SDK & API ECOSYSTEM", "ENGINEERING INTEGRATIONS"]) {
    assert.ok(platformSource.includes(label), "Missing shared platform: " + label);
  }
});

test("homepage links to the shared-platform architecture", () => {
  assert.match(homeSource, /route\(locale,"platforms"\)/);
  assert.match(homeSource, /home-platforms/);
});

test("mobile navigation exposes an accessible disclosure control", () => {
  assert.match(layoutSource, /aria-expanded="false"/);
  assert.match(layoutSource, /aria-controls="primary-navigation"/);
  assert.match(layoutSource, /data-mobile-nav-toggle/);
});
