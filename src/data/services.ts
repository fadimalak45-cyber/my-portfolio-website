import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: "service-web",
    title: "Web Application Engineering",
    subtitle: "React.js & Modern Frontend",
    description: "Architecting blazing-fast, component-driven web applications and client dashboards using React.js, TypeScript, and modern Tailwind CSS with fluid responsive layouts.",
    features: [
      "Custom React component architecture",
      "Interactive data dashboards & analytics",
      "RESTful API & state synchronization",
      "Strict responsive design & accessibility"
    ],
    iconName: "Layout",
    badge: "Core Specialty"
  },
  {
    id: "service-wordpress",
    title: "WordPress & WooCommerce Systems",
    subtitle: "Custom Stores & High-Speed Portals",
    description: "Developing custom-tailored WordPress websites, WooCommerce e-commerce platforms, custom Elementor modules, and performance-tuned business portals.",
    features: [
      "WooCommerce checkout & catalog customization",
      "Pixel-faithful Elementor Pro implementation",
      "Page speed optimization & caching architecture",
      "Payment gateway & shipping API integrations"
    ],
    iconName: "ShoppingBag",
    badge: "High Demand"
  },
  {
    id: "service-mobile",
    title: "Cross-Platform Mobile Apps",
    subtitle: "React Native iOS & Android",
    description: "Building production-grade mobile applications with React Native, delivering native performance, fluid micro-interactions, and tight hardware integrations.",
    features: [
      "Cross-platform parity for iOS and Android",
      "Hardware APIs: Barcode scanning & Bluetooth printers",
      "Offline-first local caching & background sync",
      "Intuitive mobile UX with responsive touch flows"
    ],
    iconName: "Smartphone",
    badge: "Enterprise Ready"
  },
  {
    id: "service-cloud",
    title: "Cloud Database & Hardware Integration",
    subtitle: "Firebase Firestore & POS Peripherals",
    description: "End-to-end integration of Cloud Firestore databases, Firebase Authentication, secure role-based rules, and specialized retail hardware communication.",
    features: [
      "Cloud Firestore schema design & real-time sync",
      "Firebase Authentication & multi-role access",
      "Thermal receipt printing protocol integration",
      "Barcode reader input pipelines & POS flows"
    ],
    iconName: "Database",
    badge: "Specialized"
  }
];
