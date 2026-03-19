import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from '../../src/components/projects/ProjectCard';

describe('ProjectCard Component', () => {
  const mockProject = {
    id: 1,
    title: 'Test Project',
    description: 'This is a test project',
    image: '/images/test-project.jpg',
    technologies: ['React', 'Node.js'],
    github: 'https://github.com/test/project',
    liveDemo: 'https://test-project.com',
    featured: true
  };

  test('renders project details correctly', () => {
    render(<ProjectCard project={mockProject} />);

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test project')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();

    const image = screen.getByAltText('Test Project');
    expect(image).toBeInTheDocument();
    expect(image.src).toContain('/images/test-project.jpg');

    const githubLink = screen.getByText('GitHub');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink.href).toBe('https://github.com/test/project');

    const demoLink = screen.getByText('Live Demo');
    expect(demoLink).toBeInTheDocument();
    expect(demoLink.href).toBe('https://test-project.com');
  });
});
