import React, { useState, useEffect } from 'react';
import { Timer, Flame } from 'lucide-react';

interface CountdownTimerProps {
  productId: string;
  initialHours?: number;
  compact?: boolean;
}

// Generate a deterministic initial duration in seconds based on product ID so it stays consistent yet ticks down
const getInitialSecondsForProduct = (id: string): number => {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash << 5) - hash + id.charCodeAt(i);
    hash |= 0;
  }
  // Range between 25 minutes (1500s) and 3 hours 45 mins (13500s)
  const absHash = Math.abs(hash);
  const minSeconds = 1500;
  const maxSeconds = 13500;
  return minSeconds + (absHash % (maxSeconds - minSeconds));
};

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  productId,
  compact = false,
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(() => getInitialSecondsForProduct(productId));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Reset to a new chunk when it reaches 0 so offer appears perpetually scarce
          return 3600 + Math.floor(Math.random() * 1800);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const pad = (n: number) => n.toString().padStart(2, '0');

  if (compact) {
    return (
      <div className="flex items-center gap-1 bg-gradient-to-r from-red-600 to-rose-600 text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded shadow-xs tracking-tight">
        <Timer className="w-3 h-3 animate-pulse text-amber-300 shrink-0" />
        <span className="text-[9px] uppercase tracking-wider text-red-100 hidden sm:inline">Sınırlı Fırsat:</span>
        <span className="font-mono text-amber-200">
          {pad(hours)}:{pad(minutes)}:{pad(seconds)}
        </span>
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-r from-rose-500/10 via-amber-500/10 to-orange-500/10 border border-rose-200/80 rounded-lg p-1.5 flex items-center justify-between text-xs my-1.5 shadow-2xs">
      <div className="flex items-center gap-1.5 text-rose-700 font-bold text-[11px]">
        <div className="relative flex items-center justify-center">
          <Flame className="w-3.5 h-3.5 text-rose-600 fill-rose-500 animate-bounce" />
          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
        </div>
        <span className="tracking-tight">Sınırlı Süre Fırsatı</span>
      </div>

      <div className="flex items-center gap-1 font-mono text-xs font-black">
        <div className="bg-rose-600 text-white px-1.5 py-0.5 rounded shadow-xs min-w-[22px] text-center">
          {pad(hours)}
        </div>
        <span className="text-rose-600 font-bold">:</span>
        <div className="bg-rose-600 text-white px-1.5 py-0.5 rounded shadow-xs min-w-[22px] text-center">
          {pad(minutes)}
        </div>
        <span className="text-rose-600 font-bold">:</span>
        <div className="bg-rose-600 text-white px-1.5 py-0.5 rounded shadow-xs min-w-[22px] text-center">
          {pad(seconds)}
        </div>
      </div>
    </div>
  );
};
