import type { Locale } from "./i18n";

export const LINKS = {
  email: "hi@krystianjarmul.dev",
  github: "https://github.com/mandacode",
  githubLabel: "github.com/mandacode",
  linkedin: "https://www.linkedin.com/in/krystianjarmul/",
  linkedinLabel: "in/krystianjarmul",
} as const;

export const STACK_PRIMARY = ["Python", "Django", "FastAPI", "React", "Next.js"] as const;

export type StackGroup = {
  name: string;
  items: string[];
};

export type ServiceItem = { t: string; d: string };

export type WorkItem = {
  t: string;
  tag: string;
  d: string;
  stack: string[];
  outcome: string;
};

export type WritingItem = {
  t: string;
  tag: string;
  read: string;
  date: string;
};

export type FactItem = { k: string; v: string };

export type SiteContent = {
  nav: {
    about: string;
    stack: string;
    services: string;
    work: string;
    writing: string;
    contact: string;
    cta: string;
  };
  hero: {
    status: string;
    eyebrow: string;
    headlineA: string;
    headlineB: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stackLabel: string;
  };
  clients: { label: string };
  stack: {
    eyebrow: string;
    title: string;
    sub: string;
    groups: StackGroup[];
  };
  about: {
    eyebrow: string;
    title: string;
    body: string[];
    facts: FactItem[];
  };
  services: {
    eyebrow: string;
    title: string;
    sub: string;
    items: ServiceItem[];
  };
  work: {
    eyebrow: string;
    title: string;
    sub: string;
    items: WorkItem[];
    cta: string;
  };
  writing: {
    eyebrow: string;
    title: string;
    sub: string;
    items: WritingItem[];
    cta: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    sub: string;
    ctaPrimary: string;
    or: string;
  };
  footer: {
    tagline: string;
    built: string;
    rights: string;
  };
  meta: {
    title: string;
    description: string;
  };
};

