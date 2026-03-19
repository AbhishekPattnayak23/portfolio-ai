import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../../data/projects';
import '../../styles/FeaturedProjects.css';

const FeaturedProjects = () => {
  // Filter only featured projects
  const featuredProjects = projectsData.filter(project => project.featured);

  return (
    <section className="featured-projects-section" id="featured-projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="featured-projects-grid">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="view-all-projects">
          <a href="/projects" className="btn btn-primary">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
