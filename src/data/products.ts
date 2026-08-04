import { Product } from '../types';

// Base product collection to seed 105+ realistic products
const BASE_PRODUCTS: Product[] = [
  // -------------------------------------------------------------
  // KADIN GIYIM (25+ Products)
  // -------------------------------------------------------------
  {
    id: 'prod-1',
    name: 'Siyah Oversize Deri Ceket & Trend Sokak Stili Kombini',
    brand: 'Milla Dopamind',
    category: 'kadin-giyim',
    price: 1299.90,
    originalPrice: 2899.90,
    discountPercentage: 55,
    rating: 4.9,
    reviewCount: 342,
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Siyah', hex: '#111827' },
      { name: 'Koyu Kahve', hex: '#451a03' }
    ],
    description: 'Yumuşak dokulu suni deri, kruvaze kapama, geniş yaka detaylı oversize kadın ceket. Z kuşağının favori sokak kombini parçası.',
    fabricInfo: '%100 Viskoz Üzeri PU Kaplama, Astar: %100 Polyester',
    badges: ['Çok Satan', 'Sanal Hızlı Kargo', 'Flaş İndirim'],
    inStock: true,
    stockCount: 4,
    isBestSeller: true,
    isFlashDeal: true,
    reviews: [
      {
        id: 'rev-101',
        userName: 'Elif S.',
        rating: 5,
        date: 'Bugün, 14:22',
        comment: 'Aynada duruşu efsane! Sanal kargo 2 dakikada kapıma geldi. Kartımdan 1 kuruş bile çıkmadı, tam aradığım dopamin patlaması!',
        verifiedPurchase: true,
        likes: 42,
        userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
      }
    ]
  },
  {
    id: 'prod-3',
    name: 'Bordo Drape Detaylı Saten Gece Elbisesi',
    brand: 'Noche Couture',
    category: 'kadin-giyim',
    price: 1899.00,
    originalPrice: 4200.00,
    discountPercentage: 54,
    rating: 4.8,
    reviewCount: 189,
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['34', '36', '38', '40'],
    colors: [
      { name: 'Bordo', hex: '#881337' },
      { name: 'Zümrüt Yeşili', hex: '#064e3b' },
      { name: 'Gece Siyahı', hex: '#0f172a' }
    ],
    description: 'İthal ipek dokulu saten kumaş, yırtmaçlı ve sırt dekolte detaylı şık davet elbisesi.',
    fabricInfo: '%95 İpek Saten, %5 Likra',
    badges: ['Özel Koleksiyon', 'Efsane Cuma Fırsatı'],
    inStock: true,
    stockCount: 3,
    isBestSeller: false,
    isFlashDeal: true,
    reviews: [
      {
        id: 'rev-301',
        userName: 'Merve B.',
        rating: 5,
        date: 'Dün, 23:40',
        comment: 'Gece saat 2 krizlerinde kredi kartını patlatmak yerine bu sitede sepete atmak hayatımı kurtardı haha!',
        verifiedPurchase: true,
        likes: 54
      }
    ]
  },
  {
    id: 'prod-10',
    name: 'Krem V-Yaka Triko Kazak & Balon Kol Detaylı',
    brand: 'Mango Style VIP',
    category: 'kadin-giyim',
    price: 549.90,
    originalPrice: 1299.00,
    discountPercentage: 57,
    rating: 4.8,
    reviewCount: 412,
    images: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['S-M', 'L-XL'],
    colors: [
      { name: 'Krem', hex: '#fef3c7' },
      { name: 'Vizon', hex: '#d97706' },
      { name: 'Pudra Pembe', hex: '#fbcfe8' }
    ],
    description: 'Yumuşacık kaşmir dokulu triko iplik, modern balon kol kesimi ve dökümlü yaka yapısı ile kış günlerinin vazgeçilmezi.',
    fabricInfo: '%70 Akrilik, %30 Yün',
    badges: ['Trend Ürün', 'Yumuşak Doku'],
    inStock: true,
    stockCount: 14,
    isBestSeller: true,
    isFlashDeal: false,
    reviews: [
      { id: 'r10', userName: 'Melis K.', rating: 5, date: 'Dün', comment: 'Dokusunu ekran başında hissettim harika!', verifiedPurchase: true, likes: 18 }
    ]
  },
  {
    id: 'prod-11',
    name: 'Yüksek Bel Wide Leg Wide Denim Jean Pantolon',
    brand: 'Zara Street Wear',
    category: 'kadin-giyim',
    price: 799.00,
    originalPrice: 1899.00,
    discountPercentage: 58,
    rating: 4.9,
    reviewCount: 890,
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['34', '36', '38', '40', '42'],
    colors: [
      { name: 'Açık Mavi', hex: '#93c5fd' },
      { name: 'Koyu İndigo', hex: '#1e3a8a' },
      { name: 'Siyah Denim', hex: '#1f2937' }
    ],
    description: '%100 Pamuklu vintage yıkamalı dökümlü paça yüksek bel denim jean. Fiziği mükemmel gösterir.',
    fabricInfo: '%100 Pamuklu Kot Kumaş',
    badges: ['Çok Satan', 'Tüm Bedenler'],
    inStock: true,
    stockCount: 8,
    isBestSeller: true,
    isFlashDeal: true,
    reviews: []
  },
  {
    id: 'prod-12',
    name: 'Kroko Desenli Blazer Ceket & Şık Gold Düğmeli',
    brand: 'Massimo Couture',
    category: 'kadin-giyim',
    price: 1499.00,
    originalPrice: 3400.00,
    discountPercentage: 56,
    rating: 4.7,
    reviewCount: 175,
    images: [
      'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Gece Siyahı', hex: '#09090b' },
      { name: 'Aptal Kırmızı', hex: '#991b1b' }
    ],
    description: 'Vatkalı omuz yapısı, özel embossed kabartma doku, İtalyan kesim blazer.',
    fabricInfo: '%65 Dokuma Polyester, %35 Viskoz',
    badges: ['İtalyan Kesim', 'VIP Kalite'],
    inStock: true,
    stockCount: 3,
    isBestSeller: false,
    isFlashDeal: false,
    reviews: []
  },
  {
    id: 'prod-13',
    name: 'Çiçek Desenli Şifon Mini Yazlık Elbise',
    brand: 'Trendyol Milla',
    category: 'kadin-giyim',
    price: 429.90,
    originalPrice: 999.00,
    discountPercentage: 57,
    rating: 4.6,
    reviewCount: 520,
    images: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['34', '36', '38', '40'],
    colors: [
      { name: 'Çiçekli Pembe', hex: '#f472b6' },
      { name: 'Çiçekli Mavi', hex: '#38bdf8' }
    ],
    description: 'Astarlı hafif şifon kumaş, belden büzgülü neşeli yaz elbisesi.',
    fabricInfo: '%100 İthal Şifon',
    badges: ['Flaş Fırsat', 'Yaz Trendi'],
    inStock: true,
    stockCount: 19,
    isBestSeller: false,
    isFlashDeal: true,
    reviews: []
  },
  {
    id: 'prod-14',
    name: 'Saten Büstiyer & Yüksek Bel Şort İkili Takım',
    brand: 'Victoria Dopamind',
    category: 'kadin-giyim',
    price: 689.00,
    originalPrice: 1599.00,
    discountPercentage: 57,
    rating: 4.8,
    reviewCount: 230,
    images: [
      'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [{ name: 'Şampanya Gold', hex: '#fde047' }, { name: 'Siyah', hex: '#18181b' }],
    description: 'Ayar askılı korseli saten üst ve uyumlu pilili yüksek bel şort takımı.',
    fabricInfo: '%92 İpek Saten, %8 Elastan',
    badges: ['İkili Takım', 'Sıcak Trend'],
    inStock: true,
    stockCount: 6,
    isBestSeller: false,
    isFlashDeal: false,
    reviews: []
  },
  {
    id: 'prod-15',
    name: 'Kapüşonlu Peluş Teddy Sweatshirt Ceket',
    brand: 'Bershka Dopamind',
    category: 'kadin-giyim',
    price: 649.00,
    originalPrice: 1499.00,
    discountPercentage: 57,
    rating: 4.9,
    reviewCount: 640,
    images: [
      'https://images.unsplash.com/photo-1520591799316-6b30425429aa?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['S', 'M', 'L'],
    colors: [{ name: 'Krem / Ayı', hex: '#fef3c7' }, { name: 'Koyu Kahve', hex: '#78350f' }],
    description: 'Yumuşak tüy dokusu ile bulut gibi sarayan peluş fermuarlı sweat.',
    fabricInfo: '%100 Mikro Soft Polyester',
    badges: ['Sıcak Dokunuş', 'Çok Satan'],
    inStock: true,
    stockCount: 11,
    isBestSeller: true,
    isFlashDeal: false,
    reviews: []
  },

  // -------------------------------------------------------------
  // TAKI & AKSESUAR (25+ Products)
  // -------------------------------------------------------------
  {
    id: 'prod-2',
    name: '24K Altın Kaplama Baget Kesim Pırlanta Işıltılı Kolye & Küpe Seti',
    brand: 'Atasay VIP Dopamin',
    category: 'taki-aksesuar',
    price: 849.00,
    originalPrice: 3499.00,
    discountPercentage: 75,
    rating: 5.0,
    reviewCount: 521,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1611591475165-22e6cf8ebff3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['Standart (45cm)'],
    colors: [
      { name: 'Altın', hex: '#d97706' },
      { name: 'Gümüş', hex: '#9ca3af' },
      { name: 'Rose Gold', hex: '#fb7185' }
    ],
    description: 'Alerji yapmayan antialerjenik kaplama, el işçiliği baget kesim Zirkon taşlar. Özel hediye kutusunda hayali teslimat.',
    fabricInfo: '24 Ayar Mikron Altın Kaplama Pirinç Alaşım',
    badges: ['Yıldızlı Ürün', 'Lüks Takı', 'Kutulu VIP'],
    inStock: true,
    stockCount: 12,
    isBestSeller: true,
    isFlashDeal: true,
    reviews: [
      {
        id: 'rev-201',
        userName: 'Pınar A.',
        rating: 5,
        date: 'Bugün, 11:05',
        comment: 'Boynumda hayal ettim ve aşık oldum! Çarktan %90 indirim kodu vurmuştum, bedavaya sepete atıp kuryeyi izlemek inanılmaz keyifli.',
        verifiedPurchase: true,
        likes: 38,
        userAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
      }
    ]
  },
  {
    id: 'prod-4',
    name: 'Minimalist 925 Ayar Gümüş Yüzük Kombini (5\'li Set)',
    brand: 'Luna Silver Jewelry',
    category: 'taki-aksesuar',
    price: 349.90,
    originalPrice: 1199.90,
    discountPercentage: 70,
    rating: 4.9,
    reviewCount: 612,
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['Ayarlanabilir (Set)'],
    colors: [
      { name: 'Gümüş', hex: '#e5e7eb' },
      { name: 'Gold', hex: '#f59e0b' }
    ],
    description: 'Geometrik, burgulu ve taşlı 5 farklı parmaktan oluşan şık gümüş eklem yüzük seti.',
    fabricInfo: '925 Ayar Gerçek Gümüş Kaplama, Doğal Taş',
    badges: ['Çok Satan', 'Trend Kombin'],
    inStock: true,
    stockCount: 15,
    isBestSeller: true,
    isFlashDeal: false,
    reviews: [
      {
        id: 'rev-401',
        userName: 'Ezgi T.',
        rating: 5,
        date: '3 gün önce',
        comment: 'Parmaklarımda nasıl durur diye fotoğraflara bakıp duruyorum. Harika bir dopamin kaynağı!',
        verifiedPurchase: true,
        likes: 12
      }
    ]
  },
  {
    id: 'prod-7',
    name: 'Doğal İncili & Burgu Zirve Choker Kolye Tasarımı',
    brand: 'Barok İncim',
    category: 'taki-aksesuar',
    price: 499.00,
    originalPrice: 1799.00,
    discountPercentage: 72,
    rating: 4.9,
    reviewCount: 156,
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['Standart Choker (40cm + 5cm uzatma)'],
    colors: [
      { name: 'İnci Beyazı & Gold', hex: '#fef3c7' }
    ],
    description: 'Gerçek tatlı su barok incileri ile tasarlanmış elegan ve feminen kolye modeli.',
    fabricInfo: 'Gerçek Barok Tatlı Su İncisi & Gold Plated Klips',
    badges: ['El Yapımı', 'Doğal İnci'],
    inStock: true,
    stockCount: 8,
    isBestSeller: false,
    isFlashDeal: false,
    reviews: []
  },
  {
    id: 'prod-20',
    name: 'Klasik Roman Rakamlı Çelik Çerçeveli Erkek & Kadın Kol Saati',
    brand: 'Rolex VIP Vibe',
    category: 'taki-aksesuar',
    price: 1899.00,
    originalPrice: 5500.00,
    discountPercentage: 65,
    rating: 5.0,
    reviewCount: 420,
    images: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['Tek Boyut (38mm)'],
    colors: [
      { name: 'Altın-Gümüş Çift Ton', hex: '#f59e0b' },
      { name: 'Siyah Çelik', hex: '#18181b' }
    ],
    description: 'Safir cam, paslanmaz 316L çelik kordon, su geçirmez mekanizma ile zamansız şıklık.',
    fabricInfo: '316L Paslanmaz Çelik, Safir Kristal Cam',
    badges: ['VIP Kutu', 'Lüks Saat'],
    inStock: true,
    stockCount: 5,
    isBestSeller: true,
    isFlashDeal: true,
    reviews: []
  },
  {
    id: 'prod-21',
    name: 'Retro Oval Çerçeveli UV400 Korumalı Güneş Gözlüğü',
    brand: 'RayBan Dopamine',
    category: 'taki-aksesuar',
    price: 399.00,
    originalPrice: 1200.00,
    discountPercentage: 67,
    rating: 4.8,
    reviewCount: 780,
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['Standart ekartman'],
    colors: [
      { name: 'Kaplumbağa Kabuğu', hex: '#78350f' },
      { name: 'Mat Siyah', hex: '#000000' }
    ],
    description: 'Instagram influencer tarzı vintage oval çerçeve, polarize UV400 korumalı füme cam.',
    fabricInfo: 'Asetat Çerçeve, Polarize Cam',
    badges: ['Influencer Seçimi', 'UV400'],
    inStock: true,
    stockCount: 22,
    isBestSeller: true,
    isFlashDeal: false,
    reviews: []
  },

  // -------------------------------------------------------------
  // ERKEK GIYIM (20+ Products)
  // -------------------------------------------------------------
  {
    id: 'prod-5',
    name: 'Oversize Fit Üç İplik Şardonlu Unisex Sweatshirt & Kanguru Cep',
    brand: 'Kore Trend Streetwear',
    category: 'erkek-giyim',
    price: 649.00,
    originalPrice: 1499.00,
    discountPercentage: 56,
    rating: 4.7,
    reviewCount: 280,
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Taş / Krem', hex: '#f3f4f6' },
      { name: 'Antrasit', hex: '#374151' },
      { name: 'Haki Yeşil', hex: '#3f6212' }
    ],
    description: 'İçi pamuklu şardon kaplı, soğuk geçirmeyen dökümlü sokak modası hoodie.',
    fabricInfo: '%80 Pamuk, %20 Polyester',
    badges: ['Unisex', 'Son 5 Ürün'],
    inStock: true,
    stockCount: 5,
    isBestSeller: false,
    isFlashDeal: false,
    reviews: [
      {
        id: 'rev-501',
        userName: 'Kaan K.',
        rating: 5,
        date: 'Bugün',
        comment: 'Koreli gençlerin neden bu sitelere takıldığını şimdi anladım. Alışveriş hissi %100, harcama 0 TL.',
        verifiedPurchase: true,
        likes: 27
      }
    ]
  },
  {
    id: 'prod-30',
    name: 'Hakiki Deri Motorcu Erkek Mont & Biker Ceket',
    brand: 'Harley Dopamine',
    category: 'erkek-giyim',
    price: 2199.00,
    originalPrice: 5800.00,
    discountPercentage: 62,
    rating: 4.9,
    reviewCount: 310,
    images: [
      'https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Siyah Deri', hex: '#000000' },
      { name: 'Açık Taba', hex: '#92400e' }
    ],
    description: 'Metal fermuarlı, omuz dikşli premium hakiki kuzu derisi erkek mont.',
    fabricInfo: '%100 Hakiki Kuzu Derisi',
    badges: ['Hakiki Deri', 'Efsane Kalite'],
    inStock: true,
    stockCount: 4,
    isBestSeller: true,
    isFlashDeal: true,
    reviews: []
  },
  {
    id: 'prod-31',
    name: 'Keten Karışımlı Slim Fit Hakim Yaka Beyaz Gömlek',
    brand: 'Massimo Dutti Vibe',
    category: 'erkek-giyim',
    price: 599.00,
    originalPrice: 1399.00,
    discountPercentage: 57,
    rating: 4.8,
    reviewCount: 245,
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Saf Beyaz', hex: '#ffffff' }, { name: 'Açık Mavi', hex: '#bfdbfe' }],
    description: 'Nefes alan pamuk keten dokuma, terletmeyen fit yazlık gomlek.',
    fabricInfo: '%55 Keten, %45 Pamuk',
    badges: ['Nefes Alan Kumaş'],
    inStock: true,
    stockCount: 12,
    isBestSeller: false,
    isFlashDeal: false,
    reviews: []
  },
  {
    id: 'prod-32',
    name: 'Cebi Fermuarlı Cargo Jogger Erkek Pantolon',
    brand: 'Pull&Bear Street',
    category: 'erkek-giyim',
    price: 699.00,
    originalPrice: 1599.00,
    discountPercentage: 56,
    rating: 4.7,
    reviewCount: 430,
    images: [
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['30', '32', '34', '36'],
    colors: [{ name: 'Siyah', hex: '#18181b' }, { name: 'Haki', hex: '#3f6212' }],
    description: 'Beli lastikli ve ipli, çok cepli modern sokak modası kargo pantolon.',
    fabricInfo: '%98 Pamuk, %2 Elastan Gabardin',
    badges: ['Çok Cepli', 'Rahat Kesim'],
    inStock: true,
    stockCount: 9,
    isBestSeller: false,
    isFlashDeal: true,
    reviews: []
  },

  // -------------------------------------------------------------
  // AYAKKABI & CANTA (20+ Products)
  // -------------------------------------------------------------
  {
    id: 'prod-6',
    name: 'Lüks Hakiki Deri Kapitone Omuz Çantası & Altın Zincir',
    brand: 'Prada Style Luxe',
    category: 'ayakkabi-canta',
    price: 1599.00,
    originalPrice: 5900.00,
    discountPercentage: 72,
    rating: 5.0,
    reviewCount: 410,
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['Tek Ebat (24x16 cm)'],
    colors: [
      { name: 'Siyah', hex: '#000000' },
      { name: 'Krem / Taba', hex: '#d97706' }
    ],
    description: 'İç bölmeli, mıknatıs kilitli, lüks dikişli ve ağır altın zincir askılı omuz çantası.',
    fabricInfo: 'Hakiki İthal Cilt Deri, Paslanmaz Gold Metal',
    badges: ['Flaş Fırsat', 'Lüks Çanta'],
    inStock: true,
    stockCount: 2,
    isBestSeller: true,
    isFlashDeal: true,
    reviews: [
      {
        id: 'rev-601',
        userName: 'Zeynep D.',
        rating: 5,
        date: '2 gün önce',
        comment: 'Sepetime ekledim, canlı haritada sanal kuryem Ahmet Abiyi izledim harikaydı haha!',
        verifiedPurchase: true,
        likes: 63
      }
    ]
  },
  {
    id: 'prod-8',
    name: 'Süet Deri Bilek Detaylı İtalyan Tarzı Kadın Bot',
    brand: 'Vogue Footwear',
    category: 'ayakkabi-canta',
    price: 1449.00,
    originalPrice: 3200.00,
    discountPercentage: 54,
    rating: 4.8,
    reviewCount: 204,
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['36', '37', '38', '39', '40'],
    colors: [
      { name: 'Taba / Kahve', hex: '#78350f' },
      { name: 'Mat Siyah', hex: '#18181b' }
    ],
    description: 'Ortopedik rahat tabanlı, hakiki süet deri topuklu bot.',
    fabricInfo: 'Hakiki Dana Süeti, Thermo Kaymaz Taban',
    badges: ['Trendyol Favorisi', 'Kış Özel'],
    inStock: true,
    stockCount: 6,
    isBestSeller: false,
    isFlashDeal: true,
    reviews: []
  },
  {
    id: 'prod-40',
    name: 'Retro Beyaz Deri Yüksek Taban Unisex Sneaker',
    brand: 'Nike Jordan Vibe',
    category: 'ayakkabi-canta',
    price: 1299.00,
    originalPrice: 3100.00,
    discountPercentage: 58,
    rating: 4.9,
    reviewCount: 940,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['37', '38', '39', '40', '41', '42', '43'],
    colors: [{ name: 'Kırmızı-Beyaz', hex: '#dc2626' }, { name: 'Siyah-Beyaz', hex: '#000000' }],
    description: 'Yüksek bilek desteği, hava kanallı özel iç taban, ikonik basketbol tarzı sneaker.',
    fabricInfo: 'Pürüzsüz Cilt Deri, Kauçuk Taban',
    badges: ['En Çok Satan', 'Retro İkon'],
    inStock: true,
    stockCount: 10,
    isBestSeller: true,
    isFlashDeal: true,
    reviews: []
  },
  {
    id: 'prod-41',
    name: 'Minimalist Taba Hakiki Deri Sırt Çantası & Laptop Bölmeli',
    brand: 'Herschel VIP',
    category: 'ayakkabi-canta',
    price: 1199.00,
    originalPrice: 2800.00,
    discountPercentage: 57,
    rating: 4.9,
    reviewCount: 380,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['15.6 inç Uyumlu'],
    colors: [{ name: 'Taba Deri', hex: '#b45309' }, { name: 'Koyu Siyah', hex: '#18181b' }],
    description: 'Su geçirmez astar, sünger destekli sırt ve omuz askısı, zarif seyahat ve iş çantası.',
    fabricInfo: 'Hakiki İthal Deri',
    badges: ['Laptop Özel', 'Seyahat Trend'],
    inStock: true,
    stockCount: 7,
    isBestSeller: true,
    isFlashDeal: false,
    reviews: []
  },

  // -------------------------------------------------------------
  // TREND KOMBINLER (15+ Products)
  // -------------------------------------------------------------
  {
    id: 'prod-9',
    name: 'Tam Kombin: Kaşmir Kruvaze Palto & İpek Eşarp Seti',
    brand: 'Milan Trend Set',
    category: 'trend-kombinler',
    price: 2499.00,
    originalPrice: 6800.00,
    discountPercentage: 63,
    rating: 5.0,
    reviewCount: 388,
    images: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['36-38 (S-M)', '40-42 (L-XL)'],
    colors: [
      { name: 'Camel / DeveTüyü', hex: '#d97706' },
      { name: 'Koyu Izgara Krem', hex: '#fef08a' }
    ],
    description: 'Hazır kombin şıklığı! %100 Kaşmir sıcak kışlık uzun palto ve yanında hediye desenli ipek eşarp.',
    fabricInfo: '%80 Kaşmir Yün, %20 İpek',
    badges: ['Tam Kombin Set', 'VIP Sanal Kurye', 'Çok Satan'],
    inStock: true,
    stockCount: 3,
    isBestSeller: true,
    isFlashDeal: true,
    reviews: []
  },
  {
    id: 'prod-50',
    name: 'Sokak Stili Kombini: Oversize Deri Ceket + Cargo Pantolon + Crop Top',
    brand: 'Street Dopamind Trio',
    category: 'trend-kombinler',
    price: 1999.00,
    originalPrice: 5200.00,
    discountPercentage: 61,
    rating: 4.9,
    reviewCount: 512,
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['S', 'M', 'L'],
    colors: [{ name: 'Siyah - Haki', hex: '#18181b' }],
    description: '3 parçalı eksiksiz sokak kombini. İç büstiyer, oversize dış ceket ve belden büzgülü kargo pantolon.',
    fabricInfo: 'Karışım Kombin Kumaşı',
    badges: ['3\'lü Süper Set', 'Efsane İndirim'],
    inStock: true,
    stockCount: 4,
    isBestSeller: true,
    isFlashDeal: true,
    reviews: []
  }
];

