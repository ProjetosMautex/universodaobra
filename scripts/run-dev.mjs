import { dev } from 'astro';

async function main() {
  console.log('Starting Astro Dev Server on http://localhost:4321 ...');
  try {
    await dev({
      server: {
        host: '0.0.0.0',
        port: 4321,
      },
    });
    console.log('Astro Dev Server is running at http://localhost:4321');
  } catch (err) {
    console.error('Failed to start Astro dev server:', err);
    process.exit(1);
  }
}

main();
