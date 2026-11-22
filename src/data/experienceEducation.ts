import { ExperienceItem, EducationItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-primestack",
    role: "CEO & Lead Architect",
    organization: "PrimeStack Agency",
    period: "2024 – Present",
    location: "Swat, Pakistan",
    description: "Founding and directing technical delivery at PrimeStack Agency. Leading client architecture, web applications, custom WooCommerce systems, and enterprise mobile solutions.",
    highlights: [
      "Architected PrimeStack POS featuring real-time Firebase syncing, camera/laser barcode scanning, and thermal receipt printing.",
      "Successfully delivered 9+ commercial websites spanning e-commerce, corporate branding, non-profit, and service sectors.",
      "Mentored junior developers in responsive UI practices, Git workflows, and clean code principles."
    ]
  },
  {
    id: "exp-freelance",
    role: "Full-Stack Web & Mobile Developer",
    organization: "Freelance & Independent Consulting",
    period: "July 2024 – Present",
    location: "Remote / Global",
    description: "Delivering end-to-end digital solutions for regional and international clients. Specialized in rapid prototyping, e-commerce stores, and high-performance frontend interfaces.",
    highlights: [
      "Built custom WordPress solutions on Pantheon cloud infrastructure with tailored Elementor blocks.",
      "Engineered responsive e-commerce web applications with localized shopping carts and optimized performance.",
      "Maintained 100% client satisfaction through clear communication, post-launch support, and rigorous QA."
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "edu-uos",
    degree: "BS Software Engineering",
    institution: "University of Swat",
    period: "2023 – 2027",
    location: "Swat, Khyber Pakhtunkhwa, Pakistan",
    description: "Pursuing a comprehensive 4-year degree in Software Engineering, building strong theoretical foundations in computing alongside cutting-edge hands-on software development.",
    coursework: [
      "Data Structures & Algorithms (DSA)",
      "Database Management Systems & Relational Architecture",
      "Object-Oriented Programming (OOP)",
      "Software Design Patterns & Architecture",
      "Software Requirements Engineering & Quality Assurance"
    ]
  }
];
