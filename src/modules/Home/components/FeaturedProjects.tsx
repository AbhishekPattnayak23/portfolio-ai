import React from 'react';
import { Project } from '../data/featuredData';

interface FeaturedProjectsProps {
  projects: Project[];
  isLoading: boolean;
  error: string | null;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects,
  isLoading,
  error
}) => {
  if (isLoading) {
    return (
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-skeleton">
          {[1, 2, 3].map((item) => (
            <div key={item} className="project-card-skeleton">
              <div className="image-skeleton"></div>
              <div className="content-skeleton">
                <div className="title-skeleton"></div>
                <div className="description-skeleton"></div>
                <div className="tags-skeleton">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="error-container">
          <p>Sorry, we couldn't load the projects. Please try again later.</p>
          <p className="error-message">{error}</p>
        </div>
      </section>
    );
  }

  if (!projects.length) {
    return (
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <p className="no-projects-message">No featured projects available at the moment.</p>
      </section>
    );
  }

  return (
    <section className="featured-projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img
                src={project.imageUrl}
                alt={project.title}
                loading="lazy"
              />
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
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live site`}
                  >
                    View Project
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} code on GitHub`}
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="view-all-container">
        <a href="/projects" className="view-all-link">View All Projects</a>
      </div>
    </section>
  );
};

export default FeaturedProjects;
