export function ConstraintsList({ constraints }: { constraints: string[] }) {
  return (
    <ol className="border hairline">
      {constraints.map((c, i) => (
        <li
          key={c}
          className={`grid grid-cols-[3rem_1fr] gap-4 p-5 sm:p-6 ${
            i !== constraints.length - 1 ? "border-b hairline" : ""
          }`}
        >
          <span className="font-mono text-sm tabular text-accent">{String(i + 1).padStart(2, "0")}</span>
          <p className="text-base leading-relaxed text-ink/80">{c}</p>
        </li>
      ))}
    </ol>
  );
}
