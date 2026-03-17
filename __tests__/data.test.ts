import {
  getAllProducts,
  getProductBySlug,
  getProductsByCategory,
  getProductsBySubcategory,
  getFeaturedProducts,
  getNewProducts,
  getFlashSaleProducts,
  searchProducts,
  filterProducts,
  getRelatedProducts,
  getCategories,
  getCategoryBySlug,
  getBrands,
  getPriceRange,
  getBuildPCProducts,
  getReviewsByProductId,
} from '@/lib/data';

describe('getCategories', () => {
  test('returns all categories', () => {
    const cats = getCategories();
    expect(cats.length).toBeGreaterThanOrEqual(8);
  });

  test('each category has required fields', () => {
    const cats = getCategories();
    cats.forEach(cat => {
      expect(cat).toHaveProperty('id');
      expect(cat).toHaveProperty('name');
      expect(cat).toHaveProperty('slug');
      expect(cat).toHaveProperty('icon');
    });
  });
});

describe('getCategoryBySlug', () => {
  test('finds category by slug', () => {
    const cat = getCategoryBySlug('linh-kien-pc');
    expect(cat).toBeDefined();
    expect(cat!.slug).toBe('linh-kien-pc');
  });

  test('returns undefined for non-existent slug', () => {
    expect(getCategoryBySlug('non-existent')).toBeUndefined();
  });
});

describe('getAllProducts', () => {
  test('returns large product array', () => {
    const products = getAllProducts();
    expect(products.length).toBeGreaterThanOrEqual(900);
  });

  test('each product has required fields', () => {
    const products = getAllProducts().slice(0, 5);
    products.forEach(p => {
      expect(p).toHaveProperty('id');
      expect(p).toHaveProperty('name');
      expect(p).toHaveProperty('slug');
      expect(p).toHaveProperty('price');
      expect(p).toHaveProperty('brand');
      expect(p).toHaveProperty('category');
      expect(p).toHaveProperty('subcategory');
      expect(p).toHaveProperty('rating');
      expect(p).toHaveProperty('stock');
      expect(typeof p.price).toBe('number');
      expect(p.price).toBeGreaterThan(0);
    });
  });
});

describe('getProductBySlug', () => {
  test('finds product by slug', () => {
    const allProducts = getAllProducts();
    const first = allProducts[0];
    const found = getProductBySlug(first.slug);
    expect(found).toBeDefined();
    expect(found!.id).toBe(first.id);
  });

  test('returns undefined for non-existent slug', () => {
    expect(getProductBySlug('non-existent-product-123')).toBeUndefined();
  });
});

describe('getProductsByCategory', () => {
  test('filters products by category', () => {
    const products = getProductsByCategory('Linh kiện PC');
    expect(products.length).toBeGreaterThan(0);
    products.forEach(p => {
      expect(p.category).toBe('Linh kiện PC');
    });
  });

  test('returns empty array for non-existent category', () => {
    expect(getProductsByCategory('Non-existent')).toHaveLength(0);
  });

  test('respects limit parameter', () => {
    const products = getProductsByCategory('Linh kiện PC', 5);
    expect(products.length).toBeLessThanOrEqual(5);
  });
});

describe('getProductsBySubcategory', () => {
  test('filters by subcategory', () => {
    const products = getProductsBySubcategory('CPU - Bộ vi xử lý');
    expect(products.length).toBeGreaterThan(0);
    products.forEach(p => {
      expect(p.subcategory).toBe('CPU - Bộ vi xử lý');
    });
  });
});

describe('getFeaturedProducts', () => {
  test('returns featured products', () => {
    const products = getFeaturedProducts();
    expect(products.length).toBeGreaterThan(0);
    expect(products.length).toBeLessThanOrEqual(8);
    products.forEach(p => {
      expect(p.isFeatured).toBe(true);
    });
  });

  test('respects limit parameter', () => {
    const products = getFeaturedProducts(3);
    expect(products.length).toBeLessThanOrEqual(3);
  });
});

describe('getNewProducts', () => {
  test('returns new products', () => {
    const products = getNewProducts();
    expect(products.length).toBeGreaterThan(0);
    products.forEach(p => {
      expect(p.isNew).toBe(true);
    });
  });
});

describe('getFlashSaleProducts', () => {
  test('returns products with ≥15% discount', () => {
    const products = getFlashSaleProducts();
    expect(products.length).toBeGreaterThan(0);
    products.forEach(p => {
      expect(p.discount).toBeGreaterThanOrEqual(15);
    });
  });
});

describe('searchProducts', () => {
  test('finds products by name', () => {
    const allProducts = getAllProducts();
    const target = allProducts[0].name.split(' ')[0]; // first word
    const results = searchProducts(target);
    expect(results.length).toBeGreaterThan(0);
  });

  test('finds products by brand (case insensitive)', () => {
    const results = searchProducts('intel');
    expect(results.length).toBeGreaterThan(0);
    results.forEach(p => {
      const matchesAnyField = 
        p.name.toLowerCase().includes('intel') ||
        p.brand.toLowerCase().includes('intel') ||
        p.category.toLowerCase().includes('intel') ||
        p.subcategory.toLowerCase().includes('intel') ||
        p.tags.some(t => t.includes('intel'));
      expect(matchesAnyField).toBe(true);
    });
  });

  test('returns empty for empty query', () => {
    expect(searchProducts('')).toHaveLength(0);
  });

  test('returns empty for whitespace query', () => {
    expect(searchProducts('   ')).toHaveLength(0);
  });

  test('returns empty for no matches', () => {
    expect(searchProducts('xyznonexistent123')).toHaveLength(0);
  });

  test('respects limit', () => {
    const results = searchProducts('intel', 3);
    expect(results.length).toBeLessThanOrEqual(3);
  });
});

