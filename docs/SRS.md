# CyberGravity — Software Requirements Specification (SRS)

> **Phiên bản:** 1.2  
> **Ngày tạo:** 2026-03-17  
> **Ngày cập nhật:** 2026-03-18  
> **Tác giả:** CyberGravity Development Team  
> **Trạng thái:** Approved

### Lịch sử phiên bản

| Phiên bản | Ngày | Mô tả thay đổi |
|-----------|------|------------------|
| 1.0 | 2026-03-17 | Tạo mới — Đặc tả đầy đủ 8 module chức năng |
| 1.1 | 2026-03-18 | Bổ sung NFR-08, NFR-09 (yêu cầu UI spacing/padding) |
| 1.2 | 2026-03-18 | Nâng cấp spacing: NFR-08 tăng section gap, thêm NFR-10/11/12 cho internal component padding và text spacing |

---

## 1. Giới thiệu

### 1.1 Mục đích
Tài liệu này mô tả đặc tả yêu cầu phần mềm cho website **CyberGravity** — một nền tảng thương mại điện tử chuyên về linh kiện máy tính, điện tử, điện thoại và điện máy.

### 1.2 Phạm vi
CyberGravity là website bán hàng trực tuyến với giao diện dark mode sang trọng, tích hợp AI Chat hỗ trợ người dùng, và tính năng Build PC. Website phục vụ thị trường Việt Nam với giao diện tiếng Việt.

### 1.3 Đối tượng sử dụng
- **Khách hàng:** Người mua linh kiện máy tính, điện tử, điện thoại
- **Admin:** Quản lý sản phẩm, đơn hàng (ngoài phạm vi demo)

### 1.4 Thuật ngữ

| Thuật ngữ | Định nghĩa |
|-----------|------------|
| SP | Sản phẩm |
| UI | User Interface — Giao diện người dùng |
| AI Chat | Trợ lý AI hỗ trợ khách hàng |
| Build PC | Tính năng ráp cấu hình máy tính |
| Glassmorphism | Hiệu ứng kính mờ trong thiết kế UI |

---

## 2. Mô tả tổng quan hệ thống

### 2.1 Tổng quan sản phẩm
CyberGravity là website thương mại điện tử với:
- Giao diện dark mode premium, phong cách gaming/tech
- 8 danh mục sản phẩm chính, ~1000 sản phẩm mẫu
- AI Chat widget hỗ trợ người dùng
- Tính năng Build PC (ráp cấu hình)
- Giỏ hàng, tìm kiếm, đăng nhập/đăng ký

### 2.2 Kiến trúc tổng quan

```
┌─────────────────────────────────────────┐
│              FRONTEND                    │
│  Next.js 15 + React + TailwindCSS       │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌────────┐ │
│  │ Home │ │ Shop │ │ Cart │ │Build PC│ │
│  └──────┘ └──────┘ └──────┘ └────────┘ │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌────────┐ │
│  │Search│ │Detail│ │ Auth │ │AI Chat │ │
│  └──────┘ └──────┘ └──────┘ └────────┘ │
├─────────────────────────────────────────┤
│              API LAYER                   │
│  Next.js API Routes                     │
├─────────────────────────────────────────┤
│              DATA LAYER                  │
│  JSON Files (Fake DB)                   │
│  products.json | categories.json        │
│  reviews.json  | users.json             │
└─────────────────────────────────────────┘
```

### 2.3 Danh mục sản phẩm

| # | Danh mục | Số SP | Sub-categories |
|---|----------|-------|----------------|
| 1 | Linh kiện PC | ~250 | CPU, GPU, RAM, SSD/HDD, PSU, Case, Mainboard, Tản nhiệt |
| 2 | Laptop | ~150 | Gaming, Văn phòng, Ultrabook, Workstation |
| 3 | Điện thoại | ~150 | iPhone, Samsung, Xiaomi, OPPO, Vivo |
| 4 | Màn hình | ~100 | Gaming 144Hz+, 4K, Ultrawide, Văn phòng |
| 5 | Phụ kiện | ~150 | Chuột, Bàn phím, Tai nghe, Webcam, Lót chuột |
| 6 | Điện máy | ~100 | TV, Loa, Máy lọc không khí, Quạt |
| 7 | Thiết bị mạng | ~50 | Router, Switch, NAS, Access Point |
| 8 | Đồng hồ thông minh | ~50 | Apple Watch, Galaxy Watch, Garmin |

