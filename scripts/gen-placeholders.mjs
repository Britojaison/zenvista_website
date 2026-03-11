// Run: node scripts/gen-placeholders.mjs
// Generates placeholder SVG images for development

import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const dir = join(process.cwd(), "public/images");
mkdirSync(dir, { recursive: true });

const images = [
  "hero-poster",
  "intro",
  "villa-5",
  "villa-8",
  "villa-11",
  "sky-garden",
  "aqua-lounge",
  "star-deck",
  "wellness",
  "clubhouse",
  "ev",
  "gallery-1",
  "gallery-2",
  "gallery-3",
  "gallery-4",
  "gallery-5",
  "gallery-6",
  "fullbleed-1",
  "fullbleed-2",
  "location",
];

const colors = ["#28362b", "#561a28", "#594433", "#3a2e28", "#1e2a20"];

images.forEach((name, i) => {
  const bg = colors[i % colors.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="${bg}"/>
  <text x="600" y="400" font-family="Georgia" font-size="28" fill="#e1b258" text-anchor="middle" dominant-baseline="middle" opacity="0.5">${name}</text>
  <text x="600" y="440" font-family="Georgia" font-size="14" fill="#b9b4a8" text-anchor="middle" dominant-baseline="middle" opacity="0.4">Replace with actual image</text>
</svg>`;
  writeFileSync(join(dir, `${name}.jpg`), svg);
  console.log(`✓ ${name}.jpg`);
});

console.log("\nDone. Replace these with real images.");
