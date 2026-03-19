import { Project } from '../modules/Projects/types';

export const projects: Project[] = [
  {
    id: "1",
    title: "AI Content Generator",
    description: "An intelligent content generation tool that creates high-quality articles, blog posts, and marketing copy based on simple user inputs.",
    imageUrl: "/assets/projects/ai-content-generator.jpg",
    technologies: ["React", "TypeScript", "OpenAI API", "Node.js"],
    projectType: "Web Application",
    demoUrl: "https://ai-content-generator.example.com",
    githubUrl: "https://github.com/example/ai-content-generator",
    featured: true
  },
  {
    id: "2",
    title: "Sentiment Analysis Dashboard",
    description: "Real-time sentiment analysis dashboard that processes social media feeds and customer feedback to provide actionable insights.",
    imageUrl: "/assets/projects/sentiment-analysis.jpg",
    technologies: ["React", "Python", "TensorFlow", "AWS"],
    projectType: "Data Analytics",
    demoUrl: "https://sentiment-dashboard.example.com",
    githubUrl: "https://github.com/example/sentiment-analysis",
    featured: true
  },
  {
    id: "3",
    title: "Smart Document Classifier",
    description: "An AI-powered document classification system that automatically organizes and tags documents based on content.",
    imageUrl: "/assets/projects/document-classifier.jpg",
    technologies: ["Python", "PyTorch", "Flask", "MongoDB"],
    projectType: "Machine Learning",
    demoUrl: "https://doc-classifier.example.com",
    githubUrl: "https://github.com/example/document-classifier",
    featured: false
  },
  {
    id: "4",
    title: "Voice-Controlled Assistant",
    description: "A voice-controlled virtual assistant that performs tasks, answers questions, and controls smart home devices.",
    imageUrl: "/assets/projects/voice-assistant.jpg",
    technologies: ["React Native", "Node.js", "TensorFlow.js", "Google Speech API"],
    projectType: "Mobile Application",
    demoUrl: "https://voice-assistant.example.com",
    githubUrl: "https://github.com/example/voice-assistant",
    featured: false
  },
  {
    id: "5",
    title: "Image Recognition API",
    description: "A RESTful API that provides image recognition and classification services for user-uploaded images.",
    imageUrl: "/assets/projects/image-recognition.jpg",
    technologies: ["Python", "FastAPI", "PyTorch", "Docker"],
    projectType: "API Service",
    demoUrl: "https://image-api.example.com",
    githubUrl: "https://github.com/example/image-recognition",
    featured: false
  },
  {
    id: "6",
    title: "Chatbot Platform",
    description: "A customizable chatbot platform that allows businesses to create intelligent conversational agents for customer service.",
    imageUrl: "/assets/projects/chatbot-platform.jpg",
    technologies: ["React", "Node.js", "MongoDB", "NLP.js"],
    projectType: "Web Application",
    demoUrl: "https://chatbot-platform.example.com",
    githubUrl: "https://github.com/example/chatbot-platform",
    featured: true
  },
  {
    id: "7",
    title: "Predictive Analytics Tool",
    description: "A predictive analytics tool that uses machine learning to forecast business metrics and identify trends.",
    imageUrl: "/assets/projects/predictive-analytics.jpg",
    technologies: ["React", "Python", "Scikit-learn", "PostgreSQL"],
    projectType: "Data Analytics",
    demoUrl: "https://predictive-analytics.example.com",
    githubUrl: "https://github.com/example/predictive-analytics",
    featured: false
  },
  {
    id: "8",
    title: "Neural Art Generator",
    description: "An application that uses neural style transfer to transform photos into artwork in the style of famous artists.",
    imageUrl: "/assets/projects/neural-art.jpg",
    technologies: ["React", "TensorFlow.js", "Canvas API", "Node.js"],
    projectType: "Creative Tool",
    demoUrl: "https://neural-art.example.com",
    githubUrl: "https://github.com/example/neural-art",
    featured: false
  }
];

// Extract unique technologies from projects
export const getAllTechnologies = (): string[] => {
  const techSet = new Set<string>();
  projects.forEach(project => {
    project.technologies.forEach(tech => techSet.add(tech));
  });
  return Array.from(techSet).sort();
};

// Extract unique project types from projects
export const getAllProjectTypes = (): string[] => {
  const typeSet = new Set<string>();
  projects.forEach(project => {
    typeSet.add(project.projectType);
  });
  return Array.from(typeSet).sort();
};