describe('filterProducts', () => {
  const allProducts = getAllProducts();

  test('filters by price range', () => {
    const filtered = filterProducts(allProducts, {
      priceRange: [1000000, 5000000],
    });
    expect(filtered.length).toBeGreaterThan(0);
    filtered.forEach(p => {
      expect(p.price).toBeGreaterThanOrEqual(1000000);
      expect(p.price).toBeLessThanOrEqual(5000000);
    });
  });

  test('filters by brands', () => {
    const filtered = filterProducts(allProducts, {
      brands: ['Intel', 'AMD'],
    });
    expect(filtered.length).toBeGreaterThan(0);
    filtered.forEach(p => {
      expect(['Intel', 'AMD']).toContain(p.brand);
    });
  });

  test('filters by rating', () => {
    const filtered = filterProducts(allProducts, { rating: 4 });
    expect(filtered.length).toBeGreaterThan(0);
    filtered.forEach(p => {
      expect(p.rating).toBeGreaterThanOrEqual(4);
    });
  });

  test('filters by inStock', () => {
    const filtered = filterProducts(allProducts, { inStock: true });
    filtered.forEach(p => {
      expect(p.stock).toBeGreaterThan(0);
    });
  });

  test('sorts by price ascending', () => {
    const filtered = filterProducts(allProducts, { sortBy: 'price-asc' });
    for (let i = 1; i < filtered.length; i++) {
      expect(filtered[i].price).toBeGreaterThanOrEqual(filtered[i - 1].price);
    }
  });

  test('sorts by price descending', () => {
    const filtered = filterProducts(allProducts, { sortBy: 'price-desc' });
    for (let i = 1; i < filtered.length; i++) {
      expect(filtered[i].price).toBeLessThanOrEqual(filtered[i - 1].price);
    }
  });

  test('sorts by rating', () => {
    const filtered = filterProducts(allProducts, { sortBy: 'rating' });
    for (let i = 1; i < filtered.length; i++) {
      expect(filtered[i].rating).toBeLessThanOrEqual(filtered[i - 1].rating);
    }
  });

  test('sorts by popular (reviewCount)', () => {
    const filtered = filterProducts(allProducts, { sortBy: 'popular' });
    for (let i = 1; i < filtered.length; i++) {
      expect(filtered[i].reviewCount).toBeLessThanOrEqual(filtered[i - 1].reviewCount);
    }
  });

  test('returns all when no filters applied', () => {
    const filtered = filterProducts(allProducts, {});
    expect(filtered.length).toBe(allProducts.length);
  });
});

describe('getRelatedProducts', () => {
  test('returns products in same subcategory, excluding source', () => {
    const all = getAllProducts();
    const source = all[0];
    const related = getRelatedProducts(source);
    expect(related.length).toBeLessThanOrEqual(4);
    related.forEach(p => {
      expect(p.id).not.toBe(source.id);
      expect(p.subcategory).toBe(source.subcategory);
    });
  });
});

describe('getReviewsByProductId', () => {
  test('returns reviews for a product', () => {
    const all = getAllProducts();
    const product = all[0];
    const reviews = getReviewsByProductId(product.id);
    // May have 0 or more reviews
    expect(Array.isArray(reviews)).toBe(true);
    reviews.forEach(r => {
      expect(r.productId).toBe(product.id);
    });
  });
});

describe('getBrands', () => {
  test('returns sorted unique brands', () => {
    const brands = getBrands();
    expect(brands.length).toBeGreaterThan(0);
    // Check sorted
    for (let i = 1; i < brands.length; i++) {
      expect(brands[i] >= brands[i - 1]).toBe(true);
    }
    // Check unique
    expect(new Set(brands).size).toBe(brands.length);
  });

  test('filters brands by category', () => {
    const brands = getBrands('Linh kiện PC');
    expect(brands.length).toBeGreaterThan(0);
  });
});

describe('getPriceRange', () => {
  test('returns [min, max] tuple', () => {
    const [min, max] = getPriceRange();
    expect(typeof min).toBe('number');
    expect(typeof max).toBe('number');
    expect(min).toBeLessThanOrEqual(max);
    expect(min).toBeGreaterThan(0);
  });
});

describe('getBuildPCProducts', () => {
  test('returns CPU products', () => {
    const cpus = getBuildPCProducts('cpu');
    expect(cpus.length).toBeGreaterThan(0);
    cpus.forEach(p => {
      expect(p.subcategory).toBe('CPU - Bộ vi xử lý');
    });
  });

  test('returns GPU products', () => {
    const gpus = getBuildPCProducts('gpu');
    expect(gpus.length).toBeGreaterThan(0);
    gpus.forEach(p => {
      expect(p.subcategory).toBe('VGA - Card đồ họa');
    });
  });

  test('returns products sorted by price ascending', () => {
    const products = getBuildPCProducts('cpu');
    for (let i = 1; i < products.length; i++) {
      expect(products[i].price).toBeGreaterThanOrEqual(products[i - 1].price);
    }
  });

  test('returns empty for unknown subcategory', () => {
    const products = getBuildPCProducts('nonexistent');
    expect(products).toHaveLength(0);
  });
});
