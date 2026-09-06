import { BrowserFrame } from "../BrowserFrame";
import { ShieldCheck, Sparkles } from "lucide-react";

export function LoginRedesignMockup() {
  return (
    <BrowserFrame label="me.tiggapp.com/login">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[7fr_3fr]">
        <div className="rounded-lg bg-gradient-to-br from-accent to-ink-900 p-6 text-white">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium">
            <Sparkles size={12} /> New
          </span>
          <h3 className="mt-4 font-display text-2xl">
            Now live: real-time bank reconciliation
          </h3>
          <p className="mt-2 max-w-sm text-sm text-white/80">
            Sync statements automatically and match transactions without manual entry.
          </p>
          <div className="mt-6 flex gap-1.5">
            <span className="h-1.5 w-6 rounded-full bg-white" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          </div>
        </div>

        <div className="rounded-lg bg-white p-5 shadow-sm">
          <p className="font-display text-lg text-ink-900">Welcome back</p>
          <div className="mt-4 space-y-2.5">
            <div className="h-9 rounded-md border border-ink-100 bg-ink-50" />
            <div className="h-9 rounded-md border border-ink-100 bg-ink-50" />
            <div className="flex items-center gap-1.5 rounded-md bg-accent/10 px-2.5 py-1.5 text-[11px] text-accent">
              <ShieldCheck size={13} /> Trusted device, 2FA skipped
            </div>
            <div className="h-9 rounded-md bg-ink-900 text-center text-xs leading-9 text-white">
              Sign in
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-ink-400">
        Illustrative recreation of the 70/30 layout concept, not the production interface.
      </p>
    </BrowserFrame>
  );
}
