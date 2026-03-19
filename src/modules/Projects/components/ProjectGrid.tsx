import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

interface ProjectGridProps {
  projects: Project[];
  isLoading?: boolean;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="project-grid loading">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="project-card-skeleton">
            <div className="image-skeleton"></div>
            <div className="title-skeleton"></div>
            <div className="description-skeleton"></div>
            <div className="tags-skeleton">
              <div className="tag-skeleton"></div>
              <div className="tag-skeleton"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="no-projects-found">
        <h3>No projects match your filter criteria</h3>
        <p>Try adjusting your filters to see more projects.</p>
      </div>
    );
  }

  return (
    <div className="project-grid">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
