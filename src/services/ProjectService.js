import Project from '../models/Project';

/**
 * Service for fetching and filtering GenAI projects
 */
class ProjectService {
  /**
   * Fetch all projects from the API
   * @returns {Promise<Project[]>} Array of project objects
   */
  static async fetchProjects() {
    try {
      const response = await fetch('/api/projects');
      const data = await response.json();

      return data.projects.map(project => new Project(
        project.id,
        project.name,
        project.description,
        project.technologies,
        project.projectType,
        project.imageUrl,
        project.demoUrl,
        project.repoUrl,
        new Date(project.createdAt)
      ));
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  }

  /**
   * Get all unique technologies across projects
   * @param {Project[]} projects - Array of project objects
   * @returns {string[]} Array of unique technologies
   */
  static getUniqueTechnologies(projects) {
    const techSet = new Set();

    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });

    return Array.from(techSet).sort();
  }

  /**
   * Get all unique project types
   * @param {Project[]} projects - Array of project objects
   * @returns {string[]} Array of unique project types
   */
  static getUniqueProjectTypes(projects) {
    const typeSet = new Set(projects.map(project => project.projectType));
    return Array.from(typeSet).sort();
  }

  /**
   * Filter projects based on search criteria
   * @param {Project[]} projects - All projects
   * @param {Object} filters - Filter criteria
   * @returns {Project[]} Filtered projects
   */
  static filterProjects(projects, filters) {
    return projects.filter(project => {
      // Filter by search query
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const matchesName = project.name.toLowerCase().includes(query);
        const matchesDesc = project.description.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc) return false;
      }

      // Filter by technologies
      if (filters.technologies && filters.technologies.length > 0) {
        const hasMatchingTech = project.technologies.some(tech =>
          filters.technologies.includes(tech)
        );
        if (!hasMatchingTech) return false;
      }

      // Filter by project type
      if (filters.projectTypes && filters.projectTypes.length > 0) {
        if (!filters.projectTypes.includes(project.projectType)) return false;
      }

      return true;
    });
  }
}

export default ProjectService;
