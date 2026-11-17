import { MetadataRoute } from "next";
import { PROJECTS } from "@/data/portfolioData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sulisumenpeter.com";

  const projectUrls = PROJECTS.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date("2026-11-16"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-11-16"),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date("2026-11-16"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    ...projectUrls,
  ];
}
