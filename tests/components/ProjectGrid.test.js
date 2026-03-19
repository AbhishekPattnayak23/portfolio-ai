import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectGrid from '../../src/components/ProjectGrid';
import Project from '../../src/models/Project';

// Mock the ProjectCard component to simplify testing
jest.mock('../../src/components/ProjectCard', () => {
  return function MockProjectCard({ project }) {
    return <div data-testid={`project-card-${project.id}`}>{project.name}</div>;
  };
});

describe('ProjectGrid Component', () => {
  const mockProjects = [
    new Project('1', 'Project 1', 'Description 1', ['React'], 'Text Generation', '', '', '', new Date()),
    new Project('2', 'Project 2', 'Description 2', ['Python'], 'Image Generation', '', '', '', new Date())
  ];

  it('renders all project cards when projects are provided', () => {
    render(<ProjectGrid projects={mockProjects} />);

    // Check if all project cards are rendered
    expect(screen.getByTestId('project-card-1')).toBeInTheDocument();
    expect(screen.getByTestId('project-card-2')).toBeInTheDocument();
    expect(screen.getByText('Project 1')).toBeInTheDocument();
    expect(screen.getByText('Project 2')).toBeInTheDocument();
  });

  it('displays empty state message when no projects match filters', () => {
    render(<ProjectGrid projects={[]} />);

    expect(screen.getByText('No projects match your filters')).toBeInTheDocument();
    expect(screen.getByText('Try adjusting your filter criteria to see more results.')).toBeInTheDocument();
  });
});
