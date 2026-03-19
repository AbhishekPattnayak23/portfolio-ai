import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSectionProps } from '../types';
import '../styles.css';

/**
 * Hero section component for the home page
 * Displays a main headline, subheading, professional image, and call-to-action buttons
 */
const HeroSection: React.FC<HeroSectionProps> = ({ name, title, summary, imageUrl }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero">
          <div className="hero-content">
            <h1 className="hero-name">{name}</h1>
            <h2 className="hero-title">{title}</h2>
            <p className="hero-summary">{summary}</p>
            <div className="btn-container">
              <Link to="/projects" className="btn btn-primary">
                View Projects
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Me
              </Link>
            </div>
          </div>
          <div className="hero-image-container">
            <img
              src={imageUrl || '/assets/images/profile.jpg'}
              alt={`${name} - ${title}`}
              className="hero-image"
              loading="eager"
              onError={(e) => {
                // Fallback if image fails to load
                const target = e.target as HTMLImageElement;
                target.src = '/assets/images/profile-placeholder.jpg';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
