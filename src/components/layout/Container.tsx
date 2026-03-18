import React from 'react';
import { ContainerProps } from '../../types/layout';

/**
 * Container component for consistent horizontal padding and content width
 *
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The content to be wrapped
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.maxWidth='lg'] - Maximum width of container ('sm', 'md', 'lg', 'xl', 'full')
 * @param {boolean} [props.padding=true] - Whether to apply horizontal padding
 * @param {React.ElementType} [props.as='div'] - HTML element to render
 * @returns {JSX.Element} The Container component
 */
const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  maxWidth = 'lg',
  padding = true,
  as: Component = 'div',
}) => {
  const maxWidthClass = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    full: 'max-w-full',
  }[maxWidth];

  const paddingClass = padding ? 'px-4 sm:px-6 md:px-8' : '';

  return (
    <Component
      className={`mx-auto w-full ${maxWidthClass} ${paddingClass} ${className}`.trim()}
    >
      {children}
    </Component>
  );
};

export default Container;
