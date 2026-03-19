import { useState, useMemo } from 'react';
import { ExperienceItem, ExperienceFilter } from '../types';

/**
 * Custom hook for filtering experience items by technology category
 *
 * @param items - Array of experience items to filter
 * @returns Object containing filter state and filtered items
 */
export function useExperienceFilter(items: ExperienceItem[]) {
  const [activeFilter, setActiveFilter] = useState<ExperienceFilter>("All");

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") {
      return items;
    }

    return items.filter(item => {
      const techCategories = mapTechnologiesToCategories(item.technologies);
      return techCategories.includes(activeFilter);
    });
  }, [items, activeFilter]);

  return {
    activeFilter,
    setActiveFilter,
    filteredItems,
    filterOptions: ["All", "Frontend", "Backend", "DevOps", "Design"] as ExperienceFilter[]
  };
}

/**
 * Maps technology names to their categories
 * This is a simplified implementation - in a real app, this mapping would be more comprehensive
 */
function mapTechnologiesToCategories(technologies: string[]): ExperienceFilter[] {
  const categoryMap: Record<string, ExperienceFilter> = {
    // Frontend
    "React": "Frontend",
    "TypeScript": "Frontend",
    "JavaScript": "Frontend",
    "HTML5": "Frontend",
    "CSS3": "Frontend",
    "Redux": "Frontend",
    "NextJS": "Frontend",
    "jQuery": "Frontend",
    "SCSS": "Frontend",
    "Webpack": "Frontend",
    "Bootstrap": "Frontend",

    // Backend
    "Node.js": "Backend",
    "Express": "Backend",
    "GraphQL": "Backend",
    "REST": "Backend",

    // DevOps
    "Git": "DevOps",
    "CI/CD": "DevOps",
    "Cypress": "DevOps",
    "Jest": "DevOps",

    // Design
    "a11y": "Design",
    "WordPress": "Design"
  };

  const categories = new Set<ExperienceFilter>();

  technologies.forEach(tech => {
    Object.keys(categoryMap).forEach(key => {
      if (tech.includes(key)) {
        categories.add(categoryMap[key]);
      }
    });
  });

  return Array.from(categories);
}
