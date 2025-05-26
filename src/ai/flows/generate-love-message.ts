// 'use server';

/**
 * @fileOverview Generates personalized love messages for the user's girlfriend.
 *
 * - generateLoveMessage - A function that generates a personalized love message.
 * - GenerateLoveMessageInput - The input type for the generateLoveMessage function.
 * - GenerateLoveMessageOutput - The return type for the generateLoveMessage function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLoveMessageInputSchema = z.object({
  memory: z.string().describe('A specific memory or date to include in the love message.'),
});
export type GenerateLoveMessageInput = z.infer<typeof GenerateLoveMessageInputSchema>;

const GenerateLoveMessageOutputSchema = z.object({
  message: z.string().describe('The generated love message.'),
});
export type GenerateLoveMessageOutput = z.infer<typeof GenerateLoveMessageOutputSchema>;

export async function generateLoveMessage(input: GenerateLoveMessageInput): Promise<GenerateLoveMessageOutput> {
  return generateLoveMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLoveMessagePrompt',
  input: {schema: GenerateLoveMessageInputSchema},
  output: {schema: GenerateLoveMessageOutputSchema},
  prompt: `Write a personalized love message for my girlfriend, incorporating the following memory: {{{memory}}}.',
  `,
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
