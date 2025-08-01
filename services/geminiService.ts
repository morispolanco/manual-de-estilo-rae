
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
    console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const getCorrectionFeedback = async (consigna: string, userInput: string): Promise<string> => {
    const prompt = `
        Eres un experto en el 'Libro de estilo de la lengua española según la norma panhispánica' de la RAE. Tu tarea es analizar y corregir el siguiente texto escrito por un usuario, proporcionando una retroalimentación detallada, constructiva y educativa.

        **Consigna Original:**
        ${consigna}

        **Texto del Usuario:**
        "${userInput}"

        **Instrucciones para tu respuesta:**
        1.  **Identifica los errores:** Busca errores de gramática, ortografía (acentuación, uso de letras), puntuación, uso de mayúsculas/minúsculas y estilo.
        2.  **Explica cada error:** Para cada error identificado, cita la parte incorrecta del texto. Luego, explica claramente por qué es un error, basándote en las normas de la RAE y el estilo panhispánico.
        3.  **Proporciona la corrección:** Muestra la forma correcta de escribir la frase o el fragmento.
        4.  **Ofrece una versión final:** Al final de tu análisis, presenta el texto completo del usuario, pero ya corregido.
        5.  **Tono:** Mantén un tono formal, alentador y pedagógico, como un tutor de español. No seas demasiado severo.
        6.  **Formato:** Estructura tu respuesta usando Markdown para mayor claridad. Usa encabezados, listas con viñetas y texto en negrita para resaltar los puntos clave.
        7. **Encabezado principal:** Usa '### Análisis y corrección' como el encabezado principal de tu respuesta.
        8. **Encabezado final:** Usa '### Texto corregido' para la versión final corregida.
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                temperature: 0.3,
            }
        });
        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return "Lo sentimos, ha ocurrido un error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.";
    }
};
