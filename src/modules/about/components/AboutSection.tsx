import React, { ReactNode } from 'react';

interface AboutSectionProps {
  id?: string;
  title: string;
  children: ReactNode;
  className?: string;
}

/**
 * Reusable section component for About page content
 *
 * @param props - Component properties
 * @returns Section component with title and content
 */
const AboutSection: React.FC<AboutSectionProps> = ({
  id,
  title,
  children,
  className = ''
}) => {
  return (
    <section id={id} className={`about-section ${className}`}>
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
};

export default AboutSection;
