import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/contact";
import { practiceAreas } from "@/data/practiceAreas";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, priority: 1 },
    { url: `${siteUrl}/about/`, priority: 0.7 },
    { url: `${siteUrl}/practice-areas/`, priority: 0.9 },
    { url: `${siteUrl}/contact/`, priority: 0.8 },
    { url: `${siteUrl}/privacy-policy/`, priority: 0.2 },
    { url: `${siteUrl}/terms/`, priority: 0.2 },
    { url: `${siteUrl}/disclaimer/`, priority: 0.2 },
    ...practiceAreas.map((a) => ({ url: `${siteUrl}/practice-areas/${a.slug}/`, priority: 0.8 })),
  ];
}
