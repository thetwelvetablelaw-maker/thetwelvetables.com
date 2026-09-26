import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/contact";
import { practiceAreas } from "@/data/practiceAreas";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, priority: 1 },
    ...practiceAreas.map((a) => ({ url: `${siteUrl}/practice-areas/${a.slug}/`, priority: 0.8 })),
  ];
}
