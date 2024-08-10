import { createContext, useState } from 'react'
import runChat from '../config/juddy'

export const Context = createContext()

const ContextProvider = (props) => {
  const [input, setInput] = useState('')
  const [recentPrompt, setRecentPrompt] = useState('')
  const [previousPrompts, setPreviousPrompts] = useState([])
  const [showResult, setShowResult] = useState(false)

  const onSent = async (prompt) => {
    await runChat(prompt)
  }

  const contextValue = {}
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  )
}

export default ContextProvider
