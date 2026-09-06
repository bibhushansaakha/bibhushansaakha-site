/**
 * A poster-style cover for case studies without a real screenshot to show
 * (internal tooling, or a personal tool without a dedicated hero shot).
 * Deliberately typographic rather than a fabricated UI mockup \u2014 in the
 * spirit of the rest of the site, and using real brand colors where the
 * project has one (e.g. Tigg's actual POS blue).
 */
export function TypographicCover({
  index,
  title,
  meta,
  color = "#14110F",
}: {
  index: string;
  title: string;
  meta: string;
  color?: string;
}) {
  return (
    <div
      className="flex h-full w-full flex-col justify-between p-8"
      style={{ backgroundColor: color }}
    >
      <div className="flex items-center justify-end gap-3 font-mono text-xs uppercase tracking-wider text-white/60">
        {index && <span>{index}</span>}
        <span>{meta}</span>
      </div>
      <h3 className="text-4xl font-medium leading-[0.95] tracking-tight text-white sm:text-5xl">
        {title}
      </h3>
    </div>
  );
}
