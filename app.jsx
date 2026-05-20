// app.jsx — Landing page for booking-app dev service
// Soft, warm light-tone aesthetic targeting Thai SMB owners (Gen Y+).
// Industries: classes, sports courts, barbershops, nail salons.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#2563EB",
  "density": "regular",
  "heroLayout": "split"
} /*EDITMODE-END*/;;

const ACCENT_OPTIONS = [
"#2563EB", // blue (default)
"#06B6D4", // cyan
"#10B981", // emerald
"#F59E0B", // amber
"#EC4899" // pink
];

// ── Brand identity (free to edit later) ────────────────────────────────────
const BRAND = {
  name: "BookLin",
  th: "บุ๊คลิน",
  tagline: "ระบบจองออนไลน์ ที่ออกแบบเฉพาะธุรกิจของคุณ"
};

const INDUSTRIES = [
{ th: "คลาสเรียน", en: "Classes & Studios", note: "โยคะ · ฟิตเนส · ดนตรี · ศิลปะ · สอบเข้า · กีฬา" },
{ th: "จองสนาม", en: "Sports & Courts", note: "ฟุตบอล · แบดมินตัน · เทนนิส · กอล์ฟ" },
{ th: "จองร้านเสริมสวย", en: "Barbershops", note: "คิวตัดผม · ซาลอน" },
{ th: "จองร้านสปา", en: "Nail Salons", note: "นวด · สปา · ทำเล็บ · ต่อขนตา" }];


const FEATURES = [
{
  no: "01",
  th: "หน้าจองสำหรับลูกค้า",
  en: "Customer Booking",
  body: "เลือกบริการ เลือกเวลา ใช้งานบนมือถือลื่นไหล รองรับการจองล่วงหน้า"
},
{
  no: "02",
  th: "ระบบรับชำระและตรวจสลิปอัตโนมัติ",
  en: "Payment & Slip Verification",
  body: "PromptPay QR · โอนผ่านธนาคาร · บัตรเครดิต อ่านสลิปอัตโนมัติ ไม่ต้องเช็คมือทีละใบ"
},
{
  no: "03",
  th: "หลังบ้านดูแลร้านทั้งระบบ",
  en: "Admin Portal",
  body: "ตารางการจอง รายงานยอดขาย จัดการพนักงาน แดชบอร์ดเข้าใจง่าย"
},
{
  no: "04",
  th: "แจ้งเตือนผ่าน LINE อัตโนมัติ",
  en: "LINE Notifications",
  body: "ลูกค้าได้สลิปยืนยัน เจ้าของร้านได้แจ้งเตือนทุกการจอง เตือนล่วงหน้าก่อนถึงเวลานัด"
}];


const STEPS = [
{ n: "01", th: "คุยรายละเอียด", en: "Discovery", body: "นัดคุย เข้าใจรูปแบบธุรกิจของคุณก่อนเริ่มงาน" },
{ n: "02", th: "ออกแบบและพัฒนา", en: "Design & Build", body: "พัฒนาทั้ง customer app และ admin portal" },
{ n: "03", th: "ทดสอบและส่งมอบ", en: "Launch", body: "ทดสอบกับลูกค้าจริง ส่งมอบพร้อมคู่มือการใช้งาน อบรมทีมงาน" },
{ n: "04", th: "ดูแลต่อเนื่อง", en: "Support", body: "แก้ปัญหา ดูแลการใช้งานในระยะเวลารับประกัน" }];


const FAQS = [
{
  q: "ใช้เวลาทำกี่วัน?",
  a: "โดยทั่วไป 14–30 วัน ขึ้นกับความซับซ้อน เริ่มต้นจากเทมเพลตที่ทำมาแล้ว ปรับให้ตรงกับธุรกิจคุณ"
},
{
  q: "ต้องมีโดเมน/โฮสเองไหม?",
  a: "ไม่จำเป็น เราดูแลให้ทั้งหมด หรือถ้ามีโดเมนอยู่แล้ว สามารถเชื่อมต่อให้ได้"
},
{
  q: "รองรับการชำระเงินแบบไหนบ้าง?",
  a: "PromptPay QR, โอนพร้อมตรวจสลิปอัตโนมัติ, บัตรเครดิต/เดบิต"
},
{
  q: "หลังส่งมอบ ดูแลต่ออย่างไร?",
  a: "มีแพ็กเกจดูแลรายครั้ง/รายเดือน เพื่อแก้บั๊ก และให้คำปรึกษาผ่าน LINE"
}];


