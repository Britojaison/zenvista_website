import sharp from "sharp";
import { readdirSync, mkdirSync } from "fs";
import { join, parse } from "path";

const inputDir = join(process.cwd(), "public/images");
const outputDir = join(process.cwd(), "public/img");
mkdirSync(outputDir, { recursive: true });

const files = readdirSync(inputDir).filter(
  (f) => f.endsWith(".png") || f.endsWith(".jpg") || f.endsWith(".jpeg")
);

for (const file of files) {
  const { name } = parse(file);
  // Sanitize filename: lowercase, replace spaces with hyphens
  const safeName = name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  const inputPath = join(inputDir, file);
  const outputPath = join(outputDir, `${safeName}.jpg`);

  console.log(`Processing: ${file} → ${safeName}.jpg`);

  await sharp(inputPath)
    .resize({ width: 1920, withoutEnlargement: true })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(outputPath);

  const inputStat = (await import("fs")).statSync(inputPath);
  const outputStat = (await import("fs")).statSync(outputPath);
  const saved = ((1 - outputStat.size / inputStat.size) * 100).toFixed(1);
  console.log(
    `  ${(inputStat.size / 1024 / 1024).toFixed(1)}MB → ${(outputStat.size / 1024 / 1024).toFixed(2)}MB (${saved}% smaller)`
  );
}

console.log("\nDone! Optimized images in public/img/");
