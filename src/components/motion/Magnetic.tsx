"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";

/**
 * Wraps a button/link so it drifts slightly toward the cursor on hover
 * and springs back on leave. Subtle: capped at 14px of travel.
 */
export function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    const strength = 0.35;
    gsap.to(el, {
      x: Math.max(-14, Math.min(14, relX * strength)),
      y: Math.max(-14, Math.min(14, relY * strength)),
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      data-cursor="hover"
    >
      {children}
    </div>
  );
}
