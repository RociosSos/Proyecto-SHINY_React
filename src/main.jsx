import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App from './App'
import "./styles/main.scss"

initMercadoPago (import.meta.env.VITE_PUBLIC_KEY_MP)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
