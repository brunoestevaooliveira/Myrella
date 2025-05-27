import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { INITIAL_QUOTES } from '@/lib/constants';
import { Quote as QuoteIcon } from 'lucide-react'; // Renomeado para evitar conflito com o nome do componente

export default function QuotesPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <Card className="shadow-xl rounded-xl overflow-hidden">
        <CardHeader className="bg-primary/20 text-center">
          <QuoteIcon className="w-12 h-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-3xl font-lora text-primary-foreground/90">
            Citações de Amor
            <span className='block text-lg font-normal text-muted-foreground/80 mt-1'>
              愛の引用 (Ai no In'yō - Love Quotes)
            </span>
          </CardTitle>
          <CardDescription className="text-muted-foreground mt-2">
            Palavras que tocam a alma e celebram o sentimento mais belo.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {INITIAL_QUOTES.map((quote) => (
            <Card key={quote.id} className="bg-card/70 shadow-md rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <blockquote className="text-lg italic text-foreground/90">
                  &ldquo;{quote.text}&rdquo;
                </blockquote>
                {quote.author && (
                  <p className="text-right text-sm text-muted-foreground mt-3">- {quote.author}</p>
                )}
              </CardContent>
            </Card>
          ))}
          {INITIAL_QUOTES.length === 0 && (
            <p className="text-center text-muted-foreground">
              Ainda não há citações por aqui, mas o livro do nosso amor está sendo escrito a cada dia.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
