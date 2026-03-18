import { ProjectData } from '../types/ProjectTypes';

export const projects: ProjectData[] = [
  {
    id: 'genai-chatbot',
    title: 'AI Conversational Assistant',
    description: 'An advanced conversational AI chatbot built with GPT-4, capable of natural dialogue and complex task assistance. Features context-awareness and personalized responses.',
    imageUrl: '/images/projects/chatbot-project.jpg',
    tags: ['GPT-4', 'NLP', 'React', 'Node.js'],
    projectLink: 'https://example.com/chatbot',
    githubLink: 'https://github.com/example/ai-chatbot',
    featured: true
  },
  {
    id: 'image-generator',
    title: 'AI Image Generator',
    description: 'Creative image generation tool powered by Stable Diffusion. Generate unique artwork and realistic images from text prompts with fine-tuned control over style and composition.',
    imageUrl: '/images/projects/image-gen-project.jpg',
    tags: ['Stable Diffusion', 'Python', 'TensorFlow', 'Flask'],
    projectLink: 'https://example.com/image-generator',
    githubLink: 'https://github.com/example/image-generator',
    featured: true
  },
  {
    id: 'code-assistant',
    title: 'AI Code Assistant',
    description: 'Developer productivity tool that suggests code completions, refactors existing code, and helps debug issues across multiple programming languages.',
    imageUrl: '/images/projects/code-assistant-project.jpg',
    tags: ['LLM', 'CodeLlama', 'TypeScript', 'VSCode Extension'],
    projectLink: 'https://example.com/code-assistant',
    githubLink: 'https://github.com/example/code-assistant',
    featured: true
  },
  {
    id: 'sentiment-analysis',
    title: 'Social Media Sentiment Analyzer',
    description: 'Real-time sentiment analysis tool for social media posts using fine-tuned BERT models. Tracks brand perception and identifies trends in customer feedback.',
    imageUrl: '/images/projects/sentiment-project.jpg',
    tags: ['BERT', 'NLP', 'Python', 'React'],
    projectLink: 'https://example.com/sentiment',
    githubLink: 'https://github.com/example/sentiment-analyzer',
    featured: false
  }
];

export const getFeaturedProjects = (): ProjectData[] => {
  return projects.filter(project => project.featured);
};

export const getProjectById = (id: string): ProjectData | undefined => {
  return projects.find(project => project.id === id);
};
