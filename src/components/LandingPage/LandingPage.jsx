import React, { useEffect } from 'react'
import { useAuth } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import { SignedOut, SignInButton, SignUpButton } from '@clerk/clerk-react' // Import SignUpButton
import './LandingPage.css'

const LandingPage = () => {
  const { isSignedIn } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isSignedIn) {
      navigate('/juddy')
    }
  }, [isSignedIn, navigate])

  return (
    <div className="landing-page">
      <div className="landing-container">
        <div className="greet">
          <p>
            <span>Welcome to Juddy AI</span>
          </p>
          <p className="greet-subtext">Your AI assistant is ready to help</p>
        </div>
        <div className="auth-buttons">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="log-in">Log In</button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="sign-up">Sign Up</button>
            </SignUpButton>
          </SignedOut>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
