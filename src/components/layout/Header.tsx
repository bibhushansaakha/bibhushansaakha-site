"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { KathmanduClock } from "@/components/ui/KathmanduClock";

const navItems = [
  { href: "/work", label: "Work", n: "01" },
  { href: "/about", label: "About", n: "02" },
  { href: "/now", label: "Now", n: "03" },
  { href: "/contact", label: "Contact", n: "04" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b hairline bg-paper/90 backdrop-blur-md">
      <Container>
        <nav
          className="flex h-20 items-center justify-between"
          aria-label="Primary"
        >
          <Link
            href="/"
            className="font-mono text-sm font-medium uppercase tracking-wider text-ink"
            onClick={() => setOpen(false)}
            data-cursor="hover"
          >
            Bibhushan Saakha
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => {
                const active =
                  pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      data-cursor="hover"
                      className={clsx(
                        "group flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider transition-colors",
                        active ? "text-ink" : "text-muted hover:text-ink"
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      <span className="text-[10px] text-line group-hover:text-accent">{item.n}</span>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <span className="h-4 w-px bg-line" />
            <KathmanduClock />
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </Container>

      {open && (
        <div className="border-t hairline bg-paper md:hidden">
          <Container>
            <ul className="flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 py-3 font-mono text-sm uppercase tracking-wider text-ink"
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-xs text-muted">{item.n}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border-t hairline py-3">
              <KathmanduClock />
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
