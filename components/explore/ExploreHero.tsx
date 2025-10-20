"use client";

import { Mouse } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function ExploreHero({
  title = "Explore",
  subtitle = "Our Conferences",
  description = "Exclusive, Closed-Door Platforms Where Ideas Meet Opportunity.",
  images = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400",
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400",
    "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400",
    "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=400",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400",
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400",
    "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400",
    "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=400",
  ],
  showArrow = true,
  autoPlaySpeed = 3500,
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(
      () => setCurrent((i) => (i + 1) % images.length),
      autoPlaySpeed
    );
    return () => clearInterval(id);
  }, [images.length, autoPlaySpeed]);

  // Generate strip - show 7 images with current in center
  const strip = useMemo(() => {
    if (!images.length) return [];
    const out = [];
    for (let o = -4; o <= 4; o++) {
      const idx = (current + o + images.length) % images.length;
      out.push(images[idx]);
    }
    return out;
  }, [images, current]);

  // SVG mask for curved ribbon
  const ribbonMask =
    `url('data:image/svg+xml;utf8,` +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
         <path d="
           M 0 15
           Q 50 45 100 15
           L 100 85
           Q 50 55 0 85
           Z"
           fill="white" />
       </svg>`
    ) +
    `')`;

  return (
    <section
      className="relative overflow-hidden text-neutral-900 h-screen"
      style={{
        background:
          "radial-gradient(120% 110% at 50% 0%, #ffffff 0%, #e9edfb 70%, #ffffff 100%)",
      }}
    >
      {/* Subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[1] mix-blend-overlay" />

      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Headings - moved above ribbon */}
        <div className="absolute top-[24%] left-1/2 -translate-x-1/2 text-center z-20 px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light">
            {title}
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold mt-2">
            {subtitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-neutral-700 font-medium">
            {description}
          </p>
        </div>

        {/* Curved Ribbon - FULL VIEWPORT WIDTH */}
        <div className="relative top-[26%] flex-1 flex items-center justify-center">
          <div
            className="relative w-screen h-[300px] sm:h-[340px] md:h-[380px] lg:h-[420px] ] "
            style={{
              WebkitMaskImage: ribbonMask,
              maskImage: ribbonMask,
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center gap-6 sm:gap-8">
              {strip.map((src, i) => {
                // Center is at index 3
                const distanceFromCenter = Math.abs(i - 4);

                // Center SMALLEST, sides get PROGRESSIVELY BIGGER for depth
                let width, height;

                if (distanceFromCenter === 0) {
                  // Center - smallest
                  width = 140;
                  height = 210;
                } else if (distanceFromCenter === 1) {
                  width = 170;
                  height = 250;
                } else if (distanceFromCenter === 2) {
                  width = 200;
                  height = 290;
                } else {
                  // Furthest (sides) - BIGGEST for depth effect
                  width = 240;
                  height = 340;
                }

                return (
                  <div
                    key={`${src}-${i}`}
                    className="relative flex-shrink-0 rounded overflow-hidden bg-white ring-1 ring-neutral-200/50  transition-transform duration-500 ease-out hover:scale-[1.03]"
                    style={{
                      width: `${width}px`,
                      height: `${height}px`,
                    }}
                  >
                    <img
                      src={src}
                      alt={`Conference ${i}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {showArrow && (
          <div className="pb-12 flex flex-col items-center text-[11px] tracking-widest text-black  mx-auto max-w-7xl px-4 text-center">
            <Mouse className="mb-2 h-6 w-6 animate-bounce" />
            <span className="text-black font-semibold">Scroll to Explore</span>
          </div>
        )}
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/85 to-transparent" />
    </section>
  );
}
