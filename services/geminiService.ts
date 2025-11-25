import { GoogleGenAI, HarmCategory, HarmBlockThreshold } from "@google/genai";

// Initialize Gemini Client
// Note: In a real deployment, process.env.API_KEY would be populated.
// We handle the missing key gracefully in the UI.
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const generateResponse = async (
  prompt: string,
  systemInstruction: string = "You are PAI (Portfolio AI), a helpful, witty, and highly technical AI assistant for a Senior AI Engineer's portfolio website. Keep responses concise."
): Promise<string> => {
  if (!apiKey) {
    return "I'm currently running in demo mode without an API Key. Connect a key to enable my full brainpower!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        safetySettings: [
          {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
          },
        ],
      },
    });
    
    return response.text || "System malfunction. No response data.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a neural pathway blockage (API Error). Please try again.";
  }
};

export const explainCode = async (codeSnippet: string): Promise<string> => {
    return generateResponse(
        `Analyze this code snippet technically but briefly: \n\n${codeSnippet}`,
        "You are a Senior Code Reviewer AI. Explain complexity, purpose, and potential optimizations."
    );
};

export const generateProjectSummary = async (projectDescription: string, level: 'child' | 'engineer' | 'ceo'): Promise<string> => {
    let instruction = "";
    switch(level) {
        case 'child': instruction = "Explain this like I'm 5 years old."; break;
        case 'engineer': instruction = "Explain this with high technical depth, focusing on architecture and models."; break;
        case 'ceo': instruction = "Explain the business value and ROI."; break;
    }
    
    return generateResponse(
        `Summarize this project: ${projectDescription}`,
        instruction
    );
};
