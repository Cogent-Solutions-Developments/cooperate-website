"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ============================ */}
      {/*           HEADER              */}
      {/* ============================ */}
      <header
        className={`fixed w-full z-50 transition-all duration-700 ${
          scrolled ? "top-6 px-6" : "top-0"
        } ${menuOpen ? "opacity-0 -translate-y-full" : "opacity-100"} `}
      >
        <div className="max-w-7xl mx-auto">
          
          {/* ============================ */}
          {/*       DESKTOP NAV BAR        */}
          {/* ============================ */}
          <div
            className={`
              hidden md:flex items-center transition-all duration-700 
              ${scrolled
                ? "max-w-4xl mx-auto bg-white/95 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] rounded-2xl px-8 py-4 justify-center"
                : "px-6 py-5 justify-between"
              }
            `}
          >
            {/* Desktop logo (hidden after scroll) */}
            <div
              className={`
                transition-all duration-700
                ${scrolled ? "w-0 opacity-0 overflow-hidden" : "w-auto opacity-100"}
              `}
            >
              <img
                src="/images/cogent-logo.png"
                width={140}
                height={40}
                className="object-contain select-none"
              />
            </div>

            {/* Desktop nav links */}
            <nav className={`flex items-center font-semibold text-gray-900 ${scrolled ? "gap-8" : "gap-10"}`}>
              {[
                "Conferences & BoardRooms",
                "CS Podcasts",
                "Competitor Jealousy Package",
                "News & Articles",
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className={`hover:text-[#1D309D] transition-all whitespace-nowrap ${
                    scrolled ? "text-sm" : "text-[15px]"
                  }`}
                >
                  {item}
                </a>
              ))}

              {/* Hamburger that opens mega-menu */}
              <button
                onClick={() => setMenuOpen(true)}
                className={`rounded-xl hover:bg-gray-100 transition-all text-gray-900 ${
                  scrolled ? "p-1.5" : "p-2"
                }`}
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
              md:hidden flex items-center justify-between 
              ${scrolled
                ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] rounded-2xl px-5 py-3"
                : "px-6 py-4"
              }
            `}
          >
            {/* MOBILE LOGO (always visible) */}
            <img
              src="/images/cogent-logo.png"
              width={130}
              height={40}
              className="object-contain"
            />

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 rounded-xl bg-white/80 backdrop-blur-md shadow-sm border border-gray-200"
            >
              <Menu size={22} />
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
            className="fixed top-6 left-6 right-6 z-[9999] max-w-5xl mx-auto opacity-100 visible translate-y-0 transition-all"
          >
            <div className="bg-white backdrop-blur-2xl rounded-3xl shadow-[0_24px_48px_rgba(29,48,157,0.15)] max-h-[85vh] overflow-y-auto">

              {/* Close */}
              <div className="flex justify-end p-6 pb-0">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-xl hover:bg-gray-100 transition-all text-gray-900"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 pt-2">

                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden min-h-[400px] flex items-end">
                  <img
                    src="/images/BI1.jpeg"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                  <div className="relative p-8 text-white space-y-5">
                    <p className="text-sm leading-relaxed">
                      Through our conferences we transform your business challenges into opportunities.
                    </p>

                    <a className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-full font-semibold hover:bg-gray-100 shadow-lg">
                      Explore Our Services
                      <ChevronRight size={18} />
                    </a>
                  </div>
                </div>

                {/* Links */}
                <nav className="flex flex-col justify-center space-y-2">
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
                      onClick={() => setMenuOpen(false)}
                      className="group relative flex items-center justify-between px-6 py-4 rounded-xl hover:bg-[#1D309D] transition-all cursor-pointer"
                    >
                      <span className="text-[15px] font-semibold text-gray-800 group-hover:text-white">
                        {item}
                      </span>
                      <ChevronRight
                        size={18}
                        className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1D309D] to-[#4A5FD9] opacity-0 group-hover:opacity-100 -z-10 transition-opacity" />
                    </a>
                  ))}
                </nav>
              </div>

              <div className="bg-gray-50/50 px-8 py-6">
                <p className="text-lg font-bold text-gray-900 mb-1">
                  Join our Community
                </p>
                <p className="text-sm text-gray-600">
                  Transforming challenges into opportunities.
                </p>
              </div>
            </div>
          </div>

          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9990]"
            onClick={() => setMenuOpen(false)}
          />
        </>
      )}
    </>
  );
}
