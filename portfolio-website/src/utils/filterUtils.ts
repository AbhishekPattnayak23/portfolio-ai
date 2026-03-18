import { Project } from '../types';

export const filterProjectsByCategory = (projects: Project[], category: string): Project[] => {
  if (category === 'all') {
    return projects;
  }
  return projects.filter(project => project.category.includes(category));
};

export const filterProjectsBySearch = (projects: Project[], searchTerm: string): Project[] => {
  const term = searchTerm.toLowerCase().trim();
  if (!term) {
    return projects;
  }

  return projects.filter(
    project =>
      project.title.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.technologies.some(tech => tech.toLowerCase().includes(term))
  );
};

export const getUniqueCategories = (projects: Project[]): string[] => {
  const categories = projects.flatMap(project => project.category);
  return ['all', ...new Set(categories)];
};
