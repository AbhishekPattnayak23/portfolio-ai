import React from 'react';
import { Link } from 'react-router-dom';
import { FeaturedProjectsProps, ProjectCardProps } from '../types';
import '../styles.css';

/**
 * Project Card component to display individual project information
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
        loading="lazy"
        onError={(e) => {
          // Fallback if image fails to load
          const target = e.target as HTMLImageElement;
          target.src = '/assets/images/project-placeholder.jpg';
        }}
      />
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="project-technology">
              {tech}
            </span>
          ))}
        </div>

        <Link to={project.link} className="project-link">
          View Project ->
        </Link>
      </div>
    </div>
  );
};

/**
 * Featured Projects section to showcase highlighted work
 * Displays projects in a responsive grid layout
 */
const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  // Handle case where no featured projects are available
  if (!projects || projects.length === 0) {
    return (
      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Projects are being added soon. Check back later!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Explore some of my recent work. Each project demonstrates different skills and technologies.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/projects" className="btn btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
