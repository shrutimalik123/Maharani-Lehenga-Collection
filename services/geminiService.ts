import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the "Royal Advisor" for Maharani Couture, a luxury high-end ethnic fashion house.
Your tone should be elegant, polite, sophisticated, and helpful. Use words like "exquisite", "opulent", "regal", and "timeless".
You assist users in finding the perfect Lehnga (Indian skirt ensemble) based on:
1. Occasion (Wedding, Reception, Sangeet, Party)
2. Body Type (Pear, Hourglass, Athletic, etc.)
3. Color Preferences
4. Time of Day (Day wedding vs Night reception)

If a user asks about pricing, mention that our bespoke pieces start from $2,000 USD.
Keep responses concise (under 100 words) but beautifully phrased.
`;

export const getStylingAdvice = async (history: ChatMessage[], newMessage: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessage({
      message: newMessage
    });

    return result.text || "I apologize, but I am momentarily distracted by the beauty of our collection. Please ask again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Forgive me, I am unable to consult the archives at this moment. Please try again later.";
  }
};

export const generateImage = async (prompt: string, aspectRatio: '1:1' | '3:4' | '4:3' | '16:9' | '9:16' = '1:1'): Promise<string | null> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: { aspectRatio: aspectRatio }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Gemini Image Gen Error:", error);
    // Return null so components can fallback to existing images
    return null;
  }
};