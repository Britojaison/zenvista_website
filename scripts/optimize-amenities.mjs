import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'fs';
import { join, basename, extname } from 'path';

const inputDir = 'public/images/AMENITIES';
const outputDir = 'public/img/amenities';

mkdirSync(outputDir, { recursive: true });

const files = readdirSync(inputDir).filter(f => /\.(png|jpg|jpeg)$/i.test(f));

for (const file of files) {
  const inputPath = join(inputDir, file);
  const name = basename(file, extname(file))
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-');
  const outputPath = join(outputDir, `${name}.jpg`);

  await sharp(inputPath)
    .resize(1200, 900, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 82, progressive: true })
    .toFile(outputPath);

  const { size: inSize } = (await import('fs')).statSync(inputPath);
  const { size: outSize } = (await import('fs')).statSync(outputPath);
  console.log(`✓ ${file} → ${name}.jpg  (${(inSize/1024/1024).toFixed(1)}MB → ${(outSize/1024).toFixed(0)}KB)`);
}

console.log('\nDone! All amenity images optimized.');
