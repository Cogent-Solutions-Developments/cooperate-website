"use client";

import Image from "next/image";
import { Mouse } from "lucide-react";
import { useState, useEffect } from "react";

type ExploreHeroProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  images: string[];
  showArrow?: boolean;
  autoPlaySpeed?: number;
};

export default function ExploreHero({
  title = "Explore",
  subtitle = "Our Conferences",
  description = "Exclusive, Closed-Door Platforms Where Ideas Meet Opportunity.",
  images,
  showArrow = true,
  autoPlaySpeed = 3000,
}: ExploreHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlaySpeed);

    return () => clearInterval(interval);
  }, [images.length, autoPlaySpeed]);

  // Get indices for 7 visible cards centered around currentIndex
  const getVisibleIndices = () => {
    const visible = [];
    const totalImages = images.length;
    
    for (let i = -3; i <= 3; i++) {
      const index = (currentIndex + i + totalImages) % totalImages;
      visible.push({ index, offset: i });
    }
    
    return visible;
  };

  const visibleCards = getVisibleIndices();

  return (
    <section className="relative h-screen py-12 sm:py-16 lg:py-35 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Hero Content */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-[65px] font-normal leading-0px text-[color:var(--foreground)]">
            {title}
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-[75px] font-semibold leading-[50px] text-[color:var(--foreground)]">
            {subtitle}
          </h2>
          <p className="text-base sm:text-lg text-[color:var(--foreground)] max-w-2xl xl:text-[18px] font-semibold mx-auto mt-4">
            {description}
          </p>
        </div>

        {/* 3D Carousel */}
        <div className="relative perspective-container mb-10">
          <div 
            className="flex items-center justify-center gap-4 lg:gap-6" 
            style={{ 
              transformStyle: 'preserve-3d',
              perspective: '1200px'
            }}
          >
            {visibleCards.map(({ index, offset }) => {
              const rotateY = offset * 4;
              const translateZ = Math.abs(offset) * -50;
              const scale = 1 - Math.abs(offset) * 0.07;
              
              return (
                <div
                  key={`${index}-${offset}`}
                  className="relative flex-shrink-0 transition-all duration-700 ease-in-out"
                  style={{
                    transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
                    transformStyle: 'preserve-3d',
                    width: '200px',
                    height: '250px',
                  }}
                >
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={images[index]}
                      alt={`Conference ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Arrow */}
        {showArrow && (
          <div className="flex justify-center">
            <Mouse className="w-8 h-8 stroke-1 text-[color:var(--foreground)] animate-bounce" />
          </div>
        )}

      </div>

      <style jsx global>{`
        .perspective-container {
          perspective: 1200px;
          perspective-origin: center;
        }
      `}</style>
    </section>
  );
}