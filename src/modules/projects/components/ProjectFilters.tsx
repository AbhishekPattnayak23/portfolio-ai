import React from 'react';
import { ProjectFilters as Filters, SortOption } from '../types/project.types';
import styles from './ProjectFilters.module.css';

interface ProjectFiltersProps {
  filters: Filters;
  allTags: string[];
  onSearchChange: (search: string) => void;
  onCategoryToggle: (category: 'web' | 'mobile' | 'ai' | 'other') => void;
  onTagToggle: (tag: string) => void;
  onSortChange: (sort: SortOption) => void;
  onReset: () => void;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  filters,
  allTags,
  onSearchChange,
  onCategoryToggle,
  onTagToggle,
  onSortChange,
  onReset,
}) => {
  return (
    <div className={styles.filtersContainer}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search projects..."
          value={filters.search}
          onChange={(e) => onSearchChange(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.filterGroup}>
        <h3 className={styles.filterTitle}>Categories</h3>
        <div className={styles.categoryOptions}>
          {(['web', 'mobile', 'ai', 'other'] as const).map((category) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${
                filters.categories.includes(category) ? styles.active : ''
              }`}
              onClick={() => onCategoryToggle(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.filterGroup}>
        <h3 className={styles.filterTitle}>Tags</h3>
        <div className={styles.tagOptions}>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`${styles.tagButton} ${
                filters.tags.includes(tag) ? styles.active : ''
              }`}
              onClick={() => onTagToggle(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.filterGroup}>
        <h3 className={styles.filterTitle}>Sort</h3>
        <select
          value={filters.sort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className={styles.sortSelect}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
      </div>

      <button onClick={onReset} className={styles.resetButton}>
        Reset Filters
      </button>
    </div>
  );
};

export default ProjectFilters;
