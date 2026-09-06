export interface Alternative {
  option: string;
  verdict: "rejected" | "chosen";
  reasoning: string;
}

export function AlternativesConsidered({ options }: { options: Alternative[] }) {
  return (
    <div className="divide-y hairline border hairline">
      {options.map((o) => (
        <div key={o.option} className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-6 sm:p-6">
          <div>
            <h4 className="font-medium text-ink">{o.option}</h4>
            <p className="mt-1.5 text-base leading-relaxed text-ink/75">{o.reasoning}</p>
          </div>
          <span
            className={`inline-flex w-fit items-center border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider ${
              o.verdict === "chosen"
                ? "border-accent text-accent"
                : "border-rust/40 text-rust"
            }`}
          >
            {o.verdict === "chosen" ? "Chosen" : "Rejected"}
          </span>
        </div>
      ))}
    </div>
  );
}
