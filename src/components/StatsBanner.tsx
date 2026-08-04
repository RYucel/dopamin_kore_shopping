import React from 'react';
import { ShieldCheck, Flame, Wallet, Smile } from 'lucide-react';

interface StatsBannerProps {
  totalSaved: number;
  totalItemsBought: number;
}

export const StatsBanner: React.FC<StatsBannerProps> = ({ totalSaved, totalItemsBought }) => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white border-y border-slate-700 py-3 px-4 shadow-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-slate-700">
        {/* Stat 1 */}
        <div className="flex flex-col items-center justify-center p-1">
          <div className="flex items-center gap-1 text-xs text-orange-400 font-bold mb-0.5">
            <Wallet className="w-3.5 h-3.5" />
            <span>Engellenen Borç</span>
          </div>
          <span className="text-sm md:text-base font-black text-amber-300">
            ₺{totalSaved.toLocaleString('tr-TR', { minimumFractionDigits: 0 })}
          </span>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center justify-center p-1">
          <div className="flex items-center gap-1 text-xs text-blue-400 font-bold mb-0.5">
            <Flame className="w-3.5 h-3.5" />
            <span>Alınan Sanal Ürün</span>
          </div>
          <span className="text-sm md:text-base font-black text-white">
            {totalItemsBought} Adet
          </span>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center justify-center p-1">
          <div className="flex items-center gap-1 text-xs text-emerald-400 font-bold mb-0.5">
            <Smile className="w-3.5 h-3.5" />
            <span>Dopamin Seviyesi</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-sm md:text-base font-black text-emerald-400">%100</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center justify-center p-1">
          <div className="flex items-center gap-1 text-xs text-purple-400 font-bold mb-0.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Fatura / Ücret</span>
          </div>
          <span className="text-sm md:text-base font-black text-white">
            0 TL (Ücretsiz)
          </span>
        </div>
      </div>
    </div>
  );
};
