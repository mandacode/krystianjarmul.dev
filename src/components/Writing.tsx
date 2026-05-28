import type { SiteContent } from "@/lib/content";
import { ArrowIcon, Eyebrow } from "./icons";

export function Writing({ c }: { c: SiteContent }) {
  return (
    <section className="section" id="writing">
      <div className="section-head reveal">
        <Eyebrow>{c.writing.eyebrow}</Eyebrow>
        <h2 className="section-title">{c.writing.title}</h2>
        <p className="section-sub">{c.writing.sub}</p>
      </div>
      <div className="writing-list">
        {c.writing.items.map((a) => (
          <a className="article reveal" href="#writing" key={a.t}>
            <div className="article-top">
              <span className="article-tag">{a.tag}</span>
              <span className="article-date">{a.date}</span>
            </div>
            <h3 className="article-title">{a.t}</h3>
            <div className="article-bottom">
              <span className="article-read">{a.read}</span>
              <ArrowIcon />
            </div>
          </a>
        ))}
      </div>
      <div className="section-foot reveal">
        <a className="text-link" href="#writing">
          {c.writing.cta} <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
