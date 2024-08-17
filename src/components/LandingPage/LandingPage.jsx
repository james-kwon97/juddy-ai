import React from 'react'
import { SignedOut, SignInButton } from '@clerk/clerk-react'

const LandingPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Juddy AI</h1>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: '48px',
    color: '#000000',
    marginBottom: '20px',
  },
}

export default LandingPage
