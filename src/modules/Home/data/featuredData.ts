// Featured content data models and sample data

// Project interface
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

// Skill interface
export interface Skill {
  name: string;
  level: number; // 1-5 scale
  icon?: string;
  category: string; // e.g., "Frontend", "Backend", "DevOps"
}

// Testimonial interface
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl?: string;
}

// Achievement interface
export interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
  icon?: string;
}

// Sample featured projects data
export const featuredProjects: Project[] = [
  {
    id: "project-1",
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform built with React and Node.js. Features include user authentication, product filtering, cart functionality, and payment processing.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    imageUrl: "/assets/images/projects/ecommerce.jpg",
    projectUrl: "https://ecommerce-example.com",
    githubUrl: "https://github.com/username/ecommerce",
    featured: true,
  },
  {
    id: "project-2",
    title: "Task Management Application",
    description: "A collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features.",
    technologies: ["React", "TypeScript", "Firebase", "Material-UI", "Redux"],
    imageUrl: "/assets/images/projects/taskapp.jpg",
    projectUrl: "https://taskapp-example.com",
    githubUrl: "https://github.com/username/taskapp",
    featured: true,
  },
  {
    id: "project-3",
    title: "Weather Forecast Dashboard",
    description: "An interactive weather dashboard that provides real-time weather data and forecasts using multiple weather APIs.",
    technologies: ["React", "Chart.js", "OpenWeatherAPI", "Styled Components"],
    imageUrl: "/assets/images/projects/weather.jpg",
    projectUrl: "https://weather-example.com",
    githubUrl: "https://github.com/username/weather-app",
    featured: true,
  }
];

// Sample skills data
export const skills: Skill[] = [
  // Frontend skills
  { name: "React", level: 5, icon: "react", category: "Frontend" },
  { name: "TypeScript", level: 4, icon: "typescript", category: "Frontend" },
  { name: "JavaScript", level: 5, icon: "javascript", category: "Frontend" },
  { name: "HTML/CSS", level: 5, icon: "html", category: "Frontend" },
  { name: "Redux", level: 4, icon: "redux", category: "Frontend" },
  { name: "Next.js", level: 4, icon: "nextjs", category: "Frontend" },

  // Backend skills
  { name: "Node.js", level: 4, icon: "nodejs", category: "Backend" },
  { name: "Express", level: 4, icon: "express", category: "Backend" },
  { name: "MongoDB", level: 3, icon: "mongodb", category: "Backend" },
  { name: "GraphQL", level: 3, icon: "graphql", category: "Backend" },

  // DevOps skills
  { name: "Docker", level: 3, icon: "docker", category: "DevOps" },
  { name: "CI/CD", level: 3, icon: "cicd", category: "DevOps" },
  { name: "AWS", level: 3, icon: "aws", category: "DevOps" },

  // Tools & Others
  { name: "Git", level: 5, icon: "git", category: "Tools" },
  { name: "Jest", level: 4, icon: "jest", category: "Tools" },
  { name: "Webpack", level: 3, icon: "webpack", category: "Tools" }
];

// Sample testimonials data
export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "TechCorp Inc.",
    content: "Working with this developer was a fantastic experience. Their technical skills are top-notch, and they delivered our project ahead of schedule with exceptional quality.",
    avatarUrl: "/assets/images/testimonials/sarah.jpg"
  },
  {
    id: "testimonial-2",
    name: "Michael Chen",
    role: "CTO",
    company: "StartupBoost",
    content: "An exceptional developer who consistently delivers clean, maintainable code. Their attention to detail and problem-solving abilities have been invaluable to our projects.",
    avatarUrl: "/assets/images/testimonials/michael.jpg"
  },
  {
    id: "testimonial-3",
    name: "Emily Roberts",
    role: "Design Lead",
    company: "CreativeWorks",
    content: "I've rarely seen a developer with such a good eye for design implementation. They took our designs and brought them to life with perfect precision and added thoughtful interactions.",
    avatarUrl: "/assets/images/testimonials/emily.jpg"
  }
];

// Sample achievements data
export const achievements: Achievement[] = [
  {
    id: "achievement-1",
    title: "Web Development Certification",
    date: "2023",
    description: "Advanced certification in modern web development frameworks and best practices",
    icon: "certificate"
  },
  {
    id: "achievement-2",
    title: "Open Source Contributor",
    date: "2022-Present",
    description: "Active contributor to several popular open-source React libraries",
    icon: "code-branch"
  },
  {
    id: "achievement-3",
    title: "Tech Conference Speaker",
    date: "2022",
    description: "Speaker at ReactConf on advanced component patterns",
    icon: "microphone"
  }
];
