import { SITE } from "@/lib/site";
import { LINKS } from "@/lib/content";
import { listContent } from "@/lib/mdx";

export const dynamic = "force-static";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const [blog, notes] = await Promise.all([listContent("blog"), listContent("notes")]);
  const items = [
    ...blog.map((e) => ({ ...e, section: "blog" as const })),
    ...notes.map((e) => ({ ...e, section: "notes" as const })),
  ].sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));

  const latest = items[0]?.frontmatter.updated ?? items[0]?.frontmatter.date ?? "2026-01-01";
  const lastBuildDate = new Date(latest).toUTCString();

  const xmlItems = items
    .map((e) => {
      const url = `${SITE.url}/en/${e.section}/${e.slug}`;
      const pubDate = new Date(e.frontmatter.date).toUTCString();
      const categories = (e.frontmatter.tags ?? [])
        .map((t) => `    <category>${escapeXml(t)}</category>`)
        .join("\n");
      return `  <item>
    <title>${escapeXml(e.frontmatter.title)}</title>
    <link>${url}</link>
    <guid isPermaLink="true">${url}</guid>
    <description>${escapeXml(e.frontmatter.description)}</description>
    <pubDate>${pubDate}</pubDate>
    <author>${escapeXml(LINKS.email)} (${escapeXml(SITE.author)})</author>
${categories}
  </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${escapeXml(SITE.name)}</title>
  <link>${SITE.url}</link>
  <atom:link href="${SITE.url}/rss.xml" rel="self" type="application/rss+xml" />
  <description>Notes from production — Python product engineering, SaaS architecture and AI-assisted development.</description>
  <language>en</language>
  <lastBuildDate>${lastBuildDate}</lastBuildDate>
${xmlItems}
</channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
