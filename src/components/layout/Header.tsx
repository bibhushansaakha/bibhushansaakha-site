"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/now", label: "Now" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100/80 bg-ink-50/80 backdrop-blur-md">
      <Container>
        <nav
          className="flex h-16 items-center justify-between"
          aria-label="Primary"
        >
          <Link
            href="/"
            className="font-display text-lg font-medium tracking-tight text-ink-900"
            onClick={() => setOpen(false)}
          >
            Bibhushan Saakha
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "text-sm transition-colors hover:text-ink-900",
                      active ? "text-ink-900 font-medium" : "text-ink-500"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-ink-700 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </Container>

      {open && (
        <div className="border-t border-ink-100 bg-ink-50 md:hidden">
          <Container>
            <ul className="flex flex-col gap-1 py-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-2 py-2.5 text-base text-ink-700 hover:bg-ink-100"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