const en: SiteContent = {
  nav: {
    about: "About",
    stack: "Stack",
    services: "Services",
    work: "Work",
    writing: "Writing",
    contact: "Contact",
    cta: "Hire me",
  },
  hero: {
    status: "Available for new projects",
    eyebrow: "Senior Software Engineer",
    headlineA: "Shipping backend-heavy",
    headlineB: "SaaS products.",
    sub: "Software engineer focused on production-ready web products, APIs and AI-enabled systems — from database to deployment.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "View work",
    stackLabel: "Working with",
  },
  clients: {
    label: "Trusted to build & ship for teams of every size",
  },
  stack: {
    eyebrow: "Stack & expertise",
    title: "The toolkit behind the products",
    sub: "Backend-first, full-stack capable. I pick boring, proven tools and make them ship outcomes.",
    groups: [
      { name: "Backend", items: ["Python", "Django", "FastAPI", "Celery", "PostgreSQL", "Redis"] },
      { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { name: "Infra & DevEx", items: ["Docker", "Vercel", "AWS", "GitHub Actions", "CI/CD"] },
      { name: "Engineering", items: ["System design", "REST & APIs", "Auth / JWT", "Stripe", "Testing", "Observability"] },
    ],
  },
  about: {
    eyebrow: "About",
    title: "Python product engineer who can ship across the stack.",
    body: [
      "I design and build production-ready web products — the kind that handle real users, real money and real data. My home is the backend: clean APIs, solid data models, background jobs and auth that doesn't leak.",
      "But I ship outcomes, not just endpoints. I'm comfortable taking a SaaS idea from an empty repo to a deployed product — backend, frontend, billing and infrastructure included.",
    ],
    facts: [
      { k: "Focus", v: "Backend-heavy SaaS" },
      { k: "Core", v: "Python · Django · FastAPI" },
      { k: "Frontend", v: "React · Next.js" },
      { k: "Based", v: "Poland · Remote" },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "How I can help",
    sub: "Engagements built around shipping software outcomes — not billing hours.",
    items: [
      { t: "Backend systems", d: "APIs, data models, background jobs and the unglamorous plumbing that keeps a product reliable at scale." },
      { t: "SaaS development", d: "From empty repo to deployed product: auth, billing, multi-tenancy, admin panels and the full delivery loop." },
      { t: "API design", d: "Versioned, documented, well-tested REST APIs that frontend teams and integrations actually enjoy using." },
      { t: "AI product engineering", d: "LLM-enabled features and document workflows wired into real products — pragmatic, evaluated, in production." },
      { t: "Technical consulting", d: "Architecture reviews, stack decisions and pragmatic guidance for teams scaling a Python codebase." },
    ],
  },
  work: {
    eyebrow: "Selected work",
    title: "A few things I've built",
    sub: "Project teardowns: the problem, the stack and the outcome.",
    items: [
      { t: "AI document workflow app", tag: "SaaS · AI", d: "Multi-step document processing with an LLM pipeline, queued workers and a React dashboard.", stack: ["FastAPI", "Celery", "React", "Postgres"], outcome: "From prototype to paying users" },
      { t: "Multi-tenant SaaS platform", tag: "Backend · SaaS", d: "Tenant isolation, role-based access and Stripe billing on a single maintainable Django codebase.", stack: ["Django", "Postgres", "Stripe", "Redis"], outcome: "Single codebase, many tenants" },
      { t: "Internal API platform", tag: "APIs · DevEx", d: "Versioned API gateway with auth, rate limiting and auto-generated OpenAPI docs.", stack: ["FastAPI", "Docker", "AWS", "CI/CD"], outcome: "Self-serve for product teams" },
    ],
    cta: "See more on GitHub",
  },
  writing: {
    eyebrow: "Writing",
    title: "Notes from production",
    sub: "Production thinking on Python, SaaS architecture and AI-assisted engineering.",
    items: [
      { t: "Django vs FastAPI for SaaS MVPs", tag: "Architecture", read: "8 min read", date: "2026" },
      { t: "Multi-tenant architecture in Django", tag: "Django", read: "11 min read", date: "2026" },
      { t: "JWT auth done correctly", tag: "Security", read: "6 min read", date: "2026" },
    ],
    cta: "Read all articles",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something worth shipping.",
    sub: "Got a backend-heavy product, an API that needs taming, or a SaaS idea stuck at the repo stage? Drop me a line.",
    ctaPrimary: "Write to me",
    or: "or find me on",
  },
  footer: {
    tagline: "Backend-heavy SaaS, shipped.",
    built: "Designed & built by Krystian Jarmuł",
    rights: "All rights reserved.",
  },
  meta: {
    title: "Krystian Jarmuł — Senior Software Engineer",
    description:
      "Software engineer focused on shipping backend-heavy SaaS products. Python · Django · FastAPI · React · Next.js",
  },
};

const pl: SiteContent = {
  nav: {
    about: "O mnie",
    stack: "Stack",
    services: "Usługi",
    work: "Projekty",
    writing: "Publikacje",
    contact: "Kontakt",
    cta: "Zatrudnij mnie",
  },
  hero: {
    status: "Dostępny dla nowych projektów",
    eyebrow: "Senior Software Engineer",
    headlineA: "Tworzę produkty SaaS",
    headlineB: "z mocnym backendem.",
    sub: "Inżynier oprogramowania skupiony na gotowych do produkcji produktach webowych, API i systemach z AI — od bazy danych po wdrożenie.",
    ctaPrimary: "Napisz do mnie",
    ctaSecondary: "Zobacz projekty",
    stackLabel: "Pracuję z",
  },
  clients: {
    label: "Buduję i wdrażam dla zespołów każdej wielkości",
  },
  stack: {
    eyebrow: "Stack i specjalizacje",
    title: "Narzędzia, które stoją za produktami",
    sub: "Backend na pierwszym miejscu, full-stack w zasięgu. Wybieram nudne, sprawdzone narzędzia i dowożę nimi efekty.",
    groups: [
      { name: "Backend", items: ["Python", "Django", "FastAPI", "Celery", "PostgreSQL", "Redis"] },
      { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { name: "Infra i DevEx", items: ["Docker", "Vercel", "AWS", "GitHub Actions", "CI/CD"] },
      { name: "Inżynieria", items: ["Projektowanie systemów", "REST i API", "Auth / JWT", "Stripe", "Testy", "Observability"] },
    ],
  },
  about: {
    eyebrow: "O mnie",
    title: "Python product engineer, który dowozi w całym stacku.",
    body: [
      "Projektuję i buduję gotowe do produkcji produkty webowe — takie, które obsługują realnych użytkowników, realne pieniądze i realne dane. Mój dom to backend: czyste API, solidne modele danych, zadania w tle i autoryzacja, która nie przecieka.",
      "Ale dowożę efekty, nie tylko endpointy. Czuję się swobodnie, prowadząc pomysł na SaaS od pustego repozytorium do wdrożonego produktu — z backendem, frontendem, płatnościami i infrastrukturą włącznie.",
    ],
    facts: [
      { k: "Specjalizacja", v: "SaaS z mocnym backendem" },
      { k: "Rdzeń", v: "Python · Django · FastAPI" },
      { k: "Frontend", v: "React · Next.js" },
      { k: "Lokalizacja", v: "Polska · Zdalnie" },
    ],
  },
  services: {
    eyebrow: "Usługi",
    title: "Jak mogę pomóc",
    sub: "Współpraca nastawiona na dowiezienie efektu — nie na rozliczanie godzin.",
    items: [
      { t: "Systemy backendowe", d: "API, modele danych, zadania w tle i cała mniej efektowna hydraulika, która utrzymuje produkt w ryzach przy skali." },
      { t: "Budowa SaaS", d: "Od pustego repo do wdrożonego produktu: autoryzacja, płatności, multi-tenancy, panele admina i pełny cykl dostarczania." },
      { t: "Projektowanie API", d: "Wersjonowane, udokumentowane i przetestowane REST API, z którego zespoły frontendowe i integracje korzystają z przyjemnością." },
      { t: "Produkty z AI", d: "Funkcje oparte o LLM i workflow dokumentów wpięte w realne produkty — pragmatycznie, z ewaluacją, na produkcji." },
      { t: "Konsultacje techniczne", d: "Przeglądy architektury, decyzje o stacku i pragmatyczne wsparcie dla zespołów skalujących kod w Pythonie." },
    ],
  },
  work: {
    eyebrow: "Wybrane projekty",
    title: "Kilka rzeczy, które zbudowałem",
    sub: "Teardown projektów: problem, stack i efekt.",
    items: [
      { t: "Aplikacja do workflow dokumentów z AI", tag: "SaaS · AI", d: "Wieloetapowe przetwarzanie dokumentów z pipeline'em LLM, kolejką workerów i dashboardem w React.", stack: ["FastAPI", "Celery", "React", "Postgres"], outcome: "Od prototypu do płacących użytkowników" },
      { t: "Platforma SaaS multi-tenant", tag: "Backend · SaaS", d: "Izolacja tenantów, dostęp oparty o role i płatności Stripe na jednej, łatwej w utrzymaniu bazie kodu Django.", stack: ["Django", "Postgres", "Stripe", "Redis"], outcome: "Jeden kod, wielu tenantów" },
      { t: "Wewnętrzna platforma API", tag: "API · DevEx", d: "Wersjonowany gateway API z autoryzacją, rate limitingiem i automatycznie generowaną dokumentacją OpenAPI.", stack: ["FastAPI", "Docker", "AWS", "CI/CD"], outcome: "Self-serve dla zespołów produktowych" },
    ],
    cta: "Zobacz więcej na GitHubie",
  },
  writing: {
    eyebrow: "Publikacje",
    title: "Notatki z produkcji",
    sub: "Produkcyjne myślenie o Pythonie, architekturze SaaS i inżynierii wspieranej przez AI.",
    items: [
      { t: "Django vs FastAPI dla MVP SaaS", tag: "Architektura", read: "8 min", date: "2026" },
      { t: "Architektura multi-tenant w Django", tag: "Django", read: "11 min", date: "2026" },
      { t: "JWT auth zrobione dobrze", tag: "Bezpieczeństwo", read: "6 min", date: "2026" },
    ],
    cta: "Czytaj wszystkie artykuły",
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Zbudujmy coś, co warto wdrożyć.",
    sub: "Masz produkt z mocnym backendem, API do okiełznania albo pomysł na SaaS, który utknął na etapie repo? Napisz.",
    ctaPrimary: "Napisz do mnie",
    or: "lub znajdź mnie na",
  },
  footer: {
    tagline: "SaaS z mocnym backendem, dowieziony.",
    built: "Zaprojektowane i zbudowane przez Krystiana Jarmuła",
    rights: "Wszelkie prawa zastrzeżone.",
  },
  meta: {
    title: "Krystian Jarmuł — Senior Software Engineer",
    description:
      "Inżynier oprogramowania skupiony na produktach SaaS z mocnym backendem. Python · Django · FastAPI · React · Next.js",
  },
};

const CONTENT: Record<Locale, SiteContent> = { pl, en };

export function getContent(locale: Locale): SiteContent {
  return CONTENT[locale];
}
