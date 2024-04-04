import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import MyComponent from './comp.html'

import './assets/styles.css'

const root = document.getElementById('root') as HTMLElement
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
