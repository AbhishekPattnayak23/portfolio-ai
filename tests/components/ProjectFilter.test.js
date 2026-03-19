import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ProjectFilter from '../../src/components/ProjectFilter';

describe('ProjectFilter Component', () => {
  const mockTechnologies = ['React', 'TensorFlow', 'Python'];
  const mockProjectTypes = ['Text Generation', 'Image Generation'];
  const mockOnFilterChange = jest.fn();

  beforeEach(() => {
    mockOnFilterChange.mockClear();
  });

  it('renders all technologies and project types', () => {
    render(
      <ProjectFilter
        technologies={mockTechnologies}
        projectTypes={mockProjectTypes}
        onFilterChange={mockOnFilterChange}
      />
    );

    // Check if all technologies are rendered
    mockTechnologies.forEach(tech => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });

    // Check if all project types are rendered
    mockProjectTypes.forEach(type => {
      expect(screen.getByText(type)).toBeInTheDocument();
    });
  });

  it('calls onFilterChange when a technology is selected', () => {
    render(
      <ProjectFilter
        technologies={mockTechnologies}
        projectTypes={mockProjectTypes}
        onFilterChange={mockOnFilterChange}
      />
    );

    // Find React checkbox and click it
    const reactCheckbox = screen.getByLabelText('React');
    fireEvent.click(reactCheckbox);

    expect(mockOnFilterChange).toHaveBeenCalledWith(expect.objectContaining({
      technologies: ['React'],
      projectTypes: [],
      searchQuery: ''
    }));
  });

  it('calls onFilterChange when search input changes', () => {
    render(
      <ProjectFilter
        technologies={mockTechnologies}
        projectTypes={mockProjectTypes}
        onFilterChange={mockOnFilterChange}
      />
    );

    // Find search input and type in it
    const searchInput = screen.getByPlaceholderText('Search projects...');
    fireEvent.change(searchInput, { target: { value: 'test query' } });

    expect(mockOnFilterChange).toHaveBeenCalledWith(expect.objectContaining({
      technologies: [],
      projectTypes: [],
      searchQuery: 'test query'
    }));
  });

  it('clears all filters when clear button is clicked', () => {
    render(
      <ProjectFilter
        technologies={mockTechnologies}
        projectTypes={mockProjectTypes}
        onFilterChange={mockOnFilterChange}
      />
    );

    // First select a filter
    const reactCheckbox = screen.getByLabelText('React');
    fireEvent.click(reactCheckbox);
    mockOnFilterChange.mockClear();

    // Click clear button
    const clearButton = screen.getByText('Clear All Filters');
    fireEvent.click(clearButton);

    expect(mockOnFilterChange).toHaveBeenCalledWith({
      technologies: [],
      projectTypes: [],
      searchQuery: ''
    });
  });
});
