import React from 'react';
import { SectionProps } from '../../types';

const Section: React.FC<SectionProps> = ({
  children,
  id,
  title,
  subtitle,
  className = '',
  backgroundColor = 'transparent',
  fullWidth = false,
}) => {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 ${backgroundColor !== 'transparent' ? `bg-${backgroundColor}` : ''} ${className}`}
    >
      <div className={`mx-auto px-4 ${fullWidth ? 'w-full' : 'max-w-6xl'}`}>
        {(title || subtitle) && (
          <div className="mb-8 md:mb-12 text-center">
            {title && <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>}
            {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
