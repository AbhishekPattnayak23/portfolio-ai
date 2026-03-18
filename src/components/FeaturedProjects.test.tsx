import React from 'react';
import { render, screen } from '@testing-library/react';
import FeaturedProjects from './FeaturedProjects';

// Mock the project data
jest.mock('../utils/projectData', () => ({
  getFeaturedProjects: () => [
    {
      id: 'test-project',
      title: 'Test Project',
      description: 'A test project description',
      imageUrl: '/images/projects/test.jpg',
      tags: ['Test', 'React'],
      projectLink: 'https://example.com',
      githubLink: 'https://github.com/example/test',
      featured: true
    }
  ]
}));

describe('FeaturedProjects', () => {
  test('renders the section title', () => {
    render(<FeaturedProjects />);
    const titleElement = screen.getByText(/Featured GenAI Projects/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('displays loading state initially', () => {
    render(<FeaturedProjects />);
    const loadingElement = screen.getByText(/Loading projects/i);
    expect(loadingElement).toBeInTheDocument();
  });

  // In a real test environment with proper setup, you would:
  // 1. Test that projects are displayed after loading
  // 2. Test error handling
  // 3. Test the correct number of ProjectCard components are rendered
});
