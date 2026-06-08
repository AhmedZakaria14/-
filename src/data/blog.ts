import { Language } from '../types';

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
    en: string;
    ar: string;
  };
  date: string;
  author: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [];
