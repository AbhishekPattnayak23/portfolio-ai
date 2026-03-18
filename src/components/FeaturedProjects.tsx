import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { ProjectData } from '../types/ProjectTypes';
import { getFeaturedProjects } from '../utils/projectData';

const SectionContainer = styled.section`
  padding: 80px 20px;
  background-color: #f9f9f9;
`;

const SectionInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  color: #d32f2f;
`;

const LoadingContainer = styled.div`
  text-align: center;
  padding: 50px 0;
`;

const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #4a90e2;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const FeaturedProjects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Simulate API call with a timeout
      const loadProjects = async () => {
        setLoading(true);
        try {
          // In a real app, this would be an API call
          setTimeout(() => {
            const featuredProjects = getFeaturedProjects();
            if (featuredProjects.length === 0) {
              setError('No featured projects found');
            } else {
              setProjects(featuredProjects);
              setError(null);
            }
            setLoading(false);
          }, 800);
        } catch (err) {
          console.error('Error loading projects:', err);
          setError('Failed to load projects. Please try again later.');
          setLoading(false);
        }
      };

      loadProjects();
    } catch (err) {
      console.error('Error in useEffect:', err);
      setError('An unexpected error occurred');
      setLoading(false);
    }
  }, []);

  return (
    <SectionContainer id="featured-projects">
      <SectionInner>
        <SectionHeader>
          <Title>Featured GenAI Projects</Title>
          <Subtitle>
            Explore some of my recent generative AI projects showcasing advanced language models,
            image generation, and intelligent automation.
          </Subtitle>
        </SectionHeader>

        {loading ? (
          <LoadingContainer>
            <LoadingSpinner />
            <p>Loading projects...</p>
          </LoadingContainer>
        ) : error ? (
          <ErrorMessage>
            <h3>Error</h3>
            <p>{error}</p>
          </ErrorMessage>
        ) : (
          <ProjectsGrid>
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ProjectsGrid>
        )}
      </SectionInner>
    </SectionContainer>
  );
};

export default FeaturedProjects;
