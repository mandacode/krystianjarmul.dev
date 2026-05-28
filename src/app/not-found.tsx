import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { LINKS } from "@/lib/content";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "404 — Strona nie znaleziona",
  description: "Tej strony tu nie ma. / This page doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-bg" aria-hidden="true">
        <div className="not-found-bg-fade" />
        <div className="not-found-grid-overlay" />
      </div>

      <main className="not-found-inner">
        <Link href="/pl" className="not-found-brand">
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

        <p className="not-found-eyebrow">Error · 404</p>

        <h1 className="not-found-title">
          <span>Tej strony</span>
          <span className="grad">tu nie ma.</span>
        </h1>

        <p className="not-found-sub">
          <span lang="pl">Link prowadzi w pustkę albo strona została przeniesiona.</span>
          <br />
          <span lang="en" className="not-found-sub-en">
            The link leads nowhere — or the page has moved.
          </span>
        </p>

        <div className="not-found-cta">
          <Link href="/pl" className="btn btn-primary btn-lg">
            <span>Wróć na stronę główną</span>
            <ArrowIcon />
          </Link>
          <Link href="/en" className="btn btn-ghost btn-lg">
            <span>Back to homepage</span>
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
