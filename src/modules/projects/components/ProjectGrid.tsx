import React, { useState } from 'react';
import { Project } from '../types/project.types';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';
import styles from './ProjectGrid.module.css';

interface ProjectGridProps {
  projects: Project[];
  loading?: boolean;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, loading = false }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Loading projects...</p>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h3>No projects found</h3>
        <p>Try adjusting your filters or search criteria.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.viewToggle}>
        <button
          className={`${styles.toggleButton} ${viewMode === 'grid' ? styles.active : ''}`}
          onClick={() => setViewMode('grid')}
        >
          Grid View
        </button>
        <button
          className={`${styles.toggleButton} ${viewMode === 'list' ? styles.active : ''}`}
          onClick={() => setViewMode('list')}
        >
          List View
        </button>
      </div>

      <div className={`${styles.projectsGrid} ${viewMode === 'list' ? styles.listView : ''}`}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectItem}>
            <ProjectCard project={project} onClick={setSelectedProject} />
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          relatedProjects={projects
            .filter(p => p.id !== selectedProject.id &&
              (p.category === selectedProject.category ||
               p.tags.some(tag => selectedProject.tags.includes(tag))))
            .slice(0, 3)}
        />
      )}
    </div>
  );
};

export default ProjectGrid;
