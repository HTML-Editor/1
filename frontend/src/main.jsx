// ENTRY POINT - the first file the browser runs.
// It loads global CSS and renders <App /> into <div id="root"> from index.html.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// LanguageProvider (src/i18n) makes the English/Hindi choice available to every page.
import { LanguageProvider } from './i18n/LanguageContext.jsx'

// Start React. StrictMode only adds extra development warnings; harmless in production.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
