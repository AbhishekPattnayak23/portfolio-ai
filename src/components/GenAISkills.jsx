import React from 'react';
import PropTypes from 'prop-types';
import './GenAISkills.css';

/**
 * GenAISkills Component
 *
 * Displays a section highlighting key skills related to GenAI with icons and proficiency levels
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {Array} props.skills - Array of skill objects
 * @param {Function} props.onSkillClick - Optional callback when a skill is clicked
 */
const GenAISkills = ({ title = "GenAI Skills", skills = [], onSkillClick }) => {
  // Validate skills data to prevent rendering errors
  const validatedSkills = React.useMemo(() => {
    return skills.filter(skill => {
      const isValid = skill &&
                     typeof skill.name === 'string' &&
                     typeof skill.icon === 'string' &&
                     typeof skill.proficiency === 'number';

      if (!isValid) {
        console.error('Invalid skill data:', skill);
      }

      return isValid;
    });
  }, [skills]);

  // Function to render proficiency level bars
  const renderProficiencyLevel = (level) => {
    // Ensure level is within bounds (1-5)
    const validLevel = Math.max(1, Math.min(5, level));
    const bars = [];

    for (let i = 1; i <= 5; i++) {
      bars.push(
        <div
          key={i}
          className={`proficiency-bar ${i <= validLevel ? 'filled' : 'empty'}`}
          aria-hidden="true"
        />
      );
    }

    return (
      <div className="proficiency-bars" role="meter" aria-valuenow={validLevel} aria-valuemin="1" aria-valuemax="5">
        {bars}
        <span className="sr-only">Proficiency level: {validLevel} out of 5</span>
      </div>
    );
  };

  return (
    <section className="genai-skills-section" aria-labelledby="genai-skills-title">
      <h2 id="genai-skills-title">{title}</h2>

      {validatedSkills.length === 0 ? (
        <div className="no-skills-message">No skills data available</div>
      ) : (
        <div className="skills-container">
          {validatedSkills.map((skill) => (
            <div
              key={skill.id || skill.name}
              className="skill-item"
              onClick={() => onSkillClick && onSkillClick(skill)}
              tabIndex={onSkillClick ? 0 : -1}
              role={onSkillClick ? "button" : undefined}
            >
              <div className="skill-icon" aria-hidden="true">
                {skill.icon}
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-proficiency">
                  {renderProficiencyLevel(skill.proficiency)}
                </div>
                {skill.description && (
                  <p className="skill-description">{skill.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

// PropTypes for documentation and development validation
GenAISkills.propTypes = {
  title: PropTypes.string,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      proficiency: PropTypes.number.isRequired,
      description: PropTypes.string
    })
  ),
  onSkillClick: PropTypes.func
};

export default GenAISkills;
