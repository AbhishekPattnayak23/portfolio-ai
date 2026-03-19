import ProjectService from '../../src/services/ProjectService';
import Project from '../../src/models/Project';

describe('ProjectService', () => {
  // Sample test data
  const sampleProjects = [
    new Project('1', 'Project 1', 'Description 1', ['React', 'TensorFlow'], 'Text Generation', '', '', '', new Date()),
    new Project('2', 'Project 2', 'Description 2', ['PyTorch', 'Python'], 'Image Generation', '', '', '', new Date()),
    new Project('3', 'Project 3', 'Description 3', ['TensorFlow', 'Python'], 'Text Generation', '', '', '', new Date()),
  ];

  describe('getUniqueTechnologies', () => {
    it('should return all unique technologies from projects', () => {
      const uniqueTech = ProjectService.getUniqueTechnologies(sampleProjects);
      expect(uniqueTech).toEqual(['PyTorch', 'Python', 'React', 'TensorFlow']);
    });
  });

  describe('getUniqueProjectTypes', () => {
    it('should return all unique project types', () => {
      const uniqueTypes = ProjectService.getUniqueProjectTypes(sampleProjects);
      expect(uniqueTypes).toEqual(['Image Generation', 'Text Generation']);
    });
  });

  describe('filterProjects', () => {
    it('should filter projects by search query', () => {
      const filtered = ProjectService.filterProjects(sampleProjects, { searchQuery: 'Project 1' });
      expect(filtered.length).toBe(1);
      expect(filtered[0].id).toBe('1');
    });

    it('should filter projects by technology', () => {
      const filtered = ProjectService.filterProjects(sampleProjects, { technologies: ['React'] });
      expect(filtered.length).toBe(1);
      expect(filtered[0].id).toBe('1');
    });

    it('should filter projects by project type', () => {
      const filtered = ProjectService.filterProjects(sampleProjects, { projectTypes: ['Image Generation'] });
      expect(filtered.length).toBe(1);
      expect(filtered[0].id).toBe('2');
    });

    it('should combine multiple filters', () => {
      const filtered = ProjectService.filterProjects(sampleProjects, {
        searchQuery: 'Description',
        technologies: ['TensorFlow'],
        projectTypes: ['Text Generation']
      });
      expect(filtered.length).toBe(2);
      expect(filtered[0].id).toBe('1');
      expect(filtered[1].id).toBe('3');
    });
  });
});
