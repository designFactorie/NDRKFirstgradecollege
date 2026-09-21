import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { getLegacyRedirect } from './legacyUrl'

const redirect = getLegacyRedirect(window.location)
if (redirect) {
  window.history.replaceState({ ...window.history.state, usr: { section: redirect.section } }, '', redirect.path)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
