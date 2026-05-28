import type { SiteContent } from "@/lib/content";

export function Clients({ c }: { c: SiteContent }) {
  return (
    <section className="clients reveal" aria-label={c.clients.label}>
      <p className="clients-label">{c.clients.label}</p>
      <div className="clients-row">
        {[0, 1, 2, 3, 4].map((i) => (
          <div className="logo-slot" key={i} title="Placeholder — replace with a real logo">
            <span className="logo-slot-mark" aria-hidden="true" />
            <span className="logo-slot-text">LOGO</span>
          </div>
        ))}
      </div>
    </section>
  );
}
