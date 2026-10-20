/**
 * Navigation item for Header and Footer components.
 */
export interface NavigationItem {
  label: string;
  href: string;
}

/**
 * Portfolio showcase project item.
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  number?: string;
  category?: string;
  doodleText?: string;
  badgeBg?: string;
  badgeTextColor?: string;
  accentColor?: string;
}

/**
 * Core technical skill item.
 */
export interface Skill {
  name: string;
  icon: string;
}

/**
 * Professional work experience or academic credential item.
 */
export interface Experience {
  id: string;
  type: "work" | "education";
  title: string;
  organization: string;
  location?: string;
  period: string;
  description: string;
}

/**
 * Client testimonial endorsement item.
 */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  companyName?: string;
  companyType?: string;
}

/**
 * Case study or technical publication blog post item.
 */
export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  slug: string;
}

export interface ArticleSection {
  heading: string;
  subheading?: string;
  paragraphs: string[];
  keyHighlights?: string[];
  quote?: string;
  codeSnippet?: {
    language: string;
    code: string;
    caption?: string;
  };
}

export interface ArticleDetail {
  id: string;
  slug: string;
  articleNumber: string;
  title: string;
  subtitle: string;
  category: "DESIGN" | "DEVELOPMENT" | "UI/UX" | "ARCHITECTURE";
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  categoryIcon: "code" | "layers" | "palette" | "monitor";
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  metrics?: { label: string; value: string }[];
  tags: string[];
  sections: ArticleSection[];
  gallery?: {
    src: string;
    title: string;
    step: string;
  }[];
  sectionMedia?: string;
  comparisonImages?: {
    left: { src: string; title: string; desc: string };
    right: { src: string; title: string; desc: string };
  };
  processImage?: {
    src: string;
    caption: string;
  };
}

/**
 * Architectural discipline or service offering item.
 */
export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  number?: string;
  image?: string;
  stickyNote?: string;
  features?: string[];
  tags?: string[];
  annotation?: string;
  annotationPos?: "top-right" | "bottom-left" | "floating";
  hasSparkle?: boolean;
  sparklePos?: "left" | "right" | "top-left" | "top-right";
}

/**
 * Contact form input payload submitted by visitors.
 */
export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

/**
 * Standard API response wrapper for client-side queries.
 */
export interface APIResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  id?: number;
}

