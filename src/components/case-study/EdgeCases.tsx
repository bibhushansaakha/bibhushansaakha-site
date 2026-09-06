export interface EdgeCase {
  case: string;
  handling: string;
}

export function EdgeCases({ cases }: { cases: EdgeCase[] }) {
  return (
    <div className="grid grid-cols-1 gap-px border hairline bg-line sm:grid-cols-2">
      {cases.map((c) => (
        <div key={c.case} className="bg-paper p-5">
          <p className="flex items-baseline gap-2 font-medium text-ink">
            <span className="font-mono text-xs text-rust">!</span>
            {c.case}
          </p>
          <p className="mt-2 pl-4 text-base leading-relaxed text-ink/75">{c.handling}</p>
        </div>
      ))}
    </div>
  );
}
