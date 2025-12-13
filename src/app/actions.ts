"use server";

import { giftRecommendation, GiftRecommendationOutput, GiftRecommendationInput } from "@/ai/flows/gift-recommendation";
import { z } from "zod";

const schema = z.object({
  preferences: z.string().min(10, { message: "Por favor, descreva um pouco mais suas preferências." }),
});

type State = {
  success: boolean;
  message?: string;
  recommendations?: GiftRecommendationOutput['recommendations'];
}

export async function getGiftSuggestions(
  prevState: State | undefined,
  formData: FormData
): Promise<State> {
  const validatedFields = schema.safeParse({
    preferences: formData.get('preferences'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.flatten().fieldErrors.preferences?.[0] || 'Ocorreu um erro de validação.',
    };
  }

  try {
    const input: GiftRecommendationInput = {
      preferences: validatedFields.data.preferences,
    };
    const result = await giftRecommendation(input);

    if (!result || !result.recommendations || result.recommendations.length === 0) {
      return { success: false, message: "Não foi possível gerar sugestões. Tente descrever suas preferências de outra forma." };
    }

    return { success: true, recommendations: result.recommendations };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Ocorreu um erro ao buscar sugestões. Tente novamente mais tarde." };
  }
}
