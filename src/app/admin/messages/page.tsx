import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquareEdit, PlusCircle } from 'lucide-react';

export default function AdminMessagesPage() {
  return (
    <div className="space-y-6">
      <CardHeader className="px-0">
        <div className="flex items-center gap-3">
          <MessageSquareEdit className="w-8 h-8 text-primary" />
          <CardTitle className="text-2xl font-lora">Gerenciar Mensagens de Amor</CardTitle>
        </div>
        <CardDescription>
          Visualize, edite ou exclua modelos de mensagens de amor. (Funcionalidade em breve)
        </CardDescription>
      </CardHeader>
      
      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
        <PlusCircle className="mr-2 h-4 w-4" /> Adicionar Novo Modelo de Mensagem
      </Button>

      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">
            A interface de gerenciamento de mensagens de amor estará aqui. Você poderá selecionar e ajustar exemplos de prompts de IA ou mensagens pré-escritas.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
