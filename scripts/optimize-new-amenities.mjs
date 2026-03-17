import sharp from 'sharp';

const files = [
  { input: 'public/images/AMENITIES/cricket.png', output: 'public/img/amenities/cricket.jpg' },
  { input: 'public/images/AMENITIES/Private Theatre.png', output: 'public/img/amenities/private-theatre.jpg' },
  { input: 'public/images/AMENITIES/Garden Cafe Small.png', output: 'public/img/amenities/garden-cafe.jpg' },
];

for (const f of files) {
  await sharp(f.input)
    .resize(1200, 900, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 82, progressive: true })
    .toFile(f.output);

  const { statSync } = await import('fs');
  const inSize = statSync(f.input).size;
  const outSize = statSync(f.output).size;
  console.log(`✓ ${f.input} → ${f.output}  (${(inSize/1024/1024).toFixed(1)}MB → ${(outSize/1024).toFixed(0)}KB)`);
}
console.log('\nDone!');