---

## 3. Yêu cầu chức năng (Functional Requirements)

### FR-01: Trang chủ (Homepage)

| ID | Yêu cầu | Priority |
|----|----------|----------|
| FR-01.1 | Hiển thị hero banner với hiệu ứng parallax/particle | High |
| FR-01.2 | Hiển thị danh mục sản phẩm dạng grid với icon | High |
| FR-01.3 | Hiển thị sản phẩm nổi bật (featured products) | High |
| FR-01.4 | Hiển thị flash sale với countdown timer | Medium |
| FR-01.5 | Hiển thị sản phẩm mới nhất | Medium |
| FR-01.6 | Hiển thị banner quảng cáo | Low |
| FR-01.7 | Header với logo, navigation, search bar, cart icon | High |
| FR-01.8 | Footer với thông tin liên hệ, links | Medium |

### FR-02: Danh mục sản phẩm (Product Listing)

| ID | Yêu cầu | Priority |
|----|----------|----------|
| FR-02.1 | Hiển thị sản phẩm theo danh mục đã chọn | High |
| FR-02.2 | Bộ lọc sidebar: giá, hãng, đánh giá, thông số | High |
| FR-02.3 | Sắp xếp: giá tăng/giảm, mới nhất, bán chạy | High |
| FR-02.4 | Chuyển đổi Grid/List view | Medium |
| FR-02.5 | Phân trang (pagination) | High |
| FR-02.6 | Breadcrumb navigation | Medium |
| FR-02.7 | Hiển thị tổng số sản phẩm | Low |

### FR-03: Chi tiết sản phẩm (Product Detail)

| ID | Yêu cầu | Priority |
|----|----------|----------|
| FR-03.1 | Gallery ảnh sản phẩm với zoom | High |
| FR-03.2 | Thông tin: tên, giá, giá gốc, % giảm | High |
| FR-03.3 | Tab Mô tả sản phẩm | High |
| FR-03.4 | Tab Thông số kỹ thuật | High |
| FR-03.5 | Tab Đánh giá & nhận xét | Medium |
| FR-03.6 | Nút "Thêm vào giỏ hàng" | High |
| FR-03.7 | Chọn số lượng | High |
| FR-03.8 | Sản phẩm liên quan | Medium |
| FR-03.9 | Hiển thị tình trạng kho (Còn hàng/Hết hàng) | Medium |

### FR-04: Giỏ hàng (Shopping Cart)

| ID | Yêu cầu | Priority |
|----|----------|----------|
| FR-04.1 | Slide-out cart panel khi thêm sản phẩm | High |
| FR-04.2 | Trang giỏ hàng đầy đủ | High |
| FR-04.3 | Cập nhật số lượng sản phẩm | High |
| FR-04.4 | Xóa sản phẩm khỏi giỏ | High |
| FR-04.5 | Tính tổng tiền tự động | High |
| FR-04.6 | Nhập mã giảm giá (giả) | Medium |
| FR-04.7 | Nút "Thanh toán" (giả) | Medium |
| FR-04.8 | Badge số lượng trên cart icon | High |

### FR-05: AI Chat hỗ trợ

| ID | Yêu cầu | Priority |
|----|----------|----------|
| FR-05.1 | Floating chat widget góc phải dưới | High |
| FR-05.2 | Toggle mở/đóng chat | High |
| FR-05.3 | Giao diện chat với tin nhắn user/bot | High |
| FR-05.4 | Typing indicator animation | Medium |
| FR-05.5 | Suggested questions (câu hỏi gợi ý) | Medium |
| FR-05.6 | Bot trả lời tự động (hardcoded responses) | High |
| FR-05.7 | Lịch sử chat trong session | Medium |

### FR-06: Tìm kiếm (Search)

| ID | Yêu cầu | Priority |
|----|----------|----------|
| FR-06.1 | Search bar trên header | High |
| FR-06.2 | Instant search (gợi ý khi gõ) | High |
| FR-06.3 | Trang kết quả tìm kiếm | High |
| FR-06.4 | Highlight từ khóa trong kết quả | Medium |
| FR-06.5 | Lịch sử tìm kiếm gần đây | Low |
| FR-06.6 | Tìm kiếm theo danh mục | Medium |

