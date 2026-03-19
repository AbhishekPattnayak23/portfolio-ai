import React, { Suspense } from 'react';

/**
 * LazyLoader component for handling React lazy loading with Suspense
 * @param {Object} props - Component properties
 * @param {React.LazyExoticComponent} props.component - Lazy loaded component
 * @param {React.ReactNode} props.fallback - Fallback UI while loading
 * @param {Object} props.componentProps - Props to pass to the loaded component
 * @returns {React.ReactElement} - Rendered component
 */
const LazyLoader = ({ component: Component, fallback, componentProps = {} }) => {
  // Default fallback if none provided
  const defaultFallback = (
    <div className="loading-fallback">
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  );

  return (
    <Suspense fallback={fallback || defaultFallback}>
      <ErrorBoundary>
        <Component {...componentProps} />
      </ErrorBoundary>
    </Suspense>
  );
};

/**
 * Error boundary to catch errors in lazy loaded components
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('LazyLoader Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <p>The component failed to load. Please try again later.</p>
          <button onClick={() => this.setState({ hasError: false })}>
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default LazyLoader;
