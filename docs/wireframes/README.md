# CyberGravity — Wireframes

Tài liệu wireframe cho các trang chính của website CyberGravity.  
Mỗi wireframe bao gồm: ASCII layout, chi tiết component, state management, responsive breakpoints.

---

## Danh sách Wireframes

| # | Trang | File | Mô tả |
|---|-------|------|-------|
| 1 | [Trang chủ](./01-homepage.md) | `src/app/page.tsx` | Hero, categories, flash sale, featured |
| 2 | [Danh sách SP](./02-product-listing.md) | `src/app/products/page.tsx` | Sidebar filters, grid, sort, pagination |
| 3 | [Chi tiết SP](./03-product-detail.md) | `src/app/products/[slug]/page.tsx` | Gallery, price, tabs, reviews, related |
| 4 | [Giỏ hàng](./04-cart.md) | `src/app/cart/page.tsx` | Items, discount, summary, slide-out |
| 5 | [Tìm kiếm](./05-search.md) | `src/app/search/page.tsx` | Search bar, tags, results, empty |
| 6 | [Build PC](./06-build-pc.md) | `src/app/build-pc/page.tsx` | 8 slots, picker, summary, compatibility |
| 7 | [Đăng nhập](./07-auth.md) | `src/app/auth/page.tsx` | Login/Register, social, password toggle |

---

## Quy ước thiết kế

| Yếu tố | Mô tả |
|---------|-------|
| **Theme** | Dark mode (#0a0a0f background) |
| **Accent** | Purple gradient (#8b5cf6 → #06b6d4) |
| **Cards** | Glassmorphism (backdrop-blur, border white/10) |
| **Buttons** | Gradient primary, ghost secondary |
| **Typography** | Outfit (headings), Inter (body) |
| **Animations** | Framer Motion hover/enter effects |

---

## Hình ảnh tham chiếu

Các file `.png` trong thư mục này là bản wireframe dạng hình ảnh, dùng để tham chiếu bổ sung.  
**Nguồn chính là các file `.md`** — dễ chỉnh sửa, version control, và AI đọc được.
