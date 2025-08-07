
import ReasonsList from '@/components/reasons/ReasonsList';
import { INITIAL_REASONS } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HeartHandshake } from 'lucide-react';
import Image from 'next/image';

export default function ReasonsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <Card className="shadow-xl rounded-xl overflow-hidden">
        <CardHeader className="bg-primary/20 text-center">
          <HeartHandshake className="w-12 h-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-3xl font-lora text-primary-foreground/90">
            Razões Pelas Quais Te Adoro
            <span className='block text-lg font-normal text-muted-foreground/80 mt-1'>
              愛する理由 (Aisuru Riyū - Razões para Amar)
            </span>
          </CardTitle>
          <CardDescription className="text-muted-foreground mt-2">
            Apenas algumas das inúmeras razões pelas quais você significa o mundo para mim. Cada uma é um testemunho de quão especial você é.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex justify-center mb-8">
            <Image
              src="https://i.pinimg.com/originals/dd/f8/f5/ddf8f563d9b56a862891941a363211b6.gif"
              alt="Gatinhos de anime fofos"
              width={200}
              height={200}
              unoptimized
              className="rounded-lg"
              data-ai-hint="cute anime cat"
            />
          </div>
          <ReasonsList reasons={INITIAL_REASONS} />
        </CardContent>
      </Card>
    </div>
  );
}
