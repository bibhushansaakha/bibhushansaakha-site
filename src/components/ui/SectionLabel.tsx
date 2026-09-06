export function SectionLabel({
  index,
  total = "06",
  title,
}: {
  index: string;
  total?: string;
  title: string;
}) {
  return (
    <div className="mb-10 flex items-baseline gap-4 sm:mb-14">
      <span className="font-mono text-xs tabular text-muted">
        {index} / {total}
      </span>
      <span className="h-px flex-1 hairline bg-line" />
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {title}
      </h2>
    </div>
  );
}
