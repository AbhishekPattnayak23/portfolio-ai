import React, { useState, useEffect, useRef } from 'react';
import { sanitizeHtml } from '../../utils/security'; // Import sanitizer utility
import './Header.css';
import defaultLogo from '../../assets/logo.svg'; // Fallback logo
import { useMediaQuery } from '../../hooks/useMediaQuery'; // Custom hook for responsive design

/**
 * Header Component with responsive navigation
 * Security features:
 * - Content sanitization for navigation items
 * - Error boundaries for failed navigation loading
 * - Keyboard accessibility
 * - ARIA attributes for screen readers
 */
const Header = ({
  navItems = [], // Default empty array to prevent null errors
  logoSrc = defaultLogo, // Default logo to prevent broken images
  altText = "Company Logo",
  onNavigate = () => {} // Default empty function to prevent null errors
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navigationItems, setNavigationItems] = useState(navItems);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Media query for responsive design
  const isMobile = useMediaQuery('(max-width: 768px)');
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  // Load navigation items if needed (if navItems is empty)
  useEffect(() => {
    const loadNavItems = async () => {
      if (navItems.length > 0) {
        setNavigationItems(navItems);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        // Simulate API call - replace with actual API call
        const response = await fetch('/api/navigation');

        if (!response.ok) {
          throw new Error(`Navigation API error: ${response.status}`);
        }

        const data = await response.json();

        // Sanitize incoming navigation data
        const sanitizedItems = data.map(item => ({
          ...item,
          title: sanitizeHtml(item.title),
          url: sanitizeHtml(item.url)
        }));

        setNavigationItems(sanitizedItems);
      } catch (err) {
        console.error('Failed to load navigation:', err);
        setError('Failed to load navigation menu. Using default navigation.');
        // Fallback to safe default navigation
        setNavigationItems([
          { title: 'Home', url: '/' },
          { title: 'About', url: '/about' },
          { title: 'Contact', url: '/contact' }
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    loadNavItems();
  }, [navItems]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (e, callback) => {
    // Accessibility: trigger on Enter or Space
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback();
    }
  };

  const handleNavigation = (url) => {
    // Close menu after navigation on mobile
    if (isMobile) {
      setIsMenuOpen(false);
    }
    onNavigate(url);
  };

  return (
    <header className="header" role="banner">
      <div className="header-container">
        <div className="logo-container">
          <img
            src={logoSrc}
            alt={altText}
            className="logo"
            onError={(e) => {
              console.warn('Logo failed to load, using fallback');
              e.target.src = defaultLogo; // Fallback for broken images
            }}
          />
        </div>

        {/* Hamburger menu for mobile */}
        {isMobile && (
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            onKeyDown={(e) => handleKeyDown(e, toggleMenu)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        )}

        {/* Navigation menu */}
        <nav
          className={`navigation ${isMobile ? 'mobile' : 'desktop'} ${isMenuOpen ? 'open' : ''}`}
          role="navigation"
          aria-label="Main Navigation"
          ref={menuRef}
        >
          {isLoading ? (
            <div className="nav-loading" aria-live="polite">Loading navigation...</div>
          ) : error ? (
            <div className="nav-error" aria-live="assertive">{error}</div>
          ) : (
            <ul>
              {navigationItems.map((item, index) => (
                <li key={`nav-item-${index}`}>
                  <a
                    href={item.url}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.url);
                    }}
                    onKeyDown={(e) => handleKeyDown(e, () => handleNavigation(item.url))}
                    tabIndex="0"
                    role="menuitem"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
