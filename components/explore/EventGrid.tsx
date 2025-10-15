"use client";

import Image from "next/image";
import { ArrowUpRight, Clock, CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";

type EventItem = {
  id: string;
  title: string;
  date: string;
  location: string;
  countryFlag?: string;
  logoUrl?: string;
  backgroundImage: string;
};

export default function EventGrid({
  events,
}: {
  events: EventItem[];
}) {
  // --- Helper: Parse date string, handling multi-day events ---
  const parseEventDate = (dateStr: string): Date | null => {
    if (!dateStr || dateStr.trim() === "") return null;
    
    try {
      // Handle multi-day formats:
      // "19th & 20th May, 2026" or "19th to 25th May, 2026"
      let lastPart = dateStr;
      
      if (dateStr.includes("&")) {
        const parts = dateStr.split("&");
        lastPart = parts[parts.length - 1].trim();
      } else if (dateStr.includes(" to ")) {
        const parts = dateStr.split(" to ");
        lastPart = parts[parts.length - 1].trim();
      }
      
      const clean = lastPart
        .replace(/(\d+)(st|nd|rd|th)/, "$1")
        .replace(",", "");
      return new Date(clean);
    } catch {
      return null;
    }
  };

  // --- Countdown component ---
  const Countdown = ({ date }: { date: string }) => {
    const [daysLeft, setDaysLeft] = useState<number | null>(null);
    const [isToday, setIsToday] = useState(false);

    useEffect(() => {
      const targetDate = parseEventDate(date);
      if (!targetDate) return;

      const updateCountdown = () => {
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        
        const target = new Date(targetDate);
        target.setHours(0, 0, 0, 0);
        
        const diff = target.getTime() - now.getTime();
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
        
        if (days === 0) {
          setIsToday(true);
          setDaysLeft(0);
        } else if (days > 0) {
          setIsToday(false);
          setDaysLeft(days);
        } else {
          setDaysLeft(null);
        }
      };

      updateCountdown();
      const interval = setInterval(updateCountdown, 1000 * 60 * 60);
      return () => clearInterval(interval);
    }, [date]);

    if (daysLeft === null || daysLeft < 0) return null;

    if (isToday) {
      return (
        <div className="flex items-center gap-2 bg-[color:var(--brand-primary,#111)] text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
          <Clock size={16} className="opacity-90" />
          <span>Today</span>
        </div>
      );
    }

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
    <section className="py-10 bg-white">
      <div className="mx-auto max-w-6xl px-0 grid grid-cols-1 md:grid-cols-3 gap-10">
        {events.map((event) => (
          <div
            key={event.id}
            className="overflow-hidden rounded-[2rem] bg-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            {/* === IMAGE === */}
            <div className="p-2">
              <div className="relative h-[200px] w-full overflow-hidden rounded-[1.5rem]">
                <Image
                  src={event.backgroundImage}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>
            </div>

            {/* === CONTENT BELOW IMAGE === */}
            <div className="flex flex-col justify-between h-full px-5 pb-6 pt-2">
              {/* Top content area */}
              <div className="space-y-4">
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 min-h-[3.5rem] line-clamp-2">
                  {event.title}
                </h3>

                {/* Date + View More */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                    <CalendarDays
                      size={16}
                      className="text-[color:black] opacity-90"
                    />
                    <span className="font-normal">{event.date || "TBA"}</span>
                  </div>

                  <a
                    href="#"
                    className="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-[color:var(--brand-primary)] transition"
                  >
                    <span>View More</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              {/* Fixed bottom section */}
              <div className="flex items-center justify-between gap-3 flex-wrap mt-5">
                {/* Location chip */}
                <div className="flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                  <span>{event.location || "Location - TBA"}</span>
                  {event.location && event.countryFlag && (
                    <div className="w-5 h-5 rounded-full overflow-hidden ml-2">
                      <Image
                        src={event.countryFlag}
                        alt={event.location}
                        width={24}
                        height={24}
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Countdown chip */}
                <Countdown date={event.date} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
