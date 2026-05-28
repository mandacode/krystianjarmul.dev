import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, isLocale } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { getPages } from "@/lib/pages";
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
    title: pages.uses.title,
    description: pages.uses.description,
    path: "uses",
    locale: lang,
  });
}

export default async function UsesPage({ params }: { params: Promise<Params> }) {
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
            eyebrow={pages.uses.eyebrow}
            title={pages.uses.title}
            description={pages.uses.description}
          />
          <p className="uses-intro">{pages.uses.intro}</p>
          <div className="uses-grid">
            {pages.uses.groups.map((g) => (
              <div className="uses-card" key={g.name}>
                <h2 className="uses-card-title">{g.name}</h2>
                <ul className="uses-list" role="list">
                  {g.items.map((it) => (
                    <li className="uses-item" key={it.name}>
                      <span className="uses-item-name">{it.name}</span>
                      <span className="uses-item-detail">{it.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer c={c} />
    </div>
  );
}
