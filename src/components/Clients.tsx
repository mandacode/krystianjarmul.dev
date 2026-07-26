import Image from "next/image";
import type { SiteContent } from "@/lib/content";

const CLIENTS = [
  { name: "Travatar", logo: "/assets/travatar.svg", url: "https://travatar.ai/en" },
  { name: "Cannabase", logo: "/assets/cannabase.svg", url: "https://cannabase.pl/" },
];

export function Clients({ c }: { c: SiteContent }) {
  return (
    <section className="clients reveal" aria-label={c.clients.label}>
      <p className="clients-label">{c.clients.label}</p>
      <div className="clients-row">
        {CLIENTS.map((client) => (
          <a
            className="client-logo"
            href={client.url}
            target="_blank"
            rel="noreferrer noopener"
            key={client.name}
          >
            <Image
              className="client-mark"
              src={client.logo}
              alt={`${client.name} logo`}
              width={34}
              height={28}
            />
            <span className="client-name">{client.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
