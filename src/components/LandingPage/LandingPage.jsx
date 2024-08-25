import { useEffect } from 'react'
import { useAuth } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import { SignedOut, SignInButton, SignUpButton } from '@clerk/clerk-react'
import './LandingPage.css'
import { assets } from '../../assets/assets'

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
        <div className="left-section">
          <div className="logo-container">
            <p className="logo">Juddy AI</p>
          </div>
          <div className="image-container">
            <img
              src={assets.main_gif}
              alt="Moving bubbles gif with a black background"
              className="landing-image"
            />
          </div>
        </div>
        <div className="right-section">
          <div className="content-container">
            <div className="content">
              <p className="greet">
                <span>Welcome to Juddy AI</span>
              </p>
              <p className="greet-subtext">Please log in to continue</p>
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
        </div>
      </div>
    </div>
  )
}

export default LandingPage
