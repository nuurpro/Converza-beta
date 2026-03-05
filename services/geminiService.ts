
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { VEO_MODEL, IMAGE_MODEL } from '../constants';
import { CampaignContext } from '../types';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const withRetry = async <T,>(fn: () => Promise<T>, maxRetries = 3): Promise<T> => {
    let lastError: any;
    for (let i = 0; i < maxRetries; i++) {
        try {
            return await fn();
        } catch (e: any) {
            lastError = e;
            if ((e.status === 503 || e.status === 429) && i < maxRetries - 1) {
                await sleep(Math.pow(2, i) * 1000);
                continue;
            }
            throw e;
        }
    }
    throw lastError;
};

export const generateConcepts = async (
  imageBase64: string, 
  mimeType: string, 
  context: CampaignContext
): Promise<string[]> => {
  if (!process.env.API_KEY) throw new Error("API Key required");
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  // Parallel requests to generate 4 variations
  const prompts = [
    `Generate a photorealistic fashion photo of a ${context.demographic} model wearing the product shown in the input image. Setting: ${context.vibe}. High fashion editorial style.`,
    `A full body shot of a ${context.demographic} model wearing the product. Background: ${context.vibe} aesthetic. Cinematic lighting.`,
    `Fashion photography of the provided product worn by a ${context.demographic} model. ${context.vibe} atmosphere. Professional commercial look.`,
    `Lifestyle shot: A ${context.demographic} model wearing the item. Vibe: ${context.vibe}. Realistic and high quality.`
  ];

  const promises = prompts.map(prompt => 
    withRetry(() => ai.models.generateContent({
      model: IMAGE_MODEL,
      contents: {
        parts: [
          { inlineData: { data: imageBase64, mimeType } },
          { text: prompt }
        ]
      }
    }))
  );

  const responses = await Promise.all(promises) as GenerateContentResponse[];
  
  const images: string[] = [];
  responses.forEach(res => {
    // gemini-2.5-flash-image returns image in parts
    const part = res.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
    if (part && part.inlineData && part.inlineData.data) {
      images.push(`data:${part.inlineData.mimeType};base64,${part.inlineData.data}`);
    }
  });

  if (images.length === 0) {
    throw new Error("Failed to generate concepts. Please try again.");
  }

  return images;
};

export const animateConcept = async (imageUrl: string): Promise<string> => {
  if (!process.env.API_KEY) throw new Error("API Key required");
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Extract base64 and mimeType from data URL
  const matches = imageUrl.match(/^data:(.+);base64,(.+)$/);
  if (!matches) throw new Error("Invalid image format");
  const mimeType = matches[1];
  const imageBytes = matches[2];

  let operation: any = await withRetry(() => ai.models.generateVideos({
    model: VEO_MODEL,
    image: { imageBytes, mimeType },
    config: {
      numberOfVideos: 1,
      resolution: '720p',
      aspectRatio: '9:16' // Story format for ads
    }
  }));

  while (!operation.done) {
    await sleep(5000);
    operation = await withRetry(() => ai.operations.getVideosOperation({ operation }));
  }

  if (operation.error) {
    throw new Error(operation.error.message || "Video generation failed");
  }

  const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
  if (!downloadLink) throw new Error("No video URI returned");

  const res = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
  const blob = await res.blob();
  return URL.createObjectURL(blob);
};