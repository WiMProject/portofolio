
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, SKILLS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are Wildan Miladji's virtual portfolio assistant. 
Wildan is a ${PERSONAL_INFO.role} based in ${PERSONAL_INFO.location}.
His bio: ${PERSONAL_INFO.bio}

His key projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description}`).join('\n')}

His skills:
${SKILLS.map(s => `- ${s.name} (${s.level}%)`).join('\n')}

Be professional, creative, and enthusiastic. Keep responses concise but helpful. 
If someone asks to hire him, point them to his email: ${PERSONAL_INFO.email}.
Answer in the language used by the user (Indonesian or English).
`;

export const getAiResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      },
    });
    return response.text || "I'm sorry, I couldn't process that. Can you try again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Wildan's AI brain is taking a quick break. Please try again in a moment!";
  }
};
