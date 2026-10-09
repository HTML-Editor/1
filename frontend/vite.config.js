// VITE CONFIG - controls how the site is built.
// You rarely need to edit this file.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // EDIT HERE ONLY IF THE REPO IS RENAMED.
  // Must be '/<repo-name>/'. Repo is called '1', so the live URL is
  // https://html-editor.github.io/1/ . If this is wrong, the page loads blank (404 on JS/CSS).
  // Use '/' if you later move to a custom domain.
  base: '/1/', // must match the repo name: https://html-editor.github.io/1/
})
