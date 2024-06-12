import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',  // Garante que a saída seja para a pasta 'dist'
    emptyOutDir: true,  // Limpa o diretório de saída antes de construir
    rollupOptions: {
      input: {
        main: './src/main.js',  // Arquivo de entrada principal
      }
    }
  }
});
