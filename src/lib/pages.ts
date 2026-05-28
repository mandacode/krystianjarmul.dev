import type { Locale } from "./i18n";

export type PageStrings = {
  eyebrow: string;
  title: string;
  description: string;
};

export type CommonStrings = {
  backToList: (section: string) => string;
  minRead: string;
  publishedOn: string;
  updatedOn: string;
  noResults: string;
  readPost: string;
};

export type UsesEntry = { name: string; detail: string };
export type UsesGroup = { name: string; items: UsesEntry[] };
export type NowEntry = { label: string; body: string };

export type PagesContent = {
  common: CommonStrings;
  blog: PageStrings;
  notes: PageStrings;
  projects: PageStrings & {
    extra: string;
  };
  about: PageStrings & {
    sections: { heading: string; body: string }[];
  };
  uses: PageStrings & {
    intro: string;
    groups: UsesGroup[];
  };
  now: PageStrings & {
    updated: string;
    entries: NowEntry[];
  };
};

const en: PagesContent = {
  common: {
    backToList: (section) => `← Back to ${section}`,
    minRead: "min read",
    publishedOn: "Published",
    updatedOn: "Updated",
    noResults: "Nothing here yet — check back soon.",
    readPost: "Read post",
  },
  blog: {
    eyebrow: "Writing",
    title: "Notes from production",
    description:
      "Long-form posts on Python product engineering, SaaS architecture and the unglamorous decisions that keep a product shipping.",
  },
  notes: {
    eyebrow: "Notes",
    title: "Short notes from the build",
    description:
      "Cheatsheets, snippets and small lessons — the stuff I'd want a teammate to find when they hit the same wall.",
  },
  projects: {
    eyebrow: "Projects",
    title: "Things I've shipped",
    description:
      "A closer look at projects that solved a real problem in production — the architecture, the trade-offs and the outcome.",
    extra: "More on GitHub",
  },
  about: {
    eyebrow: "About",
    title: "Python product engineer who can ship across the stack.",
    description:
      "Backend-heavy by trade. Full-stack by necessity. Here's how I work and what I optimize for.",
    sections: [
      {
        heading: "What I do",
        body: "I design and build production-ready web products — the kind that handle real users, real money and real data. My home is the backend: clean APIs, solid data models, background jobs and auth that doesn't leak. I ship outcomes, not just endpoints.",
      },
      {
        heading: "How I work",
        body: "I default to boring, proven tools and make them ship outcomes. I write tests where they pay back, observability where it matters, and documentation only when the future-reader is someone other than me. I push back on premature abstraction.",
      },
      {
        heading: "Where I help most",
        body: "Greenfield SaaS work where the engineering decisions still matter. API-heavy systems where the contract is the product. Teams scaling a Python codebase past the point where the framework defaults are enough. AI-enabled features that need to be production-grade, not demos.",
      },
      {
        heading: "Outside the editor",
        body: "Based in Poland, working remotely. When I'm not in code I'm usually outdoors, reading something non-technical, or stewarding the Manda brand that gives this site its character.",
      },
    ],
  },
  uses: {
    eyebrow: "Uses",
    title: "What I build with",
    description:
      "The hardware, software and small tools I lean on every day. Mostly boring choices — that's the point.",
    intro:
      "Setup is the second-most overrated topic in engineering (after frameworks). But people ask, so here it is.",
    groups: [
      {
        name: "Machine",
        items: [
          { name: "MacBook Pro 16\"", detail: "Apple silicon, the only laptop I've genuinely enjoyed." },
          { name: "External display", detail: "27\" 4K — one screen, big text, fewer windows." },
          { name: "Keychron K-series", detail: "Mechanical, low profile, brown switches." },
        ],
      },
      {
        name: "Editor & terminal",
        items: [
          { name: "PyCharm + Claude Code", detail: "Python work lives here. AI pair-programming integrated where it matters." },
          { name: "VS Code", detail: "For non-Python projects and MDX/Markdown work." },
          { name: "iTerm2 + zsh + starship", detail: "Boring, fast, prompts that tell me what I need." },
          { name: "tmux", detail: "Long-running sessions for builds and tailing logs." },
        ],
      },
      {
        name: "Stack defaults",
        items: [
          { name: "Python · Django · FastAPI", detail: "The combination I reach for first for a new SaaS backend." },
          { name: "Postgres", detail: "Single-node until proven otherwise." },
          { name: "Celery + Redis", detail: "Background jobs without ceremony." },
          { name: "Next.js + Tailwind", detail: "Frontend when the product needs one." },
          { name: "Vercel · AWS · Docker", detail: "Deploy targets in increasing order of seriousness." },
        ],
      },
      {
        name: "Day-to-day",
        items: [
          { name: "Linear", detail: "Issues and roadmap. Sharp tool, no Jira ceremony." },
          { name: "Notion", detail: "Project docs and design notes that aren't yet code." },
          { name: "1Password", detail: "Passwords, SSH keys, environment secrets in dev." },
          { name: "Raycast", detail: "Window switching, clipboard, snippets, calculator." },
        ],
      },
    ],
  },
  now: {
    eyebrow: "Now",
    title: "What I'm focused on right now",
    description:
      "A living page — what's on my plate, what I'm reading, what I'm avoiding. Inspired by Derek Sivers's /now movement.",
    updated: "Last updated",
    entries: [
      {
        label: "Working on",
        body: "Backend-heavy SaaS builds for clients shipping production AI features — document workflows, LLM-assisted internal tooling, the boring infrastructure underneath the demo.",
      },
      {
        label: "Learning",
        body: "Going deeper on evaluation harnesses for LLM features — the difference between a demo and a production-grade AI feature is almost always observability and evals.",
      },
      {
        label: "Writing",
        body: "Filling out the long-form Python/Django/FastAPI cluster on this site. The plan is one substantial post a month, plus short notes as I hit interesting walls.",
      },
      {
        label: "Not doing",
        body: "Side projects. New languages. Frontend frameworks I don't already use. The goal this quarter is depth, not breadth.",
      },
    ],
  },
};

