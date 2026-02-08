const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images-optimized');

// Kreiraj output folder ako ne postoji
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Podešavanja za optimizaciju
const MAX_WIDTH = 1920; // maksimalna širina
const QUALITY = 80; // kvalitet (1-100)

async function optimizeImage(filename) {
  const inputPath = path.join(inputDir, filename);
  const ext = path.extname(filename).toLowerCase();

  // Preskoči ako nije jpg/jpeg/png
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    console.log(`⏭️  Preskačem: ${filename} (nije jpg/png)`);
    return;
  }

  const outputFilename = filename.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const outputPath = path.join(outputDir, outputFilename);

  try {
    const metadata = await sharp(inputPath).metadata();
    console.log(`🔄 Optimizujem: ${filename} (${(fs.statSync(inputPath).size / 1024 / 1024).toFixed(2)}MB, ${metadata.width}x${metadata.height})`);

    await sharp(inputPath)
      .resize(MAX_WIDTH, null, {
        withoutEnlargement: true, // ne povećavaj male slike
        fit: 'inside'
      })
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const oldSize = fs.statSync(inputPath).size;
    const newSize = fs.statSync(outputPath).size;
    const savings = ((1 - newSize / oldSize) * 100).toFixed(1);

    console.log(`✅ Gotovo: ${outputFilename} (${(newSize / 1024 / 1024).toFixed(2)}MB, ušteda ${savings}%)\n`);
  } catch (error) {
    console.error(`❌ Greška kod ${filename}:`, error.message);
  }
}

async function optimizeAll() {
  console.log('🚀 Započinjem optimizaciju slika...\n');

  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    await optimizeImage(file);
  }

  console.log('\n✨ Optimizacija završena!');
  console.log(`📁 Optimizovane slike su u: ${outputDir}`);
  console.log('\n📋 Sledeći koraci:');
  console.log('1. Proverite optimizovane slike');
  console.log('2. Ako su OK, zaменite originale:');
  console.log('   - Obrišite /public/images/*');
  console.log('   - Premestite fajlove iz /public/images-optimized/ u /public/images/');
  console.log('3. Ažurirajte ekstenzije u kodu (.jpg -> .webp)');
}

optimizeAll();
