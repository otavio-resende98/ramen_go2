import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: '../public', // Diretório de saída para os arquivos de build
    emptyOutDir: true, // Limpar o diretório de saída antes de construir
  }
});