// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Plugin para garantir que tanto `sitemap.xml` quanto `sitemap-index.xml`
 * estejam sempre disponíveis na raiz do site para o Google Search Console.
 */
function sitemapCompatibilityPlugin() {
  return {
    name: 'sitemap-compatibility',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        try {
          const outDir = fileURLToPath(dir);
          const indexFile = path.join(outDir, 'sitemap-index.xml');
          const aliasFile = path.join(outDir, 'sitemap.xml');

          if (fs.existsSync(indexFile)) {
            fs.copyFileSync(indexFile, aliasFile);
            logger.info('`sitemap.xml` criado automaticamente em sincronia com `sitemap-index.xml`');
          }
        } catch (err) {
          logger.warn(`Aviso ao criar sitemap.xml: ${err}`);
        }
      },
    },
  };
}

export default defineConfig({
  site: 'https://universodaobra.com',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      // Remove páginas utilitárias de busca interna do sitemap (boas práticas de SEO / Google Search Console)
      filter: (page) => !page.includes('/search/'),
    }),
    sitemapCompatibilityPlugin(),
  ],
});
