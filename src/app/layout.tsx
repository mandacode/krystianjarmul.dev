import type { Metadata } from "next";
import { experienceYears } from "@/lib/experience";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display-loaded",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.krystianjarmul.dev"),
  title: {
    default: "Krystian Jarmuł - Senior Python Engineer",
    template: "%s · Krystian Jarmuł",
  },
  description:
    `Backend engineer with ${experienceYears()}+ years on SaaS products. Data acquisition, APIs and AI-backed features. Python · Django · FastAPI · PostgreSQL · LangChain`,
  alternates: {
    canonical: "/",
    languages: {
      pl: "/pl",
      en: "/en",
      "x-default": "/pl",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Krystian Jarmuł",
    title: "Krystian Jarmuł - Senior Python Engineer",
    description:
      `Backend engineer with ${experienceYears()}+ years on SaaS products. Data acquisition, APIs and AI-backed features. Python · Django · FastAPI · PostgreSQL · LangChain`,
    url: "/",
    images: [
      {
        url: "/assets/og.png",
        width: 1200,
        height: 630,
        alt: "Krystian Jarmuł - Senior Python Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krystian Jarmuł - Senior Python Engineer",
    description:
      `Backend engineer with ${experienceYears()}+ years on SaaS products. Data acquisition, APIs and AI-backed features. Python · Django · FastAPI · PostgreSQL · LangChain`,
    images: ["/assets/og.png"],
  },
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body
        style={
          {
            // map next/font CSS variables onto the design tokens
            "--font-display": `${spaceGrotesk.style.fontFamily}, sans-serif`,
            "--font-body": `${spaceGrotesk.style.fontFamily}, sans-serif`,
            "--font-mono": `${jetbrains.style.fontFamily}, monospace`,
          } as React.CSSProperties
        }
        className={`${spaceGrotesk.variable} ${jetbrains.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
