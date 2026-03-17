'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, X, Globe, ChevronDown, Cpu, Laptop, Smartphone, Monitor, Headphones, Tv, Wifi, Watch } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const navCategories = [
  { name: 'Linh kiện PC', slug: 'linh-kien-pc', icon: Cpu },
  { name: 'Laptop', slug: 'laptop', icon: Laptop },
  { name: 'Điện thoại', slug: 'dien-thoai', icon: Smartphone },
  { name: 'Màn hình', slug: 'man-hinh', icon: Monitor },
  { name: 'Phụ kiện', slug: 'phu-kien', icon: Headphones },
  { name: 'Điện máy', slug: 'dien-may', icon: Tv },
  { name: 'Thiết bị mạng', slug: 'thiet-bi-mang', icon: Wifi },
  { name: 'Đồng hồ', slug: 'dong-ho-thong-minh', icon: Watch },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { itemCount, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-bg-primary/80 backdrop-blur-xl border-b border-white/5">
        <div className="container-page py-2 flex items-center justify-between text-xs text-text-secondary">
          <span>🚀 Miễn phí vận chuyển cho đơn hàng từ 500.000đ</span>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 hover:text-text-primary transition-colors">
              <Globe className="w-3 h-3" />
              <span>Tiếng Việt</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            <span>Hotline: 1900.xxxx</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-bg-secondary/80 backdrop-blur-xl border-b border-white/10">
        <div className="container-page py-3 flex items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center neon-glow transition-all duration-300">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold font-heading gradient-text">Cyber</span>
              <span className="text-xl font-bold font-heading text-text-primary">Gravity</span>
            </div>
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl relative">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm, thương hiệu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && searchQuery.trim()) {
                  window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
                }
              }}
              className="w-full pl-4 pr-12 py-2.5 rounded-xl bg-white/5 border border-white/10 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/25 transition-all"
            />
            <button 
              onClick={() => {
                if (searchQuery.trim()) {
                  window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
                }
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary hover:opacity-90 transition-opacity"
            >
              <Search className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link href="/build-pc" className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl neon-border hover:bg-white/5 transition-all text-sm text-text-secondary hover:text-text-primary">
              <Cpu className="w-4 h-4 text-accent-primary" />
              <span>Build PC</span>
            </Link>

            <Link href="/auth" className="p-2.5 rounded-xl hover:bg-white/5 transition-all group">
              <User className="w-5 h-5 text-text-secondary group-hover:text-text-primary transition-colors" />
            </Link>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl hover:bg-white/5 transition-all group"
            >
              <ShoppingCart className="w-5 h-5 text-text-secondary group-hover:text-text-primary transition-colors" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-xs flex items-center justify-center font-semibold animate-pulse-neon">
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-white/5 transition-all"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Category nav */}
        <nav className="hidden lg:block container-page pb-2">
          <div className="flex items-center gap-1">
            {navCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all group"
              >
                <cat.icon className="w-4 h-4 text-text-tertiary group-hover:text-accent-primary transition-colors" />
                <span>{cat.name}</span>
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-bg-secondary/95 backdrop-blur-xl border-b border-white/10 p-4 space-y-2">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-white/5 border border-white/10 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary/50"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
          </div>
          {navCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all"
            >
              <cat.icon className="w-5 h-5 text-accent-primary" />
              <span>{cat.name}</span>
            </Link>
          ))}
          <Link
            href="/build-pc"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-accent-primary hover:bg-white/5 transition-all font-medium"
          >
            <Cpu className="w-5 h-5" />
            <span>Build PC</span>
          </Link>
        </div>
      )}
    </header>
  );
}
