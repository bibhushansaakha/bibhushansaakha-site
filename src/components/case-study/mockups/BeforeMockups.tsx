// Illustrative "before" states used only in comparison sliders \u2014
// reconstructions of the described prior state, not screenshots of any
// real product (the Tigg "before" states here predate the features
// entirely, so nothing exists to screenshot).

const GRAY_100 = "#EEF1F7";
const GRAY_500 = "#91979F";
const GRAY_800 = "#343C46";

export function NoSessionMockup() {
  const rows = [
    { time: "09:14", item: "Sale #4021", amt: "1,850" },
    { time: "09:41", item: "Sale #4022", amt: "420" },
    { time: "10:02", item: "Refund #4019", amt: "-600" },
    { time: "11:18", item: "Sale #4023", amt: "2,100" },
  ];
  return (
    <div className="flex h-full w-full flex-col bg-white p-5" style={{ fontFamily: "Inter, sans-serif" }}>
      <span className="text-xs font-semibold" style={{ color: GRAY_800 }}>Transactions</span>
      <p className="mt-1 font-mono text-[10px]" style={{ color: GRAY_500 }}>No cashier, shift, or till record attached</p>
      <div className="mt-3 flex-1 space-y-1.5">
        {rows.map((r) => (
          <div key={r.time} className="flex items-center justify-between border-b py-1.5 text-xs" style={{ borderColor: GRAY_100, color: GRAY_800 }}>
            <span>{r.time} &middot; {r.item}</span>
            <span className="font-mono">{r.amt}</span>
          </div>
        ))}
      </div>
      <p className="mt-2 text-[10px] italic" style={{ color: GRAY_500 }}>No opening balance. No closing count. No audit trail.</p>
    </div>
  );
}

export function InconsistentCurrencyMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-white p-5" style={{ fontFamily: "Inter, sans-serif" }}>
      <span className="text-xs font-semibold" style={{ color: GRAY_800 }}>New Invoice</span>
      <div className="mt-4 space-y-3">
        <div>
          <p className="text-[10px]" style={{ color: GRAY_500 }}>Bank Account</p>
          <div className="mt-1 border px-3 py-2 text-xs" style={{ borderColor: GRAY_100, color: GRAY_800 }}>
            Nabil Bank &mdash; NPR
          </div>
        </div>
        <div>
          <p className="text-[10px]" style={{ color: GRAY_500 }}>Currency (always shown, every form different)</p>
          <div className="mt-1 border px-3 py-2 text-xs" style={{ borderColor: "#FF3350", color: GRAY_800 }}>
            USD, EUR, NPR, INR, GBP &hellip;
          </div>
        </div>
        <div>
          <p className="text-[10px]" style={{ color: GRAY_500 }}>Exchange Rate</p>
          <div className="mt-1 border px-3 py-2 text-xs" style={{ borderColor: "#FF3350", color: GRAY_800 }}>
            118.20 <span className="italic" style={{ color: GRAY_500 }}>(stale, from last account)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GenericTrackerMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-[#F3FAF9] p-5" style={{ fontFamily: "Inter, sans-serif" }}>
      <span className="text-xs font-semibold" style={{ color: "#0F766E" }}>CycleCare</span>
      <div className="mt-6 flex flex-1 flex-col items-center justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-4" style={{ borderColor: "#14B8A6" }}>
          <span className="text-lg font-bold" style={{ color: "#0F766E" }}>Day 22</span>
        </div>
        <p className="mt-4 text-xs" style={{ color: "#334155" }}>Cycle Phase: Luteal</p>
      </div>
      <p className="text-[10px] italic" style={{ color: "#64748B" }}>English only. No pregnancy, postpartum, or loss states. Translated from a US template.</p>
    </div>
  );
}

export function PlacardMockup() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[#EDE7DD] p-6 text-center" style={{ fontFamily: "Georgia, serif" }}>
      <div className="border-2 border-[#8B7A5E] bg-[#F5F0E6] px-6 py-8">
        <p className="text-sm font-bold tracking-wide text-[#4A4033]">COPPER MAHADEV HEAD</p>
        <div className="my-3 h-px w-full bg-[#8B7A5E]" />
        <p className="max-w-[180px] text-[10px] leading-relaxed text-[#6B5F4D]">
          Panauti Museum, 18th century. Part of Indreshwor Mahadev Temple complex.
        </p>
        <p className="mt-3 font-mono text-[9px] text-[#8B7A5E]">Nepali only &middot; no audio &middot; no further reading</p>
      </div>
    </div>
  );
}

export function InconsistentAppMockup() {
  return (
    <div className="flex h-full w-full flex-col gap-2 bg-[#F4F4F4] p-4" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="rounded-lg bg-white p-3 shadow-sm">
        <p className="text-xs font-bold text-[#1E9E52]">Restaurant Name</p>
        <p className="text-[9px] text-[#888]">Rounded card, soft shadow</p>
      </div>
      <div className="border-2 border-[#FF6B35] p-3">
        <p className="text-xs font-bold text-[#FF6B35]">Chicken Burger Promo</p>
        <p className="text-[9px] text-[#888]">Different accent, sharp border</p>
      </div>
      <div className="bg-[#2B2B2B] p-3">
        <p className="text-xs font-bold text-white">Order Details</p>
        <p className="text-[9px] text-[#AAA]">Dark card, third style entirely</p>
      </div>
      <p className="mt-1 text-center text-[9px] italic text-[#888]">Three screens, three visual systems</p>
    </div>
  );
}

export function LedgerMockup() {
  const rows = [
    ["03/14", "SUPERMARKET PURCHASE", "-2,450.00"],
    ["03/14", "ATM WITHDRAWAL FEE", "-25.00"],
    ["03/15", "SALARY DEP", "85,000.00"],
    ["03/16", "MERCHANT PMT 4471", "-1,200.00"],
    ["03/17", "UTIL AUTOPAY", "-3,100.00"],
  ];
  return (
    <div className="flex h-full w-full flex-col bg-white p-5" style={{ fontFamily: "monospace" }}>
      <span className="text-xs font-semibold text-[#333]">statement_export_final_v2.csv</span>
      <div className="mt-3 flex-1 space-y-1 text-[9px] text-[#555]">
        {rows.map((r, i) => (
          <div key={i} className="flex justify-between border-b border-[#EEE] py-1">
            <span>{r[0]}</span>
            <span className="flex-1 truncate px-2">{r[1]}</span>
            <span>{r[2]}</span>
          </div>
        ))}
      </div>
      <p className="mt-2 text-[9px] italic text-[#999]">Raw rows. No categories. No pattern visible.</p>
    </div>
  );
}
