import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      // Linux/Vercel is case-sensitive; sources live in src/Components (capital C)
      {
        find: '@/components',
        replacement: path.resolve(__dirname, './src/Components'),
      },
      { find: '@', replacement: path.resolve(__dirname, './src') },
    ],
  },
})
