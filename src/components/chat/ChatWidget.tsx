'use client';
import { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const suggestedQuestions = [
  'Tư vấn laptop gaming tầm 20 triệu',
  'So sánh RTX 4070 và RTX 4060 Ti',
  'Khuyến mãi hôm nay có gì?',
  'Build PC gaming 25 triệu',
];

const botResponses: Record<string, string> = {
  default: 'Cảm ơn bạn đã liên hệ CyberGravity! Tôi có thể giúp bạn tư vấn sản phẩm, so sánh linh kiện, hoặc tìm khuyến mãi. Bạn cần hỗ trợ gì?',
  laptop: 'Với tầm giá 20 triệu, tôi gợi ý:\n\n🔥 ASUS TUF Gaming A15 - Ryzen 7, RTX 4060, 16GB RAM\n💰 Giá: 19.990.000đ\n\n🔥 Lenovo Legion 5 - Ryzen 5, RTX 4060, 16GB RAM\n💰 Giá: 21.490.000đ\n\nCả 2 đều rất mạnh cho gaming! Bạn muốn xem chi tiết sản phẩm nào?',
  rtx: 'So sánh RTX 4070 vs RTX 4060 Ti:\n\n📊 RTX 4070: VRAM 12GB, hiệu năng cao hơn ~15-20%\n📊 RTX 4060 Ti: VRAM 8GB/16GB, giá rẻ hơn ~3-4 triệu\n\n✅ Nếu chơi game 1440p → RTX 4070\n✅ Nếu chơi game 1080p → RTX 4060 Ti là đủ\n\nBạn muốn xem giá cụ thể không?',
  khuyen: 'Khuyến mãi HOT hôm nay tại CyberGravity:\n\n🔥 Giảm đến 25% linh kiện PC\n🎯 Mã CYBER10 giảm 10% đơn hàng\n🎁 Tặng lót chuột gaming khi mua bàn phím cơ\n⚡ Flash sale 17h-19h: Laptop gaming giảm sốc!\n\nBạn quan tâm sản phẩm nào?',
  build: 'Build PC Gaming 25 triệu siêu mạnh:\n\n🔧 CPU: AMD Ryzen 5 7600X - 4.990.000đ\n🎮 GPU: RTX 4060 Ti - 9.990.000đ\n🧠 RAM: 16GB DDR5 5600MHz - 1.290.000đ\n💾 SSD: 1TB NVMe - 1.490.000đ\n🔌 PSU: 650W 80+ Gold - 1.590.000đ\n📦 Case: NZXT H5 Flow - 1.890.000đ\n🧊 Tản: DeepCool AK620 - 890.000đ\n🖥️ MB: B650M - 2.490.000đ\n\n💰 Tổng: ~24.620.000đ\n\nBạn muốn thêm vào Build PC không?',
};

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', content: 'Xin chào! 👋 Tôi là CyberGravity AI, trợ lý mua sắm của bạn. Tôi có thể giúp gì cho bạn hôm nay?' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const getResponse = (text: string): string => {
    const lower = text.toLowerCase();
    if (lower.includes('laptop') || lower.includes('gaming')) return botResponses.laptop;
    if (lower.includes('rtx') || lower.includes('so sánh') || lower.includes('card')) return botResponses.rtx;
    if (lower.includes('khuyến') || lower.includes('giảm') || lower.includes('sale')) return botResponses.khuyen;
    if (lower.includes('build') || lower.includes('ráp') || lower.includes('cấu hình')) return botResponses.build;
    return botResponses.default;
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = { id: (Date.now() + 1).toString(), role: 'assistant', content: getResponse(text) };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200 + Math.random() * 800);
  };

  useEffect(() => {
    const el = document.getElementById('chat-messages');
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isTyping]);

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white flex items-center justify-center shadow-xl shadow-accent-primary/30 hover:shadow-accent-primary/50 transition-all z-40 animate-pulse-neon"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-[380px] h-[560px] rounded-2xl bg-bg-secondary border border-white/10 shadow-2xl shadow-accent-primary/10 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-accent-primary to-accent-secondary flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-sm">CyberGravity AI</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-white/80">Đang hoạt động</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-lg hover:bg-white/20 transition-all">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div id="chat-messages" className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-line leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-br-md'
                      : 'glass-card text-text-primary rounded-bl-md'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="glass-card px-4 py-3 rounded-2xl rounded-bl-md flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-text-secondary animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-text-secondary animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-text-secondary animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-text-secondary hover:text-accent-primary hover:border-accent-primary/30 transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
                  placeholder="Nhập tin nhắn..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-primary/50 transition-all"
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim()}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white hover:shadow-lg hover:shadow-accent-primary/25 disabled:opacity-40 transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
