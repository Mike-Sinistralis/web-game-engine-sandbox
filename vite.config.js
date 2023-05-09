import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      Babylon: '/src/Babylon',
      common: '/src/common',
      Phaser: '/src/Phaser',
      theme: '/src/theme',
      Three: '/src/Three',
    },
  },
  plugins: [react({ jsxImportSource: '@emotion/react' })],
});
