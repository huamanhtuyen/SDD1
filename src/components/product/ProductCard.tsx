'use client';
import Link from 'next/link';
import { ShoppingCart, Star, Eye, Zap } from 'lucide-react';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="product-card overflow-hidden group"
    >
      {/* Image */}
      <Link href={`/products/${product.slug}`} className="block relative aspect-square overflow-hidden bg-bg-tertiary/50">
        <div className="w-full h-full flex items-center justify-center p-6">
          <div className="w-full h-full rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center">
            <span className="text-4xl opacity-30">📦</span>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.discount > 0 && (
            <span className="px-2 py-0.5 rounded-md bg-error/90 text-white text-xs font-bold">
              -{product.discount}%
            </span>
          )}
          {product.isNew && (
            <span className="px-2 py-0.5 rounded-md bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-xs font-bold flex items-center gap-1">
              <Zap className="w-3 h-3" /> MỚI
            </span>
          )}
        </div>

        {/* Quick actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <button className="w-8 h-8 rounded-lg bg-bg-secondary/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary/50 transition-all">
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </Link>

      {/* Info */}
      <div className="p-4 space-y-2">
        <Link href={`/products/${product.slug}`}>
          <p className="text-xs text-accent-primary font-medium">{product.brand}</p>
          <h3 className="text-sm font-medium text-text-primary line-clamp-2 mt-1 group-hover:text-accent-primary transition-colors leading-snug min-h-[2.5rem]">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-3 h-3 ${star <= Math.round(product.rating) ? 'text-warning fill-warning' : 'text-text-tertiary'}`}
              />
            ))}
          </div>
          <span className="text-xs text-text-tertiary">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-end gap-2">
          <span className="text-lg font-bold text-accent-primary">
            {formatPrice(product.price)}
          </span>
          {product.discount > 0 && (
            <span className="text-xs text-text-tertiary line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Stock */}
        <div className="flex items-center justify-between">
          <span className={`text-xs ${product.stock > 0 ? 'text-success' : 'text-error'}`}>
            {product.stock > 0 ? `Còn ${product.stock} sản phẩm` : 'Hết hàng'}
          </span>
        </div>

        {/* Add to cart */}
        <button
          onClick={() => addItem(product, 1)}
          disabled={product.stock === 0}
          className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-sm font-semibold hover:shadow-lg hover:shadow-accent-primary/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:-translate-y-0.5"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>{product.stock > 0 ? 'Thêm vào giỏ' : 'Hết hàng'}</span>
        </button>
      </div>
    </motion.div>
  );
}
