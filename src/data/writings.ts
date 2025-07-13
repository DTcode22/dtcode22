export interface Writing {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  url?: string;
}

export const writings: Writing[] = [];
