import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectGrid.css';

const ProjectGrid = ({ projects }) => {
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <h3>No projects match your filters</h3>
        <p>Try adjusting your filter criteria to see more results.</p>
      </div>
    );
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <div key={project.id} className="grid-item">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
