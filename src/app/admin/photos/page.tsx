import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ImagePlus, PlusCircle } from 'lucide-react';

export default function AdminPhotosPage() {
  return (
    <div className="space-y-6">
      <CardHeader className="px-0">
        <div className="flex items-center gap-3">
          <ImagePlus className="w-8 h-8 text-primary" />
          <CardTitle className="text-2xl font-lora">Gerenciar Galeria de Fotos</CardTitle>
        </div>
        <CardDescription>
          Carregue novas fotos, edite legendas ou exclua as existentes da galeria. (Funcionalidade em breve)
        </CardDescription>
      </CardHeader>
      
      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
        <PlusCircle className="mr-2 h-4 w-4" /> Carregar Nova Foto
      </Button>

      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">
            As ferramentas de gerenciamento da galeria de fotos aparecerão aqui. Você poderá gerenciar todas as imagens compartilhadas.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