const pl: PagesContent = {
  common: {
    backToList: (section) => `← Wróć do listy ${section}`,
    minRead: "min czytania",
    publishedOn: "Opublikowane",
    updatedOn: "Aktualizacja",
    noResults: "Jeszcze pusto — wróć za chwilę.",
    readPost: "Czytaj wpis",
  },
  blog: {
    eyebrow: "Publikacje",
    title: "Notatki z produkcji",
    description:
      "Dłuższe wpisy o Python product engineeringu, architekturze SaaS i mało efektownych decyzjach, które utrzymują produkt na produkcji.",
  },
  notes: {
    eyebrow: "Notatki",
    title: "Krótkie notatki z budowania",
    description:
      "Ściągi, snippety i drobne lekcje — to, co chciałbym, żeby koleżanka z zespołu znalazła, gdy uderzy w tę samą ścianę.",
  },
  projects: {
    eyebrow: "Projekty",
    title: "Rzeczy, które wdrożyłem",
    description:
      "Bliższe spojrzenie na projekty, które rozwiązywały realny problem na produkcji — architektura, kompromisy, efekt.",
    extra: "Więcej na GitHubie",
  },
  about: {
    eyebrow: "O mnie",
    title: "Python product engineer, który dowozi w całym stacku.",
    description:
      "Backend z zawodu. Full-stack z konieczności. Tu jest, jak pracuję i pod co optymalizuję.",
    sections: [
      {
        heading: "Co robię",
        body: "Projektuję i buduję gotowe do produkcji produkty webowe — takie, które obsługują realnych użytkowników, realne pieniądze i realne dane. Mój dom to backend: czyste API, solidne modele danych, zadania w tle i autoryzacja, która nie przecieka. Dowożę efekty, nie tylko endpointy.",
      },
      {
        heading: "Jak pracuję",
        body: "Domyślnie sięgam po nudne, sprawdzone narzędzia i dowożę nimi efekty. Piszę testy tam, gdzie się zwracają, observability tam, gdzie jest potrzebne, i dokumentację tylko wtedy, gdy przyszły czytelnik to ktoś inny niż ja. Walczę z przedwczesną abstrakcją.",
      },
      {
        heading: "Gdzie pomagam najbardziej",
        body: "SaaS-y od zera, gdzie decyzje inżynierskie jeszcze mają znaczenie. Systemy API-first, w których kontrakt jest produktem. Zespoły skalujące kod w Pythonie poza domyślne ramy frameworka. Funkcje z AI, które muszą trafić na produkcję, nie tylko na demo.",
      },
      {
        heading: "Poza edytorem",
        body: "Mieszkam w Polsce, pracuję zdalnie. Poza kodem zwykle jestem na świeżym powietrzu, czytam coś nietechnicznego albo opiekuję się marką Manda, która dała charakter tej stronie.",
      },
    ],
  },
  uses: {
    eyebrow: "Sprzęt i narzędzia",
    title: "Czego używam do pracy",
    description:
      "Sprzęt, oprogramowanie i drobne narzędzia, na których opieram codzienność. Głównie nudne wybory — i o to chodzi.",
    intro:
      "Setup to drugi najbardziej przeceniany temat w inżynierii (zaraz po frameworkach). Ale ludzie pytają, więc tu jest.",
    groups: [
      {
        name: "Sprzęt",
        items: [
          { name: "MacBook Pro 16\"", detail: "Apple silicon, jedyny laptop, na którym naprawdę dobrze mi się pracuje." },
          { name: "Monitor zewnętrzny", detail: "27\" 4K — jeden ekran, duża czcionka, mniej okien." },
          { name: "Keychron K-series", detail: "Mechaniczna, niski profil, brązowe switche." },
        ],
      },
      {
        name: "Edytor i terminal",
        items: [
          { name: "PyCharm + Claude Code", detail: "Tu mieszka praca w Pythonie. AI pair-programming wpięte tam, gdzie ma sens." },
          { name: "VS Code", detail: "Projekty poza Pythonem oraz praca z MDX/Markdown." },
          { name: "iTerm2 + zsh + starship", detail: "Nudne, szybkie, prompt mówi tylko to, co potrzebne." },
          { name: "tmux", detail: "Długie sesje pod buildy i tailowanie logów." },
        ],
      },
      {
        name: "Domyślny stack",
        items: [
          { name: "Python · Django · FastAPI", detail: "Po to sięgam najpierw, gdy startuje nowy backend SaaS." },
          { name: "Postgres", detail: "Jedna instancja, dopóki coś nie udowodni, że trzeba inaczej." },
          { name: "Celery + Redis", detail: "Zadania w tle bez ceremonii." },
          { name: "Next.js + Tailwind", detail: "Frontend, gdy produkt go potrzebuje." },
          { name: "Vercel · AWS · Docker", detail: "Cele wdrożenia po kolei coraz poważniejsze." },
        ],
      },
      {
        name: "Codzienność",
        items: [
          { name: "Linear", detail: "Issues i roadmapa. Ostre narzędzie bez ceremonii Jiry." },
          { name: "Notion", detail: "Dokumentacja projektu i notatki, które nie są jeszcze kodem." },
          { name: "1Password", detail: "Hasła, klucze SSH, sekrety środowiska w dev." },
          { name: "Raycast", detail: "Przełączanie okien, schowek, snippety, kalkulator." },
        ],
      },
    ],
  },
  now: {
    eyebrow: "Teraz",
    title: "Na czym się teraz skupiam",
    description:
      "Strona-żyjąca — co mam na talerzu, co czytam, czego unikam. Inspirowane ruchem /now Dereka Siversa.",
    updated: "Ostatnia aktualizacja",
    entries: [
      {
        label: "Robię",
        body: "Backend-heavy SaaS dla klientów wdrażających produkcyjne funkcje AI — workflow dokumentów, narzędzia wewnętrzne wspierane LLM-ami, mniej widowiskowa infrastruktura pod spodem.",
      },
      {
        label: "Uczę się",
        body: "Wchodzę głębiej w ewaluację funkcji LLM — różnica między demem a produkcyjną funkcją AI to prawie zawsze observability i evaluacje.",
      },
      {
        label: "Piszę",
        body: "Wypełniam długą oś Python/Django/FastAPI na tej stronie. Plan: jeden solidny wpis miesięcznie plus krótkie notatki, kiedy uderzam w ciekawą ścianę.",
      },
      {
        label: "Nie robię",
        body: "Pobocznych projektów. Nowych języków. Frameworków frontowych, których jeszcze nie używam. Ten kwartał to głębia, nie szerokość.",
      },
    ],
  },
};

const PAGES: Record<Locale, PagesContent> = { pl, en };

export function getPages(locale: Locale): PagesContent {
  return PAGES[locale];
}

export const NOW_UPDATED_AT = "2026-05-28";
