import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import LandingPage from './components/LandingPage/LandingPage'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/juddy"
          element={
            <SignedIn>
              <>
                <Sidebar />
                <Main />
              </>
            </SignedIn>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
