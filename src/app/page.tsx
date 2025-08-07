
import HeroSection from '@/components/landing/HeroSection';
import AnniversaryCountdown from '@/components/landing/AnniversaryCountdown';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CalendarHeart, Gift, Sparkles, Quote, Heart, FileHeart } from 'lucide-react';

const loveLanguages = [
  'Afrikaans: Ek het jou lief',
  'Albanian: Te dua',
  'Arabic: Ana behibak (to male)',
  'Arabic: Ana behibek (to female)',
  'Armenian: Yes kez sirumem',
  'Bangladeshi: Aamee tuma ke bhalo aashi',
  'Belarusian: Ya tabe kahayu',
  'Bisaya: Nahigugma ako kanimo',
  'Bulgarian: Obicham te',
  'Cambodian: Soro lahn nhee ah',
  'Cantonese Chinese: Ngo oiy ney a',
  'Catalan: T’estimo',
  'Cheyenne: Ne mohotatse',
  'Chichewa: Ndimakukonda',
  'Corsican: Ti tengu caru (to male)',
  'Cree: Kisakihitin',
  'Croatian: Volim te',
  'Czech: Miluji te',
  'Danish: Jeg Elsker Dig',
  'Dutch: Ik hou van jou',
  'English: I love you',
  'Esperanto: Mi amas vin',
  'Estonian: Ma armastan sind',
  'Ethiopian: Afgreki’',
  'Faroese: Eg elski teg',
  'Farsi: Doset daram',
  'Filipino: Mahal kita',
  'Finnish: Mina rakastan sinua',
  'French: Je t’aime, Je t’adore',
  'Gaelic: Ta gra agam ort',
  'Georgian: Mikvarhar',
  'German: Ich liebe dich',
  'Greek: S’agapo',
  'Gujarati: Hoo thunay prem karoo choo',
  'Hiligaynon: Palangga ko ikaw',
  'Hawaiian: Aloha wau ia oi',
  'Hebrew: Ani ohev otah (to female)',
  'Hebrew: Ani ohev et otha (to male)',
  'Hiligaynon: Guina higugma ko ikaw',
  'Hindi: Hum Tumhe Pyar Karte hae',
  'Hmong: Kuv hlub koj',
  'Hopi: Nu’ umi unangwa’ta',
  'Hungarian: Szeretlek',
  'Icelandic: Eg elska tig',
  'Ilonggo: Palangga ko ikaw',
  'Indonesian: Saya cinta padamu',
  'Inuit: Negligevapse',
  'Irish: Taim i’ ngra leat',
  'Italian: Ti amo',
  'Japanese: Aishiteru',
  'Javanese: Kulo tresno',
  'Kannada: Naanu ninna preetisuttene',
  'Kapampangan: Kaluguran daka',
  'Kiswahili: Nakupenda',
  'Konkani: Tu magel moga?',
  'Korean: Sarang Heyo',
  'Latin: Te amo',
  'Latvian: Es tevi miilu',
  'Lebanese: Bahibak',
  'Lithuanian: Tave myliu',
  'Malay: Saya cintakan mu / Aku cinta padamu',
  'Malayalam: Njan Ninne Premikunnu',
  'Mandarin Chinese: Wo ai ni',
  'Marathi: Me tula prem karto',
  'Mohawk: Kanbhik',
  'Moroccan: Ana moajaba bik',
  'Nahuatl: Ni mits neki',
  'Navaho: Ayor anosh’ni',
  'Norwegian: Jeg Elsker Deg',
  'Pandacan: Syota na kita!!',
  'Pangasinan: Inaru Taka',
  'Papiamento: Mi ta stimabo',
  'Persian: Doo-set daaram',
  'Pig Latin: Iay ovlay ouyay',
  'Polish: Kocham Ciebie',
  'Portuguese: Eu te amo',
  'Romanian: Te iubesc',
  'Russian: Ya tebya liubliu',
  'Scot Gaelic: Tha gra\dh agam ort',
  'Serbian: Volim te',
  'Setswana: Ke a go rata',
  'Sign Language:spread your arms wide and cross them over your chest, as if you are hugging someone',
  'Sindhi: Maa tokhe pyar kendo ahyan',
  'Sioux: Techihhila',
  'Slovak: Lu`bim ta',
  'Slovenian: Ljubim te',
  'Spanish: Te quiero / Te amo',
  'Swahili: Ninapenda wewe',
  'Swedish: Jag alskar dig',
  'Swiss-German: Ich lieb Di',
  'Tagalog: Mahal kita',
  'Taiwanese: Wa ga ei li',
  'Tahitian: Ua Here Vau Ia Oe',
  'Tamil: Nan unnai kathalikaraen',
  'Telugu: Nenu ninnu premistunnanu',
  'Thai: Chan rak khun (to male)',
  'Thai: Phom rak khun (to female)',
  'Turkish: Seni Seviyorum',
  'Ukrainian: Ya tebe kahayu',
  'Urdu: mai aap say pyaar karta hoo',
  'Vietnamese: Anh ye^u em (to female)',
  'Vietnamese: Em ye^u anh (to male)',
  'Welsh: ‘Rwy’n dy garu di',
  'Yiddish: Ikh hob dikh lib',
  'Yoruba: Mo ni fe',
];


