/**
 * Featured projects data model
 */
const featuredProjects = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'A full-stack web application built with React and Node.js',
    image: '/images/project-alpha.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/username/project-alpha',
    liveDemo: 'https://project-alpha-demo.com',
    featured: true
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'Mobile application developed with React Native',
    image: '/images/project-beta.jpg',
    technologies: ['React Native', 'Firebase'],
    github: 'https://github.com/username/project-beta',
    liveDemo: 'https://project-beta-demo.com',
    featured: true
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'Data visualization dashboard',
    image: '/images/project-gamma.jpg',
    technologies: ['D3.js', 'Vue.js', 'Python'],
    github: 'https://github.com/username/project-gamma',
    liveDemo: 'https://project-gamma-demo.com',
    featured: true
  }
];

export default featuredProjects;
