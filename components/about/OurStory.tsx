"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type OurStoryProps = {
  title?: string;
  paragraphs?: string[];
  imageSrc: string;
  imageAlt?: string;
  ctaText?: string;
  onCtaClick?: () => void;
};

export default function OurStory({
  title = "Our Story",
  paragraphs = [
    'At our core, we are a "customer-centric events agency" founded on the fundamental principle of delivering the right information to the right individuals at the opportune moment.',
    "We empower our clients with high-quality business intelligence and events services that meet their needs and exceed their expectations. This means taking the time to understand our customers challenges and providing value-based solutions that addresses their needs.",
    "Our events have the power to spark new business relationships, deepen existing connections, and ultimately drive success for all involved.",
    "Our team of experts meticulously create customized virtual, hybrid, and physical events that enable businesses to effectively communicate their value proposition to a carefully vetted, prequalified, and targeted audience.",
    "Our research backed, tailor-made platforms offer businesses unparalleled access to markets, industries, and senior decision-makers worldwide, without any limitations.",
  ],
  imageSrc,
  imageAlt = "Our team at a conference event",
  ctaText = "Explore Our All Conferences",
  onCtaClick,
}: OurStoryProps) {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[color:var(--foreground)]">
              {title}
            </h2>

            <div className="space-y-4 text-sm sm:text-base font-medium leading-relaxed text-[color:var(--foreground)]">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {ctaText && (
              <button
                onClick={onCtaClick}
                className="flex items-center gap-3 text-base sm:text-lg font-medium text-[color:var(--foreground)] hover:opacity-70 transition-opacity group mt-6"
              >
                <span>{ctaText}</span>
                <ArrowUpRight className="w-4 h-4 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            )}
          </div>

          {/* Image */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
