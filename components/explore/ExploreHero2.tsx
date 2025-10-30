"use client";

import DomeGallery from "./sections/DomeGallery";
import { Mouse } from "lucide-react";
import { useEffect, useState } from "react";

export default function ExploreHero2() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#ffffff] via-[#f1f4ff] to-[#ffffff] overflow-hidden text-neutral-900">
      {/* Headings */}
      <div className="absolute top-[18%] text-center z-20 px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light">
          Explore
        </h1>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold mt-2">
          Our Conferences
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-neutral-700 font-medium">
          Exclusive, Closed-Door Platforms Where Ideas Meet Opportunity.
        </p>
      </div>

      {/* 3D Dome Gallery */}
      <div className="relative w-full h-screen z-10">
        {mounted && (
          <DomeGallery
            images={[
              "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
              "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400",
              "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400",
              "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400",
              "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400",
              "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400",
              "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400",
            ]}
            fit={0.55}
            fitBasis="min"
            padFactor={0.2}
            grayscale={false}
            overlayBlurColor="#f4f6ff"
          />
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 flex flex-col items-center text-[11px] tracking-widest text-black">
        <Mouse className="mb-2 h-6 w-6 animate-bounce" />
        <span className="text-black font-semibold">Scroll to Explore</span>
      </div>

      {/* Gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/85 to-transparent" />
    </section>
  );
}
