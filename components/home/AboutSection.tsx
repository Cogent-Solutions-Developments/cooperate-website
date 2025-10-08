"use client";

type AboutSectionProps = {
  title?: string;
  description?: string;
  videoSrc: string;
  poster?: string;
};

export default function AboutSection({
  title = "About Cogent Solutions™",
  description = `Cogent Solutions is a leading B2B event management and business intelligence company based in Dubai. 
We design exclusive, closed–door platforms where governments, regulators, and industry leaders connect to shape the future.`,
  videoSrc,
  poster,
}: AboutSectionProps) {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-[color:var(--foreground)]">
        {/* Heading */}
        <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          {title}
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm sm:text-base leading-relaxed">
          {description}
        </p>

        {/* Video */}
        <div className="mt-8 sm:mt-10 overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
          <video
            className="w-full h-auto object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={poster}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
