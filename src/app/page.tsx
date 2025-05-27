import HeroSection from '@/components/landing/HeroSection';
import AnniversaryCountdown from '@/components/landing/AnniversaryCountdown';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CalendarHeart, Gift, ImagePlay, Sparkles, Quote, MessageSquareHeart } from 'lucide-react'; // Adicionado MessageSquareHeart

export default function HomePage() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <AnniversaryCountdown />

      <div className="my-10 text-center opacity-80 hover:opacity-100 transition-opacity duration-300">
        <Image 
          src="https://i.pinimg.com/originals/20/77/68/20776891228b10ea7a42267e2cbb5a9d.gif" 
          alt="Snorlax dormindo" 
          width={120} 
          height={120} 
          className="mx-auto rounded-full shadow-md" 
          unoptimized={true} // GIFs can be unoptimized
          data-ai-hint="snorlax sleeping cute"
        />
         <p className="text-xs text-muted-foreground mt-2 italic">~ um soninho de amor ~</p>
      </div>

      <section className="text-center">
        <h2 className="text-3xl font-lora font-semibold mb-2 text-primary-foreground/80">Explore Nossa História de Amor</h2>
        <p className="text-md font-normal text-muted-foreground/90 mb-8">愛の探求 (Ai no Tankyū - A Exploração do Amor)</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            icon={<MessageSquareHeart className="w-10 h-10 text-primary" />}
            title="Mensagens de Amor"
            description="Gere mensagens doces e personalizadas só para você."
            link="/love-messages"
            linkText="Criar Mensagem"
          />
          <FeatureCard
            icon={<Quote className="w-10 h-10 text-primary" />}
            title="Citações de Amor"
            description="Inspire-se com belas palavras sobre o amor."
            link="/quotes"
            linkText="Ver Citações"
          />
          <FeatureCard
            icon={<Gift className="w-10 h-10 text-primary" />}
            title="Caixinha de Afeto"
            description="Abra uma surpresa especial pensada para você."
            link="/affection"
            linkText="Abrir Surpresa"
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
