'use client';
import { useState } from 'react';
import { Cpu, MonitorSpeaker, CircuitBoard, MemoryStick, HardDrive, Plug, Box, Fan, ShoppingCart, Check, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { getBuildPCProducts } from '@/lib/data';
import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

const slots = [
  { type: 'cpu', label: 'Vi xử lý (CPU)', icon: Cpu },
  { type: 'gpu', label: 'Card đồ họa (GPU)', icon: MonitorSpeaker },
  { type: 'mainboard', label: 'Bo mạch chủ', icon: CircuitBoard },
  { type: 'ram', label: 'Bộ nhớ RAM', icon: MemoryStick },
  { type: 'ssd', label: 'Ổ cứng SSD/HDD', icon: HardDrive },
  { type: 'psu', label: 'Nguồn (PSU)', icon: Plug },
  { type: 'case', label: 'Vỏ case', icon: Box },
  { type: 'cooling', label: 'Tản nhiệt', icon: Fan },
] as const;

export default function BuildPCPage() {
  const [selected, setSelected] = useState<Record<string, Product | null>>({});
  const [openSlot, setOpenSlot] = useState<string | null>(null);
  const { addItem } = useCart();
  const totalPrice = Object.values(selected).reduce((sum, p) => sum + (p?.price || 0), 0);
  const selectedCount = Object.values(selected).filter(Boolean).length;

  const handleSelect = (slotType: string, product: Product) => {
    setSelected(prev => ({ ...prev, [slotType]: product }));
    setOpenSlot(null);
  };

  return (
    <div className="container-page py-8">
      <h1 className="text-2xl md:text-3xl font-heading font-bold mb-2"><span className="gradient-text">Build</span> PC</h1>
      <p className="text-text-secondary mb-8">Chọn linh kiện và ráp cấu hình máy tính theo ý bạn</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-3">
          {slots.map((slot, i) => {
            const Icon = slot.icon;
            const product = selected[slot.type];
            const options = openSlot === slot.type ? getBuildPCProducts(slot.type) : [];
            return (
              <motion.div key={slot.type} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                <div className={`glass-card p-4 ${product ? 'border-success/30' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${product ? 'bg-success/10' : 'bg-accent-primary/10'}`}>
                      <Icon className={`w-6 h-6 ${product ? 'text-success' : 'text-accent-primary'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-text-tertiary">{slot.label}</p>
                      <p className={`text-sm ${product ? 'font-medium text-text-primary truncate' : 'text-text-secondary'}`}>{product ? product.name : 'Chưa chọn'}</p>
                    </div>
                    {product && <span className="text-sm font-bold text-accent-primary">{formatPrice(product.price)}</span>}
                    <button onClick={() => setOpenSlot(openSlot === slot.type ? null : slot.type)} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${product ? 'bg-white/5 text-text-secondary border border-white/10' : 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white'}`}>
                      {product ? 'Đổi' : 'Chọn'}
                    </button>
                  </div>
                  {openSlot === slot.type && (
                    <div className="mt-4 border-t border-white/10 pt-4 max-h-64 overflow-y-auto space-y-2">
                      {options.slice(0, 20).map((opt) => (
                        <button key={opt.id} onClick={() => handleSelect(slot.type, opt)} className="w-full flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/5 border border-transparent hover:border-accent-primary/20 transition-all text-left">
                          <div className="min-w-0 flex-1"><p className="text-sm text-text-primary truncate">{opt.name}</p><p className="text-xs text-text-tertiary">{opt.brand}</p></div>
                          <span className="text-sm font-bold text-accent-primary ml-4">{formatPrice(opt.price)}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="lg:col-span-1">
          <div className="glass-card p-6 space-y-5 sticky top-24">
            <h3 className="font-heading font-bold text-lg flex items-center gap-2"><Cpu className="w-5 h-5 text-accent-primary" /> Tóm tắt cấu hình</h3>
            <div className="space-y-3">{slots.map((slot) => {const p = selected[slot.type]; return (<div key={slot.type} className="flex justify-between text-sm"><span className="text-text-tertiary">{slot.label}</span><span className={p ? 'text-text-primary' : 'text-text-tertiary'}>{p ? formatPrice(p.price) : '---'}</span></div>);})}</div>
            <div className="border-t border-white/10 pt-4">
              <div className="flex justify-between items-center mb-4"><span className="font-heading font-bold text-lg">Tổng cộng</span><span className="text-2xl font-bold gradient-text">{formatPrice(totalPrice)}</span></div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-success/5 border border-success/20 mb-4"><Check className="w-5 h-5 text-success" /><span className="text-sm text-success">Linh kiện tương thích</span></div>
              <button onClick={() => Object.values(selected).forEach(p => p && addItem(p, 1))} disabled={selectedCount === 0} className="w-full py-3.5 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold neon-glow disabled:opacity-50 transition-all"><ShoppingCart className="w-5 h-5 inline mr-2" />Thêm vào giỏ ({selectedCount})</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
