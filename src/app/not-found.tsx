import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { LINKS } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "404 — Page not found",
  description: "This page doesn't exist.",
  robots: { index: false, follow: false },
};

const STRINGS: Record<Locale, {
  eyebrow: string;
  titleA: string;
  titleB: string;
  sub: string;
  primary: string;
}> = {
  en: {
    eyebrow: "Error · 404",
    titleA: "This page",
    titleB: "doesn't exist.",
    sub: "The link leads nowhere — or the page has moved.",
    primary: "Back to homepage",
  },
  pl: {
    eyebrow: "Error · 404",
    titleA: "Tej strony",
    titleB: "tu nie ma.",
    sub: "Link prowadzi w pustkę albo strona została przeniesiona.",
    primary: "Wróć na stronę główną",
  },
};

function detectLocale(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0];
  return first && isLocale(first) ? first : "en";
}

export default async function NotFound() {
  const h = await headers();
  const pathname = h.get("x-pathname") ?? "";
  const locale = detectLocale(pathname);
  const t = STRINGS[locale];

  return (
    <div className="not-found" lang={locale}>
      <div className="not-found-bg" aria-hidden="true">
        <div className="not-found-bg-fade" />
        <div className="not-found-grid-overlay" />
      </div>

      <main className="not-found-inner">
        <Link href={`/${locale}`} className="not-found-brand">
          <Image
            src="/assets/logo-manda-purple.png"
            alt="Manda"
            width={64}
            height={64}
            priority
            className="brand-logo"
          />
          <span className="brand-name">Krystian&nbsp;Jarmuł</span>
        </Link>

        <p className="not-found-eyebrow">{t.eyebrow}</p>

        <h1 className="not-found-title">
          <span>{t.titleA}</span>
          <span className="grad">{t.titleB}</span>
        </h1>

        <p className="not-found-sub">{t.sub}</p>

        <div className="not-found-cta">
          <Link href={`/${locale}`} className="btn btn-primary btn-lg">
            <span>{t.primary}</span>
            <ArrowIcon />
          </Link>
        </div>

        <div className="not-found-foot">
          <a className="text-link" href={`mailto:${LINKS.email}`}>
            {LINKS.email}
          </a>
          <span className="not-found-sep" aria-hidden="true">
            ·
          </span>
          <a className="text-link" href={LINKS.github} target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
          <span className="not-found-sep" aria-hidden="true">
            ·
          </span>
          <a
            className="text-link"
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
        </div>
      </main>
    </div>
  );
}
