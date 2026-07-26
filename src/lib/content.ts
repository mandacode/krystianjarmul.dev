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
  dLong?: string;
  stack: string[];
  outcome: string;
  logo?: string;
  url?: string;
};

export type WritingItem = {
  t: string;
  tag: string;
  read: string;
  date: string;
};

export type FactItem = { k: string; v: string };

export type ContactForm = {
  title: string;
  sub: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  sending: string;
  success: string;
  errorGeneric: string;
  errorEmail: string;
  errorMessage: string;
  close: string;
};

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
    form: ContactForm;
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
    sub: "I take products from an empty repo to production and keep them running there - APIs, data models, AI features, deployment. Python at the core, the rest of the stack when it's needed.",
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
      { name: "AI", items: ["Claude Code", "AI-assisted development", "LLM APIs", "RAG", "pgvector"] },
    ],
  },
  about: {
    eyebrow: "About",
    title: "Python product engineer who can ship across the stack.",
    body: [
      "I design and build production-ready web products - the kind that handle real users, real money and real data. My home is the backend: clean APIs, solid data models, background jobs and auth that doesn't leak.",
      "But I ship outcomes, not just endpoints. I'm comfortable taking a SaaS idea from an empty repo to a deployed product - backend, frontend, billing and infrastructure included.",
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
    sub: "Engagements built around shipping software outcomes - not billing hours.",
    items: [
      { t: "Backend systems", d: "APIs, data models, background jobs and the unglamorous plumbing that keeps a product reliable at scale." },
      { t: "SaaS development", d: "From empty repo to deployed product: auth, billing, multi-tenancy, admin panels and the full delivery loop." },
      { t: "API design", d: "Versioned, documented, well-tested REST APIs that frontend teams and integrations actually enjoy using." },
      { t: "AI product engineering", d: "LLM-enabled features and document workflows wired into real products - pragmatic, evaluated, in production." },
      { t: "Technical consulting", d: "Architecture reviews, stack decisions and pragmatic guidance for teams scaling a Python codebase." },
    ],
  },
  work: {
    eyebrow: "Selected work",
    title: "A few things I've built",
    sub: "Project teardowns: the problem, the stack and the outcome.",
    items: [
      { t: "Travatar", tag: "SaaS · AI", d: "AI platform for brand-visibility and traffic-quality analytics - with an AI Growth Coworker, GEO and AI-visibility audit modules, and traffic analysis that separates real visitors from bots and crawlers.", dLong: "Travatar answers a question classic analytics no longer can: how visible is your brand inside AI answers, and how much of your traffic is actually human? The platform runs scheduled prompt sets against LLMs and tracks where a brand appears, in what context and against which competitors, then turns that into GEO and AI-visibility audits with concrete fixes. On the traffic side it classifies every session against bot and crawler signatures, so reporting is based on real visitors instead of inflated numbers. On top of it sits the AI Growth Coworker - an assistant that reads the collected data and proposes the next moves. I work on the backend: Django and FastAPI services, the Postgres + pgvector data model, Celery and Prefect pipelines that keep audits running on schedule, and Kafka streaming the traffic events.", stack: ["Python", "Django", "FastAPI", "Postgres + pgvector", "Celery", "Kafka", "Prefect"], outcome: "Brand visibility in the AI era", logo: "/assets/travatar.svg", url: "https://travatar.ai/en" },
      { t: "Cannabase", tag: "Data · AI", d: "Medical-cannabis data platform for Poland: a strain catalog with terpene and THC/CBD profiles, near-real-time pharmacy availability and prices, prescribing clinics, and Dendi - an AI assistant (RAG) that checks local availability and suggests similar-profile alternatives.", dLong: "Poland's medical-cannabis market is scattered across pharmacy price lists, producer PDFs and closed patient groups - Cannabase pulls it into one place. The catalog covers strains with terpene profiles and THC/CBD ratios, linked to near-real-time availability and prices in pharmacies across the country, plus a directory of clinics that issue prescriptions. Automated ingestion and normalization jobs reconcile inconsistent naming between producers and pharmacies, so the same product does not appear five times under five spellings. Dendi, the built-in AI assistant, runs a RAG pipeline over that catalog: it answers questions about a given strain, checks what is available near the patient and suggests alternatives with a similar terpene and cannabinoid profile when something is out of stock. Built on FastAPI and SQLAlchemy with Postgres + pgvector for embeddings, and a Next.js frontend.", stack: ["Python", "FastAPI", "SQLAlchemy", "Postgres + pgvector", "Next.js", "Docker"], outcome: "A fragmented market, unified", logo: "/assets/cannabase.svg", url: "https://cannabase.pl/" },
    ],
    cta: "More projects on LinkedIn",
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
    form: {
      title: "Write to me",
      sub: "Tell me what you're building. I read every message and reply within a day or two.",
      emailLabel: "Your email",
      emailPlaceholder: "you@company.com",
      messageLabel: "Message",
      messagePlaceholder: "What are you building, and where do you need a hand?",
      submit: "Send message",
      sending: "Sending...",
      success: "Message sent. I'll get back to you shortly.",
      errorGeneric: "Something went wrong. Write to hi@krystianjarmul.dev directly.",
      errorEmail: "Enter a valid email address.",
      errorMessage: "Add a few words about your project.",
      close: "Close",
    },
  },
  footer: {
    tagline: "Backend-heavy SaaS, shipped.",
    built: "Designed & built by Krystian Jarmuł",
    rights: "All rights reserved.",
  },
  meta: {
    title: "Krystian Jarmuł - Senior Software Engineer",
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
    sub: "Prowadzę produkty od pustego repo na produkcję i utrzymuję je tam przy życiu - API, modele danych, funkcje AI, wdrożenie. W centrum Python, reszta stacku wtedy, kiedy jest potrzebna.",
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
      { name: "AI", items: ["Claude Code", "Programowanie z AI", "API modeli LLM", "RAG", "pgvector"] },
    ],
  },
  about: {
    eyebrow: "O mnie",
    title: "Python product engineer, który dowozi w całym stacku.",
    body: [
      "Projektuję i buduję gotowe do produkcji produkty webowe - takie, które obsługują realnych użytkowników, realne pieniądze i realne dane. Mój dom to backend: czyste API, solidne modele danych, zadania w tle i autoryzacja, która nie przecieka.",
      "Ale dowożę efekty, nie tylko endpointy. Czuję się swobodnie, prowadząc pomysł na SaaS od pustego repozytorium do wdrożonego produktu - z backendem, frontendem, płatnościami i infrastrukturą włącznie.",
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
    sub: "Współpraca nastawiona na dowiezienie efektu - nie na rozliczanie godzin.",
    items: [
      { t: "Systemy backendowe", d: "API, modele danych, zadania w tle i cała mniej efektowna hydraulika, która utrzymuje produkt w ryzach przy skali." },
      { t: "Budowa SaaS", d: "Od pustego repo do wdrożonego produktu: autoryzacja, płatności, multi-tenancy, panele admina i pełny cykl dostarczania." },
      { t: "Projektowanie API", d: "Wersjonowane, udokumentowane i przetestowane REST API, z którego zespoły frontendowe i integracje korzystają z przyjemnością." },
      { t: "Produkty z AI", d: "Funkcje oparte o LLM i workflow dokumentów wpięte w realne produkty - pragmatycznie, z ewaluacją, na produkcji." },
      { t: "Konsultacje techniczne", d: "Przeglądy architektury, decyzje o stacku i pragmatyczne wsparcie dla zespołów skalujących kod w Pythonie." },
    ],
  },
  work: {
    eyebrow: "Wybrane projekty",
    title: "Kilka rzeczy, które zbudowałem",
    sub: "Teardown projektów: problem, stack i efekt.",
    items: [
      { t: "Travatar", tag: "SaaS · AI", d: "Platforma AI do analizy widoczności marki i jakości ruchu - z AI Growth Coworkerem, modułami GEO i audytu widoczności w AI oraz analizą odróżniającą realny ruch od botów i crawlerów.", dLong: "Travatar odpowiada na pytanie, na które klasyczna analityka już nie odpowiada: jak widoczna jest marka wewnątrz odpowiedzi AI i ile z ruchu na stronie to realni ludzie. Platforma cyklicznie odpytuje modele językowe zestawami promptów i śledzi, gdzie marka się pojawia, w jakim kontekście i obok jakiej konkurencji, a potem zamienia to w audyty GEO i widoczności w AI z konkretnymi rekomendacjami. Po stronie ruchu każda sesja jest klasyfikowana względem sygnatur botów i crawlerów, więc raporty opierają się na realnych użytkownikach, a nie na zawyżonych liczbach. Na wierzchu działa AI Growth Coworker - asystent, który czyta zebrane dane i proponuje kolejne kroki. Odpowiadam za backend: serwisy w Django i FastAPI, model danych na Postgres + pgvector, pipeline'y w Celery i Prefekcie utrzymujące audyty w harmonogramie oraz Kafkę streamującą zdarzenia ruchu.", stack: ["Python", "Django", "FastAPI", "Postgres + pgvector", "Celery", "Kafka", "Prefect"], outcome: "Widoczność marki w świecie AI", logo: "/assets/travatar.svg", url: "https://travatar.ai/en" },
      { t: "Cannabase", tag: "Data · AI", d: "Platforma danych o medycznej marihuanie w Polsce: katalog odmian z profilami terpenowymi i THC/CBD, dostępność i ceny w aptekach niemal na żywo, kliniki wystawiające recepty oraz Dendi - asystent AI (RAG), który sprawdza dostępność w okolicy i proponuje zamienniki o zbliżonym profilu.", dLong: "Polski rynek medycznej marihuany jest rozsypany po cennikach aptek, PDF-ach producentów i zamkniętych grupach pacjentów - Cannabase zbiera go w jedno miejsce. Katalog obejmuje odmiany z profilami terpenowymi i proporcjami THC/CBD, powiązane z niemal na żywo aktualizowaną dostępnością i cenami w aptekach w całym kraju, plus katalog klinik wystawiających recepty. Zautomatyzowane procesy zbierania i normalizacji danych uzgadniają niespójne nazewnictwo między producentami a aptekami, żeby ten sam produkt nie występował pięć razy w pięciu wariantach zapisu. Dendi, wbudowany asystent AI, działa na pipelinie RAG nad tym katalogiem: odpowiada na pytania o konkretną odmianę, sprawdza dostępność w okolicy pacjenta i proponuje zamienniki o zbliżonym profilu terpenowo-kannabinoidowym, gdy czegoś brakuje. Całość na FastAPI i SQLAlchemy, z Postgresem + pgvector na embeddingi i frontendem w Next.js.", stack: ["Python", "FastAPI", "SQLAlchemy", "Postgres + pgvector", "Next.js", "Docker"], outcome: "Rozproszony rynek w jednym miejscu", logo: "/assets/cannabase.svg", url: "https://cannabase.pl/" },
    ],
    cta: "Więcej projektów na LinkedIn",
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
    form: {
      title: "Napisz do mnie",
      sub: "Napisz, co budujesz. Czytam każdą wiadomość i odpisuję w dzień lub dwa.",
      emailLabel: "Twój e-mail",
      emailPlaceholder: "ty@firma.pl",
      messageLabel: "Wiadomość",
      messagePlaceholder: "Co budujesz i przy czym potrzebujesz wsparcia?",
      submit: "Wyślij wiadomość",
      sending: "Wysyłam...",
      success: "Wiadomość wysłana. Odezwę się wkrótce.",
      errorGeneric: "Coś poszło nie tak. Napisz bezpośrednio na hi@krystianjarmul.dev.",
      errorEmail: "Podaj poprawny adres e-mail.",
      errorMessage: "Dodaj kilka słów o projekcie.",
      close: "Zamknij",
    },
  },
  footer: {
    tagline: "SaaS z mocnym backendem, dowieziony.",
    built: "Zaprojektowane i zbudowane przez Krystiana Jarmuła",
    rights: "Wszelkie prawa zastrzeżone.",
  },
  meta: {
    title: "Krystian Jarmuł - Senior Software Engineer",
    description:
      "Inżynier oprogramowania skupiony na produktach SaaS z mocnym backendem. Python · Django · FastAPI · React · Next.js",
  },
};

const CONTENT: Record<Locale, SiteContent> = { pl, en };

export function getContent(locale: Locale): SiteContent {
  return CONTENT[locale];
}
