import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const component = await readFile(new URL("../src/components/AnalyticsConsent.astro", import.meta.url), "utf8");
const layout = await readFile(new URL("../src/layouts/SiteLayout.astro", import.meta.url), "utf8");
const workflow = await readFile(new URL("../.github/workflows/deploy-pages.yml", import.meta.url), "utf8");

test("GA4 is disabled unless a valid public measurement ID is configured", () => {
  assert.match(component, /PUBLIC_GA_MEASUREMENT_ID/);
  assert.match(component, /\^G-\[A-Z0-9\]\+\$/);
  assert.match(component, /if \(!\/\^G-\[A-Z0-9\]\+\$\/.test\(measurementId\)\) return/);
});

test("analytics does not load before explicit consent and rejection is persisted", () => {
  assert.match(component, /analytics_storage:\s*"denied"/);
  assert.match(component, /ad_storage:\s*"denied"/);
  assert.match(component, /ad_user_data:\s*"denied"/);
  assert.match(component, /ad_personalization:\s*"denied"/);
  assert.match(component, /saveChoice\("accepted"\)/);
  assert.match(component, /saveChoice\("rejected"\)/);
  assert.match(component, /analytics_storage: "denied"\}\);/);
  assert.match(component, /name.startsWith\("_ga_"\)/);
  assert.match(component, /if \(window.__pnfkAnalyticsStarted\)/);
  assert.match(component, /choice === "accepted"\) startAnalytics\(\)/);
  assert.match(component, /data-consent-reject/);
});

test("GA4 configuration disables advertising signals and sends no direct identifiers", () => {
  assert.match(component, /allow_google_signals:\s*false/);
  assert.match(component, /allow_ad_personalization_signals:\s*false/);
  assert.match(component, /contact_method:\s*"email"/);
  assert.doesNotMatch(component, /event\([^\n]*email_address|event\([^\n]*phone_number/i);
});

test("consent controls provide localized copy for all supported locales", () => {
  for (const locale of ["fa", "en", "ar", "ru", "de", "zh", "fr", "es"]) {
    assert.match(component, new RegExp("^  " + locale + ": \\{", "m"));
  }
});

test("consent UI is included in the shared site layout", () => {
  assert.match(layout, /AnalyticsConsent/);
  assert.match(layout, /<AnalyticsConsent locale=\{locale\} \/>/);
});

test("production Pages build reads the GA4 ID from a repository variable", () => {
  assert.match(workflow, /PUBLIC_GA_MEASUREMENT_ID:\s*\$\{\{ vars\.PUBLIC_GA_MEASUREMENT_ID \}\}/);
  assert.doesNotMatch(workflow, /G-[A-Z0-9]{6,}/);
});
