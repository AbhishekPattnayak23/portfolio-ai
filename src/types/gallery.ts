export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  width?: number;
  height?: number;
}

export interface GalleryProps {
  images: GalleryImage[];
  title?: string;
  description?: string;
  className?: string;
  onImageClick?: (image: GalleryImage) => void;
  loading?: boolean;
  error?: string | null;
}
