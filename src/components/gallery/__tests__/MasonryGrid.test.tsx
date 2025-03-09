import React from 'react';
import { render, screen } from '@testing-library/react';
import MasonryGrid from '../MasonryGrid';

// Mock the gallery content
jest.mock('@/app/resources/content', () => ({
  gallery: {
    images: [
      {
        src: '/images/test-image-1.jpg',
        alt: 'Test image 1',
        orientation: 'horizontal',
      },
      {
        src: '/images/test-image-2.jpg',
        alt: 'Test image 2',
        orientation: 'vertical',
      },
    ],
  },
}));

describe('MasonryGrid', () => {
  it('renders the correct number of images', () => {
    render(<MasonryGrid />);
    
    // Check that all images are rendered
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
  });

  it('renders images with correct alt text', () => {
    render(<MasonryGrid />);
    
    // Check that images have the correct alt text
    expect(screen.getByAltText('Test image 1')).toBeInTheDocument();
    expect(screen.getByAltText('Test image 2')).toBeInTheDocument();
  });

  it('applies correct aspect ratio based on orientation', () => {
    render(<MasonryGrid />);
    
    const images = screen.getAllByRole('img');
    
    // First image is horizontal
    expect(images[0]).toHaveAttribute('data-aspect-ratio', '16 / 9');
    
    // Second image is vertical
    expect(images[1]).toHaveAttribute('data-aspect-ratio', '9 / 16');
  });
}); 