import type { Reason } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

interface ReasonsListProps {
  reasons: Reason[];
}

export default function ReasonsList({ reasons }: ReasonsListProps) {
  if (!reasons || reasons.length === 0) {
    return <p className="text-center text-muted-foreground">A lista está vazia por enquanto, mas meu amor por você é infinito!</p>;
  }

  return (
    <div className="space-y-4">
      {reasons.map((reason, index) => (
        <Card
          key={reason.id}
          className="bg-card hover:bg-accent/10 transition-colors duration-200 rounded-lg shadow-sm border-l-4 border-primary"
        >
          <CardContent className="p-4 flex items-start">
            <CheckCircle2 className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
            <p className="text-foreground/90 text-base leading-relaxed">
              <span className="font-semibold text-primary">{index + 1}. </span>
              {reason.text}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
