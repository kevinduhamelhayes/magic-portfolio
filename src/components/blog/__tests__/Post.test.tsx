import React from 'react';
import { render, screen } from '@testing-library/react';
import Post from '../Post';

// Mock formatDate utility
jest.mock('@/app/utils/formatDate', () => ({
  formatDate: jest.fn().mockReturnValue('March 10, 2025'),
}));

describe('Post', () => {
  const mockPost = {
    slug: 'test-post',
    metadata: {
      title: 'Test Post Title',
      publishedAt: '2025-03-10',
      image: '/images/test-post.jpg',
      tag: 'Test Tag',
    },
  };

  it('renders post title correctly', () => {
    render(<Post post={mockPost} thumbnail={true} />);
    expect(screen.getByText('Test Post Title')).toBeInTheDocument();
  });

  it('renders formatted date', () => {
    render(<Post post={mockPost} thumbnail={true} />);
    expect(screen.getByText('March 10, 2025')).toBeInTheDocument();
  });

  it('renders tag when provided', () => {
    render(<Post post={mockPost} thumbnail={true} />);
    expect(screen.getByText('Test Tag')).toBeInTheDocument();
  });

  it('renders thumbnail image when thumbnail prop is true', () => {
    render(<Post post={mockPost} thumbnail={true} />);
    const image = screen.getByAltText('Thumbnail of Test Post Title');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', expect.stringContaining('/images/test-post.jpg'));
  });

  it('does not render thumbnail image when thumbnail prop is false', () => {
    render(<Post post={mockPost} thumbnail={false} />);
    expect(screen.queryByAltText('Thumbnail of Test Post Title')).not.toBeInTheDocument();
  });

  it('links to the correct blog post URL', () => {
    render(<Post post={mockPost} thumbnail={true} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/blog/test-post');
  });
}); 