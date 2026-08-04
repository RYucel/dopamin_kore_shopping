import React from 'react';
import { X, Sparkles, BookOpen, Quote, ShieldCheck, HeartHandshake } from 'lucide-react';

interface TrendInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrendInfoModal: React.FC<TrendInfoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative text-gray-800 space-y-4">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1 cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          <span className="bg-orange-100 text-orange-600 font-extrabold text-xs px-3 py-1 rounded-full flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            Gen Z & Dopamin Araştırması
          </span>
        </div>

        <h2 className="text-xl font-black text-gray-900 leading-tight">
          Güney Kore'deki "Dopamin Siteleri" Akımı Nedir?
        </h2>

        <div className="prose text-xs leading-relaxed space-y-3 text-gray-700">
          <p>
            Güney Koreli Z kuşağı arasında <strong>"Dopamin Siteleri"</strong> adı verilen yeni bir dijital tüketim akımı hızla popülerlik kazanıyor. Bu platformlar; hiçbir ücret talep etmeyen veya tek bir ürün bile teslim etmeyen, ancak ürün seçme, yorum okuma, sepete ekleme ve hatta <strong>sanal kuryenin adresinize doğru hareket etmesini haritada izleme</strong> dahil tüm alışveriş ritüelini simüle eden e-ticaret siteleridir.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-3.5 rounded-r-xl italic my-3 text-amber-900">
            <Quote className="w-5 h-5 text-amber-400 mb-1" />
            "Çevrimiçi alışveriş karikatürü: Tüm performans var, sıfır maliyet ve sonuç var."
          </div>

          <h3 className="font-bold text-sm text-gray-900 flex items-center gap-1 pt-1">
            <BookOpen className="w-4 h-4 text-orange-500" />
            Psikoloji Neden Böyle Çalışıyor?
          </h3>
          <p>
            Psikoloji profesörü <strong>Kim Heon-sik</strong>'e göre, bir kargoyu bekleme ve haritada takip etme eylemi, ürünü fiilen teslim alıp kutusunu açmaktan genellikle <strong>daha güçlü bir dopamin salgısı</strong> tetikliyor. İnsan beyni beklenti sürecinde doruk noktasına ulaşıyor.
          </p>

          <h3 className="font-bold text-sm text-gray-900 flex items-center gap-1 pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Finansal Emniyet Supabı
          </h3>
          <p>
            Yüksek yaşam maliyetleri ve sosyal medyadaki aralıksız tüketim baskısıyla baş etmeye çalışan gençler için bu platformlar bir <strong>finansal emniyet supabı</strong> görevi görüyor: Borçlanmadan veya kredi kartı limitini doldurmadan alışveriş ritüelini ve hazzını yaşatıyor.
          </p>
        </div>

        <div className="pt-3 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
          >
            Anladım, Alışverişe Devam Et
          </button>
        </div>
      </div>
    </div>
  );
};
