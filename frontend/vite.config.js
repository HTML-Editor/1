import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/1/', // must match the repo name: https://html-editor.github.io/1/
})
