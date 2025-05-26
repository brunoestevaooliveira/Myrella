// 'use server';

/**
 * @fileOverview Gera mensagens de amor personalizadas para a namorada do usuário.
 *
 * - generateLoveMessage - Uma função que gera uma mensagem de amor personalizada.
 * - GenerateLoveMessageInput - O tipo de entrada para a função generateLoveMessage.
 * - GenerateLoveMessageOutput - O tipo de retorno para a função generateLoveMessage.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLoveMessageInputSchema = z.object({
  memory: z.string().describe('Uma lembrança ou data específica para incluir na mensagem de amor.'),
});
export type GenerateLoveMessageInput = z.infer<typeof GenerateLoveMessageInputSchema>;

const GenerateLoveMessageOutputSchema = z.object({
  message: z.string().describe('A mensagem de amor gerada.'),
});
export type GenerateLoveMessageOutput = z.infer<typeof GenerateLoveMessageOutputSchema>;

export async function generateLoveMessage(input: GenerateLoveMessageInput): Promise<GenerateLoveMessageOutput> {
  return generateLoveMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLoveMessagePrompt',
  input: {schema: GenerateLoveMessageInputSchema},
  output: {schema: GenerateLoveMessageOutputSchema},
  prompt: `Escreva uma mensagem de amor personalizada para minha namorada, incorporando a seguinte lembrança: {{{memory}}}. A mensagem deve ser carinhosa, romântica e sincera. Use um tom poético e apaixonado.`,
});

const generateLoveMessageFlow = ai.defineFlow(
  {
    name: 'generateLoveMessageFlow',
    inputSchema: GenerateLoveMessageInputSchema,
    outputSchema: GenerateLoveMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
