# Handoff: BookLin Landing Page

## Overview
A Thai-language marketing landing page for **BookLin** — a booking-app development service targeting Thai SMB owners (salons, fitness studios, sports courts, spas). The page showcases the product, industries served, features, process steps, FAQs, and contact channels.

## About the Design Files
The files in this bundle are **high-fidelity design references built in HTML/CSS/React (Babel inline JSX)**. They are prototypes showing the intended look, content, and interactions — not production code to ship directly. The task is to **recreate these designs in the target codebase's existing environment** (e.g. Next.js, React + Tailwind, etc.) using its established patterns, components, and libraries.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, copy, imagery, and interactions are all specified. Recreate pixel-accurately, adapting to the target stack's component system.

---

## Design Tokens

### Colors
| Token | Value | Usage |
|---|---|---|
| `--accent` | `#2563EB` | Primary blue — buttons, links, highlights |
| `--accent-2` | `#06B6D4` | Cyan secondary |
| `--accent-soft` | `#2563EB18` | Soft glow fills, card hovers |
| `--bg` | `#F6F9FF` | Page background |
| `--bg-alt` | `#EBF2FF` | Alternate section background |
| `--ink` | `#0F1B2D` | Primary text (deep navy) |
| `--ink-2` | `#1E3A5F` | Secondary text |
| `--ink-3` | `#5A8FBF` | Tertiary / muted text |
| `--card` | `#FFFFFF` | Card surfaces |
| `--line` | `rgba(37,99,235,.12)` | Borders |

### Typography
| Role | Family | Weight | Size |
|---|---|---|---|
| Display / headings | Cloud (Typomancer) → Quicksand fallback | 300–800 | clamp-based |
| Body | Cloud → Quicksand → Sarabun | 400–600 | 16px base |
| Mono (feature numbers) | IBM Plex Mono | 400–500 | varies |

### Spacing
- `--gap`: `120px` (regular), `88px` (compact), `160px` (comfy) — section vertical rhythm
- `--radius`: `18px` card corner radius
- `--radius-sm`: `10px`
- Container max-width: `1240px`, padding `0 32px`

### Shadows / Effects
- Card hover: `0 24px 40px -16px rgba(37,99,235,.22)`
- Button: `0 4px 18px rgba(37,99,235,.28)`
- Phone mockup: `filter: drop-shadow(0 16px 32px rgba(37,99,235,.14))`
- Admin scene center: `0 28px 64px rgba(37,99,235,.22)`

---

## Sections

### 1. Nav (sticky)
- Sticky top bar, `backdrop-filter: blur(20px)`, height 72px
- Left: **BookLin logo** — `uploads/booklin_icon.png` (36×36 px, border-radius 9px) + wordmark "BookLin" (Cloud, 600, 20px)
- Center links: ธุรกิจที่รองรับ · ฟีเจอร์ · ขั้นตอน · คำถาม
- Right: CTA pill button "ปรึกษาฟรี →" → anchors to `#contact`

### 2. Hero (split layout)
- 2-column grid: text left, phone visual right
- **Eyebrow chip**: "รับพัฒนาเว็บแอปจองออนไลน์" — white pill, accent border, pulsing green dot
- **H1** (800 weight): "ระบบจองออนไลน์" / `<em>` "ใช้ง่ายทั้งคนจอง ทั้งแอดมิน"
  - The `em` text has a shimmer gradient animation (blue → cyan → blue)
  - Characters split into `<span class="ch">` for stagger-in animation
- **Subtext**: 3 lines describing the service
- **CTAs**: Primary "เริ่มคุยกับเราฟรี →", Ghost "ดูผลงานที่ผ่านมา"
- **Hero Visual** (right column): animated phone mockup (booking UI), slip verification card (floating left), notification bubble (floating top-right)
  - Phone floats: `translateY` loop animation, 7s ease-in-out
  - Slip: independent float, 8s
  - Notif: pop-in/out loop, 6s
- **Background**: drifting grid (48px) + aurora gradient (radial, animated)

