import sharp from 'sharp';

const input = 'public/img/amenities/Business Liunge.png';
const output = 'public/img/amenities/business-lounge.jpg';

await sharp(input)
  .jpeg({ quality: 85, progressive: true })
  .resize(1200, null, { withoutEnlargement: true })
  .toFile(output);

console.log('✓ Business Lounge compressed');
