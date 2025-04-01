import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Organization GitHub Pages serves from root
  build: {
    minify: 'esbuild',
    rollupOptions: {
      treeshake: true,
    },
  },
})
