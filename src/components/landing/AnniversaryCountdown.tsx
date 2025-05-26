'use client';

import { useEffect, useState } from 'react';
import { START_DATING_DATE } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function AnniversaryCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isAnniversaryToday, setIsAnniversaryToday] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const anniversaryDay = START_DATING_DATE.getDate();
      const now = new Date();

      const currentDayIsAnniversary = now.getDate() === anniversaryDay;
      setIsAnniversaryToday(currentDayIsAnniversary);

      if (currentDayIsAnniversary) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return; 
      }

      let targetYear = now.getFullYear();
      let targetMonth = now.getMonth();

      if (now.getDate() > anniversaryDay) {
        targetMonth += 1;
        if (targetMonth > 11) {
          targetMonth = 0;
          targetYear += 1;
        }
      }
      
      let nextAnniversaryDate = new Date(targetYear, targetMonth, anniversaryDay);

      const difference = +nextAnniversaryDate - +now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
         // Fallback if difference is somehow negative (should be rare with current logic)
         // This could happen if nextAnniversaryDate is in the past due to some edge case.
         // For simplicity, we'll try to recalculate for the month after nextAnniversaryDate
         let fallbackYear = nextAnniversaryDate.getFullYear();
         let fallbackMonth = nextAnniversaryDate.getMonth() + 1;
         if (fallbackMonth > 11) {
           fallbackMonth = 0;
           fallbackYear +=1;
         }
         const fallbackDate = new Date(fallbackYear, fallbackMonth, anniversaryDay);
         const newDifference = +fallbackDate - +now;
         if (newDifference > 0) {
            setTimeLeft({
              days: Math.floor(newDifference / (1000 * 60 * 60 * 24)),
              hours: Math.floor((newDifference / (1000 * 60 * 60)) % 24),
              minutes: Math.floor((newDifference / 1000 / 60) % 60),
              seconds: Math.floor((newDifference / 1000) % 60),
            });
         } else {
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // Final fallback
         }
      }
    };

    calculateTimeLeft(); 
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <Card className="shadow-lg rounded-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-accent/30">
          <CardTitle className="text-xl font-lora font-medium text-accent-foreground">Contagem Regressiva para o Próximo Mêsversário</CardTitle>
          <Gift className="h-6 w-6 text-accent-foreground" />
        </CardHeader>
        <CardContent className="pt-6 text-center">
          <p className="text-2xl font-bold text-muted-foreground">Carregando contagem...</p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="shadow-lg rounded-xl overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-accent/30">
        <CardTitle className="text-xl font-lora font-medium text-accent-foreground">
         {isAnniversaryToday ? "Feliz Mêsversário!" : "Contagem Regressiva para o Próximo Mêsversário"}
        </CardTitle>
        <Gift className="h-6 w-6 text-accent-foreground" />
      </CardHeader>
      <CardContent className="pt-6">
        {isAnniversaryToday ? (
          <p className="text-3xl text-center font-bold text-primary animate-pulse">
            Feliz Mêsversário, Meu Amor! 🎉💖
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <TimeUnit value={timeLeft.days} label="Dias" />
            <TimeUnit value={timeLeft.hours} label="Horas" />
            <TimeUnit value={timeLeft.minutes} label="Minutos" />
            <TimeUnit value={timeLeft.seconds} label="Segundos" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="p-4 bg-background rounded-lg shadow-inner border border-border/50">
      <div className="text-4xl font-bold text-primary">{String(value).padStart(2, '0')}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
