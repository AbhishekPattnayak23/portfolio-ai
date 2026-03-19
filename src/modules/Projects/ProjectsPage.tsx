import React, { useState, useEffect } from 'react';
import { projects } from '../../data/projects';
import { useProjectFiltering } from './hooks/useProjectFiltering';
import ProjectFilters from './components/ProjectFilters';
import ProjectGrid from './components/ProjectGrid';
import Pagination from './components/Pagination';

const ProjectsPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const {
    filteredProjects,
    filters,
    setFilters,
    activePage,
    setActivePage,
    totalPages,
    clearFilters,
    hasActiveFilters
  } = useProjectFiltering({ projects, itemsPerPage: 6 });

  // Simulate loading data
  useEffect(() => {
    const loadProjects = async () => {
      try {
        // Simulate API call with delay
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 800));
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError('Failed to load projects. Please try again later.');
      }
    };

    loadProjects();
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [activePage]);

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>GenAI Projects</h1>
        <p>Explore my portfolio of GenAI projects, including web applications, machine learning models, and more.</p>
      </div>

      <div className="projects-container">
        <aside className="filters-sidebar">
          <ProjectFilters
            filters={filters}
            onFilterChange={setFilters}
            onClearFilters={clearFilters}
            hasActiveFilters={hasActiveFilters}
          />
        </aside>

        <main className="projects-main">
          {error ? (
            <div className="error-message">
              <p>{error}</p>
              <button onClick={() => window.location.reload()}>
                Retry
              </button>
            </div>
          ) : (
            <>
              <ProjectGrid
                projects={filteredProjects}
                isLoading={isLoading}
              />

              <Pagination
                currentPage={activePage}
                totalPages={totalPages}
                onPageChange={setActivePage}
              />
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProjectsPage;
