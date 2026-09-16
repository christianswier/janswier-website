import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

export const marketSchema = z.object({
  name: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  day: z.enum([
    "maandag",
    "dinsdag",
    "woensdag",
    "donderdag",
    "vrijdag",
    "zaterdag",
    "zondag",
  ]),
  dayNumber: z.number().int().min(0).max(6),
  opensAt: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/),
  closesAt: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/),
  address: z.string().min(1),
  city: z.string().min(1),
  mapsUrl: z.url(),
  active: z.boolean(),
  featured: z.boolean().default(false),
  notice: z.string().default(""),
  image: z.string().optional(),
});

export type Market = z.infer<typeof marketSchema> & {
  description: string;
};

export function getMarkets(options: { includeInactive?: boolean } = {}): Market[] {
  const directory = path.join(process.cwd(), "content", "markets");

  const markets = fs
    .readdirSync(directory)
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const source = fs.readFileSync(path.join(directory, filename), "utf8");
      const parsed = matter(source);
      const data = marketSchema.parse(parsed.data);

      if (data.closesAt <= data.opensAt) {
        throw new Error(`Sluitingstijd moet na openingstijd liggen: ${filename}`);
      }

      return {
        ...data,
        description: parsed.content.trim(),
      };
    });

  const slugs = new Set<string>();
  for (const market of markets) {
    if (slugs.has(market.slug)) {
      throw new Error(`Dubbele markt-slug: ${market.slug}`);
    }
    slugs.add(market.slug);
  }

  return markets
    .filter((market) => options.includeInactive || market.active)
    .sort(
      (a, b) =>
        a.dayNumber - b.dayNumber ||
        a.opensAt.localeCompare(b.opensAt) ||
        a.name.localeCompare(b.name, "nl"),
    );
}
