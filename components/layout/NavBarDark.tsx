"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

export default function NavBarDark() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* === NAVBAR HEADER === */}
      <header
        className={`fixed w-full z-50 transition-all duration-[800ms] ease-[cubic-bezier(.19,1,.22,1)] ${
          menuOpen ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        } ${scrolled ? "top-6 left-0 right-0 px-6" : "top-0 left-0"}`}
      >
        <div
          className={`flex items-center transition-all duration-[800ms] ease-[cubic-bezier(.19,1,.22,1)] ${
            scrolled
              ? "max-w-4xl mx-auto bg-[#0B0E1A]/90 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.6)] border border-white/10 rounded-2xl px-6 py-4 justify-center"
              : "max-w-7xl mx-auto px-6 py-5 bg-transparent backdrop-blur-none border-transparent justify-between"
          }`}
        >
          {/* === Logo (fades out + collapses) === */}
          <div
            className={`flex items-center gap-2 transition-all duration-[800ms] ease-[cubic-bezier(.19,1,.22,1)] ${
              scrolled
                ? "w-0 h-0 opacity-0 overflow-hidden scale-0"
                : "w-auto h-auto opacity-100 scale-100"
            }`}
          >
            <img
              src="/images/cogent-logo.png"
              alt="Cogent Solutions"
              width={140}
              height={40}
              className="object-contain select-none"
            />
          </div>

          {/* === Desktop Nav === */}
          <nav
            className={`hidden md:flex items-center text-[15px] font-medium transition-all duration-[800ms] ease-[cubic-bezier(.19,1,.22,1)] ${
              scrolled ? "gap-8 text-gray-200" : "gap-10 text-gray-300"
            }`}
          >
            {[
              "Conferences & BoardRooms",
              "CS Podcasts",
              "Competitor Jealousy Package",
              "News & Articles",
            ].map((item, i) => (
              <a
                key={i}
                href="#"
                className="relative group transition-colors duration-300"
              >
                <span className="group-hover:text-white">{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#5B7BFF] rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* === Menu Icon === */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`relative z-50 rounded-xl hover:bg-white/10 transition-all duration-300 focus:outline-none text-gray-200 ${
                scrolled ? "p-1.5" : "p-2"
              }`}
              aria-label="Toggle Menu"
            >
              {menuOpen ? (
                <X size={scrolled ? 20 : 24} className="transition-all" />
              ) : (
                <Menu size={scrolled ? 20 : 24} className="transition-all" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* === Modern Dropdown Menu === */}
      <div
        className={`fixed top-6 left-6 right-6 z-40 max-w-5xl mx-auto transition-all duration-500 ease-[cubic-bezier(.19,1,.22,1)] ${
          menuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-gradient-to-br from-[#0B0E1A]/95 via-[#111727]/95 to-[#1B2250]/90 backdrop-blur-2xl rounded-3xl shadow-[0_24px_64px_rgba(0,0,0,0.6)] border border-white/10 overflow-hidden">
          {/* Close button */}
          <div className="flex justify-end p-6 pb-0">
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-xl hover:bg-white/10 transition-all duration-200 focus:outline-none text-white"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* === Main Grid === */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 pt-2">
            {/* Left Section */}
            <div className="relative flex items-end justify-center rounded-2xl overflow-hidden min-h-[400px]">
              <img
                src="/images/BI1.jpeg"
                alt="Business Conference"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
              <div className="relative z-10 p-8 text-white text-right space-y-5">
                <p className="text-sm leading-relaxed font-medium text-gray-200">
                  Through our conferences we transform your business challenges
                  into opportunities. Our clients and customers are leading
                  government entities and Fortune 500 companies.
                </p>
                <div className="flex justify-end">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-300 hover:gap-3 shadow-lg"
                  >
                    Explore Our Services
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <nav className="flex flex-col justify-center space-y-2">
              {[
                "About Us",
                "Our Conferences",
                "Services",
                "Help Center",
                "Careers",
                "Contact Us",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="group relative flex items-center justify-between px-6 py-4 rounded-xl hover:bg-[#1D309D] transition-all duration-300"
                >
                  <span className="text-[15px] font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item}
                  </span>
                  <ChevronRight
                    size={18}
                    className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1D309D] to-[#4A5FD9] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </a>
              ))}
            </nav>
          </div>

          {/* === Footer === */}
          <div className="border-t border-white/10 bg-[#0D1222]/80 px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-lg font-bold text-white mb-1">
                  Join our Community
                </p>
                <p className="text-sm text-gray-400 max-w-md">
                  Through our conferences we transform your business challenges
                  into opportunities.
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {["X/Twitter", "Facebook", "LinkedIn", "Instagram"].map(
                  (social, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-12 h-12 bg-white/5 hover:bg-[#1D309D] rounded-xl flex items-center justify-center transition-all duration-300 group"
                      aria-label={social}
                    >
                      <svg
                        className="w-5 h-5 text-white group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity duration-300"
        />
      )}
    </>
  );
}
