import React from 'react';
import { render, screen } from '@testing-library/react';
import FeaturedProjects from '../../src/components/projects/FeaturedProjects';
import projectsData from '../../src/data/projects';

// Mock the projects data
jest.mock('../../src/data/projects', () => [
  {
    id: 1,
    title: 'Featured Project 1',
    description: 'Description 1',
    image: '/images/project1.jpg',
    technologies: ['React'],
    github: 'https://github.com/test/project1',
    liveDemo: 'https://project1.com',
    featured: true
  },
  {
    id: 2,
    title: 'Featured Project 2',
    description: 'Description 2',
    image: '/images/project2.jpg',
    technologies: ['Node.js'],
    github: 'https://github.com/test/project2',
    liveDemo: 'https://project2.com',
    featured: true
  },
  {
    id: 3,
    title: 'Non-Featured Project',
    description: 'Description 3',
    image: '/images/project3.jpg',
    technologies: ['Python'],
    github: 'https://github.com/test/project3',
    liveDemo: 'https://project3.com',
    featured: false
  }
]);

describe('FeaturedProjects Component', () => {
  test('renders only featured projects', () => {
    render(<FeaturedProjects />);

    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
    expect(screen.getByText('Featured Project 1')).toBeInTheDocument();
    expect(screen.getByText('Featured Project 2')).toBeInTheDocument();
    expect(screen.queryByText('Non-Featured Project')).not.toBeInTheDocument();

    expect(screen.getByText('View All Projects')).toBeInTheDocument();
  });
});