const PROOF = [
{ biz: "Studio · คลาสโยคะ", metric: "+38%", note: "อัตราการจองคลาสประจำ" },
{ biz: "สนามแบดมินตัน 6 คอร์ต", metric: "−6 ชม./สัปดาห์", note: "ลดเวลารับสายจองคิว" },
{ biz: "ร้านทำเล็บ 3 สาขา", metric: "100%", note: "ตรวจสลิปอัตโนมัติ" }];


// ── App ─────────────────────────────────────────────────────────────────────

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const accent = t.accent;
  const density = t.density;

  // Apply CSS vars at root
  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--accent-soft', accent + '18');
    document.documentElement.style.setProperty('--accent-tint', accent + '0d');
    document.documentElement.style.setProperty(
      '--gap',
      density === 'compact' ? '88px' : density === 'comfy' ? '160px' : '120px'
    );
  }, [accent, density]);

  // ── Tech-savvy animation hooks ───────────────────────────────────────────
  React.useEffect(() => {
    // 1. Split hero title into characters for stagger-in
    const title = document.querySelector('.hero-title');
    if (title && !title.dataset.split) {
      title.dataset.split = '1';
      const walk = (node) => {
        if (node.nodeType === 3) {
          const frag = document.createDocumentFragment();
          let idx = 0;
          [...node.textContent].forEach((ch) => {
            const s = document.createElement('span');
            s.className = 'ch';
            s.style.setProperty('--i', title._chCount = (title._chCount || 0) + 1);
            s.textContent = ch === ' ' ? '\u00A0' : ch;
            frag.appendChild(s);
            idx++;
          });
          node.parentNode.replaceChild(frag, node);
        } else if (node.nodeType === 1 && node.tagName !== 'BR') {
          [...node.childNodes].forEach(walk);
        }
      };
      [...title.childNodes].forEach(walk);
    }

    // 2. Scroll reveal — tag candidate elements, observe them
    const selectors = [
    '.sec-h', '.ind-card', '.feat-card', '.show-phone-wrap',
    '.proc-step', '.faq-item', '.contact-card', '.proof-item',
    '.hero-visual'];

    const targets = document.querySelectorAll(selectors.join(','));
    targets.forEach((el, i) => {
      el.classList.add('reveal');
      // stagger siblings within their parent group
      const group = el.parentElement;
      if (group) {
        const siblings = [...group.children].filter((c) =>
        selectors.some((s) => c.matches && c.matches(s))
        );
        const idx = siblings.indexOf(el);
        if (idx >= 0) el.setAttribute('data-delay', Math.min(idx, 6));
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    targets.forEach((el) => io.observe(el));

    // 3. Cursor-follow glow on cards (sets --mx/--my CSS vars)
    const cards = document.querySelectorAll('.ind-card, .feat-card');
    const onMove = (e) => {
      const r = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty('--mx', e.clientX - r.left + 'px');
      e.currentTarget.style.setProperty('--my', e.clientY - r.top + 'px');
    };
    cards.forEach((c) => c.addEventListener('pointermove', onMove));

    // 4. Magnetic CTA — shadow-only glow (no shape movement)
    const magnets = document.querySelectorAll('.btn-primary, .nav-cta');
    const onMag = (e) => {
      const r = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      const dist = Math.sqrt(x * x + y * y);
      const intensity = Math.min(dist / 90, 1);
      const accentVal = getComputedStyle(document.documentElement).
      getPropertyValue('--accent').trim() || '#7C3AED';
      e.currentTarget.style.boxShadow =
      `0 ${6 + intensity * 10}px ${18 + intensity * 22}px -4px ${accentVal}55`;
    };
    const offMag = (e) => {e.currentTarget.style.boxShadow = '';};
    magnets.forEach((m) => {
      m.addEventListener('pointermove', onMag);
      m.addEventListener('pointerleave', offMag);
    });

    // 5. Number counter — animate .meta-n and .proof-metric
    const countEls = document.querySelectorAll('.meta-n, .proof-metric');
    const countIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting || e.target.dataset.counted) return;
        e.target.dataset.counted = '1';
        const raw = e.target.textContent;
        const m = raw.match(/(-?\d+(?:\.\d+)?)/);
        if (!m) return;
        const target = parseFloat(m[1]);
        const start = performance.now();
        const dur = 1200;
        const tick = (now) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          const v = target * eased;
          const display = Number.isInteger(target) ?
          Math.round(v).toString() :
          v.toFixed(1);
          e.target.textContent = raw.replace(/-?\d+(?:\.\d+)?/, display);
          if (p < 1) requestAnimationFrame(tick);else
          e.target.textContent = raw;
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });
    countEls.forEach((el) => countIO.observe(el));

    return () => {
      io.disconnect();
      countIO.disconnect();
      cards.forEach((c) => c.removeEventListener('pointermove', onMove));
      magnets.forEach((m) => {
        m.removeEventListener('pointermove', onMag);
        m.removeEventListener('pointerleave', offMag);
      });
    };
  }, []);

  return (
    <div className="page">
      <Nav />
      <Hero layout={t.heroLayout} />
      <Industries />
      <Features />
      <Showcase />

      <Process />
      <FAQ />
      <Contact />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme">
          <TweakColor
            label="Accent"
            value={accent}
            options={ACCENT_OPTIONS}
            onChange={(v) => setTweak('accent', v)} />
          
        </TweakSection>
        <TweakSection label="Layout">
          <TweakRadio
            label="Density"
            value={density}
            options={['compact', 'regular', 'comfy']}
            onChange={(v) => setTweak('density', v)} />
          
          <TweakRadio
            label="Hero"
            value={t.heroLayout}
            options={[
            { value: 'split', label: 'Split' },
            { value: 'center', label: 'Center' },
            { value: 'mosaic', label: 'Mosaic' }]
            }
            onChange={(v) => setTweak('heroLayout', v)} />
          
        </TweakSection>
      </TweaksPanel>
    </div>);

}

// ── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <header className="nav">
      <div className="container nav-row">
        <a href="#top" className="brand">
          <span className="brand-mark brand-logo" aria-hidden="true">
            <img src="uploads/booklin_icon.png" alt="BookLin logo" />
          </span>
          <span className="brand-word">{BRAND.name}</span>
        </a>
        <nav className="nav-links">
          <a href="#industries">ธุรกิจที่รองรับ</a>
          <a href="#features">ฟีเจอร์</a>
          <a href="#process">ขั้นตอน</a>
          <a href="#faq">คำถาม</a>
        </nav>
        <a href="#contact" className="nav-cta">
          ปรึกษาฟรี<span className="arr">→</span>
        </a>
      </div>
    </header>);

}

// ── Hero ────────────────────────────────────────────────────────────────────

function Hero({ layout }) {
  return (
    <section className="hero" id="top" data-layout={layout} data-screen-label="01 Hero">
      <div className="container hero-grid">
        <div className="hero-eyebrow">
          <span className="dot" style={{ backgroundColor: "rgb(124, 58, 237)" }} /> ประหยัดเวลา หยุดปวดห้ว
        </div>

        <h1 className="hero-title" style={{ fontWeight: "800" }}>
          ระบบจองออนไลน์
          <br />
          <em style={{ fontFamily: "Cloud", fontWeight: "700", letterSpacing: "-2px", fontStyle: "normal" }}>ใช้ง่ายทั้งคนจอง<br />ทั้งแอดมิน</em>
        </h1>

        <p className="hero-sub">
          ออกแบบและพัฒนาเว็บแอปจองสำหรับธุรกิจไทย —
          ตั้งแต่หน้าจองลูกค้า ไปจนถึงหลังบ้านบริหารร้าน
          พร้อมระบบรับชำระและตรวจสลิปอัตโนมัติในระบบเดียว
        </p>

        <div className="hero-cta-row">
          <a href="#demo" className="btn btn-primary">
            ตัวอย่างเดโม่<span className="arr">→</span>
          </a>
          <a href="#showcase" className="btn btn-ghost">ดูผลงานที่ผ่านมา</a>
        </div>


        {/* visual */}
        <HeroVisual />
      </div>

      <BgDecor />
    </section>);

}

