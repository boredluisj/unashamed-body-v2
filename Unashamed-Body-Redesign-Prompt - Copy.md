# Claude Code Prompt — Unashamed Body Men's Health Clinic (Full Redesign)

**PURPOSE:** Full website redesign. The current site has CSS rendering issues, multiple 404 pages, empty sitemap, no blog, and no external reviews. Build a complete, production-ready site that looks like a $15k custom agency build. Reference `Unashamed-Body-Client-Data.md` for all content.

---

## PROJECT BRIEF

Build a complete, production-ready website for **Unashamed Body** — Premier Men's Health Clinic in McDonough, GA. Led by Monique Mitchell, NP (12+ years, ER/cardiology background) and Dr. Bobby Gearing, MD (SUNY Downstate, 10+ years TRT). Concierge model — appointment-only, no waiting rooms, telehealth + in-person.

**Target patient:** Men 35-65 experiencing low energy, ED, weight gain, hormonal decline — who are embarrassed or hesitant to seek help but motivated to reclaim their performance and confidence.

**Visual direction:** Dark, masculine, premium. Think Gameday Men's Health meets a luxury concierge clinic. Dark backgrounds, strong typography, bold contrast. **Not clinical and sterile — powerful and empowering.** The aesthetic should make men feel like this clinic is built for high-performers, not patients.

---

## TECH STACK

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion (latest)
- **Icons:** Lucide React
- **Fonts:**
  - Headings: `Sora` (modern, masculine, distinctive)
  - Body: `Inter` (clean, readable)
- **Package manager:** pnpm
- **Deployment:** Vercel

---

## PERFORMANCE (NON-NEGOTIABLE)

Target: 100/100 PageSpeed all four categories — mobile AND desktop.

