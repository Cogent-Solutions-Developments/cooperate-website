// app/components/ResultsAndCTASection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

/* ====== Testimonials (static sample; edit as needed) ====== */
type Testimonial = {
  id: string;
  quote: string;
  name: string;
  title: string;
  logo: string; // /public/logos/...
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "ahmed",
    quote:
      "Great experience. A special one for me. I have already recommended Cogent Solutions to many of my colleagues.",
    name: "Mr. Ahmed Sabri El-Shanawany",
    title: "Head of Financial Industries, Arab Bank",
    logo: "/logos/brands/arab-bank.png",
  },
  {
    id: "wael",
    quote:
      "2nd time working with CS Events and I was very pleased. New and innovative approach to discuss the industry challenges; rich experience.",
    name: "Mr. Wael Iskaldy",
    title: "Head of AMI / ICT, Confidential Bank – KSA",
    logo: "/logos/brands/creditbank.png",
  },
  {
    id: "maria",
    quote:
      "Thoughtful curation and flawless delivery. The audience quality and discussions were exactly what we needed.",
    name: "Ms. Maria Lopez",
    title: "Director, Strategy & Innovation",
    logo: "/logos/brands/kpmg.png",
  },
  {
    id: "faisal",
    quote:
      "Well-organized with actionable insights. Excellent stakeholder mix and meaningful connections.",
    name: "Eng. Faisal Al-Harbi",
    title: "Maintenance Excellence Lead",
    logo: "/logos/brands/aramco.png",
  },
];

