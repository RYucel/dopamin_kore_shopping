import React, { useState } from 'react';
import { X, Award, Sparkles, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/sound';

interface DopamineWheelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onWinCoupon: (couponCode: string, description: string) => void;
}

const WHEEL_SECTORS = [
  { code: 'DOPAMIN90', label: '%90 Dopamin İndirimi', color: '#f97316' },
  { code: 'SIFIRBORC', label: '10.000 TL Sanal Bakiye', color: '#3b82f6' },
  { code: 'KORE2026', label: 'Sınırsız Sanal Kargo', color: '#10b981' },
  { code: 'TREND100', label: 'VIP Drone Teslimat', color: '#8b5cf6' },
  { code: 'TREN10', label: '%99 Çılgın Fırsat', color: '#ec4899' },
  { code: 'DOPAMIN90', label: 'Bedava Hayali Kıyafet', color: '#eab308' },
];

export const DopamineWheelModal: React.FC<DopamineWheelModalProps> = ({
  isOpen,
  onClose,
  onWinCoupon,
}) => {
  if (!isOpen) return null;

  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [wonPrize, setWonPrize] = useState<{ code: string; label: string } | null>(null);

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setWonPrize(null);

    // Random sector
    const randomIndex = Math.floor(Math.random() * WHEEL_SECTORS.length);
    const sectorAngle = 360 / WHEEL_SECTORS.length;
    const targetAngle = 360 * 5 + (WHEEL_SECTORS.length - randomIndex) * sectorAngle - sectorAngle / 2;

    setRotation((prev) => prev + targetAngle);

    // Play tick sound simulation
    let ticks = 0;
    const tickInterval = setInterval(() => {
      sound.playSpinTick();
      ticks++;
      if (ticks > 15) clearInterval(tickInterval);
    }, 150);

    setTimeout(() => {
      setIsSpinning(false);
      const prize = WHEEL_SECTORS[randomIndex];
      setWonPrize(prize);
      sound.playChaChing();
      onWinCoupon(prize.code, prize.label);

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
      });
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative text-center">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 p-1 cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-center gap-1 text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full w-fit mx-auto mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          Dopamin Çarkıfelek
        </div>

        <h2 className="text-xl font-extrabold text-gray-900 mb-1">Şansını Çevir, Dopamini Yakala!</h2>
        <p className="text-xs text-gray-500 mb-6">Her çevirişte %100 hayali hediye garantisi!</p>

        {/* Wheel Graphic Container */}
        <div className="relative w-64 h-64 mx-auto mb-6 flex items-center justify-center">
          {/* Pointer Arrow */}
          <div className="absolute -top-3 z-20 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-red-600 drop-shadow-md" />

          {/* Wheel Canvas / SVG */}
          <div
            className="w-full h-full rounded-full border-4 border-amber-400 shadow-xl overflow-hidden relative transition-all duration-[3500ms] ease-out"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {WHEEL_SECTORS.map((sector, index) => {
              const angle = 360 / WHEEL_SECTORS.length;
              return (
                <div
                  key={index}
                  className="absolute w-1/2 h-1/2 top-0 right-0 origin-bottom-left flex items-center justify-center"
                  style={{
                    backgroundColor: sector.color,
                    transform: `rotate(${index * angle}deg)`,
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
                  }}
                >
                  <span
                    className="text-[10px] font-extrabold text-white transform -rotate-45 translate-x-3 -translate-y-3 whitespace-nowrap drop-shadow"
                  >
                    {sector.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Center Spin Button */}
          <button
            onClick={handleSpin}
            disabled={isSpinning}
            className="absolute z-10 w-16 h-16 rounded-full bg-white text-orange-600 border-4 border-amber-400 font-black text-xs shadow-lg hover:scale-110 active:scale-95 transition-all flex flex-col items-center justify-center cursor-pointer disabled:opacity-50"
          >
            <Gift className="w-4 h-4 text-orange-500" />
            <span>{isSpinning ? '...' : 'ÇEVİR'}</span>
          </button>
        </div>

        {/* Prize Notification Box */}
        {wonPrize && (
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl p-3 text-xs mb-4 shadow-md animate-bounce">
            <p className="font-extrabold text-sm">Tebrikler! 🎉</p>
            <p><strong>"{wonPrize.label}"</strong> kazandınız!</p>
            <p className="text-[11px] text-orange-100 font-mono mt-1">Kupon Kodunuz: <strong>{wonPrize.code}</strong> (Sepette otomatik tanımlandı)</p>
          </div>
        )}

        <button
          onClick={handleSpin}
          disabled={isSpinning}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-3 rounded-xl shadow-md transition-all cursor-pointer text-xs disabled:opacity-50"
        >
          {isSpinning ? 'Çark Dönüyor...' : 'Çarkı Çevir & Kuponu Kap!'}
        </button>
      </div>
    </div>
  );
};
