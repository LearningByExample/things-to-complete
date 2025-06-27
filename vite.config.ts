import { defineConfig } from 'vite'
import { resolve } from 'path'
import svgLoader from 'vite-svg-loader';
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/dist/vite.js';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    svgLoader(),
    autoImport({
      imports: [
        'vue',
      ],
      eslintrc: {
        enabled: true,
      },
      dirs: [
        './src/composables',
        './src/components',
        './src/pages'
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'public'
  },
  server: {
    port: 5174,
  }
})
