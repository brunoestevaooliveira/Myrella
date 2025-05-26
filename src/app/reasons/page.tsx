import ReasonsList from '@/components/reasons/ReasonsList';
import { INITIAL_REASONS } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HeartHandshake } from 'lucide-react';

export default function ReasonsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <Card className="shadow-xl rounded-xl overflow-hidden">
        <CardHeader className="bg-primary/20 text-center">
          <HeartHandshake className="w-12 h-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-3xl font-lora text-primary-foreground/90">Razões Pelas Quais Te Adoro</CardTitle>
          <CardDescription className="text-muted-foreground">
            Apenas algumas das inúmeras razões pelas quais você significa o mundo para mim. Cada uma é um testemunho de quão especial você é.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <ReasonsList reasons={INITIAL_REASONS} />
        </CardContent>
      </Card>
    </div>
  );
}
