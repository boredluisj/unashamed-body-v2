import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/intake-form'],
      },
    ],
    sitemap: 'https://unashamedbody.com/sitemap.xml',
  };
}
