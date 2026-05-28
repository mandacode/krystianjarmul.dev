import type { Metadata } from "next";
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
  metadataBase: new URL("https://krystianjarmul.dev"),
  title: {
    default: "Krystian Jarmuł — Senior Software Engineer",
    template: "%s · Krystian Jarmuł",
  },
  description:
    "Software engineer focused on shipping backend-heavy SaaS products. Python · Django · FastAPI · React · Next.js",
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
    title: "Krystian Jarmuł — Senior Software Engineer",
    description:
      "Software engineer focused on shipping backend-heavy SaaS products. Python · Django · FastAPI · React · Next.js",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krystian Jarmuł — Senior Software Engineer",
    description:
      "Software engineer focused on shipping backend-heavy SaaS products. Python · Django · FastAPI · React · Next.js",
  },
  icons: {
    icon: "/assets/logo-manda-purple.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('theme');
                if (t === 'light' || t === 'dark') {
                  document.documentElement.setAttribute('data-theme', t);
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
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
