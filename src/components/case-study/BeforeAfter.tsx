export function BeforeAfter({
  before,
  after,
}: {
  before: { title: string; points: string[] };
  after: { title: string; points: string[] };
}) {
  return (
    <div className="grid grid-cols-1 border hairline sm:grid-cols-2">
      <div className="border-b hairline p-6 sm:border-b-0 sm:border-r sm:p-8">
        <p className="font-mono text-xs uppercase tracking-wider text-rust">{before.title}</p>
        <ul className="mt-4 space-y-3">
          {before.points.map((p) => (
            <li key={p} className="flex gap-2 text-sm leading-relaxed text-ink/80">
              <span className="text-rust">–</span> {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">{after.title}</p>
        <ul className="mt-4 space-y-3">
          {after.points.map((p) => (
            <li key={p} className="flex gap-2 text-sm leading-relaxed text-ink/80">
              <span className="text-accent">+</span> {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
