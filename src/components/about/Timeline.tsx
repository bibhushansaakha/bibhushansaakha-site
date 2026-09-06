import { timeline } from "@/lib/content/timeline";
import { RevealGroup } from "@/components/motion/Reveal";

export function Timeline() {
  return (
    <RevealGroup className="divide-y hairline border-t border-b hairline">
      {timeline.map((entry) => (
        <div
          key={`${entry.period}-${entry.title}`}
          className="grid grid-cols-1 gap-2 py-8 sm:grid-cols-[8rem_1fr]"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-accent">{entry.period}</p>
          <div>
            <h3 className="text-xl font-medium text-ink">
              {entry.title}
              {entry.org && <span className="font-normal text-muted"> · {entry.org}</span>}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{entry.description}</p>
          </div>
        </div>
      ))}
    </RevealGroup>
  );
}
