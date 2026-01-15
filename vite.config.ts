import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      // COMPLETELY override PostCSS config - don't use external file
      plugins: [
        tailwindcss,
        autoprefixer,
        // NO postcss-import here
      ]
    }
  },
  server: {
    hmr: {
      overlay: false // Temporarily disable error overlay
    }
  }
})