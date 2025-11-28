"use client";

import { Mouse } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

type MediaItem = {
  type: "image" | "video";
  src: string;
  poster?: string;
};

export default function ExploreHero({
  title = "Explore",
  subtitle = "Our Conferences",
  description = "Exclusive, Closed-Door Platforms Where Ideas Meet Opportunity.",
  media = [
    { type: "image", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400" },
    { type: "image", src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400" },
    { type: "video", src: "/videos/domev1.mp4", poster: "/images/conf-poster-1.jpg" },
    { type: "image", src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400" },
    { type: "image", src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400" },
    { type: "image", src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400" },
    { type: "video", src: "/videos/domess1.mp4", poster: "/images/conf-poster-2.jpg" },
    { type: "image", src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400" },
    { type: "image", src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400" },
    { type: "image", src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=400" },
  ] as MediaItem[],
  showArrow = true,
  scrollSpeed = 40,
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const positionRef = useRef(0);
  const lastTimeRef = useRef<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const [, forceRender] = useState<number>(0);

  // Base size - cards will scale from this
  const BASE_WIDTH = 220;
  const BASE_HEIGHT = 320;
  
  // Scale range (center = MIN_SCALE, edges = MAX_SCALE)
  const MIN_SCALE = 0.75;
  const MAX_SCALE = 1.15;
  
  // Desired visual gap between cards
  const VISUAL_GAP = 24;

  // Duplicate media for seamless loop
  const duplicatedMedia = [...media, ...media, ...media];

  // Calculate scale based on distance from center
  const calculateScale = useCallback((cardCenterX: number, viewportWidth: number) => {
    const screenCenter = viewportWidth / 2;
    const maxDistance = viewportWidth / 2;

    const distance = Math.abs(cardCenterX - screenCenter);
    const normalizedDistance = Math.min(distance / maxDistance, 1);

    // Smooth easing - edges are bigger, center is smaller
    const eased = normalizedDistance * normalizedDistance * (3 - 2 * normalizedDistance);

    return MIN_SCALE + (MAX_SCALE - MIN_SCALE) * eased;
  }, []);

  // Animation loop
  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const singleSetWidth = track.scrollWidth / 3;
    const viewportWidth = window.innerWidth;

    const animate = (currentTime: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = currentTime;

      const deltaTime = (currentTime - lastTimeRef.current) / 1000;
      lastTimeRef.current = currentTime;

      if (!isPaused) {
        positionRef.current -= scrollSpeed * deltaTime;

        if (Math.abs(positionRef.current) >= singleSetWidth) {
          positionRef.current = positionRef.current + singleSetWidth;
        }

        track.style.transform = `translateX(${positionRef.current}px)`;

        // Update card scales and adjust margins for consistent visual gaps
        cardsRef.current.forEach((card, index) => {
          if (!card) return;

          const rect = card.getBoundingClientRect();
          const cardCenterX = rect.left + rect.width / 2;
          const scale = calculateScale(cardCenterX, viewportWidth);

          // Calculate margin adjustment to maintain consistent visual gap
          // When scaled down, we need less margin; when scaled up, we need more
          const scaledWidth = BASE_WIDTH * scale;
          const widthDiff = (scaledWidth - BASE_WIDTH) / 2;
          
          // Apply scale and horizontal margin to compensate
          card.style.transform = `scale(${scale})`;
          card.style.marginLeft = `${VISUAL_GAP / 2 + widthDiff}px`;
          card.style.marginRight = `${VISUAL_GAP / 2 + widthDiff}px`;
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, scrollSpeed, calculateScale]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => forceRender((n) => n + 1);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // SVG mask for curved ribbon
  const ribbonMask =
    `url('data:image/svg+xml;utf8,` +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
         <path d="
           M 0 10
           Q 50 50 100 10
           L 100 90
           Q 50 50 0 90
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
      <div className="pointer-events-none absolute inset-0 opacity-[1] mix-blend-overlay" />

      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Headings */}
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

        {/* Curved Ribbon */}
        <div
          ref={containerRef}
          className="relative top-[26%] flex-1 flex items-center justify-center"
        >
          <div
            className="relative w-screen h-[300px] sm:h-[340px] md:h-[380px] lg:h-[450px] overflow-hidden"
            style={{
              WebkitMaskImage: ribbonMask,
              maskImage: ribbonMask,
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Scrolling Track */}
            <div
              ref={trackRef}
              className="absolute flex items-center h-full"
              style={{ willChange: "transform" }}
            >
              {duplicatedMedia.map((item, i) => (
                <div
                  key={`${item.src}-${i}`}
                  ref={(el) => { cardsRef.current[i] = el; }}
                  className="relative flex-shrink-0 rounded-lg overflow-hidden bg-white ring-1 ring-neutral-200/50 shadow-lg"
                  style={{
                    width: `${BASE_WIDTH}px`,
                    height: `${BASE_HEIGHT}px`,
                    willChange: "transform",
                    transformOrigin: "center center",
                  }}
                >
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={`Conference ${i}`}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  ) : (
                    <video
                      src={item.src}
                      poster={item.poster}
                      className="object-cover w-full h-full"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {showArrow && (
          <div className="pb-12 flex flex-col items-center text-[11px] tracking-widest text-black mx-auto max-w-7xl px-4 text-center">
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