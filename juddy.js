// Load environment variables from .env file
import dotenv from 'dotenv'
dotenv.config()

// Import the Google Generative AI SDK
import { GoogleGenerativeAI } from '@google/generative-ai'

// Get the API key from environment variables
const apiKey = process.env.GEMINI_API_KEY

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(apiKey)

// Define the model and generation parameters
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash', // The model name
})

const generationConfig = {
  temperature: 0.7, // Adjusts the randomness of the generated text
  maxOutputTokens: 100, // Maximum number of tokens in the generated text
}

// Function to generate text from a prompt
async function generateText(prompt) {
  try {
    const result = await model.generateText(prompt, generationConfig)
    console.log('Generated text:', result.text())
  } catch (error) {
    console.error('Error generating text:', error)
  }
}

// Example usage
generateText('Tell me about the solar system.')
