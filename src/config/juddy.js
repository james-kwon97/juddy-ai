import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai'

const apiKey = import.meta.env.VITE_GEMINI_PUBLIC_KEY
const genAI = new GoogleGenerativeAI(apiKey)

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
})

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
}

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
]

async function runChat(prompt) {
  const normalizedPrompt = prompt.toLowerCase()

  const identityPhrases = [
    'what is your name',
    "what's your name",
    'tell me your name',
    'what do they call you',
    'who is this',
    'what are you called',
    'your name',
    "what's your identity",
  ]

  if (identityPhrases.some((phrase) => normalizedPrompt.includes(phrase))) {
    return 'My name is Juddy.'
  }

  const chatSession = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
  })

  const result = await chatSession.sendMessage(prompt)
  console.log(result.response.text())
  return result.response.text()
}

export default runChat