### 3. Industries
- Eyebrow: "ธุรกิจที่รองรับ"
- H2: "ออกแบบสำหรับ **4 หมวดหลัก**"
- 4-column card grid (`.ind-card`):
  1. คลาสเรียน — Classes & Studios (โยคะ · ฟิตเนส · ดนตรี · ศิลปะ · สอบเข้า · กีฬา)
  2. จองสนาม — Sports & Courts (ฟุตบอล · แบดมินตัน · เทนนิส · กอล์ฟ)
  3. จองร้านเสริมสวย — Barbershops (คิวตัดผม · ซาลอน)
  4. จองร้านสปา — Nail Salons (นวด · สปา · ทำเล็บ · ต่อขนตา)
- Card hover: lift + cursor-follow glow (`radial-gradient` via CSS custom props `--mx`/`--my`)
- Custom SVG icon per industry (28×28 in a 48×48 viewBox, accent stroke)

### 4. Features
- Eyebrow: "ฟีเจอร์หลัก"
- H2: "ทุกอย่างที่ร้านคุณ **ต้องใช้จริง** ครบในระบบเดียว"
- 2-column card grid (`.feat-card`), numbered 01–04:
  1. หน้าจองสำหรับลูกค้า — เลือกบริการ เลือกเวลา ใช้งานบนมือถือลื่นไหล รองรับการจองล่วงหน้า
  2. ระบบรับชำระและตรวจสลิปอัตโนมัติ — PromptPay QR · โอนผ่านธนาคาร · บัตรเครดิต อ่านสลิปอัตโนมัติ ไม่ต้องเช็คมือทีละใบ
  3. หลังบ้านดูแลร้านทั้งระบบ — ตารางการจอง รายงานยอดขาย จัดการพนักงาน แดชบอร์ดเข้าใจง่าย
  4. แจ้งเตือนผ่าน LINE อัตโนมัติ — ลูกค้าได้สลิปยืนยัน เจ้าของร้านได้แจ้งเตือนทุกการจอง เตือนล่วงหน้าก่อนถึงเวลานัด

### 5. Showcase (หน้าตาจริงของระบบ)
**Mobile row** (4-column grid, phone images already include device frames):
1. `uploads/barber calendar.png` — จองร้านเสริมสวย
2. `uploads/class booking.png` — จองคลาส
3. `uploads/Payment.png` — ชำระเงิน
4. `uploads/Line noti.png` — แจ้งเตือน LINE

Image treatment: `filter: drop-shadow(0 16px 32px rgba(37,99,235,.14))`, hover lift + stronger shadow

**Admin Portal — Desktop** (overlapping scene composition):
- **Left** (38% width, `rotate(-3deg)`, `z-index: 3`, margin-right `-72px`): `uploads/clasw-6ee558c0.PNG` — จัดการคลาส
- **Center** (62% width, `z-index: 2`): `uploads/payment.png` — Admin Portal (laptop mockup)
- **Right** (28% width, `rotate(+3deg)`, `z-index: 3`, margin-left `-60px`): `uploads/user history.jpg` — ประวัติการจอง

Each side card hover: straighten rotation + translateY(-6px), stronger shadow

### 6. Process (ขั้นตอนการทำงาน)
- H2: "ขั้นตอนการทำงาน"
- 4-step rail (CSS grid, vertical connector line between dots):
  1. คุยรายละเอียด / Discovery — นัดคุย เข้าใจรูปแบบธุรกิจของคุณก่อนเริ่มงาน
  2. ออกแบบและพัฒนา / Design & Build — พัฒนาทั้ง customer app และ admin portal
  3. ทดสอบและส่งมอบ / Launch — ทดสอบกับลูกค้าจริง ส่งมอบพร้อมคู่มือการใช้งาน อบรมทีมงาน
  4. ดูแลต่อเนื่อง / Support — แก้ปัญหา ดูแลการใช้งานในระยะเวลารับประกัน
- Connector line has a flowing animated gradient (accent color scrolls downward)

