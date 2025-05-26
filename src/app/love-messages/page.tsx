import MessageGeneratorForm from '@/components/love-messages/MessageGeneratorForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function LoveMessagesPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-xl rounded-xl overflow-hidden">
        <CardHeader className="bg-primary/20 text-center">
          <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-3xl font-lora text-primary-foreground/90">Mensagens de Amor Personalizadas</CardTitle>
          <CardDescription className="text-muted-foreground">
            Vamos criar uma mensagem especial. Compartilhe uma lembrança ou data, e eu ajudarei você a escrever algo lindo para sua namorada.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8">
          <MessageGeneratorForm />
        </CardContent>
      </Card>
    </div>
  );
}
