import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, isLocale } from "@/lib/i18n";
import { getContent, LINKS } from "@/lib/content";
import { getPages } from "@/lib/pages";
import { createMetadata } from "@/lib/metadata";
import { JsonLdScript, websiteSchema } from "@/lib/schema";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LangSync } from "@/components/LangSync";
import { PageHero } from "@/components/PageHero";
import { ArrowIcon } from "@/components/icons";

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
    title: pages.projects.title,
    description: pages.projects.description,
    path: "projects",
    locale: lang,
  });
}

export default async function ProjectsPage({ params }: { params: Promise<Params> }) {
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
            eyebrow={pages.projects.eyebrow}
            title={pages.projects.title}
            description={pages.projects.description}
          />
          <div className="work-list">
            {c.work.items.map((w) => (
              <a
                className="work-card"
                href={LINKS.github}
                target="_blank"
                rel="noreferrer noopener"
                key={w.t}
              >
                <div className="work-thumb" aria-hidden="true">
                  <span className="work-thumb-stripes" />
                  <span className="work-thumb-tag">{w.tag}</span>
                </div>
                <div className="work-body">
                  <h2 className="work-title">{w.t}</h2>
                  <p className="work-desc">{w.d}</p>
                  <ul className="chip-list small">
                    {w.stack.map((s) => (
                      <li className="chip" key={s}>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="work-meta">
                  <span className="work-outcome">{w.outcome}</span>
                  <ArrowIcon />
                </div>
              </a>
            ))}
          </div>
          <div className="section-foot">
            <a className="text-link" href={LINKS.github} target="_blank" rel="noreferrer noopener">
              {pages.projects.extra} <ArrowIcon />
            </a>
          </div>
        </section>
      </main>
      <Footer c={c} />
    </div>
  );
}
