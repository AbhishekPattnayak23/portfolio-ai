/**
 * Type definitions for projects and related components
 */

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface Technology {
  name: string;
  icon?: string;
  category: 'frontend' | 'backend' | 'ai' | 'data' | 'cloud' | 'other';
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  images: ProjectImage[];
  technologies: Technology[];
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  date: string;
  category: string[];
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  relatedProjects?: string[]; // IDs of related projects
}
