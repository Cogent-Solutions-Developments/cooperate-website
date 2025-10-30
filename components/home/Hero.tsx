"use client";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <img
        src="/images/herobg.png"
        alt="Cogent Hero Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Bottom-left content */}
      <div className="absolute bottom-0 left-0 w-full pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
       
        </div>
      </div>
    </section>
  );
}
