import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/Context.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

// Importing Clerk publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <ContextProvider>
//     <App />
//   </ContextProvider>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ClerkProvider>
  </React.StrictMode>
)
