export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  codeUrl?: string;
  category: 'web' | 'mobile' | 'ai' | 'other';
  featured: boolean;
  date: string; // ISO format
  tags: string[];
}

export type SortOption = 'newest' | 'oldest' | 'a-z' | 'z-a';

export interface ProjectFilters {
  search: string;
  categories: ('web' | 'mobile' | 'ai' | 'other')[];
  tags: string[];
  sort: SortOption;
}
