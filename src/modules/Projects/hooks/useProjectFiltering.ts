import { useState, useMemo } from 'react';
import { Project, ProjectFilterState } from '../types';

interface UseProjectFilteringProps {
  projects: Project[];
  itemsPerPage?: number;
}

interface UseProjectFilteringResult {
  filteredProjects: Project[];
  filters: ProjectFilterState;
  setFilters: (filters: ProjectFilterState) => void;
  activePage: number;
  setActivePage: (page: number) => void;
  totalPages: number;
  clearFilters: () => void;
  hasActiveFilters: boolean;
}

export const useProjectFiltering = ({
  projects,
  itemsPerPage = 6
}: UseProjectFilteringProps): UseProjectFilteringResult => {
  const [filters, setFilters] = useState<ProjectFilterState>({
    technologies: [],
    projectType: null,
  });

  const [activePage, setActivePage] = useState<number>(1);

  // Apply filters to projects
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // Filter by technologies (if any selected)
      const techMatch = filters.technologies.length === 0 ||
        filters.technologies.some(tech => project.technologies.includes(tech));

      // Filter by project type (if selected)
      const typeMatch = !filters.projectType ||
        project.projectType === filters.projectType;

      return techMatch && typeMatch;
    });
  }, [projects, filters]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  // Reset to page 1 when filters change
  useMemo(() => {
    setActivePage(1);
  }, [filters]);

  // Check if any filters are active
  const hasActiveFilters = filters.technologies.length > 0 || filters.projectType !== null;

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      technologies: [],
      projectType: null,
    });
    setActivePage(1);
  };

  return {
    filteredProjects: filteredProjects.slice(
      (activePage - 1) * itemsPerPage,
      activePage * itemsPerPage
    ),
    filters,
    setFilters,
    activePage,
    setActivePage,
    totalPages,
    clearFilters,
    hasActiveFilters,
  };
};
