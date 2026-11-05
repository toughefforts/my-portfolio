import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { educationSlides } from "@/data/education";
import { articlesData } from "@/data/articles";

/**
 * Dynamic XML Sitemap Generator (Next.js Metadata Route).
 *
 * Dynamically constructs a search-engine crawlable XML sitemap index combining:
 * - Core static routes (home, privacy policy, terms of service, HTML sitemap).
 * - Dynamic interactive project live preview routes (/preview/[id]).
 * - Dynamic education credential detail routes (/education/[id]).
 * - Dynamic technical article publication routes (/blog/[slug]).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sachinsharma.dev";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${baseUrl}/preview/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const educationRoutes: MetadataRoute.Sitemap = educationSlides.map((e) => ({
    url: `${baseUrl}/education/${e.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = articlesData.map((a) => ({
    url: `${baseUrl}/blog/${a.slug || a.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes, ...educationRoutes, ...blogRoutes];
}
