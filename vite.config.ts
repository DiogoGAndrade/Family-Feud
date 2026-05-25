import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use the /Family-Feud/ subpath only for production builds (GitHub Pages).
  // Dev server stays at / so localhost links work normally.
  base: command === 'build' ? '/Family-Feud/' : '/',
}))