### FR-07: Build PC

| ID | Yêu cầu | Priority |
|----|----------|----------|
| FR-07.1 | Giao diện chọn linh kiện theo slot (CPU, GPU, RAM...) | High |
| FR-07.2 | Dropdown/modal chọn sản phẩm cho mỗi slot | High |
| FR-07.3 | Tính tổng giá cấu hình | High |
| FR-07.4 | Kiểm tra tương thích giả (compatibility check) | Medium |
| FR-07.5 | Nút "Thêm tất cả vào giỏ" | Medium |
| FR-07.6 | Hiển thị wattage ước tính | Low |

### FR-08: Đăng nhập / Đăng ký (Auth)

| ID | Yêu cầu | Priority |
|----|----------|----------|
| FR-08.1 | Modal đăng nhập với email/password | High |
| FR-08.2 | Modal đăng ký | High |
| FR-08.3 | Nút đăng nhập Google/Facebook (giả) | Medium |
| FR-08.4 | Form validation | High |
| FR-08.5 | Toggle giữa đăng nhập/đăng ký | Medium |

---

## 4. Yêu cầu phi chức năng (Non-functional Requirements)

| ID | Yêu cầu | Mô tả |
|----|----------|-------|
| NFR-01 | **Hiệu năng** | Trang chủ load < 3 giây |
| NFR-02 | **Responsive** | Hoạt động trên Desktop, Tablet, Mobile |
| NFR-03 | **Trình duyệt** | Chrome, Firefox, Safari, Edge (phiên bản mới nhất) |
| NFR-04 | **Ngôn ngữ** | Tiếng Việt (có toggle đa ngôn ngữ giả) |
| NFR-05 | **Accessibility** | Semantic HTML, alt text cho ảnh |
| NFR-06 | **SEO** | Title, meta description, heading hierarchy |
| NFR-07 | **Theme** | Dark mode mặc định, neon accent (indigo/violet/cyan) |
| NFR-08 | **Spacing** | Container padding tối thiểu 24px (mobile), 32px (tablet), 48px (desktop). Các section cách nhau tối thiểu **120px** (py-28 hoặc py-32). Nội dung không được sát lề trình duyệt |
| NFR-09 | **Gap** | Khoảng cách giữa các phần tử trong grid/flex tối thiểu 24px (gap-6). Product card grid tối thiểu gap-6 |
| NFR-10 | **Card Padding** | Internal padding của product card tối thiểu 20px (p-5). Flash sale card tối thiểu 16px (p-4). Category card tối thiểu 24px (p-6). Khoảng cách nội dung bên trong card (space-y) tối thiểu 12px (space-y-3) |
| NFR-11 | **Typo Spacing** | Subtitle cách heading tối thiểu 8px (mt-2). Section heading cách nội dung tối thiểu 32px (mb-8). Text line-height cho mô tả tối thiểu 1.6 |
| NFR-12 | **Section Dividers** | Giữa các section chính cần có visual separator (gradient divider hoặc khoảng trống tối thiểu 120px) để tạo không gian thở giữa các khối nội dung |

---

## 5. User Stories

### US-01: Khách hàng duyệt sản phẩm
> **Là** khách hàng, **tôi muốn** duyệt sản phẩm theo danh mục, **để** tìm được sản phẩm phù hợp nhu cầu.

**Acceptance Criteria:**
- [ ] Có thể chọn danh mục từ trang chủ hoặc menu
- [ ] Danh sách sản phẩm hiển thị ảnh, tên, giá
- [ ] Có thể lọc theo giá, hãng, thông số
- [ ] Có thể sắp xếp theo các tiêu chí

### US-02: Khách hàng tìm kiếm sản phẩm
> **Là** khách hàng, **tôi muốn** tìm kiếm sản phẩm bằng từ khóa, **để** nhanh chóng tìm được sản phẩm cần mua.

**Acceptance Criteria:**
- [ ] Gõ từ khóa vào search bar có gợi ý ngay
- [ ] Kết quả hiển thị với ảnh, tên, giá
- [ ] Từ khóa được highlight

### US-03: Khách hàng mua hàng
> **Là** khách hàng, **tôi muốn** thêm sản phẩm vào giỏ và thanh toán, **để** mua được sản phẩm mong muốn.

