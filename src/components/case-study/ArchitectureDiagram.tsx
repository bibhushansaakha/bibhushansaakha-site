import { ArrowRight, ArrowDown } from "lucide-react";

export interface DiagramNode {
  label: string;
  detail?: string;
}

/**
 * A simple, honest boxes-and-arrows diagram \u2014 not a fabricated technical
 * illustration, just a visual restatement of a real architecture described
 * in the surrounding text (e.g. "one hook, consumed by twelve forms").
 */
export function ArchitectureDiagram({
  source,
  targets,
}: {
  source: DiagramNode;
  targets: DiagramNode[];
}) {
  return (
    <div className="border hairline p-6 sm:p-10">
      <div className="flex flex-col items-center">
        <div className="border-2 border-ink bg-ink px-6 py-4 text-center text-paper">
          <p className="font-mono text-sm font-medium">{source.label}</p>
          {source.detail && <p className="mt-1 text-xs text-paper/70">{source.detail}</p>}
        </div>
        <ArrowDown className="my-4 text-muted" size={20} />
        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {targets.map((t) => (
            <div key={t.label} className="flex items-center gap-2 border hairline px-3 py-3">
              <ArrowRight size={13} className="flex-none text-accent" />
              <span className="text-xs text-ink/85">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
