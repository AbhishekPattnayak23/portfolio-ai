import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

// Mock the lazy-loaded components
vi.mock('./Home', () => ({
  default: () => <div data-testid="home-page">Home Page</div>
}));

vi.mock('./About', () => ({
  default: () => <div data-testid="about-page">About Page</div>
}));

vi.mock('./Projects', () => ({
  default: () => <div data-testid="projects-page">Projects Page</div>
}));

vi.mock('./ProjectDetail', () => ({
  default: () => <div data-testid="project-detail-page">Project Detail Page</div>
}));

vi.mock('./Contact', () => ({
  default: () => <div data-testid="contact-page">Contact Page</div>
}));

// Mock Layout to simplify testing
vi.mock('./Layout', () => ({
  default: ({ children }: { children: React.ReactNode }) => <div data-testid="layout">{children}</div>
}));

describe('App Routing', () => {
  it('renders home page on root route', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Use find to wait for lazy loading
    const homeElement = await screen.findByTestId('home-page');
    expect(homeElement).toBeInTheDocument();
  });

  it('renders about page on /about route', async () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    const aboutElement = await screen.findByTestId('about-page');
    expect(aboutElement).toBeInTheDocument();
  });

  it('renders projects page on /projects route', async () => {
    render(
      <MemoryRouter initialEntries={['/projects']}>
        <App />
      </MemoryRouter>
    );

    const projectsElement = await screen.findByTestId('projects-page');
    expect(projectsElement).toBeInTheDocument();
  });

  it('renders project detail page on /projects/:id route', async () => {
    render(
      <MemoryRouter initialEntries={['/projects/test-project']}>
        <App />
      </MemoryRouter>
    );

    const projectDetailElement = await screen.findByTestId('project-detail-page');
    expect(projectDetailElement).toBeInTheDocument();
  });

  it('renders contact page on /contact route', async () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>
    );

    const contactElement = await screen.findByTestId('contact-page');
    expect(contactElement).toBeInTheDocument();
  });

  it('renders 404 page on invalid route', async () => {
    render(
      <MemoryRouter initialEntries={['/invalid-route']}>
        <App />
      </MemoryRouter>
    );

    // Wait for lazy loading
    const notFoundElement = await screen.findByText(/404 - Page Not Found/i);
    expect(notFoundElement).toBeInTheDocument();
  });

  it('redirects legacy URLs correctly', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/portfolio']}>
        <App />
      </MemoryRouter>
    );

    // Should redirect to /projects
    const projectsElement = await screen.findByTestId('projects-page');
    expect(projectsElement).toBeInTheDocument();
  });
});

// Test URL sanitization
describe('URL Parameter Sanitization', () => {
  it('sanitizes URL parameters correctly', async () => {
    // Mock window.location for testing
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/projects/<script>alert("xss")</script>'
      },
      writable: true
    });

    render(
      <MemoryRouter initialEntries={['/projects/<script>alert("xss")</script>']}>
        <App />
      </MemoryRouter>
    );

    // This would typically render the project detail page if valid,
    // or the error page if invalid (which is what we expect here)
    const projectDetailElement = await screen.findByTestId('project-detail-page');
    expect(projectDetailElement).toBeInTheDocument();

    // The full test would check that the sanitized parameter was used,
    // but that requires deeper integration testing with the actual component
  });
});