**Acceptance Criteria:**
- [ ] Thêm SP vào giỏ từ trang listing hoặc detail
- [ ] Cập nhật số lượng, xóa SP trong giỏ
- [ ] Tổng tiền tính đúng
- [ ] Có slide-out cart preview

### US-04: Khách hàng ráp PC
> **Là** khách hàng, **tôi muốn** ráp cấu hình PC từ các linh kiện, **để** xem tổng giá và mua cả bộ.

**Acceptance Criteria:**
- [ ] Chọn từng linh kiện theo slot
- [ ] Tổng giá tự động cập nhật
- [ ] Có thông báo tương thích (giả)
- [ ] Thêm tất cả vào giỏ

### US-05: Khách hàng cần hỗ trợ
> **Là** khách hàng, **tôi muốn** chat với AI để được hỗ trợ, **để** giải đáp thắc mắc nhanh chóng.

**Acceptance Criteria:**
- [ ] Chat widget hiển thị ở góc phải
- [ ] Gửi tin nhắn và nhận reply
- [ ] Có câu hỏi gợi ý
- [ ] Typing animation

### US-06: Khách hàng đăng nhập
> **Là** khách hàng, **tôi muốn** đăng nhập / đăng ký tài khoản, **để** quản lý đơn hàng.

**Acceptance Criteria:**
- [ ] Form đăng nhập với email/password
- [ ] Form đăng ký
- [ ] Nút social login
- [ ] Validation lỗi

---

## 6. Wireframes

> Wireframes cho 8 trang chính được lưu tại `docs/wireframes/`.
> Xem: [Wireframes Index](./wireframes/README.md)

### 6.1 Trang chủ (Homepage)
![Homepage Wireframe](./wireframes/01-homepage.webp)

### 6.2 Danh mục sản phẩm (Product Listing)
![Product Listing Wireframe](./wireframes/02-product-listing.webp)

### 6.3 Chi tiết sản phẩm (Product Detail)
![Product Detail Wireframe](./wireframes/03-product-detail.webp)

### 6.4 Giỏ hàng (Cart)
![Cart Wireframe](./wireframes/04-cart.webp)

### 6.5 AI Chat
![AI Chat Wireframe](./wireframes/05-ai-chat.webp)

### 6.6 Tìm kiếm (Search)
![Search Wireframe](./wireframes/06-search.webp)

### 6.7 Build PC
![Build PC Wireframe](./wireframes/07-build-pc.webp)

### 6.8 Đăng nhập / Đăng ký (Auth)
![Auth Wireframe](./wireframes/08-auth.webp)

---

## 7. Data Model

### 7.1 Product (Sản phẩm)

```json
{
  "id": "string",
  "name": "string",
  "slug": "string",
  "category": "string",
  "subcategory": "string",
  "brand": "string",
  "price": "number",
  "originalPrice": "number",
  "discount": "number",
  "rating": "number (0-5)",
  "reviewCount": "number",
  "stock": "number",
  "images": ["string"],
  "description": "string",
  "specs": { "key": "value" },
  "tags": ["string"],
  "isFeatured": "boolean",
  "isNew": "boolean",
  "createdAt": "string (ISO date)"
}
```

### 7.2 Category (Danh mục)

```json
{
  "id": "string",
  "name": "string",
  "slug": "string",
  "icon": "string",
  "description": "string",
  "subcategories": [
    { "id": "string", "name": "string", "slug": "string" }
  ],
  "productCount": "number"
}
```

### 7.3 Review (Đánh giá)

```json
{
  "id": "string",
  "productId": "string",
  "userName": "string",
  "rating": "number (1-5)",
  "comment": "string",
  "createdAt": "string (ISO date)"
}
```

---

## 8. Ràng buộc & Giả định

### Ràng buộc
- Database sử dụng JSON files (fake DB) cho mục đích demo
- AI Chat chỉ có giao diện, responses hardcoded
- Thanh toán, đơn hàng chỉ có UI, không xử lý logic
- Social login chỉ có nút, không tích hợp thật
- Đa ngôn ngữ chỉ có toggle UI, không thay đổi nội dung

### Giả định
- Người dùng sử dụng trình duyệt hiện đại
- Kết nối internet ổn định
- Dữ liệu mẫu 1000 sản phẩm đủ cho demo

---

*— Hết tài liệu SRS —*
