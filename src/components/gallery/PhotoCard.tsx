import Image from 'next/image';
import type { Photo } from '@/lib/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CalendarDays } from 'lucide-react';

interface PhotoCardProps {
  photo: Photo;
}

export default function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 group flex flex-col">
      <CardContent className="p-0 relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          data-ai-hint={photo.dataAiHint || "couple image"}
          priority={photo.id === '1'} // Prioritize first image for LCP
          unoptimized
        />
      </CardContent>
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-sm text-foreground/90 leading-relaxed line-clamp-3 flex-grow">{photo.caption}</p>
      </div>
      <CardFooter className="p-4 pt-0 text-xs text-muted-foreground flex items-center mt-auto">
        <CalendarDays className="w-3.5 h-3.5 mr-1.5" />
        {format(photo.date, 'dd \'de\' MMMM \'de\' yyyy', { locale: ptBR })}
      </CardFooter>
    </Card>
  );
}
