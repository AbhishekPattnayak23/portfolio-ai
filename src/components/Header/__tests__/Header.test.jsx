import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';

// Mock the useMediaQuery hook for testing
jest.mock('../../../hooks/useMediaQuery', () => ({
  __esModule: true,
  default: jest.fn(),
  useMediaQuery: jest.fn()
}));

// Import the actual mock
import { useMediaQuery } from '../../../hooks/useMediaQuery';

describe('Header Component', () => {
  const mockNavItems = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' }
  ];

  beforeEach(() => {
    // Clear mocks before each test
    jest.clearAllMocks();
  });

  test('renders desktop navigation correctly', () => {
    // Mock as desktop
    useMediaQuery.mockReturnValue(false);

    render(<Header navItems={mockNavItems} logoSrc="/logo.svg" altText="Test Logo" />);

    // Check if logo is displayed
    expect(screen.getByAltText('Test Logo')).toBeInTheDocument();

    // Check if all navigation items are rendered
    mockNavItems.forEach(item => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });

    // Hamburger menu should not be visible on desktop
    expect(screen.queryByLabelText(/open menu/i)).not.toBeInTheDocument();
  });

  test('renders mobile navigation correctly and toggles menu', () => {
    // Mock as mobile
    useMediaQuery.mockReturnValue(true);

    render(<Header navItems={mockNavItems} logoSrc="/logo.svg" altText="Test Logo" />);

    // Hamburger menu should be visible on mobile
    const menuButton = screen.getByLabelText(/open menu/i);
    expect(menuButton).toBeInTheDocument();

    // Menu should be closed initially
    const nav = document.querySelector('.navigation');
    expect(nav).not.toHaveClass('open');

    // Click to open menu
    fireEvent.click(menuButton);

    // Menu should now be open
    expect(document.querySelector('.navigation')).toHaveClass('open');
    expect(screen.getByLabelText(/close menu/i)).toBeInTheDocument();
  });

  test('handles navigation click events', () => {
    const onNavigateMock = jest.fn();

    // Mock as desktop
    useMediaQuery.mockReturnValue(false);

    render(<Header
      navItems={mockNavItems}
      logoSrc="/logo.svg"
      altText="Test Logo"
      onNavigate={onNavigateMock}
    />);

    // Click on "About" link
    fireEvent.click(screen.getByText('About'));

    // Check if onNavigate was called with correct URL
    expect(onNavigateMock).toHaveBeenCalledWith('/about');
  });

  test('handles keyboard navigation', () => {
    const onNavigateMock = jest.fn();

    // Mock as desktop
    useMediaQuery.mockReturnValue(false);

    render(<Header
      navItems={mockNavItems}
      logoSrc="/logo.svg"
      altText="Test Logo"
      onNavigate={onNavigateMock}
    />);

    // Find the About link
    const aboutLink = screen.getByText('About');

    // Simulate Enter key press
    fireEvent.keyDown(aboutLink, { key: 'Enter' });

    // Check if onNavigate was called with correct URL
    expect(onNavigateMock).toHaveBeenCalledWith('/about');

    // Try with Space key
    fireEvent.keyDown(screen.getByText('Contact'), { key: ' ' });
    expect(onNavigateMock).toHaveBeenCalledWith('/contact');
  });

  test('falls back to default navigation if API fails', async () => {
    // Mock the fetch function
    const mockFetchPromise = Promise.reject(new Error('API error'));
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    // Mock console.error to prevent test output pollution
    jest.spyOn(console, 'error').mockImplementation(() => {});

    // Mock as desktop with empty navItems to trigger API call
    useMediaQuery.mockReturnValue(false);

    render(<Header navItems={[]} logoSrc="/logo.svg" altText="Test Logo" />);

    // Wait for the API call to fail and fallback navigation to be rendered
    const homeLink = await screen.findByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();

    // Error message should be displayed
    expect(screen.getByText(/Failed to load navigation menu/i)).toBeInTheDocument();

    // Clean up
    console.error.mockRestore();
    delete global.fetch;
  });

  test('handles image load errors', () => {
    // Mock as desktop
    useMediaQuery.mockReturnValue(false);

    render(<Header navItems={mockNavItems} logoSrc="invalid-logo.svg" altText="Test Logo" />);

    const logoImg = screen.getByAltText('Test Logo');

    // Mock console.warn to prevent test output pollution
    jest.spyOn(console, 'warn').mockImplementation(() => {});

    // Simulate image load error
    fireEvent.error(logoImg);

    // Check if warning was logged
    expect(console.warn).toHaveBeenCalledWith('Logo failed to load, using fallback');

    // Clean up
    console.warn.mockRestore();
  });
});
