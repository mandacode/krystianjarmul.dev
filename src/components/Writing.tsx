import Link from "next/link";
import type { SiteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import type { ContentEntry } from "@/lib/mdx";
import { ArrowIcon, Eyebrow } from "./icons";

export function Writing({
  c,
  lang,
  entries,
}: {
  c: SiteContent;
  lang: Locale;
  entries: ContentEntry[];
}) {
  const items = entries.slice(0, 3);
  return (
    <section className="section" id="writing">
      <div className="section-head reveal">
        <Eyebrow>{c.writing.eyebrow}</Eyebrow>
        <h2 className="section-title">{c.writing.title}</h2>
        <p className="section-sub">{c.writing.sub}</p>
      </div>
      <div className="writing-list">
        {items.length > 0
          ? items.map((e) => {
              const tag = e.frontmatter.tags?.[0] ?? "Article";
              const year = new Date(e.frontmatter.date).getFullYear();
              return (
                <Link
                  className="article reveal"
                  href={`/${lang}/blog/${e.slug}`}
                  key={e.slug}
                >
                  <div className="article-top">
                    <span className="article-tag">{tag}</span>
                    <span className="article-date">{year}</span>
                  </div>
                  <h3 className="article-title">{e.frontmatter.title}</h3>
                  <div className="article-bottom">
                    <span className="article-read">
                      {e.readingMinutes} {lang === "pl" ? "min" : "min read"}
                    </span>
                    <ArrowIcon />
                  </div>
                </Link>
              );
            })
          : c.writing.items.map((a) => (
              <div className="article reveal" key={a.t}>
                <div className="article-top">
                  <span className="article-tag">{a.tag}</span>
                  <span className="article-date">{a.date}</span>
                </div>
                <h3 className="article-title">{a.t}</h3>
                <div className="article-bottom">
                  <span className="article-read">{a.read}</span>
                  <ArrowIcon />
                </div>
              </div>
            ))}
      </div>
      <div className="section-foot reveal">
        <Link className="text-link" href={`/${lang}/blog`}>
          {c.writing.cta} <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
