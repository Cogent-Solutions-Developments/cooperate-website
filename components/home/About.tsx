"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import DomeGallery from "./imports/DomeGallery";

type AboutProps = {
  title?: string;
  description?: string;
};

// Animation easing + formatting helpers
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const fmt = (n: number) => n.toLocaleString();

export default function AboutSection({
  title = "Who We Are",
  description = `Cogent Solutions is a leading B2B event management and business intelligence company based in Dubai. 
We design exclusive, closed–door platforms where governments, regulators, and industry leaders connect to shape the future.`,
}: AboutProps) {
  // === Animated Stats Logic ===
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

  // === Render ===
  return (
    <section ref={rootRef} className="relative py-20 sm:py-20 bg-white">
      {/* --- ABOUT CONTENT --- */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-[color:var(--foreground)]">
        <h2 className="text-center text-3xl sm:text-5xl font-semibold text-gray-900">
          {title}
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center text-sm sm:text-base text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>

      {/* --- Background Visual --- */}
      <div className="relative w-full h-screen z-10">
        <DomeGallery />
      </div>

      {/* --- STATS SECTION --- */}
      <div className="relative bg-white py-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1px_1fr] items-start gap-y-10 lg:gap-x-6">
            {/* Left Title */}
            <div className="text-left lg:text-left mx-0">
              <h2 className="text-2xl font-bold text-black">Our Stats</h2>
              <p className="text-gray-700 font-semibold text-md mt-3 leading-relaxed max-w-xs mx-0">
                We help you to unleash the power <br />
                within your business.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden lg:block h-24 bg-gray-200"></div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-left lg:text-left">
              <div>
                <p className="text-3xl font-semibold text-[#1D309D]">
                  {fmt(values[0])}+
                </p>
                <p className="mt-2 text-md font-semibold text-gray-800 leading-relaxed">
                  Exclusive Conferences Delivered
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-[#1D309D]">
                  {fmt(values[1])}+
                </p>
                <p className="mt-2 text-md font-semibold text-gray-800 leading-relaxed">
                  Government & Regulatory Partners
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-[#1D309D]">
                  {fmt(values[2])}+
                </p>
                <p className="mt-2 text-md font-semibold text-gray-800 leading-relaxed">
                  Countries Reached Our Business
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-[#1D309D]">
                  {fmt(values[3])}+
                </p>
                <p className="mt-2 text-md font-semibold text-gray-800 leading-relaxed">
                  Fortune 500 Company Leaders Engaged
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
