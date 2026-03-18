import React from 'react';
import Logger from '../../utils/logger';

const logger = new Logger('CardHeader');

export interface CardHeaderProps {
  /** Title text for the card header */
  title?: string;
  /** Additional content for the card header */
  children?: React.ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
  /** Background color */
  backgroundColor?: string;
  /** Text color */
  textColor?: string;
  /** Data testid for testing */
  'data-testid'?: string;
}

/**
 * Card header component that displays a title and optional content
 */
const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  children,
  className = '',
  backgroundColor,
  textColor,
  'data-testid': dataTestId = 'card-header',
}) => {
  logger.debug('Rendering CardHeader component', { title, backgroundColor, textColor });

  const style: React.CSSProperties = {};
  if (backgroundColor) style.backgroundColor = backgroundColor;
  if (textColor) style.color = textColor;

  return (
    <div
      className={`card-header ${className}`}
      style={style}
      data-testid={dataTestId}
    >
      {title && <h5 className="card-title">{title}</h5>}
      {children}
    </div>
  );
};

export default CardHeader;
