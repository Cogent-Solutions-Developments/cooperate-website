"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// Easing for a smooth ramp-up
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

// Format with thousand separators
const fmt = (n: number) => n.toLocaleString();

export default function StatsStrip() {
  // Targets (hard-coded to your screenshot)
  const targets = useMemo(() => [200, 500, 15, 5000], []);
  const [values, setValues] = useState([0, 0, 0, 0]);
  const [started, setStarted] = useState(false);
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const start = () => {
      if (started) return;
      setStarted(true);

      // If user prefers reduced motion, jump to final instantly
      if (prefersReduced) {
        setValues(targets);
        return;
      }

      const duration = 1400; // ms
      const startTime = performance.now();

      const tick = (ts: number) => {
        const t = Math.min(1, (ts - startTime) / duration);
        const eased = easeOutCubic(t);

        setValues(targets.map((target) => Math.round(target * eased)));

        if (t < 1) {
          requestAnimationFrame(tick);
        } else {
          setValues(targets); // snap to final
        }
      };

      requestAnimationFrame(tick);
    };

    // Trigger when the section is ~30% visible
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            start();
            break;
          }
        }
      },
      { root: null, threshold: 0.3 }
    );

    io.observe(rootRef.current);
    return () => io.disconnect();
  }, [started, targets]);

  return (
    <section ref={rootRef} className="">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ">
        {/* subtle top divider */}
        <div className="h-px w-full bg-black/5 mb-8" />

        <div className="grid grid-cols-1 gap-y-10 gap-x-28 sm:grid-cols-2 px-5 lg:grid-cols-4 text-[color:var(--foreground)]">
          {/* Item 1 */}
          <div className="group">
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {fmt(values[0])}+
            </p>
            <p className="mt-2 text-sm leading-6">
              Exclusive Industry Focused<br />Conferences Delivered
            </p>
            <div className="mt-3 h-[2px] w-10 bg-black/10 transition-all duration-500 group-hover:w-16" />
          </div>

          {/* Item 2 */}
          <div className="group">
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {fmt(values[1])}+
            </p>
            <p className="mt-2 text-sm leading-6">
              Government and Regulatory<br />Entities Partnered
            </p>
            <div className="mt-3 h-[2px] w-10 bg-black/10 transition-all duration-500 group-hover:w-16" />
          </div>

          {/* Item 3 */}
          <div className="group">
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {fmt(values[2])}+
            </p>
            <p className="mt-2 text-sm leading-6">
              Countries Reached Through<br />Our Business Platforms
            </p>
            <div className="mt-3 h-[2px] w-10 bg-black/10 transition-all duration-500 group-hover:w-16" />
          </div>

          {/* Item 4 */}
          <div className="group">
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {fmt(values[3])}+
            </p>
            <p className="mt-2 text-sm leading-6">
              Leaders from Fortune<br />500 Companies Engaged
            </p>
            <div className="mt-3 h-[2px] w-10 bg-black/10 transition-all duration-500 group-hover:w-16" />
          </div>
        </div>

        {/* subtle bottom divider */}
        <div className="mt-10 h-px w-full bg-black/5" />
      </div>
    </section>
  );
}
