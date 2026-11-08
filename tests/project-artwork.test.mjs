import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";

const component = await readFile(new URL("../src/components/ProjectCards.astro", import.meta.url), "utf8");
const artwork = [
  ["Alpha Linux", "Alpha-Linux.webp"],
  ["Company Platform", "Company-Platform.webp"],
  ["ZTF Classifier", "ZTF-Classifier.webp"]
];

test("each standalone project card maps to its dedicated artwork", () => {
  for (const [title, filename] of artwork) {
    const slug = filename.replace(/\.webp$/i, "").toLowerCase();
    assert.ok(component.includes(`"${title}": { slug: "${slug}", filename: "${filename}" }`), `${title} must map to ${filename}`);
  }
  assert.match(component, /import\.meta\.env\.BASE_URL/);
  assert.match(component, /loading="lazy"/);
  assert.match(component, /decoding="async"/);
  assert.match(component, /alt=""/);
});

test("all project artwork files are valid, non-empty WebP assets", async () => {
  for (const [, filename] of artwork) {
    const path = new URL(`../public/assets/domains/${filename}`, import.meta.url);
    const bytes = await readFile(path);
    const metadata = await stat(path);
    assert.ok(metadata.size > 100_000, `${filename} must not be empty or truncated`);
    assert.equal(bytes.toString("ascii", 0, 4), "RIFF", `${filename} must have a RIFF header`);
    assert.equal(bytes.toString("ascii", 8, 12), "WEBP", `${filename} must have a WebP signature`);
  }
});
