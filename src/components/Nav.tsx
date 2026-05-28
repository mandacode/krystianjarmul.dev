"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { SiteContent } from "@/lib/content";
import { LOCALES, type Locale } from "@/lib/i18n";

export function Nav({ c, lang }: { c: SiteContent; lang: Locale }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pathname = usePathname() ?? "";
  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`;
  const anchorHref = (id: string) => (isHome ? `#${id}` : `/${lang}#${id}`);

  const onHire = useCallback(() => {
    if (isHome) {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = `/${lang}#contact`;
    }
  }, [isHome, lang]);

  const switchLangHref = (target: Locale) => {
    if (!pathname) return `/${target}`;
    const rest = pathname.replace(/^\/(pl|en)/, "");
    return `/${target}${rest || ""}`;
  };

  const items: ReadonlyArray<readonly [string, string]> = [
    ["about", c.nav.about],
    ["stack", c.nav.stack],
    ["services", c.nav.services],
    ["work", c.nav.work],
    ["writing", c.nav.writing],
    ["contact", c.nav.contact],
  ];

  return (
    <header className={"nav" + (scrolled ? " nav-scrolled" : "")}>
      <div className="nav-inner">
        <Link className="brand" href={`/${lang}`} onClick={() => setOpen(false)}>
          <Image
            src="/assets/logo-manda-purple.png"
            alt=""
            width={54}
            height={54}
            priority
            className="brand-logo"
          />
          <span className="brand-name">Krystian&nbsp;Jarmuł</span>
        </Link>

        <nav className={"nav-links" + (open ? " open" : "")}>
          {items.map(([id, label]) =>
            isHome ? (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                {label}
              </a>
            ) : (
              <Link key={id} href={anchorHref(id)} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ),
          )}
        </nav>

        <div className="nav-actions">
          <div className="lang-toggle" role="group" aria-label="Language">
            {LOCALES.map((l) => (
              <Link
                key={l}
                href={switchLangHref(l)}
                className={"lang-btn" + (lang === l ? " active" : "")}
                aria-current={lang === l ? "page" : undefined}
                prefetch={false}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
          <button type="button" className="btn btn-primary btn-sm hire" onClick={onHire}>
            {c.nav.cta}
          </button>
          <button
            type="button"
            className={"burger" + (open ? " open" : "")}
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
