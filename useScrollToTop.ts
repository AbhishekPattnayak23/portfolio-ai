import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook that scrolls to top when route changes
 * and helps manage focus for accessibility
 */
const useScrollToTop = (): void => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top of page on route change
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Set focus to main content for screen readers
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      // Only set focus if element doesn't already have it
      if (document.activeElement !== mainContent) {
        mainContent.focus();
        // Add a tabindex if needed for focusability
        if (!mainContent.hasAttribute('tabindex')) {
          mainContent.setAttribute('tabindex', '-1');
        }
      }
    }
  }, [pathname]);
};

export default useScrollToTop;
