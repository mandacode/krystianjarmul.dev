import type { Locale } from "./i18n";
import { experienceYears, plYears } from "./experience";

const YEARS = experienceYears();

export const LINKS = {
  email: "hi@krystianjarmul.dev",
  github: "https://github.com/mandacode",
  githubLabel: "github.com/mandacode",
  linkedin: "https://www.linkedin.com/in/krystianjarmul/",
  linkedinLabel: "in/krystianjarmul",
} as const;

export const STACK_PRIMARY = ["Python", "Django", "FastAPI", "PostgreSQL(+pgvector)", "Next.js"] as const;

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
  shot?: string;
  url?: string;
  repo?: string;
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
    labs: string;
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
  labs: {
    eyebrow: string;
    title: string;
    sub: string;
    items: WorkItem[];
    demo: string;
    code: string;
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
    labs: "Side projects",
    writing: "Writing",
    contact: "Contact",
    cta: "Hire me",
  },
  hero: {
    status: "Available for new projects",
    eyebrow: "Senior Backend Engineer · Python & AI",
    headlineA: "Writing code is no longer",
    headlineB: "the hard part.",
    sub: `Systems thinking and understanding the domain matter more than ever. ${YEARS} years on SaaS products: backends, data acquisition and AI-backed features. Let's build something stable and scalable together.`,
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
    title: "Backend engineer focused on what code generation won't solve.",
    body: [
      `${YEARS} years of backend work on SaaS products, in fast-paced startups and in larger companies, across HR, AdTech, AI search and GEO, fraud detection and telecom. One thread runs through all of it: data acquisition. Crawlers, ETL pipelines and custom collection mechanisms for domains with no reliable structured source, from advertising fraud traffic to the answers generative AI gives about a brand.`,
      "AI coding tools are part of how I work every day, and I am deliberately growing into AI engineering. As code generation gets cheaper and faster, the bottleneck moves elsewhere: designing systems that hold together, understanding the domain well enough to know which problem is worth solving, making the right architectural trade-offs.",
      "I hold a high bar for quality. Clean architecture, meaningful tests, readable code and performance that survives real load, because that is what keeps a system cheap to change a year from now.",
    ],
    facts: [
      { k: "Focus", v: "Backend · Data · AI" },
      { k: "Core", v: "Python · Django · FastAPI" },
      { k: "Experience", v: `${YEARS}+ years, SaaS products` },
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
  labs: {
    eyebrow: "Side projects",
    title: "Building to learn",
    sub: "Loose, educational projects - I build them to get hands-on with a new technology or to crack a specific problem.",
    items: [
      {
        t: "Mieszko",
        tag: "ML",
        shot: "/assets/mieszko.jpg",
        d: "Asking-price valuation for flats in Rzeszów - an ML model trained on sale listings from the city. From the address alone it enriches each record with a dozen extra location features generated from OpenStreetMap. Validation MAPE 6.7%, against 15.5% for a naive baseline.",
        dLong:
          "The model learns asking prices scraped from four listing portals (Otodom, Morizon, nieruchomosci-online, OLX), deduplicated from 10,363 raw adverts down to 3,219 real flats with a perceptual hash of the photos - because the same flat is relisted by many agents. A dozen features come from the address alone: district and straight-line distances to bus, school, shop, park and the city centre, measured to the edge of each OpenStreetMap polygon. The core discipline is one shared feature-computation code path for both training and serving, guarded by a hash of the POI snapshot so the API refuses to start if the two drift. The regressor is XGBoost with an absolute-error objective (the price target is skewed), and every response carries a disclaimer that asking prices sit ~7.9% above transaction prices. FastAPI + vanilla JS/Leaflet, shipped in Docker behind a Cloudflare Tunnel.",
        stack: ["Python", "XGBoost", "FastAPI", "OpenStreetMap (Overpass)", "Leaflet", "Docker"],
        outcome: "A price from four fields",
        url: "https://mieszko.krystianjarmul.dev",
        repo: "https://github.com/mandacode/house-price-prediction",
      },
      {
        t: "Mandaflix",
        tag: "AI · ML",
        shot: "/assets/mandaflix.png",
        d: "A streaming-style movie recommender with two independent AI systems: personalised recommendations and hybrid semantic search, behind a Netflix-like UI that hides the algorithms.",
        dLong:
          "Mandaflix is a full-stack movie recommender built on the MovieLens dataset, with two ML systems running side by side. Recommendations use matrix factorisation (SVD): a user's taste vector is folded in from their current likes in real time against fixed item factors, so a like re-ranks the grid instantly and a brand-new profile cold-starts from popularity - no retraining on the hot path, with a separate batch job folding likes back into the model. Search is hybrid retrieval, both halves served by Postgres and fused with Reciprocal Rank Fusion: full-text (tsvector, field-weighted so a title hit outranks a word buried in a plot) plus semantic (pgvector cosine over MiniLM embeddings of TMDB overviews), so it answers both \"lord\" and \"a lonely robot finds friendship in space\". Four recommender models were benchmarked on a per-user temporal split (P/R/NDCG@10) before SVD won and shipped; an Insights panel exposes the metrics the consumer UI deliberately hides. FastAPI serves both the API and the built React frontend from one origin, fronted by a Cloudflare Tunnel.",
        stack: ["Python", "FastAPI", "scikit-learn (SVD)", "Postgres + pgvector", "React + Vite", "Docker"],
        outcome: "Recommendations + hybrid retrieval",
        url: "https://mandaflix.krystianjarmul.dev",
        repo: "https://github.com/mandacode/ai-movie-recommender",
      },
      {
        t: "Voice-controlled home",
        tag: "LLM · IoT",
        d: "Control your home by voice over Telegram, in plain Polish and with your own device names. A voice note is transcribed, an LLM turns it into a structured intent, and the system flips the relay locally over the LAN - with a hard guarantee it can't invent a device that doesn't exist.",
        dLong:
          "A Telegram voice note goes through Whisper (Groq) to text, then an LLM (Groq gpt-oss-120b) maps it to a JSON intent {action, device_id} and an adapter drives a Shelly Gen3 plug directly over the LAN - no vendor cloud, ~1.5s from recording to relay click. The interesting part is why it doesn't hallucinate devices: two independent barriers. The device_id field is a schema enum generated from the YAML registry on every request, so constrained decoding makes an out-of-list device literally unrepresentable; a second code-level check re-validates against the registry regardless of what the model returns. Safety never depends on model behaviour. Every layer - transcription, understanding, execution - is a swappable protocol (Groq / Ollama / OpenAI, Shelly / Tuya), and the model choices are measured, not assumed: on Groq the 120B model was twice as fast as the 20B.",
        stack: ["Python 3.12", "Groq (Whisper + gpt-oss)", "python-telegram-bot", "Shelly Gen3 RPC", "Docker"],
        outcome: "Talk normally, the house listens",
        repo: "https://github.com/mandacode/llm-home-automation",
      },
    ],
    demo: "Live demo",
    code: "Code",
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
      `Backend engineer with ${YEARS}+ years on SaaS products. Data acquisition, APIs and AI-backed features. Python · Django · FastAPI · PostgreSQL · LangChain`,
  },
};

const pl: SiteContent = {
  nav: {
    about: "O mnie",
    stack: "Stack",
    services: "Usługi",
    work: "Projekty",
    labs: "Projekty własne",
    writing: "Publikacje",
    contact: "Kontakt",
    cta: "Zatrudnij mnie",
  },
  hero: {
    status: "Dostępny dla nowych projektów",
    eyebrow: "Senior Backend Engineer · Python i AI",
    headlineA: "Pisanie kodu przestało być",
    headlineB: "tą trudną częścią.",
    sub: `Myślenie systemowe i rozumienie domeny stało się ważne jak nigdy. Mam za sobą ${plYears(YEARS)} przy produktach SaaS: backend, pozyskiwanie danych i funkcje oparte o AI. Zbudujmy razem stabilny, skalowalny produkt.`,
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
    title: "Backend engineer skupiony na tym, czego generowanie kodu nie załatwi.",
    body: [
      `${plYears(YEARS)} pracy nad backendem produktów SaaS, w szybkich startupach i w większych firmach, w domenach HR, AdTech, wyszukiwania AI i GEO, wykrywania fraudów oraz telekomunikacji. Przez wszystkie te role przewija się jeden wątek: pozyskiwanie danych. Crawlery, pipeline'y ETL i autorskie mechanizmy zbierania danych dla dziedzin bez wiarygodnego, ustrukturyzowanego źródła - od ruchu reklamowego z fraudem po odpowiedzi, których generatywne AI udziela na temat marki.`,
      "Narzędzia AI do kodowania są stałym elementem mojej pracy, a w stronę AI Engineering rozwijam się świadomie. Im tańsze i szybsze staje się generowanie kodu, tym bardziej wąskim gardłem jest co innego: projektowanie systemów, które się trzymają, rozumienie domeny na tyle dobrze, by wiedzieć, który problem warto rozwiązać, i trafne decyzje architektoniczne.",
      "Trzymam wysoką poprzeczkę jakości. Czysta architektura, sensowne testy, czytelny kod i wydajność, która wytrzymuje realne obciążenie - bo to właśnie decyduje o tym, ile kosztuje rozwijanie systemu rok później.",
    ],
    facts: [
      { k: "Specjalizacja", v: "Backend · Dane · AI" },
      { k: "Rdzeń", v: "Python · Django · FastAPI" },
      { k: "Doświadczenie", v: `${YEARS}+ lat, produkty SaaS` },
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
  labs: {
    eyebrow: "Projekty własne",
    title: "Buduję, żeby się nauczyć",
    sub: "Luźne, edukacyjne projekty - buduję je, żeby oswoić nową technologię albo rozgryźć konkretny problem.",
    items: [
      {
        t: "Mieszko",
        tag: "ML",
        shot: "/assets/mieszko.jpg",
        d: "Wycena ceny ofertowej mieszkań w Rzeszowie - model ML wytrenowany na ogłoszeniach sprzedaży z miasta. Z samego adresu wzbogaca dane o kilkanaście dodatkowych cech lokalizacji generowanych z OpenStreetMap. MAPE walidacyjne 6,7% wobec 15,5% dla naiwnego baseline'u.",
        dLong:
          "Model uczy się cen ofertowych zescrapowanych z czterech portali (Otodom, Morizon, nieruchomosci-online, OLX), odsianych z 10 363 surowych ogłoszeń do 3 219 realnych mieszkań przez perceptualny hash zdjęć - bo to samo mieszkanie wystawia wielu agentów. Kilkanaście cech powstaje z samego adresu: dzielnica i odległości w linii prostej do przystanku, szkoły, sklepu, parku i centrum, liczone do krawędzi wielokąta z OpenStreetMap. Sednem jest jedna wspólna ścieżka liczenia cech dla treningu i serwowania, pilnowana hashem snapshotu POI - API nie wystartuje, jeśli się rozjadą. Regresor to XGBoost z funkcją błędu absolutnego (rozkład ceny jest skośny), a każda odpowiedź niesie disclaimer, że ceny ofertowe są ~7,9% powyżej transakcyjnych. FastAPI + czysty JS/Leaflet, wdrożone w Dockerze za Cloudflare Tunnel.",
        stack: ["Python", "XGBoost", "FastAPI", "OpenStreetMap (Overpass)", "Leaflet", "Docker"],
        outcome: "Cena z czterech pól",
        url: "https://mieszko.krystianjarmul.dev",
        repo: "https://github.com/mandacode/house-price-prediction",
      },
      {
        t: "Mandaflix",
        tag: "AI · ML",
        shot: "/assets/mandaflix.png",
        d: "System rekomendacji filmów w stylu serwisu streamingowego z dwoma niezależnymi mechanizmami AI: spersonalizowanymi rekomendacjami i hybrydowym wyszukiwaniem semantycznym, ukrytymi za interfejsem w stylu Netflixa.",
        dLong:
          "Mandaflix to full-stackowy system rekomendacji zbudowany na zbiorze MovieLens, z dwoma systemami ML działającymi równolegle. Rekomendacje opierają się na faktoryzacji macierzy (SVD): wektor gustu użytkownika jest liczony w locie z jego bieżących polubień względem stałych wektorów filmów, więc polubienie natychmiast przestawia ranking kafelków, a zupełnie nowy profil startuje z popularności - bez trenowania na gorącej ścieżce, a osobny proces wsadowy dokłada polubienia z powrotem do modelu. Wyszukiwanie to retrieval hybrydowy, obie połowy obsługiwane przez Postgresa i łączone metodą Reciprocal Rank Fusion: full-text (tsvector, ważony polami, żeby trafienie w tytule biło słowo ukryte w opisie fabuły) plus semantyka (pgvector, cosinus po embeddingach MiniLM z opisów TMDB), więc obsługuje i \"lord\", i \"samotny robot znajduje przyjaźń w kosmosie\". Cztery modele rekomendacji przeszły benchmark na temporalnym podziale per-użytkownik (P/R/NDCG@10), zanim wygrał i trafił na produkcję SVD; panel Insights pokazuje metryki, które konsumenckie UI celowo ukrywa. FastAPI serwuje z jednego origina i API, i zbudowany frontend w React, wystawiony przez Cloudflare Tunnel.",
        stack: ["Python", "FastAPI", "scikit-learn (SVD)", "Postgres + pgvector", "React + Vite", "Docker"],
        outcome: "Rekomendacje + hybrydowy retrieval",
        url: "https://mandaflix.krystianjarmul.dev",
        repo: "https://github.com/mandacode/ai-movie-recommender",
      },
      {
        t: "Dom sterowany głosem",
        tag: "LLM · IoT",
        d: "Sterowanie domem głosem przez Telegram, po polsku i własnymi nazwami urządzeń. Głosówka jest transkrybowana, LLM zamienia ją na ustrukturyzowaną intencję, a system klika przekaźnik lokalnie po LAN - z twardą gwarancją, że model nie wymyśli nieistniejącego urządzenia.",
        dLong:
          "Głosówka z Telegrama idzie przez Whisper (Groq) na tekst, potem LLM (Groq gpt-oss-120b) mapuje ją na intencję JSON {action, device_id}, a adapter steruje wtyczką Shelly Gen3 bezpośrednio po LAN - bez chmury producenta, ~1.5 s od nagrania do kliknięcia przekaźnika. Najciekawsze jest to, dlaczego system nie halucynuje urządzeń: dwie niezależne bariery. Pole device_id to enum budowany z rejestru YAML przy każdym zapytaniu, więc constrained decoding czyni urządzenie spoza listy niereprezentowalnym; druga bariera w kodzie i tak waliduje względem rejestru, niezależnie od tego, co zwróci model. Bezpieczeństwo nie zależy od zachowania modelu. Każda warstwa - transkrypcja, rozumienie, wykonanie - to wymienny protokół (Groq / Ollama / OpenAI, Shelly / Tuya), a wybór modeli jest mierzony, nie zakładany: na Groqu model 120B był dwa razy szybszy od 20B.",
        stack: ["Python 3.12", "Groq (Whisper + gpt-oss)", "python-telegram-bot", "Shelly Gen3 RPC", "Docker"],
        outcome: "Mówisz jak zwykle, dom słucha",
        repo: "https://github.com/mandacode/llm-home-automation",
      },
    ],
    demo: "Demo na żywo",
    code: "Kod",
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
      `Backend engineer z ${YEARS}+ latami przy produktach SaaS. Pozyskiwanie danych, API i funkcje oparte o AI. Python · Django · FastAPI · PostgreSQL · LangChain`,
  },
};

const CONTENT: Record<Locale, SiteContent> = { pl, en };

export function getContent(locale: Locale): SiteContent {
  return CONTENT[locale];
}
