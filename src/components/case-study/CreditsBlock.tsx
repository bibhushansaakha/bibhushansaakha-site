export function CreditsBlock({ credits }: { credits: { name: string; role: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-px border hairline bg-line sm:grid-cols-2 lg:grid-cols-4">
      {credits.map((c) => (
        <div key={c.name} className="bg-paper p-5">
          <p className="font-medium text-ink">{c.name}</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">{c.role}</p>
        </div>
      ))}
    </div>
  );
}
