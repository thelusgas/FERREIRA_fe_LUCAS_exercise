import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  resolve: {
    alias: [
      {find: '@api', replacement: path.resolve(__dirname, 'src/api')},
      {find: '@components', replacement: path.resolve(__dirname, 'src/components')},
      {find: '@pages', replacement: path.resolve(__dirname, 'src/pages')},
      {
        find: '@types',
        replacement: path.resolve(__dirname, 'src/types'),
      },
    ],
  },
  server: {
    port: 3000,
  },
  plugins: [react()],
});
