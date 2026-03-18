export interface ImageType {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  images: ImageType[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  category: string[];
  year: number;
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  category: string;
  proficiency: number; // 1-5
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  type: 'work' | 'education';
}

export interface Bio {
  name: string;
  title: string;
  summary: string;
  description: string[];
  image: string;
  resumeUrl: string;
}
