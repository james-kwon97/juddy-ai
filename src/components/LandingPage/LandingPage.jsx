import React, { useEffect } from 'react'
import { useAuth } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import { SignedOut, SignInButton } from '@clerk/clerk-react'
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
        <div className="sign-in-button">
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
