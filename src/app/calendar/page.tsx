import MemoriesCalendar from '@/components/calendar/MemoriesCalendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { INITIAL_MEMORIES } from '@/lib/constants';
import { CalendarHeart } from 'lucide-react';

export default function CalendarPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-xl rounded-xl overflow-hidden">
        <CardHeader className="bg-primary/20 text-center">
          <CalendarHeart className="w-12 h-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-3xl font-lora text-primary-foreground/90">Our Special Calendar</CardTitle>
          <CardDescription className="text-muted-foreground">
            A timeline of our cherished moments and important dates. Click on a highlighted day to see the memory.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 md:p-6">
          <MemoriesCalendar memories={INITIAL_MEMORIES} />
        </CardContent>
      </Card>
    </div>
  );
}