- Static Site Generation for ALL pages
- Server Components by default — `"use client"` only for mobile nav, form, animation wrappers
- `next/image` with AVIF/WebP, priority on hero
- All animations check `useReducedMotion()`
- Zero console errors
- sitemap.xml + robots.txt — properly configured (current site's are EMPTY)

---

## ELITE COMPONENT RESEARCH — IMPLEMENT THESE EXACT PATTERNS

### Hero Section
Pattern: Full-bleed dark hero with animated particle field + Aceternity Hero Highlight
Key technique: Dark `bg-[#0A0A0F]` background with THREE.js-lite particle system OR CSS-only approach: 15 small radial gradient dots positioned absolutely, animating with different durations (8s/12s/15s ease-in-out infinite alternate). Headline uses Aceternity Hero Highlight pattern — yellow/amber underline highlight on key phrase.
Specific approach:
```css
/* Dark particle field — CSS only, no Three.js needed */
.particle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(220,38,38,0.4) 0%, transparent 70%);
  animation: float var(--duration) ease-in-out infinite alternate;
}
@keyframes float {
  0% { transform: translate(0, 0) scale(1); opacity: 0.3; }
  100% { transform: translate(var(--tx), var(--ty)) scale(1.2); opacity: 0.6; }
}
```
CodePen reference: https://codepen.io/Himanshu-Santani-the-bold/pen/XJmKWYo — Dark elegant hero with halo/vanta-like effect

### Services Section
Pattern: Dark card grid with red accent borders on hover
Key technique: Dark cards `bg-[#111118] border border-[#1E1E28] rounded-2xl p-8 hover:border-red-600/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.1)] transition-all duration-300`. Grid: 3 columns desktop, 2 tablet, 1 mobile.

### Testimonials
Pattern: Featured quote + supporting cards
Key technique: Large centered quote with quotation mark SVG (red), attribution + avatar placeholder. Below: 2-column grid of smaller testimonial cards. Both sections fade up on scroll (Framer Motion stagger).

### Stats / Trust Band
Pattern: Dark-on-darker full-width band (not contrast reversal — subtle differentiation)
`bg-[#0D0D15]` section with 4 stats. Red underline accent on each number. Count-up animation on scroll.

### CTA Section
Pattern: Red gradient + noise texture
`bg-gradient-to-br from-red-700 to-red-900` with SVG noise texture overlay at 5% opacity.
Dark card inside: `bg-black/40 backdrop-blur-sm border border-red-500/20 rounded-3xl p-16`

### Animation Reference
Aceternity Hero Highlight component — text highlight animation: https://ui.aceternity.com/components/hero-highlight
CodePen dark hero: https://codepen.io/Himanshu-Santani-the-bold/pen/XJmKWYo

### Additional Design Decisions
- Navigation: black/transparent on load → `bg-[#0A0A0F]/95 backdrop-blur-md` on scroll
- "Get Started" / "Book Now" CTA: `bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-3 font-semibold`
- Logo background issue FIX: Logo must render on DARK background. If logo has black background baked in, use CSS `mix-blend-mode: lighten` or `filter: brightness(0) invert(1)` to force white on dark. Include both variations.
- Red accent used sparingly — only for CTA buttons, key underlines, active states. Not overwhelming.

---

## COLOR PALETTE

```javascript
const colors = {
  primary: {
    DEFAULT: "#DC2626",     // red-600 — CTA, accents
    dark: "#B91C1C",        // red-700 — hover states
    light: "#FEE2E2",       // red-100 — light mode only
  },
  dark: {
    void: "#0A0A0F",        // near-black — hero bg
    deep: "#0D0D15",        // stats band bg
    card: "#111118",        // card backgrounds
    border: "#1E1E28",      // subtle borders
  },
  neutral: {
    white: "#F0EFFF",       // slightly cool white for headings
    text: "#9CA3AF",        // gray-400 — body text on dark
    muted: "#6B7280",       // gray-500 — secondary text
  },
}
```

---

## TYPOGRAPHY

```typescript
import { Sora, Inter } from "next/font/google";

const heading = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
```

Type scale:
- Hero H1: 5xl mobile / 7xl desktop — Sora 800, color: #F0EFFF
- Section H2: 3xl mobile / 5xl desktop — Sora 700
- Card H3: xl/2xl — Sora 600
- Body: 16px Inter, text-gray-400, leading-relaxed
- Nav: 14px Inter 500, text-gray-300 hover:text-white

---

## LOGO FIX (CRITICAL)

The current logo has a black background that clashes when the header isn't fully black. Fix:

```tsx
// In Header.tsx
<Image
  src="/images/logo.png"
  alt="Unashamed Body"
  width={160}
  height={40}
  className="h-10 w-auto"
  style={{
    // If logo has black bg, use mix-blend-mode to make it work on any dark bg
    mixBlendMode: 'lighten',
    // OR if you need to force it white:
    // filter: 'brightness(0) invert(1)'
  }}
/>
```

Include BOTH approaches with a comment. Test which one looks correct for the actual logo file.

---

## SITE STRUCTURE (15 pages total)

### 1. Homepage (/)
- Hero
- Stats band (4 counters)
- Services grid (6 services)
- Why Unashamed Body (concierge differentiation)
- Provider credentials section
- Testimonials
- Process (4 steps)
- CTA: Book a Consultation
- Blog preview (3 posts)
- FAQ preview (3 questions)

### 2. About (/about)
- Mission statement
- Full bios: Monique Mitchell NP + Dr. Bobby Gearing MD (with placeholder photos)
- "Why we built this" narrative
- Concierge care model explained
- HIPAA compliance mention

### 3. Services Landing (/services)
- Overview of all 6 services with links to individual pages

### 4. TRT (/services/trt)
Full standalone page: What is low T? | Symptoms | Treatment approach | Who qualifies | How it works | FAQ

### 5. Erectile Dysfunction (/services/ed)
Full standalone page: Privacy-first framing | Safe non-invasive options | Treatment pathways | FAQ

### 6. Medical Weight Loss (/services/weight-loss)
Full standalone page: GLP-1 | Peptide therapy | Lipotropics | Assessment process | Free consultation CTA

### 7. Peptide Therapy (/services/peptide-therapy)
Full standalone page: What are peptides? | Benefits | Common peptides used | FAQ

### 8. Unashamed Mind (/services/mental-health)
Full page: Mental health integration | Approach | Who it's for

### 9. Road Warrior (/services/road-warrior)
Full page: Traveling clients | Telehealth model | How it works

### 10. Telehealth (/telehealth)
Dedicated telehealth page — how the remote consultation works, privacy, HIPAA compliance, states served

### 11. FAQ (/faq)
Full FAQ with FAQPage schema — at least 15 questions covering: How does TRT work? Is treatment private? What happens in the first appointment? How long before I see results? Do you accept insurance? What's the cost? Can I do everything online?

### 12. Blog (/blog) + 3 posts
See Blog Posts section below.

### 13. Contact (/contact)
Form (Name, Phone, Email, Message, consent checkboxes), phone, email, address, hours, embedded Google Map

### 14. Privacy Policy (/privacy-policy)
HIPAA-appropriate. Add: "This policy should be reviewed by a qualified attorney before relying on it."

### 15. Terms of Service (/terms-of-service)
Standard. Attorney review disclaimer.

---

## FULL HOMEPAGE CONTENT

### Hero
**Headline:** "Reclaim Your Power.\nUnashamed."
**Subheadline:** "Concierge men's health care in McDonough, GA. Personalized TRT, ED treatment, and weight loss — no waiting rooms, no cookie-cutter plans."
**Primary CTA:** "Book a Consultation" → /contact
**Secondary CTA:** "See Our Treatments" → /services
**Floating trust badges:**
- ✓ Concierge Care — No Waiting Rooms
- ✓ Board-Certified Medical Director
- ✓ Telehealth + In-Person Available

### Stats Band
- 6 — Treatment Categories
- 12+ — Years Clinical Experience
- 2 — Specialized Providers
- 100% — Personalized Plans

### Services Overview
Grid of 6 cards (descriptions from Client Data). Each links to its individual service page.

### Why Unashamed Body
**Headline:** "Not Your Average Clinic"
Three differentiators vs. corporate healthcare:
1. **No Waiting Rooms** — "Your appointment is yours alone. Private, dignified, concierge-level."
2. **Science-Based Plans** — "No templates. Every plan is built around your labs, history, and goals."
3. **Telehealth + In-Person** — "Start your journey from anywhere. Meet virtually or in our McDonough office."

### Provider Section
**Headline:** "Meet Your Care Team"
Two provider cards side by side:
- Monique Mitchell, NP — AvatarPlaceholder initials "MM", bio excerpt, credentials
- Dr. Bobby Gearing, MD — AvatarPlaceholder initials "BG", bio excerpt, "Medical Director" badge

Both with TODO comment for real headshots: `{/* TODO: Replace with professional headshot — 600x800px, neutral background */}`

### Testimonials
**Headline:** "Real Men. Real Results."
Featured quote (large): "At first I thought low energy was just part of getting older, but after starting treatment here, I feel 10 years younger. My mood is better, I'm sharper at work, and my wife even noticed the difference."

Supporting card: "It was embarrassing to talk about, but Monique made it easy. I finally got answers and real options. Within a few weeks, my confidence came back—and so did my relationship."

### Treatment Process (4 steps)
1. **Schedule a Consultation** — Online telehealth booking, 15-minute intake
2. **Complete Labs & Forms** — HIPAA-compliant intake, comprehensive bloodwork
3. **Meet Your Provider** — Private video or in-person appointment
4. **Start Your Plan** — Custom treatment protocol, monthly check-ins

### CTA Section
**Headline:** "Ready to Reclaim Your Edge?"
**Body:** "Your first consultation is private, judgment-free, and personalized. Serving McDonough, GA and surrounding areas."
**CTA button:** "Book Your Consultation" → /contact
**Secondary:** "470-688-1678" (tel link) | "info@unashamedbody.com" (mailto)

---

## BLOG POSTS (3 Real Posts)

### Post 1: "What Is Low Testosterone? 7 Signs You Shouldn't Ignore"
- Slug: /blog/low-testosterone-signs
- Meta: "Learn the 7 most common signs of low T in men — and why ignoring them gets worse with age."
- Word count: 700
- Keywords: low testosterone signs, low T symptoms, TRT McDonough GA
- Content: Cover fatigue, low libido, weight gain, brain fog, mood changes, muscle loss, sleep problems. End with "Sound familiar? Book a free consultation at Unashamed Body."

### Post 2: "TRT vs. Natural Testosterone Boosters: What Actually Works"
- Slug: /blog/trt-vs-testosterone-boosters
- Meta: "Comparing TRT to over-the-counter testosterone supplements — what the research actually shows."
- Word count: 650
- Keywords: TRT vs supplements, testosterone replacement therapy, how TRT works
- Content: Why supplements don't address true low T, what TRT actually does, who qualifies, medical oversight importance. Balanced, educational tone.

### Post 3: "Erectile Dysfunction at 40: It's More Common Than You Think"
- Slug: /blog/erectile-dysfunction-40s
- Meta: "ED in your 40s isn't inevitable. Here's what causes it and what actually works."
- Word count: 600
- Keywords: erectile dysfunction 40s, ED treatment McDonough, non-invasive ED solutions
- Content: Normalize the topic, cover causes (vascular, hormonal, psychological), treatment options, importance of professional consultation. Non-judgmental framing.

---

## STRUCTURED DATA (JSON-LD)

### Site-wide — MedicalClinic
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Unashamed Body",
  "alternateName": "Unashamed Body Men's Health Clinic",
  "url": "https://unashamedbody.com",
  "telephone": "+14706881678",
  "email": "info@unashamedbody.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "920 Pavilion Court Suite 804B",
    "addressLocality": "McDonough",
    "addressRegion": "GA",
    "postalCode": "30252",
    "addressCountry": "US"
  },
  "openingHoursSpecification": [
    {"@type": "OpeningHoursSpecification","dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens": "09:00","closes": "20:00"}
  ],
  "medicalSpecialty": ["MensHealth","Endocrinology"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Men's Health Services",
    "itemListElement": [
      {"@type": "Offer","itemOffered": {"@type": "MedicalTherapy","name": "Testosterone Replacement Therapy"}},
      {"@type": "Offer","itemOffered": {"@type": "MedicalTherapy","name": "Erectile Dysfunction Treatment"}},
      {"@type": "Offer","itemOffered": {"@type": "MedicalTherapy","name": "Medical Weight Loss"}},
      {"@type": "Offer","itemOffered": {"@type": "MedicalTherapy","name": "Peptide Therapy"}}
    ]
  },
  "description": "Concierge men's health clinic in McDonough, GA. Personalized TRT, ED treatment, medical weight loss, and peptide therapy. No waiting rooms. Board-certified medical director.",
  "founder": {"@type": "Person","name": "Monique Mitchell","jobTitle": "Nurse Practitioner, Founder & CEO"},
  "employee": {"@type": "Person","name": "Dr. Bobby Gearing","jobTitle": "Medical Director, MD"}
}
```

### FAQ Schema (on /faq page)
Pre-fill with the 15 FAQ entries from the FAQ page content.

---

## IMPORTANT NOTES

1. **Phone:** `<a href="tel:+14706881678">470-688-1678</a>` — clickable everywhere
2. **Email:** `<a href="mailto:info@unashamedbody.com">info@unashamedbody.com</a>`
3. **Booking:** Contact form (/contact) as primary lead capture. No external booking widget until client provides telehealth platform embed code.
4. **Logo fix:** Apply `mix-blend-mode: lighten` OR `filter: brightness(0) invert(1)` — test which renders correctly for the dark header
5. **HIPAA notice:** Small disclaimer in footer: "Communications through this website are not HIPAA-secure. Do not submit protected health information through contact forms."
6. **Attorney disclaimer on legal pages:** "This policy was generated as a template and should be reviewed by a qualified attorney before publication."
7. **sitemap.xml:** MUST be properly generated with ALL page URLs. Current site's sitemap is completely empty — this is a major SEO failure to fix.
8. **robots.txt:** Allow all crawlers, reference sitemap URL.
9. **Mobile sticky CTA:** Fixed bottom bar on mobile — "Book a Consultation" → /contact
10. **Address variants:** Use 920 Pavilion Court Suite 804B, McDonough, GA 30252 consistently throughout (some pages show 804 Pavilion Court Suite B — standardize to the contact page version)

---

## FILE STRUCTURE

```
unashamed-body/
├── public/
│   ├── images/
│   │   ├── logo.png          # Download from current site if accessible
│   │   └── team/             # Placeholder until real photos provided
│   ├── robots.txt
│   └── sitemap.xml           # Will be auto-generated by Next.js metadata API
├── src/
│   └── app/
│       ├── layout.tsx         # Root: fonts, JSON-LD, metadata
│       ├── page.tsx           # Homepage
│       ├── about/page.tsx
│       ├── services/
│       │   ├── page.tsx
│       │   ├── trt/page.tsx
│       │   ├── ed/page.tsx
│       │   ├── weight-loss/page.tsx
│       │   ├── peptide-therapy/page.tsx
│       │   ├── mental-health/page.tsx
│       │   └── road-warrior/page.tsx
│       ├── telehealth/page.tsx
│       ├── faq/page.tsx
│       ├── blog/
│       │   ├── page.tsx
│       │   ├── low-testosterone-signs/page.tsx
│       │   ├── trt-vs-testosterone-boosters/page.tsx
│       │   └── erectile-dysfunction-40s/page.tsx
│       ├── contact/page.tsx
│       ├── privacy-policy/page.tsx
│       └── terms-of-service/page.tsx
```

---

## BUILD & DEPLOY

```bash
pnpm create next-app@latest unashamed-body --typescript --tailwind --app
cd unashamed-body
pnpm add framer-motion lucide-react

# Build
pnpm build
pnpm start
# Verify: no console errors, all 15 pages load, sitemap.xml works, mobile layout correct

# Deploy
gh repo create unashamed-body --private --source=. --push
npx vercel --prod

# Share the .vercel.app URL for demo preview
```

---

## DEMO EMAIL TEMPLATE

**Subject:** New website for Unashamed Body — ready to review

**Body:**
Hey [Name],

The redesign is ready. Here's the preview: [VERCEL URL]

What changed from the current site:
- 15 pages (current site has multiple broken/empty pages)
- 100/100 mobile speed, SEO, accessibility
- Blog with 3 SEO-optimized posts targeting "TRT McDonough GA"
- Working contact form + proper sitemap so Google can actually find you
- Fully mobile optimized

$199/month — hosting, SSL, maintenance, 1 update/month. No setup fee.

Reply "yes" and I'll send the invoice today.

Luis
Lunere Digital
