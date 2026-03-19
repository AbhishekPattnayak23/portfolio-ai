import React from 'react';
import GenAISkills from './GenAISkills';

/**
 * Demo component to showcase the GenAISkills component with sample data
 */
const GenAISkillsDemo = () => {
  // Sample skills data
  const genaiSkills = [
    {
      id: 1,
      name: 'Prompt Engineering',
      icon: '',
      proficiency: 5,
      description: 'Crafting effective prompts for optimal AI responses'
    },
    {
      id: 2,
      name: 'LLM Fine-tuning',
      icon: '',
      proficiency: 4,
      description: 'Customizing language models for specific applications'
    },
    {
      id: 3,
      name: 'RAG Implementation',
      icon: '',
      proficiency: 4,
      description: 'Retrieval-Augmented Generation for knowledge-based AI'
    },
    {
      id: 4,
      name: 'Vector Databases',
      icon: '',
      proficiency: 3,
      description: 'Working with embeddings and similarity search'
    },
    {
      id: 5,
      name: 'Multimodal AI',
      icon: '',
      proficiency: 4,
      description: 'Text, image, and audio generation and analysis'
    },
    {
      id: 6,
      name: 'AI Agents',
      icon: '',
      proficiency: 5,
      description: 'Building autonomous AI systems with tools and reasoning'
    }
  ];

  // Handler for skill clicks (optional functionality)
  const handleSkillClick = (skill) => {
    console.log('Skill clicked:', skill);
    // You could show more details, open a modal, etc.
  };

  return (
    <div className="demo-container">
      <GenAISkills
        title="Generative AI Expertise"
        skills={genaiSkills}
        onSkillClick={handleSkillClick}
      />

      {/* Example with empty skills for testing error handling */}
      <GenAISkills title="Empty Skills Test" skills={[]} />

      {/* Example with no props for testing defaults */}
      <GenAISkills />
    </div>
  );
};

export default GenAISkillsDemo;
