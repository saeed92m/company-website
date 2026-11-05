import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const css = await readFile(new URL("../src/styles/design-system.css", import.meta.url), "utf8");
const layout = await readFile(new URL("../src/layouts/SiteLayout.astro", import.meta.url), "utf8");
const home = await readFile(new URL("../src/pages/[locale]/index.astro", import.meta.url), "utf8");
const requireGlobalCss = await readFile(new URL("../src/styles/global.css", import.meta.url), "utf8");

function getColor(name, selector = ":root {") {
  const start = css.indexOf(selector);
  assert.notEqual(start, -1, `missing selector: ${selector}`);
  const end = css.indexOf("}", start);
  const match = css.slice(start, end).match(new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{3,8})`));
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
  assert.equal(getColor("brand-blue"), "#003c91");
  assert.equal(getColor("brand-gray"), "#a8a8a8");
});
test("night theme accent and link colors meet WCAG AA for small text", () => {
  assert.ok(ratio(getColor("accent"), getColor("page")) >= 4.5);
  assert.ok(ratio(getColor("link"), getColor("surface")) >= 4.5);
});
test("day theme accent and link colors meet WCAG AA for small text", () => {
  assert.ok(ratio(getColor("accent", 'html[data-theme="light"] {'), getColor("page", 'html[data-theme="light"] {')) >= 4.5);
  assert.ok(ratio(getColor("link", 'html[data-theme="light"] {'), getColor("surface", 'html[data-theme="light"] {')) >= 4.5);
});
test("homepage is a structural redesign, not only a token override", () => {
  for (const selector of ["new-hero", "orbit-visual", "new-domain-grid", "new-projects", "new-company"]) {
    assert.ok(home.includes(selector), `homepage is missing ${selector}`);
    assert.ok(css.includes(`.home-redesign .${selector}`) || css.includes(`.home-redesign .new-domain-grid`), `stylesheet is missing design rules for ${selector}`);
  }
});
test("homepage preserves all six domain links and localized paths", () => {
  assert.match(home, /site\.fields\.map/);
  assert.match(home, /route\(locale,"fields\/"/);
});
test("interactive controls preserve a 44px minimum target", () => {
  assert.match(css, /--control-height:\s*48px/);
  assert.match(css, /button, select \{ min-height: 44px; \}/);
});
test("reduced-motion preferences disable non-essential animation", () => {
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});


test("approved prototype typefaces are configured with script-aware fallback stacks", () => {
  const globalCss = requireGlobalCss;
  assert.match(globalCss, /family=IBM\+Plex\+Sans/);
  assert.match(globalCss, /family=Vazirmatn/);
  assert.match(globalCss, /IBM\+Plex\+Sans:wght@400\.\.700/);
  assert.match(globalCss, /Vazirmatn:wght@400\.\.900/);
  assert.match(globalCss, /html\[lang="fa"\] body\{font-family:"Vazirmatn"/);
  assert.match(globalCss, /html\[lang="ar"\] body\{font-family:"Noto Sans Arabic"/);
  assert.match(globalCss, /html\[lang="zh"\] body\{font-family:"Noto Sans CJK SC"/);
});
test("prototype controls and cards use the provisional soft-rounded geometry", () => {
  assert.match(css, /--radius-control:\s*12px/);
  assert.match(css, /--radius-card:\s*18px/);
  assert.match(css, /\.home-redesign \.new-button[\s\S]*?border-radius:\s*var\(--radius-control\)/);
  assert.match(css, /\.home-redesign \.new-domain-card[\s\S]*?border-radius:\s*var\(--radius-card\)/);
  assert.match(css, /\.home-redesign \.new-projects \.project-card[\s\S]*?border-radius:\s*var\(--radius-card\)/);
  assert.match(css, /\.home-redesign \.new-projects \.project-card \.button \{ border-radius: var\(--radius-control\); \}/);
});

test("light-theme domain-card accents remain readable on the dark image cards", () => {
  const accent = getColor("rd-accent", 'html[data-theme="light"] .home-redesign .new-domain-card {');
  assert.ok(ratio(accent, "#14243a") >= 4.5, "domain-card accent must meet WCAG AA");
});

test("homepage has no vanity metrics and keeps registration details in the company section", () => {
  assert.doesNotMatch(home, /Website languages|زبان وب‌سایت|لغات الموقع|Website-Sprachen|Langues du site|Idiomas del sitio|网站语言/);
  assert.doesNotMatch(home, /new-metrics|metric-item|metric-index/);
  assert.doesNotMatch(home, /site\.founded\.replace/);
  assert.match(home, /new-registration-fact/);
  assert.match(home, /۱۴۰۲\/۰۵\/۰۷/);
  assert.match(home, /Official Gazette notice: 29 July 2023/);
});