export default function HomePage() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <AnniversaryCountdown />

      <div className="my-10 text-center opacity-80 hover:opacity-100 transition-opacity duration-300">
        <Image 
          src="https://i.pinimg.com/originals/7c/84/bd/7c84bd28ec86fd2049dc159e9e2cc23a.gif" 
          alt="Howl e Sophie se olhando" 
          width={980} 
          height={600} 
          className="mx-auto rounded-lg shadow-md" 
          unoptimized={true} // GIFs can be unoptimized
          data-ai-hint="howl sophie"
        />
         <p className="text-sm text-muted-foreground mt-4 italic">Eu te amo muito, meu amor!</p>
         <div className="mt-4 flex items-center justify-center gap-2">
            <Image 
              src="https://i.pinimg.com/736x/b0/13/9d/b0139daeac2bd47de595efd76965bfb6.jpg" 
              alt="Lontras fofas" 
              width={980} 
              height={600} 
              className="rounded-lg shadow-md"
              unoptimized
              data-ai-hint="cute otters"
            />
            <p className="text-md italic text-muted-foreground">é voce meu amor apenas voce minha lontra</p>
          </div>
      </div>

      <section className="text-center">
        <Image
          src="https://i.pinimg.com/1200x/fd/e9/8b/fde98bf9afc4b5be9d0f507951c95a4c.jpg"
          alt="Eu te amo em várias línguas"
          width={800}
          height={600}
          className="mx-auto rounded-lg shadow-md mb-6"
          unoptimized
          data-ai-hint="love languages"
        />
        <h2 className="text-3xl font-lora font-semibold mb-8 text-primary">
          Eu te amo, amor, em 100 línguas
        </h2>
        <div className="text-left text-muted-foreground grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-2 max-w-4xl mx-auto">
            {loveLanguages.map((lang, index) => (
              <p key={index}>{lang}</p>
            ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-lora font-semibold mb-2 text-primary">Explore Nossa História de Amor</h2>
        <p className="text-md font-normal text-muted-foreground/90 mb-8">愛の探求 (Ai no Tankyū - A Exploração do Amor)</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Heart className="w-10 h-10 text-primary" />}
            title="Amor"
            description="Uma página dedicada ao nosso sentimento mais profundo."
            link="/amor"
            linkText="Ver Declaração"
          />
          <FeatureCard
            icon={<FileHeart className="w-10 h-10 text-primary" />}
            title="Uma Promessa"
            description="Uma mensagem especial para você."
            link="/promise"
            linkText="Ler Mensagem"
          />
          <FeatureCard
            icon={<CalendarHeart className="w-10 h-10 text-primary" />}
            title="Nossas Datas Especiais"
            description="Reviva nossos momentos queridos em um calendário interativo."
            link="/calendar"
            linkText="Ver Calendário"
          />
          <FeatureCard
            icon={<Sparkles className="w-10 h-10 text-primary" />}
            title="Razões Que Te Amo"
            description="Descubra uma lista de todas as coisas que tornam você tão especial para mim."
            link="/reasons"
            linkText="Ler Razões"
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
            description="Abra para uma surpresa especial pensada para você."
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
