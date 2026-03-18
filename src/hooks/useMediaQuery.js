import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive design using media queries
 * @param {string} query - CSS media query string
 * @returns {boolean} - Whether the media query matches
 */
export const useMediaQuery = (query) => {
  // Default to false on the server
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Browser compatibility check
    if (typeof window === 'undefined' || !window.matchMedia) {
      console.warn('matchMedia not supported');
      return;
    }

    const media = window.matchMedia(query);

    // Set the initial state
    setMatches(media.matches);

    // Define listener function
    const listener = (event) => {
      setMatches(event.matches);
    };

    // Modern browsers
    if (media.addEventListener) {
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    }
    // Legacy browsers
    else {
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [query]);

  return matches;
};

export default useMediaQuery;
