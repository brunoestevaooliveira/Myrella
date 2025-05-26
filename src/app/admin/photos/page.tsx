import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ImagePlus, PlusCircle } from 'lucide-react';

export default function AdminPhotosPage() {
  return (
    <div className="space-y-6">
      <CardHeader className="px-0">
        <div className="flex items-center gap-3">
          <ImagePlus className="w-8 h-8 text-primary" />
          <CardTitle className="text-2xl font-lora">Manage Photo Gallery</CardTitle>
        </div>
        <CardDescription>
          Upload new photos, edit captions, or delete existing ones from the gallery. (Functionality coming soon)
        </CardDescription>
      </CardHeader>
      
      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
        <PlusCircle className="mr-2 h-4 w-4" /> Upload New Photo
      </Button>

      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">
            Photo gallery management tools will appear here. You&apos;ll be able to manage all shared images.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
