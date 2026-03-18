import React from 'react';
import Logger from '../../utils/logger';

const logger = new Logger('CardBody');

export interface CardBodyProps {
  /** Card body content */
  children?: React.ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
  /** Padding for the card body */
  padding?: string;
  /** Data testid for testing */
  'data-testid'?: string;
}

/**
 * Card body component that displays the main content of a card
 */
const CardBody: React.FC<CardBodyProps> = ({
  children,
  className = '',
  padding,
  'data-testid': dataTestId = 'card-body',
}) => {
  logger.debug('Rendering CardBody component', { padding });

  const style: React.CSSProperties = {};
  if (padding) style.padding = padding;

  return (
    <div
      className={`card-body ${className}`}
      style={style}
      data-testid={dataTestId}
    >
      {children}
    </div>
  );
};

export default CardBody;
