import { ProjectItem } from '../types';
import posImg from '../assets/images/projects/primestackpos.jpg';
import salmanImg from '../assets/images/projects/salmanshoe.jpg';
import powerNestImg from '../assets/images/projects/powernest.jpg';
import beyondLuneImg from '../assets/images/projects/beyondlune.jpg';
import zebFoodImg from '../assets/images/projects/zebfoodbank.jpg';
import pathanProMaxImg from '../assets/images/projects/pathanpromax.jpg';
import everyFlowMusicImg from '../assets/images/projects/everyflowmusic.jpg';
import asRepairingImg from '../assets/images/projects/asrepairing.jpg';
import pscoGlobalImg from '../assets/images/projects/pscoglobal.jpg';

export const projectsData: ProjectItem[] = [
  {
    id: "primestack-pos",
    title: "PrimeStack POS",
    subtitle: "Enterprise Retail Management System",
    description: "Cross-platform mobile Point-of-Sale (POS) designed for high-throughput retail operations. Features real-time Cloud Firestore inventory sync, native camera/laser barcode scanning, thermal Bluetooth/USB receipt printing, and cashier session accounting.",
    category: "mobile",
    categoryLabel: "Mobile System",
    tags: ["React Native", "Firebase", "Barcode Scanner", "Thermal Printing", "TypeScript"],
    isPrivate: true,
    featured: true,
    imageUrl: posImg,
    iconName: "Cpu"
  },
  {
    id: "salman-shoe",
    title: "Salman Shoe",
    subtitle: "Footwear Retail & E-Commerce Store",
    description: "Custom e-commerce footwear platform equipped with catalog filtering, variant selections, localized shopping cart mechanisms, and high-performance mobile-first layouts.",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    tags: ["WordPress", "WooCommerce", "Elementor", "Responsive Design"],
    liveUrl: "https://dev-salmanshoe.pantheonsite.io/",
    featured: true,
    imageUrl: salmanImg,
    iconName: "ShoppingBag"
  },
  {
    id: "pathan-pro-max",
    title: "Pathan Pro Max",
    subtitle: "Fashion Store & Fragrance E-Commerce",
    description: "Luxury e-commerce and brand showcase engineered for men's premium footwear and signature fragrances, featuring modern typography, product catalogs, and rapid Pantheon cloud deployment.",
    category: "ecommerce",
    categoryLabel: "E-Commerce / Brand",
    tags: ["WordPress", "WooCommerce", "Elementor", "SEO Optimized"],
    liveUrl: "https://dev-pathanpromax.pantheonsite.io/",
    featured: false,
    imageUrl: pathanProMaxImg,
    iconName: "Globe"
  },
  {
    id: "psco-global",
    title: "PSCO Global",
    subtitle: "Proposed Solution Company Portal",
    description: "Multi-sector corporate gateway for Proposed Solution Company (PSCO), orchestrating Biofloc aquaculture, Oil & Gas operations, and international commodity trading divisions.",
    category: "wordpress",
    categoryLabel: "Corporate / Web",
    tags: ["WordPress", "Corporate Architecture", "Custom Forms", "Security"],
    liveUrl: "https://pscoglobal.com/",
    featured: true,
    imageUrl: pscoGlobalImg,
    iconName: "Building2"
  },
  {
    id: "power-nest",
    title: "Power Nest",
    subtitle: "Clean Energy & Tech Showcase",
    description: "Technological product showcase and equipment portal featuring modular component architecture, technical specification sheets, and inquiry lead capture.",
    category: "wordpress",
    categoryLabel: "WordPress",
    tags: ["WordPress", "Elementor Pro", "Product Catalog", "Performance"],
    liveUrl: "https://dev-power-nest.pantheonsite.io/",
    featured: false,
    imageUrl: powerNestImg,
    iconName: "Zap"
  },
  {
    id: "beyond-lune",
    title: "Beyond Lune",
    subtitle: "Japanese Luxury Lifestyle Brand",
    description: "Minimalist, editorial digital boutique embodying Japanese aesthetic standards, featuring refined typography, delicate micro-animations, and seamless product navigation.",
    category: "ecommerce",
    categoryLabel: "Brand / E-Commerce",
    tags: ["E-Commerce", "Luxury Branding", "Minimalist UX", "WooCommerce"],
    liveUrl: "https://beyondlune.co.jp/",
    featured: true,
    imageUrl: beyondLuneImg,
    iconName: "Gem"
  },
  {
    id: "every-flow-music",
    title: "Every Flow Music",
    subtitle: "AI Background Music for Retail",
    description: "AI-generated store background music subscription platform, featuring brand mood matching, genre sliders, high-performance streaming architecture, and copyright-safe playback.",
    category: "wordpress",
    categoryLabel: "Entertainment / Web",
    tags: ["WordPress", "Audio Integration", "AI Music", "Custom Media"],
    liveUrl: "https://everyflowmusic.com/",
    featured: false,
    imageUrl: everyFlowMusicImg,
    iconName: "Music"
  },
  {
    id: "zeb-food-bank",
    title: "Zeb Food Bank",
    subtitle: "Humanitarian Outreach Platform",
    description: "Non-profit humanitarian platform supporting community food distribution, donation transparent reporting, volunteer signups, and mission storytelling.",
    category: "wordpress",
    categoryLabel: "Non-Profit / NGO",
    tags: ["WordPress", "Donation Gateway", "Community Outreach", "Accessibility"],
    liveUrl: "https://zebfoodbank.com/",
    featured: false,
    imageUrl: zebFoodImg,
    iconName: "HeartHandshake"
  },
  {
    id: "as-repairing",
    title: "AS Repairing Service",
    subtitle: "Appliance Repair & On-Site Service",
    description: "On-site appliance repair service portal for washing machines, refrigerators, and commercial chillers in Kuantan, featuring real-time booking forms and direct helpline routing.",
    category: "wordpress",
    categoryLabel: "Services / Booking",
    tags: ["WordPress", "Booking Engine", "Customer Inquiries", "Local SEO"],
    liveUrl: "https://asrepairingservice.com/",
    featured: false,
    imageUrl: asRepairingImg,
    iconName: "Wrench"
  }
];
