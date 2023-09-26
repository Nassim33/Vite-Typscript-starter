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
  resolve: {
    alias: { '@': resolve(__dirname, './src') },
  },
  server: {
    port: 3000,
  }
  
})
