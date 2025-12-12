"use client";

import Image from "next/image";
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
    { type: "video", src: "/videos/domev1.mp4" },
    { type: "image", src: "/images/csr1.webp" },
    { type: "image", src: "/images/csr2.webp" },
    { type: "video", src: "/videos/explore2.mp4" },
    { type: "video", src: "/videos/explore4.mp4" },
    { type: "image", src: "/images/csr5.webp" },
    { type: "video", src: "/videos/explore3.mp4" },
    { type: "image", src: "/images/csr6.webp" },
    { type: "video", src: "/videos/explore1.mp4" },
    { type: "image", src: "/images/csr7.webp" },
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
  const [screenWidth, setScreenWidth] = useState(0);

  // Desktop values (preserved exactly as original)
  const DESKTOP_WIDTH = 220;
  const DESKTOP_HEIGHT = 325;
  const DESKTOP_GAP = 24;

  // Responsive card dimensions - desktop (lg+) stays exactly the same
  const getCardDimensions = useCallback((width: number) => {
    if (width >= 1024) {
      // Desktop - unchanged
      return { width: DESKTOP_WIDTH, height: DESKTOP_HEIGHT, gap: DESKTOP_GAP };
    } else if (width >= 768) {
      // Tablet landscape
      return { width: 200, height: 300, gap: 20 };
    } else if (width >= 640) {
      // Tablet portrait
      return { width: 180, height: 310, gap: 16 };
    } else if (width >= 480) {
      // Large mobile
      return { width: 165, height: 300, gap: 14 };
    } else {
      // Small mobile
      return { width: 150, height: 290, gap: 12 };
    }
  }, []);

  // Responsive scroll speed - desktop unchanged
  const getResponsiveScrollSpeed = useCallback((width: number) => {
    if (width >= 1024) return scrollSpeed; // Desktop unchanged
    if (width >= 768) return scrollSpeed * 0.85;
    if (width >= 640) return scrollSpeed * 0.75;
    return scrollSpeed * 0.65;
  }, [scrollSpeed]);

  // Scale range (center = MIN_SCALE, edges = MAX_SCALE) - unchanged
  const MIN_SCALE = 0.75;
  const MAX_SCALE = 1.15;

  // Duplicate media for seamless loop
  const duplicatedMedia = [...media, ...media, ...media];

  // Calculate scale based on distance from center - unchanged logic
  const calculateScale = useCallback((cardCenterX: number, viewportWidth: number) => {
    const screenCenter = viewportWidth / 2;
    const maxDistance = viewportWidth / 2;

    const distance = Math.abs(cardCenterX - screenCenter);
    const normalizedDistance = Math.min(distance / maxDistance, 1);

    // Smooth easing - edges are bigger, center is smaller
    const eased = normalizedDistance * normalizedDistance * (3 - 2 * normalizedDistance);

    return MIN_SCALE + (MAX_SCALE - MIN_SCALE) * eased;
  }, []);

  // Track screen width
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation loop
  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track || screenWidth === 0) return;

    const { width: cardWidth, gap } = getCardDimensions(screenWidth);
    const currentScrollSpeed = getResponsiveScrollSpeed(screenWidth);
    const singleSetWidth = (cardWidth + gap) * media.length;

    const animate = (currentTime: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = currentTime;

      const deltaTime = (currentTime - lastTimeRef.current) / 1000;
      lastTimeRef.current = currentTime;

      if (!isPaused) {
        positionRef.current -= currentScrollSpeed * deltaTime;

        if (Math.abs(positionRef.current) >= singleSetWidth) {
          positionRef.current = positionRef.current + singleSetWidth;
        }

        track.style.transform = `translateX(${positionRef.current}px)`;

        // Update card scales and adjust margins for consistent visual gaps
        cardsRef.current.forEach((card) => {
          if (!card) return;

          const rect = card.getBoundingClientRect();
          const cardCenterX = rect.left + rect.width / 2;
          const scale = calculateScale(cardCenterX, screenWidth);

          // Calculate margin adjustment to maintain consistent visual gap
          const scaledWidth = cardWidth * scale;
          const widthDiff = (scaledWidth - cardWidth) / 2;

          // Apply scale and horizontal margin to compensate
          card.style.transform = `scale(${scale})`;
          card.style.marginLeft = `${gap / 2 + widthDiff}px`;
          card.style.marginRight = `${gap / 2 + widthDiff}px`;
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
  }, [isPaused, screenWidth, calculateScale, getCardDimensions, getResponsiveScrollSpeed, media.length]);

  // Get current dimensions
  const { width: cardWidth, height: cardHeight } = getCardDimensions(screenWidth || 1024);

  // SVG mask for curved ribbon - exactly as original
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
      className="relative overflow-hidden text-neutral-900 h-screen hero"
      style={{
        background:
          "radial-gradient(120% 110% at 50% 0%, #ffffff 0%, #e9edfb 70%, #ffffff 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[1] mix-blend-overlay" />

      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Headings - Mobile responsive, desktop (lg+) unchanged */}
        <div className="absolute top-[16%] sm:top-[22%] lg:top-[24%] left-1/2 -translate-x-1/2 text-center z-20 px-4">
          <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">
            {title}
          </h1>
          <h2 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mt-1 sm:mt-2">
            {subtitle}
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-[320px] sm:max-w-md md:max-w-xl lg:max-w-2xl text-lg sm:text-base lg:text-lg text-neutral-700 font-medium">
            {description}
          </p>
        </div>

        {/* Curved Ribbon - Mobile responsive heights, desktop (lg+) unchanged at h-[450px] */}
        <div
          ref={containerRef}
          className="relative top-[22%] sm:top-[24%] lg:top-[26%] flex-1 flex items-center justify-center"
        >
          <div
            className="relative w-screen h-[380px] sm:h-[380px] md:h-[400px] lg:h-[450px] overflow-hidden"
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
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
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
                  ref={(el) => {
                    cardsRef.current[i] = el;
                  }}
                  className="relative flex-shrink-0 rounded-lg overflow-hidden bg-white ring-1 ring-neutral-200/50 shadow-lg"
                  style={{
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    willChange: "transform",
                    transformOrigin: "center center",
                  }}
                >
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={`Conference ${i}`}
                      className="object-cover"
                      fill
                      sizes={`${cardWidth}px`}
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

        {/* Scroll Indicator - Desktop (lg+) unchanged */}
        {showArrow && (
          <div className="pb-8 sm:pb-10 lg:pb-12 flex flex-col items-center text-[10px] sm:text-[11px] tracking-widest text-black mx-auto max-w-7xl px-4 text-center">
            <Mouse className="mb-2 h-5 w-5 sm:h-6 sm:w-6 animate-bounce" />
            <span className="text-black font-semibold">Scroll to Explore</span>
          </div>
        )}
      </div>

      {/* Bottom Fade - Desktop (lg+) unchanged at h-48 */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 sm:h-40 lg:h-48 bg-gradient-to-t from-white via-white/85 to-transparent" />
    </section>
  );
}