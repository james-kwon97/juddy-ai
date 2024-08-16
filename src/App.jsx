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
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <Sidebar />
      <Main />
    </>
  )
}

export default App
