import React from 'react';
import { ContainerProps } from '../../types';

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'large',
  as: Component = 'div',
}) => {
  const sizeClasses = {
    small: 'max-w-md',
    medium: 'max-w-2xl',
    large: 'max-w-6xl',
    fluid: 'w-full',
  };

  const containerClasses = `
    mx-auto
    px-4
    ${sizeClasses[size]}
    ${className}
  `;

  return <Component className={containerClasses}>{children}</Component>;
};

export default Container;
