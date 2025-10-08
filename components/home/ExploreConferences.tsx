"use client";

import Image from "next/image";
import Link from "next/link";

export default function ExploreConferences() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-[#0A1E75]/30 bg-[#0A1E75] text-white shadow-lg">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/bg1.jpg"
              alt="Conference audience"
              fill
              className="object-cover opacity-80"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E75]/80 via-[#0A1E75]/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              EXPLORE OUR CONFERENCES
            </h2>

            <p className="mt-3 max-w-2xl text-sm sm:text-base font-medium text-white/90">
              Coming together is a beginning; keeping together is progress;
              working together is success.
            </p>

            <div className="mt-6">
              <Link
                href="/conferences"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0A1E75] shadow-sm transition-all duration-300 hover:scale-[1.03]"
              >
                View All
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
