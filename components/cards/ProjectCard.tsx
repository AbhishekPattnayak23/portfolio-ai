import React from 'react';
import Card from './Card';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import Logger from '../../utils/logger';

const logger = new Logger('ProjectCard');

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  tags?: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export interface ProjectCardProps {
  project: Project;
  className?: string;
  onCardClick?: (project: Project) => void;
  'data-testid'?: string;
}

/**
 * ProjectCard displays information about a project with image, description, and links
 */
const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className = '',
  onCardClick,
  'data-testid': dataTestId = 'project-card',
}) => {
  logger.debug('Rendering ProjectCard component', { projectId: project.id });

  // Validate project data
  if (!project) {
    logger.error('ProjectCard received invalid project data', { project });
    return <div className="error-card">Invalid project data</div>;
  }

  const handleCardClick = () => {
    logger.debug('Project card clicked', { projectId: project.id });
    if (onCardClick) {
      onCardClick(project);
    }
  };

  return (
    <Card
      className={`project-card ${className}`}
      onClick={onCardClick ? handleCardClick : undefined}
      data-testid={dataTestId}
      elevation="medium"
    >
      {project.imageUrl && (
        <div className="card-img-container">
          <img
            src={project.imageUrl}
            alt={`${project.title} preview`}
            className="card-img-top"
            onError={(e) => {
              logger.error('Failed to load project image', { projectId: project.id });
              e.currentTarget.src = '/placeholder-image.jpg';
            }}
          />
        </div>
      )}

      <CardHeader title={project.title} />

      <CardBody>
        <p className="card-text">{project.description}</p>

        {project.tags && project.tags.length > 0 && (
          <div className="project-tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="badge bg-light text-dark me-1">
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardBody>

      {(project.demoUrl || project.repoUrl) && (
        <CardFooter className="d-flex justify-content-between">
          {project.demoUrl && (
            <a href={project.demoUrl} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} className="btn btn-outline-secondary btn-sm" target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;
