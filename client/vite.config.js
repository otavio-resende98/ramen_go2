import { defineConfig } from 'vite'

export default defineConfig({
  transpileDependencies: true,
  server:{
    proxy:{
      '/api':{
        target: 'http://localhost:3000'
      }
    }
  },
  build: {
    outDir: 'dist'  // Garante que a saída seja para a pasta 'dist'
  }
})
