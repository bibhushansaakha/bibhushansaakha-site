import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-all",
    variant === "primary"
      ? "bg-ink-900 text-white hover:bg-ink-700"
      : "border border-ink-200 text-ink-900 hover:border-ink-400 hover:bg-ink-100",
    className
  );

  const content = (
    <>
      {children}
      {external && <ArrowUpRight size={16} />}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
