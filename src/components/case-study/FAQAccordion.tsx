"use client";

import { useState } from "react";

export interface FAQItem {
  q: string;
  a: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y hairline border hairline">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              data-cursor="hover"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-ink">{item.q}</span>
              <span className="flex-none font-mono text-lg text-accent">{isOpen ? "\u2212" : "+"}</span>
            </button>
            {isOpen && (
              <div className="px-5 pb-6 sm:px-6">
                <p className="max-w-2xl text-base leading-relaxed text-ink/75">{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