### 7. FAQ (คำถามที่พบบ่อย)
- 2-column layout: sticky sidebar left (title + CTA), accordion list right
- 4 questions (accordion, one open at a time):
  1. ใช้เวลาทำกี่วัน?
  2. ต้องมีโดเมน/โฮสเองไหม?
  3. รองรับการชำระเงินแบบไหนบ้าง?
  4. หลังส่งมอบ ดูแลต่ออย่างไร?
- Open state: fade-in answer, "–" toggle icon

### 8. Contact
- Dark card (`border-radius: 32px`): gradient `linear-gradient(135deg, #1E55C8, #2563EB, #0EA5E9)`
- 2-column: left (title/text), right (contact rows)
- Title: "พร้อมเริ่ม? **คุยกับเราฟรี** ไม่มีข้อผูกมัด"
- Sub: "ส่งข้อความหาเราในช่องทางที่สะดวก ทีมงานตอบกลับภายใน 1 วันทำการ"
- **Contact rows** (2 rows, each is a link):
  - LINE Official — @booklin — "ตอบเร็ว · แนบรูปอ้างอิงได้" → `https://line.me/R/ti/p/@booklin`
  - Fastwork — fastwork.co/user/booklin — "จ้างผ่านระบบ มัดจำปลอดภัย" → `https://fastwork.co`
- Row hover: shimmer sweep + arrow translate

### 9. Footer
- Simple 2-column: copyright left, "กลับขึ้นด้านบน ↑" right

---

## Interactions & Animations

| Effect | Trigger | Detail |
|---|---|---|
| Scroll reveal | IntersectionObserver | opacity 0→1, translateY 28px→0, blur 6px→0, staggered per sibling (80ms steps) |
| Hero title char split | Mount | Each character wrapped in `<span>` with `--i` CSS var, `rotateX(-40deg)→0` stagger at 22ms/char |
| Hero title shimmer | Always | `background-position` animation on gradient, 6s loop |
| Aurora + grid | Always | `.hero::before` grid drifts 28s, `.hero::after` aurora shifts 18s |
| Cursor-follow glow | Pointermove on ind/feat cards | `--mx` / `--my` CSS vars → `radial-gradient` pseudo-element |
| Magnetic CTA | Pointermove on `.btn-primary`, `.nav-cta` | `box-shadow` intensity ramps with cursor distance, no translate |
| Number counter | IntersectionObserver | easeOutCubic over 1.2s on `.meta-n`, `.proof-metric` |
| Phone float | Always | `translateY` loop, 7s ease-in-out |
| Process connector | Always | Linear gradient flows downward, 3.2s loop |
| Admin scene hover | Hover on side cards | rotation straightens, translateY(-6px), shadow deepens |

---

## Assets

| File | Used in |
|---|---|
| `uploads/booklin_icon.png` | Nav logo |
| `uploads/barber calendar.png` | Showcase mobile — จองร้านเสริมสวย |
| `uploads/class booking.png` | Showcase mobile — จองคลาส |
| `uploads/Payment.png` | Showcase mobile — ชำระเงิน |
| `uploads/Line noti.png` | Showcase mobile — แจ้งเตือน LINE |
| `uploads/payment.png` | Showcase admin center (laptop mockup) |
| `uploads/clasw-6ee558c0.PNG` | Showcase admin left (class sessions) |
| `uploads/user history.jpg` | Showcase admin right (user history modal) |
| `fonts/CloudLight.otf/.ttf` | Display + body font |
| `fonts/CloudBold.otf/.ttf` | Display + body font bold |

---

## Source Files

| File | Description |
|---|---|
| `Bookable Landing.html` | Entry point — loads React, Babel, CSS, scripts |
| `app.jsx` | All React components + data (INDUSTRIES, FEATURES, STEPS, FAQS) |
| `styles.css` | All CSS — design tokens, layout, components, animations |
| `tweaks-panel.jsx` | In-page Tweaks panel (accent color, density, hero layout) |
