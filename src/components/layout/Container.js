import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';

/**
 * Responsive container component that provides consistent width
 * and padding across the application
 */
const Container = ({ children, fluid, className, testId }) => {
  const containerClass = fluid ? 'container-fluid' : 'container';
  const combinedClassName = className ? `${containerClass} ${className}` : containerClass;

  return (
    <div className={combinedClassName} data-testid={testId}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool,
  className: PropTypes.string,
  testId: PropTypes.string,
};

Container.defaultProps = {
  fluid: false,
  className: '',
  testId: 'container',
};

export default Container;
