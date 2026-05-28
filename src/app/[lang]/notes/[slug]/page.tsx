import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, isLocale } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { getPages } from "@/lib/pages";
import { getContentEntry, listContentSlugs } from "@/lib/mdx";
import { createMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema, JsonLdScript } from "@/lib/schema";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LangSync } from "@/components/LangSync";
import { MdxBody } from "@/components/MdxBody";
import { BackLink } from "@/components/BackLink";

type Params = { lang: string; slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const slugs = await listContentSlugs("notes");
  return LOCALES.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const entry = await getContentEntry("notes", slug);
  if (!entry) return {};
  const fm = entry.frontmatter;
  return createMetadata({
    title: fm.title,
    description: fm.description,
    path: `notes/${slug}`,
    locale: lang,
    type: "article",
    publishedAt: fm.date,
    updatedAt: fm.updated,
    tags: fm.tags,
  });
}

export default async function NotePost({ params }: { params: Promise<Params> }) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const entry = await getContentEntry("notes", slug);
  if (!entry) notFound();
  const c = getContent(lang);
  const pages = getPages(lang);
  const fm = entry.frontmatter;

  const schema = articleSchema({
    title: fm.title,
    description: fm.description,
    slug,
    section: "notes",
    publishedAt: fm.date,
    updatedAt: fm.updated,
    tags: fm.tags,
    isTechnical: true,
  });
  const breadcrumbs = breadcrumbSchema([
    { name: c.nav.about, path: `/${lang}` },
    { name: pages.notes.eyebrow, path: `/${lang}/notes` },
    { name: fm.title, path: `/${lang}/notes/${slug}` },
  ]);

  return (
    <div className="page">
      <LangSync lang={lang} />
      <JsonLdScript data={[schema, breadcrumbs]} />
      <Nav c={c} lang={lang} />
      <main className="subpage">
        <article className="section post">
          <BackLink href={`/${lang}/notes`} label={pages.common.backToList(pages.notes.eyebrow)} />
          <header className="post-header">
            <div className="post-meta">
              {fm.tags?.slice(0, 2).map((t) => (
                <span className="article-tag" key={t}>
                  {t}
                </span>
              ))}
              <span className="article-date">
                <time dateTime={fm.date}>{formatDate(fm.date, lang)}</time>
              </span>
              <span className="article-read">
                {entry.readingMinutes} {pages.common.minRead}
              </span>
            </div>
            <h1 className="post-title">{fm.title}</h1>
            <p className="post-lead">{fm.description}</p>
          </header>
          <MdxBody source={entry.body} />
        </article>
      </main>
      <Footer c={c} />
    </div>
  );
}

function formatDate(iso: string, locale: "pl" | "en"): string {
  try {
    return new Intl.DateTimeFormat(locale === "pl" ? "pl-PL" : "en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}
