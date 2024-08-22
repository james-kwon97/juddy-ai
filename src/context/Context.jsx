import { createContext, useState, useCallback } from 'react'
import runChat from '../config/juddy'

export const Context = createContext()

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState('')
  const [recentPrompt, setRecentPrompt] = useState('')
  const [previousPrompts, setPreviousPrompts] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [loading, setLoading] = useState(false)
  const [resultData, setResultData] = useState('')

  const delayPara = useCallback((index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord)
    }, 75 * index)
  }, [])

  const newChat = useCallback(() => {
    setLoading(false)
    setShowResult(false)
  }, [])

  const addPrompt = useCallback((prompt) => {
    setPreviousPrompts((prev) => [prompt, ...prev])
  }, [])

  const processResponse = useCallback((response) => {
    const boldRegex = /\*\*(.*?)\*\*/g
    const processedResponse = response
      .replace(boldRegex, '<b>$1</b>')
      .replace(/\*/g, '<br/>')
    return processedResponse.split(' ')
  }, [])

  const onSent = useCallback(
    async (prompt) => {
      setResultData('')
      setLoading(true)
      setShowResult(true)

      const chatPrompt = prompt || input
      setRecentPrompt(chatPrompt)
      addPrompt(chatPrompt)

      try {
        const response = await runChat(chatPrompt)
        const processedResponse = processResponse(response)

        processedResponse.forEach((word, index) => {
          delayPara(index, word + ' ')
        })
      } catch (error) {
        console.error('Error running chat:', error)
        setResultData('An error occurred while processing your request.')
      } finally {
        setLoading(false)
        setInput('')
      }
    },
    [input, addPrompt, delayPara, processResponse]
  )

  const contextValue = {
    previousPrompts,
    setPreviousPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
    addPrompt,
  }

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

export default ContextProvider
