import React from 'react';
import FeaturedProjects from '../projects/FeaturedProjects';
import SkillsHighlight from '../skills/SkillsHighlight';
import '../../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <h1>Hi, I'm John Doe</h1>
          <h2>Full-Stack Developer</h2>
          <p className="hero-description">
            I build beautiful, responsive web applications with modern technologies.
            Passionate about creating exceptional user experiences.
          </p>
          <div className="hero-cta">
            <a href="#featured-projects" className="btn btn-primary">View My Work</a>
            <a href="/contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
      </section>

      <FeaturedProjects />

      <SkillsHighlight />

      <section className="contact-cta-section">
        <div className="container">
          <h2>Interested in working together?</h2>
          <p>Let's build something amazing together!</p>
          <a href="/contact" className="btn btn-large">Get In Touch</a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
