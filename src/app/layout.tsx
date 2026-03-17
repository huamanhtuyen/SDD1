import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SlideOutCart from "@/components/cart/SlideOutCart";
import ChatWidget from "@/components/chat/ChatWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CyberGravity — Siêu thị công nghệ hàng đầu",
  description: "CyberGravity - Mua sắm linh kiện máy tính, laptop, điện thoại, phụ kiện gaming với giá tốt nhất. Giao hàng nhanh, bảo hành chính hãng.",
  keywords: "linh kiện máy tính, laptop, điện thoại, gaming, phụ kiện, CyberGravity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="dark">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}
        style={{ background: '#0a0a0f', color: '#f1f5f9', fontFamily: "'Inter', sans-serif" }}
      >
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <SlideOutCart />
          <ChatWidget />
        </CartProvider>
      </body>
    </html>
  );
}
