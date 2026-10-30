// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');

const TARGET_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);

/**
 * Procura recursivamente por arquivos de imagem alvo.
 * @param {string} dir
 * @returns {string[]}
 */
function findTargetImages(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(findTargetImages(fullPath));
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (TARGET_EXTENSIONS.has(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

/**
 * Converte bytes para string formatada (KB, MB).
 * @param {number} bytes
 * @returns {string}
 */
function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function run() {
  console.log('🚀 Iniciando otimização de imagens para WebP...\n');
  console.log(`📁 Diretório base: ${publicDir}`);

  const imagesToOptimize = findTargetImages(publicDir);

  if (imagesToOptimize.length === 0) {
    console.log('✨ Nenhuma imagem (.jpg, .jpeg, .png) precisando de conversão encontrada.');
    console.log('Todas as imagens do projeto já estão em .webp ou formato vetorial.\n');
    return;
  }

  console.log(`Encontradas ${imagesToOptimize.length} imagem(ns) para converter.\n`);

  let totalBefore = 0;
  let totalAfter = 0;
  let successCount = 0;
  let errorCount = 0;

  for (const inputPath of imagesToOptimize) {
    const dir = path.dirname(inputPath);
    const ext = path.extname(inputPath);
    const basename = path.basename(inputPath, ext);
    const outputPath = path.join(dir, `${basename}.webp`);

    const originalStats = fs.statSync(inputPath);
    const originalSize = originalStats.size;
    totalBefore += originalSize;

    try {
      // Converte a imagem usando sharp com alta fidelidade e compactação WebP otimizada
      await sharp(inputPath)
        .webp({ quality: 85, effort: 4 })
        .toFile(outputPath);

      const optimizedStats = fs.statSync(outputPath);
      const optimizedSize = optimizedStats.size;
      totalAfter += optimizedSize;

      // Apaga o arquivo original (.jpg, .png, etc.) após a conversão com sucesso
      fs.unlinkSync(inputPath);

      const percent = (((originalSize - optimizedSize) / originalSize) * 100).toFixed(1);
      const relativeInput = path.relative(projectRoot, inputPath);
      const relativeOutput = path.relative(projectRoot, outputPath);

      console.log(`✅ [OK] ${relativeInput} -> ${path.basename(relativeOutput)}`);
      console.log(`   ${formatSize(originalSize)} ➔ ${formatSize(optimizedSize)} (-${percent}%) | Original removido`);
      successCount++;
    } catch (err) {
      console.error(`❌ [ERRO] Falha ao converter ${inputPath}:`, err);
      errorCount++;
    }
  }

  console.log('\n=======================================');
  console.log('🏁 Otimização de imagens concluída:');
  console.log(`- Imagens convertidas com sucesso: ${successCount}`);
  if (errorCount > 0) {
    console.log(`- Imagens com erro: ${errorCount}`);
  }
  console.log(`- Tamanho original total: ${formatSize(totalBefore)}`);
  console.log(`- Tamanho final em WebP:  ${formatSize(totalAfter)}`);
  const totalSaved = totalBefore - totalAfter;
  const totalPercent = totalBefore > 0 ? ((totalSaved / totalBefore) * 100).toFixed(1) : '0';
  console.log(`- Economia total de espaço: ${formatSize(totalSaved)} (-${totalPercent}%)`);
  console.log('=======================================\n');
}

run().catch((err) => {
  console.error('Erro fatal ao rodar optimize-images:', err);
  process.exit(1);
});
