import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, isLocale } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { getPages } from "@/lib/pages";
import { listContent } from "@/lib/mdx";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema, JsonLdScript, websiteSchema } from "@/lib/schema";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LangSync } from "@/components/LangSync";
import { PageHero } from "@/components/PageHero";
import { PostList } from "@/components/PostList";

type Params = { lang: string };

export function generateStaticParams(): Params[] {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const pages = getPages(lang);
  return createMetadata({
    title: pages.blog.title,
    description: pages.blog.description,
    path: "blog",
    locale: lang,
  });
}

export default async function BlogIndex({ params }: { params: Promise<Params> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const c = getContent(lang);
  const pages = getPages(lang);
  const entries = await listContent("blog");

  const breadcrumbs = breadcrumbSchema([
    { name: c.nav.about, path: `/${lang}` },
    { name: pages.blog.eyebrow, path: `/${lang}/blog` },
  ]);

  return (
    <div className="page">
      <LangSync lang={lang} />
      <JsonLdScript data={[websiteSchema(), breadcrumbs]} />
      <Nav c={c} lang={lang} />
      <main className="subpage">
        <section className="section">
          <PageHero
            eyebrow={pages.blog.eyebrow}
            title={pages.blog.title}
            description={pages.blog.description}
          />
          <PostList entries={entries} locale={lang} common={pages.common} />
        </section>
      </main>
      <Footer c={c} />
    </div>
  );
}
