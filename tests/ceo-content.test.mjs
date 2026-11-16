import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../src/content/ceo.ts", import.meta.url), "utf8");
const count = (pattern) => [...source.matchAll(pattern)].length;

test("all eight locales include both source-backed experience periods", () => {
  assert.equal(count(/period:"2018–2019"/g), 8);
});

test("all eight locales include the six CV project records", () => {
  assert.equal(count(/name:"CanSat",period:"2024"/g), 8);
  assert.equal(count(/name:"CubeSat",period:"2023"/g), 8);
  assert.equal(count(/name:"CBS",period:"2020"/g), 8);
  assert.equal(count(/name:"Remote Sensing Projects",period:"2019"/g), 8);
  assert.equal(count(/name:"Space Radiation & Earth Shielding Study",period:"2020–2021"/g), 8);
  assert.equal(count(/name:"APTO",period:"2019"/g), 8);
  assert.equal(count(/period:"2024–2025"/g), 0);
});
