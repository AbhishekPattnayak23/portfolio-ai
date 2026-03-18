import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to scroll to top when route changes
 * This helps ensure a good user experience when navigating between pages
 *
 * @param {boolean} smooth - Whether to use smooth scrolling
 * @param {Array<any>} dependencies - Additional dependencies that should trigger scroll to top
 */
const useScrollToTop = (smooth = false, dependencies: any[] = []) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top with or without smooth behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? 'smooth' : 'auto'
    });
  }, [pathname, smooth, ...dependencies]);
};

export default useScrollToTop;
