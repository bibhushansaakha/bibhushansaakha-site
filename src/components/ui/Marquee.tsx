"use client";

import { ReactNode } from "react";

/**
 * An infinite horizontal marquee, pure CSS animation (no JS scroll listeners).
 * Pauses on hover so it never fights someone trying to read it.
 */
export function Marquee({ items }: { items: ReactNode[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="group relative overflow-hidden border-y hairline py-6">
      <div className="animate-marquee flex w-max gap-12 group-hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-12 whitespace-nowrap">
            <span className="font-mono text-sm uppercase tracking-wider text-muted">
              {item}
            </span>
            <span className="text-line">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
