import React, { useState } from 'react';
import { Search, ShoppingBag, Heart, Sparkles, Truck, Award, HelpCircle, Flame, RefreshCw } from 'lucide-react';
import { sound } from '../utils/sound';

interface HeaderProps {
  totalSaved: number;
  cartCount: number;
  favoriteCount: number;
  activeOrdersCount: number;
  onOpenCart: () => void;
  onOpenFavorites: () => void;
  onOpenOrders: () => void;
  onOpenWheel: () => void;
  onOpenTrendInfo: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  totalSaved,
  cartCount,
  favoriteCount,
  activeOrdersCount,
  onOpenCart,
  onOpenFavorites,
  onOpenOrders,
  onOpenWheel,
  onOpenTrendInfo,
  searchQuery,
  setSearchQuery,
}) => {
  const [showNotification, setShowNotification] = useState(true);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      {/* Top News & Dopamine Trend Banner */}
      {showNotification && (
        <div className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 text-white px-4 py-2 text-xs md:text-sm font-medium flex items-center justify-between">
          <div className="flex items-center gap-2 max-w-5xl mx-auto overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider text-amber-100 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-yellow-300" />
              Güney Kore Trendi
            </span>
            <span>
              <strong>Sıfır Harcama, %100 Dopamin!</strong> Borç yapmadan alışveriş heyecanını yaşayın, canlı kuryeyi haritada izleyin.
            </span>
            <button
              onClick={onOpenTrendInfo}
              className="underline hover:text-amber-100 transition-colors ml-2 font-semibold text-xs whitespace-nowrap cursor-pointer"
            >
              Haberin Detayı & Psychology nedir?
            </button>
          </div>
          <button
            onClick={() => setShowNotification(false)}
            className="text-white/80 hover:text-white text-xs px-2 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setSearchQuery('');
            }}
            className="flex items-center gap-1.5 group"
          >
            <div className="bg-gradient-to-tr from-orange-600 to-amber-500 text-white p-2 rounded-xl shadow-md group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-2xl tracking-tight text-gray-900 font-sans">
                  dopa<span className="text-orange-500">mind</span>
                </span>
                <span className="text-[10px] bg-orange-100 text-orange-700 font-bold px-1.5 py-0.5 rounded border border-orange-200">
                  SIM
                </span>
              </div>
              <p className="text-[10px] text-gray-500 font-medium -mt-1">
                Trendyol Vibe · Hayali Alışveriş
              </p>
            </div>
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl hidden md:block">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Aradığınız ürün, marka veya kategoriyi yazınız (örn: Siyah Ceket, Altın Kolye)..."
              className="w-full bg-gray-100 border border-transparent focus:border-orange-500 focus:bg-white rounded-lg pl-10 pr-24 py-2.5 text-sm transition-all outline-none"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-20 top-3 text-xs text-gray-400 hover:text-gray-600"
              >
                Temizle
              </button>
            )}
            <button className="absolute right-1 top-1 bottom-1 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-md text-xs font-semibold transition-colors flex items-center gap-1">
              Bul
            </button>
          </div>
          {/* Quick Search Chips */}
          <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 overflow-x-auto no-scrollbar">
            <span className="text-gray-400 font-medium">Popüler:</span>
            {['Siyah Ceket', '24K Kolye', 'Gece Elbisesi', 'Omuz Çantası', 'Gümüş Yüzük'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="hover:text-orange-600 hover:underline cursor-pointer transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* User Stats & Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Dopamine Savings Pill */}
          <div
            onClick={onOpenWheel}
            className="hidden sm:flex flex-col items-end bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3 py-1.5 rounded-lg cursor-pointer transition-all hover:shadow-sm"
            title="Dopamin Şans Çarkını Çevir"
          >
            <div className="flex items-center gap-1 text-xs font-bold text-amber-900">
              <Flame className="w-3.5 h-3.5 text-orange-500 animate-bounce" />
              <span>Cebinizde Kalan:</span>
            </div>
            <span className="text-sm font-extrabold text-orange-600">
              ₺{totalSaved.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
            </span>
          </div>

          {/* Spin Wheel Button */}
          <button
            onClick={() => {
              sound.playAddToCart();
              onOpenWheel();
            }}
            className="flex flex-col items-center justify-center p-2 text-gray-700 hover:text-orange-500 rounded-lg hover:bg-orange-50 transition-colors relative cursor-pointer"
            title="Dopamin Çarkını Çevir"
          >
            <Award className="w-5 h-5 text-amber-500 animate-spin-slow" />
            <span className="text-[11px] font-medium hidden lg:inline">Çarkı Çevir</span>
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[9px] font-bold px-1 rounded-full animate-pulse">
              Hediye
            </span>
          </button>

          {/* Favorites */}
          <button
            onClick={onOpenFavorites}
            className="flex flex-col items-center justify-center p-2 text-gray-700 hover:text-orange-500 rounded-lg hover:bg-orange-50 transition-colors relative cursor-pointer"
            title="Favorilerim"
          >
            <Heart className="w-5 h-5" />
            <span className="text-[11px] font-medium hidden lg:inline">Favorilerim</span>
            {favoriteCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {favoriteCount}
              </span>
            )}
          </button>

          {/* Active Orders / Canlı Kurye Takip */}
          <button
            onClick={onOpenOrders}
            className="flex flex-col items-center justify-center p-2 text-gray-700 hover:text-orange-500 rounded-lg hover:bg-orange-50 transition-colors relative cursor-pointer"
            title="Siparişlerim & Canlı Kurye Takip"
          >
            <Truck className="w-5 h-5 text-blue-600" />
            <span className="text-[11px] font-medium hidden lg:inline">Kargo Takip</span>
            {activeOrdersCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full animate-pulse flex items-center gap-0.5">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                {activeOrdersCount}
              </span>
            )}
          </button>

          {/* Cart */}
          <button
            onClick={() => {
              sound.playAddToCart();
              onOpenCart();
            }}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-3.5 py-2 rounded-lg font-bold text-sm shadow-sm hover:shadow transition-all cursor-pointer relative"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="hidden sm:inline">Sepetim</span>
            <span className="bg-white text-orange-600 rounded-full px-2 py-0.5 text-xs font-black">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Search Input */}
      <div className="px-4 pb-3 md:hidden">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Marka, kıyafet veya takı ara..."
            className="w-full bg-gray-100 border border-transparent focus:border-orange-500 focus:bg-white rounded-lg pl-9 pr-8 py-2 text-xs transition-all outline-none"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-2 text-xs text-gray-400"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
