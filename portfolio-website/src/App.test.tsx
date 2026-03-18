import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the router to prevent errors
jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Routes: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Route: () => <div />,
}));

// Mock the Layout and page components
jest.mock('./components/layout/Layout', () => ({ children }: { children: React.ReactNode }) => (
  <div data-testid="layout">{children}</div>
));

test('renders the app with layout', () => {
  render(<App />);
  const layoutElement = screen.getByTestId('layout');
  expect(layoutElement).toBeInTheDocument();
});
