import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from './components/ui/sonner.jsx'
import Store from './Context/Store.jsx'

// Import your Publishable Key


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Store>
    <BrowserRouter>
    <Toaster position="top-right"/>
      <App />
    </BrowserRouter>
    </Store>
  </React.StrictMode>,
)