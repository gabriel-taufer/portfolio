#!/usr/bin/env node
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

console.log('🖼️  Optimizing images...\n');

// Optimize tau.png (favicon)
try {
  await sharp(join(publicDir, 'tau.png'))
    .resize(512, 512, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(join(publicDir, 'tau-optimized.png'));

  console.log('✅ tau.png optimized → tau-optimized.png (512x512)');
} catch (error) {
  console.error('❌ Error optimizing tau.png:', error.message);
}

// Also create smaller versions for different use cases
try {
  // 192x192 for PWA
  await sharp(join(publicDir, 'tau.png'))
    .resize(192, 192, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(join(publicDir, 'tau-192.png'));

  console.log('✅ Created tau-192.png for PWA manifest');
} catch (error) {
  console.error('❌ Error creating tau-192.png:', error.message);
}

try {
  // 32x32 for classic favicon
  await sharp(join(publicDir, 'tau.png'))
    .resize(32, 32, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(join(publicDir, 'tau-32.png'));

  console.log('✅ Created tau-32.png for classic favicon');
} catch (error) {
  console.error('❌ Error creating tau-32.png:', error.message);
}

console.log('\n✨ Image optimization complete!');
console.log('\n📝 Next steps:');
console.log('   1. Review the optimized images in public/');
console.log('   2. If satisfied, replace tau.png with tau-optimized.png');
console.log('   3. Or update Head.astro to use tau-optimized.png');
