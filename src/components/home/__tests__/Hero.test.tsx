import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Hero from '../Hero';

// Mock data
const mockBio = {
  name: "Test User",
  title: "Test Developer",
  summary: "Test summary",
  description: ["Test description 1", "Test description 2"],
  image: "/test-image.jpg",
  resumeUrl: "/test-resume.pdf"
};

// Wrap the component with BrowserRouter since it contains Link from react-router-dom
const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('Hero Component', () => {
  test('renders the name correctly', () => {
    renderWithRouter(<Hero bio={mockBio} />);
    expect(screen.getByText(mockBio.name)).toBeInTheDocument();
  });

  test('renders the summary correctly', () => {
    renderWithRouter(<Hero bio={mockBio} />);
    expect(screen.getByText(mockBio.summary)).toBeInTheDocument();
  });

  test('renders description items', () => {
    renderWithRouter(<Hero bio={mockBio} />);
    expect(screen.getByText(mockBio.description[0])).toBeInTheDocument();
    expect(screen.getByText(mockBio.description[1])).toBeInTheDocument();
  });

  test('renders call to action buttons', () => {
    renderWithRouter(<Hero bio={mockBio} />);
    expect(screen.getByText('Contact Me')).toBeInTheDocument();
    expect(screen.getByText('Download Resume')).toBeInTheDocument();
  });

  test('renders image with correct alt text', () => {
    renderWithRouter(<Hero bio={mockBio} />);
    const image = screen.getByAltText(`${mockBio.name} - ${mockBio.title}`);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockBio.image);
  });
});
