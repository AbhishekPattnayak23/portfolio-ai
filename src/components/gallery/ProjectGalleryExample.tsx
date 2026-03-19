import React from 'react';
import { ProjectGallery } from './index';
import { GalleryImage } from '../../types/gallery';
import { logger } from '../../utils/logger';

// Sample project data
const projectImages: GalleryImage[] = [
  {
    id: '1',
    src: '/assets/images/projects/project1.svg',
    alt: 'Project 1 Screenshot',
    title: 'Dashboard Interface',
    description: 'Main dashboard interface with analytics',
  },
  {
    id: '2',
    src: '/assets/images/projects/project2.svg',
    alt: 'Project 2 Screenshot',
    title: 'Mobile App',
    description: 'Mobile application UI design',
  },
  {
    id: '3',
    src: '/assets/images/projects/project3.svg',
    alt: 'Project 3 Screenshot',
    title: 'E-commerce Store',
    description: 'Online store product page',
  },
  {
    id: '4',
    src: '/assets/images/projects/project4.svg',
    alt: 'Project 4 Screenshot',
    title: 'Admin Panel',
    description: 'Admin control panel interface',
  },
  // Example of an image that might fail to load
  {
    id: '5',
    src: '/assets/images/projects/nonexistent-image.jpg',
    alt: 'Missing Image',
    title: 'This Image Should Fail',
    description: 'This demonstrates error handling',
  }
];

const ProjectGalleryExample: React.FC = () => {
  const handleImageClick = (image: GalleryImage) => {
    logger.info('Image clicked in example', {
      component: 'ProjectGalleryExample',
      data: { image }
    });
  };

  return (
    <div className="example-container">
      <h1>Project Gallery Example</h1>
      <p>This demonstrates the ProjectGallery component with sample images.</p>

      <ProjectGallery
        images={projectImages}
        title="My Portfolio Projects"
        description="Screenshots and media from my recent projects"
        onImageClick={handleImageClick}
      />
    </div>
  );
};

export default ProjectGalleryExample;
