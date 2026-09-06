import { timeline } from "@/lib/content/timeline";

export function Timeline() {
  return (
    <ol className="relative border-l border-ink-200 pl-8">
      {timeline.map((entry) => (
        <li key={`${entry.period}-${entry.title}`} className="mb-10 last:mb-0">
          <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-accent" />
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            {entry.period}
          </p>
          <h3 className="mt-1 font-display text-xl text-ink-900">
            {entry.title}
            {entry.org && (
              <span className="font-sans text-base font-normal text-ink-400">
                {" "}
                &middot; {entry.org}
              </span>
            )}
          </h3>
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink-500">
            {entry.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
