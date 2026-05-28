import Image from "next/image";
import { LINKS, type SiteContent } from "@/lib/content";

export function Footer({ c }: { c: SiteContent }) {
  const year = 2026;
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Image
            src="/assets/logo-manda-purple.png"
            alt="Manda"
            width={50}
            height={50}
            className="footer-logo"
          />
          <div>
            <p className="footer-name">Krystian Jarmuł</p>
            <p className="footer-tag">{c.footer.tagline}</p>
          </div>
        </div>
        <div className="footer-links">
          <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
          <a href={LINKS.github} target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {year} Krystian Jarmuł. {c.footer.rights}
        </span>
        <span className="footer-built">{c.footer.built}</span>
      </div>
    </footer>
  );
}
