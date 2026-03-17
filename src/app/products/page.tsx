'use client';
import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import { SlidersHorizontal, Grid3X3, List, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { getAllProducts, getProductsByCategory, filterProducts, getBrands, getCategories } from '@/lib/data';
import { formatPrice } from '@/lib/utils';

function ProductListingContent() {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');
  const cats = getCategories();
  const currentCat = cats.find(c => c.slug === categorySlug);

  const allProducts = categorySlug ? getProductsByCategory(currentCat?.name || '') : getAllProducts();
  const brands = getBrands(currentCat?.name);

  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'newest' | 'popular' | 'rating'>('popular');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000000]);
  const [minRating, setMinRating] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 12;

  const filtered = useMemo(() => {
    return filterProducts(allProducts, {
      sortBy,
      brands: selectedBrands.length > 0 ? selectedBrands : undefined,
      priceRange,
      rating: minRating,
    });
  }, [allProducts, sortBy, selectedBrands, priceRange, minRating]);

  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
    setCurrentPage(1);
  };

  return (
    <div className="container-page py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
        <Link href="/" className="hover:text-accent-primary transition-colors">Trang chủ</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-text-primary">{currentCat?.name || 'Tất cả sản phẩm'}</span>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-heading font-bold">
          {currentCat?.name || 'Tất cả sản phẩm'}
          <span className="text-sm font-normal text-text-secondary ml-3">({filtered.length} sản phẩm)</span>
        </h1>
        <div className="flex items-center gap-3">
          <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden p-2 rounded-xl glass-card">
            <SlidersHorizontal className="w-5 h-5" />
          </button>
          <div className="hidden md:flex items-center gap-1 glass-card p-1 rounded-xl">
            <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-accent-primary/20 text-accent-primary' : 'text-text-tertiary hover:text-text-primary'}`}>
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-accent-primary/20 text-accent-primary' : 'text-text-tertiary hover:text-text-primary'}`}>
              <List className="w-4 h-4" />
            </button>
          </div>
          <select
            value={sortBy}
            onChange={(e) => { setSortBy(e.target.value as typeof sortBy); setCurrentPage(1); }}
            className="px-4 py-2 rounded-xl bg-bg-tertiary border border-white/10 text-sm text-text-primary focus:outline-none focus:border-accent-primary/50"
          >
            <option value="popular">Bán chạy nhất</option>
            <option value="newest">Mới nhất</option>
            <option value="price-asc">Giá thấp → cao</option>
            <option value="price-desc">Giá cao → thấp</option>
            <option value="rating">Đánh giá cao</option>
          </select>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Sidebar filters */}
        <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
          <div className="glass-card p-5 space-y-6 sticky top-24">
            <div>
              <h3 className="font-heading font-semibold text-sm mb-3">Danh mục</h3>
              <div className="space-y-1.5">
                <Link href="/products" className={`block text-sm px-3 py-1.5 rounded-lg transition-all ${!categorySlug ? 'bg-accent-primary/10 text-accent-primary' : 'text-text-secondary hover:text-text-primary hover:bg-white/5'}`}>
                  Tất cả
                </Link>
                {cats.map((cat) => (
                  <Link key={cat.id} href={`/products?category=${cat.slug}`} className={`block text-sm px-3 py-1.5 rounded-lg transition-all ${categorySlug === cat.slug ? 'bg-accent-primary/10 text-accent-primary' : 'text-text-secondary hover:text-text-primary hover:bg-white/5'}`}>
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-sm mb-3">Khoảng giá</h3>
              <div className="space-y-2">
                {[
                  [0, 5000000, 'Dưới 5 triệu'],
                  [5000000, 15000000, '5 - 15 triệu'],
                  [15000000, 30000000, '15 - 30 triệu'],
                  [30000000, 200000000, 'Trên 30 triệu'],
                ].map(([min, max, label]) => (
                  <button key={String(label)} onClick={() => { setPriceRange([min as number, max as number]); setCurrentPage(1); }} className={`block w-full text-left text-sm px-3 py-1.5 rounded-lg transition-all ${priceRange[0] === min && priceRange[1] === max ? 'bg-accent-primary/10 text-accent-primary' : 'text-text-secondary hover:text-text-primary hover:bg-white/5'}`}>
                    {label as string}
                  </button>
                ))}
                <button onClick={() => { setPriceRange([0, 200000000]); setCurrentPage(1); }} className="text-xs text-accent-primary hover:text-accent-secondary">
                  Xóa bộ lọc
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-sm mb-3">Thương hiệu</h3>
              <div className="space-y-1.5 max-h-48 overflow-y-auto">
                {brands.slice(0, 15).map((brand) => (
                  <label key={brand} className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="rounded border-white/20 bg-white/5 text-accent-primary focus:ring-accent-primary/50"
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-sm mb-3">Đánh giá</h3>
              {[4, 3, 2].map((rating) => (
                <button key={rating} onClick={() => { setMinRating(minRating === rating ? 0 : rating); setCurrentPage(1); }} className={`block w-full text-left text-sm px-3 py-1.5 rounded-lg transition-all ${minRating === rating ? 'bg-accent-primary/10 text-accent-primary' : 'text-text-secondary hover:text-text-primary hover:bg-white/5'}`}>
                  {'★'.repeat(rating)}{'☆'.repeat(5 - rating)} trở lên
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1">
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1'}`}>
            {paginated.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          {paginated.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-secondary text-lg">Không tìm thấy sản phẩm nào</p>
              <button onClick={() => { setSelectedBrands([]); setPriceRange([0, 200000000]); setMinRating(0); }} className="mt-4 btn-primary text-sm">
                Xóa bộ lọc
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => i + 1).map((page) => (
                <button key={page} onClick={() => setCurrentPage(page)} className={`w-10 h-10 rounded-xl text-sm font-medium transition-all ${currentPage === page ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white neon-glow' : 'glass-card text-text-secondary hover:text-text-primary hover:border-accent-primary/30'}`}>
                  {page}
                </button>
              ))}
              {totalPages > 7 && (
                <>
                  <span className="text-text-tertiary">...</span>
                  <button onClick={() => setCurrentPage(totalPages)} className="w-10 h-10 rounded-xl text-sm font-medium glass-card text-text-secondary hover:text-text-primary">{totalPages}</button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-96"><div className="animate-spin w-8 h-8 border-2 border-accent-primary border-t-transparent rounded-full"></div></div>}>
      <ProductListingContent />
    </Suspense>
  );
}
