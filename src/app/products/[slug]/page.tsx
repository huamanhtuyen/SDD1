'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronRight, Star, ShoppingCart, Minus, Plus, Heart, Share2, Shield, Truck, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { getProductBySlug, getRelatedProducts, getReviewsByProductId } from '@/lib/data';
import { formatPrice, getTimeAgo } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-heading font-bold mb-4">Không tìm thấy sản phẩm</h1>
        <Link href="/products" className="btn-primary">Quay lại danh sách</Link>
      </div>
    );
  }

  const reviews = getReviewsByProductId(product.id);
  const related = getRelatedProducts(product, 4);
  const tabs = [
    { id: 'description', label: 'Mô tả' },
    { id: 'specs', label: 'Thông số kỹ thuật' },
    { id: 'reviews', label: `Đánh giá (${reviews.length})` },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-text-secondary mb-6 flex-wrap">
        <Link href="/" className="hover:text-accent-primary transition-colors">Trang chủ</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/products" className="hover:text-accent-primary transition-colors">Sản phẩm</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href={`/products?category=${product.category}`} className="hover:text-accent-primary transition-colors">{product.category}</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-text-primary truncate max-w-[200px]">{product.name}</span>
      </div>

      {/* Product main */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Gallery */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
          <div className="aspect-square rounded-xl bg-bg-tertiary/30 flex items-center justify-center mb-4">
            <span className="text-8xl opacity-20">📦</span>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-20 h-20 rounded-lg bg-bg-tertiary/30 border border-white/10 flex items-center justify-center cursor-pointer hover:border-accent-primary/50 transition-all">
                <span className="text-2xl opacity-20">📦</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Info */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
          <div>
            <p className="text-sm text-accent-primary font-medium mb-1">{product.brand}</p>
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">{product.name}</h1>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className={`w-5 h-5 ${star <= Math.round(product.rating) ? 'text-warning fill-warning' : 'text-text-tertiary'}`} />
              ))}
            </div>
            <span className="text-sm text-text-secondary">{product.rating}/5 ({product.reviewCount} đánh giá)</span>
          </div>

          {/* Price */}
          <div className="glass-card p-4">
            <div className="flex items-end gap-3">
              <span className="text-3xl font-bold gradient-text">{formatPrice(product.price)}</span>
              {product.discount > 0 && (
                <>
                  <span className="text-lg text-text-tertiary line-through">{formatPrice(product.originalPrice)}</span>
                  <span className="px-2 py-0.5 rounded-md bg-error/90 text-white text-sm font-bold">-{product.discount}%</span>
                </>
              )}
            </div>
          </div>

          {/* Stock */}
          <div className={`text-sm font-medium ${product.stock > 0 ? 'text-success' : 'text-error'}`}>
            {product.stock > 0 ? `✅ Còn hàng (${product.stock} sản phẩm)` : '❌ Hết hàng'}
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-text-secondary">Số lượng:</span>
            <div className="flex items-center gap-1">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:border-accent-primary/50 transition-all">
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center font-semibold">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-xl glass-card flex items-center justify-center hover:border-accent-primary/50 transition-all">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={() => addItem(product, quantity)}
              disabled={product.stock === 0}
              className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold text-lg neon-glow hover:shadow-xl hover:shadow-accent-primary/25 disabled:opacity-50 transition-all hover:-translate-y-0.5"
            >
              <ShoppingCart className="w-5 h-5" />
              Thêm vào giỏ hàng
            </button>
            <button className="w-14 h-14 rounded-xl glass-card flex items-center justify-center hover:border-accent-primary/50 hover:text-accent-primary transition-all">
              <Heart className="w-5 h-5" />
            </button>
            <button className="w-14 h-14 rounded-xl glass-card flex items-center justify-center hover:border-accent-primary/50 hover:text-accent-primary transition-all">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: Shield, text: 'Bảo hành 24 tháng' },
              { icon: Truck, text: 'Giao hàng nhanh 2h' },
              { icon: RefreshCw, text: 'Đổi trả 30 ngày' },
            ].map((item, i) => (
              <div key={i} className="glass-card p-3 flex flex-col items-center text-center gap-1.5">
                <item.icon className="w-5 h-5 text-accent-primary" />
                <span className="text-xs text-text-secondary">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="mb-12">
        <div className="flex gap-1 mb-6 border-b border-white/10 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${
                activeTab === tab.id
                  ? 'border-accent-primary text-accent-primary'
                  : 'border-transparent text-text-secondary hover:text-text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="glass-card p-6">
          {activeTab === 'description' && (
            <div className="prose prose-invert max-w-none">
              <p className="text-text-secondary leading-relaxed">{product.description}</p>
              <p className="text-text-secondary leading-relaxed mt-4">
                {product.name} là sản phẩm thuộc danh mục {product.category} - {product.subcategory}.
                Sản phẩm được CyberGravity cam kết chính hãng 100%, bảo hành chính hãng 24 tháng.
                Giao hàng nhanh trong 2 giờ nội thành, đổi trả miễn phí trong 30 ngày nếu lỗi do nhà sản xuất.
              </p>
            </div>
          )}
          {activeTab === 'specs' && (
            <div className="divide-y divide-white/5">
              {Object.entries(product.specs).map(([key, value], i) => (
                <div key={key} className={`flex py-3 text-sm ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                  <span className="w-1/3 text-text-secondary px-3">{key}</span>
                  <span className="w-2/3 text-text-primary px-3">{value}</span>
                </div>
              ))}
              <div className="flex py-3 text-sm">
                <span className="w-1/3 text-text-secondary px-3">Thương hiệu</span>
                <span className="w-2/3 text-text-primary px-3">{product.brand}</span>
              </div>
              <div className="flex py-3 text-sm bg-white/[0.02]">
                <span className="w-1/3 text-text-secondary px-3">Bảo hành</span>
                <span className="w-2/3 text-text-primary px-3">24 tháng chính hãng</span>
              </div>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div className="space-y-4">
              {reviews.length === 0 ? (
                <p className="text-center text-text-secondary py-8">Chưa có đánh giá nào</p>
              ) : (
                reviews.slice(0, 10).map((review) => (
                  <div key={review.id} className="flex gap-4 p-4 rounded-xl bg-white/[0.02]">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-primary/30 to-accent-secondary/30 flex items-center justify-center flex-shrink-0 text-sm font-bold text-accent-primary">
                      {review.userName.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{review.userName}</span>
                        <span className="text-xs text-text-tertiary">{getTimeAgo(review.createdAt)}</span>
                      </div>
                      <div className="flex items-center gap-0.5 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className={`w-3 h-3 ${star <= review.rating ? 'text-warning fill-warning' : 'text-text-tertiary'}`} />
                        ))}
                      </div>
                      <p className="text-sm text-text-secondary">{review.comment}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section>
          <h2 className="text-2xl font-heading font-bold mb-6">Sản phẩm <span className="gradient-text">liên quan</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
