import React from 'react';
import PropTypes from 'prop-types';
import './Grid.css';

/**
 * Row component for the grid system
 */
export const Row = ({ children, className, gutter, align, justify, testId }) => {
  const gutterClass = gutter ? `gutter-${gutter}` : '';
  const alignClass = align ? `align-${align}` : '';
  const justifyClass = justify ? `justify-${justify}` : '';

  const combinedClassName = [
    'row',
    gutterClass,
    alignClass,
    justifyClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={combinedClassName} data-testid={testId}>
      {children}
    </div>
  );
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  gutter: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
  align: PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
  justify: PropTypes.oneOf(['start', 'center', 'end', 'between', 'around']),
  testId: PropTypes.string,
};

Row.defaultProps = {
  className: '',
  gutter: null,
  align: null,
  justify: null,
  testId: 'row',
};

/**
 * Column component for the grid system
 */
export const Col = ({ children, className, xs, sm, md, lg, xl, testId }) => {
  const colClasses = [
    xs && `col-xs-${xs}`,
    sm && `col-sm-${sm}`,
    md && `col-md-${md}`,
    lg && `col-lg-${lg}`,
    xl && `col-xl-${xl}`,
    !xs && !sm && !md && !lg && !xl ? 'col' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={colClasses} data-testid={testId}>
      {children}
    </div>
  );
};

Col.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  testId: PropTypes.string,
};

Col.defaultProps = {
  className: '',
  testId: 'column',
};
