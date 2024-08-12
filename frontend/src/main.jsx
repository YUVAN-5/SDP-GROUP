import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/cssfiles/style.css'
import App from './App'
import { ThemeProvider } from "@/components/Theme-Provider"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
)
