import React from 'react';
import { render, screen } from '@testing-library/react';
import SkillsHighlight from '../../src/components/skills/SkillsHighlight';
import skills from '../../src/data/skills';

// Mock the skills data
jest.mock('../../src/data/skills', () => ({
  technical: [
    {
      category: 'Frontend Development',
      items: ['React', 'JavaScript']
    },
    {
      category: 'Backend Development',
      items: ['Node.js', 'Python']
    }
  ],
  soft: ['Problem Solving', 'Communication']
}));

describe('SkillsHighlight Component', () => {
  test('renders skills sections correctly', () => {
    render(<SkillsHighlight />);

    // Check section titles
    expect(screen.getByText('My Skills')).toBeInTheDocument();
    expect(screen.getByText('Technical Skills')).toBeInTheDocument();
    expect(screen.getByText('Soft Skills')).toBeInTheDocument();

    // Check technical skills categories
    expect(screen.getByText('Frontend Development')).toBeInTheDocument();
    expect(screen.getByText('Backend Development')).toBeInTheDocument();

    // Check individual skills
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();

    // Check soft skills
    expect(screen.getByText('Problem Solving')).toBeInTheDocument();
    expect(screen.getByText('Communication')).toBeInTheDocument();

    // Check CTA button
    expect(screen.getByText('View Full Resume')).toBeInTheDocument();
  });
});
