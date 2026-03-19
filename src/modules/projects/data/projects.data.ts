import { Project } from '../types/project.types';

/**
 * Sample project data for testing the implementation
 * This data represents a collection of GenAI projects
 */
export const projectsData: Project[] = [
  {
    id: 'p001',
    slug: 'ai-content-generator',
    title: 'AI Content Generator',
    shortDescription: 'An AI-powered content generation tool for marketing teams',
    fullDescription: 'A sophisticated AI content generator that helps marketing teams create high-quality blog posts, social media content, and product descriptions. The system leverages GPT-4 to generate content that matches brand voice and style guides while optimizing for SEO and readability.',
    thumbnail: '/assets/projects/ai-content-gen-thumb.webp',
    images: [
      {
        id: 'img1',
        src: '/assets/projects/ai-content-gen-1.webp',
        alt: 'Content generation interface',
        caption: 'Main dashboard for content generation'
      },
      {
        id: 'img2',
        src: '/assets/projects/ai-content-gen-2.webp',
        alt: 'Content editing features',
        caption: 'AI-assisted content editing and refinement'
      },
      {
        id: 'img3',
        src: '/assets/projects/ai-content-gen-3.webp',
        alt: 'Analytics dashboard',
        caption: 'Content performance analytics'
      }
    ],
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'OpenAI API', category: 'ai' },
      { name: 'MongoDB', category: 'data' },
      { name: 'AWS Lambda', category: 'cloud' }
    ],
    challenges: [
      'Ensuring AI-generated content maintained brand consistency across various outputs',
      'Optimizing API usage to minimize costs while maximizing content quality',
      'Implementing effective content filtering to prevent inappropriate outputs'
    ],
    solutions: [
      'Developed a fine-tuning pipeline to train the model on brand-specific content',
      'Created a caching system and batching mechanism to optimize API calls',
      'Implemented multi-layer content filtering using both AI and rule-based approaches'
    ],
    outcomes: [
      '68% reduction in content creation time for marketing teams',
      '45% increase in content engagement metrics',
      'Successfully deployed to 12 enterprise clients with 97% satisfaction rating'
    ],
    date: '2023-04-15',
    category: ['AI', 'Content Generation', 'Enterprise'],
    featured: true,
    githubUrl: 'https://github.com/username/ai-content-generator',
    liveUrl: 'https://ai-content-generator.example.com',
    relatedProjects: ['p002', 'p003']
  },
  {
    id: 'p002',
    slug: 'sentiment-analysis-dashboard',
    title: 'Customer Sentiment Analysis Dashboard',
    shortDescription: 'Real-time sentiment analysis for customer feedback',
    fullDescription: 'A comprehensive dashboard that processes customer feedback from multiple channels (social media, support tickets, reviews) and provides real-time sentiment analysis. The system uses natural language processing to detect customer sentiment, identify key issues, and track sentiment trends over time.',
    thumbnail: '/assets/projects/sentiment-analysis-thumb.webp',
    images: [
      {
        id: 'img1',
        src: '/assets/projects/sentiment-1.webp',
        alt: 'Sentiment dashboard overview',
        caption: 'Main sentiment analysis dashboard'
      },
      {
        id: 'img2',
        src: '/assets/projects/sentiment-2.webp',
        alt: 'Trend analysis view',
        caption: 'Sentiment trends over time'
      }
    ],
    technologies: [
      { name: 'Vue.js', category: 'frontend' },
      { name: 'Python', category: 'backend' },
      { name: 'Hugging Face', category: 'ai' },
      { name: 'PostgreSQL', category: 'data' },
      { name: 'Docker', category: 'cloud' }
    ],
    challenges: [
      'Processing large volumes of textual data in near real-time',
      'Accurately detecting sentiment in industry-specific contexts',
      'Creating visualizations that provide actionable insights'
    ],
    solutions: [
      'Implemented stream processing architecture with Apache Kafka',
      'Fine-tuned sentiment models on domain-specific data',
      'Designed interactive dashboards with customizable views'
    ],
    outcomes: [
      'Reduced response time to negative feedback by 76%',
      'Improved customer satisfaction scores by 23% within 6 months',
      'Identified 3 critical product issues that were previously undetected'
    ],
    date: '2023-01-20',
    category: ['AI', 'Analytics', 'Customer Experience'],
    featured: false,
    githubUrl: 'https://github.com/username/sentiment-analysis',
    relatedProjects: ['p001', 'p004']
  },
  {
    id: 'p003',
    slug: 'intelligent-chatbot',
    title: 'Intelligent Customer Support Chatbot',
    shortDescription: 'AI-powered customer support chatbot with context awareness',
    fullDescription: 'An advanced customer support chatbot that uses conversational AI to handle customer inquiries. The system maintains context throughout conversations, can access knowledge bases for accurate responses, and seamlessly escalates complex issues to human agents when necessary.',
    thumbnail: '/assets/projects/chatbot-thumb.webp',
    images: [
      {
        id: 'img1',
        src: '/assets/projects/chatbot-1.webp',
        alt: 'Chatbot interface',
        caption: 'Customer-facing chatbot interface'
      },
      {
        id: 'img2',
        src: '/assets/projects/chatbot-2.webp',
        alt: 'Admin dashboard',
        caption: 'Chatbot management dashboard'
      },
      {
        id: 'img3',
        src: '/assets/projects/chatbot-3.webp',
        alt: 'Analytics view',
        caption: 'Conversation analytics and insights'
      }
    ],
    technologies: [
      { name: 'React', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'Rasa', category: 'ai' },
      { name: 'MongoDB', category: 'data' },
      { name: 'AWS', category: 'cloud' }
    ],
    challenges: [
      'Maintaining conversation context over extended interactions',
      'Integrating with existing knowledge bases and support systems',
      'Creating a seamless handoff process between AI and human agents'
    ],
    solutions: [
      'Developed a context management system that tracks conversation history',
      'Built connectors to integrate with knowledge bases and CRM systems',
      'Created an intelligent routing system for human escalation'
    ],
    outcomes: [
      'Successfully automated 78% of routine customer inquiries',
      'Reduced average response time from 15 minutes to 45 seconds',
      'Saved an estimated 2,500 agent hours per month'
    ],
    date: '2022-11-05',
    category: ['AI', 'Customer Support', 'Conversational AI'],
    featured: true,
    githubUrl: 'https://github.com/username/intelligent-chatbot',
    liveUrl: 'https://demo-chatbot.example.com',
    relatedProjects: ['p001', 'p002']
  },
  {
    id: 'p004',
    slug: 'image-generation-api',
    title: 'AI Image Generation API',
    shortDescription: 'Custom API for generating product images from text descriptions',
    fullDescription: 'A specialized API that generates product images based on textual descriptions. The system was designed for e-commerce clients who need to quickly create product mockups and visualizations without traditional photography or design work.',
    thumbnail: '/assets/projects/image-gen-thumb.webp',
    images: [
      {
        id: 'img1',
        src: '/assets/projects/image-gen-1.webp',
        alt: 'Generated product images',
        caption: 'Sample of AI-generated product images'
      },
      {
        id: 'img2',
        src: '/assets/projects/image-gen-2.webp',
        alt: 'API documentation',
        caption: 'API documentation and integration examples'
      }
    ],
    technologies: [
      { name: 'FastAPI', category: 'backend' },
      { name: 'Python', category: 'backend' },
      { name: 'Stable Diffusion', category: 'ai' },
      { name: 'Redis', category: 'data' },
      { name: 'Google Cloud', category: 'cloud' }
    ],
    challenges: [
      'Generating photorealistic product images from text descriptions',
      'Optimizing inference time to provide near real-time results',
      'Creating a scalable architecture to handle varying demand'
    ],
    solutions: [
      'Fine-tuned Stable Diffusion models on product-specific datasets',
      'Implemented model optimization techniques including distillation',
      'Designed an autoscaling infrastructure using Kubernetes'
    ],
    outcomes: [
      'Reduced product photography costs by 85% for client companies',
      'Decreased time-to-market for new products from days to minutes',
      'Achieved 92% user satisfaction rating with image quality'
    ],
    date: '2023-03-10',
    category: ['AI', 'Image Generation', 'E-commerce'],
    featured: false,
    githubUrl: 'https://github.com/username/image-generation-api',
    relatedProjects: ['p001']
  }
];

/**
 * Helper function to get a project by ID
 */
export function getProjectById(id: string): Project | undefined {
  return projectsData.find(project => project.id === id);
}

/**
 * Helper function to get a project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find(project => project.slug === slug);
}

/**
 * Helper function to get related projects
 */
export function getRelatedProjects(project: Project): Project[] {
  if (!project.relatedProjects || project.relatedProjects.length === 0) {
    return [];
  }

  return projectsData.filter(p => project.relatedProjects?.includes(p.id));
}
