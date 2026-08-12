import Image from "next/image";
import { LINKS, type SiteContent } from "@/lib/content";
import { ArrowIcon, ExternalIcon, GithubIcon, Eyebrow } from "./icons";

export function Labs({ c }: { c: SiteContent }) {
  return (
    <section className="section" id="labs">
      <div className="section-head reveal">
        <Eyebrow>{c.labs.eyebrow}</Eyebrow>
        <h2 className="section-title">{c.labs.title}</h2>
        <p className="section-sub">{c.labs.sub}</p>
      </div>
      <div className="work-list">
        {c.labs.items.map((w) => (
          <article className="work-card reveal" key={w.t}>
            <div className={`work-thumb${w.shot ? " has-shot" : w.logo ? " has-logo" : ""}`}>
              {w.shot ? (
                <Image
                  className="work-thumb-shot"
                  src={w.shot}
                  alt={`${w.t} preview`}
                  fill
                  sizes="(max-width: 900px) 240px, 220px"
                />
              ) : (
                <span className="work-thumb-stripes" aria-hidden="true" />
              )}
              {w.logo ? (
                <Image className="work-thumb-logo" src={w.logo} alt={`${w.t} logo`} width={92} height={92} />
              ) : null}
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
              <div className="work-links">
                {w.url ? (
                  <a
                    className="btn btn-sm btn-primary"
                    href={w.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <ExternalIcon />
                    {c.labs.demo}
                  </a>
                ) : null}
                {w.repo ? (
                  <a
                    className="btn btn-sm btn-ghost"
                    href={w.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <GithubIcon width={16} height={16} />
                    {c.labs.code}
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="section-foot">
        <a className="text-link" href={LINKS.github} target="_blank" rel="noreferrer noopener">
          {c.labs.cta} <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
