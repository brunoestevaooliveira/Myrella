
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, Sparkles, Heart, MessageCircle, Quote as QuoteIcon, CheckCircle2 } from 'lucide-react';
import { INITIAL_QUOTES, INITIAL_REASONS, INITIAL_AFFECTION_MESSAGES } from '@/lib/constants';
import type { LoveQuote, Reason } from '@/lib/types';
import Image from 'next/image';

type Surprise = 
  | { type: 'quote'; content: LoveQuote }
  | { type: 'reason'; content: Reason }
  | { type: 'message'; content: string };

export default function AffectionPage() {
  const [surprise, setSurprise] = useState<Surprise | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getRandomItem = <T,>(array: T[]): T => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const revealSurprise = () => {
    setIsLoading(true);
    setSurprise(null);

    // Adiciona um pequeno delay para simular carregamento e melhorar a UX
    setTimeout(() => {
      const surpriseTypes = ['quote', 'reason', 'message'];
      const randomType = getRandomItem(surpriseTypes);

      let newSurprise: Surprise;

      if (randomType === 'quote') {
        newSurprise = { type: 'quote', content: getRandomItem(INITIAL_QUOTES) };
      } else if (randomType === 'reason') {
        newSurprise = { type: 'reason', content: getRandomItem(INITIAL_REASONS) };
      } else {
        newSurprise = { type: 'message', content: getRandomItem(INITIAL_AFFECTION_MESSAGES) };
      }
      setSurprise(newSurprise);
      setIsLoading(false);
    }, 500);
  };

  const renderSurpriseContent = () => {
    if (!surprise) return null;

    switch (surprise.type) {
      case 'quote':
        return (
          <div className="text-center">
            <QuoteIcon className="w-8 h-8 text-primary mx-auto mb-3" />
            <blockquote className="text-lg italic text-foreground/90">
              &ldquo;{surprise.content.text}&rdquo;
            </blockquote>
            {surprise.content.author && (
              <p className="text-right text-sm text-muted-foreground mt-2">- {surprise.content.author}</p>
            )}
          </div>
        );
      case 'reason':
        return (
          <div className="flex items-start text-left">
            <CheckCircle2 className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
            <p className="text-lg text-foreground/90">{surprise.content.text}</p>
          </div>
        );
      case 'message':
        return (
          <div className="text-center">
            <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-xl font-medium text-foreground/90">{surprise.content}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <Card className="shadow-xl rounded-xl overflow-hidden">
        <CardHeader className="bg-primary/20 text-center">
          <Gift className="w-12 h-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-3xl font-lora text-primary-foreground/90">
            Caixinha de Afeto
            <span className='block text-lg font-normal text-muted-foreground/80 mt-1'>
              愛情の小箱 (Aijō no Kobako - Little Box of Affection)
            </span>
          </CardTitle>
          <CardDescription className="text-muted-foreground mt-2">
            Clique no botão abaixo para revelar uma mensagem especial, uma razão ou uma citação cheia de carinho, só para você!
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 md:p-8 text-center">
          <Button onClick={revealSurprise} disabled={isLoading} size="lg" className="mb-8 text-lg py-7 px-8">
            {isLoading ? (
              <>
                <Heart className="mr-2 h-5 w-5 animate-ping" />
                Revelando...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Abrir Surpresa!
              </>
            )}
          </Button>

          {surprise && (
            <Card className="bg-accent/20 border-accent shadow-inner rounded-lg animate-in fade-in-50 duration-500">
              <CardContent className="p-6 min-h-[150px] flex flex-col items-center justify-center">
                <div className='mb-4'>
                  {renderSurpriseContent()}
                </div>
                <Image
                    src="https://i.pinimg.com/originals/73/0d/75/730d75ed729397068c7a89fa7476e305.gif"
                    alt="Gatinhos se abraçando"
                    width={150}
                    height={150}
                    unoptimized
                    className="rounded-lg"
                    data-ai-hint="cute cats"
                />
              </CardContent>
            </Card>
          )}
           {!surprise && !isLoading && (
            <p className="text-muted-foreground italic">Sua surpresa aparecerá aqui...</p>
           )}
        </CardContent>
      </Card>
    </div>
  );
}
