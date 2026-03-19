import React, { useEffect } from 'react';
import { Project } from '../types/project.types';
import styles from './ProjectDetail.module.css';
import ProjectCard from './ProjectCard';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
  relatedProjects: Project[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  onClose,
  relatedProjects
}) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Format date to readable format
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  // Handle image error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/assets/projects/placeholder.jpg';
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}></button>

        <div className={styles.header}>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.date}>Completed on {formatDate(project.date)}</p>
        </div>

        <div className={styles.imageSection}>
          <img
            src={project.imageUrl}
            alt={project.title}
            className={styles.mainImage}
            onError={handleImageError}
          />
        </div>

        <div className={styles.details}>
          <div className={styles.description}>
            <h3>Project Overview</h3>
            <p>{project.description}</p>
          </div>

          <div className={styles.technologies}>
            <h3>Technologies Used</h3>
            <div className={styles.techList}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.techItem}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.tags}>
            <h3>Tags</h3>
            <div className={styles.tagList}>
              {project.tags.map((tag, index) => (
                <span key={index} className={styles.tagItem}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.links}>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                View Live Demo
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                View Source Code
              </a>
            )}
          </div>
        </div>

        {relatedProjects.length > 0 && (
          <div className={styles.relatedProjects}>
            <h3>Related Projects</h3>
            <div className={styles.relatedGrid}>
              {relatedProjects.map((relatedProject) => (
                <div key={relatedProject.id} className={styles.relatedItem}>
                  <ProjectCard
                    project={relatedProject}
                    onClick={(project) => {
                      onClose();
                      setTimeout(() => {
                        // This delay ensures the current modal closes before opening the new one
                        // You might need to implement a better way to handle this in a real app
                        const detailEvent = new CustomEvent('openProjectDetail', { detail: project });
                        window.dispatchEvent(detailEvent);
                      }, 100);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
