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

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      let nextAnniversary = new Date(now.getFullYear(), START_DATING_DATE.getMonth(), START_DATING_DATE.getDate());

      if (nextAnniversary < now) {
        nextAnniversary.setFullYear(now.getFullYear() + 1);
      }

      const difference = +nextAnniversary - +now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // Happy Anniversary!
      }
    };

    calculateTimeLeft(); // Initial calculation
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <Card className="shadow-lg rounded-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-accent/30">
          <CardTitle className="text-xl font-lora font-medium text-accent-foreground">Next Anniversary Countdown</CardTitle>
          <Gift className="h-6 w-6 text-accent-foreground" />
        </CardHeader>
        <CardContent className="pt-6 text-center">
          <p className="text-2xl font-bold text-muted-foreground">Loading countdown...</p>
        </CardContent>
      </Card>
    );
  }
  
  const isAnniversaryToday = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 && new Date().getDate() === START_DATING_DATE.getDate() && new Date().getMonth() === START_DATING_DATE.getMonth();


  return (
    <Card className="shadow-lg rounded-xl overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-accent/30">
        <CardTitle className="text-xl font-lora font-medium text-accent-foreground">
         {isAnniversaryToday ? "Happy Anniversary!" : "Next Anniversary Countdown"}
        </CardTitle>
        <Gift className="h-6 w-6 text-accent-foreground" />
      </CardHeader>
      <CardContent className="pt-6">
        {isAnniversaryToday ? (
          <p className="text-3xl text-center font-bold text-primary animate-pulse">
            Happy Anniversary, My Love! 🎉💖
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
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
