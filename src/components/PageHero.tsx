import { Eyebrow } from "./icons";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="page-hero">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="section-title page-hero-title">{title}</h1>
      {description ? <p className="section-sub page-hero-sub">{description}</p> : null}
    </header>
  );
}
