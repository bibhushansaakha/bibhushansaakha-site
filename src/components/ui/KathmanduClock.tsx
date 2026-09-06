"use client";

import { useEffect, useState } from "react";

/**
 * A small live clock, always showing Kathmandu time (UTC+5:45) regardless
 * of where the visitor is. A quiet, honest personality touch rather than
 * a gimmick: it's genuinely useful context for "is now a good time to reach out."
 */
export function KathmanduClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kathmandu",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(now);
      setTime(formatted);
    };
    update();
    const id = setInterval(update, 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs tabular text-muted">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      {time ?? "--:--"} in Kathmandu
    </span>
  );
}
