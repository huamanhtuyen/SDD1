# CyberGravity — Test Cases Document

> **Phiên bản:** 1.0  
> **Ngày tạo:** 2026-03-17  
> **Tester:** QA Team  
> **Trạng thái:** Draft

---

## 1. Tổng quan

Tài liệu này mô tả các test case cho website CyberGravity, bao gồm:
- **Unit Tests:** Test từng component và function
- **Integration Tests:** Test tương tác giữa các module
- **E2E Tests:** Test luồng người dùng end-to-end

---

## 2. Test Cases — Trang chủ (Homepage)

| TC-ID | Tên Test Case | Precondition | Steps | Expected Result | Priority | Type |
|-------|---------------|-------------|-------|-----------------|----------|------|
| TC-001 | Hiển thị hero banner | Mở trang chủ | 1. Truy cập `/` | Hero banner hiển thị với title, CTA button | High | E2E |
| TC-002 | Hiển thị danh mục sản phẩm | Trang chủ loaded | 1. Scroll đến section danh mục | 8 danh mục hiển thị với icon và tên | High | Unit |
| TC-003 | Click vào danh mục | Trang chủ loaded | 1. Click "Linh kiện PC" | Navigate đến `/products?category=linh-kien-pc` | High | E2E |
| TC-004 | Hiển thị sản phẩm nổi bật | Trang chủ loaded | 1. Scroll đến Featured | Hiển thị ≥ 4 sản phẩm với ảnh, tên, giá | High | Unit |
| TC-005 | Flash sale countdown | Trang chủ loaded | 1. Xem section Flash Sale | Countdown timer đếm ngược, SP sale hiển thị | Medium | Unit |
| TC-006 | Header navigation | Trang chủ loaded | 1. Xem header | Logo, search bar, cart icon, user icon hiển thị | High | Unit |
| TC-007 | Footer hiển thị | Trang chủ loaded | 1. Scroll đến footer | Thông tin liên hệ, links hiển thị | Low | Unit |
| TC-008 | Responsive mobile | Viewport 375px | 1. Truy cập `/` trên mobile | Layout single column, hamburger menu | Medium | E2E |

---

## 3. Test Cases — Danh mục sản phẩm (Product Listing)

| TC-ID | Tên Test Case | Precondition | Steps | Expected Result | Priority | Type |
|-------|---------------|-------------|-------|-----------------|----------|------|
| TC-101 | Hiển thị sản phẩm theo danh mục | Chọn danh mục | 1. Navigate `/products?category=laptop` | Chỉ hiển thị SP thuộc danh mục Laptop | High | Integration |
| TC-102 | Lọc theo khoảng giá | Trang danh mục | 1. Set giá 10tr-20tr 2. Click lọc | Chỉ hiển thị SP có giá 10tr-20tr | High | Unit |
| TC-103 | Lọc theo thương hiệu | Trang danh mục | 1. Check "ASUS" 2. Check "MSI" | Chỉ hiển thị SP của ASUS hoặc MSI | High | Unit |
| TC-104 | Sắp xếp giá thấp → cao | Trang danh mục | 1. Chọn sort "Giá thấp → cao" | SP hiển thị theo thứ tự giá tăng dần | High | Unit |
| TC-105 | Sắp xếp giá cao → thấp | Trang danh mục | 1. Chọn sort "Giá cao → thấp" | SP hiển thị theo thứ tự giá giảm dần | High | Unit |
| TC-106 | Toggle Grid/List view | Trang danh mục | 1. Click toggle List view | SP hiển thị dạng list (horizontal) | Medium | Unit |
| TC-107 | Phân trang | Trang danh mục > 12 SP | 1. Click page 2 | Hiển thị SP trang 2, URL cập nhật | High | E2E |
| TC-108 | Breadcrumb navigation | Trang danh mục | 1. Click breadcrumb "Trang chủ" | Navigate về `/` | Medium | E2E |
| TC-109 | Hiển thị tổng số SP | Trang danh mục | 1. Xem header listing | Hiển thị "Tìm thấy X sản phẩm" | Low | Unit |
| TC-110 | Lọc kết hợp | Trang danh mục | 1. Set giá 5tr-15tr 2. Check "ASUS" 3. Sort giá tăng | SP ASUS, giá 5-15tr, sắp xếp tăng dần | High | Integration |

---

## 4. Test Cases — Chi tiết sản phẩm (Product Detail)

