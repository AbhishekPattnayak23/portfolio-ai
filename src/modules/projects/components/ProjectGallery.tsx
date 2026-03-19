import React, { useState, useCallback, useEffect } from 'react';
import { ProjectImage } from '../types/project.types';

/**
 * ProjectGallery component props interface
 */
interface ProjectGalleryProps {
  images: ProjectImage[];
}

/**
 * Project Gallery Component
 *
 * Displays a gallery of project images with navigation controls
 * Includes:
 * - Image carousel with navigation arrows
 * - Thumbnail navigation
 * - Caption display
 * - Responsive image loading
 */
const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Handle case where no images are provided
  if (!images || images.length === 0) {
    return (
      <div className="project-gallery project-gallery-empty">
        <div className="gallery-placeholder">
          <p>No images available for this project</p>
        </div>
      </div>
    );
  }

  // Navigate to the previous image
  const handlePrevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsLoading(true);
  }, [images.length]);

  // Navigate to the next image
  const handleNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setIsLoading(true);
  }, [images.length]);

  // Navigate to a specific image by clicking on its thumbnail
  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsLoading(true);
  };

  // Handle image load event
  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  // Handle image error event
  const handleImageError = () => {
    setIsLoading(false);
    setError('Failed to load image');
  };

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handlePrevImage, handleNextImage]);

  // Current image
  const currentImage = images[currentImageIndex];

  return (
    <div className="project-gallery">
      <div className="gallery-main-container">
        {/* Loading indicator */}
        {isLoading && (
          <div className="gallery-loading">
            <div className="loading-spinner"></div>
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="gallery-error">
            <p>{error}</p>
          </div>
        )}

        {/* Main image display */}
        <div className="gallery-main-image">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            onLoad={handleImageLoaded}
            onError={handleImageError}
            style={{ opacity: isLoading ? 0 : 1 }}
          />

          {/* Navigation arrows */}
          <button
            className="gallery-nav-button prev"
            onClick={handlePrevImage}
            aria-label="Previous image"
          >
            <span className="nav-arrow"><-</span>
          </button>

          <button
            className="gallery-nav-button next"
            onClick={handleNextImage}
            aria-label="Next image"
          >
            <span className="nav-arrow">-></span>
          </button>
        </div>

        {/* Image caption */}
        {currentImage.caption && (
          <div className="gallery-caption">
            <p>{currentImage.caption}</p>
          </div>
        )}
      </div>

      {/* Thumbnails for navigation */}
      {images.length > 1 && (
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`gallery-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
