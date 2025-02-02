import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export const runtime = 'edge';

const groq = createOpenAI({
    baseURL: 'https://api.groq.com/openai/v1',
    apiKey: process.env.GROQ_API_KEY,
  });

export async function POST(req: Request) {
    const prompt = "Create a list of three open-ended and engaging questions keep them at most of 20 words strictly formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment and strictly just give the responsea no formality questions, just the answers strictly in a single string, also don't include 'Here are three open-ended and engaging questions for an anonymous social messaging platform:' strictly. Also, ensure that you are not repeating the same questions in the output strictly.";

  const result = await streamText({
    model: groq('llama-3.3-70b-versatile'),
    prompt,
  });

  return result.toAIStreamResponse();
}