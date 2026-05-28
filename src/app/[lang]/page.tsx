import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LOCALES, isLocale, type Locale } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { JsonLdScript, personSchema, websiteSchema } from "@/lib/schema";
import { listContent } from "@/lib/mdx";
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
  return createMetadata({
    title: c.meta.title,
    description: c.meta.description,
    path: "",
    locale: lang,
  });
}

export default async function LocaleHome({ params }: { params: Promise<Params> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const c = getContent(locale);
  const blog = await listContent("blog");

  return (
    <div className="page">
      <LangSync lang={locale} />
      <JsonLdScript data={[personSchema(), websiteSchema()]} />
      <Nav c={c} lang={locale} />
      <main>
        <Hero c={c} />
        <Clients c={c} />
        <Stack c={c} />
        <About c={c} />
        <Services c={c} />
        <Work c={c} lang={locale} />
        <Writing c={c} lang={locale} entries={blog} />
        <Contact c={c} />
      </main>
      <Footer c={c} />
    </div>
  );
}
