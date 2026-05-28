import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { LOCALES, isLocale } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { getPages } from "@/lib/pages";
import { createMetadata } from "@/lib/metadata";
import { JsonLdScript, profilePageSchema } from "@/lib/schema";
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
    title: pages.about.title,
    description: pages.about.description,
    path: "about",
    locale: lang,
  });
}

export default async function AboutPage({ params }: { params: Promise<Params> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const c = getContent(lang);
  const pages = getPages(lang);

  return (
    <div className="page">
      <LangSync lang={lang} />
      <JsonLdScript data={profilePageSchema(`/${lang}/about`)} />
      <Nav c={c} lang={lang} />
      <main className="subpage">
        <section className="section about-page">
          <PageHero
            eyebrow={pages.about.eyebrow}
            title={pages.about.title}
            description={pages.about.description}
          />
          <div className="about-page-grid">
            <div className="about-page-portrait">
              <div className="about-portrait">
                <Image
                  src="/assets/krystian.jpg"
                  alt="Krystian Jarmuł"
                  fill
                  sizes="(max-width: 980px) 480px, 420px"
                  className="about-portrait-img"
                />
                <div className="about-portrait-glow" aria-hidden="true" />
                <div className="about-portrait-tint" aria-hidden="true" />
              </div>
              <dl className="facts">
                {c.about.facts.map((f) => (
                  <div className="fact" key={f.k}>
                    <dt>{f.k}</dt>
                    <dd>{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="about-page-body">
              {pages.about.sections.map((s) => (
                <section className="about-page-section" key={s.heading}>
                  <h2 className="about-page-heading">{s.heading}</h2>
                  <p className="about-page-para">{s.body}</p>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer c={c} />
    </div>
  );
}
