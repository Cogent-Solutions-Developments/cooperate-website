"use client";

import { section } from "framer-motion/client";
import DomeGallery from "./imports/DomeGallery";

type AboutProps = {
  title?: string;
  description?: string;
};

export default function AboutSection({
  title = "Who We Are",
  description = `Cogent Solutions is a leading B2B event management and business intelligence company based in Dubai. 
We design exclusive, closed–door platforms where governments, regulators, and industry leaders connect to shape the future.`,
}: AboutProps) {
  return (
    <section className="relative py-12 sm:py-16 lg:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-[color:var(--foreground)]">
        {/* Heading */}
        <h2 className="text-center text-2xl font-semibold sm:text-5xl">
          {title}
        </h2>

        {/* Description */}
        <p className="mx-auto font-regular mt-4 max-w-3xl text-center text-sm sm:text-base ">
          {description}
        </p>
      </div>
      <div className="relative w-full h-screen z-10">
        <DomeGallery />
      </div>
    </section>
  );
}
