export interface Phase {
  range: string;
  title: string;
  detail: string;
}

export function PhaseTimeline({ phases }: { phases: Phase[] }) {
  return (
    <div className="space-y-0 border hairline">
      {phases.map((p, i) => (
        <div
          key={p.title}
          className={`grid grid-cols-1 gap-2 p-5 sm:grid-cols-[8rem_1fr] sm:gap-6 sm:p-6 ${
            i !== phases.length - 1 ? "border-b hairline" : ""
          }`}
        >
          <span className="font-mono text-xs uppercase tracking-wider text-accent">{p.range}</span>
          <div>
            <h4 className="font-medium text-ink">{p.title}</h4>
            <p className="mt-1.5 text-base leading-relaxed text-ink/75">{p.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
