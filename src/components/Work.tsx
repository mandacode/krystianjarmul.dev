import Link from "next/link";
import { LINKS, type SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { ArrowIcon } from "./icons";
import { Eyebrow } from "./icons";

export function Work({ c, lang }: { c: SiteContent; lang: Locale }) {
  return (
    <section className="section" id="work">
      <div className="section-head reveal">
        <Eyebrow>{c.work.eyebrow}</Eyebrow>
        <h2 className="section-title">{c.work.title}</h2>
        <p className="section-sub">{c.work.sub}</p>
      </div>
      <div className="work-list">
        {c.work.items.map((w) => (
          <a
            className="work-card reveal"
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
              <h3 className="work-title">{w.t}</h3>
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
      <div className="section-foot reveal">
        <Link className="text-link" href={`/${lang}/projects`}>
          {c.work.cta} <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
