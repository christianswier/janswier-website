import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/markten", "/producten", "/bedrijf", "/milieu", "/contact", "/privacy"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/markten" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
