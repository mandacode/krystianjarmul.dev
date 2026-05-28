import { LINKS, type SiteContent } from "@/lib/content";
import { Eyebrow, GithubIcon, LinkedinIcon, MailIcon } from "./icons";

export function Contact({ c }: { c: SiteContent }) {
  return (
    <section className="section contact" id="contact">
      <div className="contact-inner reveal">
        <Eyebrow>{c.contact.eyebrow}</Eyebrow>
        <h2 className="contact-title">{c.contact.title}</h2>
        <p className="contact-sub">{c.contact.sub}</p>
        <a className="btn btn-primary btn-lg" href={`mailto:${LINKS.email}`}>
          <MailIcon />
          <span>{c.contact.ctaPrimary}</span>
        </a>
        <p className="contact-email">{LINKS.email}</p>
        <div className="contact-or">
          <span className="rule" aria-hidden="true" />
          <span>{c.contact.or}</span>
          <span className="rule" aria-hidden="true" />
        </div>
        <div className="contact-socials">
          <a className="social" href={LINKS.github} target="_blank" rel="noreferrer noopener">
            <GithubIcon />
            <span>{LINKS.githubLabel}</span>
          </a>
          <a className="social" href={LINKS.linkedin} target="_blank" rel="noreferrer noopener">
            <LinkedinIcon />
            <span>{LINKS.linkedinLabel}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
