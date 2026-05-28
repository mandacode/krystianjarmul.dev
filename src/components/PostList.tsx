import Link from "next/link";
import type { ContentEntry } from "@/lib/mdx";
import type { Locale } from "@/lib/i18n";
import type { CommonStrings } from "@/lib/pages";
import { ArrowIcon } from "./icons";

export function PostList({
  entries,
  locale,
  common,
  emptyLabel,
}: {
  entries: ContentEntry[];
  locale: Locale;
  common: CommonStrings;
  emptyLabel?: string;
}) {
  if (entries.length === 0) {
    return <p className="empty-state">{emptyLabel ?? common.noResults}</p>;
  }
  return (
    <ul className="post-list" role="list">
      {entries.map((e) => (
        <li key={e.slug}>
          <Link className="post-card" href={`/${locale}/${e.section}/${e.slug}`}>
            <div className="post-card-top">
              {e.frontmatter.tags?.slice(0, 1).map((tag) => (
                <span className="article-tag" key={tag}>
                  {tag}
                </span>
              ))}
              <span className="article-date">
                <time dateTime={e.frontmatter.date}>{formatDate(e.frontmatter.date, locale)}</time>
              </span>
            </div>
            <h2 className="post-card-title">{e.frontmatter.title}</h2>
            <p className="post-card-desc">{e.frontmatter.description}</p>
            <div className="post-card-bottom">
              <span className="article-read">
                {e.readingMinutes} {common.minRead}
              </span>
              <ArrowIcon />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function formatDate(iso: string, locale: Locale): string {
  try {
    return new Intl.DateTimeFormat(locale === "pl" ? "pl-PL" : "en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}
