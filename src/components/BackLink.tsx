import Link from "next/link";

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link className="back-link" href={href}>
      {label}
    </Link>
  );
}
