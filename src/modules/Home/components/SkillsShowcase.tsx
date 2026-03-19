import React, { useState, useEffect } from 'react';
import { Skill } from '../data/featuredData';

interface SkillsShowcaseProps {
  skills: Skill[];
  isLoading: boolean;
  error: string | null;
}

const SkillsShowcase: React.FC<SkillsShowcaseProps> = ({
  skills,
  isLoading,
  error
}) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set the first category as active initially if skills are loaded
    if (skills.length && !activeCategory) {
      const categories = [...new Set(skills.map(skill => skill.category))];
      setActiveCategory(categories[0]);
    }

    // Intersection Observer for animation on scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const skillsSection = document.querySelector('.skills-showcase');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, [skills, activeCategory]);

  if (isLoading) {
    return (
      <section className="skills-showcase">
        <h2>Skills & Expertise</h2>
        <div className="skills-loading">
          <div className="categories-skeleton">
            {[1, 2, 3, 4].map(item => (
              <div key={item} className="category-button-skeleton"></div>
            ))}
          </div>
          <div className="skills-grid-skeleton">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="skill-card-skeleton">
                <div className="skill-icon-skeleton"></div>
                <div className="skill-info-skeleton">
                  <div className="skill-name-skeleton"></div>
                  <div className="skill-level-skeleton"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="skills-showcase">
        <h2>Skills & Expertise</h2>
        <div className="error-container">
          <p>Sorry, we couldn't load the skills data. Please try again later.</p>
          <p className="error-message">{error}</p>
        </div>
      </section>
    );
  }

  if (!skills.length) {
    return (
      <section className="skills-showcase">
        <h2>Skills & Expertise</h2>
        <p className="no-skills-message">Skills information coming soon.</p>
      </section>
    );
  }

  // Get unique categories
  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section className={`skills-showcase ${isVisible ? 'animate' : ''}`}>
      <h2>Skills & Expertise</h2>

      <div className="skills-categories">
        {categories.map(category => (
          <button
            key={category}
            className={`category-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {skills
          .filter(skill => activeCategory === null || skill.category === activeCategory)
          .map(skill => (
            <div key={skill.name} className="skill-card">
              <div className="skill-icon">
                {skill.icon && <i className={`icon-${skill.icon}`} aria-hidden="true"></i>}
              </div>
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <div className="skill-level" aria-label={`Skill level: ${skill.level} out of 5`}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={`level-indicator ${index < skill.level ? 'filled' : ''}`}
                      aria-hidden="true"
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default SkillsShowcase;
