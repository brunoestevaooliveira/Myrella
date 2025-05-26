import HeroSection from '@/components/landing/HeroSection';
import AnniversaryCountdown from '@/components/landing/AnniversaryCountdown';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CalendarHeart, Gift, ImagePlay, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <AnniversaryCountdown />

      <section className="text-center">
        <h2 className="text-3xl font-lora font-semibold mb-8 text-primary-foreground/80">Explore Nossa História de Amor</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<CalendarHeart className="w-10 h-10 text-primary" />}
            title="Nossas Datas Especiais"
            description="Reviva nossos momentos queridos em um calendário interativo."
            link="/calendar"
            linkText="Ver Calendário"
          />
          <FeatureCard
            icon={<ImagePlay className="w-10 h-10 text-primary" />}
            title="Memórias em Fotos"
            description="Uma galeria de nossas aventuras e sorrisos juntos."
            link="/gallery"
            linkText="Ver Fotos"
          />
          <FeatureCard
            icon={<Sparkles className="w-10 h-10 text-primary" />}
            title="Razões Que Te Amo"
            description="Descubra uma lista de todas as coisas que tornam você tão especial para mim."
            link="/reasons"
            linkText="Ler Razões"
          />
          <FeatureCard
            icon={<Gift className="w-10 h-10 text-primary" />}
            title="Mensagens de Amor"
            description="Gere mensagens doces e personalizadas só para você."
            link="/love-messages"
            linkText="Criar Mensagem"
          />
        </div>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

function FeatureCard({ icon, title, description, link, linkText }: FeatureCardProps) {
  return (
    <Card className="bg-card/80 hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden flex flex-col">
      <CardHeader className="items-center p-6 bg-primary/10">
        {icon}
        <CardTitle className="mt-4 text-xl font-lora text-primary-foreground/90">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col justify-between">
        <p className="text-muted-foreground mb-6">{description}</p>
        <Button asChild variant="outline" className="mt-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Link href={link}>
            {linkText} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
