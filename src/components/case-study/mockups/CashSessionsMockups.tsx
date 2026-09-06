// Illustrative recreations built with Tigg POS's actual design tokens
// (primary blue #143E9F, grays from the real Chakra theme), not screenshots
// of the production product. No real customer or business data.

const POS_BLUE = "#143E9F";
const POS_GREEN = "#1DB954";
const GRAY_100 = "#EEF1F7";
const GRAY_600 = "#636972";
const GRAY_800 = "#343C46";

export function SessionListMockup() {
  const rows = [
    { id: "S-0412", cashier: "Ramesh T.", opened: "07:58", status: "Balanced", color: POS_GREEN },
    { id: "S-0411", cashier: "Anjali G.", opened: "07:52", status: "Short", color: "#FF3350" },
    { id: "S-0410", cashier: "Sita S.", opened: "07:45", status: "Excess", color: "#FFA726" },
    { id: "S-0409", cashier: "Ramesh T.", opened: "Yesterday", status: "Balanced", color: POS_GREEN },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-white p-5" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: GRAY_100 }}>
        <span className="text-xs font-semibold" style={{ color: POS_BLUE }}>Cash Sessions</span>
        <span className="rounded-none border px-2 py-1 text-[10px]" style={{ borderColor: GRAY_100, color: GRAY_600 }}>
          Filter: All
        </span>
      </div>
      <div className="mt-3 flex-1 space-y-2 overflow-hidden">
        {rows.map((r) => (
          <div key={r.id} className="flex items-center justify-between px-2 py-2" style={{ backgroundColor: GRAY_100 }}>
            <div>
              <p className="text-xs font-medium" style={{ color: GRAY_800 }}>{r.id} &middot; {r.cashier}</p>
              <p className="text-[10px]" style={{ color: GRAY_600 }}>Opened {r.opened}</p>
            </div>
            <span
              className="px-2 py-0.5 text-[10px] font-semibold text-white"
              style={{ backgroundColor: r.color }}
            >
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DenominationMockup() {
  const notes = [
    { label: "NPR 1000", count: 12 },
    { label: "NPR 500", count: 8 },
    { label: "NPR 100", count: 20 },
    { label: "NPR 50", count: 6 },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-white p-5" style={{ fontFamily: "Inter, sans-serif" }}>
      <span className="text-xs font-semibold" style={{ color: POS_BLUE }}>Closing &mdash; Count Denominations</span>
      <div className="mt-3 flex-1 space-y-1.5">
        {notes.map((n) => (
          <div key={n.label} className="flex items-center justify-between border-b py-1.5 text-xs" style={{ borderColor: GRAY_100, color: GRAY_800 }}>
            <span>{n.label}</span>
            <span className="border px-2 py-0.5 font-mono" style={{ borderColor: GRAY_100 }}>{n.count}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between border-t pt-3 text-xs font-semibold" style={{ borderColor: GRAY_100, color: POS_BLUE }}>
        <span>Counted total</span>
        <span>NPR 20,800</span>
      </div>
    </div>
  );
}

export function AuditTrailMockup() {
  const moves = [
    { time: "09:14", type: "Cash In", note: "Petty cash top-up", amt: "+500" },
    { time: "11:02", type: "Cash Out", note: "Supplier payment", amt: "-2,400" },
    { time: "13:40", type: "Cash In", note: "Sale settlement", amt: "+1,850" },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-white p-5" style={{ fontFamily: "Inter, sans-serif" }}>
      <span className="text-xs font-semibold" style={{ color: POS_BLUE }}>Session S-0412 &mdash; Movements</span>
      <div className="mt-3 flex-1 space-y-2">
        {moves.map((m) => (
          <div key={m.time} className="border-l-2 pl-3" style={{ borderColor: POS_BLUE }}>
            <div className="flex items-center justify-between text-xs" style={{ color: GRAY_800 }}>
              <span className="font-medium">{m.type}</span>
              <span className="font-mono">{m.amt}</span>
            </div>
            <p className="text-[10px]" style={{ color: GRAY_600 }}>{m.time} &middot; {m.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
