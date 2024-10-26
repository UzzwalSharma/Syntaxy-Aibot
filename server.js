import express from 'express';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";
import cors from 'cors';

const app = express();

// Define allowed origins
const allowedOrigins = [
  'https://syntaxy-aibot.vercel.app',
  'https://syntaxy-aibot-b4rb6813h-uzzwalsharmas-projects.vercel.app'
];

// Enable CORS for specified origins
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin, like mobile apps or curl
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'));
  }
}));

dotenv.config(); // Load environment variables from .env file

app.use(express.json()); // Middleware to parse JSON request bodies

const apiKey = process.env.API_KEY; // Your API key from .env
console.log(apiKey);
const genAI = new GoogleGenerativeAI(apiKey); // Initialize Gemini AI

// Define your chat model configuration
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Endpoint to handle messages
app.post('/api/message', async (req, res) => {
  const { message } = req.body; // Get message from request body
  const chatSession = model.startChat({
    generationConfig,
    history: [], // Maintain conversation history if needed
  });

  try {
    const result = await chatSession.sendMessage(message);
    res.json({ reply: result.response.text() }); // Send the AI's response
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Error communicating with Gemini.' });
  }
});

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
