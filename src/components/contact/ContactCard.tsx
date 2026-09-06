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
      className="flex items-center gap-4 rounded-xl border border-ink-100 bg-white p-5 transition-colors hover:border-ink-300"
    >
      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent/10 text-accent">
        {icon}
      </span>
      <span>
        <span className="block text-xs font-medium uppercase tracking-widest text-ink-400">
          {label}
        </span>
        <span className="mt-0.5 block font-medium text-ink-900">{value}</span>
      </span>
    </a>
  );
}
