import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CallToAction from './CallToAction';

// Mock the framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

// Mock fetch for testing resume download
global.fetch = jest.fn();
global.URL.createObjectURL = jest.fn();
global.URL.revokeObjectURL = jest.fn();

describe('CallToAction Component', () => {
  const mockBio = {
    name: 'John Doe',
    title: 'Web Developer',
    summary: 'A passionate web developer',
    description: ['Detail 1', 'Detail 2'],
    image: '/path/to/image.jpg',
    resumeUrl: '/path/to/resume.pdf',
  };

  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();
  });

  it('renders the component with primary and secondary buttons', () => {
    render(
      <BrowserRouter>
        <CallToAction bio={mockBio} />
      </BrowserRouter>
    );

    expect(screen.getByText('View My Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Download Resume')).toBeInTheDocument();
  });

  it('shows loading state when downloading resume', async () => {
    // Mock a delayed response
    (global.fetch as jest.Mock).mockImplementation(() =>
      new Promise(resolve => setTimeout(() => resolve({
        ok: true,
        blob: () => Promise.resolve(new Blob(['test'], { type: 'application/pdf' }))
      }), 100))
    );

    render(
      <BrowserRouter>
        <CallToAction bio={mockBio} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('Download Resume'));

    // Check if button shows loading state
    expect(await screen.findByText('Downloading...')).toBeInTheDocument();

    // Wait for download to complete
    await waitFor(() => {
      expect(screen.getByText('Download Resume')).toBeInTheDocument();
    });
  });

  it('shows error message when resume download fails', async () => {
    // Mock fetch to return error
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    render(
      <BrowserRouter>
        <CallToAction bio={mockBio} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('Download Resume'));

    // Wait for error message
    expect(await screen.findByText('Failed to download resume. Please try again later.')).toBeInTheDocument();
  });

  it('shows fallback UI when bio data is missing', () => {
    render(
      <BrowserRouter>
        <CallToAction bio={undefined as any} />
      </BrowserRouter>
    );

    expect(screen.getByText('Loading call-to-action content...')).toBeInTheDocument();
  });
});
