# Wireframe: Trang chủ (Homepage)

> **Route:** `/`  
> **File:** `src/app/page.tsx` → `src/components/home/HomePage.tsx`  
> **Priority:** Cao — Điểm tiếp xúc đầu tiên với khách hàng

---

## Layout tổng quan

```
┌─────────────────────────────────────────────────────────────────┐
│ [TOP BAR] 🚚 Miễn phí vận chuyển ≥500K  |  🌐 Tiếng Việt  |  ☎ 1900.xxxx │
├─────────────────────────────────────────────────────────────────┤
│ [HEADER]                                                        │
│  ⚙ CyberGravity  │ 🔍 [__Tìm kiếm sản phẩm...__] │ 🖥Build PC │ 👤 🛒(2)│
├─────────────────────────────────────────────────────────────────┤
│ [CATEGORY NAV]                                                   │
│  Linh kiện PC | Laptop | Điện thoại | Màn hình | Phụ kiện | ...│
├─────────────────────────────────────────────────────────────────┤
│ [PROMO BAR] ⚡ Flash Sale giảm đến 50% — Chỉ hôm nay           │
╞═════════════════════════════════════════════════════════════════╡
│                                                                  │
│  [HERO BANNER]                                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │  Công nghệ  đ ỉ n h   c a o                            │    │
│  │  Giá  t ố t   n h ấ t                                  │    │
│  │                                                          │    │
│  │  Linh kiện PC, Laptop Gaming, Điện thoại & Phụ kiện    │    │
│  │  Giao hàng nhanh 2h, bảo hành tận nơi.                 │    │
│  │                                                          │    │
│  │  [🟣 Khám phá ngay →]    [⬜ Build PC]                  │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
╞═════════════════════════════════════════════════════════════════╡
│                                                                  │
│  [SECTION: Danh mục sản phẩm]                                   │
│  "Khám phá hàng nghìn sản phẩm công nghệ chính hãng"           │
│                                                                  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│  │ 🖥       │ │ 💻       │ │ 📱       │ │ 🖥       │          │
│  │Linh kiện │ │  Laptop  │ │Điện thoại│ │ Màn hình │          │
│  │  PC      │ │          │ │          │ │          │          │
│  │ 250+ sp  │ │ 150+ sp  │ │ 150+ sp  │ │ 100+ sp  │          │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘          │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│  │ 🎧       │ │ 📺       │ │ 📡       │ │ ⌚       │          │
│  │ Phụ kiện │ │ Điện máy │ │Thiết bị  │ │ Đồng hồ │          │
│  │          │ │          │ │  mạng    │ │thông minh│          │
│  │ 150+ sp  │ │ 100+ sp  │ │  50+ sp  │ │  50+ sp  │          │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘          │
│                                                                  │
╞═════════════════════════════════════════════════════════════════╡
│                                                                  │
│  [SECTION: Flash Sale ⚡]                                        │
│  Countdown: [04] giờ : [32] phút : [15] giây     [Xem tất cả →]│
│                                                                  │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐       │
│  │ 📦     │ │ 📦     │ │ 📦     │ │ 📦     │ │ 📦     │       │
│  │ -23%   │ │ -18%   │ │ -24%   │ │ -21%   │ │ -15%   │       │
│  │AMD 5600│ │Intel   │ │Ryzen 7 │ │Core i5 │ │Ryzen 7 │       │
│  │15.7tr  │ │1.93tr  │ │12.19tr │ │14.6tr  │ │3.45tr  │       │
│  │▓▓▓▓▓░░│ │▓▓▓▓▓▓░│ │▓▓▓▓░░░│ │▓▓░░░░░│ │▓▓▓▓▓░░│       │
│  │Đã bán  │ │Đã bán  │ │Đã bán  │ │Đã bán  │ │Đã bán  │       │
│  │ 111    │ │ 182    │ │ 129    │ │  61    │ │ 169    │       │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘       │
│                                                                  │
╞═════════════════════════════════════════════════════════════════╡
│                                                                  │
│  [SECTION: Sản phẩm nổi bật]                                    │
│  "Được khách hàng yêu thích nhất"              [Xem tất cả →]  │
│                                                                  │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌────────┐│
│  │ 📦  [MỚI]   │ │ 📦  [-21%]  │ │ 📦           │ │ 📦[-27%││
│  │              │ │              │ │              │ │  [MỚI] ││
│  │ Intel        │ │ AMD          │ │ Intel        │ │ AMD    ││
│  │ Core i3 D    │ │ Core i3-141  │ │ Ryzen 9      │ │ Ryzen 5││
│  │ ★★★★★ (349) │ │ ★★★☆☆ (105) │ │ ★★★☆☆ (144) │ │ ★★★☆ 29││
│  │ 15.740.000đ  │ │ 3.300.000đ  │ │ 5.580.000đ  │ │8.890.00││
│  │ Còn 85 sp   │ │ Còn 64 sp   │ │ Còn 10 sp   │ │Còn 33  ││
│  │[🟣Thêm giỏ] │ │[🟣Thêm giỏ] │ │[🟣Thêm giỏ] │ │[🟣Thêm]││
│  └──────────────┘ └──────────────┘ └──────────────┘ └────────┘│
│                                                                  │
╞═════════════════════════════════════════════════════════════════╡
│                                                                  │
│  [SECTION: Sản phẩm mới nhất]                                   │
│  "Vừa cập nhật trong tuần"                      [Xem tất cả →] │
│  (Layout tương tự Sản phẩm nổi bật — 2 rows x 4 cards)         │
│                                                                  │
╞═════════════════════════════════════════════════════════════════╡
│                                                                  │
│  [SECTION: Banner Build PC]                                      │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │   🖥 Tự ráp PC theo cấu hình của bạn                    │    │
│  │   Chọn linh kiện — AI tư vấn — Kiểm tra tương thích     │    │
│  │                              [🟣 Bắt đầu Build →]       │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
╞═════════════════════════════════════════════════════════════════╡
│ [FOOTER]                                                         │
│  CyberGravity | Hỗ trợ | Liên hệ | Mạng xã hội | © 2026      │
└─────────────────────────────────────────────────────────────────┘

[💬 Chat Widget — floating bottom-right]
```

