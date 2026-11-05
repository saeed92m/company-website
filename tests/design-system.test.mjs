import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const css = await readFile(new URL("../src/styles/design-system.css", import.meta.url), "utf8");
const layout = await readFile(new URL("../src/layouts/SiteLayout.astro", import.meta.url), "utf8");

function token(name, blockStart = ":root {") {
  const start = css.indexOf(blockStart);
  assert.notEqual(start, -1, `missing token block: ${blockStart}`);
  const end = css.indexOf("}", start);
  const block = css.slice(start, end);
  const match = block.match(new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{3,8})`));
  assert.ok(match, `missing color token --${name}`);
  return match[1];
}
function luminance(hex) {
  const raw = hex.replace("#", "");
  const values = raw.length === 3 ? [...raw].map((x) => parseInt(x + x, 16)) : [0, 2, 4].map((i) => parseInt(raw.slice(i, i + 2), 16));
  const [r, g, b] = values.map((x) => x / 255).map((x) => x <= .04045 ? x / 12.92 : ((x + .055) / 1.055) ** 2.4);
  return .2126 * r + .7152 * g + .0722 * b;
}
function ratio(a, b) {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (light + .05) / (dark + .05);
}

test("design system is loaded after the foundation stylesheet", () => {
  assert.match(layout, /global\.css";\s*import "\.\.\/styles\/design-system\.css";/);
});
test("approved corporate colors remain unchanged", () => {
  assert.equal(token("brand-blue"), "#003c91");
  assert.equal(token("brand-gray"), "#a8a8a8");
});
test("dark theme accent and link colors meet WCAG AA for small text", () => {
  assert.ok(ratio(token("accent"), token("page")) >= 4.5);
  assert.ok(ratio(token("link"), token("surface")) >= 4.5);
});
test("light theme accent and link colors meet WCAG AA for small text", () => {
  assert.ok(ratio(token("accent", 'html[data-theme="light"] {'), token("page", 'html[data-theme="light"] {')) >= 4.5);
  assert.ok(ratio(token("link", 'html[data-theme="light"] {'), token("surface", 'html[data-theme="light"] {')) >= 4.5);
});
test("interactive controls preserve a 44px minimum target", () => {
  assert.match(css, /--control-height:\s*48px/);
  assert.match(css, /button, select \{ min-height: 44px; \}/);
});
test("reduced-motion preferences disable non-essential animation", () => {
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});