/* ====== helpers ====== */
const chunk = <T,>(arr: T[], size: number) => {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

export default function ResultsAndCTASection() {
  // carousel state
  const [perView, setPerView] = useState(1); // 1 on mobile, 2 on ≥lg
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // responsive slides per view
  useEffect(() => {
    const mq = window.matchMedia("(min-width:1024px)");
    const apply = () => setPerView(mq.matches ? 2 : 1);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const slides = useMemo(() => chunk(TESTIMONIALS, perView), [perView]);
  useEffect(() => setIndex((i) => Math.min(i, slides.length - 1)), [slides.length]);
  useEffect(() => {
    const el = trackRef.current;
    if (el) el.style.transform = `translateX(-${index * 100}%)`;
  }, [index]);

  // autoplay (pause on hover / hidden tab)
  useEffect(() => {
    if (pause) return;
    let t = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    const onVis = () => {
      clearInterval(t);
      if (!document.hidden)
        t = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      clearInterval(t);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [pause, slides.length]);

  // swipe
  useEffect(() => {
    const viewport = trackRef.current?.parentElement;
    if (!viewport) return;
    let down = false, start = 0, cur = 0;
    const startEv = (e: TouchEvent | MouseEvent) => {
      down = true;
      start = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      cur = start;
    };
    const moveEv = (e: TouchEvent | MouseEvent) => {
      if (!down) return;
      cur = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    };
    const endEv = () => {
      if (!down) return;
      const dx = cur - start;
      if (Math.abs(dx) > 40) {
        setIndex((i) =>
          dx < 0 ? (i + 1) % slides.length : (i - 1 + slides.length) % slides.length
        );
      }
      down = false;
    };
    viewport.addEventListener("touchstart", startEv, { passive: true });
    viewport.addEventListener("touchmove", moveEv, { passive: true });
    viewport.addEventListener("touchend", endEv);
    viewport.addEventListener("mousedown", startEv);
    window.addEventListener("mousemove", moveEv);
    window.addEventListener("mouseup", endEv);
    return () => {
      viewport.removeEventListener("touchstart", startEv);
      viewport.removeEventListener("touchmove", moveEv);
      viewport.removeEventListener("touchend", endEv);
      viewport.removeEventListener("mousedown", startEv);
      window.removeEventListener("mousemove", moveEv);
      window.removeEventListener("mouseup", endEv);
    };
  }, [slides.length]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[color:var(--brand-primary)] via-[color:var(--brand-primary)] to-[#1a4d7a] text-white mb-10">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
        {/* Headings with enhanced styling */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-semibold tracking-wider uppercase">Backed by Results</span>
          </div>
          <h2 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Lead with Confidence
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Discover why industry leaders trust us to deliver exceptional results
          </p>
        </div>

        {/* Top row: left quote + carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left quote column - enhanced */}
          <aside className="lg:col-span-3">
            <div className="sticky top-8 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="text-6xl leading-none font-serif text-white/40">"</div>
                <div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                    What<br />People Say<br />About Us
                  </h3>
                  <div className="mt-4 h-1 w-16 bg-gradient-to-r from-white to-white/30 rounded-full" />
                  <p className="mt-4 text-sm text-white/60">
                    Real experiences from real industry leaders
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Right: carousel - enhanced */}
          <div
            className="lg:col-span-9 relative"
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
          >
            {/* viewport */}
            <div className="overflow-hidden rounded-2xl">
              {/* track */}
              <div
                ref={trackRef}
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {slides.map((group, sIdx) => (
                  <div key={sIdx} className="w-full shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                      {group.map((t) => (
                        <blockquote
                          key={t.id}
                          className="group h-full min-h-[180px] rounded-2xl bg-white text-black p-6 ring-1 ring-white/20 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex flex-col relative overflow-hidden"
                        >
                          {/* Gradient accent on hover */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[color:var(--brand-primary)] to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                          
                          <div className="text-4xl text-[color:var(--brand-primary)]/20 font-serif leading-none mb-2">"</div>
                          <p className="text-sm leading-relaxed flex-1 text-gray-700">{t.quote}</p>
                          <footer className="mt-5 flex items-center gap-3 pt-4 border-t border-gray-100">
                            <div className="relative h-11 w-11 rounded-xl ring-2 ring-gray-100 bg-white shadow-sm overflow-hidden flex-shrink-0">
                              <Image
                                src={t.logo}
                                alt={`${t.name} company`}
                                fill
                                className="object-contain p-2"
                              />
                            </div>
                            <div className="text-xs">
                              <div className="font-bold text-gray-900">{t.name}</div>
                              <div className="text-gray-600 mt-0.5">{t.title}</div>
                            </div>
                          </footer>
                        </blockquote>
                      ))}
                      {group.length === 1 && <div className="hidden lg:block" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* nav buttons - enhanced */}
            <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2">
              <button
                onClick={prev}
                aria-label="Previous testimonials"
                className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[color:var(--brand-primary)] ring-2 ring-white/20 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 font-bold text-xl backdrop-blur-sm"
              >
                ‹
              </button>
              <button
                onClick={next}
                aria-label="Next testimonials"
                className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[color:var(--brand-primary)] ring-2 ring-white/20 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 font-bold text-xl backdrop-blur-sm"
              >
                ›
              </button>
            </div>

            {/* dots - enhanced */}
            <div className="mt-6 flex justify-center gap-2.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index 
                      ? "w-8 bg-white shadow-lg" 
                      : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="mt-16 mb-12 flex items-center gap-4 ">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>

        {/* Bottom CTA - enhanced */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-16 ">
          <div className="space-y-6">
            <div>
              <h3 className="text-4xl lg:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                Start the Conversation
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-white to-white/30 rounded-full" />
            </div>
            
            <p className="text-base text-white/85 leading-relaxed">
              Looking to maximize visibility and outpace the competition? Ask us about our
              boldest sponsorship, <strong className="text-white font-semibold">The Competitor Jealousy Package</strong>.
            </p>
            
            <p className="text-base text-white/85 leading-relaxed">
              Or connect with us to explore our newest initiative, <strong className="text-white font-semibold">CS Podcasts</strong>.
              We also welcome inquiries about tailored partnership opportunities, speaking
              engagements, delegate participation, and upcoming conferences.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[color:var(--brand-primary)] ring-2 ring-white/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get In Touch
                <span className="transform group-hover:translate-x-1 transition-transform duration-300" aria-hidden>→</span>
              </Link>
              
              <Link
                href="/partnerships"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-white ring-2 ring-white/20 hover:bg-white/20 transition-all duration-300"
              >
                View Partnerships
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-75 animate-pulse" style={{ animationDuration: '3s' }} />
              <Image
                src="/images/home/testimonial.png" 
                alt="Representative"
                width={420}
                height={460}
                className="relative h-auto w-[220px] sm:w-[500px] object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}