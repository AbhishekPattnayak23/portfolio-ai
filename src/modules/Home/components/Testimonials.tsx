import React, { useState, useEffect, useRef } from 'react';
import { Testimonial, Achievement } from '../data/featuredData';

interface TestimonialsProps {
  testimonials: Testimonial[];
  achievements: Achievement[];
  isLoading: boolean;
  error: string | null;
}

const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials,
  achievements,
  isLoading,
  error
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayMode, setDisplayMode] = useState<'testimonials' | 'achievements'>('testimonials');
  const sliderRef = useRef<HTMLDivElement>(null);

  // Handle automatic sliding
  useEffect(() => {
    if (displayMode === 'testimonials' && testimonials.length > 1) {
      const interval = setInterval(() => {
        setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [testimonials.length, displayMode]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (displayMode === 'testimonials') {
      if (e.key === 'ArrowRight') {
        setActiveIndex(prev => (prev + 1) % testimonials.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
      }
    }
  };

  if (isLoading) {
    return (
      <section className="testimonials-section">
        <h2>What People Say</h2>
        <div className="testimonial-skeleton">
          <div className="testimonial-content-skeleton">
            <div className="quote-skeleton"></div>
            <div className="author-skeleton"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="testimonials-section">
        <h2>What People Say</h2>
        <div className="error-container">
          <p>Sorry, we couldn't load testimonials. Please try again later.</p>
          <p className="error-message">{error}</p>
        </div>
      </section>
    );
  }

  const noContent = testimonials.length === 0 && achievements.length === 0;

  if (noContent) {
    return (
      <section className="testimonials-section">
        <h2>What People Say</h2>
        <p className="no-content-message">Testimonials coming soon.</p>
      </section>
    );
  }

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>{displayMode === 'testimonials' ? 'What People Say' : 'Achievements'}</h2>

        {testimonials.length > 0 && achievements.length > 0 && (
          <div className="display-toggle">
            <button
              className={`toggle-button ${displayMode === 'testimonials' ? 'active' : ''}`}
              onClick={() => setDisplayMode('testimonials')}
              aria-pressed={displayMode === 'testimonials'}
            >
              Testimonials
            </button>
            <button
              className={`toggle-button ${displayMode === 'achievements' ? 'active' : ''}`}
              onClick={() => setDisplayMode('achievements')}
              aria-pressed={displayMode === 'achievements'}
            >
              Achievements
            </button>
          </div>
        )}
      </div>

      {displayMode === 'testimonials' && testimonials.length > 0 && (
        <div
          className="testimonials-slider"
          ref={sliderRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          role="region"
          aria-label="Testimonials carousel"
        >
          <div
            className="testimonials-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
                aria-hidden={index !== activeIndex}
              >
                <div className="testimonial-content">
                  <blockquote>
                    <p>{testimonial.content}</p>
                  </blockquote>
                  <div className="testimonial-author">
                    {testimonial.avatarUrl && (
                      <div className="author-avatar">
                        <img
                          src={testimonial.avatarUrl}
                          alt={testimonial.name}
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="author-info">
                      <h3>{testimonial.name}</h3>
                      <p>{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {testimonials.length > 1 && (
            <div className="testimonial-controls">
              <button
                className="prev-button"
                onClick={() => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous testimonial"
              >
                <span aria-hidden="true"><-</span>
              </button>

              <div className="dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={index === activeIndex}
                  ></button>
                ))}
              </div>

              <button
                className="next-button"
                onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}
                aria-label="Next testimonial"
              >
                <span aria-hidden="true">-></span>
              </button>
            </div>
          )}
        </div>
      )}

      {displayMode === 'achievements' && achievements.length > 0 && (
        <div className="achievements-grid">
          {achievements.map(achievement => (
            <div key={achievement.id} className="achievement-card">
              {achievement.icon && (
                <div className="achievement-icon">
                  <i className={`icon-${achievement.icon}`} aria-hidden="true"></i>
                </div>
              )}
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <p className="achievement-date">{achievement.date}</p>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Testimonials;
