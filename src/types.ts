
export type Language = 'en' | 'ar';

export interface NavItem {
  key: string;
  label: {
    en: string;
    ar: string;
  };
  href: string;
  desktopOnly?: boolean;
}

export interface Service {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  detailedInfo: {
    en: string;
    ar: string;
  };
  icon: string;
}

export interface ProcessStep {
  id: number;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  icon: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: {
    en: string;
    ar: string;
  };
  excerpt: {
    en: string;
    ar: string;
  };
  content: {
    en: string; // Markdown content
    ar: string; // Markdown content
  };
  author: {
    name: string;
    role: {
      en: string;
      ar: string;
    };
    image: string;
  };
  date: string;
  readTime: {
    en: string;
    ar: string;
  };
  category: {
    en: string;
    ar: string;
  };
  image: string;
}

export interface Testimonial {
  id: number;
  name: {
    en: string;
    ar: string;
  };
  role: {
    en: string;
    ar: string;
  };
  content: {
    en: string;
    ar: string;
  };
  avatar: string;
}

export interface FAQItem {
  question: {
    en: string;
    ar: string;
  };
  answer: {
    en: string;
    ar: string;
  };
}

export interface Translation {
  [key: string]: {
    en: string;
    ar: string;
  }
}
