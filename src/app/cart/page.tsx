'use client';
import { Trash2, Plus, Minus, ShoppingBag, ChevronRight, Tag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, itemCount, discountCode, discountPercent, applyDiscount } = useCart();
  const [codeInput, setCodeInput] = useState('');
  const [codeError, setCodeError] = useState('');
  const [codeSuccess, setCodeSuccess] = useState('');

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleApplyCode = () => {
    if (applyDiscount(codeInput)) {
      setCodeSuccess(`Áp dụng mã ${codeInput.toUpperCase()} thành công!`);
      setCodeError('');
    } else {
      setCodeError('Mã giảm giá không hợp lệ');
      setCodeSuccess('');
    }
  };

  if (items.length === 0) {
    return (
      <div className="container-page py-32 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <ShoppingBag className="w-24 h-24 mx-auto text-text-tertiary opacity-30" />
          <h1 className="text-2xl font-heading font-bold">Giỏ hàng trống</h1>
          <p className="text-text-secondary">Bạn chưa thêm sản phẩm nào vào giỏ hàng</p>
          <Link href="/products" className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-base">
            Tiếp tục mua sắm <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container-page py-12">
      <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
        <Link href="/" className="hover:text-accent-primary">Trang chủ</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-text-primary">Giỏ hàng ({itemCount})</span>
      </div>

      <h1 className="text-2xl md:text-3xl font-heading font-bold mb-8">
        Giỏ hàng <span className="gradient-text">của bạn</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={item.product.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-4 flex gap-4"
            >
              <div className="w-24 h-24 rounded-xl bg-bg-tertiary/30 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl opacity-30">📦</span>
              </div>
              <div className="flex-1 min-w-0">
                <Link href={`/products/${item.product.slug}`} className="font-medium text-sm hover:text-accent-primary transition-colors line-clamp-2">
                  {item.product.name}
                </Link>
                <p className="text-xs text-text-tertiary mt-1">{item.product.brand} • {item.product.subcategory}</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-8 h-8 rounded-lg glass-card flex items-center justify-center hover:border-accent-primary/50 transition-all">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-8 h-8 rounded-lg glass-card flex items-center justify-center hover:border-accent-primary/50 transition-all">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <span className="font-bold text-accent-primary">{formatPrice(item.product.price * item.quantity)}</span>
                  <button onClick={() => removeItem(item.product.id)} className="p-2 rounded-lg hover:bg-error/10 text-text-tertiary hover:text-error transition-all">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="glass-card p-6 space-y-5 sticky top-24">
            <h3 className="font-heading font-bold text-lg">Tóm tắt đơn hàng</h3>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-text-secondary">
                <span>Tạm tính ({itemCount} sản phẩm)</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-text-secondary">
                <span>Phí vận chuyển</span>
                <span className="text-success">Miễn phí</span>
              </div>
              {discountPercent > 0 && (
                <div className="flex justify-between text-success">
                  <span>Giảm giá ({discountCode})</span>
                  <span>-{formatPrice(subtotal * discountPercent / 100)}</span>
                </div>
              )}
            </div>

            {/* Discount code */}
            <div>
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
                  <input
                    type="text"
                    value={codeInput}
                    onChange={(e) => setCodeInput(e.target.value)}
                    placeholder="Nhập mã giảm giá"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary/50"
                  />
                </div>
                <button onClick={handleApplyCode} className="px-4 py-2.5 rounded-xl bg-accent-primary/10 text-accent-primary text-sm font-medium hover:bg-accent-primary/20 transition-all">
                  Áp dụng
                </button>
              </div>
              {codeError && <p className="text-xs text-error mt-1">{codeError}</p>}
              {codeSuccess && <p className="text-xs text-success mt-1">{codeSuccess}</p>}
              <p className="text-xs text-text-tertiary mt-2">Thử: CYBER10, CYBER20, NEWUSER</p>
            </div>

            <div className="border-t border-white/10 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-heading font-bold">Tổng cộng</span>
                <span className="text-2xl font-bold gradient-text">{formatPrice(total)}</span>
              </div>
              <p className="text-xs text-text-tertiary mt-1">(Đã bao gồm VAT)</p>
            </div>

            <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold text-lg neon-glow hover:shadow-xl hover:shadow-accent-primary/25 transition-all hover:-translate-y-0.5">
              Thanh toán
            </button>

            <Link href="/products" className="block text-center text-sm text-accent-primary hover:text-accent-secondary transition-colors">
              ← Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
