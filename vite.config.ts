import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps asset paths relative, so the same build works on
// GitHub Pages, navastha.com and navastha.in without changes.
export default defineConfig({
  plugins: [react()],
  base: './',
})
