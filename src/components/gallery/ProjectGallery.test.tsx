import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ProjectGallery from './ProjectGallery';
import { GalleryImage } from '../../types/gallery';

const mockImages: GalleryImage[] = [
  {
    id: '1',
    src: '/test-image-1.jpg',
    alt: 'Test Image 1',
    title: 'Test Title 1'
  },
  {
    id: '2',
    src: '/test-image-2.jpg',
    alt: 'Test Image 2',
    title: 'Test Title 2'
  }
];

// Mock the useImageLoader hook
jest.mock('../../hooks/useImageLoader', () => ({
  __esModule: true,
  default: ({ images }: { images: GalleryImage[] }) => ({
    loadedImages: images,
    loading: false,
    error: null,
    loadImage: jest.fn().mockResolvedValue(true)
  })
}));

describe('ProjectGallery Component', () => {
  test('renders gallery with images', () => {
    render(
      <ProjectGallery
        images={mockImages}
        title="Test Gallery"
        description="Test Description"
      />
    );

    expect(screen.getByText('Test Gallery')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByTestId('gallery-grid')).toBeInTheDocument();
    expect(screen.getAllByTestId('gallery-image-item').length).toBe(2);
  });

  test('renders loading state correctly', () => {
    render(
      <ProjectGallery
        images={mockImages}
        loading={true}
      />
    );

    expect(screen.getByTestId('gallery-loading')).toBeInTheDocument();
    expect(screen.queryByTestId('gallery-grid')).not.toBeInTheDocument();
  });

  test('renders error state correctly', () => {
    render(
      <ProjectGallery
        images={mockImages}
        error="Failed to load images"
      />
    );

    expect(screen.getByTestId('gallery-error')).toBeInTheDocument();
    expect(screen.getByText('Error: Failed to load images')).toBeInTheDocument();
    expect(screen.queryByTestId('gallery-grid')).not.toBeInTheDocument();
  });

  test('renders empty state when no images', () => {
    render(
      <ProjectGallery
        images={[]}
      />
    );

    expect(screen.getByTestId('gallery-empty')).toBeInTheDocument();
    expect(screen.getByText('No images to display')).toBeInTheDocument();
  });

  test('calls onImageClick when image is clicked', async () => {
    const mockOnClick = jest.fn();

    render(
      <ProjectGallery
        images={mockImages}
        onImageClick={mockOnClick}
      />
    );

    // Wait for images to be rendered
    const imageItems = await screen.findAllByTestId('gallery-image-item');

    // Simulate click on the first image
    fireEvent.click(imageItems[0].querySelector('img')!);

    expect(mockOnClick).toHaveBeenCalledWith(mockImages[0]);
    expect(screen.getByTestId('gallery-modal')).toBeInTheDocument();
  });
});
