import type { Photo } from '@/lib/types';
import PhotoCard from './PhotoCard';

interface PhotoGridProps {
  photos: Photo[];
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  if (!photos || photos.length === 0) {
    return <p className="text-center text-muted-foreground">Ainda não há fotos. Vamos criar algumas lembranças!</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
