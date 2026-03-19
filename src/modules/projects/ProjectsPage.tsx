import React, { useState, useEffect } from 'react';
import { projects } from './data/projects';
import { useProjectFilters } from './hooks/useProjectFilters';
import ProjectFilters from './components/ProjectFilters';
import ProjectGrid from './components/ProjectGrid';
import styles from './ProjectsPage.module.css';

const ProjectsPage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Initialize project filters
  const {
    filters,
    filteredProjects,
    allTags,
    setSearchTerm,
    toggleCategory,
    toggleTag,
    setSortOption,
    resetFilters,
  } = useProjectFilters(projects);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.projectsPage}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Projects</h1>
        <p className={styles.subtitle}>
          Browse through my portfolio of GenAI and software development projects.
          Use the filters below to find specific technologies or project types.
        </p>
      </div>

      <ProjectFilters
        filters={filters}
        allTags={allTags}
        onSearchChange={setSearchTerm}
        onCategoryToggle={toggleCategory}
        onTagToggle={toggleTag}
        onSortChange={setSortOption}
        onReset={resetFilters}
      />

      <ProjectGrid projects={filteredProjects} loading={loading} />
    </div>
  );
};

export default ProjectsPage;
