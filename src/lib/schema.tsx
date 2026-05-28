import { SITE } from "./site";
import { LINKS } from "./content";

type JsonLd = Record<string, unknown>;

export function personSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    jobTitle: SITE.jobTitle,
    url: SITE.url,
    email: `mailto:${LINKS.email}`,
    sameAs: [LINKS.github, LINKS.linkedin],
    knowsAbout: [
      "Python",
      "Django",
      "FastAPI",
      "React",
      "Next.js",
      "PostgreSQL",
      "SaaS architecture",
      "API design",
    ],
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    author: { "@type": "Person", name: SITE.author },
  };
}

export function profilePageSchema(path: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${SITE.url}${path}`,
    mainEntity: personSchema(),
  };
}

type ArticleSchemaArgs = {
  title: string;
  description: string;
  slug: string;
  section: "blog" | "notes";
  publishedAt: string;
  updatedAt?: string;
  tags?: string[];
  isTechnical?: boolean;
};

export function articleSchema(args: ArticleSchemaArgs): JsonLd {
  const url = `${SITE.url}/${args.section}/${args.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": args.isTechnical ? "TechArticle" : "BlogPosting",
    headline: args.title,
    description: args.description,
    url,
    datePublished: args.publishedAt,
    dateModified: args.updatedAt ?? args.publishedAt,
    author: { "@type": "Person", name: SITE.author, url: SITE.url },
    publisher: { "@type": "Person", name: SITE.author, url: SITE.url },
    keywords: args.tags?.join(", "),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}

export function JsonLdScript({ data }: { data: JsonLd | JsonLd[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
