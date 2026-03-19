import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

/**
 * Main Layout component that wraps all pages
 * Provides consistent structure with responsive behavior
 */
const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate layout initialization and check for any issues
    const initLayout = async () => {
      try {
        // Could check for required assets, theme preferences, etc.
        await new Promise(resolve => setTimeout(resolve, 100));
        setLoading(false);
      } catch (err) {
        console.error("Layout initialization error:", err);
        setError("Failed to initialize the page layout");
        setLoading(false);
      }
    };

    initLayout();

    // Add event listeners for responsive behaviors
    const handleResize = () => {
      // Handle any special resize logic if needed
      document.documentElement.classList.toggle('is-mobile', window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Show loading state
  if (loading) {
    return (
      <div className="layout-loading">
        <div className="loading-spinner"></div>
        <p>Loading layout...</p>
      </div>
    );
  }

  // Handle any initialization errors
  if (error) {
    return (
      <div className="layout-error">
        <h1>Layout Error</h1>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Reload Page
        </button>
      </div>
    );
  }

  return (
    <div className="layout">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="main-content">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
