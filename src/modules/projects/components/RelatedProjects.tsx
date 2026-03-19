import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types/project.types';

/**
 * RelatedProjects component props interface
 */
interface RelatedProjectsProps {
  projects: Project[];
  maxProjects?: number;
}

/**
 * Related Projects Component
 *
 * Displays a list of related projects based on similar technologies or categories
 * Links to other project detail pages
 */
const RelatedProjects: React.FC<RelatedProjectsProps> = ({
  projects,
  maxProjects = 3
}) => {
  // If no related projects, don't render the component
  if (!projects || projects.length === 0) {
    return null;
  }

  // Limit the number of projects shown
  const displayedProjects = projects.slice(0, maxProjects);

  return (
    <section className="related-projects">
      <h2>Related Projects</h2>
      <p className="section-description">
        Explore more projects that use similar technologies or concepts
      </p>

      <div className="related-projects-grid">
        {displayedProjects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.slug}`}
            className="related-project-card"
          >
            <div className="related-project-thumbnail">
              <img
                src={project.thumbnail}
                alt={project.title}
                loading="lazy"
              />
            </div>

            <div className="related-project-info">
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>

              <div className="related-project-technologies">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech.name}
                  </span>
                ))}

                {project.technologies.length > 3 && (
                  <span className="tech-tag more">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>

            <div className="related-project-link">
              <span className="link-text">View Project</span>
              <span className="link-arrow">-></span>
            </div>
          </Link>
        ))}
      </div>

      {/* Link to all projects if there are more related projects than shown */}
      {projects.length > maxProjects && (
        <div className="related-projects-more">
          <Link to="/projects" className="btn-text">
            View All Projects
          </Link>
        </div>
      )}
    </section>
  );
};

export default RelatedProjects;
