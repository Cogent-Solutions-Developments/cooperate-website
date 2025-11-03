"use client";

import HeroUpdates from "./imports/HeroUpdates/HeroUpdates";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[650px] w-full overflow-hidden text-white">
      {/* Background */}
      <img
        src="/images/herobg.png"
        alt="Cogent Hero Background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C123B]/90 via-[#0C123B]/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10  flex flex-col lg:flex-row justify-between items-end h-full max-w-7xl mx-auto px-6 lg:px-12 pb-10">
        {/* === LEFT TEXT === */}
        <div className="flex flex-col items-start justify-end max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-semibold leading-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            Your Trusted <br /> Business Intelligence Partner
          </h1>

          <p className="mt-6 text-[15px] leading-relaxed text-gray-200 max-w-lg">
            We are a leading business intelligence firm that is founded on the belief of getting the right information to the right people at the right time.
          </p>

           <div className="mt-4">
              <button
                className="button relative z-[10000]"
                style={{ ["--clr" as any]: "#2f53bd" }}
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

        {/* === RIGHT FLOATING CARDS === */}

          <div className="w-full max-w-sm space-y-4 mt-10 lg:mt-0">
         

          {/* Card 3 - Upcoming Conference */}
           {/* <HeroUpdates /> */}
        </div>
       
      </div>
    </section>
  );
}
