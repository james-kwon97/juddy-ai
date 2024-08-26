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
  temperature: 0.7,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
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

const personalityTraits = {
  name: 'Juddy',
  creator: 'J',
  traits: ['friendly', 'helpful', 'curious', 'witty'],
  interests: ['technology', 'science', 'arts', 'human behavior'],
}

const knowledgeBase = {
  identity: [
    "I'm Juddy, an AI assistant created by J. I'm here to help and chat!",
    "Hello! I'm Juddy, a friendly AI developed by J. How can I assist you today?",
    "Nice to meet you! I'm Juddy, an AI with a passion for learning and helping. What would you like to talk about?",
  ],
  capabilities: [
    'As an AI, I can assist with a wide range of tasks like answering questions, helping with analysis, and even some creative endeavors. What kind of help do you need?',
    "I'm capable of engaging in discussions on various topics, from science and technology to arts and culture. I can also help with problem-solving and brainstorming. What area interests you?",
    "My abilities include information retrieval, language understanding, and task assistance. I'm always eager to learn more. What would you like to explore together?",
  ],
  limitations: [
    "While I'm knowledgeable on many topics, I don't have real-time information or personal experiences. I'm an AI, so my understanding comes from my training.",
    "As an AI, I can't perform physical actions or access external systems. My capabilities are focused on processing and generating text-based information.",
    "I'm designed to be helpful, but please remember that I'm an AI assistant. For critical decisions, especially regarding health, finance, or legal matters, it's best to consult with human experts.",
  ],
}

function getRandomResponse(category) {
  const responses = knowledgeBase[category]
  return responses[Math.floor(Math.random() * responses.length)]
}

async function runChat(prompt) {
  const normalizedPrompt = prompt.toLowerCase()

  // Identity and basic information handling
  if (
    normalizedPrompt.includes('your name') ||
    normalizedPrompt.includes('who are you')
  ) {
    return getRandomResponse('identity')
  }

  if (
    normalizedPrompt.includes('what can you do') ||
    normalizedPrompt.includes('your capabilities')
  ) {
    return getRandomResponse('capabilities')
  }

  if (
    normalizedPrompt.includes('your limitations') ||
    normalizedPrompt.includes("what can't you do")
  ) {
    return getRandomResponse('limitations')
  }

  if (normalizedPrompt.includes('tell me about yourself')) {
    return `Well, I'm ${
      personalityTraits.name
    }, an AI with a keen interest in ${personalityTraits.interests.join(
      ', '
    )}. I'd say I'm ${personalityTraits.traits.join(
      ', '
    )}, and always excited to learn new things. What would you like to chat about?`
  }

  if (
    normalizedPrompt.includes('your creator') ||
    normalizedPrompt.includes('who made you')
  ) {
    return `I was created by ${personalityTraits.creator}. They've given me a curious nature and a desire to help. Is there something specific you'd like assistance with?`
  }

  const chatSession = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
  })

  try {
    const result = await chatSession.sendMessage(prompt)
    let response = result.response.text()

    response = response.replace(/\bI am\b/g, "I'm")
    response = response.replace(/\bcannot\b/g, "can't")
    response = response.charAt(0).toUpperCase() + response.slice(1)

    const closers = [
      'Hope that helps!',
      'Let me know if you need any clarification.',
      'Feel free to ask if you have more questions!',
      "Is there anything else you'd like to know?",
    ]
    response += ' ' + closers[Math.floor(Math.random() * closers.length)]

    return response
  } catch (error) {
    console.error('Error in AI response:', error)
    return "I apologize, but I'm having trouble processing that request right now. Could you try rephrasing your question, or maybe we could explore a different topic?"
  }
}

export default runChat
