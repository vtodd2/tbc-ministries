import type { MetadataRoute } from 'next';
import { SITE_URL } from '../lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
    priority: number;
  }> = [
    { path: '', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/sermons', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/podcast', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/books', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/donate', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/community', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/livestream', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/prayer', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
