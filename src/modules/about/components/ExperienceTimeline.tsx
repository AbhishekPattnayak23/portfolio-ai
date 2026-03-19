import React from 'react';
import { ExperienceItem, ExperienceFilter } from '../types';

interface ExperienceTimelineProps {
  items: ExperienceItem[];
  activeFilter: ExperienceFilter;
  filterOptions: ExperienceFilter[];
  onFilterChange: (filter: ExperienceFilter) => void;
}

/**
 * Timeline component for displaying professional experience
 *
 * @param props - Component properties
 * @returns Timeline component with filterable experience items
 */
const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  items,
  activeFilter,
  filterOptions,
  onFilterChange
}) => {
  // Format date from YYYY-MM to Month YYYY
  const formatDate = (dateString: string) => {
    if (!dateString) return '';

    try {
      const [year, month] = dateString.split('-');
      const date = new Date(parseInt(year), parseInt(month) - 1);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    } catch (error) {
      console.error('Error formatting date', error);
      return dateString;
    }
  };

  return (
    <div className="timeline-container">
      <div className="timeline-filters" role="tablist" aria-label="Experience filters">
        {filterOptions.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => onFilterChange(filter)}
            aria-selected={activeFilter === filter}
            role="tab"
          >
            {filter}
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <p>No experience matches the selected filter.</p>
      ) : (
        <div className="timeline">
          {items.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-header">
                <h3 className="timeline-role">{item.role}</h3>
                <span className="timeline-period">
                  {formatDate(item.startDate)} - {item.endDate === "Present" ? item.endDate : formatDate(item.endDate)}
                </span>
              </div>
              <div className="timeline-company">{item.company}</div>
              <div className="timeline-location">{item.location}</div>
              <p className="timeline-description">{item.description}</p>

              <div className="timeline-achievements">
                <h4>Key Achievements</h4>
                <ul>
                  {item.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="timeline-tech">
                {item.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceTimeline;
