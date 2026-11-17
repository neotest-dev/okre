// @ts-check
import { defineConfig } from 'astro/config';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';

// Solo en desarrollo: permite que el panel /admin guarde src/data/menu.json
const guardarMenu = {
  name: 'guardar-menu',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use('/__guardar-menu', (req, res) => {
      if (req.method !== 'POST') { res.statusCode = 405; return res.end(); }
      let body = '';
      req.on('data', (c) => (body += c));
      req.on('end', () => {
        try {
          const json = JSON.stringify(JSON.parse(body), null, 2);
          writeFileSync(fileURLToPath(new URL('./src/data/menu.json', import.meta.url)), json + '\n', 'utf8');
          res.end('ok');
        } catch (e) {
          res.statusCode = 400;
          res.end('error');
        }
      });
    });
  },
};

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), guardarMenu]
  }
});
