import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from '../Header';
import { defaultTheme } from '../styles/theme';

// Mock matchMedia for responsive testing
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {},
  };
};

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        {ui}
      </ThemeProvider>
    </BrowserRouter>
  );
};

describe('Header Component', () => {
  test('renders header with logo text', () => {
    renderWithProviders(<Header logoText="Test Logo" />);
    expect(screen.getByText('Test Logo')).toBeInTheDocument();
  });

  test('renders navigation items', () => {
    renderWithProviders(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('mobile menu button toggles menu visibility', () => {
    // Mock small screen size
    Object.defineProperty(window, 'innerWidth', { value: 500, writable: true });

    renderWithProviders(<Header />);

    const menuButton = screen.getByLabelText('Open menu');
    fireEvent.click(menuButton);

    // Now it should show the close menu button
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    // Click again to close
    fireEvent.click(screen.getByLabelText('Close menu'));
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });
});
