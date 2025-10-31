"use client";

import Link from "next/link";
import Folder from "./imports/Folder";

export default function ExploreConferences() {
  return (
    <section className="py-14 bg-transparent text-white relative z-[0]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-[9999]">
        {/* Outer Card */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 bg-[#0A1E75] rounded-3xl border border-[#0A1E75]/30 shadow-[0_8px_30px_rgba(0,0,0,0.25)] px-10 lg:px-14 py-14 overflow-visible z-[9999]">
          
          {/* === LEFT SIDE (Text Content) === */}
          <div className="flex-1 space-y-6 relative z-[10000]">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-normal leading-tight whitespace-nowrap">
              Explore Our Conferences
            </h2>

            <p className="max-w-xl text-sm sm:text-base font-medium text-white/90 leading-relaxed">
              Through our conferences we transform your business challenges into opportunities. Our clients and customers are leading government entities and the fortune 500 companies.
            </p>

            <div>
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
                Explore All
              </button>
            </div>
          </div>

          {/* === RIGHT SIDE (Folder Animation) === */}
          <div className="flex-1 flex justify-center lg:justify-end relative overflow-visible z-[10001]">
            <div className="relative top-4 right-20 max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px] z-[10002]">
              <Folder
                size={2}
                color="#2f53bd"
                className="w-full h-auto relative z-[10003]"
                items={[
                  "/images/regtech_logo.png",
                  "/images/2nd-water-management.png",
                  "/images/asset-integrity-mgmt.png",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
