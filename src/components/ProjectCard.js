import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={project.imageUrl} alt={project.name} />
      </div>
      <div className="project-card-content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tag tech-tag">{tech}</span>
          ))}
          <span className="tag type-tag">{project.projectType}</span>
        </div>
        <div className="project-links">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">Repository</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
