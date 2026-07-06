import { MetadataRoute } from 'next';
import { SERVICES_DATA } from '../constants/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.APP_URL || 'https://simbafm.at';
  
  const routes = [
    '',
    '/leistungen',
    '/ueber-uns',
    '/kontakt',
    '/impressum',
    '/datenschutz',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const serviceRoutes = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}${service.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...serviceRoutes];
}
