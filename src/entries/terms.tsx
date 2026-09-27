import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import TermsPage from '../pages/TermsPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TermsPage />
  </StrictMode>,
)
