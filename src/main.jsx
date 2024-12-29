import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from '../src/app/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)