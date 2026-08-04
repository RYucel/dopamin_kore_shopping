import React, { useState } from 'react';
import { Product, Review } from '../types';
import { X, Star, Heart, ShoppingBag, Truck, ShieldCheck, Eye, Sparkles, MessageCircle, ThumbsUp, CheckCircle } from 'lucide-react';
import { sound } from '../utils/sound';
import { CountdownTimer } from './CountdownTimer';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (p: Product) => void;
  onAddToCart: (p: Product, size: string, color: string) => void;
  onAddReview: (productId: string, newReview: Review) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  isFavorite,
  onToggleFavorite,
  onAddToCart,
  onAddReview,
}) => {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Varsayılan');
  
  // User Review State
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [userComment, setUserComment] = useState('');
  const [userRating, setUserRating] = useState(5);
  const [userName, setUserName] = useState('');

  // Simulated live viewers
  const liveViewers = 180 + Math.floor(product.id.charCodeAt(product.id.length - 1) * 3) % 150;

  const handleAddToCart = () => {
    sound.playAddToCart();
    onAddToCart(product, selectedSize, selectedColor);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userComment.trim()) return;

    const newRev: Review = {
      id: `rev-user-${Date.now()}`,
      userName: userName.trim() || 'Dopamin Sever',
      rating: userRating,
      date: 'Şimdi',
      comment: userComment,
      verifiedPurchase: true,
      likes: 1
    };

    onAddReview(product.id, newRev);
    setUserComment('');
    setShowReviewForm(false);
    sound.playNotification();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Images */}
        <div className="md:w-1/2 p-4 md:p-6 bg-gray-50 flex flex-col items-center justify-start border-b md:border-b-0 md:border-r border-gray-200">
          <div className="w-full aspect-3/4 rounded-xl overflow-hidden bg-white shadow-xs relative mb-3">
            <img
              src={selectedImage || product.images[0]}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {product.discountPercentage > 0 && (
              <span className="absolute top-3 left-3 bg-red-600 text-white font-extrabold text-xs px-2.5 py-1 rounded-md shadow-xs">
                -%{product.discountPercentage} Flaş İndirim
              </span>
            )}
          </div>

          {/* Gallery Thumbnails */}
          <div className="flex gap-2 w-full overflow-x-auto pb-1">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-20 rounded-lg overflow-hidden border-2 cursor-pointer shrink-0 transition-all ${
                  selectedImage === img ? 'border-orange-500 ring-2 ring-orange-200' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="Thumbnail" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Live Viewers Indicator */}
          <div className="mt-4 w-full bg-amber-50 border border-amber-200 text-amber-900 rounded-lg p-2.5 text-xs font-semibold flex items-center justify-center gap-2">
            <Eye className="w-4 h-4 text-orange-500 animate-pulse" />
            <span>Şu an <strong>{liveViewers} kişi</strong> bu ürünü inceliyor!</span>
          </div>
        </div>

        {/* Right Column: Product Details & Reviews */}
        <div className="md:w-1/2 p-4 md:p-6 flex flex-col justify-between">
          <div>
            {/* Brand & Badges */}
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-extrabold text-orange-600 uppercase tracking-wide">{product.brand}</span>
              <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-0.5 rounded border border-orange-200">
                Sanal Milla
              </span>
            </div>

            <h1 className="text-base md:text-lg font-extrabold text-gray-900 leading-snug mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4 text-xs">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-bold text-gray-800">{product.rating}</span>
              <span className="text-gray-400 font-medium">({product.reviewCount} Değerlendirme)</span>
            </div>

            {/* Scarcity Countdown Timer */}
            <div className="mb-3">
              <CountdownTimer productId={product.id} />
            </div>

            {/* Price Box */}
            <div className="bg-orange-50/60 border border-orange-100 rounded-xl p-3 mb-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-500 font-medium block">Dopamin İndirimli Fiyatı</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-orange-600">
                    ₺{product.price.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
                  </span>
                  <span className="text-xs text-gray-400 line-through">
                    ₺{product.originalPrice.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="bg-green-100 text-green-800 text-[11px] font-extrabold px-2 py-1 rounded">
                  Ödenecek: 0 TL
                </span>
                <span className="text-[10px] text-gray-500 block mt-0.5">Sanal Kart ile Borçsuz</span>
              </div>
            </div>

            {/* Sizes Selection */}
            {product.sizes.length > 0 && (
              <div className="mb-4">
                <label className="text-xs font-bold text-gray-800 block mb-1.5">
                  Beden Seçin: <span className="text-orange-600 font-extrabold">{selectedSize}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                        selectedSize === sz
                          ? 'bg-orange-500 text-white border-orange-500 shadow-xs'
                          : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Colors Selection */}
            {product.colors.length > 0 && (
              <div className="mb-4">
                <label className="text-xs font-bold text-gray-800 block mb-1.5">
                  Renk Seçin: <span className="text-orange-600 font-extrabold">{selectedColor}</span>
                </label>
                <div className="flex gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border cursor-pointer transition-all ${
                        selectedColor === c.name
                          ? 'border-orange-500 bg-orange-50 text-orange-700 font-bold'
                          : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span className="w-3 h-3 rounded-full border border-gray-300" style={{ backgroundColor: c.hex }} />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Fabric & Description */}
            <div className="mb-4 text-xs text-gray-600 space-y-1 bg-gray-50 p-3 rounded-lg border border-gray-100">
              <p><strong>Açıklama:</strong> {product.description}</p>
              {product.fabricInfo && <p><strong>Kumaş / Materyal:</strong> {product.fabricInfo}</p>}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 border-t border-gray-200 flex items-center gap-3">
            <button
              onClick={() => onToggleFavorite(product)}
              className={`p-3 rounded-xl border transition-colors cursor-pointer ${
                isFavorite
                  ? 'bg-red-50 text-red-500 border-red-200'
                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
              }`}
              title="Favori"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={handleAddToCart}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Sepete Ekle & Dopamini Yaşa (0 TL)</span>
            </button>
          </div>

          {/* User Reviews Accordion / List */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-extrabold text-gray-900 flex items-center gap-1">
                <MessageCircle className="w-4 h-4 text-orange-500" />
                Müşteri Yorumları ({product.reviews.length})
              </h3>
              <button
                onClick={() => setShowReviewForm(!showReviewForm)}
                className="text-xs text-orange-600 font-bold hover:underline cursor-pointer"
              >
                {showReviewForm ? 'İptal' : '+ Yorum Yaz (Dopamin)'}
              </button>
            </div>

            {/* Review Form */}
            {showReviewForm && (
              <form onSubmit={handleReviewSubmit} className="bg-orange-50/50 p-3 rounded-xl border border-orange-200 mb-3 text-xs space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Adınız veya Rumuz (ör: Zeynep K.)"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="flex-1 p-2 bg-white border border-gray-200 rounded-lg text-xs"
                  />
                  <select
                    value={userRating}
                    onChange={(e) => setUserRating(Number(e.target.value))}
                    className="p-2 bg-white border border-gray-200 rounded-lg text-xs font-bold"
                  >
                    <option value={5}>5 ★★★★★</option>
                    <option value={4}>4 ★★★★</option>
                    <option value={3}>3 ★★★</option>
                  </select>
                </div>
                <textarea
                  placeholder="Ürün hakkındaki yorumunuzu yazın (örn: Sanal kargo çok hızlıydı, harika hissettirdi!)..."
                  value={userComment}
                  onChange={(e) => setUserComment(e.target.value)}
                  className="w-full p-2 bg-white border border-gray-200 rounded-lg text-xs h-16 resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white font-bold py-1.5 rounded-lg text-xs hover:bg-orange-600 transition-colors cursor-pointer"
                >
                  Yorumu Yayınla
                </button>
              </form>
            )}

            {/* Review List */}
            <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
              {product.reviews.length === 0 ? (
                <p className="text-xs text-gray-400 italic">Henüz yorum yapılmamış. İlk yorumu siz yazın!</p>
              ) : (
                product.reviews.map((rev) => (
                  <div key={rev.id} className="bg-gray-50 p-2.5 rounded-lg text-xs border border-gray-100">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5 font-bold text-gray-800">
                        <span>{rev.userName}</span>
                        {rev.verifiedPurchase && (
                          <span className="text-[10px] text-emerald-600 flex items-center gap-0.5">
                            <CheckCircle className="w-3 h-3" /> Doğrulanmış Sanal Alıcı
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-gray-400">{rev.date}</span>
                    </div>
                    <div className="flex text-amber-400 mb-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700">{rev.comment}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
