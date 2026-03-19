import { Project } from '../modules/home/types';

// Sample project data for the portfolio
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with product catalog, user authentication, cart management, and payment processing.',
    image: '/assets/images/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    link: '/projects/e-commerce-platform',
    featured: true
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, task assignment, and progress tracking features.',
    image: '/assets/images/project2.jpg',
    technologies: ['React', 'TypeScript', 'Firebase', 'Material UI'],
    link: '/projects/task-management-app',
    featured: true
  },
  {
    id: 'project-3',
    title: 'Weather Dashboard',
    description: 'An interactive weather dashboard that displays current conditions and forecasts based on user location or search queries.',
    image: '/assets/images/project3.jpg',
    technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
    link: '/projects/weather-dashboard',
    featured: true
  },
  {
    id: 'project-4',
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio website built with React and TypeScript showcasing my skills and projects.',
    image: '/assets/images/project4.jpg',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    link: '/projects/portfolio-website',
    featured: true
  },
  {
    id: 'project-5',
    title: 'Blog Platform',
    description: 'A content management system for creating and managing blog posts with rich text editing and media uploads.',
    image: '/assets/images/project5.jpg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'GraphQL'],
    link: '/projects/blog-platform',
    featured: false
  }
];

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

// Helper function to get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
