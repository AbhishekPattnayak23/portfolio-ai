import { useState, useMemo } from 'react';
import { Project, ProjectFilters, SortOption } from '../types/project.types';

export const useProjectFilters = (projects: Project[]) => {
  const [filters, setFilters] = useState<ProjectFilters>({
    search: '',
    categories: [],
    tags: [],
    sort: 'newest',
  });

  // Extract all unique tags from projects
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    projects.forEach(project => {
      project.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
  }, [projects]);

  // Filter and sort projects based on current filters
  const filteredProjects = useMemo(() => {
    let result = [...projects];

    // Filter by search term
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        project =>
          project.title.toLowerCase().includes(searchLower) ||
          project.description.toLowerCase().includes(searchLower)
      );
    }

    // Filter by categories
    if (filters.categories.length > 0) {
      result = result.filter(project => filters.categories.includes(project.category));
    }

    // Filter by tags
    if (filters.tags.length > 0) {
      result = result.filter(project =>
        project.tags.some(tag => filters.tags.includes(tag))
      );
    }

    // Sort projects
    switch (filters.sort) {
      case 'newest':
        return result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      case 'oldest':
        return result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      case 'a-z':
        return result.sort((a, b) => a.title.localeCompare(b.title));
      case 'z-a':
        return result.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return result;
    }
  }, [projects, filters]);

  // Update search term
  const setSearchTerm = (search: string) => {
    setFilters(prev => ({ ...prev, search }));
  };

  // Toggle category filter
  const toggleCategory = (category: 'web' | 'mobile' | 'ai' | 'other') => {
    setFilters(prev => {
      if (prev.categories.includes(category)) {
        return { ...prev, categories: prev.categories.filter(c => c !== category) };
      } else {
        return { ...prev, categories: [...prev.categories, category] };
      }
    });
  };

  // Toggle tag filter
  const toggleTag = (tag: string) => {
    setFilters(prev => {
      if (prev.tags.includes(tag)) {
        return { ...prev, tags: prev.tags.filter(t => t !== tag) };
      } else {
        return { ...prev, tags: [...prev.tags, tag] };
      }
    });
  };

  // Set sort option
  const setSortOption = (sort: SortOption) => {
    setFilters(prev => ({ ...prev, sort }));
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      search: '',
      categories: [],
      tags: [],
      sort: 'newest',
    });
  };

  return {
    filters,
    filteredProjects,
    allTags,
    setSearchTerm,
    toggleCategory,
    toggleTag,
    setSortOption,
    resetFilters,
  };
};
