import { useState, useEffect } from 'react';
import {
  featuredProjects,
  skills,
  testimonials,
  achievements,
  Project,
  Skill,
  Testimonial,
  Achievement
} from '../data/featuredData';

interface FeaturedContent {
  projects: Project[];
  skills: Skill[];
  testimonials: Testimonial[];
  achievements: Achievement[];
  isLoading: boolean;
  error: string | null;
}

export const useFeaturedContent = () => {
  const [content, setContent] = useState<FeaturedContent>({
    projects: [],
    skills: [],
    testimonials: [],
    achievements: [],
    isLoading: true,
    error: null
  });

  useEffect(() => {
    // Simulate loading from an API
    const fetchData = async () => {
      try {
        // Artificial delay to simulate network request
        await new Promise(resolve => setTimeout(resolve, 500));

        // Get only featured projects
        const featured = featuredProjects.filter(project => project.featured);

        setContent({
          projects: featured,
          skills: skills,
          testimonials: testimonials,
          achievements: achievements,
          isLoading: false,
          error: null
        });
      } catch (error) {
        setContent(prev => ({
          ...prev,
          isLoading: false,
          error: "Failed to load featured content"
        }));
      }
    };

    fetchData();
  }, []);

  return content;
};

export default useFeaturedContent;
