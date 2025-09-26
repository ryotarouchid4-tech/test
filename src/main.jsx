import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

const root = createRoot(document.getElementById('root'))
root.render(<App />)

// Service Worker の登録（公開環境で動作）
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => console.log('SW registered'))
      .catch((err) => console.log('SW registration failed:', err))
  })
}
