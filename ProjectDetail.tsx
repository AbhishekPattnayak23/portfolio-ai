import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Project } from './projects';
import { sanitizeUrlParam, isValidProjectId } from './helpers';
import ProjectHeader from './ProjectHeader';
import ProjectContent from './ProjectContent';
import ProjectGallery from './ProjectGallery';
import Section from './Section';
import Container from './Container';

// Import project data
import { projects } from './projects';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Validate project ID format
    const sanitizedId = sanitizeUrlParam(projectId);

    if (!isValidProjectId(sanitizedId)) {
      setError('Invalid project ID');
      setLoading(false);
      return;
    }

    // Find project by ID
    const foundProject = projects.find(p => p.id === sanitizedId);

    if (foundProject) {
      setProject(foundProject);
      // Update page title for SEO
      document.title = `${foundProject.title} | Portfolio`;
    } else {
      setError('Project not found');
    }

    setLoading(false);
  }, [projectId]);

  // Handle back navigation
  const handleBack = () => {
    navigate('/projects');
  };

  if (loading) {
    return (
      <Container>
        <div className="loading-indicator">Loading project details...</div>
      </Container>
    );
  }

  if (error || !project) {
    return (
      <Container>
        <Section>
          <div className="error-container">
            <h2>Error: {error || 'Project not found'}</h2>
            <p>The requested project could not be loaded.</p>
            <button onClick={handleBack}>Back to Projects</button>
          </div>
        </Section>
      </Container>
    );
  }

  return (
    <div id="main-content" tabIndex={-1}>
      <ProjectHeader
        title={project.title}
        technologies={project.technologies}
        year={project.year}
        githubUrl={project.githubUrl}
        liveUrl={project.liveUrl}
        onBack={handleBack}
      />

      <Section>
        <Container>
          <ProjectContent description={project.description} />
        </Container>
      </Section>

      {project.images.length > 0 && (
        <Section>
          <Container>
            <ProjectGallery images={project.images} />
          </Container>
        </Section>
      )}
    </div>
  );
};

export default ProjectDetail;
