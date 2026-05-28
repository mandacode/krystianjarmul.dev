import Image from "next/image";
import { LINKS, STACK_PRIMARY, type SiteContent } from "@/lib/content";
import { ArrowIcon, MailIcon } from "./icons";

export function Hero({ c }: { c: SiteContent }) {
  return (
    <section className="hero hero-right" id="top">
      <div className="hero-bg" aria-hidden="true">
        <Image
          src="/assets/snake-wide.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-snake"
        />
        <div className="hero-bg-fade" />
        <div className="hero-grid-overlay" />
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          <div className="status">
            <span className="status-dot" aria-hidden="true" />
            {c.hero.status}
          </div>
          <p className="hero-eyebrow">{c.hero.eyebrow}</p>
          <h1 className="hero-title">
            <span>{c.hero.headlineA}</span>
            <span className="grad">{c.hero.headlineB}</span>
          </h1>
          <p className="hero-sub">{c.hero.sub}</p>

          <div className="hero-stack">
            <span className="hero-stack-label">{c.hero.stackLabel}</span>
            <ul className="chip-list">
              {STACK_PRIMARY.map((s) => (
                <li className="chip chip-accent" key={s}>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-cta">
            <a className="btn btn-primary btn-lg" href={`mailto:${LINKS.email}`}>
              <MailIcon />
              <span>{c.hero.ctaPrimary}</span>
            </a>
            <a className="btn btn-ghost btn-lg" href="#work">
              {c.hero.ctaSecondary}
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>

      <a className="scroll-hint" href="#about" aria-label="Scroll">
        <span className="scroll-line" />
      </a>
    </section>
  );
}