| TC-ID | Tên Test Case | Precondition | Steps | Expected Result | Priority | Type |
|-------|---------------|-------------|-------|-----------------|----------|------|
| TC-201 | Hiển thị thông tin SP | Mở trang chi tiết | 1. Navigate `/products/[slug]` | Hiện tên, giá, rating, mô tả, ảnh | High | Unit |
| TC-202 | Gallery ảnh SP | Trang chi tiết | 1. Click thumbnail 2 | Ảnh chính thay đổi sang ảnh 2 | High | Unit |
| TC-203 | Hiển thị giá đã giảm | SP có discount | 1. Xem giá | Giá mới + giá cũ gạch ngang + % giảm | High | Unit |
| TC-204 | Tab Mô tả | Trang chi tiết | 1. Click tab "Mô tả" | Nội dung mô tả hiển thị | High | Unit |
| TC-205 | Tab Thông số KT | Trang chi tiết | 1. Click tab "Thông số" | Bảng thông số hiển thị đầy đủ | High | Unit |
| TC-206 | Tab Đánh giá | Trang chi tiết | 1. Click tab "Đánh giá" | Danh sách review hiển thị | Medium | Unit |
| TC-207 | Chọn số lượng | Trang chi tiết | 1. Click "+" 3 lần | Số lượng = 4 | High | Unit |
| TC-208 | Thêm vào giỏ hàng | Trang chi tiết, SL = 2 | 1. Click "Thêm vào giỏ" | SP thêm vào giỏ, badge cart +2 | High | E2E |
| TC-209 | SP liên quan | Trang chi tiết | 1. Scroll xuống | Hiển thị ≥ 4 SP cùng danh mục | Medium | Unit |
| TC-210 | SP hết hàng | SP stock = 0 | 1. Xem trạng thái | Hiện "Hết hàng", nút mua bị disable | Medium | Unit |

---

## 5. Test Cases — Giỏ hàng (Cart)

| TC-ID | Tên Test Case | Precondition | Steps | Expected Result | Priority | Type |
|-------|---------------|-------------|-------|-----------------|----------|------|
| TC-301 | Hiển thị slide-out cart | Thêm SP vào giỏ | 1. Click "Thêm vào giỏ" | Slide-out panel mở từ phải | High | E2E |
| TC-302 | Hiển thị trang giỏ hàng | Có SP trong giỏ | 1. Navigate `/cart` | Bảng SP với ảnh, tên, giá, SL | High | Unit |
| TC-303 | Cập nhật số lượng | Có SP trong giỏ | 1. Click "+" trên SP | SL tăng 1, tổng tiền cập nhật | High | Unit |
| TC-304 | Xóa SP khỏi giỏ | Có 2 SP trong giỏ | 1. Click nút xóa SP 1 | SP 1 bị xóa, còn SP 2 | High | Unit |
| TC-305 | Tính tổng tiền | Có 2 SP: 5tr x2, 10tr x1 | 1. Xem tổng | Tổng = 20.000.000đ | High | Unit |
| TC-306 | Nhập mã giảm giá | Có SP trong giỏ | 1. Nhập "CYBER10" 2. Click áp dụng | Giảm 10%, tổng cập nhật | Medium | Integration |
| TC-307 | Mã giảm giá sai | Có SP trong giỏ | 1. Nhập "WRONG" 2. Click áp dụng | Hiện thông báo "Mã không hợp lệ" | Medium | Unit |
| TC-308 | Giỏ hàng trống | Không có SP | 1. Navigate `/cart` | Hiện "Giỏ hàng trống" + link mua sắm | Medium | Unit |
| TC-309 | Badge số lượng | Thêm 3 SP | 1. Xem cart icon trên header | Badge hiển thị số "3" | High | Unit |
| TC-310 | Persist giỏ hàng | Có SP, reload trang | 1. Reload F5 | Giỏ hàng vẫn giữ nguyên (localStorage) | High | Integration |

---

## 6. Test Cases — AI Chat

| TC-ID | Tên Test Case | Precondition | Steps | Expected Result | Priority | Type |
|-------|---------------|-------------|-------|-----------------|----------|------|
| TC-401 | Hiển thị chat widget | Bất kỳ trang nào | 1. Xem góc phải dưới | Nút chat tròn hiển thị | High | Unit |
| TC-402 | Mở chat panel | Widget hiển thị | 1. Click nút chat | Panel chat mở với animation | High | E2E |
| TC-403 | Đóng chat panel | Chat đang mở | 1. Click nút X | Panel đóng smooth | High | Unit |
| TC-404 | Gửi tin nhắn | Chat mở | 1. Gõ "Xin chào" 2. Click Send | Tin nhắn user hiển thị bên phải | High | Unit |
| TC-405 | Nhận reply từ bot | Đã gửi tin nhắn | 1. Đợi 1-2s | Typing indicator → reply bot hiển thị | High | Integration |
| TC-406 | Suggested questions | Chat mới mở | 1. Xem suggestions | 3 câu hỏi gợi ý hiển thị | Medium | Unit |
| TC-407 | Click suggested question | Chat mở | 1. Click "Tư vấn laptop" | Câu hỏi gửi tự động, bot reply | Medium | Integration |
| TC-408 | Lịch sử chat | Đã chat 5 tin nhắn | 1. Scroll lên | Tất cả tin nhắn trước đó hiển thị | Medium | Unit |

---

## 7. Test Cases — Tìm kiếm (Search)

