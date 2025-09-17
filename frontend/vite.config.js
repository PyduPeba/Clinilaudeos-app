// frontend/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist'
  },
  // 👇 Adicione isso para resolver o erro ao acessar rotas diretamente
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: '/',
});
