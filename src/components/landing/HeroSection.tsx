import { START_DATING_DATE } from '@/lib/constants';
import { Heart } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function HeroSection() {
  const formattedDate = format(START_DATING_DATE, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

  return (
    <section className="text-center py-12 md:py-20 bg-gradient-to-br from-primary/20 via-background to-accent/20 rounded-xl shadow-lg">
      <div className="container mx-auto px-4">
        <Heart className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
        <h1 className="text-4xl md:text-5xl font-lora font-bold mb-2 text-primary">
          Nossa História de Amor Começou
        </h1>
        <p className="text-sm text-muted-foreground/90 mb-4">
          愛の物語が始まる (Ai no monogatari ga hajimaru - Nossa história de amor começa)
        </p>
        <p className="text-2xl md:text-3xl font-semibold text-primary mb-2">
          {formattedDate}
        </p>
        <p className="text-sm text-muted-foreground/80 mb-8">
          愛が芽生えた日 (Ai ga mebaeta hi - O dia em que o amor brotou)
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto italic">
        "Não se deve traduzir 'eu te amo' de forma tão direta e crua. Um japonês jamais diria algo assim. Em vez disso, ao caminhar sob a noite com a pessoa amada, bastaria dizer: 'A lua está bonita, não é?' (月が綺麗ですね, Tsuki ga kirei desu ne). Se a outra pessoa entender o que está implícito na beleza daquele momento compartilhado, isso é o suficiente. O sentimento está ali, no ar, na luz da lua, no silêncio entre os dois. A confissão direta poderia apenas vulgarizar o que é profundo e sagrado."
        </p>
      </div>
    </section>
  );
}
