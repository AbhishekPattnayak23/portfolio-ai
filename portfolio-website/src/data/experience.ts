import { Experience } from '../types';

export const experienceData: Experience[] = [
  {
    id: 'exp1',
    title: 'Senior Frontend Developer',
    organization: 'Tech Solutions Inc.',
    location: 'San Francisco, CA',
    startDate: '2021-06',
    endDate: null, // Current position
    description: [
      'Lead development of React-based web applications',
      'Implemented component library using TypeScript and Styled Components',
      'Improved site performance by 40% through code optimizations'
    ],
    type: 'work'
  },
  {
    id: 'exp2',
    title: 'Web Developer',
    organization: 'Digital Creatives',
    location: 'Austin, TX',
    startDate: '2019-03',
    endDate: '2021-05',
    description: [
      'Developed responsive websites for various clients',
      'Collaborated with design team to implement UI/UX improvements',
      'Maintained and updated existing client websites'
    ],
    type: 'work'
  },
  {
    id: 'edu1',
    title: 'BS in Computer Science',
    organization: 'University of Technology',
    location: 'Boston, MA',
    startDate: '2015-09',
    endDate: '2019-05',
    description: [
      'Focus on Software Engineering and Web Development',
      'Senior project: Real-time collaborative code editor'
    ],
    type: 'education'
  }
];
