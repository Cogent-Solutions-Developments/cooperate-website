"use client";

import Link from "next/link";
import Image from "next/image";
import { WorldMapDemo } from "./imports/WorldMapDemo";

export default function Footer() {
  return (
    <section className="relative mt-5 bg-transparent">
      <footer
        className="
          mx-4 sm:mx-6 md:mx-10 lg:mx-4 mb-4
          bg-[#172573] text-white rounded-2xl
          shadow-[0_12px_45px_rgba(0,0,0,0.25)]
          border border-white/10
          px-5 sm:px-8 md:px-10 lg:px-16 py-10 sm:py-14
          relative overflow-hidden
        "
      >
        {/* Map watermark */}
        <div className="absolute inset-[-50%] sm:inset-[-25%] md:inset-0 z-0 opacity-35">
          <WorldMapDemo />
        </div>

        {/* === Layout: left (brand + links + join-card) | right (locations) === */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-20">
          {/* LEFT: two columns + join card */}
          <div className="md:col-span-2 space-y-8 sm:space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
              {/* === COLUMN 1: Brand + Awards === */}
              <div className="space-y-0">
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold tracking-wide">
                    Cogent Solutions<sup>™</sup>
                  </h2>
                  <p className="text-sm font-semibold text-white/80 leading-relaxed mt-2 max-w-sm">
                    Through our conferences we transform your business challenges
                    into opportunities. Our clients and customers are leading
                    government entities and the Fortune 500 companies.
                  </p>
                </div>

                {/* Awards under description */}
                <div className="flex flex-wrap items-start gap-1 pt-3">
                  {[
                    "/images/1fi.png",
                    "/images/2fi.png",
                    "/images/3fi.png",
                    "/images/4fi.png",
                  ].map((src, i) => (
                    <div key={i} className="w-[60px] h-[60px] sm:w-[70px] sm:h-[80px]">
                      <Image
                        src={src}
                        alt={`Award ${i + 1}`}
                        width={70}
                        height={80}
                        className="opacity-85 hover:opacity-100 transition-opacity object-contain object-top w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* === COLUMN 2: Links === */}
              <div className="space-y-4 sm:space-y-6">
                <h4 className="text-sm sm:text-md font-semibold uppercase tracking-wide text-white/90">
                  Links
                </h4>

                <ul className="grid grid-cols-2 font-semibold gap-y-2.5 sm:gap-y-3 gap-x-4 sm:gap-x-8 text-sm text-white/80">
                  {[
                    "About Us",
                    "Conferences",
                    "News & Articles",
                    "Careers",
                    "Explore",
                    "Partners",
                    "Testimonials",
                    "Insights",
                    "Help Center",
                    "Contact",
                  ].map((item, i) => (
                    <li key={i}>
                      <Link
                        href="#"
                        className="hover:text-white transition-colors duration-200"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* === JOIN OUR COMMUNITY CARD === */}
            <div
              className="
                bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl
                px-4 sm:px-6 md:px-8 py-4 sm:py-5 backdrop-blur-md
                flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6
              "
            >
              <div className="flex-1">
                <h4 className="text-base sm:text-lg font-semibold tracking-wide">
                  Join Our Community
                </h4>
                <p className="text-xs sm:text-sm text-white/70 mt-1 sm:mt-1.5">
                  Connect with us for collaborations, updates, and partnership opportunities.
                </p>
              </div>

              <div className="flex items-center gap-4 sm:gap-5">
                {/* divider - hidden on mobile */}
                <div className="hidden sm:block h-7 w-px bg-white/20" />

                {/* Socials */}
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* LinkedIn */}
                  <Link
                    href="https://linkedin.com/company/cogentsolutionsae"
                    aria-label="LinkedIn"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white hover:bg-[#1D309D] flex items-center justify-center transition group"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A1E75] group-hover:text-white transition-colors"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                    </svg>
                  </Link>

                  {/* Facebook */}
                  <Link
                    href="https://facebook.com/cogentsolutionsae"
                    aria-label="Facebook"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white hover:bg-[#1D309D] flex items-center justify-center transition group"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A1E75] group-hover:text-white transition-colors"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.919.001c-1.505 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
                    </svg>
                  </Link>

                  {/* X */}
                  <Link
                    href="#"
                    aria-label="X"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white hover:bg-[#1D309D] flex items-center justify-center transition group"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A1E75] group-hover:text-white transition-colors"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </Link>

                  {/* Instagram */}
                  <Link
                    href="#"
                    aria-label="Instagram"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white hover:bg-[#1D309D] flex items-center justify-center transition group"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A1E75] group-hover:text-white transition-colors"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.846-10.405a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* === RIGHT: Our Locations (hidden on mobile) === */}
          <div className="hidden md:block md:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white/90 mb-3">
              Our Locations
            </h4>

            <div className="space-y-4 sm:space-y-5 text-sm text-white/80 leading-relaxed">
              <div>
                <p className="font-bold text-white/95">Middle East & Africa HQ</p>
                <p className="font-semibold">
                  Office No: 209, The Metropolis Tower,<br />
                  Business Bay, Dubai, United Arab Emirates
                </p>
              </div>

              <div>
                <p className="font-bold text-white/95">Asia Pacific HQ</p>
                <p className="font-semibold">
                  2nd Floor, Green Lanka Tower,<br />
                  Colombo, Sri Lanka
                </p>
              </div>

              <div>
                <p className="font-bold text-white/95">Saudi Arabia HQ</p>
                <p className="font-semibold">Riyadh, Saudi Arabia</p>
              </div>

              <div className="pt-2 space-y-1 text-white/85">
                <div>
                  <p className="font-bold text-white/95">Reach Us On</p>
                </div>
                <div className="flex flex-wrap items-center gap-x-3">
                  <a href="tel:+97145761039" className="hover:text-white">
                    +971 4 576 1039
                  </a>
                  <span className="text-white/30">|</span>
                  <a href="tel:+971506435244" className="hover:text-white">
                    +971 50 643 5244
                  </a>
                </div>
                <a
                  href="mailto:partnerships@cogentsolutions.ae"
                  className="hover:text-white block break-all sm:break-normal"
                >
                  partnerships@cogentsolutions.ae
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* === Bottom Bar === */}
        <div className="relative z-10 mt-8 sm:mt-10 border-t border-white/10 pt-5 sm:pt-6 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-white/70 gap-3 sm:gap-0">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Cogent Solutions Event Management LLC. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="#" className="hover:text-white transition">Terms & Conditions</Link>
            <Link href="#" className="hover:text-white transition">Privacy</Link>
            <Link href="#" className="hover:text-white transition">Payment Policy</Link>
          </div>
        </div>
      </footer>

      {/* Bottom glow */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[90%] sm:w-[82%] h-[60px] sm:h-[100px] bg-[#0A1E75]/40 blur-3xl rounded-full pointer-events-none" />
    </section>
  );
}