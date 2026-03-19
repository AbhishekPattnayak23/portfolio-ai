export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectType: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface ProjectFilterState {
  technologies: string[];
  projectType: string | null;
}
