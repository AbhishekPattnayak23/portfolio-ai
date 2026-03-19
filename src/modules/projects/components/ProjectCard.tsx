import React from 'react';
import { Project } from '../types/project.types';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/assets/projects/placeholder.jpg';
  };

  return (
    <div className={styles.card} onClick={() => onClick(project)}>
      <div className={styles.imageContainer}>
        <img
          src={project.imageUrl}
          alt={project.title}
          className={styles.image}
          onError={handleImageError}
        />
        {project.featured && <span className={styles.featuredBadge}>Featured</span>}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>
          {project.description.length > 120
            ? `${project.description.substring(0, 120)}...`
            : project.description}
        </p>
        <div className={styles.technologies}>
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className={styles.tech}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className={styles.tech}>+{project.technologies.length - 3}</span>
          )}
        </div>
        <div className={styles.links}>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Demo
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