---

## Chi tiết Components

### 1. Top Bar
- **Nội dung:** Thông báo vận chuyển miễn phí, chọn ngôn ngữ, hotline
- **Style:** Background tối hơn (bg-primary), text nhỏ
- **Tương tác:** Click ngôn ngữ → toggle VN/EN (giả lập)

### 2. Header (sticky)
- **Logo:** "CyberGravity" + icon CPU, gradient text
- **Search bar:** Input rounded, icon kính lúp, placeholder tiếng Việt
- **Actions:** Build PC button, User icon, Cart icon + badge đếm
- **Behavior:** Sticky on scroll, glassmorphism backdrop-blur

### 3. Category Navigation
- **Items:** 8 danh mục chính (text + icon nhỏ)
- **Behavior:** Ẩn trên mobile, scroll horizontal nếu tràn
- **Click:** → `/products?category={slug}`

### 4. Hero Banner
- **Layout:** Full-width, text lớn bên trái
- **Text:** "Công nghệ đỉnh cao / Giá tốt nhất" — gradient text
- **Subtext:** Mô tả ngắn về sản phẩm và dịch vụ
- **CTAs:**
  - Primary: "Khám phá ngay →" (gradient button, neon glow)
  - Secondary: "Build PC" (outline button)
- **Background:** Grid pattern + floating animated orbs
- **Animation:** Framer Motion fade-in text, float orbs

### 5. Category Grid
- **Layout:** 2 rows × 4 cols trên desktop, 2 cols trên mobile
- **Card:** Glass card, icon lớn, tên danh mục, số lượng SP
- **Hover:** Scale up + neon border glow
- **Click:** → `/products?category={slug}`

### 6. Flash Sale
- **Countdown:** 4 ô số (giờ:phút:giây), tự cập nhật mỗi giây
- **Products:** Scroll ngang, 6-8 sản phẩm giảm giá
- **Each card:** Ảnh, %, tên, giá sale, progress bar (đã bán/tổng)
- **"Xem tất cả":** → `/products?sale=true`

### 7. Sản phẩm nổi bật / Mới nhất
- **Layout:** Grid 4 cols desktop, 2 cols mobile
- **ProductCard:** Ảnh, badges (%, MỚI), brand, tên, rating, giá, stock, add-to-cart
- **"Xem tất cả":** → `/products?sort=popular` hoặc `?sort=newest`

### 8. Build PC Banner
- **Layout:** Full-width glassmorphism card
- **Content:** Icon + tiêu đề + mô tả + CTA button
- **CTA:** → `/build-pc`

---

## Responsive Breakpoints

| Breakpoint | Category Grid | Product Grid | Flash Sale |
|------------|--------------|-------------|------------|
| Desktop ≥1024px | 4 cols | 4 cols | Scroll 6 items |
| Tablet 768-1023px | 3 cols | 3 cols | Scroll 4 items |
| Mobile <768px | 2 cols | 2 cols | Scroll 2 items |

---

## Tham chiếu hình ảnh

![Homepage Wireframe](./homepage.png)
