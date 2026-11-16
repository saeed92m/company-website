import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const page = await readFile(new URL("../src/pages/[locale]/company/admin-demo.astro", import.meta.url), "utf8");

test("admin demo is generated for all supported locales and is not indexed", () => {
  for (const locale of ["fa", "en", "ar", "ru", "de", "zh", "fr", "es"]) {
    assert.ok(page.includes(`  ${locale}: {`), `missing demo locale: ${locale}`);
  }
  assert.ok(page.includes("locales.map"));
  assert.ok(page.includes("noindex>"));
});

test("demo credentials are explicitly public demo values, not production credentials", () => {
  assert.ok(page.includes('demoUser: "demo"'));
  assert.ok(page.includes('demoPass: "keyhan-demo"'));
  assert.ok(page.includes("NOT REAL AUTHENTICATION"));
  assert.ok(page.includes("هیچ داده واقعی"));
});

test("demo interaction is client-side only and does not persist or transmit credentials", () => {
  assert.ok(page.includes('data-demo-form'));
  assert.ok(page.includes('data-demo-dashboard'));
  assert.ok(page.includes('preventDefault()'));
  assert.ok(!page.includes("fetch("));
  assert.ok(!page.includes("localStorage"));
  assert.ok(!page.includes("sessionStorage"));
  assert.ok(!page.includes("service_role"));
  assert.ok(!page.includes("supabase"));
});

test("demo dashboard contains six company domains and read-only sample modules", () => {
  for (const domain of ["Astronomy", "Aerospace", "Remote Sensing", "Energy", "Artificial Intelligence", "Motorsport"]) {
    assert.ok(page.includes(domain), `missing domain: ${domain}`);
  }
  for (const module of ["projects", "content", "users", "security", "settings"]) assert.ok(page.includes(module));
  assert.ok(page.includes("Nothing is saved or sent"));
});
