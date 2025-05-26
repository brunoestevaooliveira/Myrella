import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ListPlus, PlusCircle } from 'lucide-react';

export default function AdminReasonsPage() {
  return (
    <div className="space-y-6">
      <CardHeader className="px-0">
        <div className="flex items-center gap-3">
          <ListPlus className="w-8 h-8 text-primary" />
          <CardTitle className="text-2xl font-lora">Gerenciar Razões Que Te Amo</CardTitle>
        </div>
        <CardDescription>
          Adicione novas razões, edite as existentes ou altere a ordem delas. (Funcionalidade em breve)
        </CardDescription>
      </CardHeader>
      
      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
        <PlusCircle className="mr-2 h-4 w-4" /> Adicionar Nova Razão
      </Button>

      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">
            A interface para gerenciar a lista de razões será exibida aqui.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
