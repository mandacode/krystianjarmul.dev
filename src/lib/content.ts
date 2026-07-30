import type { Locale } from "./i18n";

export const LINKS = {
  email: "hi@krystianjarmul.dev",
  github: "https://github.com/mandacode",
  githubLabel: "github.com/mandacode",
  linkedin: "https://www.linkedin.com/in/krystianjarmul/",
  linkedinLabel: "in/krystianjarmul",
} as const;

export const STACK_PRIMARY = ["Python", "FastAPI", "PostgreSQL + pgvector", "LangGraph", "Next.js"] as const;

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
    eyebrow: "Senior Backend Engineer · Python & AI",
    headlineA: "Writing code is no longer",
    headlineB: "the hard part.",
    sub: "Systems thinking and understanding the domain matter more than ever. Six years on SaaS products: backends, data acquisition and AI-backed features. Let's build something stable and scalable together.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "View work",
    stackLabel: "Working with",
  },
  clients: {
    label: "Products I've built and shipped",
  },
  stack: {
    eyebrow: "Stack & expertise",
    title: "The toolkit behind the products",
    sub: "Backend-first, comfortable across the stack. I pick boring, proven tools and make them ship outcomes.",
    groups: [
      { name: "Backend", items: ["Python", "Django / DRF", "FastAPI", "Flask", "SQLAlchemy", "Pydantic"] },
      { name: "Data & storage", items: ["PostgreSQL + pgvector", "BigQuery", "Redis", "MySQL"] },
      { name: "Messaging & streaming", items: ["Kafka", "RabbitMQ", "Celery", "asyncio"] },
      { name: "AI & agents", items: ["LangChain", "LangGraph", "Agentic workflows", "RAG", "Claude Code"] },
      { name: "Infrastructure", items: ["Azure", "GCP", "AWS", "Terraform", "Docker", "Linux"] },
      { name: "Frontend", items: ["React", "Next.js", "TypeScript"] },
    ],
  },
  about: {
    eyebrow: "About",
    title: "Backend engineer who invests where code generation can't help.",
    body: [
      "Six years of backend work on SaaS products, in fast-paced startups and in larger companies, across HR, AdTech, AI search and GEO, fraud detection and telecom. One thread runs through all of it: data acquisition. Crawlers, ETL pipelines and custom collection mechanisms for domains with no reliable structured source, from advertising fraud traffic to the answers generative AI gives about a brand.",
      "AI coding tools are part of how I work every day, and I am deliberately growing into AI engineering. As code generation gets cheaper and faster, the bottleneck moves elsewhere: designing systems that hold together, understanding the domain well enough to know which problem is worth solving, making the right architectural trade-offs.",
      "I hold a high bar for quality. Clean architecture, meaningful tests, readable code and performance that survives real load, because that is what keeps a system cheap to change a year from now.",
    ],
    facts: [
      { k: "Focus", v: "Backend · Data · AI" },
      { k: "Core", v: "Python · Django · FastAPI" },
      { k: "Experience", v: "6+ years, SaaS products" },
      { k: "Based", v: "Poland · Remote" },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "How I can help",
    sub: "Engagements built around shipping software outcomes - not billing hours.",
    items: [
      { t: "Backend systems", d: "APIs, data models, async workers and the unglamorous plumbing that keeps a product reliable as traffic grows." },
      { t: "Data acquisition", d: "Crawlers, ETL pipelines and custom collection mechanisms for domains with no reliable structured source, turned into a dataset you can actually query." },
      { t: "AI features", d: "LLM-backed features and agentic workflows on LangChain and LangGraph, with retrieval over your own data so answers come from your catalog, not from model memory." },
      { t: "API design", d: "Versioned, documented, well-tested REST APIs that frontend teams and integrations actually enjoy using." },
      { t: "Performance & quality", d: "Query and endpoint optimisation, test coverage that catches regressions in CI, and refactors that make a legacy codebase safe to change again." },
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
    sub: "Got a backend that has to scale, data with no clean source to pull it from, or an AI feature that has to be trustworthy? Drop me a line.",
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
    tagline: "Backend, data and AI, shipped.",
    rights: "All rights reserved.",
  },
  meta: {
    title: "Krystian Jarmuł - Senior Backend Engineer",
    description:
      "Backend engineer with 6+ years on SaaS products. Data acquisition, APIs and AI-backed features. Python · Django · FastAPI · PostgreSQL · LangChain",
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
    eyebrow: "Senior Backend Engineer · Python i AI",
    headlineA: "Pisanie kodu przestało być",
    headlineB: "tą trudną częścią.",
    sub: "Myślenie systemowe i rozumienie domeny stało się ważne jak nigdy. Mam za sobą sześć lat przy produktach SaaS: backend, pozyskiwanie danych i funkcje oparte o AI. Zbudujmy razem stabilny, skalowalny produkt.",
    ctaPrimary: "Napisz do mnie",
    ctaSecondary: "Zobacz projekty",
    stackLabel: "Pracuję z",
  },
  clients: {
    label: "Produkty, które zbudowałem i wdrożyłem",
  },
  stack: {
    eyebrow: "Stack i specjalizacje",
    title: "Narzędzia, które stoją za produktami",
    sub: "Backend na pierwszym miejscu, reszta stacku w zasięgu. Wybieram nudne, sprawdzone narzędzia i dowożę nimi efekty.",
    groups: [
      { name: "Backend", items: ["Python", "Django / DRF", "FastAPI", "Flask", "SQLAlchemy", "Pydantic"] },
      { name: "Dane i bazy", items: ["PostgreSQL + pgvector", "BigQuery", "Redis", "MySQL"] },
      { name: "Kolejki i streaming", items: ["Kafka", "RabbitMQ", "Celery", "asyncio"] },
      { name: "AI i agenci", items: ["LangChain", "LangGraph", "Workflow agentowe", "RAG", "Claude Code"] },
      { name: "Infrastruktura", items: ["Azure", "GCP", "AWS", "Terraform", "Docker", "Linux"] },
      { name: "Frontend", items: ["React", "Next.js", "TypeScript"] },
    ],
  },
  about: {
    eyebrow: "O mnie",
    title: "Backend engineer, który inwestuje tam, gdzie generowanie kodu nie pomoże.",
    body: [
      "Sześć lat pracy nad backendem produktów SaaS, w szybkich startupach i w większych firmach, w domenach HR, AdTech, wyszukiwania AI i GEO, wykrywania fraudów oraz telekomunikacji. Przez wszystkie te role przewija się jeden wątek: pozyskiwanie danych. Crawlery, pipeline'y ETL i autorskie mechanizmy zbierania danych dla dziedzin bez wiarygodnego, ustrukturyzowanego źródła - od ruchu reklamowego z fraudem po odpowiedzi, których generatywne AI udziela na temat marki.",
      "Narzędzia AI do kodowania są stałym elementem mojej pracy, a w stronę AI Engineering rozwijam się świadomie. Im tańsze i szybsze staje się generowanie kodu, tym bardziej wąskim gardłem jest co innego: projektowanie systemów, które się trzymają, rozumienie domeny na tyle dobrze, by wiedzieć, który problem warto rozwiązać, i trafne decyzje architektoniczne.",
      "Trzymam wysoką poprzeczkę jakości. Czysta architektura, sensowne testy, czytelny kod i wydajność, która wytrzymuje realne obciążenie - bo to właśnie decyduje o tym, ile kosztuje rozwijanie systemu rok później.",
    ],
    facts: [
      { k: "Specjalizacja", v: "Backend · Dane · AI" },
      { k: "Rdzeń", v: "Python · Django · FastAPI" },
      { k: "Doświadczenie", v: "6+ lat, produkty SaaS" },
      { k: "Lokalizacja", v: "Polska · Zdalnie" },
    ],
  },
  services: {
    eyebrow: "Usługi",
    title: "Jak mogę pomóc",
    sub: "Współpraca nastawiona na dowiezienie efektu - nie na rozliczanie godzin.",
    items: [
      { t: "Systemy backendowe", d: "API, modele danych, workery asynchroniczne i cała mniej efektowna hydraulika, która utrzymuje produkt w ryzach, gdy ruch rośnie." },
      { t: "Pozyskiwanie danych", d: "Crawlery, pipeline'y ETL i autorskie mechanizmy zbierania danych dla dziedzin bez wiarygodnego źródła, zamienione w zbiór, który da się odpytywać." },
      { t: "Funkcje AI", d: "Funkcje oparte o LLM i workflow agentowe na LangChain i LangGraph, z retrievalem po twoich danych, żeby odpowiedzi brały się z katalogu, a nie z pamięci modelu." },
      { t: "Projektowanie API", d: "Wersjonowane, udokumentowane i przetestowane REST API, z którego zespoły frontendowe i integracje korzystają z przyjemnością." },
      { t: "Wydajność i jakość", d: "Optymalizacja zapytań i endpointów, pokrycie testami wyłapujące regresje w CI oraz refaktory, po których legacy znów da się bezpiecznie zmieniać." },
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
    sub: "Masz backend, który musi się skalować, dane bez czystego źródła albo funkcję AI, której trzeba móc zaufać? Napisz.",
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
    tagline: "Backend, dane i AI, dowiezione.",
    rights: "Wszelkie prawa zastrzeżone.",
  },
  meta: {
    title: "Krystian Jarmuł - Senior Backend Engineer",
    description:
      "Backend engineer z 6+ latami przy produktach SaaS. Pozyskiwanie danych, API i funkcje oparte o AI. Python · Django · FastAPI · PostgreSQL · LangChain",
  },
};

const CONTENT: Record<Locale, SiteContent> = { pl, en };

export function getContent(locale: Locale): SiteContent {
  return CONTENT[locale];
}
