export interface ProfileInfo {
  name: string;
  initials: string;
  role: string;
  agencyRole: string;
  agencyName: string;
  location: string;
  bioIntro: string;
  bioFull: string[];
  availability: string;
  resumeUrl?: string;
}

export interface StatItem {
  id: string;
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  sublabel?: string;
  metricNumber: string;
  iconName: string;
}

export interface JourneyMilestone {
  period: string;
  title: string;
  description: string;
  highlightTags: string[];
  iconName: string;
}

export interface SkillCategory {
  category: string;
  description?: string;
  skills: {
    name: string;
    level?: 'Advanced' | 'Intermediate' | 'Basic';
    isBasic?: boolean;
    icon?: string;
  }[];
}

export type ProjectCategory = 'all' | 'wordpress' | 'ecommerce' | 'mobile';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  categoryLabel: string;
  tags: string[];
  liveUrl?: string;
  isPrivate?: boolean;
  featured?: boolean;
  iconName?: string;
  imageUrl?: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  companyName: string;
  avatarInitials: string;
  content: string;
  rating: number;
  verified: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  iconName: string;
  badge?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  coursework: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
  ariaLabel: string;
  icon: string;
}
