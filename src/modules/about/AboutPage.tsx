import React, { useState } from 'react';
import { Helmet } from 'react-helmet'; // Assuming you're using react-helmet for SEO
import AboutSection from './components/AboutSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import { experienceData, educationData } from './data/experience';
import { skillsData, interests } from './data/skills';
import { useExperienceFilter } from './hooks/useExperienceFilter';
import './styles/AboutPage.css';

/**
 * About page component that displays developer's background,
 * experience, education, skills and interests
 *
 * @returns Complete About page component
 */
const AboutPage: React.FC = () => {
  const {
    activeFilter,
    setActiveFilter,
    filteredItems,
    filterOptions
  } = useExperienceFilter(experienceData);

  // Group skills by category
  const skillsByCategory = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skillsData>);

  return (
    <>
      <Helmet>
        <title>About Me - Professional Background & Experience</title>
        <meta
          name="description"
          content="Learn about my professional background, skills, and experience in frontend development, web technologies, and software engineering."
        />
      </Helmet>

      <div className="about-container">
        <header className="about-header">
          <h1 className="about-title">About Me</h1>
          <p className="about-subtitle">
            Frontend developer with over 5 years of experience building responsive,
            accessible, and performance-optimized web applications
          </p>
        </header>

        <AboutSection title="Professional Journey" id="bio">
          <div className="bio-container">
            <div className="bio-text">
              <p>
                I'm a passionate frontend developer who specializes in creating
                intuitive and performant user interfaces. With over 5 years of
                experience in the industry, I've worked on a wide range of projects
                from small business websites to large-scale enterprise applications.
              </p>
              <p>
                My approach to development focuses on creating accessible,
                responsive, and maintainable code that provides an excellent user
                experience. I'm constantly learning and adapting to new technologies
                and best practices in the ever-evolving web development landscape.
              </p>
              <p>
                Beyond coding, I'm committed to sharing knowledge with the development
                community through mentorship, blog posts, and open source contributions.
              </p>
            </div>
            <div className="bio-text">
              <p>
                I believe that great software is not just about writing code, but
                about solving real problems for users. This philosophy guides my
                development process from planning to implementation.
              </p>
              <p>
                My technical expertise includes modern JavaScript frameworks like
                React, state management solutions, and building responsive layouts
                with CSS. I'm also experienced in optimizing web performance, implementing
                accessibility features, and following best practices for SEO.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source projects, or enjoying outdoor activities
                to maintain a healthy work-life balance.
              </p>
            </div>
          </div>
        </AboutSection>

        <AboutSection title="Experience" id="experience">
          <ExperienceTimeline
            items={filteredItems}
            activeFilter={activeFilter}
            filterOptions={filterOptions}
            onFilterChange={setActiveFilter}
          />
        </AboutSection>

        <AboutSection title="Skills & Expertise" id="skills">
          <div className="skills-container">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <div key={category} className="skills-category">
                <h3 className="skills-category-title">{category}</h3>
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </AboutSection>

        <AboutSection title="Education" id="education">
          <div className="education-container">
            {educationData.map((edu, index) => (
              <div key={index} className="education-item">
                <h3 className="education-institution">{edu.institution}</h3>
                <div className="education-degree">{edu.degree}</div>
                <div className="education-field">{edu.field}</div>
                <div className="education-date">{edu.graduationDate}</div>
              </div>
            ))}
          </div>
        </AboutSection>

        <AboutSection title="Interests & Focus Areas" id="interests">
          <div className="interests-container">
            {interests.map((interest, index) => (
              <span key={index} className="interest-tag">
                {interest}
              </span>
            ))}
          </div>
        </AboutSection>
      </div>
    </>
  );
};

export default AboutPage;
