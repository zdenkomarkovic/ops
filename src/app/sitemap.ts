import { MetadataRoute } from 'next';
import { client } from '@/sanity/client';
import { blogListQuery, kursListQuery } from '@/sanity/queries';

const siteUrl = 'https://udruzenjeops.rs';

type SanitySlugItem = { slug: { current: string }; datumObjave?: string; _updatedAt?: string };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${siteUrl}/o-nama`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/kursevi`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/kontakt`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
  ];

  let blogRoutes: MetadataRoute.Sitemap = [];
  let kursRoutes: MetadataRoute.Sitemap = [];

  try {
    if (client) {
      const postovi: SanitySlugItem[] = await client.fetch(blogListQuery);
      blogRoutes = postovi.map((p) => ({
        url: `${siteUrl}/blog/${p.slug.current}`,
        lastModified: p.datumObjave ? new Date(p.datumObjave) : now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }));

      const kursevi: SanitySlugItem[] = await client.fetch(kursListQuery);
      kursRoutes = kursevi.map((k) => ({
        url: `${siteUrl}/kursevi/${k.slug.current}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }));
    }
  } catch {
    // Sanity nije konfigurisan
  }

  return [...staticRoutes, ...blogRoutes, ...kursRoutes];
}
