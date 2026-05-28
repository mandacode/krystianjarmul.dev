import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, isLocale } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { getPages, NOW_UPDATED_AT } from "@/lib/pages";
import { createMetadata } from "@/lib/metadata";
import { JsonLdScript, websiteSchema } from "@/lib/schema";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LangSync } from "@/components/LangSync";
import { PageHero } from "@/components/PageHero";

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
    title: pages.now.title,
    description: pages.now.description,
    path: "now",
    locale: lang,
  });
}

export default async function NowPage({ params }: { params: Promise<Params> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const c = getContent(lang);
  const pages = getPages(lang);

  return (
    <div className="page">
      <LangSync lang={lang} />
      <JsonLdScript data={websiteSchema()} />
      <Nav c={c} lang={lang} />
      <main className="subpage">
        <section className="section">
          <PageHero
            eyebrow={pages.now.eyebrow}
            title={pages.now.title}
            description={pages.now.description}
          />
          <p className="now-updated">
            {pages.now.updated}: <time dateTime={NOW_UPDATED_AT}>{NOW_UPDATED_AT}</time>
          </p>
          <div className="now-list">
            {pages.now.entries.map((e) => (
              <div className="now-entry" key={e.label}>
                <h2 className="now-label">{e.label}</h2>
                <p className="now-body">{e.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer c={c} />
    </div>
  );
}
