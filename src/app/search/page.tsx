'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Clock, TrendingUp, X } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { searchProducts } from '@/lib/data';

function SearchContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';
  const [query, setQuery] = useState(q);
  const [results, setResults] = useState(searchProducts(q));

  useEffect(() => {
    setQuery(q);
    setResults(searchProducts(q));
  }, [q]);

  const handleSearch = (text: string) => {
    setQuery(text);
    setResults(searchProducts(text));
    window.history.replaceState({}, '', `/search?q=${encodeURIComponent(text)}`);
  };

  const popularSearches = ['RTX 4070', 'Laptop gaming', 'iPhone 16', 'Bàn phím cơ', 'Chuột gaming', 'RAM DDR5', 'SSD NVMe', 'Tai nghe'];

  return (
    <div className="container-page py-8">
      <h1 className="text-2xl md:text-3xl font-heading font-bold mb-6">
        Tìm kiếm <span className="gradient-text">sản phẩm</span>
      </h1>

      {/* Search bar */}
      <div className="relative max-w-2xl mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Tìm kiếm sản phẩm, thương hiệu..."
          className="w-full pl-12 pr-12 py-4 rounded-2xl bg-white/5 border border-white/10 text-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary/50 focus:ring-2 focus:ring-accent-primary/20 transition-all"
          autoFocus
        />
        {query && (
          <button onClick={() => handleSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-lg hover:bg-white/10">
            <X className="w-5 h-5 text-text-tertiary" />
          </button>
        )}
      </div>

      {!query ? (
        <div className="space-y-8">
          {/* Popular */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-heading font-semibold mb-4">
              <TrendingUp className="w-5 h-5 text-accent-primary" />
              Tìm kiếm phổ biến
            </h3>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((term) => (
                <button key={term} onClick={() => handleSearch(term)} className="px-4 py-2 rounded-full glass-card text-sm text-text-secondary hover:text-accent-primary hover:border-accent-primary/30 transition-all">
                  #{term}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-sm text-text-secondary mb-6">
            Tìm thấy <span className="text-text-primary font-semibold">{results.length}</span> kết quả cho &quot;<span className="text-accent-primary">{query}</span>&quot;
          </p>
          {results.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {results.slice(0, 24).map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Search className="w-16 h-16 mx-auto text-text-tertiary opacity-20 mb-4" />
              <p className="text-lg text-text-secondary">Không tìm thấy sản phẩm nào</p>
              <p className="text-sm text-text-tertiary mt-2">Thử tìm với từ khóa khác</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-96"><div className="animate-spin w-8 h-8 border-2 border-accent-primary border-t-transparent rounded-full"></div></div>}>
      <SearchContent />
    </Suspense>
  );
}
