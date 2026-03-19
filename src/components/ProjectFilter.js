import React, { useState } from 'react';
import './ProjectFilter.css';

const ProjectFilter = ({ technologies, projectTypes, onFilterChange }) => {
  const [selectedTech, setSelectedTech] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTechChange = (tech) => {
    const newSelection = selectedTech.includes(tech)
      ? selectedTech.filter(t => t !== tech)
      : [...selectedTech, tech];

    setSelectedTech(newSelection);
    applyFilters(newSelection, selectedTypes, searchQuery);
  };

  const handleTypeChange = (type) => {
    const newSelection = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];

    setSelectedTypes(newSelection);
    applyFilters(selectedTech, newSelection, searchQuery);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    applyFilters(selectedTech, selectedTypes, query);
  };

  const applyFilters = (techs, types, query) => {
    onFilterChange({
      technologies: techs,
      projectTypes: types,
      searchQuery: query
    });
  };

  const clearFilters = () => {
    setSelectedTech([]);
    setSelectedTypes([]);
    setSearchQuery('');
    onFilterChange({
      technologies: [],
      projectTypes: [],
      searchQuery: ''
    });
  };

  return (
    <div className="project-filter">
      <div className="filter-section">
        <h3>Search</h3>
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      <div className="filter-section">
        <h3>Technologies</h3>
        <div className="filter-options">
          {technologies.map((tech) => (
            <label key={tech} className="filter-option">
              <input
                type="checkbox"
                checked={selectedTech.includes(tech)}
                onChange={() => handleTechChange(tech)}
              />
              <span>{tech}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3>Project Types</h3>
        <div className="filter-options">
          {projectTypes.map((type) => (
            <label key={type} className="filter-option">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => handleTypeChange(type)}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>

      <button className="clear-filters-btn" onClick={clearFilters}>
        Clear All Filters
      </button>
    </div>
  );
};

export default ProjectFilter;
