import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LOCALES, isLocale, type Locale } from "@/lib/i18n";
import { getContent, LINKS } from "@/lib/content";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { Stack } from "@/components/Stack";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Writing } from "@/components/Writing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { LangSync } from "@/components/LangSync";

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
  const c = getContent(lang);
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        pl: "/pl",
        en: "/en",
        "x-default": "/pl",
      },
    },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      title: c.meta.title,
      description: c.meta.description,
      locale: lang === "pl" ? "pl_PL" : "en_US",
    },
  };
}

export default async function LocaleHome({ params }: { params: Promise<Params> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const c = getContent(locale);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Krystian Jarmuł",
    jobTitle: "Senior Software Engineer",
    url: "https://krystianjarmul.dev",
    email: `mailto:${LINKS.email}`,
    sameAs: [LINKS.github, LINKS.linkedin],
    knowsAbout: [
      "Python",
      "Django",
      "FastAPI",
      "React",
      "Next.js",
      "PostgreSQL",
      "SaaS architecture",
      "API design",
    ],
  };

  return (
    <div className="page">
      <LangSync lang={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Nav c={c} lang={locale} />
      <main>
        <Hero c={c} />
        <Clients c={c} />
        <Stack c={c} />
        <About c={c} />
        <Services c={c} />
        <Work c={c} />
        <Writing c={c} />
        <Contact c={c} />
      </main>
      <Footer c={c} />
    </div>
  );
}
