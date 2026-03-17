import { products, reviews } from '@/data/products';
import categories from '@/data/categories';
import { Product, Category, Review, FilterState } from './types';

export function getCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string, limit?: number): Product[] {
  const filtered = products.filter(p => p.category === category);
  return limit ? filtered.slice(0, limit) : filtered;
}

export function getProductsBySubcategory(subcategory: string, limit?: number): Product[] {
  const filtered = products.filter(p => p.subcategory === subcategory);
  return limit ? filtered.slice(0, limit) : filtered;
}

export function getFeaturedProducts(limit: number = 8): Product[] {
  return products.filter(p => p.isFeatured).slice(0, limit);
}

export function getNewProducts(limit: number = 8): Product[] {
  return products.filter(p => p.isNew).slice(0, limit);
}

export function getFlashSaleProducts(limit: number = 6): Product[] {
  return products.filter(p => p.discount >= 15).slice(0, limit);
}

export function searchProducts(query: string, limit?: number): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.subcategory.toLowerCase().includes(q) ||
    p.tags.some(t => t.includes(q))
  );
  return limit ? filtered.slice(0, limit) : filtered;
}

export function filterProducts(
  productList: Product[],
  filters: Partial<FilterState>
): Product[] {
  let result = [...productList];

  if (filters.priceRange) {
    const [min, max] = filters.priceRange;
    result = result.filter(p => p.price >= min && p.price <= max);
  }

  if (filters.brands && filters.brands.length > 0) {
    result = result.filter(p => filters.brands!.includes(p.brand));
  }

  if (filters.rating && filters.rating > 0) {
    result = result.filter(p => p.rating >= filters.rating!);
  }

  if (filters.inStock) {
    result = result.filter(p => p.stock > 0);
  }

  if (filters.sortBy) {
    switch (filters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'popular':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
    }
  }

  return result;
}

export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return products
    .filter(p => p.id !== product.id && p.subcategory === product.subcategory)
    .slice(0, limit);
}

export function getReviewsByProductId(productId: string): Review[] {
  return reviews.filter(r => r.productId === productId);
}

export function getBrands(category?: string): string[] {
  const filtered = category ? products.filter(p => p.category === category) : products;
  return [...new Set(filtered.map(p => p.brand))].sort();
}

export function getPriceRange(category?: string): [number, number] {
  const filtered = category ? products.filter(p => p.category === category) : products;
  const prices = filtered.map(p => p.price);
  return [Math.min(...prices), Math.max(...prices)];
}

export function getBuildPCProducts(subcategory: string): Product[] {
  const subMap: Record<string, string> = {
    cpu: 'CPU - Bộ vi xử lý',
    gpu: 'VGA - Card đồ họa',
    mainboard: 'Mainboard',
    ram: 'RAM',
    ssd: 'SSD / HDD',
    psu: 'PSU - Nguồn máy tính',
    'case': 'Case - Vỏ máy tính',
    cooling: 'Tản nhiệt',
  };
  return products.filter(p => p.subcategory === subMap[subcategory]).sort((a, b) => a.price - b.price);
}
