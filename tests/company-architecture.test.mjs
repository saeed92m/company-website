import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const siteSource = readFileSync(new URL("../src/content/site.ts", import.meta.url), "utf8");
const platformSource = readFileSync(new URL("../src/content/platforms.ts", import.meta.url), "utf8");
const homeSource = readFileSync(new URL("../src/pages/[locale]/index.astro", import.meta.url), "utf8");
const layoutSource = readFileSync(new URL("../src/layouts/SiteLayout.astro", import.meta.url), "utf8");
const projectStatusSource = readFileSync(new URL("../src/content/project-status.ts", import.meta.url), "utf8");
const engineeringPageSource = readFileSync(new URL("../src/pages/[locale]/engineering/index.astro", import.meta.url), "utf8");
const lifecyclePageSource = readFileSync(new URL("../src/pages/[locale]/how-we-work/index.astro", import.meta.url), "utf8");
const collaborationPageSource = readFileSync(new URL("../src/pages/[locale]/collaborate/index.astro", import.meta.url), "utf8");

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

test("public project cards use localized evidence-based status labels", () => {
  assert.match(projectStatusSource, /Alpha release phase/);
  assert.match(projectStatusSource, /Version 1.0.1 released/);
  assert.match(projectStatusSource, /انتشار آلفا/);
  assert.match(projectStatusSource, /نسخه ۱\.۰\.۱ منتشر شده/);
});

test("homepage links to the shared-platform architecture", () => {
  assert.match(homeSource, /route\(locale,"platforms"\)/);
  assert.match(homeSource, /home-platforms/);
});

test("engineering, lifecycle, and collaboration routes are implemented", () => {
  assert.match(engineeringPageSource, /engineering-capability-grid/);
  assert.match(lifecyclePageSource, /lifecycle-grid/);
  assert.match(collaborationPageSource, /collaboration-grid/);
  assert.match(collaborationPageSource, /collaboration-process/);
});

test("mobile navigation exposes an accessible disclosure control", () => {
  assert.match(layoutSource, /aria-expanded="false"/);
  assert.match(layoutSource, /aria-controls="primary-navigation"/);
  assert.match(layoutSource, /data-mobile-nav-toggle/);
});
