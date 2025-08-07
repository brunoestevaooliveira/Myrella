
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { FileHeart } from 'lucide-react';

export default function PromisePage() {
  return (
    <div className="flex flex-col items-center text-center">
      <Card className="w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src="https://i.pinimg.com/1200x/63/ba/da/63bada9832f2de778271a2bba5eeef14.jpg"
            alt="Um casal se abraçando com carinho"
            layout="fill"
            objectFit="cover"
            unoptimized
            className="opacity-90"
            data-ai-hint="couple hugging"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-lora text-white/90 drop-shadow-lg flex items-center gap-4">
              <FileHeart className="w-12 h-12 text-pink-200 animate-pulse" />
              Uma Promessa
            </h1>
          </div>
        </div>
        <CardContent className="p-8 md:p-12">
          <p className="text-lg md:text-xl text-purple-800/90 dark:text-purple-200/90 leading-relaxed italic max-w-2xl mx-auto">
            nunca esperava que seria nos dois, mas agora vou cuidar de voce minha lontra para sempre, isso se voce aceitar, eu te amo
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
