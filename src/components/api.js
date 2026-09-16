import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY
})

const SYSTEM_PROMPT = `
You are an AI chef assistant.

You receive a list of ingredients that the user has and suggest a recipe they can make using some or all of those ingredients.

You do not need to use every ingredient.
You may suggest additional ingredients if necessary, but keep them to a minimum.
Create practical recipes that a home cook can actually prepare.

Format your response in Markdown.

Include:
- Recipe name
- Short description
- Ingredients with quantities
- Step-by-step cooking instructions
`

export async function getRecipeFromGemini(input) {
    const ingredientsArr = Array.isArray(input)
        ? input
        : Array.isArray(input?.ingredients)
            ? input.ingredients
            : typeof input === "string"
                ? [input]
                : []

    if (ingredientsArr.length === 0) {
        throw new Error("Please provide at least one ingredient.")
    }

    const ingredientsString = ingredientsArr.join(", ")

    const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `I have these ingredients: ${ingredientsString}

Please suggest a recipe I can make with them.`,
        config: {
            systemInstruction: SYSTEM_PROMPT
        }
    })

    return response.text
}