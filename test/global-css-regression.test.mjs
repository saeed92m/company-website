import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const css = await readFile(new URL("../src/styles/global.css", import.meta.url), "utf8");

test("project card base styles use a real CSS class selector", () => {
  assert.ok(css.includes("\n.project-card{"), "expected .project-card rule on a new line");
  assert.ok(!css.includes("\\n.project-card{"), "literal backslash-n must not precede the selector");
});
