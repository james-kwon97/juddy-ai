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
    <div className="landing-container">
      <h1 className="landing-title">Welcome to Juddy AI</h1>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
    </div>
  )
}

export default LandingPage
