import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, stat, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import sharp from "sharp";
import { optimizeWebpFile } from "./optimize-static-webp.mjs";

test("WebP optimization preserves format and pixel dimensions", async () => {
  const directory = await mkdtemp(path.join(tmpdir(), "company-website-webp-"));
  const filePath = path.join(directory, "fixture.webp");
  const width = 640;
  const height = 360;
  const pixels = Buffer.alloc(width * height * 3);
  let seed = 123456789;

  for (let index = 0; index < pixels.length; index += 1) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    pixels[index] = seed >>> 24;
  }

  try {
    await sharp(pixels, {
      raw: { width, height, channels: 3 },
    })
      .webp({ lossless: true })
      .toFile(filePath);

    const before = await stat(filePath);
    const result = await optimizeWebpFile(filePath);
    const after = await stat(filePath);
    const metadata = await sharp(await readFile(filePath)).metadata();

    assert.equal(metadata.format, "webp");
    assert.equal(metadata.width, width);
    assert.equal(metadata.height, height);
    assert.equal(result.width, width);
    assert.equal(result.height, height);
    assert.equal(result.originalBytes, before.size);
    assert.equal(result.optimizedBytes, after.size);
    assert.ok(result.savedBytes >= 0);
    assert.ok(after.size <= before.size);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
