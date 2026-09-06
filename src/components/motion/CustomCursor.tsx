"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A small accent-colored dot that trails the pointer with a slight lag,
 * and grows over anything with [data-cursor="hover"]. Desktop/fine-pointer
 * only; it renders nothing on touch devices.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // One-time read of an external platform API on mount to decide whether
    // this feature applies at all — the accepted exception to this rule.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(isFinePointer && !reduced);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      const target = e.target as HTMLElement;
      setHovering(!!target.closest('[data-cursor="hover"]'));
    };

    const tick = () => {
      x += (targetX - x) * 0.2;
      y += (targetY - y) * 0.2;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${hovering ? 2.4 : 1})`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled, hovering]);

  if (!enabled) return null;

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />;
}
