'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { generateLoveMessage, type GenerateLoveMessageInput } from '@/ai/flows/generate-love-message';
import { Loader2, Send, Wand2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const FormSchema = z.object({
  memory: z.string().min(5, 'Please share a bit more about the memory (at least 5 characters).').max(200, 'Memory is too long (max 200 characters).'),
});

type FormData = z.infer<typeof FormSchema>;

export default function MessageGeneratorForm() {
  const [generatedMessage, setGeneratedMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      memory: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setGeneratedMessage(null);
    try {
      const input: GenerateLoveMessageInput = { memory: data.memory };
      const result = await generateLoveMessage(input);
      setGeneratedMessage(result.message);
      toast({
        title: "Message Generated!",
        description: "Your personalized love message is ready.",
        variant: "default",
      });
    } catch (error) {
      console.error('Error generating message:', error);
      setGeneratedMessage('Sorry, I had a little trouble generating a message. Please try again.');
      toast({
        title: "Error",
        description: "Could not generate message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="memory"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold text-foreground/80">Share a Memory or Date</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g., Our first picnic by the lake"
                    {...field}
                    className="text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} className="w-full text-base py-3">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-5 w-5" />
                Generate Message
              </>
            )}
          </Button>
        </form>
      </Form>

      {generatedMessage && (
        <Card className="mt-8 bg-accent/20 border-accent shadow-md rounded-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-lora font-semibold mb-3 text-accent-foreground">Your Personalized Message:</h3>
            <Textarea
              value={generatedMessage}
              readOnly
              rows={5}
              className="text-base bg-background"
            />
             <Button variant="outline" className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => navigator.clipboard.writeText(generatedMessage).then(() => toast({title: "Copied!", description: "Message copied to clipboard."}))}>
              <Send className="mr-2 h-4 w-4" /> Copy Message
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
