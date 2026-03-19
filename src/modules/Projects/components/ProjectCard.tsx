import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="project-image"
          loading="lazy"
        />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map(tech => (
            <span key={tech} className="project-tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-type-label">
          <span>{project.projectType}</span>
        </div>

        <div className="project-links">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link demo-link"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link github-link"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
