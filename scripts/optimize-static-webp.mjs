import sharp from "sharp";
import { readdir, rename, stat, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

export async function optimizeWebpFile(filePath, quality = 82) {
  const originalStat = await stat(filePath);
  const originalMetadata = await sharp(filePath).metadata();

  if (originalMetadata.format !== "webp") {
    throw new Error(`Expected WebP input: ${filePath}`);
  }

  const temporaryPath = `${filePath}.optimized.webp`;

  try {
    const outputInfo = await sharp(filePath)
      .webp({
        quality,
        effort: 6,
        smartSubsample: true,
      })
      .toFile(temporaryPath);

    if (
      outputInfo.width !== originalMetadata.width ||
      outputInfo.height !== originalMetadata.height ||
      outputInfo.format !== "webp"
    ) {
      throw new Error(`Image dimensions or format changed: ${filePath}`);
    }

    const optimizedStat = await stat(temporaryPath);
    if (optimizedStat.size < originalStat.size) {
      await rename(temporaryPath, filePath);
    } else {
      await unlink(temporaryPath);
    }

    const finalStat = await stat(filePath);
    return {
      file: path.basename(filePath),
      width: originalMetadata.width,
      height: originalMetadata.height,
      originalBytes: originalStat.size,
      optimizedBytes: finalStat.size,
      savedBytes: originalStat.size - finalStat.size,
    };
  } catch (error) {
    await unlink(temporaryPath).catch(() => {});
    throw error;
  }
}

export async function optimizeDirectory(directory, quality = 82) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = entries
    .filter(entry => entry.isFile() && entry.name.toLowerCase().endsWith(".webp"))
    .map(entry => path.join(directory, entry.name))
    .sort();

  if (files.length === 0) {
    throw new Error(`No WebP assets found in ${directory}`);
  }

  const results = [];
  for (const file of files) {
    results.push(await optimizeWebpFile(file, quality));
  }

  const originalBytes = results.reduce((sum, item) => sum + item.originalBytes, 0);
  const optimizedBytes = results.reduce((sum, item) => sum + item.optimizedBytes, 0);
  const savedBytes = originalBytes - optimizedBytes;
  const savedPercent = originalBytes === 0 ? 0 : (savedBytes / originalBytes) * 100;

  for (const item of results) {
    console.log(
      `${item.file}: ${item.originalBytes} -> ${item.optimizedBytes} bytes; ` +
      `${item.width}x${item.height}; saved ${item.savedBytes} bytes`
    );
  }

  console.log(
    `WebP optimization: ${files.length} files; ${originalBytes} -> ${optimizedBytes} bytes; ` +
    `${savedPercent.toFixed(1)}% saved`
  );

  if (optimizedBytes > originalBytes) {
    throw new Error("Optimized image payload is larger than the source payload");
  }

  return { files: results, originalBytes, optimizedBytes, savedBytes, savedPercent };
}

const currentFile = fileURLToPath(import.meta.url);
const invokedFile = process.argv[1] ? path.resolve(process.argv[1]) : "";
if (invokedFile === currentFile) {
  const directory = path.resolve(process.argv[2] ?? "dist/assets/domains");
  const quality = Number(process.env.WEBP_QUALITY ?? 82);
  if (!Number.isInteger(quality) || quality < 60 || quality > 95) {
    throw new Error("WEBP_QUALITY must be an integer from 60 to 95");
  }
  await optimizeDirectory(directory, quality);
}
