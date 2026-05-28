export interface Vendor {
  id: string;
  category: 'photography' | 'catering' | 'music' | 'makeup';
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  priceUnit?: string;
  rating: number;
  reviewCount: number;
  image: string;
  tags?: string[];
}

export const mockVendors: Vendor[] = [
  {
    id: '1',
    category: 'photography',
    name: 'Lumière Studios',
    description: 'Full-Day Cinematic Wedding Coverage, 2 Photographers, Drone Shots included.',
    price: 125000,
    originalPrice: 150000,
    rating: 4.9,
    reviewCount: 124,
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    category: 'photography',
    name: 'Aesthetic Captures',
    description: 'Premium Pre-Wedding & Candid',
    price: 45000,
    originalPrice: 60000,
    rating: 4.8,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    category: 'photography',
    name: 'Moments by Maya',
    description: 'Documentary Style Event Coverage',
    price: 38000,
    originalPrice: 55000,
    rating: 4.7,
    reviewCount: 210,
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    category: 'catering',
    name: 'Gourmet Haven Banquets',
    description: 'Continental & Indian Fusion Menu. Includes premium dessert bar.',
    price: 3500,
    priceUnit: '/pp',
    rating: 4.9,
    reviewCount: 156,
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80',
  },
  {
    id: '5',
    category: 'catering',
    name: 'Savory Bites Catering',
    description: 'An opulent spread of artisan cheeses, cured meats, fresh seasonal fruits, and house-made preserves.',
    price: 850,
    priceUnit: '/pp',
    rating: 5.0,
    reviewCount: 92,
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    category: 'music',
    name: 'Elite Wedding DJ',
    description: 'Seamless transitions and a personalized playlist to keep the dance floor alive all night.',
    price: 12000,
    priceUnit: '/ event',
    rating: 4.9,
    reviewCount: 204,
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80',
  },
  {
    id: '7',
    category: 'music',
    name: 'Live Jazz Quartet',
    description: 'Elevate your cocktail hour with smooth, sophisticated instrumental arrangements.',
    price: 18000,
    priceUnit: '/ event',
    rating: 5.0,
    reviewCount: 45,
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80',
  },
  {
    id: '8',
    category: 'makeup',
    name: 'Bridal Glamour',
    description: 'Comprehensive bridal styling including trial session, premium products, and touch-up kit.',
    price: 3500,
    rating: 4.9,
    reviewCount: 112,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80',
  },
  {
    id: '9',
    category: 'makeup',
    name: 'Airbrush Specialists',
    description: 'Experience ultimate longevity and a flawless, camera-ready finish with our specialized airbrush makeup application.',
    price: 2500,
    rating: 4.8,
    reviewCount: 88,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800',
  }
];

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};
