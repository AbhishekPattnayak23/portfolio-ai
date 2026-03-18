import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CallToAction from './CallToAction';

// Mock console.warn and console.error to check for warnings
const originalConsoleWarn = console.warn;
const originalConsoleError = console.error;
const mockConsoleWarn = jest.fn();
const mockConsoleError = jest.fn();

beforeAll(() => {
  console.warn = mockConsoleWarn;
  console.error = mockConsoleError;
});

afterAll(() => {
  console.warn = originalConsoleWarn;
  console.error = originalConsoleError;
});

beforeEach(() => {
  mockConsoleWarn.mockClear();
  mockConsoleError.mockClear();
});

describe('CallToAction Component', () => {
  test('renders correctly with default props', () => {
    render(<CallToAction />);

    expect(screen.getByText('Ready to collaborate?')).toBeInTheDocument();
    expect(screen.getByText('View Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Download Resume')).toBeInTheDocument();
    expect(screen.getByText('Contact Me')).toBeInTheDocument();
  });

  test('calls onPortfolioClick when portfolio button is clicked', () => {
    const mockPortfolioClick = jest.fn();
    render(<CallToAction onPortfolioClick={mockPortfolioClick} />);

    fireEvent.click(screen.getByText('View Portfolio'));
    expect(mockPortfolioClick).toHaveBeenCalledTimes(1);
  });

  test('calls onContactClick when contact button is clicked', () => {
    const mockContactClick = jest.fn();
    render(<CallToAction onContactClick={mockContactClick} />);

    fireEvent.click(screen.getByText('Contact Me'));
    expect(mockContactClick).toHaveBeenCalledTimes(1);
  });

  test('handles resume download click', () => {
    // Mock document.createElement and appendChild
    const mockLink = {
      href: '',
      setAttribute: jest.fn(),
      click: jest.fn(),
    };

    const originalCreateElement = document.createElement;
    document.createElement = jest.fn(() => mockLink) as any;

    const originalAppendChild = document.body.appendChild;
    document.body.appendChild = jest.fn();

    const originalRemoveChild = document.body.removeChild;
    document.body.removeChild = jest.fn();

    render(<CallToAction resumeUrl="/test-resume.pdf" />);

    fireEvent.click(screen.getByText('Download Resume'));

    expect(document.createElement).toHaveBeenCalledWith('a');
    expect(mockLink.setAttribute).toHaveBeenCalledWith('download', 'resume.pdf');
    expect(document.body.appendChild).toHaveBeenCalledWith(mockLink);
    expect(mockLink.click).toHaveBeenCalled();
    expect(document.body.removeChild).toHaveBeenCalledWith(mockLink);

    // Restore mocks
    document.createElement = originalCreateElement;
    document.body.appendChild = originalAppendChild;
    document.body.removeChild = originalRemoveChild;
  });
});
