<<<<<<< HEAD
# Malak Shah Fahad — Developer Portfolio

A high-craft, editorial developer portfolio built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Engineered with a clean asymmetric 12-column grid, responsive typography, custom wolf circuit SVG branding, real project screenshots, and full Dark/Light theme switching.

![Portfolio Preview](./public/og-image.png)

---

## 🚀 Key Highlights

- **Editorial Design System:**
  - **Light Theme:** `#FFFFFF` canvas, `#F7F7F5` alternate sections, `#0A0A0A` ink text, 1px `#E7E7E4` hairline borders.
  - **Dark Theme:** `#0A0A0B` dark foundation, `#111113` cards, `#232326` borders, `#F4F4F2` text.
  - **Single Champagne Gold Accent:** `#B8924A` (light mode contrast) / `#C9A86A` (dark mode glow) for active states, indicators, and micro-interactions.
- **Custom Vector Branding:** Handcrafted theme-reactive Wolf Circuit SVG logo mark in both header and footer.
- **Real Production Projects:** Bento grid showcase with browser window frames, live Pantheon/WordPress deployments, and high-resolution screenshots:
  - **PrimeStack POS** (Mobile retail POS system, Firebase & thermal printing)
  - **Salman Shoe** (WooCommerce footwear store)
  - **Pathan Pro Max / FS Fashion Store** (Men's luxury footwear & fragrances)
  - **PSCO Global** (Corporate logistics & enterprise portal)
  - **Power Nest** (Clean energy & tech equipment showcase)
  - **Beyond Lune** (Japanese luxury boutique)
  - **Every Flow Music** (AI store background music subscription platform)
  - **Zeb Food Bank** (Humanitarian outreach platform)
  - **AS Repairing Service** (Appliance repair & technician dispatch portal)
- **Zero Hard-Coded Content:** All content is strictly organized in typed data modules (`src/data/*.ts`) for straightforward maintenance.
- **Spam-Protected Contact Form:** Integrated with **EmailJS**, client validation, honeypot anti-spam trap, and submission feedback.
- **Floating WhatsApp Channel:** One-click floating chat button with radar pulse ring directly routed to `+92 322 1971632`.
- **Verified Client Endorsements:** Pull-quote slider featuring authentic client testimonials from production deployments.

---

## 📁 Project Structure

```text
my-portfolio-website/
├── public/
│   ├── favicon.svg              # Custom wolf circuit SVG favicon
│   ├── logo.svg                 # Standalone vector logo asset
│   └── og-image.png             # Social sharing preview banner
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── profileImg.jpeg  # High-resolution suit headshot
│   │       ├── logo.svg         # Vector branding mark
│   │       └── projects/        # Real production screenshots (7 projects)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Header with SVG logo, links, theme switch & mobile drawer
│   │   │   └── Footer.tsx       # Footer with SVG brand, live PKT clock & navigation
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Asymmetric hero, headline with gold underline, portrait
│   │   │   ├── Stats.tsx        # High-impact numerals & deliverable metrics
│   │   │   ├── About.tsx        # Background narrative & 3 engineering pillars
│   │   │   ├── Journey.tsx      # Chronological timeline from 2024 to present
│   │   │   ├── Skills.tsx       # Categorized skills matrix with 'Basic' badges
│   │   │   ├── Projects.tsx     # Bento grid with filter tabs & browser frames
│   │   │   ├── Testimonials.tsx # Client pull-quote endorsement slider
│   │   │   ├── Services.tsx     # Full-lifecycle capability listings
│   │   │   ├── ExperienceEducation.tsx # Agency leadership & BS Software Engineering
│   │   │   └── Contact.tsx      # Direct channels & EmailJS contact form
│   │   └── ui/
│   │       ├── Logo.tsx         # Theme-reactive SVG Wolf Circuit logo
│   │       ├── WhatsAppButton.tsx # Floating pulse WhatsApp launcher
│   │       ├── ThemeToggle.tsx  # Smooth Dark/Light mode switch
│   │       ├── Badge.tsx        # Modular chip badge component
│   │       └── SectionHeading.tsx # Standardized editorial section numbers
│   ├── data/
│   │   ├── profile.ts           # Bio, roles, and status
│   │   ├── stats.ts             # Metrics and counts
│   │   ├── journey.ts           # Career milestones
│   │   ├── skills.ts            # Tech stack and proficiencies
│   │   ├── projects.ts          # Project list, links, and tags
│   │   ├── testimonials.ts      # Client review data
│   │   ├── services.ts          # Service descriptions
│   │   ├── experienceEducation.ts # Work experience and education
│   │   └── socials.ts           # Social links and handles
│   ├── hooks/
│   │   ├── useTheme.ts          # Dark/light mode manager with localStorage sync
│   │   └── useActiveSection.ts  # Scrollspy active section observer
│   ├── types/
│   │   └── index.ts             # Strict TypeScript definitions
│   ├── App.tsx                  # Root application
│   ├── index.css                # Base design tokens & CSS variables
│   └── main.tsx                 # React DOM mount point
├── .env.example                 # EmailJS environment template
├── index.html                   # HTML entry with anti-flash script & meta tags
├── package.json                 # Project dependencies
├── tailwind.config.js           # Design tokens, typography & theme extension
├── tsconfig.json                # TypeScript configuration
└── vite.config.ts               # Vite configuration
```

---

## 🛠️ Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0 or later
- **npm**: v9.0.0 or later

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure EmailJS (Optional for Contact Form)
Create a `.env` file in the project root:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 4. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### 5. Production Build
```bash
npm run build
```
Generates an optimized, tree-shaken static bundle in `dist/`.

---

## 🚢 Deployment

### Deploy to Vercel
```bash
npx vercel
```
Set the root directory to `./` and add environment variables if using EmailJS.

### Deploy to Netlify
```bash
npx netlify deploy --prod
```
Set build command to `npm run build` and publish directory to `dist`.

---

## 📄 License
MIT © [Malak Shah Fahad](https://github.com/fadimalak45-cyber)
=======
# my-portfolio-website
>>>>>>> cc63b00570023d423fdcaa268fd0b68f53c5a7d1
