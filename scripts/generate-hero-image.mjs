import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function generateHeroImage() {
  const dir = 'public/images/blog';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Create an SVG with elegant masonry/concrete texture and subtle water shield effect
  const svg = `
  <svg width="800" height="533" viewBox="0 0 800 533" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#111c24"/>
        <stop offset="40%" stop-color="#173B46"/>
        <stop offset="100%" stop-color="#0a151b"/>
      </linearGradient>
      <pattern id="brickPattern" width="60" height="30" patternUnits="userSpaceOnUse">
        <rect width="60" height="30" fill="none" stroke="#224c58" stroke-width="1.2" opacity="0.35"/>
        <line x1="0" y1="15" x2="60" y2="15" stroke="#224c58" stroke-width="1.2" opacity="0.35"/>
        <line x1="30" y1="0" x2="30" y2="15" stroke="#224c58" stroke-width="1.2" opacity="0.35"/>
        <line x1="0" y1="15" x2="0" y2="30" stroke="#224c58" stroke-width="1.2" opacity="0.35"/>
        <line x1="60" y1="15" x2="60" y2="30" stroke="#224c58" stroke-width="1.2" opacity="0.35"/>
      </pattern>
      <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="50%">
        <stop offset="0%" stop-color="#E88735" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#173B46" stop-opacity="0"/>
      </linearGradient>
      <radialGradient id="centerLight" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#366b7a" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="#111c24" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <!-- Background Base -->
    <rect width="800" height="533" fill="url(#bgGrad)"/>
    <rect width="800" height="533" fill="url(#brickPattern)"/>
    <rect width="800" height="533" fill="url(#centerLight)"/>
    <rect width="800" height="533" fill="url(#glowGrad)"/>

    <!-- Water protection shield motif subtle outline -->
    <g transform="translate(400, 240) scale(0.9)" opacity="0.18">
      <path d="M0 -140 L110 -90 L110 30 C110 110 0 170 0 170 C0 170 -110 110 -110 30 L-110 -90 Z" 
            fill="none" stroke="#FFD700" stroke-width="8" stroke-linejoin="round"/>
      <path d="M0 -60 C-35 0 -45 35 0 85 C45 35 35 0 0 -60 Z" 
            fill="#FFD700" opacity="0.3"/>
    </g>
  </svg>
  `;

  const svgBuffer = Buffer.from(svg);

  // 800x533 webp
  await sharp(svgBuffer)
    .resize(800, 533)
    .webp({ quality: 85 })
    .toFile(path.join(dir, 'melhor-impermeabilizante-para-paredes.webp'));

  // 490x326 small webp
  await sharp(svgBuffer)
    .resize(490, 326)
    .webp({ quality: 80 })
    .toFile(path.join(dir, 'melhor-impermeabilizante-para-paredes-small.webp'));

  console.log('Hero images generated successfully!');
}

generateHeroImage().catch(console.error);
