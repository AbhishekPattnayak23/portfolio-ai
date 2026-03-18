import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock components to simplify testing
jest.mock('./Layout', () => ({ children }: { children: React.ReactNode }) => (
  <div data-testid="layout-component">{children}</div>
));

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="browser-router">{children}</div>
  ),
  Routes: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="routes">{children}</div>
  ),
  Route: () => <div data-testid="route" />,
  useLocation: () => ({ pathname: '/' }),
}));

describe('App Component', () => {
  test('renders layout component', () => {
    render(<App />);
    const layoutElement = screen.getByTestId('layout-component');
    expect(layoutElement).toBeInTheDocument();
  });

  test('renders router components', () => {
    render(<App />);
    const routerElement = screen.getByTestId('browser-router');
    const routesElement = screen.getByTestId('routes');
    expect(routerElement).toBeInTheDocument();
    expect(routesElement).toBeInTheDocument();
  });

  test('has route components', () => {
    render(<App />);
    const routeElements = screen.getAllByTestId('route');
    // Should have routes for home, about, projects, project detail, and contact, plus 404
    expect(routeElements.length).toBeGreaterThanOrEqual(5);
  });
});
