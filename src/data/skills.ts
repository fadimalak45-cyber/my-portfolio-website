import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Web Engineering",
    description: "Building responsive, pixel-faithful web interfaces with modern reactive component architectures.",
    skills: [
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "React.js", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Bootstrap", level: "Advanced" }
    ]
  },
  {
    category: "Mobile & Typed Languages",
    description: "Cross-platform mobile apps for iOS and Android with strict type safety and native performance.",
    skills: [
      { name: "React Native", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" }
    ]
  },
  {
    category: "Backend & Cloud Databases",
    description: "Cloud database modeling, document synchronization, and foundational server-side development.",
    skills: [
      { name: "Firebase", level: "Advanced" },
      { name: "Cloud Firestore", level: "Advanced" },
      { name: "Node.js", level: "Basic", isBasic: true },
      { name: "MySQL", level: "Basic", isBasic: true }
    ]
  },
  {
    category: "WordPress & E-Commerce",
    description: "Custom CMS development, complex storefronts, high-converting product catalogs, and performance tuning.",
    skills: [
      { name: "WordPress", level: "Advanced" },
      { name: "Elementor", level: "Advanced" },
      { name: "WooCommerce", level: "Advanced" },
      { name: "Website Customization", level: "Advanced" },
      { name: "E-commerce Development", level: "Advanced" }
    ]
  },
  {
    category: "Specialized Systems & Hardware",
    description: "Hardware integration, authentication flows, retail peripherals, and resilient deployment lifecycles.",
    skills: [
      { name: "Responsive Development", level: "Advanced" },
      { name: "Admin Dashboards", level: "Advanced" },
      { name: "Firebase Authentication", level: "Advanced" },
      { name: "Barcode Scanning", level: "Advanced" },
      { name: "Thermal Receipt Printing", level: "Advanced" },
      { name: "Deployment & Maintenance", level: "Advanced" }
    ]
  }
];
