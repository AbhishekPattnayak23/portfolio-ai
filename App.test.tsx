import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Button from './Button';
import IconButton from './IconButton';
import LinkButton from './LinkButton';
import { BrowserRouter } from 'react-router-dom';

// Mock theme for styled-components
const theme = {
  colors: {
    primary: '#007bff',
    primaryDark: '#0069d9',
    primaryDarker: '#0062cc',
    primaryLight: '#e6f2ff',
    secondary: '#6c757d',
    secondaryDark: '#5a6268',
    secondaryDarker: '#545b62',
  },
};

// Wrap components with necessary providers
const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </BrowserRouter>
  );
};

describe('Button Components', () => {
  describe('Button', () => {
    test('renders with default props', () => {
      renderWithProviders(<Button>Click me</Button>);
      const button = screen.getByTestId('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('Click me');
    });

    test('handles click events', () => {
      const handleClick = jest.fn();
      renderWithProviders(<Button onClick={handleClick}>Click me</Button>);
      const button = screen.getByTestId('button');
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('disables button when disabled prop is true', () => {
      renderWithProviders(<Button disabled>Click me</Button>);
      const button = screen.getByTestId('button');
      expect(button).toBeDisabled();
    });

    test('disables button when isLoading prop is true', () => {
      renderWithProviders(<Button isLoading>Click me</Button>);
      const button = screen.getByTestId('button');
      expect(button).toBeDisabled();
    });
  });

  describe('IconButton', () => {
    test('renders with icon and label', () => {
      renderWithProviders(
        <IconButton
          icon={<span data-testid="icon"></span>}
          label="Search"
        >
          Search
        </IconButton>
      );
      const button = screen.getByTestId('icon-button');
      const icon = screen.getByTestId('icon');
      expect(button).toBeInTheDocument();
      expect(icon).toBeInTheDocument();
      expect(button).toHaveTextContent('Search');
    });
  });

  describe('LinkButton', () => {
    test('renders internal link button', () => {
      renderWithProviders(
        <LinkButton to="/projects">View Projects</LinkButton>
      );
      const linkButton = screen.getByTestId('link-button');
      expect(linkButton).toBeInTheDocument();
      expect(linkButton).toHaveAttribute('href', '/projects');
      expect(linkButton).toHaveTextContent('View Projects');
    });

    test('renders external link button', () => {
      renderWithProviders(
        <LinkButton to="https://example.com" external>
          External Link
        </LinkButton>
      );
      const externalLinkButton = screen.getByTestId('external-link-button');
      expect(externalLinkButton).toBeInTheDocument();
      expect(externalLinkButton).toHaveAttribute('href', 'https://example.com');
      expect(externalLinkButton).toHaveAttribute('target', '_blank');
      expect(externalLinkButton).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
