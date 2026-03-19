import { ExperienceItem, Education } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    startDate: "2021-03",
    endDate: "Present",
    description: "Lead frontend development for enterprise SaaS applications, focusing on performance optimization and accessibility.",
    achievements: [
      "Reduced application load time by 45% through code splitting and lazy loading",
      "Implemented comprehensive component testing strategy increasing test coverage to 92%",
      "Mentored junior developers and established frontend best practices"
    ],
    technologies: ["React", "TypeScript", "NextJS", "GraphQL", "Jest", "Cypress"]
  },
  {
    id: "exp-2",
    role: "Frontend Developer",
    company: "Digital Innovators Inc.",
    location: "Seattle, WA",
    startDate: "2018-06",
    endDate: "2021-02",
    description: "Developed responsive web applications with focus on user experience and performance.",
    achievements: [
      "Built and maintained design system used across 5 company products",
      "Implemented state management solution that improved development velocity by 30%",
      "Collaborated with UX team to improve accessibility compliance"
    ],
    technologies: ["React", "JavaScript", "Redux", "SCSS", "Webpack", "a11y"]
  },
  {
    id: "exp-3",
    role: "Web Developer",
    company: "CreativeTech Agency",
    location: "Portland, OR",
    startDate: "2016-09",
    endDate: "2018-05",
    description: "Created interactive websites and web applications for diverse client portfolio.",
    achievements: [
      "Developed 12+ responsive websites for clients across various industries",
      "Implemented CI/CD pipelines reducing deployment time by 70%",
      "Introduced modern frontend tools and practices to the development team"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "WordPress"]
  }
];

export const educationData: Education[] = [
  {
    institution: "University of Technology",
    degree: "Bachelor of Science",
    field: "Computer Science",
    graduationDate: "2016"
  },
  {
    institution: "Frontend Masters Academy",
    degree: "Professional Certificate",
    field: "Advanced Frontend Development",
    graduationDate: "2018"
  }
];
