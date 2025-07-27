import { env } from "@/env";
import { GoogleGenAI } from "@google/genai";

const gemini = new GoogleGenAI({ apiKey: env.GEMINI_API_KEY });

export default gemini