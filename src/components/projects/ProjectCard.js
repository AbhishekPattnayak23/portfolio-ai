import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-github">
            GitHub
          </a>
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-demo">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string.isRequired,
    liveDemo: PropTypes.string.isRequired,
    featured: PropTypes.bool
  }).isRequired
};

export default ProjectCard;