function Meta({ n, l }) {
  return (
    <div className="meta">
      <span className="meta-n">{n}</span>
      <span className="meta-l">{l}</span>
    </div>);

}

function HeroVisual() {
  return (
    <div className="hero-visual">
      {/* Phone mock — class booking image */}
      <div className="phone phone-front">
        <div className="phone-notch" />
        <div className="phone-screen phone-screen-img">
          <img src="uploads/class booking.png" alt="Class booking" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '26px' }} />
        </div>
      </div>

      {/* Class notification card */}
      <div className="slip slip-noti">
        <img src="uploads/Class noti-ab06f7e9.png" alt="Class notification" style={{ width: '100%', display: 'block', mixBlendMode: 'multiply' }} />
      </div>

      {/* Floating notif */}
      <div className="notif">
        <div className="notif-dot" />
        <div>
          <div className="notif-t">มีการจองใหม่</div>
          <div className="notif-s">คุณ Praew · 14:30 น.</div>
        </div>
      </div>
    </div>);

}

function BgDecor() {
  return (
    <div className="bg-decor" aria-hidden="true">
      <div className="grain" />
      <svg className="bg-arc" viewBox="0 0 600 600" preserveAspectRatio="none">
        <defs>
          <radialGradient id="g1" cx="50%" cy="0%" r="80%">
            <stop offset="0" stopColor="var(--accent)" stopOpacity="0.18" />
            <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="600" height="600" fill="url(#g1)" />
      </svg>
    </div>);

}

// ── Demo Section ─────────────────────────────────────────────

// ── Demo Phone Video ─────────────────────────────────────────

function DemoPhoneVideo() {
  return (
    <div className="demo-phone-wrap reveal">
      <div className="demo-phone">
        <div className="demo-phone-bar"><span className="demo-phone-cam" /></div>
        <div className="demo-phone-screen">
          <iframe
            src="https://player.vimeo.com/video/1193874283?badge=0&autopause=0&player_id=0&app_id=58479"
            className="demo-video"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
            title="BookLin Demo"
          />
        </div>
        <div className="demo-phone-chin" />
      </div>
    </div>);
}

// ── Industries ──────────────────────────────────────────────────────────────

function Industries() {
  return (
    <section className="industries" id="industries" data-screen-label="02 Industries">
      <div className="container">
        <SectionHeader
          eyebrow="ธุรกิจที่รองรับ"
          title={<>ออกแบบสำหรับ <em>4 หมวดหลัก</em></>} />
        
        <div className="ind-grid">
          {INDUSTRIES.map((it, i) =>
          <article key={it.en} className="ind-card" data-i={i}>
              <div className="ind-num">0{i + 1}</div>
              <IndIcon kind={it.en} />
              <h3 className="ind-th">{it.th}</h3>
              <div className="ind-en">{it.en}</div>
              <p className="ind-note">{it.note}</p>
            </article>
          )}
        </div>
      </div>
    </section>);

}

