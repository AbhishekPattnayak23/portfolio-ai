import React from 'react';
import Card from './Card';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import Logger from '../../utils/logger';

const logger = new Logger('SkillCard');

export interface Skill {
  id: string;
  name: string;
  icon?: string;
  proficiency?: number; // 0-100
  description?: string;
  yearsOfExperience?: number;
}

export interface SkillCardProps {
  skill: Skill;
  className?: string;
  compact?: boolean;
  'data-testid'?: string;
}

/**
 * SkillCard displays information about a skill with optional progress bar
 */
const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  className = '',
  compact = false,
  'data-testid': dataTestId = 'skill-card',
}) => {
  logger.debug('Rendering SkillCard component', { skillId: skill.id, compact });

  // Validate skill data
  if (!skill || !skill.name) {
    logger.error('SkillCard received invalid skill data', { skill });
    return <div className="error-card">Invalid skill data</div>;
  }

  return (
    <Card
      className={`skill-card ${className}`}
      data-testid={dataTestId}
      elevation="low"
      width={compact ? '200px' : '100%'}
    >
      <CardHeader className="d-flex align-items-center">
        {skill.icon && (
          <div className="skill-icon me-2">
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              width="24"
              height="24"
              onError={(e) => {
                logger.error('Failed to load skill icon', { skillId: skill.id });
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}
        <h5 className="card-title m-0">{skill.name}</h5>

        {skill.yearsOfExperience !== undefined && !compact && (
          <span className="ms-auto badge bg-secondary">
            {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? 'year' : 'years'}
          </span>
        )}
      </CardHeader>

      {!compact && (
        <CardBody>
          {skill.description && <p className="card-text">{skill.description}</p>}

          {skill.proficiency !== undefined && (
            <div className="skill-proficiency mt-2">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${skill.proficiency}%` }}
                  aria-valuenow={skill.proficiency}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  {skill.proficiency}%
                </div>
              </div>
            </div>
          )}
        </CardBody>
      )}
    </Card>
  );
};

export default SkillCard;
