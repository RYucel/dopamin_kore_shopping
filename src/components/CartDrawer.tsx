import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Tag, ShoppingBag, ArrowRight, ShieldCheck, Sparkles, Plus, Minus, AlertCircle } from 'lucide-react';
import { sound } from '../utils/sound';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, size: string, color: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string, color: string) => void;
  onProceedToCheckout: (appliedDiscountAmount: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponMessage, setCouponMessage] = useState<string | null>(null);

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const originalSubtotal = items.reduce((sum, item) => sum + item.product.originalPrice * item.quantity, 0);
  const discountAmount = subtotal * (discountPercent / 100);
  const finalTotal = subtotal - discountAmount;
  const totalSaved = (originalSubtotal - subtotal) + discountAmount;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'DOPAMIN90' || code === 'SIFIRBORC' || code === 'KORE2026' || code === 'TREND100') {
      sound.playChaChing();
      setDiscountPercent(90);
      setCouponMessage('🎉 %90 Dopamin İndirimi Uygulandı!');
    } else if (code === 'TREN10') {
      sound.playChaChing();
      setDiscountPercent(10);
      setCouponMessage('🎉 %10 Ekstra İndirim!');
    } else {
      setCouponMessage('❌ Geçersiz Kod. "DOPAMIN90" deneyin!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
      <div className="bg-white w-full max-w-md h-full flex flex-col justify-between shadow-2xl relative animate-slide-left">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-orange-50/50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-orange-600" />
            <h2 className="font-extrabold text-base text-gray-900">Sanal Sepetim ({items.length})</h2>
          </div>
          <button onClick={onClose} className="p-2 text-gray-500 hover:text-gray-900 cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Dopamine Banner in Cart */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl p-3 text-xs flex items-center gap-2 shadow-xs">
            <Sparkles className="w-5 h-5 text-yellow-200 shrink-0 animate-spin-slow" />
            <div>
              <p className="font-bold">Sıfır Harcama Güvencesi</p>
              <p className="text-orange-100 text-[11px]">Sipariş tamamlandığında kartınızdan 0 TL çekilir, kuryeniz hemen yola çıkar.</p>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-12 text-gray-400 space-y-3">
              <ShoppingBag className="w-16 h-16 mx-auto text-gray-300" />
              <p className="font-bold text-gray-600 text-sm">Sepetiniz boş!</p>
              <p className="text-xs max-w-xs mx-auto">Ürünlere göz atın, sepete ekleyin ve borçlanmadan alışveriş keyfini yaşayın.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item, idx) => (
                <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}-${idx}`} className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex gap-3">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-18 h-22 object-cover rounded-lg shrink-0 border border-gray-200"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <span className="text-xs font-bold text-gray-900 line-clamp-1">{item.product.brand}</span>
                        <button
                          onClick={() => onRemoveItem(item.product.id, item.selectedSize, item.selectedColor)}
                          className="text-gray-400 hover:text-red-500 text-xs cursor-pointer p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <h4 className="text-xs text-gray-700 line-clamp-1">{item.product.name}</h4>
                      <div className="text-[10px] text-gray-500 mt-0.5 space-x-2">
                        <span>Beden: <strong>{item.selectedSize}</strong></span>
                        <span>Renk: <strong>{item.selectedColor}</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-gray-300 rounded-lg bg-white overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, item.selectedColor, -1)}
                          className="px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-100 cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, item.selectedColor, 1)}
                          className="px-2 py-0.5 text-xs text-gray-600 hover:bg-gray-100 cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <span className="text-xs font-extrabold text-orange-600">
                          ₺{(item.product.price * item.quantity).toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Promo Coupon Code Form */}
              <form onSubmit={handleApplyCoupon} className="pt-2">
                <label className="text-xs font-bold text-gray-700 block mb-1">
                  Kupon Kodu Girin (Dönemsel Dopamin Fırsatı)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Kod giriniz (örn: DOPAMIN90)"
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-1.5 text-xs focus:border-orange-500 outline-none uppercase"
                  />
                  <button
                    type="submit"
                    className="bg-gray-900 hover:bg-black text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                  >
                    Uygula
                  </button>
                </div>
                {couponMessage && (
                  <p className="text-[11px] font-bold mt-1 text-orange-600">{couponMessage}</p>
                )}
              </form>
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout Button */}
        {items.length > 0 && (
          <div className="p-4 border-t border-gray-200 bg-gray-50 space-y-2">
            <div className="space-y-1 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Ara Toplam:</span>
                <span>₺{subtotal.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-orange-600 font-bold">
                  <span>Kupon İndirimi (%{discountPercent}):</span>
                  <span>-₺{discountAmount.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</span>
                </div>
              )}
              <div className="flex justify-between text-emerald-600 font-bold">
                <span>Sanal Kargo:</span>
                <span>ÜCRETSİZ (0 TL)</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500 font-semibold border-t border-gray-200 pt-1">
                <span>Cebinizde Kalan Toplam Tasarruf:</span>
                <span className="text-emerald-700 font-extrabold">₺{totalSaved.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between text-sm font-black text-gray-900 border-t border-gray-200 pt-1">
                <span>Çekilecek Ücret (Sanal):</span>
                <span className="text-orange-600">0 TL</span>
              </div>
            </div>

            <button
              onClick={() => {
                sound.playChaChing();
                onProceedToCheckout(discountAmount);
              }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              <span>Hayali Siparişi Tamamla (Kurye Başlat)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
