"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

export default function NavBarDark() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-700
          ${scrolled ? "top-6" : "top-0"}
          ${menuOpen ? "opacity-0 -translate-y-full" : "opacity-100"}
        `}
      >
        {/* === RESPONSIVE WRAPPER (MATCHES HERO EXACTLY) === */}
        <div
          className="
            mx-auto
            max-w-7xl
            2xl:max-w-none
            2xl:mx-0
            px-5 sm:px-6 lg:px-12 2xl:px-20 3xl:px-32
          "
        >
          {/* ============================ */}
          {/*       DESKTOP NAV BAR        */}
          {/* ============================ */}
          <div
            className={`
              relative hidden md:flex items-center transition-all duration-700 w-full
              ${scrolled
                ? "max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] mx-auto bg-gray-900/95 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.4)] rounded-2xl px-8 py-4 justify-center"
                : "bg-transparent px-0 py-6 justify-between"
              }
            `}
          >
            {/* ========== ANIMATED BORDER LAYER ========== */}
            <div
              className={`
                absolute inset-0 rounded-2xl border border-gray-700/50
                transition-opacity duration-700 pointer-events-none
                ${scrolled ? "opacity-100" : "opacity-0"}
              `}
            />

            {/* Desktop logo */}
            <div
              className={`transition-all duration-700
                ${scrolled
                  ? "w-0 opacity-0 overflow-hidden"
                  : "w-auto opacity-100"
                }
              `}
            >
              <img
                src="/images/cogent-logo.png"
                width={140}
                height={40}
                className="object-contain select-none"
                alt="Cogent Solutions"
              />
            </div>

            {/* Desktop nav links */}
            <nav
              className={`flex items-center font-semibold text-gray-100
                ${scrolled ? "gap-8" : "gap-10"}
              `}
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
                  className={`hover:text-[#6B7FFF] transition-all whitespace-nowrap
                    ${scrolled ? "text-sm" : "text-[15px]"}
                  `}
                >
                  {item}
                </a>
              ))}

              <button
                onClick={() => setMenuOpen(true)}
                className={`rounded-xl hover:bg-gray-800 transition-all text-gray-100
                  ${scrolled ? "p-1.5" : "p-2"}
                `}
              >
                <Menu size={scrolled ? 20 : 24} />
              </button>
            </nav>
          </div>

          {/* ============================ */}
          {/*         MOBILE NAV BAR       */}
          {/* ============================ */}
          <div
            className={`
              md:hidden flex items-center justify-between w-full
              ${scrolled
                ? "bg-gray-900/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-gray-700/50 rounded-2xl px-5 py-3"
                : "py-4"
              }
            `}
          >
            <img
              src="/images/cogent-logo.png"
              width={130}
              height={40}
              className="object-contain"
              alt="Cogent Solutions"
            />

            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 rounded-xl bg-gray-800/80 backdrop-blur-md shadow-sm border border-gray-700"
            >
              <Menu size={22} className="text-gray-100" />
            </button>
          </div>
        </div>
      </header>

      {/* ============================ */}
      {/*         DROPDOWN MENU         */}
      {/* ============================ */}
      {menuOpen && (
        <>
          <div
            className="
              fixed top-4 left-4 right-4 md:top-6 md:left-6 md:right-6
              z-[9999] max-w-5xl mx-auto transition-all
            "
          >
            <div
              className="
                bg-gray-900 backdrop-blur-2xl rounded-3xl
                shadow-[0_24px_48px_rgba(0,0,0,0.5)]
                border border-gray-700/50 max-h-[90vh]
                overflow-y-auto overscroll-contain
              "
            >
              {/* Close */}
              <div className="flex justify-end px-4 md:px-6 pt-4 md:pt-5 sticky top-0 bg-gray-900/95 backdrop-blur-sm z-10">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-xl hover:bg-gray-800 text-gray-100"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-4 md:p-6 pt-1 md:pt-2">
                {/* Image Section */}
                <div className="relative rounded-2xl overflow-hidden min-h-[300px] md:min-h-[400px] flex items-end">
                  <img
                    src="/images/BI1.jpeg"
                    alt="Business Conference"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

                  <div className="relative z-0 p-6 md:p-8 text-white text-right space-y-4 md:space-y-5">
                    <p className="text-sm leading-relaxed font-medium">
                      Through our conferences we transform your business
                      challenges into opportunities. Our clients and customers
                      are leading government entities and the fortune 500
                      companies.
                    </p>

                    <div className="flex justify-end">
           <button
              className="button relative z-[6]"
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
              Explore Our Events
            </button>
                    </div>
                  </div>
                </div>

                {/* Links */}
                <nav className="flex flex-col justify-center space-y-1 md:space-y-2">
                  {[
                    "About Us",
                    "Our Conferences",
                    "Services",
                    "Help Center",
                    "Careers",
                    "Contact Us",
                  ].map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      onClick={() => setMenuOpen(false)}
                      className="
                        group relative flex items-center justify-between
                        px-4 md:px-6 py-3 md:py-4 rounded-xl
                        hover:bg-[#1D309D] transition-all cursor-pointer
                      "
                    >
                      <span className="text-[15px] font-semibold text-gray-100 group-hover:text-white transition-colors duration-300">
                        {item}
                      </span>
                      <ChevronRight
                        size={18}
                        className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1D309D] to-[#4A5FD9] opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Bottom Section */}
              <div className="border-t border-gray-700/50 bg-gray-800/50 px-4 md:px-8 py-5 md:py-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-center md:text-left">
                    <p className="text-lg font-bold text-gray-100 mb-1">
                      Join our Community
                    </p>
                    <p className="text-sm text-gray-400">
                      Through our conferences we transform your business
                      challenges into opportunities
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* X / Twitter */}
                    <a
                      className="
    w-11 h-11 md:w-12 md:h-12
    bg-gray-800 hover:bg-gray-700
    rounded-xl flex items-center justify-center
    transition-all duration-300 shadow-sm group
  "
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>

                    {/* Facebook */}
                    <a
                      className="
    w-11 h-11 md:w-12 md:h-12
    bg-gray-800 hover:bg-gray-700
    rounded-xl flex items-center justify-center
    transition-all duration-300 shadow-sm group
  "
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      className="
    w-11 h-11 md:w-12 md:h-12
    bg-gray-800 hover:bg-gray-700
    rounded-xl flex items-center justify-center
    transition-all duration-300 shadow-sm group
  "
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 448 512"
                      >
                        <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341C24.11 107 0 82.89 0 53.64A53.64 53.64 0 0 1 53.84 0a53.64 53.64 0 0 1 53.84 53.64c0 29.25-24.11 53.36-53.84 53.36zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.68V148.9h88.94v40.8h1.3c12.4-23.5 42.5-48.3 87.4-48.3 93.5 0 110.7 61.6 110.7 141.6V448z" />
                      </svg>
                    </a>

                    {/* Instagram — EXACT COPY FROM SocialsTab */}
                    <a
                      className="
    w-11 h-11 md:w-12 md:h-12
    bg-gray-800 hover:bg-gray-700
    rounded-xl flex items-center justify-center
    transition-all duration-300 shadow-sm group
  "
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-white"
                      >
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9990]"
            onClick={() => setMenuOpen(false)}
          />
        </>
      )}
    </>
  );
}
