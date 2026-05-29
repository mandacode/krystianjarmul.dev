import type { Metadata } from "next";
import { SITE } from "./site";
import { LOCALES, type Locale } from "./i18n";

type CreateMetadataArgs = {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  ogImage?: string;
  type?: "website" | "article";
  publishedAt?: string;
  updatedAt?: string;
  tags?: string[];
};

function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}

export function createMetadata(args: CreateMetadataArgs): Metadata {
  const {
    title,
    description,
    path,
    locale,
    ogImage,
    type = "website",
    publishedAt,
    updatedAt,
    tags,
  } = args;

  const canonical = localizedPath(locale, path);
  const alternates = Object.fromEntries(
    LOCALES.map((l) => [l, localizedPath(l, path)]),
  ) as Record<Locale, string>;

  const resolvedOgImage = ogImage ?? SITE.ogImage;
  const images = [{ url: resolvedOgImage, width: 1200, height: 630, alt: title }];

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ...alternates,
        "x-default": localizedPath("pl", path),
      },
    },
    openGraph: {
      type,
      url: canonical,
      title,
      description,
      siteName: SITE.name,
      locale: locale === "pl" ? "pl_PL" : "en_US",
      images,
      ...(type === "article"
        ? {
            publishedTime: publishedAt,
            modifiedTime: updatedAt,
            authors: [SITE.author],
            tags,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [resolvedOgImage],
    },
  };
}
