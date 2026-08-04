import React, { useState, useEffect } from 'react';
import { Flame, Clock, Truck, ShieldCheck, Gift, ArrowRight, Zap, RefreshCw } from 'lucide-react';
import { sound } from '../utils/sound';

interface BannerSliderProps {
  onOpenWheel: () => void;
  onOpenTrendInfo: () => void;
}

export const BannerSlider: React.FC<BannerSliderProps> = ({ onOpenWheel, onOpenTrendInfo }) => {
  // Flash sale countdown timer simulation (e.g. 02:45:18)
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 48, seconds: 15 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 3, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 pt-4 pb-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main Hero Flash Banner */}
        <div className="md:col-span-2 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg flex flex-col justify-between min-h-[220px]">
          {/* Subtle Background Pattern */}
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <Flame className="w-80 h-80" />
          </div>

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
                Dopamin Flaş İndirimi
              </span>
              <div className="flex items-center gap-1 bg-black/30 backdrop-blur-md text-yellow-300 text-xs font-extrabold px-3 py-1 rounded-full">
                <Clock className="w-3.5 h-3.5 animate-spin-slow" />
                <span>
                  {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-2 leading-tight">
              Sözde Fatura, <br className="hidden sm:inline" />
              Gerçek Dopamin Patlaması!
            </h2>
            <p className="text-orange-100 text-xs md:text-sm max-w-lg mb-4 font-medium">
              Gece yarısı alışveriş krizlerine son! Sepete ekleyin, adresinizi girin, canlı kuryenizi izleyin. Tek kuruş borçlanmadan %100 tatmin.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                sound.playAddToCart();
                onOpenWheel();
              }}
              className="bg-white text-orange-600 hover:bg-orange-50 font-extrabold px-5 py-2.5 rounded-xl text-xs md:text-sm shadow-md transition-all hover:scale-105 flex items-center gap-2 cursor-pointer"
            >
              <Gift className="w-4 h-4 text-orange-500" />
              Kupon Çarkını Çevir
            </button>
            <button
              onClick={onOpenTrendInfo}
              className="bg-black/20 hover:bg-black/30 backdrop-blur-md text-white border border-white/30 font-semibold px-4 py-2.5 rounded-xl text-xs md:text-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              Trend Hakkında Oku <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Side Info Cards */}
        <div className="flex flex-col gap-3 justify-between">
          {/* Card 1: Kurye Takip Simülasyonu */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 flex items-center gap-3 shadow-xs">
            <div className="p-3 bg-blue-600 text-white rounded-xl shadow-xs">
              <Truck className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="font-extrabold text-xs md:text-sm text-gray-900">Canlı Sanal Kurye Haritası</h3>
              <p className="text-[11px] text-gray-600 font-medium">
                Siparişinizi verin, kuryenizi GPS haritada anlık takip edin!
              </p>
            </div>
          </div>

          {/* Card 2: Borçsuz Alışveriş */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl p-4 flex items-center gap-3 shadow-xs">
            <div className="p-3 bg-emerald-600 text-white rounded-xl shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-xs md:text-sm text-gray-900">Sıfır Fatura Garantisi</h3>
              <p className="text-[11px] text-gray-600 font-medium">
                Banka kartınızdan veya hesabınızdan hiçbir ücret çekilmez.
              </p>
            </div>
          </div>

          {/* Card 3: Kore Akımı Quote */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-[11px] text-amber-900 italic">
            "Kargoyu takip etmenin verdiği beklenti heyecanı, ürünü teslim almaktan daha güçlü bir dopamin salgılar."
            <span className="block font-bold text-[10px] text-amber-700 not-italic mt-1">
              — Prof. Kim Heon-sik (Psikoloji)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
