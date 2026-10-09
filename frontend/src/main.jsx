// ENTRY POINT - the first file the browser runs.
// It loads global CSS and renders <App /> into <div id="root"> from index.html.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Start React. StrictMode only adds extra development warnings; harmless in production.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
