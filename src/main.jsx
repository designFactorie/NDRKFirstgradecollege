import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { getLegacyRedirect } from './legacyUrl'

const redirect = getLegacyRedirect(window.location)
if (redirect) {
  window.history.replaceState({ ...window.history.state, usr: { section: redirect.section } }, '', redirect.path)
}

const root = document.getElementById('root')
const app = <StrictMode><BrowserRouter><App /></BrowserRouter></StrictMode>
// Legacy bookmark redirects can select a different page from the static response.
if (root.hasChildNodes() && !redirect) hydrateRoot(root, app)
else createRoot(root).render(app)
