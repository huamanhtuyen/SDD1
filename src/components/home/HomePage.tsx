'use client';
import Link from 'next/link';
import { ArrowRight, Cpu, Laptop, Smartphone, Monitor, Headphones, Tv, Wifi, Watch, Zap, ChevronRight, Timer, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/product/ProductCard';
import { getFeaturedProducts, getFlashSaleProducts, getNewProducts } from '@/lib/data';
import categories from '@/data/categories';
import { formatPrice } from '@/lib/utils';
import { useState, useEffect } from 'react';

const iconMap: Record<string, React.ElementType> = {
  Cpu, Laptop, Smartphone, Monitor, Headphones, Tv, Wifi, Watch,
};

function CountdownTimer() {
  const [time, setTime] = useState({ hours: 4, minutes: 32, seconds: 15 });
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2">
      {[
        { val: time.hours, label: 'Giờ' },
        { val: time.minutes, label: 'Phút' },
        { val: time.seconds, label: 'Giây' },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="bg-gradient-to-b from-accent-primary to-accent-tertiary rounded-lg px-3 py-1.5 min-w-[48px] text-center">
            <span className="text-xl font-bold text-white font-heading">
              {String(item.val).padStart(2, '0')}
            </span>
            <p className="text-[10px] text-white/70">{item.label}</p>
          </div>
          {i < 2 && <span className="text-xl text-accent-primary font-bold">:</span>}
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  const featured = getFeaturedProducts(8);
  const flashSale = getFlashSaleProducts(6);
  const newProducts = getNewProducts(8);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 via-transparent to-bg-primary" />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-primary/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-tertiary/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1.5s' }} />

        <div className="relative container-page py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-sm text-accent-primary mb-6">
              <Zap className="w-4 h-4" />
              <span>Flash Sale giảm đến 50% — Chỉ hôm nay</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
              <span className="text-text-primary">Công nghệ </span>
              <span className="gradient-text">đỉnh cao</span>
              <br />
              <span className="text-text-primary">Giá </span>
              <span className="gradient-text-purple">tốt nhất</span>
            </h1>

            <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8 leading-relaxed">
              Linh kiện PC, Laptop Gaming, Điện thoại & Phụ kiện chính hãng.
              Giao hàng nhanh 2h, bảo hành tận nơi.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link href="/products" className="btn-primary flex items-center gap-2 px-8 py-3 text-base neon-glow">
                <span>Khám phá ngay</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/build-pc" className="btn-secondary flex items-center gap-2 px-8 py-3 text-base">
                <Cpu className="w-5 h-5 text-accent-primary" />
                <span>Build PC</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="container-page py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-heading font-bold mb-2">
            <span className="gradient-text">Danh mục</span> sản phẩm
          </h2>
          <p className="text-text-secondary">Khám phá hàng nghìn sản phẩm công nghệ chính hãng</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Cpu;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={`/products?category=${cat.slug}`}
                  className="glass-card glass-card-hover p-6 flex flex-col items-center text-center gap-3 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center group-hover:from-accent-primary/30 group-hover:to-accent-secondary/30 transition-all">
                    <Icon className="w-7 h-7 text-accent-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-sm text-text-primary">{cat.name}</h3>
                  <p className="text-xs text-text-tertiary">{cat.productCount}+ sản phẩm</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Section Divider — NFR-12 */}
      <div className="container-page"><div className="h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" /></div>

      {/* Flash Sale */}
      <section className="container-page py-16">
        <div className="glass-card p-6 md:p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-error/5 via-transparent to-accent-primary/5" />
          <div className="relative">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-error/10 flex items-center justify-center">
                  <Flame className="w-6 h-6 text-error" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold flex items-center gap-2">
                    <span className="text-error">Flash</span>
                    <span className="gradient-text">Sale</span>
                  </h2>
                  <p className="text-sm text-text-secondary">Kết thúc trong</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <CountdownTimer />
                <Link href="/products" className="hidden md:flex items-center gap-1 text-sm text-accent-primary hover:text-accent-secondary transition-colors">
                  Xem tất cả <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
              {flashSale.map((product, i) => (
                <div key={product.id} className="product-card p-3 space-y-2">
                  <div className="aspect-square rounded-lg bg-bg-tertiary/30 overflow-hidden">
                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-xs text-text-secondary line-clamp-2">{product.name}</p>
                  <div>
                    <p className="text-sm font-bold text-error">{formatPrice(product.price)}</p>
                    <p className="text-xs text-text-tertiary line-through">{formatPrice(product.originalPrice)}</p>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-error/20">
                    <div className="h-full rounded-full bg-gradient-to-r from-error to-warning" style={{ width: `${(product.price % 40) + 50}%` }} />
                  </div>
                  <p className="text-[10px] text-text-tertiary">Đã bán {(product.price % 200) + 50}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider — NFR-12 */}
      <div className="container-page"><div className="h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" /></div>

      {/* Featured Products */}
      <section className="container-page py-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold">
              Sản phẩm <span className="gradient-text">nổi bật</span>
            </h2>
            <p className="text-sm text-text-secondary mt-1">Được khách hàng yêu thích nhất</p>
          </div>
          <Link href="/products" className="flex items-center gap-1 text-sm text-accent-primary hover:text-accent-secondary transition-colors">
            Xem tất cả <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* Section Divider — NFR-12 */}
      <div className="container-page"><div className="h-px bg-gradient-to-r from-transparent via-accent-secondary/20 to-transparent" /></div>

      {/* New Products */}
      <section className="container-page py-16">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold">
              Sản phẩm <span className="gradient-text-purple">mới nhất</span>
            </h2>
            <p className="text-sm text-text-secondary mt-1">Vừa cập nhật trong tuần</p>
          </div>
          <Link href="/products?sort=newest" className="flex items-center gap-1 text-sm text-accent-primary hover:text-accent-secondary transition-colors">
            Xem tất cả <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* Section Divider — NFR-12 */}
      <div className="container-page"><div className="h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" /></div>

      {/* Banner */}
      <section className="container-page py-16">
        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 to-accent-tertiary/10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/5 rounded-full blur-[100px]" />
          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ráp máy tính với <span className="gradient-text">CyberGravity</span>
            </h2>
            <p className="text-text-secondary mb-6">
              Chọn linh kiện, kiểm tra tương thích, và mua cả bộ với giá tốt nhất. Hỗ trợ tư vấn bởi AI.
            </p>
            <Link href="/build-pc" className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-base neon-glow">
              <Cpu className="w-5 h-5" />
              <span>Bắt đầu Build PC</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
