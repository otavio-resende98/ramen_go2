import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000, // Porta do servidor de desenvolvimento
  },
  build: {
    outDir: 'dist'  // Garante que a saída seja para a pasta 'dist'
  }
});
