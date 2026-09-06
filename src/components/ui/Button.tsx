import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/motion/Magnetic";

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
    "inline-flex items-center gap-2 border px-6 py-3 text-sm font-medium uppercase tracking-wider transition-colors duration-300",
    variant === "primary"
      ? "border-ink bg-ink text-paper hover:bg-transparent hover:text-ink"
      : "border-ink bg-transparent text-ink hover:bg-ink hover:text-paper",
    className
  );

  const content = (
    <>
      {children}
      {external && <ArrowUpRight size={15} />}
    </>
  );

  if (external) {
    return (
      <Magnetic className="inline-block">
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
        </a>
      </Magnetic>
    );
  }

  return (
    <Magnetic className="inline-block">
      <Link href={href} className={classes}>
        {content}
      </Link>
    </Magnetic>
  );
}
