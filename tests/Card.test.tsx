import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../components/cards/Card';
import CardHeader from '../components/cards/CardHeader';
import CardBody from '../components/cards/CardBody';
import CardFooter from '../components/cards/CardFooter';
import ProjectCard from '../components/cards/ProjectCard';
import SkillCard from '../components/cards/SkillCard';

describe('Card Component Tests', () => {
  test('renders basic card correctly', () => {
    render(<Card data-testid="test-card">Card Content</Card>);
    const cardElement = screen.getByTestId('test-card');
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveTextContent('Card Content');
  });

  test('card click handler works', () => {
    const handleClick = jest.fn();
    render(<Card data-testid="test-card" onClick={handleClick}>Clickable Card</Card>);
    const cardElement = screen.getByTestId('test-card');
    fireEvent.click(cardElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders card with header, body, and footer', () => {
    render(
      <Card data-testid="test-card">
        <CardHeader title="Test Header" data-testid="test-header" />
        <CardBody data-testid="test-body">Body Content</CardBody>
        <CardFooter data-testid="test-footer">Footer Content</CardFooter>
      </Card>
    );

    expect(screen.getByTestId('test-card')).toBeInTheDocument();
    expect(screen.getByTestId('test-header')).toBeInTheDocument();
    expect(screen.getByTestId('test-header')).toHaveTextContent('Test Header');
    expect(screen.getByTestId('test-body')).toHaveTextContent('Body Content');
    expect(screen.getByTestId('test-footer')).toHaveTextContent('Footer Content');
  });
});

describe('ProjectCard Component Tests', () => {
  const mockProject = {
    id: 'test-project',
    title: 'Test Project',
    description: 'This is a test project',
    tags: ['React', 'TypeScript'],
    demoUrl: 'https://example.com/demo',
    repoUrl: 'https://github.com/example/repo'
  };

  test('renders project card with correct data', () => {
    render(<ProjectCard project={mockProject} data-testid="test-project-card" />);

    expect(screen.getByTestId('test-project-card')).toBeInTheDocument();
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test project')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Live Demo')).toBeInTheDocument();
    expect(screen.getByText('Source Code')).toBeInTheDocument();
  });
});

describe('SkillCard Component Tests', () => {
  const mockSkill = {
    id: 'test-skill',
    name: 'JavaScript',
    proficiency: 85,
    description: 'Experience with ES6+ features',
    yearsOfExperience: 3
  };

  test('renders skill card with correct data', () => {
    render(<SkillCard skill={mockSkill} data-testid="test-skill-card" />);

    expect(screen.getByTestId('test-skill-card')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('Experience with ES6+ features')).toBeInTheDocument();
    expect(screen.getByText('3 years')).toBeInTheDocument();
  });

  test('renders compact skill card correctly', () => {
    render(<SkillCard skill={mockSkill} compact data-testid="test-skill-card" />);

    expect(screen.getByTestId('test-skill-card')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.queryByText('Experience with ES6+ features')).not.toBeInTheDocument();
  });
});
