import PhotoGrid from '@/components/gallery/PhotoGrid';
import { INITIAL_PHOTOS } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Images } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UploadCloud } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-xl rounded-xl overflow-hidden">
        <CardHeader className="bg-primary/20 text-center">
          <Images className="w-12 h-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-3xl font-lora text-primary-foreground/90">Nossa Galeria de Fotos</CardTitle>
          <CardDescription className="text-muted-foreground">
            Uma coleção dos nossos momentos preciosos, aventuras e sorrisos capturados no tempo.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-center mb-8">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <UploadCloud className="mr-2 h-5 w-5" /> Carregar Nova Foto (Em Breve)
            </Button>
            <p className="text-xs text-muted-foreground mt-2">(A funcionalidade de upload de fotos estará disponível através do painel de administração)</p>
          </div>
          <PhotoGrid photos={INITIAL_PHOTOS} />
        </CardContent>
      </Card>
    </div>
  );
}
