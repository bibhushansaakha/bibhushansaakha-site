const SLATE = "#1D2530";
const ACCENT = "#2D6CDF";
const GRAY = "#6B645C";

export function DimeDashboardMockup() {
  const bars = [40, 65, 30, 80, 55, 45, 70, 90, 35, 60, 50, 75];
  return (
    <div className="flex h-full w-full flex-col bg-white p-5" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold" style={{ color: SLATE }}>Monthly Spend</span>
        <span className="font-mono text-[10px]" style={{ color: GRAY }}>Last 12 months</span>
      </div>
      <div className="mt-4 flex flex-1 items-end gap-1.5">
        {bars.map((h, i) => (
          <div key={i} className="flex-1" style={{ height: `${h}%`, backgroundColor: i === 7 ? ACCENT : "#E4E0D8" }} />
        ))}
      </div>
    </div>
  );
}

export function DimeCategoriesMockup() {
  const cats = [
    { name: "Food & Dining", pct: 32 },
    { name: "Transport", pct: 21 },
    { name: "Subscriptions", pct: 14 },
    { name: "Rent", pct: 24 },
    { name: "Other", pct: 9 },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-white p-5" style={{ fontFamily: "Inter, sans-serif" }}>
      <span className="text-xs font-semibold" style={{ color: SLATE }}>Categories, this month</span>
      <div className="mt-4 flex-1 space-y-2.5">
        {cats.map((c) => (
          <div key={c.name}>
            <div className="flex justify-between text-[10px]" style={{ color: GRAY }}>
              <span>{c.name}</span>
              <span className="font-mono">{c.pct}%</span>
            </div>
            <div className="mt-1 h-1.5 w-full bg-[#EEEAE3]">
              <div className="h-1.5" style={{ width: `${c.pct * 2.5}%`, backgroundColor: ACCENT }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DimeImportMockup() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-white p-5 text-center" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="border-2 border-dashed px-8 py-6" style={{ borderColor: "#DAD4CA" }}>
        <p className="text-xs font-semibold" style={{ color: SLATE }}>statement.csv</p>
        <p className="mt-1 font-mono text-[10px]" style={{ color: GRAY }}>842 rows &middot; parsed locally</p>
      </div>
      <p className="mt-4 max-w-[220px] text-[10px] leading-relaxed" style={{ color: GRAY }}>
        Nothing is uploaded anywhere. PapaParse runs in the browser tab and the file never leaves the machine.
      </p>
    </div>
  );
}
