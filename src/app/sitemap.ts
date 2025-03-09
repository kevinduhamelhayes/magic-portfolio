import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { baseURL } from '@/app/resources';

// Function to get all blog posts
function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  
  return filenames.map(filename => {
    return {
      slug: filename.replace(/\.mdx$/, ''),
    };
  });
}

// Function to get all work projects
function getWorkProjects() {
  const projectsDirectory = path.join(process.cwd(), 'src', 'app', 'work', 'projects');
  const filenames = fs.readdirSync(projectsDirectory);
  
  return filenames.map(filename => {
    return {
      slug: filename.replace(/\.mdx$/, ''),
    };
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getBlogPosts();
  const workProjects = getWorkProjects();
  
  // Static routes
  const routes = [
    {
      url: `https://${baseURL}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `https://${baseURL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `https://${baseURL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `https://${baseURL}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `https://${baseURL}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Add blog posts to sitemap
  const blogRoutes = blogPosts.map(post => {
    return {
      url: `https://${baseURL}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    };
  });

  // Add work projects to sitemap
  const workRoutes = workProjects.map(project => {
    return {
      url: `https://${baseURL}/work/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    };
  });

  return [...routes, ...blogRoutes, ...workRoutes];
}
