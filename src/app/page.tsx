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
        <h2 className="text-3xl font-lora font-semibold mb-8 text-primary-foreground/80">Explore Our Love Story</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<CalendarHeart className="w-10 h-10 text-primary" />}
            title="Our Special Dates"
            description="Relive our cherished moments on an interactive calendar."
            link="/calendar"
            linkText="View Calendar"
          />
          <FeatureCard
            icon={<ImagePlay className="w-10 h-10 text-primary" />}
            title="Photo Memories"
            description="A gallery of our adventures and smiles together."
            link="/gallery"
            linkText="See Photos"
          />
          <FeatureCard
            icon={<Sparkles className="w-10 h-10 text-primary" />}
            title="Reasons I Love You"
            description="Discover a list of all the things that make you so special to me."
            link="/reasons"
            linkText="Read Reasons"
          />
          <FeatureCard
            icon={<Gift className="w-10 h-10 text-primary" />}
            title="Love Messages"
            description="Generate sweet and personalized messages just for you."
            link="/love-messages"
            linkText="Create Message"
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
