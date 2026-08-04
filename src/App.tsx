import React, { useState, useMemo } from 'react';
import { Product, Category, CartItem, Order, Courier, Review, OrderStatus } from './types';
import { INITIAL_PRODUCTS, INITIAL_COURIERS } from './data/products';
import { Header } from './components/Header';
import { CategoryBar } from './components/CategoryBar';
import { BannerSlider } from './components/BannerSlider';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { DeliveryTracker } from './components/DeliveryTracker';
import { DopamineWheelModal } from './components/DopamineWheelModal';
import { TrendInfoModal } from './components/TrendInfoModal';
import { MyOrdersModal } from './components/MyOrdersModal';
import { StatsBanner } from './components/StatsBanner';
import { Sparkles, ShoppingBag, Heart, Flame, Filter, RefreshCw, CheckCircle, Truck } from 'lucide-react';
import { sound } from './utils/sound';

export default function App() {
  // Main state
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<Category>('hepsi');
  const [searchQuery, setSearchQuery] = useState('');
  const [favoriteIds, setFavoriteIds] = useState<string[]>(['prod-1', 'prod-2']);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: INITIAL_PRODUCTS[0],
      selectedSize: 'S',
      selectedColor: 'Siyah',
      quantity: 1
    },
    {
      product: INITIAL_PRODUCTS[1],
      selectedSize: 'Standart (45cm)',
      selectedColor: 'Altın',
      quantity: 1
    }
  ]);

  // Orders History
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'ORD-98214',
      date: 'Bugün, 14:00',
      items: [
        {
          product: INITIAL_PRODUCTS[0],
          selectedSize: 'M',
          selectedColor: 'Siyah',
          quantity: 1
        }
      ],
      totalSaved: 2899.90,
      fakePaidAmount: 0,
      courier: INITIAL_COURIERS[0],
      status: 'yolda',
      deliveryAddress: 'Moda Mah. Caferağa Sk. No: 12/A, Kadıköy / İstanbul',
      estimatedSecondsRemaining: 45,
      logs: [
        { timestamp: '14:00', message: 'Siparişiniz satıcı tarafından paketlendi.' },
        { timestamp: '14:01', message: `${INITIAL_COURIERS[0].name} paketi teslim aldı.` }
      ]
    }
  ]);

  // Modals state
  const [selectedProductDetail, setSelectedProductDetail] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutDiscount, setCheckoutDiscount] = useState(0);
  const [isWheelOpen, setIsWheelOpen] = useState(false);
  const [isTrendInfoOpen, setIsTrendInfoOpen] = useState(false);
  const [isOrdersModalOpen, setIsOrdersModalOpen] = useState(false);
  const [activeTrackingOrder, setActiveTrackingOrder] = useState<Order | null>(null);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Derived calculations
  const favoriteProducts = useMemo(() => {
    return products.filter((p) => favoriteIds.includes(p.id));
  }, [products, favoriteIds]);

  const filteredProducts = useMemo(() => {
    let list = products;

    if (showFavoritesOnly) {
      list = list.filter((p) => favoriteIds.includes(p.id));
    } else if (selectedCategory !== 'hepsi') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    return list;
  }, [products, selectedCategory, searchQuery, favoriteIds, showFavoritesOnly]);

  // Total saved metric calculation
  const totalSavedToday = useMemo(() => {
    const ordersSaved = orders.reduce((sum, o) => sum + o.totalSaved, 0);
    const cartSaved = cartItems.reduce(
      (sum, item) => sum + (item.product.originalPrice - item.product.price) * item.quantity,
      0
    );
    return ordersSaved + cartSaved + 4850; // base offset for fun
  }, [orders, cartItems]);

  const totalItemsBought = useMemo(() => {
    return orders.reduce((sum, o) => sum + o.items.reduce((s, it) => s + it.quantity, 0), 0);
  }, [orders]);

  // Handlers
  const handleToggleFavorite = (product: Product) => {
    setFavoriteIds((prev) =>
      prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );
  };

  const handleAddToCart = (product: Product, size: string, color: string) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (it) => it.product.id === product.id && it.selectedSize === size && it.selectedColor === color
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { product, selectedSize: size, selectedColor: color, quantity: 1 }];
    });
    setSelectedProductDetail(null);
    setIsCartOpen(true);
  };

  const handleQuickAddToCart = (product: Product) => {
    handleAddToCart(product, product.sizes[0] || 'M', product.colors[0]?.name || 'Varsayılan');
  };

  const handleUpdateCartQuantity = (productId: string, size: string, color: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((it) => {
          if (it.product.id === productId && it.selectedSize === size && it.selectedColor === color) {
            const newQty = it.quantity + delta;
            return newQty > 0 ? { ...it, quantity: newQty } : null;
          }
          return it;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (productId: string, size: string, color: string) => {
    setCartItems((prev) =>
      prev.filter(
        (it) => !(it.product.id === productId && it.selectedSize === size && it.selectedColor === color)
      )
    );
  };

  const handleAddReview = (productId: string, newReview: Review) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id === productId) {
          return {
            ...p,
            reviews: [newReview, ...p.reviews],
            reviewCount: p.reviewCount + 1
          };
        }
        return p;
      })
    );
  };

  const handleProceedToCheckout = (discountAmount: number) => {
    setCheckoutDiscount(discountAmount);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleCompleteOrder = (address: string, courier: Courier) => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const originalSubtotal = cartItems.reduce(
      (sum, item) => sum + item.product.originalPrice * item.quantity,
      0
    );

    const newOrder: Order = {
      id: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
      date: 'Bugün, ' + new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
      items: [...cartItems],
      totalSaved: (originalSubtotal - subtotal) + checkoutDiscount,
      fakePaidAmount: 0,
      courier: courier,
      status: 'hazirlaniyor',
      deliveryAddress: address,
      estimatedSecondsRemaining: 45,
      logs: [
        { timestamp: 'Şimdi', message: 'Sipariş alındı. Sürücü kargoyu teslim alıyor.' }
      ]
    };

    setOrders((prev) => [newOrder, ...prev]);
    setCartItems([]);
    setIsCheckoutOpen(false);
    setActiveTrackingOrder(newOrder);
  };

  const handleUpdateOrderStatus = (orderId: string, newStatus: OrderStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans text-gray-900 selection:bg-orange-500 selection:text-white">
      {/* Header */}
      <Header
        totalSaved={totalSavedToday}
        cartCount={cartItems.reduce((sum, i) => sum + i.quantity, 0)}
        favoriteCount={favoriteIds.length}
        activeOrdersCount={orders.filter((o) => o.status !== 'teslim_edildi').length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenFavorites={() => setShowFavoritesOnly(!showFavoritesOnly)}
        onOpenOrders={() => setIsOrdersModalOpen(true)}
        onOpenWheel={() => setIsWheelOpen(true)}
        onOpenTrendInfo={() => setIsTrendInfoOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Categories Bar */}
      <CategoryBar
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setShowFavoritesOnly(false);
          setSelectedCategory(cat);
        }}
      />

      {/* Main Content Body */}
      <main className="flex-1 pb-16">
        {/* Banner Section */}
        <BannerSlider
          onOpenWheel={() => setIsWheelOpen(true)}
          onOpenTrendInfo={() => setIsTrendInfoOpen(true)}
        />

        {/* Live Dopamine Stats Counter */}
        <div className="my-4">
          <StatsBanner totalSaved={totalSavedToday} totalItemsBought={totalItemsBought} />
        </div>

        {/* Products Grid Header */}
        <div className="max-w-7xl mx-auto px-4 mt-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <h1 className="text-lg md:text-xl font-extrabold text-gray-900">
                {showFavoritesOnly
                  ? 'Favori Ürünleriniz'
                  : selectedCategory === 'hepsi'
                  ? 'Trend Kıyafet & Takı Koleksiyonu'
                  : `${selectedCategory.toUpperCase()} Ürünleri`}
              </h1>
              <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-0.5 rounded-full border border-orange-200">
                {filteredProducts.length} Parça Ürün
              </span>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={() => setShowFavoritesOnly(false)}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  !showFavoritesOnly ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                Tüm Kataloğu Göster
              </button>
              <button
                onClick={() => setShowFavoritesOnly(true)}
                className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 transition-all cursor-pointer ${
                  showFavoritesOnly ? 'bg-red-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Favorilerim ({favoriteIds.length})</span>
              </button>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 shadow-2xs my-4 space-y-3">
              <ShoppingBag className="w-16 h-16 mx-auto text-gray-300" />
              <p className="text-base font-bold text-gray-700">Aramanıza uygun ürün bulunamadı!</p>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Filtrelerinizi değiştirebilir veya arama terimini temizleyebilirsiniz.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('hepsi');
                  setShowFavoritesOnly(false);
                }}
                className="bg-orange-500 text-white font-bold px-4 py-2 rounded-xl text-xs hover:bg-orange-600 cursor-pointer"
              >
                Filtreleri Temizle
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isFavorite={favoriteIds.includes(product.id)}
                  onToggleFavorite={handleToggleFavorite}
                  onOpenDetail={(p) => setSelectedProductDetail(p)}
                  onQuickAddToCart={handleQuickAddToCart}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 px-4 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <p className="font-extrabold text-sm text-gray-900">
              dopa<span className="text-orange-500">mind</span> · Trendyol Tarzı Hayali Alışveriş Simülatörü
            </p>
            <p className="max-w-md">
              Güney Kore'deki Z kuşağı "dopamin e-ticaret siteleri" konseptinden esinlenilmiştir. Gerçek ürün siparişi veya fatura oluşturmaz.
            </p>
          </div>
          <div className="flex items-center gap-4 font-bold text-gray-700">
            <button onClick={() => setIsTrendInfoOpen(true)} className="hover:text-orange-600 underline cursor-pointer">
              Güney Kore Akımı Hakkında
            </button>
            <button onClick={() => setIsWheelOpen(true)} className="hover:text-orange-600 underline cursor-pointer">
              Şans Çarkı
            </button>
            <button onClick={() => setIsOrdersModalOpen(true)} className="hover:text-orange-600 underline cursor-pointer">
              Sipariş Geçmişi
            </button>
          </div>
        </div>
      </footer>

      {/* Modals & Drawers */}
      <ProductDetailModal
        product={selectedProductDetail}
        onClose={() => setSelectedProductDetail(null)}
        isFavorite={selectedProductDetail ? favoriteIds.includes(selectedProductDetail.id) : false}
        onToggleFavorite={handleToggleFavorite}
        onAddToCart={handleAddToCart}
        onAddReview={handleAddReview}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        appliedDiscount={checkoutDiscount}
        onCompleteOrder={handleCompleteOrder}
      />

      <DeliveryTracker
        order={activeTrackingOrder}
        onClose={() => setActiveTrackingOrder(null)}
        onUpdateOrderStatus={handleUpdateOrderStatus}
      />

      <DopamineWheelModal
        isOpen={isWheelOpen}
        onClose={() => setIsWheelOpen(false)}
        onWinCoupon={(code, desc) => {
          // Open cart or show notification
        }}
      />

      <TrendInfoModal
        isOpen={isTrendInfoOpen}
        onClose={() => setIsTrendInfoOpen(false)}
      />

      <MyOrdersModal
        isOpen={isOrdersModalOpen}
        onClose={() => setIsOrdersModalOpen(false)}
        orders={orders}
        onSelectOrderToTrack={(ord) => {
          setIsOrdersModalOpen(false);
          setActiveTrackingOrder(ord);
        }}
      />
    </div>
  );
}
