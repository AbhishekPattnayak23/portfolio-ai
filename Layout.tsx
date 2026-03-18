import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import useScrollToTop from './useScrollToTop';

const Layout: React.FC = () => {
  const location = useLocation();

  // Use the scroll to top hook
  useScrollToTop();

  // Set security headers meta tags
  useEffect(() => {
    // Update canonical URL for SEO
    const link = document.querySelector('link[rel="canonical"]') ||
                document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', `${window.location.origin}${location.pathname}`);
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(link);
    }

    // Set CSP meta tag if CSP isn't set by the server
    if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
      const cspMeta = document.createElement('meta');
      cspMeta.httpEquiv = 'Content-Security-Policy';
      cspMeta.content = "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self';";
      document.head.appendChild(cspMeta);
    }
  }, [location]);

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
