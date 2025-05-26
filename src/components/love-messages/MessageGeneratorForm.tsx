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
  memory: z.string().min(5, 'Por favor, compartilhe um pouco mais sobre a lembrança (pelo menos 5 caracteres).').max(200, 'A lembrança é muito longa (máximo de 200 caracteres).'),
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
        title: "Mensagem Gerada!",
        description: "Sua mensagem de amor personalizada está pronta.",
        variant: "default",
      });
    } catch (error) {
      console.error('Error generating message:', error);
      setGeneratedMessage('Desculpe, tive um pequeno problema ao gerar uma mensagem. Por favor, tente novamente.');
      toast({
        title: "Erro",
        description: "Não foi possível gerar a mensagem. Por favor, tente novamente.",
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
                <FormLabel className="text-lg font-semibold text-foreground/80">Compartilhe uma Lembrança ou Data</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex: Nosso primeiro piquenique à beira do lago"
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
                Gerando...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-5 w-5" />
                Gerar Mensagem
              </>
            )}
          </Button>
        </form>
      </Form>

      {generatedMessage && (
        <Card className="mt-8 bg-accent/20 border-accent shadow-md rounded-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-lora font-semibold mb-3 text-accent-foreground">Sua Mensagem Personalizada:</h3>
            <Textarea
              value={generatedMessage}
              readOnly
              rows={5}
              className="text-base bg-background"
            />
             <Button variant="outline" className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => navigator.clipboard.writeText(generatedMessage).then(() => toast({title: "Copiado!", description: "Mensagem copiada para a área de transferência."}))}>
              <Send className="mr-2 h-4 w-4" /> Copiar Mensagem
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
