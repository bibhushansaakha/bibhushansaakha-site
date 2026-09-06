"use client";

import { ReactNode, useCallback, useRef, useState } from "react";

/**
 * A draggable before/after comparison slider. Both `before` and `after`
 * fill the frame; dragging the handle clips the "before" layer to reveal
 * "after" underneath. Works with mouse, touch, and keyboard (arrow keys).
 */
export function CompareSlider({
  before,
  after,
  beforeLabel,
  afterLabel,
}: {
  before: ReactNode;
  after: ReactNode;
  beforeLabel: string;
  afterLabel: string;
}) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div className="border hairline">
      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full select-none overflow-hidden bg-paper-dim"
        style={{ cursor: "ew-resize", touchAction: "pan-y" }}
        onMouseDown={(e) => {
          dragging.current = true;
          updateFromClientX(e.clientX);
        }}
        onMouseMove={(e) => {
          if (dragging.current) updateFromClientX(e.clientX);
        }}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onTouchStart={(e) => {
          dragging.current = true;
          updateFromClientX(e.touches[0].clientX);
        }}
        onTouchMove={(e) => {
          if (dragging.current) updateFromClientX(e.touches[0].clientX);
        }}
        onTouchEnd={() => (dragging.current = false)}
        role="slider"
        aria-label={`Comparison slider between ${beforeLabel} and ${afterLabel}`}
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
          if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
        }}
      >
        <div className="absolute inset-0">{after}</div>
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          {before}
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-ink"
          style={{ left: `${pos}%` }}
        />
        <div
          className="pointer-events-none absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-ink bg-paper"
          style={{ left: `${pos}%`, top: "50%" }}
        >
          <span className="font-mono text-xs text-ink">&#8596;</span>
        </div>

        <span className="pointer-events-none absolute left-3 top-3 border border-ink/20 bg-paper/90 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
          {beforeLabel}
        </span>
        <span className="pointer-events-none absolute right-3 top-3 border border-ink/20 bg-paper/90 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
          {afterLabel}
        </span>
      </div>
      <p className="border-t hairline px-4 py-3 text-center font-mono text-[11px] uppercase tracking-wider text-muted">
        Drag the divider, or use arrow keys
      </p>
    </div>
  );
}
