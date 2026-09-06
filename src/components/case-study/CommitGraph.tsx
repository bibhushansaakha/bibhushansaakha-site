"use client";

/**
 * An honest visual representation of real, day-by-day commit activity,
 * not a decorative chart. `data` should be actual daily commit counts.
 */
export function CommitGraph({
  data,
  totalLabel,
}: {
  data: number[];
  totalLabel: string;
}) {
  const max = Math.max(...data, 1);
  return (
    <div className="border hairline p-6 sm:p-8">
      <div className="flex items-end gap-1 sm:gap-1.5" style={{ height: "120px" }}>
        {data.map((v, i) => (
          <div
            key={i}
            className="flex-1 bg-accent/80 transition-colors hover:bg-accent"
            style={{ height: `${Math.max((v / max) * 100, 3)}%` }}
            title={`${v} commit${v === 1 ? "" : "s"}`}
          />
        ))}
      </div>
      <p className="mt-4 font-mono text-xs uppercase tracking-wider text-muted">
        {totalLabel}
      </p>
    </div>
  );
}
