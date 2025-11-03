"use client";

import { useEffect, useState } from "react";
import UpcomingCard from "./cards/UpcomingCard";
import NewsCard from "./cards/NewsCard";
import InsightCard from "./cards/InsightCard";

const SLIDE_DURATION = 6000; // 6 seconds per slide

export default function HeroUpdates() {
  const slides = [
    { key: "upcoming", component: <UpcomingCard /> },
    { key: "news", component: <NewsCard /> },
    { key: "insight", component: <InsightCard /> },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-sm">
      {slides.map((s, i) => (
        <div
          key={s.key}
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            i === index
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          {s.component}
        </div>
      ))}

      {/* Invisible element to preserve height */}
      <div className="opacity-0">{slides[0].component}</div>
    </div>
  );
}
