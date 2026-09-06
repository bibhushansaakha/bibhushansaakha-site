import { BrowserFrame } from "../BrowserFrame";
import { Heart } from "lucide-react";

export function MyraMockup() {
  return (
    <BrowserFrame label={"Myra \u2014 early visual direction"}>
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-gradient-to-br from-[#A5291A]/10 to-white py-10">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#A5291A]/15">
          <Heart size={26} className="text-[#A5291A]" />
        </div>
        <p className="font-display text-xl text-ink-900">myra</p>
        <div className="flex gap-2">
          <span className="h-6 w-6 rounded-full bg-[#A5291A]" />
          <span className="h-6 w-6 rounded-full bg-[#A5291A]/60" />
          <span className="h-6 w-6 rounded-full bg-[#A5291A]/30" />
        </div>
        <span className="rounded-full bg-ink-100 px-3 py-1 text-[11px] font-medium text-ink-500">
          Paused
        </span>
      </div>
      <p className="mt-3 text-xs text-ink-400">
        Illustrative recreation of early brand direction.
      </p>
    </BrowserFrame>
  );
}
