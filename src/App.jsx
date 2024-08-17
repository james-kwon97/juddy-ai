import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react'

const App = () => {
  return (
    <>
      <Sidebar />
      <Main />

      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </>
  )
}

export default App
