"use client";

import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import { useEffect, useState } from "react";

type Conference = {
  id: string;
  title: string;
  date: string;
  location: string;
  countryFlag?: string;
  logoUrl: string;
  backgroundImage: string;
};

export default function InvOnlyCon({
  conferences,
}: {
  conferences: Conference[];
}) {
  // Helper function to parse “4th November, 2025” → valid Date
  const parseConferenceDate = (dateStr: string): Date | null => {
    try {
      const clean = dateStr
        .replace(/(\d+)(st|nd|rd|th)/, "$1") // remove "st", "th", etc.
        .replace(",", "");
      return new Date(clean);
    } catch {
      return null;
    }
  };

  // Countdown component
  const Countdown = ({ date }: { date: string }) => {
    const [daysLeft, setDaysLeft] = useState<number | null>(null);

    useEffect(() => {
      const targetDate = parseConferenceDate(date);
      if (!targetDate) return;

      const updateCountdown = () => {
        const now = new Date();
        const diff = targetDate.getTime() - now.getTime();
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
        setDaysLeft(days > 0 ? days : 0);
      };

      updateCountdown();
      const interval = setInterval(updateCountdown, 1000 * 60 * 60);
      return () => clearInterval(interval);
    }, [date]);

    if (daysLeft === null || daysLeft <= 0) return null;

    return (
       <div className="flex items-center gap-2 bg-[color:var(--brand-primary,#111)] text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
        <Clock size={16} className="opacity-90" />
        <span>
          {daysLeft} {daysLeft === 1 ? "Day" : "Days"} Left
        </span>
      </div>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {conferences.map((conf) => (
          <div
            key={conf.id}
            className="overflow-hidden rounded-[2rem] bg-gray-100  hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* === FLOATING IMAGE WRAPPER === */}
            <div className="p-3">
              <div className="relative h-[200px] w-full overflow-hidden rounded-[1.5rem] shadow-2xl">
                {/* Background Image */}
                <Image
                  src={conf.backgroundImage}
                  alt={conf.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Logo */}
                <div className="absolute top-4 left-4">
                  <div className="relative w-20 h-20 rounded-full bg-white shadow-lg overflow-hidden flex items-center justify-center">
                    <Image
                      src={conf.logoUrl}
                      alt={`${conf.title} logo`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-[1.05rem] leading-snug drop-shadow-md">
                    {conf.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* === DETAILS SECTION === */}
            <div className="px-4 mt-5 pb-6 space-y-5">
              {/* Date + View More in the same row */}
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-900">
                  Date – <span className="font-medium">{conf.date}</span>
                </p>

                <a
                  href="#"
                  className="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-[color:var(--brand-primary)] transition"
                >
                  <span>View More</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>

              {/* Location + Countdown Row */}
              <div className="flex items-center justify-between gap-3 flex-wrap">
                {/* Location chip */}
                <div className="flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                  <span>{conf.location}</span>
                  {conf.countryFlag && (
                    <div className="w-5 h-5 rounded-full overflow-hidden ml-2">
                      <Image
                        src={conf.countryFlag}
                        alt={conf.location}
                        width={24}
                        height={24}
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Days Left chip */}
                <Countdown date={conf.date} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
