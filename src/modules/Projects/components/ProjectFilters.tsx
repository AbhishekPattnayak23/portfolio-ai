import React from 'react';
import { ProjectFilterState } from '../types';
import { getAllTechnologies, getAllProjectTypes } from '../../../data/projects';

interface ProjectFiltersProps {
  filters: ProjectFilterState;
  onFilterChange: (filters: ProjectFilterState) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
  hasActiveFilters
}) => {
  const technologies = getAllTechnologies();
  const projectTypes = getAllProjectTypes();

  const handleTechChange = (tech: string) => {
    const updatedTechs = filters.technologies.includes(tech)
      ? filters.technologies.filter(t => t !== tech)
      : [...filters.technologies, tech];

    onFilterChange({
      ...filters,
      technologies: updatedTechs
    });
  };

  const handleProjectTypeChange = (type: string | null) => {
    onFilterChange({
      ...filters,
      projectType: filters.projectType === type ? null : type
    });
  };

  return (
    <div className="project-filters">
      <div className="filter-header">
        <h3>Filter Projects</h3>
        {hasActiveFilters && (
          <button
            className="clear-filters-button"
            onClick={onClearFilters}
          >
            Clear Filters
          </button>
        )}
      </div>

      <div className="filter-section">
        <h4>Technologies</h4>
        <div className="technology-filters">
          {technologies.map(tech => (
            <div key={tech} className="filter-option">
              <label className={filters.technologies.includes(tech) ? 'selected' : ''}>
                <input
                  type="checkbox"
                  checked={filters.technologies.includes(tech)}
                  onChange={() => handleTechChange(tech)}
                />
                {tech}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Project Type</h4>
        <div className="project-type-filters">
          {projectTypes.map(type => (
            <div key={type} className="filter-option">
              <label className={filters.projectType === type ? 'selected' : ''}>
                <input
                  type="radio"
                  name="projectType"
                  checked={filters.projectType === type}
                  onChange={() => handleProjectTypeChange(type)}
                />
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectFilters;
