import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

async function run() {
  console.log('--- Otimizando Avatares de Autores ---');
  const autoresDir = 'public/images/Autores';
  const autores = ['Guilherme Martins.webp', 'Rafael Oliveira.webp'];

  for (const file of autores) {
    const fullPath = path.join(autoresDir, file);
    if (fs.existsSync(fullPath)) {
      const inputBuffer = fs.readFileSync(fullPath);
      const outputBuffer = await sharp(inputBuffer)
        .resize(128, 128, { fit: 'cover' })
        .webp({ quality: 82, effort: 5 })
        .toBuffer();
      fs.writeFileSync(fullPath, outputBuffer);
      console.log(`✅ ${file}: ${inputBuffer.length} B -> ${outputBuffer.length} B`);
    }
  }

  console.log('\n--- Otimizando Imagem Hero (LCP) ---');
  const heroPath = 'public/images/blog/melhor-impermeabilizante-para-paredes.webp';
  if (fs.existsSync(heroPath)) {
    const heroInput = fs.readFileSync(heroPath);
    const heroOutput = await sharp(heroInput)
      .resize(800, 533, { fit: 'cover' })
      .webp({ quality: 75, effort: 6 })
      .toBuffer();
    fs.writeFileSync(heroPath, heroOutput);
    console.log(`✅ melhor-impermeabilizante-para-paredes.webp: ${heroInput.length} B -> ${heroOutput.length} B`);
  }

  const heroSmallPath = 'public/images/blog/melhor-impermeabilizante-para-paredes-small.webp';
  if (fs.existsSync(heroSmallPath)) {
    const heroSmallInput = fs.readFileSync(heroSmallPath);
    const heroSmallOutput = await sharp(heroSmallInput)
      .resize(490, 326, { fit: 'cover' })
      .webp({ quality: 70, effort: 6 })
      .toBuffer();
    fs.writeFileSync(heroSmallPath, heroSmallOutput);
    console.log(`✅ melhor-impermeabilizante-para-paredes-small.webp: ${heroSmallInput.length} B -> ${heroSmallOutput.length} B`);
  }

  console.log('\n--- Gerando Thumbnails para a Vitrine (60x60 / 120px) ---');
  const produtosDir = 'public/images/produtos';
  const produtos = fs.readdirSync(produtosDir).filter(f => f.endsWith('.webp') && !f.endsWith('-thumb.webp'));

  for (const file of produtos) {
    const inputPath = path.join(produtosDir, file);
    const thumbName = file.replace(/\.webp$/, '-thumb.webp');
    const thumbPath = path.join(produtosDir, thumbName);

    const inputBuffer = fs.readFileSync(inputPath);
    const thumbBuffer = await sharp(inputBuffer)
      .resize(120, 120, { fit: 'inside' })
      .webp({ quality: 80, effort: 5 })
      .toBuffer();
    fs.writeFileSync(thumbPath, thumbBuffer);
    console.log(`✅ Thumb gerado: ${thumbName} (${thumbBuffer.length} B)`);
  }
}

run().catch(console.error);