function IndIcon({ kind }) {
  const c = "var(--accent)";
  const stroke = { stroke: c, strokeWidth: 1.4, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" };
  return (
    <div className="ind-icon">
      <svg viewBox="0 0 48 48">
        {kind === "Classes & Studios" &&
        <g {...stroke}>
            <rect x="7" y="11" width="34" height="22" rx="2" />
            <path d="M7 17h34" />
            <circle cx="11" cy="14" r=".8" fill={c} />
            <path d="M16 38v3M32 38v3" />
            <path d="M19 25h10M19 28h7" />
          </g>
        }
        {kind === "Sports & Courts" &&
        <g {...stroke}>
            <rect x="6" y="12" width="36" height="24" rx="1.5" />
            <path d="M24 12v24" />
            <circle cx="24" cy="24" r="4" />
            <path d="M6 18h4M6 30h4M38 18h4M38 30h4" />
          </g>
        }
        {kind === "Barbershops" &&
        <g {...stroke}>
            <circle cx="14" cy="34" r="4" />
            <circle cx="34" cy="34" r="4" />
            <path d="M14 34l20-22M34 34L14 12" />
            <path d="M30 16l5-5M18 16l-5-5" />
          </g>
        }
        {kind === "Nail Salons" &&
        <g {...stroke}>
            <path d="M16 8c0-1.5 1.5-3 4-3s4 1.5 4 3v18c0 4-2 7-4 7s-4-3-4-7z" />
            <path d="M28 14c0-1.5 1.5-3 4-3s4 1.5 4 3v12c0 4-2 7-4 7s-4-3-4-7z" />
            <path d="M16 28h8M28 28h8" />
          </g>
        }
      </svg>
    </div>);

}

// ── Section Header ──────────────────────────────────────────────────────────

function SectionHeader({ eyebrow, title, sub }) {
  return (
    <div className="sec-h">
      <div className="sec-eyebrow">{eyebrow}</div>
      <h2 className="sec-title">{title}</h2>
      {sub && <p className="sec-sub">{sub}</p>}
    </div>);

}

// ── Features ────────────────────────────────────────────────────────────────

function Features() {
  return (
    <section className="features" id="features" data-screen-label="03 Features">
      <div className="container">
        <SectionHeader
          eyebrow="ฟีเจอร์หลัก"
          title={<>ทุกอย่างที่ร้านคุณ <em>ต้องใช้จริง</em> ครบในระบบเดียว</>} />
        
        <div className="feat-grid">
          {FEATURES.map((f) =>
          <article key={f.no} className="feat-card">
              <div className="feat-no">{f.no}</div>
              <div className="feat-titles">
                <h3>{f.th}</h3>
                <span>{f.en}</span>
              </div>
              <p>{f.body}</p>
            </article>
          )}
        </div>
      </div>
    </section>);

}

// ── Showcase ────────────────────────────────────────────────────────────────

function Showcase() {
  const phones = [
  { src: 'uploads/barber calendar.png', label: 'จองร้านเสริมสวย' },
  { src: 'uploads/class booking.png', label: 'จองคลาส' },
  { src: 'uploads/Phone_Payment.png', label: 'ชำระเงิน' },
  { src: 'uploads/Line noti.png', label: 'แจ้งเตือน LINE' }];

  return (
    <section className="showcase" id="showcase" data-screen-label="04 Showcase">
      <div className="container">
        <SectionHeader
          eyebrow="ผลงาน"
          title={<>หน้าตาจริงของระบบ <em>ที่เราส่งมอบให้ลูกค้า</em></>} />

        {/* ── Mobile app ── */}
        <div className="show-sub-label">แอปสำหรับลูกค้า — Mobile</div>
        <div className="show-phones-row">
          {phones.map((p) =>
          <div key={p.label} className="show-phone-item reveal">
              <img src={p.src} alt={p.label} />
              <span className="show-phone-label-txt">{p.label}</span>
            </div>
          )}
        </div>

        {/* ── Demo video ── */}
        <div id="demo" className="show-sub-label" style={{ textAlign: "center" }}>ตัวอย่างเดโม่ — Demo</div>
        <div className="demo-layout demo-layout-showcase">
          <DemoPhoneVideo />
          <div className="demo-copy demo-copy-center reveal" data-delay="2">
            <ul className="demo-bullets">
              <li>เลือกประเภทคลาสและช่วงเวลาที่ต้องการ</li>
              <li>ระบบแสดงสล็อตว่างแบบ real-time</li>
              <li>ยืนยันการจองพร้อมชำระเงิน PromptPay</li>
            </ul>
          </div>
        </div>

        {/* ── Admin portal ── */}
        <div className="show-sub-label">Admin Portal — Desktop</div>
        <div className="show-admin-scene">
          <div className="admin-scene-left">
            <img src="uploads/clasw-6ee558c0.PNG" alt="Admin คลาส" />
            <span className="admin-scene-label">จัดการคลาส</span>
          </div>
          <div className="admin-scene-center">
            <img src="uploads/Admin_payment.png" alt="Admin Portal" />
            <span className="admin-scene-label">Admin Portal</span>
          </div>
          <div className="admin-scene-right">
            <img src="uploads/user history.jpg" alt="ประวัติการจอง" />
            <span className="admin-scene-label">ประวัติการจอง</span>
          </div>
        </div>
      </div>
    </section>);
}

// ── Phone frame wrapper ─────────────────────────────────────────────────
function PhoneFrame({ label, sub, children }) {
  return (
    <div className="show-phone-wrap">
      <div className="pf">
        <div className="pf-inner">
          {children}
        </div>
      </div>
      <div>
        <div className="show-phone-label">{label}</div>
        <div className="show-phone-sub">{sub}</div>
      </div>
    </div>);

}

// ── Phone screens ───────────────────────────────────────────────────────
function BookingScreen() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <img
        src="screenshots/booking-edited.jpg"
        alt="Class booking screenshot"
        style={{ width: '100%', display: 'block', borderRadius: '0 0 28px 28px' }} />
      
    </div>);

}

