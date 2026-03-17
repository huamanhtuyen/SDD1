# Wireframe: Đăng nhập / Đăng ký (Auth)

> **Route:** `/auth`  
> **File:** `src/app/auth/page.tsx`  
> **Priority:** Trung bình — Giả lập (demo)

---

## Layout tổng quan

### Trạng thái 1: Đăng nhập

```
┌─────────────────────────────────────────────────────────────────┐
│ [HEADER]                                                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│       (background: grid-bg + floating blur orbs)                │
│                                                                  │
│          ┌──────────────────────────────────┐                   │
│          │        (glass card, p-8)          │                   │
│          │                                   │                   │
│          │      ┌────┐                       │                   │
│          │      │ ⚙ │  (gradient icon)       │                   │
│          │      └────┘                       │                   │
│          │                                   │                   │
│          │         Đăng nhập                 │                   │
│          │  Chào mừng bạn quay lại           │                   │
│          │       CyberGravity                │                   │
│          │                                   │                   │
│          │  ┌─────────────────────────────┐  │                   │
│          │  │ ✉ [Email__________________ ]│  │                   │
│          │  └─────────────────────────────┘  │                   │
│          │                                   │                   │
│          │  ┌─────────────────────────────┐  │                   │
│          │  │ 🔒 [Mật khẩu___________] 👁 │  │                   │
│          │  └─────────────────────────────┘  │                   │
│          │                                   │                   │
│          │  ☐ Ghi nhớ      Quên mật khẩu?   │                   │
│          │                                   │                   │
│          │  ┌─────────────────────────────┐  │                   │
│          │  │🟣 Đăng nhập            →    │  │                   │
│          │  │   (gradient, neon glow)      │  │                   │
│          │  └─────────────────────────────┘  │                   │
│          │                                   │                   │
│          │  ──────── hoặc ────────           │                   │
│          │                                   │                   │
│          │  ┌─────────┐  ┌─────────┐        │                   │
│          │  │ Google  │  │Facebook │        │                   │
│          │  └─────────┘  └─────────┘        │                   │
│          │                                   │                   │
│          │  Chưa có tài khoản?               │                   │
│          │  Đăng ký ngay (accent link)       │                   │
│          │                                   │                   │
│          └──────────────────────────────────┘                   │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│ [FOOTER]                                                         │
└─────────────────────────────────────────────────────────────────┘
```

### Trạng thái 2: Đăng ký

```
          ┌──────────────────────────────────┐
          │                                   │
          │      ┌────┐                       │
          │      │ ⚙ │                        │
          │      └────┘                       │
          │                                   │
          │         Đăng ký                   │
          │  Tạo tài khoản mới tại            │
          │       CyberGravity                │
          │                                   │
          │  ┌─────────────────────────────┐  │
          │  │ 👤 [Họ và tên_____________ ]│  │   ← THÊM field
          │  └─────────────────────────────┘  │
          │                                   │
          │  ┌─────────────────────────────┐  │
          │  │ ✉ [Email__________________ ]│  │
          │  └─────────────────────────────┘  │
          │                                   │
          │  ┌─────────────────────────────┐  │
          │  │ 🔒 [Mật khẩu___________] 👁 │  │
          │  └─────────────────────────────┘  │
          │                                   │
          │  ┌─────────────────────────────┐  │
          │  │🟣 Đăng ký              →    │  │
          │  └─────────────────────────────┘  │
          │                                   │
          │  ──────── hoặc ────────           │
          │                                   │
          │  ┌─────────┐  ┌─────────┐        │
          │  │ Google  │  │Facebook │        │
          │  └─────────┘  └─────────┘        │
          │                                   │
          │  Đã có tài khoản?                 │
          │  Đăng nhập (accent link)          │
          │                                   │
          └──────────────────────────────────┘
```

---

## Chi tiết Components

### 1. Background
- **Grid:** CSS grid pattern (grid-bg class)
- **Orbs:** 2 floating blurred circles
  - Top-left: accent-primary/10, 384px, blur-[120px]
  - Bottom-right: accent-tertiary/10, 288px, blur-[100px]
- **Purpose:** Tạo cảm giác depth cho trang login đơn giản

### 2. Auth Card
- **Width:** max-w-md (448px)
- **Style:** Glass card (backdrop-blur, border white/10)
- **Padding:** p-8
- **Animation:** Framer Motion fade-in + slide-up

### 3. Logo
- **Icon:** Cpu (lucide-react)
- **Container:** 56×56px, rounded-2xl, gradient bg
- **Effect:** Neon glow
- **Position:** Centered horizontally

### 4. Form Fields

| Field | Icon | Type | Placeholder | Required | Notes |
|-------|------|------|-------------|----------|-------|
| Họ và tên | User | text | "Họ và tên" | ✅ (chỉ register) | Hidden in login mode |
| Email | Mail | email | "Email" | ✅ | Validation: email format |
| Mật khẩu | Lock | password/text | "Mật khẩu" | ✅ | Toggle visibility button |

- **Style:** Rounded-xl, bg-white/5, border white/10, focus accent glow
- **Icon:** Absolute left-3, text-tertiary

### 5. Password Toggle
- **Icons:** Eye (hiện) / EyeOff (ẩn)
- **Position:** Absolute right-3
- **Click:** Toggle input type password ↔ text

### 6. Login Extras (chỉ login mode)
- **Checkbox:** "Ghi nhớ đăng nhập" (form field)
- **Link:** "Quên mật khẩu?" → accent-primary (demo, no action)

### 7. Submit Button
- **Style:** Full-width gradient, neon glow, hover lift
- **Icon:** ArrowRight bên phải
- **Text:** "Đăng nhập" hoặc "Đăng ký" tùy mode
- **onClick:** Show success message (demo)

### 8. Social Login
- **Divider:** Line + "hoặc" text + line
- **Buttons:** 2 cols, glass card style
- **Options:** Google, Facebook
- **Action:** Demo only (no integration)

### 9. Mode Toggle
- **Login → Register:** "Chưa có tài khoản? Đăng ký ngay"
- **Register → Login:** "Đã có tài khoản? Đăng nhập"
- **Link style:** accent-primary, font-medium

### 10. Success State
- **After submit:** Green alert box
- **Text:** "Đăng nhập thành công! (Demo)" hoặc "Đăng ký thành công! (Demo)"
- **Duration:** Auto-hide after 3 seconds

---

## State Management

```
State:
  mode: 'login' | 'register'         ← toggle button
  showPassword: boolean               ← eye toggle
  email: string                       ← input
  password: string                    ← input
  name: string                        ← input (register only)
  submitted: boolean                  ← success message display

Behavior:
  handleSubmit(e):
    1. e.preventDefault()
    2. setSubmitted(true)
    3. setTimeout(() => setSubmitted(false), 3000)
  
  Note: Không có xác thực thực tế, chỉ demo UI
```

---

## Tham chiếu hình ảnh

![Auth Wireframe](./auth.png)