| TC-ID | Tên Test Case | Precondition | Steps | Expected Result | Priority | Type |
|-------|---------------|-------------|-------|-----------------|----------|------|
| TC-501 | Instant search | Bất kỳ trang nào | 1. Gõ "RTX" vào search bar | Dropdown gợi ý hiển thị SP chứa "RTX" | High | E2E |
| TC-502 | Submit tìm kiếm | Đã gõ từ khóa | 1. Press Enter | Navigate `/search?q=RTX`, kết quả hiển thị | High | E2E |
| TC-503 | Không tìm thấy | Gõ "xyzabc123" | 1. Press Enter | Hiện "Không tìm thấy kết quả" | Medium | Unit |
| TC-504 | Highlight từ khóa | Kết quả tìm kiếm | 1. Xem kết quả | Từ khóa được highlight trong tên SP | Medium | Unit |
| TC-505 | Lịch sử tìm kiếm | Đã tìm 3 lần | 1. Focus search bar | Hiện 3 từ khóa gần nhất | Low | Unit |
| TC-506 | Filter kết quả | Có kết quả | 1. Click chip "Laptop" | Chỉ hiện SP danh mục Laptop | Medium | Integration |

---

## 8. Test Cases — Build PC

| TC-ID | Tên Test Case | Precondition | Steps | Expected Result | Priority | Type |
|-------|---------------|-------------|-------|-----------------|----------|------|
| TC-601 | Hiển thị component slots | Mở Build PC | 1. Navigate `/build-pc` | 8 slots hiển thị: CPU, GPU, RAM... | High | Unit |
| TC-602 | Chọn CPU | Build PC page | 1. Click "Chọn" slot CPU 2. Chọn Ryzen 5 5600X | CPU slot hiển thị tên + giá | High | E2E |
| TC-603 | Tính tổng giá | Chọn 3 linh kiện | 1. Xem Build Summary | Tổng = sum(3 linh kiện) | High | Unit |
| TC-604 | Kiểm tra tương thích | Chọn CPU + GPU | 1. Xem compatibility | Hiện ✅ "Tương thích" (giả) | Medium | Unit |
| TC-605 | Thêm tất cả vào giỏ | Chọn ≥ 3 linh kiện | 1. Click "Thêm tất cả vào giỏ" | Tất cả LK thêm vào cart | High | E2E |
| TC-606 | Wattage ước tính | Chọn CPU + GPU | 1. Xem wattage bar | Hiện ước tính W (giả) | Low | Unit |

---

## 9. Test Cases — Đăng nhập / Đăng ký (Auth)

| TC-ID | Tên Test Case | Precondition | Steps | Expected Result | Priority | Type |
|-------|---------------|-------------|-------|-----------------|----------|------|
| TC-701 | Hiển thị modal login | Click avatar/login | 1. Click "Đăng nhập" trên header | Modal login mở | High | E2E |
| TC-702 | Form validation - email rỗng | Login modal mở | 1. Để trống email 2. Click Đăng nhập | Hiện "Vui lòng nhập email" | High | Unit |
| TC-703 | Form validation - email sai | Login modal mở | 1. Nhập "abc" 2. Click Đăng nhập | Hiện "Email không hợp lệ" | High | Unit |
| TC-704 | Form validation - password ngắn | Login modal mở | 1. Nhập pass "123" 2. Click Đăng nhập | Hiện "Mật khẩu phải ≥ 6 ký tự" | High | Unit |
| TC-705 | Toggle Login/Register | Login modal mở | 1. Click tab "Đăng ký" | Form register hiển thị | High | Unit |
| TC-706 | Social login buttons | Login modal mở | 1. Click "Đăng nhập với Google" | Toast "Tính năng đang phát triển" | Medium | Unit |
| TC-707 | Đóng modal | Login modal mở | 1. Click bên ngoài modal | Modal đóng | Medium | Unit |

---

## 10. Test Cases — UI chung

| TC-ID | Tên Test Case | Precondition | Steps | Expected Result | Priority | Type |
|-------|---------------|-------------|-------|-----------------|----------|------|
| TC-801 | Dark mode theme | Mở bất kỳ trang | 1. Xem UI | Nền tối, text sáng, accent neon | High | Unit |
| TC-802 | Language toggle | Bất kỳ trang | 1. Click toggle ngôn ngữ | Toast "Tính năng đang phát triển" | Low | Unit |
| TC-803 | Responsive mobile nav | Viewport < 640px | 1. Click hamburger | Mobile menu mở | Medium | E2E |
| TC-804 | Product card hover | Trang có product card | 1. Hover vào card | Neon glow effect, card nâng lên | Medium | Unit |
| TC-805 | Page transitions | Bất kỳ trang | 1. Navigate sang trang khác | Smooth fade transition | Low | Unit |

---

## Tổng kết

| Loại | Số lượng | Priority High | Priority Medium | Priority Low |
|------|----------|---------------|-----------------|--------------|
| Unit Tests | 42 | 25 | 13 | 4 |
| Integration Tests | 8 | 3 | 4 | 1 |
| E2E Tests | 16 | 10 | 4 | 2 |
| **Tổng** | **66** | **38** | **21** | **7** |

---

*— Hết tài liệu Test Cases —*
