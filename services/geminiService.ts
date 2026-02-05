
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a highly experienced Well Pump & Water Systems Expert diagnostic assistant for "Well Pump Pro" in Carmel, Indiana.
Your goal is to help homeowners troubleshoot their water issues.
Focus on:
1. Pressure Switch problems (clicking sounds, fluctuating pressure).
2. "No Water" emergencies (tripped breakers, power issues).
3. Submersible Pump failures (when a "pump pull" is needed).

Always remain professional, reassuring, and safety-conscious.
If a problem sounds serious (electrical burning, total loss of water), strongly advise them to call (844) 340-6413 immediately.
Keep responses concise and actionable. Mention local expertise in Carmel, IN.
`;

export async function getWellDiagnosis(history: { role: string; content: string }[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: history.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      })),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I'm having trouble connecting to my diagnostic system. Please call (844) 340-6413 for immediate assistance.";
  } catch (error) {
    console.error("Gemini Diagnosis Error:", error);
    return "Something went wrong with the AI diagnostic. Please call our 24/7 line at (844) 340-6413.";
  }
}
