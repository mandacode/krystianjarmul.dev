import Image from "next/image";
import type { SiteContent } from "@/lib/content";
import { Eyebrow } from "./icons";

export function About({ c }: { c: SiteContent }) {
  return (
    <section className="section about" id="about">
      <div className="about-grid">
        <div className="about-copy reveal">
          <Eyebrow>{c.about.eyebrow}</Eyebrow>
          <h2 className="section-title about-title">{c.about.title}</h2>
          {c.about.body.map((p, i) => (
            <p className="about-para" key={i}>
              {p}
            </p>
          ))}
        </div>
        <aside className="about-facts reveal">
          <div className="about-portrait" role="img" aria-label="Krystian Jarmuł">
            <Image
              src="/assets/krystian.jpg"
              alt="Krystian Jarmuł"
              fill
              sizes="(max-width: 980px) 480px, 420px"
              className="about-portrait-img"
            />
            <div className="about-portrait-glow" aria-hidden="true" />
            <div className="about-portrait-tint" aria-hidden="true" />
          </div>
          <dl className="facts">
            {c.about.facts.map((f) => (
              <div className="fact" key={f.k}>
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
