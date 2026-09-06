// Illustrative recreations using Tigg Web's real accent tones, not
// screenshots of the production accounting product.

const BLUE = "#0E2C71";
const GRAY_100 = "#EEF1F7";
const GRAY_600 = "#636972";
const GRAY_800 = "#343C46";

export function CurrencyLockedMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-white p-5" style={{ fontFamily: "Inter, sans-serif" }}>
      <span className="text-xs font-semibold" style={{ color: BLUE }}>New Invoice</span>
      <div className="mt-4 space-y-3">
        <div>
          <p className="text-[10px]" style={{ color: GRAY_600 }}>Bank Account</p>
          <div className="mt-1 flex items-center justify-between border px-3 py-2 text-xs" style={{ borderColor: GRAY_100, color: GRAY_800 }}>
            <span>Standard Chartered &mdash; USD</span>
          </div>
        </div>
        <div>
          <p className="text-[10px]" style={{ color: GRAY_600 }}>Currency</p>
          <div className="mt-1 flex items-center justify-between border px-3 py-2 text-xs" style={{ borderColor: BLUE, color: BLUE }}>
            <span>USD &mdash; locked to account</span>
          </div>
        </div>
        <div>
          <p className="text-[10px]" style={{ color: GRAY_600 }}>Exchange Rate (NPR)</p>
          <div className="mt-1 border px-3 py-2 text-xs" style={{ borderColor: GRAY_100, color: GRAY_800 }}>
            132.40
          </div>
        </div>
      </div>
    </div>
  );
}

export function CurrencyDisabledMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-white p-5" style={{ fontFamily: "Inter, sans-serif" }}>
      <span className="text-xs font-semibold" style={{ color: BLUE }}>New Invoice</span>
      <div className="mt-4 space-y-3">
        <div>
          <p className="text-[10px]" style={{ color: GRAY_600 }}>Bank Account</p>
          <div className="mt-1 border px-3 py-2 text-xs" style={{ borderColor: GRAY_100, color: GRAY_800 }}>
            Nabil Bank &mdash; NPR
          </div>
        </div>
        <div className="opacity-40">
          <p className="text-[10px]" style={{ color: GRAY_600 }}>Currency</p>
          <div className="mt-1 border px-3 py-2 text-xs" style={{ borderColor: GRAY_100, color: GRAY_600 }}>
            NPR only &mdash; no exchange rate needed
          </div>
        </div>
      </div>
      <p className="mt-4 text-[10px] italic" style={{ color: GRAY_600 }}>
        Same form. No currency field shown at all for NPR-only accounts.
      </p>
    </div>
  );
}

export function CurrencySweepMockup() {
  const forms = [
    "Bank Statement", "Journal Voucher", "Cash Transfer", "Customer Payment",
    "Supplier Payment", "Quick Receipt", "New Invoice", "Credit Note",
    "Sales Order", "Quotation", "Reconciliation", "Opening Balance",
  ];
  return (
    <div className="flex h-full w-full flex-col bg-white p-5" style={{ fontFamily: "Inter, sans-serif" }}>
      <span className="text-xs font-semibold" style={{ color: BLUE }}>Forms consuming useAccountCurrencyLock</span>
      <div className="mt-3 grid flex-1 grid-cols-2 content-start gap-1.5">
        {forms.map((f) => (
          <div key={f} className="flex items-center gap-1.5 border px-2 py-1.5 text-[10px]" style={{ borderColor: GRAY_100, color: GRAY_800 }}>
            <span className="h-1.5 w-1.5 flex-none" style={{ backgroundColor: BLUE }} />
            {f}
          </div>
        ))}
      </div>
    </div>
  );
}