function PaymentScreen() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <img
        src="screenshots/payment-edited.png"
        alt="Payment screenshot"
        style={{ width: '100%', display: 'block', borderRadius: '0 0 28px 28px' }} />
      
    </div>);

}

function LineScreen() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <img
        src="uploads/IMG_3599.PNG"
        alt="LINE notification screenshot"
        style={{ width: '100%', display: 'block', borderRadius: '0 0 28px 28px' }} />
      
    </div>);

}

function BarberScreen() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <img
        src="screenshots/barber-edited.jpg"
        alt="Barber calendar screenshot"
        style={{ width: '100%', display: 'block', borderRadius: '0 0 28px 28px' }} />
      
    </div>);

}

function PaymentMock() {
  return (
    <div className="mock mock-pay">
      <div className="mk-h">ชำระเงิน</div>
      <div className="mk-bank-card">
        <div className="mk-bank-lbl">ธนาคาร</div>
        <div className="mk-bank-row">
          <span className="mk-bank-logo">B</span>
          <span>ธนาคารตัวอย่าง (Demo Bank)</span>
        </div>
        <div className="mk-bank-lbl">เลขที่บัญชี</div>
        <div className="mk-bank-num">XXX-X-XXXXX-X</div>
        <div className="mk-bank-lbl">ชื่อบัญชี</div>
        <div className="mk-bank-name">บจก. ชื่อร้านของคุณ</div>
      </div>
      <div className="mk-upload">
        <div className="mk-upload-icon">⬆</div>
        <div className="mk-upload-t">แตะเพื่ออัปโหลดสลิป</div>
        <div className="mk-upload-s">รองรับไฟล์ JPG, PNG</div>
      </div>
    </div>);

}

function SlipMock() {
  return (
    <div className="mock mock-slip">
      <div className="mk-slip-banner">
        <span className="mk-slip-check">✓</span>
        <div>
          <div className="mk-slip-t">สลิปถูกต้อง</div>
          <div className="mk-slip-s">ตรวจอัตโนมัติเมื่อ 09:42</div>
        </div>
      </div>
      <div className="mk-row"><span>ผู้โอน</span><b>คุณ Praew T.</b></div>
      <div className="mk-row"><span>ยอด</span><b>฿ 350.00</b></div>
      <div className="mk-row"><span>เวลา</span><b>06 พ.ค. · 09:42</b></div>
      <div className="mk-row"><span>เลขอ้างอิง</span><b className="mono">BKB-0429-7733</b></div>
    </div>);

}

