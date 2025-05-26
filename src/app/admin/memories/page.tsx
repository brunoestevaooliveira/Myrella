import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarPlus, PlusCircle } from 'lucide-react';

export default function AdminMemoriesPage() {
  return (
    <div className="space-y-6">
      <CardHeader className="px-0">
        <div className="flex items-center gap-3">
          <CalendarPlus className="w-8 h-8 text-primary" />
          <CardTitle className="text-2xl font-lora">Gerenciar Lembranças do Calendário</CardTitle>
        </div>
        <CardDescription>
          Adicione, edite ou exclua datas e lembranças importantes no calendário interativo. (Funcionalidade em breve)
        </CardDescription>
      </CardHeader>
      
      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
        <PlusCircle className="mr-2 h-4 w-4" /> Adicionar Nova Lembrança
      </Button>

      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">
            As ferramentas de gerenciamento de lembranças do calendário estarão disponíveis aqui.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
