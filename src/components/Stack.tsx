import type { SiteContent } from "@/lib/content";
import { Eyebrow } from "./icons";

export function Stack({ c }: { c: SiteContent }) {
  return (
    <section className="section" id="stack">
      <div className="section-head reveal">
        <Eyebrow>{c.stack.eyebrow}</Eyebrow>
        <h2 className="section-title">{c.stack.title}</h2>
        <p className="section-sub">{c.stack.sub}</p>
      </div>
      <div className="stack-grid">
        {c.stack.groups.map((g, i) => (
          <div className="stack-card reveal" key={g.name}>
            <div className="stack-card-head">
              <span className="stack-index">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="stack-name">{g.name}</h3>
            </div>
            <ul className="chip-list">
              {g.items.map((it) => (
                <li className="chip" key={it}>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
