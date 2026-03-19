import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GenAISkills from './GenAISkills';

describe('GenAISkills Component', () => {
  const mockSkills = [
    {
      id: 1,
      name: 'Prompt Engineering',
      icon: '',
      proficiency: 5,
      description: 'Crafting effective prompts'
    },
    {
      id: 2,
      name: 'LLM Fine-tuning',
      icon: '',
      proficiency: 4,
      description: 'Customizing language models'
    }
  ];

  test('renders the component with title', () => {
    render(<GenAISkills title="Test Title" skills={mockSkills} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  test('renders all skills correctly', () => {
    render(<GenAISkills skills={mockSkills} />);
    expect(screen.getByText('Prompt Engineering')).toBeInTheDocument();
    expect(screen.getByText('LLM Fine-tuning')).toBeInTheDocument();
    expect(screen.getByText('Crafting effective prompts')).toBeInTheDocument();
  });

  test('handles empty skills array', () => {
    render(<GenAISkills skills={[]} />);
    expect(screen.getByText('No skills data available')).toBeInTheDocument();
  });

  test('calls onSkillClick when a skill is clicked', () => {
    const mockOnClick = jest.fn();
    render(<GenAISkills skills={mockSkills} onSkillClick={mockOnClick} />);

    fireEvent.click(screen.getByText('Prompt Engineering'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith(mockSkills[0]);
  });

  test('filters out invalid skill data', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const invalidSkills = [
      ...mockSkills,
      { name: 'Missing Icon and Proficiency' },
      null,
      { name: 'Invalid Proficiency', icon: '', proficiency: 'not-a-number' }
    ];

    render(<GenAISkills skills={invalidSkills} />);

    // Only valid skills should be displayed
    expect(screen.getByText('Prompt Engineering')).toBeInTheDocument();
    expect(screen.getByText('LLM Fine-tuning')).toBeInTheDocument();

    // Should not find invalid skills
    expect(screen.queryByText('Missing Icon and Proficiency')).not.toBeInTheDocument();

    // Error should have been logged
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});
