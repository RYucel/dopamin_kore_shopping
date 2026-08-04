import React, { useState } from 'react';
import { CartItem, Courier } from '../types';
import { INITIAL_COURIERS } from '../data/products';
import { X, Truck, CreditCard, MapPin, ShieldCheck, CheckCircle2, Sparkles, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/sound';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  appliedDiscount: number;
  onCompleteOrder: (address: string, courier: Courier) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  appliedDiscount,
  onCompleteOrder,
}) => {
  if (!isOpen) return null;

  const [address, setAddress] = useState('Moda Mah. Caferağa Sk. No: 12/A, Kadıköy / İstanbul');
  const [selectedCourier, setSelectedCourier] = useState<Courier>(INITIAL_COURIERS[0]);
  const [cardNumber, setCardNumber] = useState('4543 **** **** 2026');
  const [cardHolder, setCardHolder] = useState('GİZEM D. (SANAL DİJİTAL KART)');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const total = Math.max(0, subtotal - appliedDiscount);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    sound.playChaChing();

    // Trigger confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f97316', '#eab308', '#3b82f6', '#10b981']
    });

    setTimeout(() => {
      setIsSubmitting(false);
      onCompleteOrder(address, selectedCourier);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full p-5 shadow-2xl relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 p-1 cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-orange-100 text-orange-600 rounded-xl font-bold">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-extrabold text-base text-gray-900">Sanal Ödeme & Kurye Seçimi</h2>
            <p className="text-xs text-gray-500">Kredi kartınızdan 0 TL çekilecek, sanal kurye atanacak.</p>
          </div>
        </div>

        <form onSubmit={handleSubmitOrder} className="space-y-4">
          {/* Address Input */}
          <div>
            <label className="text-xs font-bold text-gray-800 flex items-center gap-1 mb-1">
              <MapPin className="w-3.5 h-3.5 text-orange-500" /> Teslimat Adresi (Canlı Kurye Rotası)
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-2.5 text-xs focus:border-orange-500 outline-none font-medium"
              required
            />
          </div>

          {/* Courier Selection */}
          <div>
            <label className="text-xs font-bold text-gray-800 flex items-center gap-1 mb-1.5">
              <Truck className="w-3.5 h-3.5 text-blue-500" /> Sanal Kuryenizi Seçin
            </label>
            <div className="space-y-2">
              {INITIAL_COURIERS.map((courier) => (
                <div
                  key={courier.name}
                  onClick={() => setSelectedCourier(courier)}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    selectedCourier.name === courier.name
                      ? 'border-orange-500 bg-orange-50/60 ring-2 ring-orange-200'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={courier.avatar}
                      alt={courier.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-orange-200"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-gray-900">{courier.name}</h4>
                      <p className="text-[10px] text-gray-500">
                        Araç: <strong className="uppercase">{courier.vehicle}</strong> · Puan: ★{courier.rating}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-orange-600 bg-white px-2 py-1 rounded border border-orange-200">
                    Ücretsiz
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Fake Card Details Box */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl p-3 text-xs space-y-2 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold flex items-center gap-1">
                <Lock className="w-3 h-3 text-emerald-400" /> Dopamind Güvenli Sanal Ödeme
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                0.00 TL Çekilecek
              </span>
            </div>

            <div className="space-y-1 font-mono">
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded p-1.5 text-xs font-bold tracking-widest text-amber-200 outline-none"
              />
              <input
                type="text"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded p-1 text-[11px] text-gray-300 outline-none"
              />
            </div>
          </div>

          {/* Guarantee Banner */}
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl p-2.5 text-[11px] font-semibold flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              Bu işlem tamamen hayalidir. Kartınızdan veya hesabınızdan ücret düşmez.
            </span>
          </div>

          {/* Submit Order Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-sm disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Sipariş Oluşturuluyor & Kurye Çağrılıyor...</span>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Siparişi Onayla & Canlı Kuryeyi Başlat</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
