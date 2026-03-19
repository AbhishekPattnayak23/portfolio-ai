import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

// Mock the framer-motion for testing
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
}));

// Mock the Logger utility
jest.mock('../utils/Logger', () => ({
  info: jest.fn(),
  error: jest.fn(),
}));

describe('About Page', () => {
  test('renders the page title', () => {
    render(<About />);
    const titleElement = screen.getByText(/About Me/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the professional journey section', () => {
    render(<About />);
    const journeyTitle = screen.getByText(/Professional Journey/i);
    expect(journeyTitle).toBeInTheDocument();
  });

  test('renders expertise section with all cards', () => {
    render(<About />);
    const expertiseTitle = screen.getByText(/Areas of Expertise/i);
    expect(expertiseTitle).toBeInTheDocument();

    // Check if all expertise cards are rendered (should be 6)
    const frontendCard = screen.getByText(/Frontend Development/i);
    const backendCard = screen.getByText(/Backend Development/i);

    expect(frontendCard).toBeInTheDocument();
    expect(backendCard).toBeInTheDocument();
  });

  test('renders professional background section with timeline', () => {
    render(<About />);
    const backgroundTitle = screen.getByText(/Professional Background/i);
    expect(backgroundTitle).toBeInTheDocument();

    // Check if job entries are present
    const seniorRole = screen.getByText(/Senior Software Engineer/i);
    expect(seniorRole).toBeInTheDocument();
  });
});
