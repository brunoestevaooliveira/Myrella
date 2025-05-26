import { START_DATING_DATE } from '@/lib/constants';
import { Heart } from 'lucide-react';
import { format } from 'date-fns';

export default function HeroSection() {
  const formattedDate = format(START_DATING_DATE, 'MMMM dd, yyyy');

  return (
    <section className="text-center py-12 md:py-20 bg-gradient-to-br from-primary/20 via-background to-accent/20 rounded-xl shadow-lg">
      <div className="container mx-auto px-4">
        <Heart className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
        <h1 className="text-4xl md:text-5xl font-lora font-bold mb-4 text-primary-foreground/90">
          Our Love Story Began
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-primary mb-8">
          {formattedDate}
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Welcome to Amor Anima, a special place dedicated to our beautiful journey together. Here, we celebrate every moment, every memory, and all the love that binds us.
        </p>
      </div>
    </section>
  );
}
