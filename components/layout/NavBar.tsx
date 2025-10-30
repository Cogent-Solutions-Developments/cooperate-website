"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for premium animation effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${
          menuOpen ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        } ${scrolled ? "top-6 left-0 right-0 px-6" : "top-0 left-0"}`}
      >
        <div
          className={`flex items-center transition-all duration-700 ease-in-out ${
            scrolled
              ? "max-w-4xl mx-auto bg-white/95 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-200/60 rounded-2xl px-6 py-4 justify-center"
              : "max-w-7xl mx-auto px-6 py-5 bg-transparent backdrop-blur-none border-transparent justify-between"
          }`}
        >
          {/* === Logo with Fade Out === */}
          <div
            className={`flex items-center gap-2 transition-all duration-700 ease-in-out ${
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
            className={`hidden md:flex items-center text-[15px] font-semibold text-gray-900 transition-all duration-700 ease-in-out ${
              scrolled ? "gap-8" : "gap-10"
            }`}
          >
            <a
              href="#"
              className={`hover:text-[#1D309D] transition-all duration-300 whitespace-nowrap ${
                scrolled ? "text-[14px]" : "text-[15px]"
              }`}
            >
              Conferences & BoardRooms
            </a>
            <a
              href="#"
              className={`hover:text-[#1D309D] transition-all duration-300 whitespace-nowrap ${
                scrolled ? "text-[14px]" : "text-[15px]"
              }`}
            >
              CS Podcasts
            </a>
            <a
              href="#"
              className={`hover:text-[#1D309D] transition-all duration-300 whitespace-nowrap ${
                scrolled ? "text-[14px]" : "text-[15px]"
              }`}
            >
              Competitor Jealousy Package
            </a>
            <a
              href="#"
              className={`hover:text-[#1D309D] transition-all duration-300 whitespace-nowrap ${
                scrolled ? "text-[14px]" : "text-[15px]"
              }`}
            >
              News & Articles
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`relative z-50 rounded-xl hover:bg-gray-100/80 transition-all duration-300 focus:outline-none text-gray-900 ${
                scrolled ? "p-1.5" : "p-2"
              }`}
              aria-label="Toggle Menu"
            >
              {menuOpen ? (
                <X
                  size={scrolled ? 20 : 24}
                  className="transition-all duration-300"
                />
              ) : (
                <Menu
                  size={scrolled ? 20 : 24}
                  className="transition-all duration-300"
                />
              )}
            </button>
          </nav>

          {/* === Hamburger Button === */}
        </div>
      </header>

      {/* === Modern Dropdown Menu === */}
      <div
        className={`fixed top-6 left-6 right-6 z-40 max-w-5xl mx-auto transition-all duration-300 ease-out ${
          menuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-white backdrop-blur-2xl rounded-3xl shadow-[0_24px_48px_rgba(29,48,157,0.15)] border border-gray-100 overflow-hidden">
          {/* Close button */}
          <div className="flex justify-end p-6 pb-0">
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-xl hover:bg-gray-100 transition-all duration-200 focus:outline-none text-gray-900"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Main Content - Left Image | Right Menu */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 pt-2">
            {/* Left Section - Image with Overlay Text */}
            <div className="relative flex items-end justify-center rounded-2xl overflow-hidden min-h-[400px]">
              {/* Background Image */}
              <img
                src="/images/BI1.jpeg"
                alt="Business Conference"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

              {/* Text Content */}
              <div className="relative z-10 p-8 text-white text-right space-y-5">
                <p className="text-sm leading-relaxed font-medium">
                  Through our conferences we transform your business challenges
                  into opportunities. Our clients and customers are leading
                  government entities and the fortune 500 companies.
                </p>

                {/* Explore Button */}
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

            {/* Right Section - Menu Items */}
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
                  <span className="text-[15px] font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
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

          {/* Bottom Section - Footer with Socials */}
          <div className="border-t border-gray-200 bg-gray-50/50 px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="text-lg font-bold text-gray-900 mb-1">
                  Join our Community
                </p>
                <p className="text-sm text-gray-600">
                  Through our conferences we transform your business challenges
                  into opportunities
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-12 h-12 bg-white hover:bg-[#1D309D] rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm group"
                  aria-label="X/Twitter"
                >
                  <svg
                    className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white hover:bg-[#1D309D] rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm group"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white hover:bg-[#1D309D] rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm group"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white hover:bg-[#1D309D] rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm group"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === Backdrop Overlay === */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-300"
        />
      )}
    </>
  );
}
