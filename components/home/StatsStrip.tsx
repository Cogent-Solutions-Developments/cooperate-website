"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const fmt = (n: number) => n.toLocaleString();

export default function StatsStrip() {
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

      if (prefersReduced) {
        setValues(targets);
        return;
      }

      const duration = 1400;
      const startTime = performance.now();

      const tick = (ts: number) => {
        const t = Math.min(1, (ts - startTime) / duration);
        const eased = easeOutCubic(t);
        setValues(targets.map((target) => Math.round(target * eased)));

        if (t < 1) requestAnimationFrame(tick);
        else setValues(targets);
      };

      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            start();
            break;
          }
        }
      },
      { threshold: 0.3 }
    );

    io.observe(rootRef.current);
    return () => io.disconnect();
  }, [started, targets]);

  return (
    <section ref={rootRef} className="bg-white py-[-35]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Title | Divider | Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1px_1fr] items-start gap-y-10 lg:gap-x-6">
          {/* Left title */}
          <div>
            <h2 className="text-2xl font-bold text-black">Our Stats</h2>
            <p className="text-gray-800 font-medium text-sm mt-3 leading-relaxed max-w-xs">
              We help you to unleash the power <br />within your business.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block h-24 bg-gray-200"></div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-center lg:text-left">
            <div>
              <p className="text-3xl font-semibold text-[#1D309D]">
                {fmt(values[0])}+
              </p>
              <p className="mt-2 text-sm font-medium text-gray-800 leading-relaxed">
                Exclusive Conferences Delivered
              </p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-[#1D309D]">
                {fmt(values[1])}+
              </p>
              <p className="mt-2 text-sm font-medium text-gray-800 leading-relaxed">
                Government & Regulatory Partners
              </p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-[#1D309D]">
                {fmt(values[2])}+
              </p>
              <p className="mt-2 text-sm font-medium text-gray-800 leading-relaxed">
                Countries Reached Our Business
              </p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-[#1D309D]">
                {fmt(values[3])}+
              </p>
              <p className="mt-2 text-sm font-medium text-gray-800 leading-relaxed">
                Fortune 500 Company Leaders Engaged
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
