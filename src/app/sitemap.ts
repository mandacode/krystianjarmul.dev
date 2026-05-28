import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { listContent } from "@/lib/mdx";

const STATIC_PATHS = ["", "about", "blog", "notes", "projects", "uses", "now"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date("2026-05-28").toISOString();
  const staticEntries: MetadataRoute.Sitemap = LOCALES.flatMap((lang) =>
    STATIC_PATHS.map((p) => {
      const url = p ? `${SITE.url}/${lang}/${p}` : `${SITE.url}/${lang}`;
      return {
        url,
        lastModified: now,
        changeFrequency: p === "" || p === "blog" || p === "notes" ? "weekly" : "monthly",
        priority: p === "" ? 1.0 : 0.7,
      } satisfies MetadataRoute.Sitemap[number];
    }),
  );

  const [blogs, notes] = await Promise.all([listContent("blog"), listContent("notes")]);

  const postEntries: MetadataRoute.Sitemap = LOCALES.flatMap((lang) => [
    ...blogs.map((e) => ({
      url: `${SITE.url}/${lang}/blog/${e.slug}`,
      lastModified: e.frontmatter.updated ?? e.frontmatter.date,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
    ...notes.map((e) => ({
      url: `${SITE.url}/${lang}/notes/${e.slug}`,
      lastModified: e.frontmatter.updated ?? e.frontmatter.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ]);

  return [...staticEntries, ...postEntries];
}
