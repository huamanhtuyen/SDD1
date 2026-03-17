'use client';
import { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, Cpu, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AuthPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-accent-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent-tertiary/10 rounded-full blur-[100px]" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative w-full max-w-md">
        <div className="glass-card p-8 space-y-6">
          {/* Logo */}
          <div className="text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center mx-auto mb-4 neon-glow">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-heading font-bold">
              {mode === 'login' ? 'Đăng nhập' : 'Đăng ký'}
            </h1>
            <p className="text-sm text-text-secondary mt-1">
              {mode === 'login' ? 'Chào mừng bạn quay lại CyberGravity' : 'Tạo tài khoản mới tại CyberGravity'}
            </p>
          </div>

          {submitted && (
            <div className="p-3 rounded-xl bg-success/10 border border-success/20 text-success text-sm text-center">
              {mode === 'login' ? 'Đăng nhập thành công! (Demo)' : 'Đăng ký thành công! (Demo)'}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Họ và tên" required className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/25 transition-all" />
              </div>
            )}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/25 transition-all" />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
              <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mật khẩu" required className="w-full pl-11 pr-12 py-3 rounded-xl bg-white/5 border border-white/10 text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/25 transition-all" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-text-tertiary hover:text-text-primary">
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {mode === 'login' && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-text-secondary cursor-pointer">
                  <input type="checkbox" className="rounded border-white/20 bg-white/5 text-accent-primary" />
                  Ghi nhớ đăng nhập
                </label>
                <a href="#" className="text-accent-primary hover:text-accent-secondary transition-colors">Quên mật khẩu?</a>
              </div>
            )}
            <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold text-lg neon-glow hover:shadow-xl hover:shadow-accent-primary/25 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
              {mode === 'login' ? 'Đăng nhập' : 'Đăng ký'} <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="relative text-center"><span className="relative z-10 bg-bg-secondary px-4 text-sm text-text-tertiary">hoặc</span><div className="absolute left-0 right-0 top-1/2 border-t border-white/10" /></div>

          <div className="grid grid-cols-2 gap-3">
            <button className="py-3 rounded-xl glass-card text-sm font-medium text-text-secondary hover:text-text-primary hover:border-accent-primary/30 transition-all">Google</button>
            <button className="py-3 rounded-xl glass-card text-sm font-medium text-text-secondary hover:text-text-primary hover:border-accent-primary/30 transition-all">Facebook</button>
          </div>

          <p className="text-center text-sm text-text-secondary">
            {mode === 'login' ? 'Chưa có tài khoản? ' : 'Đã có tài khoản? '}
            <button onClick={() => setMode(mode === 'login' ? 'register' : 'login')} className="text-accent-primary hover:text-accent-secondary font-medium transition-colors">
              {mode === 'login' ? 'Đăng ký ngay' : 'Đăng nhập'}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
