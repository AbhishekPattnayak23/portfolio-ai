import React from 'react';
import { CardProps } from '../../types';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  elevation = 'medium',
}) => {
  const baseStyles = 'bg-white rounded-lg overflow-hidden';

  const elevationStyles = {
    low: 'shadow-sm',
    medium: 'shadow',
    high: 'shadow-lg',
  };

  const cardClasses = `
    ${baseStyles}
    ${elevationStyles[elevation]}
    ${onClick ? 'cursor-pointer transition-transform hover:-translate-y-1' : ''}
    ${className}
  `;

  return (
    <div className={cardClasses} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
