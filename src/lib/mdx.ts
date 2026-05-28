import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type ContentSection = "blog" | "notes";

export type Frontmatter = {
  title: string;
  description: string;
  date: string;
  updated?: string;
  tags?: string[];
  draft?: boolean;
};

export type ContentEntry = {
  slug: string;
  section: ContentSection;
  frontmatter: Frontmatter;
  body: string;
  readingMinutes: number;
};

const CONTENT_DIR = path.join(process.cwd(), "content");

async function readSection(section: ContentSection): Promise<ContentEntry[]> {
  const dir = path.join(CONTENT_DIR, section);
  let files: string[];
  try {
    files = await fs.readdir(dir);
  } catch {
    return [];
  }
  const entries = await Promise.all(
    files
      .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
      .map(async (file) => {
        const slug = file.replace(/\.mdx?$/, "");
        const raw = await fs.readFile(path.join(dir, file), "utf-8");
        const { data, content } = matter(raw);
        const fm = data as Frontmatter;
        const minutes = Math.max(1, Math.ceil(readingTime(content).minutes));
        return {
          slug,
          section,
          frontmatter: fm,
          body: content,
          readingMinutes: minutes,
        } satisfies ContentEntry;
      }),
  );
  return entries
    .filter((e) => !e.frontmatter.draft)
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export async function listContent(section: ContentSection): Promise<ContentEntry[]> {
  return readSection(section);
}

export async function getContentEntry(
  section: ContentSection,
  slug: string,
): Promise<ContentEntry | null> {
  const entries = await readSection(section);
  return entries.find((e) => e.slug === slug) ?? null;
}

export async function listContentSlugs(section: ContentSection): Promise<string[]> {
  const entries = await readSection(section);
  return entries.map((e) => e.slug);
}
