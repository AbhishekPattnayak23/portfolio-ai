import { Project } from '../types/project.types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI Content Generator',
    description: 'A web application that uses GPT-4 to generate blog posts, marketing copy, and other content based on simple prompts. Features include content type selection, tone adjustment, and export options.',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'Node.js', 'Express'],
    imageUrl: '/assets/projects/ai-content-generator.jpg',
    demoUrl: 'https://ai-content-generator.example.com',
    codeUrl: 'https://github.com/example/ai-content-generator',
    category: 'ai',
    featured: true,
    date: '2023-11-15',
    tags: ['GPT-4', 'Content Generation', 'NLP', 'Web App']
  },
  {
    id: '2',
    title: 'Semantic Image Search Engine',
    description: 'A visual search platform that uses computer vision AI to find images based on semantic content rather than just metadata. Users can search by description or upload an image to find similar ones.',
    technologies: ['React', 'Python', 'TensorFlow', 'Flask', 'AWS S3'],
    imageUrl: '/assets/projects/image-search-engine.jpg',
    demoUrl: 'https://semantic-image-search.example.com',
    codeUrl: 'https://github.com/example/semantic-image-search',
    category: 'ai',
    featured: true,
    date: '2023-09-20',
    tags: ['Computer Vision', 'Image Recognition', 'Search Engine', 'Machine Learning']
  },
  {
    id: '3',
    title: 'Conversational AI Assistant',
    description: 'A mobile app featuring a voice-activated AI assistant that can handle complex conversations, remember context, and perform various tasks like setting reminders, answering questions, and controlling smart home devices.',
    technologies: ['React Native', 'TypeScript', 'OpenAI API', 'Firebase', 'Google Assistant API'],
    imageUrl: '/assets/projects/conversational-ai.jpg',
    demoUrl: 'https://conversational-ai.example.com',
    codeUrl: 'https://github.com/example/conversational-ai',
    category: 'mobile',
    featured: false,
    date: '2023-07-10',
    tags: ['Voice AI', 'Chatbot', 'Mobile App', 'Natural Language Processing']
  },
  {
    id: '4',
    title: 'AI-Powered Code Generator',
    description: 'A development tool that generates code based on natural language descriptions. It can convert high-level requirements into functioning code in multiple programming languages and frameworks.',
    technologies: ['Vue.js', 'Python', 'GPT-3.5', 'Django', 'Docker'],
    imageUrl: '/assets/projects/code-generator.jpg',
    demoUrl: 'https://ai-code-generator.example.com',
    codeUrl: 'https://github.com/example/ai-code-generator',
    category: 'web',
    featured: true,
    date: '2023-05-25',
    tags: ['Code Generation', 'Developer Tools', 'GPT', 'Productivity']
  },
  {
    id: '5',
    title: 'Sentiment Analysis Dashboard',
    description: 'A business intelligence tool that uses NLP to analyze customer feedback from multiple sources (social media, reviews, support tickets) and provides actionable insights and sentiment trends over time.',
    technologies: ['React', 'Python', 'BERT', 'FastAPI', 'PostgreSQL', 'D3.js'],
    imageUrl: '/assets/projects/sentiment-analysis.jpg',
    demoUrl: 'https://sentiment-dashboard.example.com',
    codeUrl: 'https://github.com/example/sentiment-dashboard',
    category: 'web',
    featured: false,
    date: '2023-03-12',
    tags: ['Sentiment Analysis', 'Business Intelligence', 'Dashboard', 'NLP']
  },
  {
    id: '6',
    title: 'AI Image Generator',
    description: 'A creative tool that uses generative AI models like DALL-E and Stable Diffusion to create unique images from text descriptions. Features include style transfer, image editing, and batch generation.',
    technologies: ['Angular', 'TypeScript', 'Python', 'Flask', 'TensorFlow', 'Stable Diffusion'],
    imageUrl: '/assets/projects/ai-image-generator.jpg',
    demoUrl: 'https://ai-image-generator.example.com',
    codeUrl: 'https://github.com/example/ai-image-generator',
    category: 'ai',
    featured: false,
    date: '2023-01-30',
    tags: ['Generative AI', 'Image Generation', 'DALL-E', 'Stable Diffusion']
  }
];
