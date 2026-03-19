import React from 'react';
import PropTypes from 'prop-types';
import Logger from '../../utils/Logger';

/**
 * Error Boundary component that catches JavaScript errors in its child component tree
 * Displays a fallback UI instead of crashing the whole application
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to our logging service
    Logger.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });

    // You could also send this to an error reporting service
    if (process.env.NODE_ENV === 'production') {
      // Example: sendToErrorReportingService(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-container p-4 bg-light rounded my-3">
          <h2 className="text-danger mb-3">Something went wrong</h2>
          <p className="mb-3">We're sorry, but there was an error loading this section.</p>
          <button
            className="btn btn-primary"
            onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
          >
            Try again
          </button>
          {process.env.NODE_ENV !== 'production' && this.state.error && (
            <details className="mt-3">
              <summary>Error Details (Development Only)</summary>
              <pre className="mt-2 p-2 bg-dark text-white rounded">
                {this.state.error.toString()}
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
