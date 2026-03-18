import React from 'react';
import styled from 'styled-components';
import { ProjectData } from '../types/ProjectTypes';

interface ProjectCardProps {
  project: ProjectData;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const ImageFallback = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 16px;
`;

const Content = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0 0 10px;
  font-size: 20px;
  color: #333;
`;

const Description = styled.p`
  color: #555;
  margin: 0 0 20px;
  font-size: 15px;
  line-height: 1.5;
  flex-grow: 1;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  gap: 8px;
`;

const Tag = styled.span`
  background-color: #f0f0f0;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  color: #555;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Link = styled.a`
  display: inline-block;
  padding: 8px 16px;
  background-color: #4a90e2;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3a7bc8;
  }
`;

const GithubLink = styled(Link)`
  background-color: #333;

  &:hover {
    background-color: #222;
  }
`;

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card>
      <ImageContainer>
        {!imageError ? (
          <ProjectImage
            src={project.imageUrl}
            alt={project.title}
            onError={handleImageError}
          />
        ) : (
          <ImageFallback>
            {project.title}
          </ImageFallback>
        )}
      </ImageContainer>
      <Content>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        <TagsContainer>
          {project.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsContainer>
        <LinksContainer>
          {project.projectLink && (
            <Link href={project.projectLink} target="_blank" rel="noopener noreferrer">
              View Project
            </Link>
          )}
          {project.githubLink && (
            <GithubLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </GithubLink>
          )}
        </LinksContainer>
      </Content>
    </Card>
  );
};

export default ProjectCard;
