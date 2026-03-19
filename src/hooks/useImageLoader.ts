import { useState, useEffect } from 'react';
import { GalleryImage } from '../types/gallery';
import { logger } from '../utils/logger';

interface UseImageLoaderProps {
  images: GalleryImage[];
  preload?: boolean;
}

interface UseImageLoaderResult {
  loadedImages: GalleryImage[];
  loading: boolean;
  error: string | null;
  loadImage: (src: string) => Promise<boolean>;
}

const useImageLoader = ({ images, preload = true }: UseImageLoaderProps): UseImageLoaderResult => {
  const [loadedImages, setLoadedImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadImage = async (src: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();

      img.onload = () => {
        logger.debug(`Image loaded: ${src}`, { component: 'useImageLoader' });
        resolve(true);
      };

      img.onerror = (e) => {
        logger.error(`Failed to load image: ${src}`, new Error('Image loading failed'), {
          component: 'useImageLoader',
          data: e
        });
        resolve(false);
      };

      img.src = src;
    });
  };

  useEffect(() => {
    let isMounted = true;
    const loadImages = async () => {
      try {
        setLoading(true);
        setError(null);

        logger.info('Starting image loading process', {
          component: 'useImageLoader',
          data: { imageCount: images.length }
        });

        if (images.length === 0) {
          setLoading(false);
          return;
        }

        if (preload) {
          const results = await Promise.all(
            images.map(async (image) => {
              const success = await loadImage(image.src);
              return success ? image : null;
            })
          );

          if (isMounted) {
            const validImages = results.filter(Boolean) as GalleryImage[];
            setLoadedImages(validImages);

            if (validImages.length < images.length) {
              setError('Some images failed to load');
              logger.warn('Some images failed to load', {
                component: 'useImageLoader',
                data: { loaded: validImages.length, total: images.length }
              });
            }
          }
        } else {
          setLoadedImages(images);
        }
      } catch (err: any) {
        if (isMounted) {
          logger.error('Error loading images', err, { component: 'useImageLoader' });
          setError(err.message || 'Failed to load images');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadImages();

    return () => {
      isMounted = false;
    };
  }, [images, preload]);

  return { loadedImages, loading, error, loadImage };
};

export default useImageLoader;
