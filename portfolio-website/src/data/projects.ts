import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'project1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and checkout process.',
    shortDescription: 'Modern e-commerce solution built with React and Node.js',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    images: [
      { src: '/assets/images/project1-1.jpg', alt: 'E-commerce homepage' },
      { src: '/assets/images/project1-2.jpg', alt: 'Product detail page' }
    ],
    featured: true,
    githubUrl: 'https://github.com/username/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.com',
    category: ['Web Development', 'Full Stack'],
    year: 2023
  },
  {
    id: 'project2',
    title: 'Task Management App',
    description: 'A Kanban-style task management application with drag-and-drop functionality and team collaboration features.',
    shortDescription: 'Collaborative task management with real-time updates',
    technologies: ['React', 'TypeScript', 'Firebase', 'Styled Components'],
    images: [
      { src: '/assets/images/project2-1.jpg', alt: 'Task board view' }
    ],
    featured: true,
    githubUrl: 'https://github.com/username/task-management',
    liveUrl: 'https://task-app-demo.com',
    category: ['Web Development', 'React'],
    year: 2022
  }
];
