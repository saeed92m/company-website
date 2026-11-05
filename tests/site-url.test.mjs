import test from "node:test";
import assert from "node:assert/strict";
import { resolveSiteUrl } from "../src/utils/site-url.mjs";

test("resolves a GitHub Pages route with its base path exactly once", () => {
  assert.equal(
    resolveSiteUrl("/company-website/fa/company/ceo/", "https://saeed92m.github.io/company-website"),
    "https://saeed92m.github.io/company-website/fa/company/ceo/"
  );
});

test("resolves the root route against a site origin with a base path", () => {
  assert.equal(
    resolveSiteUrl("/company-website/en/", "https://saeed92m.github.io/company-website/"),
    "https://saeed92m.github.io/company-website/en/"
  );
});
