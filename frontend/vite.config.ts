/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc'
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),  
    eslint({ failOnWarning: false, failOnError: false, cache: false }),
  ],
  server: {
    port: 3000,
  },
  esbuild: {
    loader: 'jsx',
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  resolve: {
    alias: { '@': resolve(__dirname, './src') },
  },
  // Build
  build: {
    assetsDir: 'static',
  },
})
