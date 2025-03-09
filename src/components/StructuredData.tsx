'use client';

import { baseURL } from '@/app/resources';
import { person } from '@/app/resources/content';

interface StructuredDataProps {
  path?: string;
  title?: string;
  description?: string;
  type?: 'WebSite' | 'Person' | 'Article' | 'ImageGallery' | 'CollectionPage';
  datePublished?: string;
  dateModified?: string;
  images?: string[];
}

export default function StructuredData({
  path = '',
  title = `${person.name}'s Portfolio`,
  description = `Portfolio website showcasing my work as a ${person.role}`,
  type = 'WebSite',
  datePublished,
  dateModified,
  images = [],
}: StructuredDataProps) {
  const url = `https://${baseURL}${path}`;
  
  // Base structured data for all pages
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: title,
    description: description,
    url: url,
  };
  
  // Additional data based on page type
  let structuredData = { ...baseStructuredData };
  
  if (type === 'Person') {
    structuredData = {
      ...structuredData,
      givenName: person.firstName,
      familyName: person.lastName,
      jobTitle: person.role,
      image: `https://${baseURL}${person.avatar}`,
      sameAs: [
        'https://github.com/kevinduhamelhayes',
        'https://www.linkedin.com/in/kevin-duhamel-hayes',
      ],
    };
  } else if (type === 'Article') {
    structuredData = {
      ...structuredData,
      headline: title,
      author: {
        '@type': 'Person',
        name: person.name,
      },
      publisher: {
        '@type': 'Person',
        name: person.name,
        logo: {
          '@type': 'ImageObject',
          url: `https://${baseURL}${person.avatar}`,
        },
      },
      datePublished: datePublished,
      dateModified: dateModified || datePublished,
      image: images.length > 0 ? images.map(img => `https://${baseURL}${img}`) : undefined,
    };
  } else if (type === 'ImageGallery' || type === 'CollectionPage') {
    structuredData = {
      ...structuredData,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: images.map((img, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `https://${baseURL}${img}`,
        })),
      },
    };
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 