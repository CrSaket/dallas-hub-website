import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [react(), cloudflare()],
  root: '.',
  build: {
    rollupOptions: {
      input: './index.html'
    }
  },
  server: {
    port: 3000,
    open: '/index.html'
  },
  resolve: {
    alias: {
      '@': '/src',
      '@/components': '/src/components',
      '@/pages': '/src/pages'
    }
  }
})