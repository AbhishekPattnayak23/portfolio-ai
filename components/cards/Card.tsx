import React from 'react';
import Logger from '../../utils/logger';

const logger = new Logger('Card');

export interface CardProps {
  /** Unique identifier for the card */
  id?: string;
  /** Additional CSS classes to apply */
  className?: string;
  /** Card content */
  children?: React.ReactNode;
  /** On click handler */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /** Width of the card (default: '100%') */
  width?: string;
  /** Whether the card has a shadow */
  elevation?: 'none' | 'low' | 'medium' | 'high';
  /** Data testid for testing */
  'data-testid'?: string;
}

/**
 * Card component that wraps content in a styled container
 */
const Card: React.FC<CardProps> = ({
  id,
  className = '',
  children,
  onClick,
  width = '100%',
  elevation = 'low',
  'data-testid': dataTestId = 'card',
}) => {
  logger.debug('Rendering Card component', { id, className, width, elevation });

  // Map elevation to shadow class
  const elevationMap = {
    none: '',
    low: 'shadow-sm',
    medium: 'shadow',
    high: 'shadow-lg',
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    logger.debug('Card clicked', { id });
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <div
      id={id}
      className={`card ${elevationMap[elevation]} ${className}`}
      style={{ width }}
      onClick={onClick ? handleClick : undefined}
      data-testid={dataTestId}
    >
      {children}
    </div>
  );
};

export default Card;
