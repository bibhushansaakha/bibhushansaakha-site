"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Animates a numeric value counting up when it scrolls into view.
 * `value` should be the final display string; numeric portions are
 * detected and counted, non-numeric characters (e.g. "53", "23 days",
 * "~30", "1st") are preserved around the animated digits.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value.replace(/[0-9]/g, "0"));

  useEffect(() => {
    const match = value.match(/[\d.]+/);
    if (!match || !ref.current) {
      setDisplay(value);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplay(value);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const target = parseFloat(match[0]);
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index ?? 0) + match[0].length);
    const decimals = match[0].includes(".") ? match[0].split(".")[1].length : 0;
    const counter = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(counter, {
        val: target,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          once: true,
        },
        onUpdate: () => {
          setDisplay(`${prefix}${counter.val.toFixed(decimals)}${suffix}`);
        },
        onComplete: () => setDisplay(value),
      });
    });

    return () => ctx.revert();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
