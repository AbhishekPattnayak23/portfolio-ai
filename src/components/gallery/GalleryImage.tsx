import React, { useState } from 'react';
import { GalleryImage as GalleryImageType } from '../../types/gallery';
import { logger } from '../../utils/logger';

interface GalleryImageProps {
  image: GalleryImageType;
  onClick?: (image: GalleryImageType) => void;
  className?: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({
  image,
  onClick,
  className = '',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    logger.debug(`Image loaded: ${image.title || image.alt}`, {
      component: 'GalleryImage',
      data: { imageId: image.id }
    });
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    logger.error(`Failed to load image: ${image.src}`, new Error('Image loading error'), {
      component: 'GalleryImage',
      data: { imageId: image.id }
    });
  };

  const handleClick = () => {
    if (onClick) {
      logger.debug(`Image clicked: ${image.title || image.alt}`, {
        component: 'GalleryImage',
        data: { imageId: image.id }
      });
      onClick(image);
    }
  };

  return (
    <div
      className={`gallery-image-wrapper ${className} ${isLoaded ? 'loaded' : 'loading'} ${hasError ? 'error' : ''}`}
      data-testid="gallery-image-item"
    >
      {!isLoaded && !hasError && (
        <div className="gallery-image-placeholder">
          <div className="loading-spinner"></div>
        </div>
      )}

      {hasError && (
        <div className="gallery-image-error">
          <span>Unable to load image</span>
        </div>
      )}

      <img
        src={image.src}
        alt={image.alt}
        title={image.title || image.alt}
        className={`gallery-image ${isLoaded && !hasError ? 'visible' : 'hidden'}`}
        onLoad={handleLoad}
        onError={handleError}
        onClick={handleClick}
        width={image.width}
        height={image.height}
      />

      {image.title && (
        <div className="gallery-image-caption">
          <h4>{image.title}</h4>
          {image.description && <p>{image.description}</p>}
        </div>
      )}
    </div>
  );
};

export default GalleryImage;