function BarberCalendarMock() {
  const cols = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'];
  const full = [3, 8, 15, 22, 28];
  const partial = [5, 12, 19, 26];
  const sel = 9;
  return (
    <div className="mock mock-barber">
      <div className="barb-top">
        <div>
          <div className="barb-shop">ร้านตัวอย่าง</div>
          <div className="barb-staff">Senior Stylist · ตัดผม + สระ</div>
        </div>
        <div className="barb-month">พฤษภาคม 2026 ▶</div>
      </div>
      <div className="barb-cal">
        <div className="barb-cal-h">
          {cols.map((c) => <span key={c}>{c}</span>)}
        </div>
        <div className="barb-cal-grid">
          {Array.from({ length: 30 }).map((_, i) => {
            const day = i + 1;
            const isFull = full.includes(day);
            const isPart = partial.includes(day);
            const isSel = day === sel;
            return (
              <span key={i} className={`barb-day ${isFull ? 'full' : ''} ${isSel ? 'sel' : ''} ${isPart ? 'part' : ''}`}>
                <span className="barb-day-n">{day}</span>
                {isFull && <span className="barb-day-tag">เต็ม</span>}
                {isPart && !isFull && <span className="barb-day-tag part">ว่าง</span>}
              </span>);

          })}
        </div>
      </div>
      <div className="barb-legend">
        <span><i className="lg lg-avail" />ว่าง</span>
        <span><i className="lg lg-part" />เหลือน้อย</span>
        <span><i className="lg lg-full" />เต็มคิว</span>
        <span><i className="lg lg-sel" />เลือกแล้ว</span>
      </div>
    </div>);

}

function AdminMock() {
  const cols = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];
  const rows = [
  { staff: 'ช่างเอก', spans: [[0, 2, 'a'], [3, 1, 'b'], [5, 3, 'c']] },
  { staff: 'ช่างนิว', spans: [[1, 2, 'b'], [4, 2, 'a']] },
  { staff: 'ช่างพลอย', spans: [[0, 1, 'c'], [2, 3, 'a'], [6, 2, 'b']] }];

  return (
    <div className="mock mock-admin">
      <div className="mk-adm-top">
        <div className="mk-adm-tabs">
          <span className="on">ตารางจอง</span>
          <span>รายงาน</span>
          <span>ลูกค้า</span>
          <span>ตั้งค่า</span>
        </div>
        <div className="mk-adm-stats">
          <span><b>23</b> จองวันนี้</span>
          <span><b>฿8,420</b> ยอดวันนี้</span>
          <span><b>92%</b> เต็มคิว</span>
        </div>
      </div>
      <div className="mk-adm-grid">
        <div className="mk-adm-cols">
          <span />{cols.map((c) => <span key={c}>{c}</span>)}
        </div>
        {rows.map((r, ri) =>
        <div key={ri} className="mk-adm-row">
            <span className="mk-adm-staff">{r.staff}</span>
            <div className="mk-adm-track">
              {r.spans.map(([start, len, kind], i) =>
            <span
              key={i}
              className={`mk-adm-blk k-${kind}`}
              style={{ left: `${start / cols.length * 100}%`, width: `${len / cols.length * 100}%` }} />

            )}
            </div>
          </div>
        )}
      </div>
    </div>);

}

// ── Proof ───────────────────────────────────────────────────────────────────

function Proof() {
  return (
    <section className="proof" data-screen-label="05 Proof">
      <div className="container proof-row">
        {PROOF.map((p, i) =>
        <React.Fragment key={i}>
            <div className="proof-item">
              <div className="proof-metric">{p.metric}</div>
              <div className="proof-note">{p.note}</div>
              <div className="proof-biz">{p.biz}</div>
            </div>
            {i < PROOF.length - 1 && <span className="proof-sep" />}
          </React.Fragment>
        )}
      </div>
    </section>);

}

// ── Process ─────────────────────────────────────────────────────────────────

