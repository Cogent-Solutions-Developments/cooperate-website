"use client";

import Image from "next/image";

type WhatWeDoProps = {
  whatWeDoTitle?: string;
  whatWeDoDescription?: string;
  whoWeAreTitle?: string;
  whoWeAreParagraphs?: string[];
  imageSrc: string;
  imageAlt?: string;
};

export default function WhatWeDo({
  whatWeDoTitle = "What We Do",
  whatWeDoDescription = "Our team of experts meticulously create customized virtual, hybrid, and physical events that enable businesses to effectively communicate their value proposition to a carefully vetted, prequalified, and targeted audience. Our research-backed, tailor-made platforms offer businesses unparalleled access to markets, industries, and senior decision-makers worldwide, without any limitations.",
  whoWeAreTitle = "Who We Are",
  whoWeAreParagraphs = [
    "Today, Cogent Solutions is a highly respected and sought-after Business Intelligence Company in the region. Our clients depend on Cogent Solutions as their own internal team to create events that are not only successful but truly deliver unforgettable value.",
    "From conferences to trade shows, and product launches to corporate roundtables, the team at Cogent Solutions has the experience, expertise, and passion to make every event a success.",
    "With a focus on innovation, collaboration, and unparalleled customer experience, Cogent Solutions is the partner you can trust to take your business to the next level.",
  ],
  imageSrc,
  imageAlt = "Event conference",
}: WhatWeDoProps) {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Image */}
          <div className="relative w-full min-h-[400px] overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* What We Do Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[color:var(--foreground)]">
                {whatWeDoTitle}
              </h2>
              <p className="text-sm sm:text-base font-medium leading-relaxed text-[color:var(--foreground)]">
                {whatWeDoDescription}
              </p>
            </div>

            {/* Who We Are Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[color:var(--foreground)]">
                {whoWeAreTitle}
              </h2>
              <div className="space-y-4 text-sm font-medium sm:text-base leading-relaxed text-[color:var(--foreground)]">
                {whoWeAreParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}