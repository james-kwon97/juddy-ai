// import {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } from '@google/generative-ai'

// const MODEL_NAME = 'gemini-1.5-flash'
// const API_KEY = 'AIzaSyCmvJFOodepc1ptLR9nxrDyrORjovn7xvQ'

// async function runChat(prompt) {
//   const genAI = new GoogleGenerativeAI(API_KEY)
//   const model = genAI.getGenerativeModel({ model: MODEL_NAME })

//   const generationConfig = {
//     temperature: 1,
//     topK: 64,
//     topP: 0.95,
//     maxOutputTokens: 8192,
//     responseMimeType: 'text/plain',
//   }

//   const safetySettings = [
//     {
//       category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//   ]

//   const chat = model.startChat({
//     generationConfig,
//     safetySettings,
//     history: [],
//   })

//   const result = await chat.sendMessage(prompt)
//   const response = result.response
//   console.log(response.text())
//   return response.text()
// }

// export default runChat

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai'

// Use the environment variable for the API key
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

async function runChat(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [],
  })

  const result = await chatSession.sendMessage(prompt)
  console.log(result.response.text())
  return result.response.text()
}

// Example usage:
// runChat("INSERT_INPUT_HERE");

export default runChat
