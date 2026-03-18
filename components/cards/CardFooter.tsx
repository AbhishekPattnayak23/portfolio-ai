import React from 'react';
import Logger from '../../utils/logger';

const logger = new Logger('CardFooter');

export interface CardFooterProps {
  /** Card footer content */
  children?: React.ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
  /** Border at the top of the footer */
  bordered?: boolean;
  /** Data testid for testing */
  'data-testid'?: string;
}

/**
 * Card footer component for displaying actions or additional information
 */
const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = '',
  bordered = true,
  'data-testid': dataTestId = 'card-footer',
}) => {
  logger.debug('Rendering CardFooter component', { bordered });

  const borderClass = bordered ? 'border-top' : '';

  return (
    <div
      className={`card-footer ${borderClass} ${className}`}
      data-testid={dataTestId}
    >
      {children}
    </div>
  );
};

export default CardFooter;
