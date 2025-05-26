'use client';

import type { CSSProperties } from 'react';
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import type { Memory } from '@/lib/types';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '../ui/button';
import { AlertCircle, Info } from 'lucide-react';

interface MemoriesCalendarProps {
  memories: Memory[];
}

export default function MemoriesCalendar({ memories }: MemoriesCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date(memories[0]?.date || Date.now()));
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(
    memories.find(m => format(m.date, 'yyyy-MM-dd') === format(selectedDate || new Date(), 'yyyy-MM-dd')) || memories[0] || null
  );

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      const memoryForDate = memories.find(m => format(m.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd'));
      setSelectedMemory(memoryForDate || null);
    } else {
      setSelectedMemory(null);
    }
  };

  const highlightedDays = memories.map(memory => memory.date);
  
  const modifiers = {
    highlighted: highlightedDays,
  };

  const modifiersStyles: { highlighted?: CSSProperties } = {
    highlighted: {
      backgroundColor: 'var(--tw-prose-links)', // Using a Tailwind prose variable as an example
      color: 'hsl(var(--primary-foreground))',
      borderRadius: 'var(--radius)',
      boxShadow: '0 0 0 2px hsl(var(--primary)) inset',
    }
  };
  
  // Customizing styles via CSS variables set in globals.css or directly
  const customModifiersStyles: { highlighted?: CSSProperties } = {
    highlighted: {
      backgroundColor: 'hsl(var(--primary))', // Use primary color for background
      color: 'hsl(var(--primary-foreground))', // Use primary foreground for text
      borderRadius: 'var(--radius)', 
    }
  };


  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          className="rounded-md border bg-card p-0 shadow-inner"
          modifiers={modifiers}
          modifiersStyles={customModifiersStyles}
          initialFocus
          month={selectedDate} // Ensure calendar shows month of selected/initial date
          defaultMonth={selectedDate} // For initial render
        />
      </div>
      <div className="md:col-span-1">
        {selectedMemory ? (
          <Card className="h-full flex flex-col shadow-lg rounded-lg">
            <CardHeader className="bg-accent/30">
              <CardTitle className="text-xl font-lora text-accent-foreground">{selectedMemory.title}</CardTitle>
              <CardDescription className="text-accent-foreground/80">{format(selectedMemory.date, 'PPP')}</CardDescription>
            </CardHeader>
            <ScrollArea className="flex-grow">
            <CardContent className="pt-4 pb-2">
              <p className="text-foreground/90 mb-4">{selectedMemory.description}</p>
              {selectedMemory.tags && selectedMemory.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedMemory.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-secondary text-secondary-foreground">{tag}</Badge>
                  ))}
                </div>
              )}
            </CardContent>
            </ScrollArea>
            {selectedMemory.image && (
               <CardFooter className="p-2">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                 <img src={selectedMemory.image} alt={selectedMemory.title} className="rounded-md w-full object-cover aspect-video" data-ai-hint="couple memory" />
               </CardFooter>
            )}
          </Card>
        ) : (
          <Card className="h-full flex flex-col items-center justify-center text-center bg-muted/50 shadow-lg rounded-lg p-6">
            <Info className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold text-muted-foreground">No memory selected</h3>
            <p className="text-sm text-muted-foreground">
              {selectedDate ? "There's no specific memory for this day, but every day with you is special!" : "Select a highlighted date to view a memory."}
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
