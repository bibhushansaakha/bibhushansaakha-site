import { ReactNode } from "react";

export function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      data-cursor="hover"
      className="group flex items-center gap-4 border hairline p-5 transition-colors hover:border-ink"
    >
      <span className="flex h-10 w-10 flex-none items-center justify-center border hairline text-accent">
        {icon}
      </span>
      <span>
        <span className="block font-mono text-[11px] uppercase tracking-wider text-muted">
          {label}
        </span>
        <span className="mt-0.5 block font-medium text-ink">{value}</span>
      </span>
    </a>
  );
}
