import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: './',
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'),
      name: 'vite-package',
      fileName: (format) => `vite-package.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  },
  plugins: [react()]
})