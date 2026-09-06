import { BrowserFrame } from "../BrowserFrame";
import { Barcode, PackageSearch, ArrowLeftRight } from "lucide-react";

const rows = [
  { name: "Paracetamol 500mg", batch: "BTC-2214", exp: "Dec 2026", qty: 120, mode: "Batch" },
  { name: "Amoxicillin 250mg", batch: "BTC-2098", exp: "Mar 2027", qty: 64, mode: "Batch" },
  { name: "iPhone Charger 20W", batch: "SN-88213", exp: "\u2014", qty: 1, mode: "Serial" },
  { name: "Wireless Mouse", batch: "SN-88214", exp: "\u2014", qty: 1, mode: "Serial" },
];

export function BatchSerialMockup() {
  return (
    <BrowserFrame label={"Inventory \u203a Batch & Serial Report"}>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-xs text-ink-500 shadow-sm">
          <Barcode size={14} className="text-accent" /> Scan to track
        </div>
        <div className="rounded-md bg-white px-3 py-1.5 text-xs text-ink-500 shadow-sm">
          Location: All
        </div>
        <div className="rounded-md bg-white px-3 py-1.5 text-xs text-ink-500 shadow-sm">
          Date range: Last 30 days
        </div>
        <div className="ml-auto flex items-center gap-1.5 rounded-md bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent">
          <ArrowLeftRight size={14} /> Multi-batch aware
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-ink-100 bg-white">
        <div className="grid grid-cols-[1fr_auto_auto_auto_auto] gap-3 border-b border-ink-100 bg-ink-50 px-4 py-2 text-[11px] font-medium uppercase tracking-wide text-ink-400">
          <span>Product</span>
          <span>Batch / Serial</span>
          <span>Expiry</span>
          <span>Qty</span>
          <span>Mode</span>
        </div>
        {rows.map((row) => (
          <div
            key={row.batch}
            className="grid grid-cols-[1fr_auto_auto_auto_auto] items-center gap-3 border-b border-ink-50 px-4 py-3 text-sm last:border-0"
          >
            <span className="flex items-center gap-2 text-ink-800">
              <PackageSearch size={14} className="text-ink-300" />
              {row.name}
            </span>
            <span className="font-mono text-xs text-ink-500">{row.batch}</span>
            <span className="text-xs text-ink-400">{row.exp}</span>
            <span className="text-xs text-ink-500">{row.qty}</span>
            <span
              className={`justify-self-start rounded-full px-2 py-0.5 text-[11px] font-medium ${
                row.mode === "Batch"
                  ? "bg-accent/10 text-accent"
                  : "bg-ink-100 text-ink-600"
              }`}
            >
              {row.mode}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-ink-400">
        Illustrative recreation for portfolio purposes, not the production interface.
      </p>
    </BrowserFrame>
  );
}