// Helper templates to algorithmically generate rich, unique products (160+ total items)
const CATEGORY_TEMPLATES = [
  {
    category: 'kadin-giyim' as const,
    brandPrefixes: ['Milla Dopamine', 'Zara Vibe', 'Mango Glam', 'Bershka Dopamind', 'Stradivarius Dream', 'Massimo Elite'],
    items: [
      { name: 'Kruvaze Yaka Satene Benzer Mini Bluz', price: 349.90, orig: 899.00, img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6' },
      { name: 'Yüksek Bel Fitilli Tayt & Spor Bra Seti', price: 489.00, orig: 1199.00, img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2' },
      { name: 'Pilili Şifon Midi Etek & Kuşaklı', price: 429.00, orig: 990.00, img: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa' },
      { name: 'Dökümlü V Yaka Trvaz Kollu Tunik', price: 399.00, orig: 890.00, img: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc' },
      { name: 'Örme Kışlık Ponponlu Bere & Atkı Seti', price: 299.00, orig: 750.00, img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0' },
      { name: 'Sırt Dekolteli Mini Gece Şıklığı Elbisesi', price: 899.00, orig: 2400.00, img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae' },
      { name: 'Ekoseli Oversize Oduncu Kadın Gömleği', price: 499.00, orig: 1200.00, img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae' },
      { name: 'Suni Kürk Yaka Kaşe Kaban', price: 1699.00, orig: 4200.00, img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b' },
      { name: 'Fitil Dokulu Body & Çıtçıtlı Atlet', price: 199.90, orig: 499.00, img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c' },
      { name: 'Koyu Yıkama Mom Fit Denim Jean', price: 699.00, orig: 1699.00, img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246' },
      { name: 'Desenli Kimono Dış Giyim Sabahlık', price: 550.00, orig: 1350.00, img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f' },
      { name: 'Dantel Detaylı Askılı Saten Atlet Bluz', price: 279.00, orig: 699.00, img: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3' },
      { name: 'Asimetrik Kesim Mini Yırtmaçlı Etek', price: 349.00, orig: 799.00, img: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b' },
      { name: 'Retro Çizgili Oversize Triko Kazak', price: 599.00, orig: 1399.00, img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0' },
      { name: 'Işıltılı Taşlı Büstiyer Gece Üstü', price: 449.00, orig: 1100.00, img: 'https://images.unsplash.com/photo-1520591799316-6b30425429aa' },
      { name: 'Kruvaze Düğmeli Şık Blazer Ceket Elbise', price: 1199.00, orig: 2900.00, img: 'https://images.unsplash.com/photo-1548883354-7622d03aca27' },
      { name: 'Tüy Detaylı Yırtmaçlı Abiye Elbise', price: 1899.00, orig: 4800.00, img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1' },
      { name: 'Yumuşak Dokulu Angora Kışlık Hırka', price: 749.00, orig: 1850.00, img: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa' },
      { name: 'Şerit Detaylı Yüksek Bel Palazzo Pantolon', price: 629.00, orig: 1500.00, img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae' },
      { name: 'Büzgülü Poplin Gömlek Elbise Kemerli', price: 699.00, orig: 1750.00, img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c' },
      { name: 'Nefes Alan Keten Şort & Gömlek İkili Takım', price: 849.00, orig: 2100.00, img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f' },
      { name: 'Bohem Desenli Uçuş Uçuş Uzun Maxielbise', price: 920.00, orig: 2300.00, img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae' },
      { name: 'Metalik Parıltılı Cropped Top Bluz', price: 380.00, orig: 950.00, img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6' },
      { name: 'Askılı Şifon Gece Tulumu Kemerli', price: 1250.00, orig: 3100.00, img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1' },
      { name: 'Polar İçi Şardonlu Oversize Sweatshirt', price: 580.00, orig: 1400.00, img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0' },
      { name: 'Ceket Tipi Mini Süet Elbise Taba', price: 990.00, orig: 2400.00, img: 'https://images.unsplash.com/photo-1548883354-7622d03aca27' },
      { name: 'Çizgili V Yaka İpek Dokulu Bluz', price: 410.00, orig: 990.00, img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6' },
      { name: 'Yırtmaç Detaylı Deri Görünümlü Tayt', price: 390.00, orig: 890.00, img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2' },
      { name: 'Gipür Dantelli Bohem Yazlık Üst', price: 460.00, orig: 1100.00, img: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3' }
    ]
  },
  {
    category: 'taki-aksesuar' as const,
    brandPrefixes: ['Atasay Dopamine', 'Luna Silver', 'Swarovski Glam', 'Bvlgari Style', 'Cartier Vibe', 'Pandora Charm'],
    items: [
      { name: 'Zincir Detaylı 3\'lü Gold Halhal Seti', price: 189.00, orig: 499.00, img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908' },
      { name: 'Zirkon Taşlı Su Yolu Bileklik 18K Kaplama', price: 499.00, orig: 1499.00, img: 'https://images.unsplash.com/photo-1611591475165-22e6cf8ebff3' },
      { name: 'Nazar Boncuklu Doğal Taş Şans Kolyeleri', price: 249.00, orig: 650.00, img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f' },
      { name: 'Vintage Büyük Halka Küpe Gold Kaplama', price: 199.00, orig: 550.00, img: 'https://images.unsplash.com/photo-1630019852942-f89202989a59' },
      { name: 'Pırlanta Kesim Baget Taşlı Ayarlanabilir Yüzük', price: 320.00, orig: 890.00, img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e' },
      { name: 'Retro Kare Çerçeveli Mavi Işık Koruma Gözlüğü', price: 299.00, orig: 799.00, img: 'https://images.unsplash.com/photo-1508296695146-257a814070b4' },
      { name: 'Deniz Kabuğu & İnci Detaylı Yazlık Kolye', price: 220.00, orig: 590.00, img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338' },
      { name: 'Minimal Dokuma İpek Fular & Saç Bandı Seti', price: 179.00, orig: 450.00, img: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed' },
      { name: 'Derili Ve Çelik Erkek Birlik Tılsım Bilekliği', price: 279.00, orig: 690.00, img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9' },
      { name: 'Sallantılı İnci Küpe Çifti', price: 210.00, orig: 520.00, img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908' },
      { name: 'Akıllı Safir Camlı Dokunmatik Saat', price: 1499.00, orig: 3900.00, img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d' },
      { name: 'Güneş Motifi 925 Ayar Madalyon Kolye', price: 380.00, orig: 990.00, img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f' },
      { name: 'Krom Kaplama Parlak Telefon Zinciri Askısı', price: 149.00, orig: 399.00, img: 'https://images.unsplash.com/photo-1588444839158-42f3d85bc64d' },
      { name: 'Gümüş Kaplama Kelebek Broş Tasarımı', price: 199.00, orig: 480.00, img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0' },
      { name: 'Lüks Taşlı Toka Ve Taç Seti', price: 260.00, orig: 650.00, img: 'https://images.unsplash.com/photo-1590548784585-643d2b9f2925' },
      { name: 'Burç Sembollü Rose Gold Madalyon İğne', price: 230.00, orig: 580.00, img: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9' },
      { name: 'Sarmaşık Yapraklı Zirkon Taşlı Küpe', price: 280.00, orig: 720.00, img: 'https://images.unsplash.com/photo-1630019852942-f89202989a59' },
      { name: 'Renkli Ametist Doğal Taş Yüzük', price: 340.00, orig: 850.00, img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e' },
      { name: 'Retro Kedi Gözü Siyah Güneş Gözlüğü', price: 420.00, orig: 1100.00, img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083' },
      { name: 'Minimal Çelik Kelepçe Bileklik Gold', price: 390.00, orig: 990.00, img: 'https://images.unsplash.com/photo-1611591475165-22e6cf8ebff3' },
      { name: 'Çoklu Kalp Figürlü Gümüş Şahmeran', price: 290.00, orig: 750.00, img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908' },
      { name: 'Özel Kadife Kutusunda Hediyelik Kalp Kolye', price: 450.00, orig: 1200.00, img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f' },
      { name: 'Vintage Deri Kordonlu Analog Bayan Saat', price: 890.00, orig: 2200.00, img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9' },
      { name: 'Kıkırdak Sıkıştırmalı Çelik İkili Küpe', price: 160.00, orig: 420.00, img: 'https://images.unsplash.com/photo-1630019852942-f89202989a59' },
      { name: '3 Ayarlı Işıltılı Şeffaf Künye', price: 310.00, orig: 780.00, img: 'https://images.unsplash.com/photo-1611591475165-22e6cf8ebff3' },
      { name: 'Miyuki Boncuk İşi El Yapımı Bileklik', price: 185.00, orig: 450.00, img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908' },
      { name: 'Kişiye Özel İsim Yazılabilir Künye', price: 340.00, orig: 820.00, img: 'https://images.unsplash.com/photo-1611591475165-22e6cf8ebff3' },
      { name: 'Çelik Yılan Zincir Gold Kolye', price: 270.00, orig: 680.00, img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f' },
      { name: 'Siyah Titanyum Mat Erkek Yüzük', price: 220.00, orig: 550.00, img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e' }
    ]
  },
  {
    category: 'erkek-giyim' as const,
    brandPrefixes: ['Nike Dopamind', 'Adidas Neo', 'Puma Street', 'Jack&Jones Vibe', 'Koton Men', 'Zara Man'],
    items: [
      { name: 'Basic 100% Pamuk 3\'lü T-Shirt Paketi', price: 399.00, orig: 999.00, img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518' },
      { name: 'Dik Yaka Fermuarlı Polar Ceket Mont', price: 549.00, orig: 1399.00, img: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6' },
      { name: 'Slim Fit Siyah Polo Yaka Tişört', price: 299.00, orig: 699.00, img: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990' },
      { name: 'Baskılı Oversize Streetwear T-Shirt', price: 329.00, orig: 799.00, img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c' },
      { name: 'Klasik İtalyan Kesim Dokuma Takım Elbise Ceketi', price: 1899.00, orig: 4500.00, img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf' },
      { name: 'Kot Ceket & İçi Kürklü Kışlık Mont', price: 1199.00, orig: 2800.00, img: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891' },
      { name: 'Bermuda Şort & Beli Lastikli Yazlık', price: 349.00, orig: 850.00, img: 'https://images.unsplash.com/photo-1504593811423-6dd665756598' },
      { name: 'V-Yaka Selanik Örgü Erkek Triko Kazak', price: 489.00, orig: 1150.00, img: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e' },
      { name: 'Nefes Alan Kumaş Eşofman Altı', price: 420.00, orig: 980.00, img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2' },
      { name: 'Kare Desenli Oduncu Gömlek', price: 460.00, orig: 1090.00, img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce' },
      { name: 'Hakiki Deri Erkek Kemeri & Metal Toka', price: 220.00, orig: 550.00, img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d' },
      { name: 'Rüzgar Geçirmez Yağmurluk Ceket', price: 780.00, orig: 1890.00, img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22' },
      { name: 'Beli Büzgülü Çizgili Keten Pantolon', price: 590.00, orig: 1400.00, img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf' },
      { name: 'Düğmeli Örme Hırka & V yaka', price: 520.00, orig: 1250.00, img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f' },
      { name: 'Siyah Basit Şapka Cap Şapkası', price: 160.00, orig: 390.00, img: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6' },
      { name: 'Koyun Yünü Şardonlu Kışlık Şişme Yelek', price: 890.00, orig: 2100.00, img: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070' },
      { name: 'Slim Fit Likralı Siyah Chino Pantolon', price: 540.00, orig: 1290.00, img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22' },
      { name: 'Kısa Kollu Desenli Yazlık Küba Yaka Gömlek', price: 420.00, orig: 990.00, img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf' },
      { name: 'Kırmızı Logolu Kapüşonlu Sweatshirt', price: 650.00, orig: 1550.00, img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2' },
      { name: 'Mavi Yıkamalı Kot Ceket Vintage', price: 950.00, orig: 2250.00, img: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891' },
      { name: 'Spor Salonu Atlet & Şort İkili Kombin', price: 490.00, orig: 1190.00, img: 'https://images.unsplash.com/photo-1504593811423-6dd665756598' },
      { name: 'Termal İçlik Üst & Sıcak Tutan Dokuma', price: 320.00, orig: 780.00, img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518' },
      { name: 'Hakiki Deri Erkek Eldiveni Kürklü', price: 380.00, orig: 920.00, img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d' },
      { name: 'Siyah Dokuma Kravat Ve Mendil Seti', price: 250.00, orig: 600.00, img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf' },
      { name: 'Sokak Modası Baskılı Pamuklu T-Shirt', price: 360.00, orig: 880.00, img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c' },
      { name: 'Su Geçirmez Softshell Outdoor Ceket', price: 1150.00, orig: 2700.00, img: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6' },
      { name: 'Baskılı Bisiklet Yaka Pamuk Sweatshirt', price: 510.00, orig: 1250.00, img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2' },
      { name: 'Desenli %100 İpek Erkek Kravat', price: 290.00, orig: 720.00, img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf' },
      { name: 'Hakiki Deri Süet Erkek Yelek', price: 1290.00, orig: 3100.00, img: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070' }
    ]
  },
  {
    category: 'ayakkabi-canta' as const,
    brandPrefixes: ['Prada Style', 'Michael Kors Vibe', 'Gucci Dopamind', 'Converse Retro', 'Balenciaga Trend', 'Aldo Shoe'],
    items: [
      { name: 'Süet Deri Makosen Loafer Erkek & Kadın', price: 899.00, orig: 2200.00, img: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509' },
      { name: 'Zarif İnce Topuklu Siyah İpek Abiye Ayakkabı', price: 999.00, orig: 2600.00, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2' },
      { name: 'Bez Canvas Unisex Yüksek Bilek Sneaker', price: 599.00, orig: 1499.00, img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77' },
      { name: 'Şeffaf Minik Ağızlı Gece Cluth Çantası', price: 449.00, orig: 1199.00, img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3' },
      { name: 'Hasır Örgü Plaj Çantası & Deri Saplı', price: 389.00, orig: 950.00, img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7' },
      { name: 'Spor Koşu Ve Yürüyüş Ayakkabısı Air Cushion', price: 849.00, orig: 2100.00, img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86' },
      { name: 'Taba Hakiki Deri Cüzdan Ve Kartlık Seti', price: 299.00, orig: 750.00, img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5' },
      { name: 'Kışlık İçi Kürklü Su Geçirmez Kar Botu', price: 1299.00, orig: 3200.00, img: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f' },
      { name: 'Çapraz Askılı Mini Telefon Ve Bel Çantası', price: 349.00, orig: 890.00, img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772' },
      { name: 'Süet Deri Erkek Chelsea Bot', price: 1399.00, orig: 3400.00, img: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06' },
      { name: 'Büyük Boy Deri Tote Omuz Çantası', price: 950.00, orig: 2400.00, img: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2' },
      { name: 'Retro Tenis Sneaker Beyaz Deri', price: 790.00, orig: 1950.00, img: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33' },
      { name: 'Ortopedik Terlik Ve Sandalet', price: 390.00, orig: 890.00, img: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b' },
      { name: 'Mini İncili Gece El Çantası', price: 520.00, orig: 1300.00, img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3' },
      { name: 'Kırmızı Rugan Topuklu Ayakkabı', price: 1100.00, orig: 2900.00, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2' },
      { name: 'Şehirli Süet Baret Makosen Ayakkabı', price: 780.00, orig: 1850.00, img: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509' },
      { name: 'Gece Parıltılı Portföy Çantası Zincirli', price: 460.00, orig: 1150.00, img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3' },
      { name: 'Bilekten Bağlamalı Nude Yazlık Sandalet', price: 520.00, orig: 1300.00, img: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b' },
      { name: 'Kamp Ve Doğa Yürüyüşü Outdoor Botu', price: 1450.00, orig: 3600.00, img: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06' },
      { name: 'Lüks Croco Desenli Seyahat Valizi Çantası', price: 1890.00, orig: 4800.00, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62' },
      { name: 'Bebek Mavisi Deri Omuz Çantası', price: 680.00, orig: 1700.00, img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7' },
      { name: 'Ultra Hafif Koşu Sneaker Ayakkabı', price: 720.00, orig: 1800.00, img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86' },
      { name: 'Şeffaf Ökçeli Şık Şeffaf Bant Terlik', price: 490.00, orig: 1200.00, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2' },
      { name: 'Oversize Plaj Ve Averiş Bez Torba Çanta', price: 210.00, orig: 520.00, img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7' },
      { name: 'Ağır Metal Tokalı Deri Çapraz Bacak Çantası', price: 590.00, orig: 1450.00, img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772' },
      { name: 'Anatomik Taban Erkek Hakiki Deri Terlik', price: 420.00, orig: 980.00, img: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b' },
      { name: 'Püsküllü Kadın Süet Çanta', price: 810.00, orig: 1990.00, img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3' },
      { name: 'Bilek Destekli Basketbol Ayakkabısı', price: 1350.00, orig: 3200.00, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
      { name: 'Zarif Zincir Detaylı Mini Cüzdanlı Çanta', price: 540.00, orig: 1350.00, img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7' }
    ]
  },
  {
    category: 'trend-kombinler' as const,
    brandPrefixes: ['Paris Runway', 'K-Style Dopamind', 'Aesthetic Set', 'Luxe Outfit', 'Trendsetter VIP'],
    items: [
      { name: 'Gece Daveti Kombini: Saten Elbise + İnci Kolye + İnce Topuklu', price: 2899.00, orig: 7500.00, img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d' },
      { name: 'Havaalanı Şıklığı: Oversize Sweat + Jogger + Şapka Seti', price: 1299.00, orig: 3400.00, img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b' },
      { name: 'Pazar Kahvaltısı Kombini: Triko Kazak + Denim Etek + Baget Çanta', price: 1499.00, orig: 3900.00, img: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc' },
      { name: 'Spor Fitness Kombini: Seamless Bra + Yüksek Bel Tayt + Mat', price: 899.00, orig: 2200.00, img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae' },
      { name: 'Ofis Şıklığı Kombini: Blazer Ceket + Kumaş Pantolon + Deri Çanta', price: 2399.00, orig: 6100.00, img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b' },
      { name: 'Aptal Aşık Sevgililer Günü Kombini: Kırmızı Elbise + Altın Kolye', price: 1999.00, orig: 4900.00, img: 'https://images.unsplash.com/photo-1550639525-c97d455acf70' },
      { name: 'Yaz Tatili Kombini: Şifon Elbise + Hasır Şapka + Hasır Çanta', price: 1199.00, orig: 3100.00, img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c' },
      { name: 'Kore K-Pop Sokak Stili: Biker Deri + Cargo Pants + Zincir', price: 2199.00, orig: 5800.00, img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f' },
      { name: 'Sonbahar Rüzgarı Kombini: Kaşe Kaban + Çizme + Süet Çanta', price: 2799.00, orig: 6900.00, img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b' },
      { name: 'Minimalist Monokrom Kombin: Siyah Turtleneck + Siyah Pantolon', price: 1399.00, orig: 3500.00, img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c' },
      { name: 'Yat Partisi Kombini: Keten Gömlek + Şort + Güneş Gözlüğü', price: 1750.00, orig: 4300.00, img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d' },
      { name: 'Kolej Ruhu Kombini: Kolej Ceketi + Mini Pilili Etek + Baret', price: 1650.00, orig: 3950.00, img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b' },
      { name: 'Parisian Chic Kombini: Çizgili T-shirt + Kırmızı Beret + Trençkot', price: 2100.00, orig: 5200.00, img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b' },
      { name: 'Kışlık Uludağ Kayak Kombini: Şişme Mont + Termal Pantolon + Bere', price: 3200.00, orig: 8100.00, img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b' },
      { name: 'Gala Kırmızı Halı Kombini: Kuyruklu Abiye + Pırlanta Set', price: 3900.00, orig: 9900.00, img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1' },
      { name: 'Festival / Coachella Kombini: Püsküllü Yelek + Kovboy Botu + Şapka', price: 2400.00, orig: 6000.00, img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f' },
      { name: 'Hafta Sonu Kahve Şıklığı Kombini: Kaşmir Kazak + Jean + Loafer', price: 1850.00, orig: 4600.00, img: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc' },
      { name: 'Romantik Gün Batımı Kombini: Pembe Şifon Elbise + Babet', price: 1350.00, orig: 3400.00, img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c' },
      { name: 'Bohem Müzik Festivali Kombini: Dantel Kimono + Jean Şort + Kolye', price: 1550.00, orig: 3800.00, img: 'https://images.unsplash.com/photo-1550639525-c97d455acf70' },
      { name: 'VIP Sanal Dopamin Komple Set: Tüm Aksesuarlar Dahil Kombin', price: 4200.00, orig: 11000.00, img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b' },
      { name: 'Sokak Sanatı Kombini: Grafitili Oversize Mont + Cargo Jean', price: 2150.00, orig: 5100.00, img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f' },
      { name: 'Akşam Yemeği Kombini: İpek Bluz + Yüksek Bel Pantolon + Küpe', price: 2300.00, orig: 5700.00, img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d' },
      { name: 'Sanal Dopamin Gala VIP Kombini: Altın İşlemeli Ceket Set', price: 4800.00, orig: 12500.00, img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b' }
    ]
  }
];

// Dynamically seed 160+ unique items by mixing base and generated items
const generateFullCatalog = (): Product[] => {
  const result: Product[] = [...BASE_PRODUCTS];
  let currentId = 100;

  const sampleReviews = [
    { userName: 'Buse T.', comment: 'Sepetime atıp sanal kuryeyi izlemek aşırı rahatlatıyor, harika bir uygulama!' },
    { userName: 'Caner D.', comment: 'Sanal kargo hızı muazzam. Kesinlikle %100 indirim koduyla ücretsiz dopamin patlaması.' },
    { userName: 'Damla N.', comment: 'Kumaşı ve kalitesi harika görünüyor, sepetime hemen ekledim!' },
    { userName: 'Emre Y.', comment: 'Z Kuşağı tam aradığı alışveriş simülasyonunu buldu. Bütçeyi sarsmadan alışveriş hazzı.' },
    { userName: 'Selin A.', comment: 'Çarkı çevirip %90 indirim kaptım, kapımda sanal kuryeyi bekliyorum!' },
    { userName: 'Kaan M.', comment: 'Sanal kuryeyi haritada takip ederken gerçek siparişmiş gibi heyecanlandım harika!' },
    { userName: 'Nazlı K.', comment: 'Işıltısı ve kalitesi fotoğraftakinden bile güzel görünüyor, dopamin deposu resmen.' }
  ];

  CATEGORY_TEMPLATES.forEach((tmpl) => {
    tmpl.items.forEach((item, idx) => {
      currentId++;
      const brand = tmpl.brandPrefixes[idx % tmpl.brandPrefixes.length];
      const discount = Math.round(((item.orig - item.price) / item.orig) * 100);
      const rating = Number((4.5 + (idx % 5) * 0.1).toFixed(1));
      const reviewCount = 50 + (idx * 37) % 800;
      const stock = 2 + (idx % 18);

      const revSample = sampleReviews[idx % sampleReviews.length];

      result.push({
        id: `prod-gen-${currentId}`,
        name: `${item.name}`,
        brand: brand,
        category: tmpl.category,
        price: item.price,
        originalPrice: item.orig,
        discountPercentage: Math.max(35, Math.min(85, discount)),
        rating: Math.min(5.0, rating),
        reviewCount: reviewCount,
        images: [
          `${item.img}?auto=format&fit=crop&w=1000&q=80`,
          'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80'
        ],
        sizes: tmpl.category.includes('taki') ? ['Standart'] : tmpl.category.includes('ayakkabi') ? ['36', '37', '38', '39', '40', '41'] : ['S', 'M', 'L', 'XL'],
        colors: [
          { name: 'Siyah', hex: '#18181b' },
          { name: 'Şampanya', hex: '#fef08a' },
          { name: 'Bordo / Vizon', hex: '#881337' }
        ],
        description: `${brand} özel koleksiyonundan ${item.name.toLowerCase()}. Trend, kaliteli ve konforlu kullanım için özel tasarlandı.`,
        fabricInfo: '%85 Birinci Sınıf İthal Materyal, %15 Esnek Dokuma',
        badges: idx % 2 === 0 ? ['Çok Satan', 'Sanal Hızlı Kargo'] : ['Flaş İndirim', 'Günün Fırsatı'],
        inStock: true,
        stockCount: stock,
        isBestSeller: idx % 3 === 0,
        isFlashDeal: idx % 2 === 1,
        reviews: [
          {
            id: `rev-${currentId}-1`,
            userName: revSample.userName,
            rating: 5,
            date: 'Bugün',
            comment: revSample.comment,
            verifiedPurchase: true,
            likes: 10 + (idx * 3) % 40
          }
        ]
      });
    });
  });

  return result;
};

export const INITIAL_PRODUCTS: Product[] = generateFullCatalog();

export const INITIAL_COURIERS = [
  {
    name: 'Mehmet Kaplan (Jet Kurye)',
    vehicle: 'motor' as const,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    rating: 4.98,
    phone: '0532 *** ** 12',
    plate: '34 DOP 2026'
  },
  {
    name: 'Zeynep Yıldız (Süper Hızlı)',
    vehicle: 'scooter' as const,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5.0,
    phone: '0535 *** ** 88',
    plate: '34 DPM 99'
  },
  {
    name: 'Drone-X Alpha (VIP Hava Teslimat)',
    vehicle: 'drone' as const,
    avatar: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=200&q=80',
    rating: 4.95,
    phone: 'Sanal Otomatik',
    plate: 'DRONE-01'
  }
];
