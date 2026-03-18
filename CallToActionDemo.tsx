import React from 'react';
import CallToAction from './CallToAction';

const CallToActionDemo: React.FC = () => {
  const handlePortfolioClick = () => {
    console.log('Portfolio button clicked!');
    // Navigate to portfolio section or page
  };

  const handleContactClick = () => {
    console.log('Contact button clicked!');
    // Navigate to contact section or page
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1>Call-to-Action Component Demo</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Default CallToAction</h2>
        <CallToAction />
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>CallToAction with Custom Handlers</h2>
        <CallToAction
          onPortfolioClick={handlePortfolioClick}
          onContactClick={handleContactClick}
          resumeUrl="/demo-resume.pdf"
        />
      </section>

      <div id="portfolio" style={{ marginTop: '100vh', padding: '2rem', background: '#f0f0f0' }}>
        <h2>Portfolio Section</h2>
        <p>This is where your portfolio content would appear.</p>
      </div>

      <div id="contact" style={{ marginTop: '100vh', padding: '2rem', background: '#e0e0e0' }}>
        <h2>Contact Section</h2>
        <p>This is where your contact form would appear.</p>
      </div>
    </div>
  );
};

export default CallToActionDemo;
