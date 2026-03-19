import React, { useState } from 'react';
import { GalleryProps, GalleryImage as GalleryImageType } from '../../types/gallery';
import GalleryImage from './GalleryImage';
import useImageLoader from '../../hooks/useImageLoader';
import { logger } from '../../utils/logger';

const ProjectGallery: React.FC<GalleryProps> = ({
  images = [],
  title,
  description,
  className = '',
  onImageClick,
  loading: externalLoading,
  error: externalError,
}) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImageType | null>(null);
  const { loadedImages, loading, error } = useImageLoader({ images });

  const isLoading = externalLoading !== undefined ? externalLoading : loading;
  const hasError = externalError || error;

  const handleImageClick = (image: GalleryImageType) => {
    setSelectedImage(image);

    if (onImageClick) {
      onImageClick(image);
    }

    logger.info(`Image selected: ${image.title || image.alt}`, {
      component: 'ProjectGallery',
      data: { imageId: image.id }
    });
  };

  const closeModal = () => {
    setSelectedImage(null);
    logger.debug('Gallery modal closed', { component: 'ProjectGallery' });
  };

  return (
    <div className={`project-gallery ${className}`} data-testid="project-gallery">
      {title && <h2 className="gallery-title">{title}</h2>}
      {description && <p className="gallery-description">{description}</p>}

      {isLoading && (
        <div className="gallery-loading" data-testid="gallery-loading">
          <div className="loading-spinner"></div>
          <p>Loading gallery...</p>
        </div>
      )}

      {hasError && !isLoading && (
        <div className="gallery-error" data-testid="gallery-error">
          <p>Error: {hasError}</p>
          <button
            onClick={() => window.location.reload()}
            className="gallery-retry-btn"
          >
            Retry
          </button>
        </div>
      )}

      {!isLoading && !hasError && loadedImages.length === 0 && (
        <div className="gallery-empty" data-testid="gallery-empty">
          <p>No images to display</p>
        </div>
      )}

      {!isLoading && !hasError && loadedImages.length > 0 && (
        <div className="gallery-grid" data-testid="gallery-grid">
          {loadedImages.map((image) => (
            <GalleryImage
              key={image.id}
              image={image}
              onClick={handleImageClick}
              className="gallery-grid-item"
            />
          ))}
        </div>
      )}

      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal} data-testid="gallery-modal">
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            {selectedImage.title && (
              <div className="gallery-modal-caption">
                <h3>{selectedImage.title}</h3>
                {selectedImage.description && <p>{selectedImage.description}</p>}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
