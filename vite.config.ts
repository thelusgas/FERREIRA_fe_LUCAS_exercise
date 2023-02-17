import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  resolve: {
    alias: [
      { find: '@api', replacement: path.resolve(__dirname, 'src/api') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@helpers', replacement: path.resolve(__dirname, 'src/helpers') },
      { find: '@interfaces', replacement: path.resolve(__dirname, 'src/interfaces') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '@tests', replacement: path.resolve(__dirname, 'src/tests') },
    ],
  },
  server: {
    port: 3000,
  },
  plugins: [react()],
});
