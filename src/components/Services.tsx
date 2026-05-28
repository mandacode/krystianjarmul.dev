import type { SiteContent } from "@/lib/content";
import { Eyebrow } from "./icons";

export function Services({ c }: { c: SiteContent }) {
  return (
    <section className="section" id="services">
      <div className="section-head reveal">
        <Eyebrow>{c.services.eyebrow}</Eyebrow>
        <h2 className="section-title">{c.services.title}</h2>
        <p className="section-sub">{c.services.sub}</p>
      </div>
      <div className="services-grid">
        {c.services.items.map((s, i) => (
          <article className="service-card reveal" key={s.t}>
            <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="service-title">{s.t}</h3>
            <p className="service-desc">{s.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
