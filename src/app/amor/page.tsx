import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function AmorPage() {
  return (
    <div className="flex flex-col items-center text-center">
      <Card className="w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-blue-900/30">
        <div className="relative w-full h-64 md:h-80">
          <Image
            src="https://i.pinimg.com/736x/9b/f7/17/9bf7172f14b31ab5fe2dd5266daa2222.jpg"
            alt="Header romântico com céu estrelado"
            layout="fill"
            objectFit="cover"
            unoptimized
            className="opacity-90"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-lora text-white/90 drop-shadow-lg flex items-center gap-4">
              <Heart className="w-12 h-12 text-pink-300 animate-pulse" />
              Amor
              <Heart className="w-12 h-12 text-pink-300 animate-pulse" />
            </h1>
          </div>
        </div>
        <CardContent className="p-8 md:p-12">
          <p className="text-lg md:text-xl text-purple-800/90 dark:text-purple-200/90 leading-relaxed italic max-w-2xl mx-auto">
            Eu preciso que você saiba de uma coisa, da forma mais clara e simples possível, porque não há outra maneira de dizer: eu te amo. Mas não é só um 'eu te amo' de costume. É um 'eu te amo' que significa que eu admiro a mulher incrível que você é, que sou grato por cada risada que você me dá, e que a minha vida se tornou a minha versão favorita dela mesma desde que você chegou. Você é a melhor parte de todos os meus dias.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
