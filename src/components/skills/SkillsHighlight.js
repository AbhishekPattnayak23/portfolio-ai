import React from 'react';
import SkillCategory from './SkillCategory';
import skills from '../../data/skills';
import '../../styles/SkillsHighlight.css';

const SkillsHighlight = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="technical-skills">
          <h3 className="skills-subtitle">Technical Skills</h3>
          <div className="skills-grid">
            {skills.technical.map((skillGroup, index) => (
              <SkillCategory
                key={index}
                category={skillGroup.category}
                items={skillGroup.items}
              />
            ))}
          </div>
        </div>

        <div className="soft-skills">
          <h3 className="skills-subtitle">Soft Skills</h3>
          <div className="soft-skills-container">
            {skills.soft.map((skill, index) => (
              <span key={index} className="soft-skill-item">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skills-cta">
          <a href="/resume" className="btn btn-secondary">View Full Resume</a>
        </div>
      </div>
    </section>
  );
};

export default SkillsHighlight;
