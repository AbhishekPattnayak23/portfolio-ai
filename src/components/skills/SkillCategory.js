import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/SkillCategory.css';

const SkillCategory = ({ category, items }) => {
  return (
    <div className="skill-category">
      <h3 className="category-title">{category}</h3>
      <div className="skills-container">
        {items.map((skill, index) => (
          <span key={index} className="skill-item">{skill}</span>
        ))}
      </div>
    </div>
  );
};

SkillCategory.propTypes = {
  category: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SkillCategory;
