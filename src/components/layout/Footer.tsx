import Link from 'next/link';
import { Cpu, Mail, Phone, MapPin, Facebook, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-secondary/50 border-t border-white/5 mt-32">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold font-heading gradient-text">Cyber</span>
                <span className="text-xl font-bold font-heading text-text-primary">Gravity</span>
              </div>
            </div>
            <p className="text-sm text-text-secondary mb-4 leading-relaxed">
              Siêu thị công nghệ hàng đầu Việt Nam. Chuyên cung cấp linh kiện máy tính, laptop, điện thoại, phụ kiện gaming chính hãng.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-accent-primary/50 hover:bg-white/10 transition-all group">
                  <Icon className="w-4 h-4 text-text-tertiary group-hover:text-accent-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-semibold text-text-primary mb-4">Danh mục</h3>
            <ul className="space-y-2">
              {['Linh kiện PC', 'Laptop', 'Điện thoại', 'Màn hình', 'Phụ kiện', 'Điện máy'].map((item) => (
                <li key={item}>
                  <Link href="/products" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-text-primary mb-4">Hỗ trợ</h3>
            <ul className="space-y-2">
              {['Chính sách bảo hành', 'Chính sách đổi trả', 'Hướng dẫn mua hàng', 'Phương thức thanh toán', 'Giao hàng', 'Build PC'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-text-primary mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-text-secondary">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent-primary" />
                <span>123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-text-secondary">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent-primary" />
                <span>1900.xxxx</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-text-secondary">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent-primary" />
                <span>support@cybergravity.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-tertiary">
            © 2026 CyberGravity. All rights reserved.
          </p>
          <p className="text-xs text-text-tertiary">
            Powered by <span className="gradient-text font-semibold">CyberGravity Tech</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
