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
      <div className="left-section">
        <p className="logo">Juddy AI</p>
        <img
          src={assets.plant_icon}
          alt="Plant image"
          className="landing-image"
        />
      </div>
      <div className="right-section right-half">
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
  )
}

export default LandingPage
