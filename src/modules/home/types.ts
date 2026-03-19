/**
 * Type definitions for the Home module
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  featured: boolean;
}

export interface HeroSectionProps {
  name: string;
  title: string;
  summary: string;
  imageUrl: string;
}

export interface FeaturedProjectsProps {
  projects: Project[];
}

export interface ProjectCardProps {
  project: Project;
}
