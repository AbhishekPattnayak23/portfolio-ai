import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Project } from '../types/project.types';
import { getProjectBySlug, getRelatedProjects } from '../data/projects.data';
import ProjectGallery from './ProjectGallery';
import RelatedProjects from './RelatedProjects';

/**
 * ProjectDetail component props interface
 */
interface ProjectDetailProps {
  // Optional project prop to allow for direct passing of project data
  project?: Project;
}

/**
 * Project Detail Component
 *
 * Displays detailed information about a specific project including:
 * - Project title and description
 * - Image gallery
 * - Technologies used
 * - Challenges and solutions
 * - Outcomes and results
 * - Related projects
 */
const ProjectDetail: React.FC<ProjectDetailProps> = ({ project: propProject }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(propProject || null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Skip fetching if project was passed as prop
    if (propProject) {
      setProject(propProject);
      setLoading(false);

      // Still fetch related projects
      const related = getRelatedProjects(propProject);
      setRelatedProjects(related);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Get project by slug from our data
      const fetchedProject = slug ? getProjectBySlug(slug) : null;

      if (!fetchedProject) {
        setError('Project not found');
        setProject(null);
      } else {
        setProject(fetchedProject);

        // Get related projects
        const related = getRelatedProjects(fetchedProject);
        setRelatedProjects(related);
      }
    } catch (err) {
      setError('Error fetching project data');
      console.error('Error fetching project:', err);
    } finally {
      setLoading(false);
    }
  }, [slug, propProject]);

  // Handle loading state
  if (loading) {
    return (
      <div className="project-detail-loading">
        <div className="loading-spinner"></div>
        <p>Loading project details...</p>
      </div>
    );
  }

  // Handle error state
  if (error || !project) {
    return (
      <div className="project-detail-error">
        <h2>Error: {error || 'Project not found'}</h2>
        <p>We couldn't find the project you're looking for.</p>
        <button
          className="btn-primary"
          onClick={() => navigate('/projects')}
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="project-detail">
      {/* Project Header */}
      <header className="project-header">
        <h1 className="project-title">{project.title}</h1>
        <div className="project-meta">
          <span className="project-date">{project.date}</span>
          <div className="project-categories">
            {project.category.map((cat, index) => (
              <span key={index} className="category-tag">{cat}</span>
            ))}
          </div>
        </div>
      </header>

      {/* Project Gallery */}
      <ProjectGallery images={project.images} />

      {/* Project Description */}
      <section className="project-description">
        <h2>Project Overview</h2>
        <p>{project.fullDescription}</p>
      </section>

      {/* Technologies Used */}
      <section className="project-technologies">
        <h2>Technologies Used</h2>
        <div className="tech-grid">
          {project.technologies.map((tech, index) => (
            <div key={index} className={`tech-item tech-${tech.category}`}>
              {tech.icon && <span className="tech-icon">{tech.icon}</span>}
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Project Details - Challenges & Solutions */}
      <div className="project-details-grid">
        <section className="project-challenges">
          <h2>Challenges</h2>
          <ul>
            {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </section>

        <section className="project-solutions">
          <h2>Solutions</h2>
          <ul>
            {project.solutions.map((solution, index) => (
              <li key={index}>{solution}</li>
            ))}
          </ul>
        </section>
      </div>

      {/* Project Outcomes */}
      <section className="project-outcomes">
        <h2>Outcomes</h2>
        <div className="outcomes-grid">
          {project.outcomes.map((outcome, index) => (
            <div key={index} className="outcome-card">
              <span className="outcome-number">{index + 1}</span>
              <p>{outcome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Project Links */}
      {(project.githubUrl || project.liveUrl) && (
        <section className="project-links">
          <h2>Project Links</h2>
          <div className="links-container">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span>View on GitHub</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>View Live Project</span>
              </a>
            )}
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <RelatedProjects projects={relatedProjects} />
      )}
    </div>
  );
};

export default ProjectDetail;