function Process() {
  return (
    <section className="process" id="process" data-screen-label="06 Process">
      <div className="container">
        <SectionHeader
          title="ขั้นตอนการทำงาน" />
        
        <div className="proc-rail">
          {STEPS.map((s, i) =>
          <div key={s.n} className="proc-step">
              <div className="proc-line">
                <span className="proc-dot" />
                {i < STEPS.length - 1 && <span className="proc-conn" />}
              </div>
              <div className="proc-body">
                <div className="proc-n">{s.n}</div>
                <h3>{s.th}</h3>
                <span className="proc-en">{s.en}</span>
                <p>{s.body}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ── FAQ ─────────────────────────────────────────────────────────────────────

function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="faq" id="faq" data-screen-label="07 FAQ">
      <div className="container faq-grid">
        <div className="faq-side">
          <SectionHeader
            eyebrow="คำถามที่พบบ่อย"
            title={<>คำตอบสั้น ๆ <br /><em>ก่อนที่คุณจะถาม</em></>} />
          
          <a href="#contact" className="btn btn-ghost faq-btn">มีคำถามอื่น? คุยกับเรา →</a>
        </div>
        <ul className="faq-list">
          {FAQS.map((f, i) =>
          <li key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="faq-q">{f.q}</span>
                <span className="faq-plus">{open === i ? '–' : '+'}</span>
              </button>
              {open === i && <div className="faq-a">{f.a}</div>}
            </li>
          )}
        </ul>
      </div>
    </section>);

}

// ── Contact ─────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section className="contact" id="contact" data-screen-label="08 Contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-l">
            <div className="sec-eyebrow" style={{ color: "rgb(255, 255, 255)" }}>ติดต่อเรา</div>
            <h2 className="contact-title">
              พร้อมเริ่ม? <em style={{ color: "rgb(226, 230, 239)" }}>คุยกับเราฟรี</em><br />
              ไม่มีข้อผูกมัด
            </h2>
            <p className="contact-sub">ส่งข้อความหาเราในช่องทางที่สะดวก

            </p>

          </div>
          <div className="contact-r">
            <ContactRow
              kind="line"
              label=""
              handle="LINE"
              note="ตอบเร็ว · แนบรูปอ้างอิงได้"
              href="https://lin.ee/Ruq6EsA" />
            
            <ContactRow
              kind="fastwork"
              label=""
              handle="FASTWORK"
              note="จ้างผ่านระบบ มัดจำปลอดภัย"
              href="https://fastwork.co/user/kanthep/web-development-16344094?source=seller-center_my-service" />
            

          </div>
        </div>
      </div>
    </section>);

}

function ContactRow({ kind, label, handle, note, href }) {
  return (
    <a className="ct" href={href} target="_blank" rel="noreferrer" style={{ borderColor: "rgb(37, 99, 235)" }}>
      <span className={`ct-icon ct-${kind}`}>
        {kind === 'line' &&
        <svg viewBox="0 0 24 24"><path fill="currentColor" d="M19.36 10.39c0-3.74-3.75-6.79-8.36-6.79s-8.36 3.05-8.36 6.79c0 3.36 2.97 6.18 6.99 6.71.27.06.64.18.74.41.08.21.05.55.03.76l-.12.72c-.04.21-.17.83.73.45.9-.38 4.83-2.85 6.59-4.87 1.21-1.33 1.79-2.68 1.79-4.18Z" /></svg>
        }
        {kind === 'fastwork' &&
        <svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M5 19l5-9 4 6 5-11" /></svg>
        }
        {kind === 'facebook' &&
        <svg viewBox="0 0 24 24"><path fill="currentColor" d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5h1.65V4.6c-.29-.04-1.27-.13-2.41-.13-2.39 0-4.04 1.46-4.04 4.14v2.31H7.5V14h2.75v8h3.25Z" /></svg>
        }
      </span>
      <div className="ct-body">
        {label && <div className="ct-label">{label}</div>}
        <div className="ct-handle">{handle}</div>
        <div className="ct-note">{note}</div>
      </div>
      <span className="ct-arr">→</span>
    </a>);

}

// ── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="foot">
      <div className="container foot-row">
        <span>© 2026 {BRAND.name} · \u0e23\u0e30\u0e1a\u0e1a\u0e08\u0e2d\u0e07\u0e2d\u0e2d\u0e19\u0e44\u0e25\u0e19\u0e4c</span>
        <span className="foot-r">
          <a href="#top">กลับขึ้นด้านบน ↑</a>
        </span>
      </div>
    </footer>);

}

// ── Mount ───────────────────────────────────────────────────────────────────

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
