import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const css = await readFile(new URL("../src/styles/global.css", import.meta.url), "utf8");

function blockFor(selector) {
  const start = css.indexOf(selector);
  assert.notEqual(start, -1, `missing CSS selector: ${selector}`);
  const open = css.indexOf("{", start);
  const close = css.indexOf("}", open);
  return css.slice(open + 1, close);
}

function token(block, name) {
  const match = block.match(new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{3}(?:[0-9a-fA-F]{3})?)`));
  assert.ok(match, `missing CSS token --${name}`);
  const value = match[1];
  return value.length === 4 ? `#${[...value.slice(1)].map((part) => part + part).join("")}` : value;
}

function luminance(hex) {
  const rgb = [1, 3, 5].map((offset) => parseInt(hex.slice(offset, offset + 2), 16) / 255);
  const linear = rgb.map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}

function contrast(foreground, background) {
  const [lighter, darker] = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (lighter + 0.05) / (darker + 0.05);
}

test("dark-theme text tokens meet WCAG AA contrast against page and card surfaces", () => {
  const dark = blockFor(":root");
  assert.ok(contrast(token(dark, "ink"), token(dark, "page")) >= 4.5);
  assert.ok(contrast(token(dark, "muted"), token(dark, "page")) >= 4.5);
  assert.ok(contrast(token(dark, "muted"), token(dark, "surface")) >= 4.5);
  assert.ok(contrast(token(dark, "accent"), token(dark, "page")) >= 4.5);
  assert.ok(contrast(token(dark, "link"), token(dark, "surface")) >= 4.5);
  assert.ok(contrast(token(dark, "footer-accent"), token(dark, "page")) >= 4.5);
  assert.ok(contrast(token(dark, "focus"), token(dark, "page")) >= 3);
});

test("light-theme text tokens meet WCAG AA contrast against page and card surfaces", () => {
  const light = blockFor('html[data-theme="light"]');
  assert.ok(contrast(token(light, "ink"), token(light, "page")) >= 4.5);
  assert.ok(contrast(token(light, "muted"), token(light, "page")) >= 4.5);
  assert.ok(contrast(token(light, "muted"), token(light, "surface")) >= 4.5);
  assert.ok(contrast(token(light, "accent"), token(light, "page")) >= 4.5);
  assert.ok(contrast(token(light, "link"), token(light, "surface")) >= 4.5);
  assert.ok(contrast(token(light, "footer-accent"), token(light, "page")) >= 4.5);
  assert.ok(contrast(token(light, "focus"), token(light, "page")) >= 3);
});

test("primary button text meets WCAG AA contrast against both gradient endpoints", () => {
  const dark = blockFor(":root");
  const white = token(dark, "white");
  assert.ok(contrast(white, token(dark, "brand-bright")) >= 4.5);
  assert.ok(contrast(white, token(dark, "brand")) >= 4.5);
});
