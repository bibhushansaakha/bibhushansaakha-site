import { CountUp } from "@/components/motion/CountUp";
import { RevealGroup } from "@/components/motion/Reveal";

export interface ResearchFinding {
  value: string;
  label: string;
  source?: string;
}

export function ResearchStats({ findings }: { findings: ResearchFinding[] }) {
  return (
    <RevealGroup className="grid grid-cols-1 gap-px border hairline bg-line sm:grid-cols-2 lg:grid-cols-4">
      {findings.map((f) => (
        <div key={f.label} className="bg-paper p-6">
          <dd className="font-mono text-3xl tabular text-ink sm:text-4xl">
            <CountUp value={f.value} />
          </dd>
          <p className="mt-3 text-sm leading-snug text-ink/80">{f.label}</p>
          {f.source && (
            <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted">
              {f.source}
            </p>
          )}
        </div>
      ))}
    </RevealGroup>
  );
}
