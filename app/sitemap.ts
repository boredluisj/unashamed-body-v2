import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://unashamedbody.com';
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/treatments`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/trt`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/mwl`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/peptide-therapy`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/tasalafil`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/mental-health`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/road-warrior`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    {
      url: `${base}/blog/low-testosterone-signs`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${base}/blog/trt-vs-testosterone-boosters`,
      lastModified: new Date('2025-01-20'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${base}/blog/erectile-dysfunction-40s`,
      lastModified: new Date('2025-01-25'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
}
