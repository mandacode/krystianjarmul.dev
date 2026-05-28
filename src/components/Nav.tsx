"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { SiteContent } from "@/lib/content";
import { LOCALES, type Locale } from "@/lib/i18n";

type Theme = "dark" | "light";

export function Nav({ c, lang }: { c: SiteContent; lang: Locale }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored =
      typeof window !== "undefined" ? (localStorage.getItem("theme") as Theme | null) : null;
    if (stored === "dark" || stored === "light") {
      setTheme(stored);
    } else {
      const attr = document.documentElement.getAttribute("data-theme");
      if (attr === "light") setTheme("light");
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch {}
      return next;
    });
  }, []);

  const onHire = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

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
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <Image
            src="/assets/logo-manda-purple.png"
            alt=""
            width={54}
            height={54}
            priority
            className="brand-logo"
          />
          <span className="brand-name">Krystian&nbsp;Jarmuł</span>
        </a>

        <nav className={"nav-links" + (open ? " open" : "")}>
          {items.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <div className="lang-toggle" role="group" aria-label="Language">
            {LOCALES.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className={"lang-btn" + (lang === l ? " active" : "")}
                aria-current={lang === l ? "page" : undefined}
                prefetch={false}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Theme"
          >
            {theme === "dark" ? "☾" : "☀"}
          </button>
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
