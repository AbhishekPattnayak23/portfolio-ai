import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from './components/HeroSection';
import FeaturedProjects from './components/FeaturedProjects';
import { getFeaturedProjects } from '../../data/projects';
import './styles.css';

/**
 * HomePage component - Main entry point for the portfolio website
 * Integrates hero section and featured projects components
 */
const HomePage: React.FC = () => {
  // Get featured projects from data
  const featuredProjects = getFeaturedProjects();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Personal information for the hero section
  const personalInfo = {
    name: "John Doe",
    title: "Full Stack Developer",
    summary: "I'm a passionate developer specializing in creating modern web applications with React, TypeScript, and Node.js. With 5+ years of experience, I focus on building responsive, accessible, and performant user experiences.",
    imageUrl: "/assets/images/profile.jpg",
  };

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>John Doe | Full Stack Developer Portfolio</title>
        <meta name="description" content="Portfolio of John Doe, a Full Stack Developer specializing in React, TypeScript, and Node.js applications" />
        <meta name="keywords" content="web developer, full stack developer, react developer, typescript, portfolio" />
        <meta property="og:title" content="John Doe | Full Stack Developer Portfolio" />
        <meta property="og:description" content="Portfolio of John Doe, a Full Stack Developer specializing in React, TypeScript, and Node.js applications" />
        <meta property="og:image" content="/assets/images/profile.jpg" />
        <meta property="og:url" content="https://johndoe-portfolio.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        {/* Hero Section with introduction */}
        <HeroSection
          name={personalInfo.name}
          title={personalInfo.title}
          summary={personalInfo.summary}
          imageUrl={personalInfo.imageUrl}
        />

        {/* Featured Projects Section */}
        <FeaturedProjects projects={featuredProjects} />
      </main>
    </>
  );
};

export default HomePage;
