export type Category = 'hepsi' | 'kadin-giyim' | 'erkek-giyim' | 'taki-aksesuar' | 'ayakkabi-canta' | 'trend-kombinler';

export interface Review {
  id: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  verifiedPurchase: boolean;
  likes: number;
  userAvatar?: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  rating: number;
  reviewCount: number;
  images: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  description: string;
  fabricInfo?: string;
  badges: string[];
  inStock: boolean;
  stockCount: number;
  reviews: Review[];
  isBestSeller?: boolean;
  isFlashDeal?: boolean;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface Courier {
  name: string;
  vehicle: 'motor' | 'scooter' | 'drone' | 'bisiklet';
  avatar: string;
  rating: number;
  phone: string;
  plate: string;
}

export type OrderStatus = 'hazirlaniyor' | 'yolda' | 'yaklasti' | 'teslim_edildi';

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  totalSaved: number;
  fakePaidAmount: number;
  courier: Courier;
  status: OrderStatus;
  deliveryAddress: string;
  estimatedSecondsRemaining: number;
  logs: { timestamp: string; message: string; icon?: string }[];
}
