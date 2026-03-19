import React from 'react';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import SkillsShowcase from './components/SkillsShowcase';
import Testimonials from './components/Testimonials';
import useFeaturedContent from './hooks/useFeaturedContent';

const Home: React.FC = () => {
  const {
    projects,
    skills,
    testimonials,
    achievements,
    isLoading,
    error
  } = useFeaturedContent();

  return (
    <div className="home-container">
      <Hero />

      <FeaturedProjects
        projects={projects}
        isLoading={isLoading}
        error={error}
      />

      <SkillsShowcase
        skills={skills}
        isLoading={isLoading}
        error={error}
      />

      <Testimonials
        testimonials={testimonials}
        achievements={achievements}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default Home;
