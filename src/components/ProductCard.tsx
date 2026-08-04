import React from 'react';
import { Product } from '../types';
import { Heart, Star, ShoppingBag, Eye, Zap, Flame, Check } from 'lucide-react';
import { sound } from '../utils/sound';
import { CountdownTimer } from './CountdownTimer';

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (p: Product) => void;
  onOpenDetail: (p: Product) => void;
  onQuickAddToCart: (p: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isFavorite,
  onToggleFavorite,
  onOpenDetail,
  onQuickAddToCart,
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-2xs hover:shadow-md transition-all group flex flex-col justify-between relative">
      {/* Top Image Section */}
      <div className="relative aspect-3/4 overflow-hidden bg-gray-100 cursor-pointer" onClick={() => onOpenDetail(product)}>
        <img
          src={product.images[0]}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            sound.playAddToCart();
            onToggleFavorite(product);
          }}
          className={`absolute top-2 right-2 p-2 rounded-full shadow-md backdrop-blur-md transition-all cursor-pointer ${
            isFavorite
              ? 'bg-red-500 text-white'
              : 'bg-white/80 hover:bg-white text-gray-600 hover:text-red-500'
          }`}
          title={isFavorite ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        {/* Badges Overlay */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
          {product.isFlashDeal && (
            <span className="bg-gradient-to-r from-orange-600 to-amber-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
              <Zap className="w-3 h-3 fill-yellow-300 text-yellow-300" />
              Flaş Fırsat
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-blue-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow-xs">
              Çok Satan
            </span>
          )}
          {product.discountPercentage > 0 && (
            <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs">
              -%{product.discountPercentage}
            </span>
          )}
        </div>

        {/* Stock Warning */}
        {product.stockCount <= 5 && (
          <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold py-1 px-2 rounded text-center">
            🔥 Son {product.stockCount} Ürün (Sanal Stok)
          </div>
        )}
      </div>

      {/* Card Info Section */}
      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Title */}
          <div className="flex items-center gap-1 mb-0.5">
            <span className="text-xs font-bold text-gray-900 font-sans">{product.brand}</span>
            <span className="text-[10px] bg-orange-50 text-orange-600 font-bold px-1 rounded">
              Milla
            </span>
          </div>
          <h3
            onClick={() => onOpenDetail(product)}
            className="text-xs font-medium text-gray-700 line-clamp-2 hover:text-orange-600 cursor-pointer mb-1.5 transition-colors"
          >
            {product.name}
          </h3>

          {/* Star Rating & Review count */}
          <div className="flex items-center gap-1.5 mb-2">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="text-xs font-bold text-gray-800 ml-0.5">{product.rating}</span>
            </div>
            <span className="text-[11px] text-gray-400 font-medium">({product.reviewCount})</span>
          </div>

          {/* Colors Dots */}
          <div className="flex items-center gap-1 mb-1">
            {product.colors.map((c, i) => (
              <span
                key={i}
                className="w-2.5 h-2.5 rounded-full border border-gray-300"
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>

          {/* Scarcity Countdown Timer */}
          <CountdownTimer productId={product.id} />
        </div>

        {/* Price & Action */}
        <div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-sm font-extrabold text-orange-600">
              ₺{product.price.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-gray-400 line-through">
                ₺{product.originalPrice.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
              </span>
            )}
          </div>

          {/* Quick Add To Cart Button */}
          <button
            onClick={() => {
              sound.playAddToCart();
              onQuickAddToCart(product);
            }}
            className="w-full bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white border border-orange-200 hover:border-orange-500 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Sepete Ekle (0 TL)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
