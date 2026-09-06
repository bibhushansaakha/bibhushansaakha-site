import { BrowserFrame } from "../BrowserFrame";
import { Utensils, Navigation } from "lucide-react";

export function ARestroMockup() {
  return (
    <BrowserFrame label={"ARestro \u2014 AR discovery view"}>
      <div className="relative aspect-video overflow-hidden rounded-lg bg-gradient-to-b from-ink-300 via-ink-200 to-ink-100">
        <div className="absolute left-[15%] top-[30%] flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-ink-800 shadow-lg">
          <Utensils size={13} className="text-accent" /> Thakali Kitchen &middot; 80m
        </div>
        <div className="absolute left-[55%] top-[55%] flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-ink-800 shadow-lg">
          <Utensils size={13} className="text-accent" /> Momo Point &middot; 140m
        </div>
        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg">
          <Navigation size={16} className="text-accent" />
        </div>
      </div>
      <p className="mt-3 text-xs text-ink-400">
        Illustrative recreation of the AR discovery concept.
      </p>
    </BrowserFrame>
  );
}
