export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory: string;
  brand: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviewCount: number;
  stock: number;
  images: string[];
  thumbnail: string;
  description: string;
  specs: Record<string, string>;
  tags: string[];
  isFeatured: boolean;
  isNew: boolean;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  subcategories: Subcategory[];
  productCount: number;
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  avatar: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  products?: Product[];
}

export interface BuildPCSlot {
  type: 'cpu' | 'gpu' | 'mainboard' | 'ram' | 'ssd' | 'psu' | 'case' | 'cooling';
  label: string;
  icon: string;
  product: Product | null;
}

export interface FilterState {
  priceRange: [number, number];
  brands: string[];
  rating: number;
  inStock: boolean;
  sortBy: 'price-asc' | 'price-desc' | 'newest' | 'popular' | 'rating';
}
