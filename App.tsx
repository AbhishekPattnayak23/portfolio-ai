import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Layout from './Layout';

// Lazy load pages for code splitting
const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const Projects = React.lazy(() => import('./Projects'));
const ProjectDetail = React.lazy(() => import('./ProjectDetail'));
const Contact = React.lazy(() => import('./Contact'));

// Custom route-level error boundary
const RouteErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Suspense fallback={<div className="loading">Loading...</div>}>
      <ErrorBoundary>
        {children}
      </ErrorBoundary>
    </React.Suspense>
  );
};

// Page-level error boundary
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Route error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="page-error">
          <h2>This page encountered an error</h2>
          <button onClick={() => this.setState({ hasError: false })}>Try again</button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Custom 404 page
const NotFound = () => (
  <div className="not-found">
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <a href="/">Go back to home page</a>
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Focus management for accessibility
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
    }
  }, [pathname]);

  return null;
};

// URL sanitization helper
const sanitizeParam = (param: string): string => {
  // Basic URL parameter sanitization
  return param.replace(/[^\w-]/g, '');
};

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <RouteErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            </RouteErrorBoundary>
          } />
          <Route path="about" element={
            <RouteErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
            </RouteErrorBoundary>
          } />
          <Route path="projects" element={
            <RouteErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <Projects />
              </Suspense>
            </RouteErrorBoundary>
          } />
          <Route path="projects/:projectId" element={
            <RouteErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <ProjectDetail />
              </Suspense>
            </RouteErrorBoundary>
          } />
          <Route path="contact" element={
            <RouteErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <Contact />
              </Suspense>
            </RouteErrorBoundary>
          } />

          {/* Redirect legacy URLs if needed */}
          <Route path="portfolio" element={<Navigate to="/projects" replace />} />
          <Route path="resume" element={<Navigate to="/about" replace />} />

          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
