import React, { useState, useEffect } from 'react';
import ProjectService from '../services/ProjectService';
import ProjectFilter from '../components/ProjectFilter';
import ProjectGrid from '../components/ProjectGrid';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [technologies, setTechnologies] = useState([]);
  const [projectTypes, setProjectTypes] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const fetchedProjects = await ProjectService.fetchProjects();
        setProjects(fetchedProjects);
        setFilteredProjects(fetchedProjects);

        // Extract filter options
        setTechnologies(ProjectService.getUniqueTechnologies(fetchedProjects));
        setProjectTypes(ProjectService.getUniqueProjectTypes(fetchedProjects));

        setLoading(false);
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleFilterChange = (filters) => {
    const filtered = ProjectService.filterProjects(projects, filters);
    setFilteredProjects(filtered);
  };

  if (loading) {
    return <div className="loading">Loading projects...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="projects-page">
      <div className="page-header">
        <h1>GenAI Projects</h1>
        <p>Browse our collection of generative AI projects and filter by technology or project type.</p>
      </div>

      <div className="projects-container">
        <div className="filter-sidebar">
          <ProjectFilter
            technologies={technologies}
            projectTypes={projectTypes}
            onFilterChange={handleFilterChange}
          />
        </div>

        <div className="projects-content">
          <div className="results-header">
            <p>Showing {filteredProjects.length} of {projects.length} projects</p>
          </div>

          <ProjectGrid projects={filteredProjects} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
