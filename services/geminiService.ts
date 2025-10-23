import { GoogleGenAI, Type } from "@google/genai";
import type { Restaurant } from '../types';

// Fix: Updated API key handling to follow guidelines by using process.env.API_KEY directly,
// removing the unnecessary constant and check.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const schema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      name: {
        type: Type.STRING,
        description: 'The name of the restaurant, preferably with both English and Korean names. (레스토랑의 이름, 영문과 한글 병기)',
      },
      cuisine: {
        type: Type.STRING,
        description: 'The type of cuisine served. (요리 종류, 예: 광둥 요리, 딤섬, 완탕면)',
      },
      description: {
        type: Type.STRING,
        description: 'A brief, 2-3 sentence description of the restaurant. (레스토랑에 대한 2-3문장의 짧은 설명)',
      },
      signatureDish: {
        type: Type.STRING,
        description: 'The most famous or recommended signature dish. (가장 유명하거나 추천하는 대표 메뉴)',
      },
    },
    required: ['name', 'cuisine', 'description', 'signatureDish'],
  },
};

export const fetchRestaurants = async (location: string): Promise<Restaurant[]> => {
    try {
        const prompt = `홍콩의 '${location}' 주변에 있는 추천 맛집 5곳을 알려줘. 각 식당의 이름(영문과 한글 병기), 대표적인 요리 종류, 2-3문장의 짧은 설명, 그리고 가장 유명한 대표 메뉴를 포함해서 알려줘. 반드시 지정된 JSON 스키마 형식으로 응답해줘.`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: schema,
                temperature: 0.7,
            },
        });
        
        const jsonText = response.text.trim();
        const data = JSON.parse(jsonText);

        if (!Array.isArray(data)) {
            console.error("API response is not an array:", data);
            throw new Error("Unexpected response format from the AI. Please try again.");
        }

        return data as Restaurant[];
    } catch (error) {
        console.error("Error fetching recommendations:", error);
        throw new Error("Failed to fetch recommendations from Gemini API. Please check your connection or API key and try again.");
    }
};