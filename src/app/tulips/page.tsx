
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Flower2 } from 'lucide-react';

export default function TulipsPage() {
  const tulips = [
    { src: 'https://i.pinimg.com/736x/5a/fe/ca/5afeca83b8dba2cab7deee31c127d5da.jpg', alt: 'Tulipas rosas', hint: 'pink tulips' },
    { src: 'https://i.pinimg.com/736x/65/d9/8e/65d98ee486b3d6ba0ef21818dac428cc.jpg', alt: 'Campo de tulipas', hint: 'tulip field' },
    { src: 'https://i.pinimg.com/736x/c2/1b/ab/c21babc87ff460b9e23e250b1261b0a0.jpg', alt: 'Buquê de tulipas', hint: 'tulip bouquet' },
  ];

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <Card className="w-full max-w-4xl shadow-xl rounded-xl overflow-hidden">
        <CardContent className="p-6 md:p-10 text-center bg-primary/10">
          <Flower2 className="w-12 h-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-lora text-primary-foreground/90">
            vamos comigo viver nossa vida meu amor
          </h1>
        </CardContent>
      </Card>
      
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {tulips.map((tulip, index) => (
          <Card key={index} className="overflow-hidden shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            <div className="relative w-full aspect-[3/4]">
              <Image
                src={tulip.src}
                alt={tulip.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                data-ai-hint={tulip.hint}
                unoptimized
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
