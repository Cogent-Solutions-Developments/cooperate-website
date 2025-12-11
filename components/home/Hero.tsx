"use client";

type HeroProps = {
  className?: string;
};

export default function Hero({ className = "" }: HeroProps) {
  return (
    <section
      className={`relative h-[100svh] min-h-[650px] w-full overflow-hidden text-white ${className}`}
    >
      {/* === Background Video === */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/herobg.mp4" type="video/mp4" />
      </video>

      {/* === Gradient Overlay === */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C123B]/90 via-[#0C123B]/50 to-transparent"></div>

      {/* === Content === */}
      <div className="relative z-10 flex flex-col h-full max-w-7xl 2xl:max-w-none mx-auto 2xl:mx-0 px-5 sm:px-6 lg:px-12 2xl:px-20 3xl:px-32 pb-12 pt-24 sm:pt-32 lg:pt-0 justify-end">
        {/* === LEFT TEXT === */}
        <div className="flex flex-col items-start max-w-3xl text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            Your Trusted <br className="sm:block" />
            Business Intelligence Partner
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-200 max-w-xl sm:max-w-2xl">
            We are a leading business intelligence firm founded on the belief of
            getting the right information to the right people at the right time.
          </p>

          <div className="mt-6 sm:mt-8">
            <button
              className="button relative z-[10000]"
              style={{ "--clr": "#2f53bd" } as React.CSSProperties}
            >
              <span className="button__icon-wrapper">
                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button__icon-svg"
                  width="11"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  ></path>
                </svg>

                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  width="11"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button__icon-svg button__icon-svg--copy"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}