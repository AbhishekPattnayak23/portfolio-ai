/**
 * Types for the About module
 */

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  graduationDate: string;
}

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  category: "Frontend" | "Backend" | "Design" | "DevOps" | "Soft Skills";
}

export interface AboutPageData {
  name: string;
  title: string;
  summary: string;
  experience: ExperienceItem[];
  education: Education[];
  skills: Skill[];
  interests: string[];
}

export type ExperienceFilter = "All" | "Frontend" | "Backend" | "DevOps" | "Design";
