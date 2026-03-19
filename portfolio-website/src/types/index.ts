// Image type definition
export interface ImageType {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// Project data structure
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

// Skill data structure
export interface Skill {
  id: string;
  name: string;
  icon: string;
  category: string;
  proficiency: number; // 1-5
}

// Experience data structure
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

// Bio data structure
export interface Bio {
  name: string;
  title: string;
  summary: string;
  description: string[];
  image: string;
  resumeUrl: string;
}

// Props for UI components
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  ariaLabel?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  elevation?: 'low' | 'medium' | 'high';
}

export interface SectionProps {
  children: React.ReactNode;
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  backgroundColor?: string;
  fullWidth?: boolean;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'fluid';
  as?: React.ElementType;
}

export interface NavLinkType {
  text: string;
  href: string;
  external?: boolean;
}

export interface NavBarProps {
  links: NavLinkType[];
}
