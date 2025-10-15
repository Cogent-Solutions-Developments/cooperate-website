"use client";

import EventGrid from "../EventGrid";
import data from "@/data/explore/conferences.json";

type EventItem = {
  id: string;
  title: string;
  date: string;
  location: string;
  countryFlag?: string;
  logoUrl?: string;
  backgroundImage: string;
};

// Parse date string - handles multi-day events by taking the last date
const parseDate = (dateStr: string): Date | null => {
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

    // Remove ordinal suffixes and clean up
    const clean = lastPart.replace(/(\d+)(st|nd|rd|th)/, "$1").replace(",", "");
    return new Date(clean);
  } catch {
    return null;
  }
};

export default function ConferencesSection() {
  const now = new Date();
  now.setHours(0, 0, 0, 0); // Start of today

  const upcoming = (data as EventItem[])
    .filter((e) => {
      const eventDate = parseDate(e.date);
      // No date (TBA) or date >= today (including today)
      return !eventDate || eventDate >= now;
    })
    .sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      // TBA events go to the end
      if (!dateA) return 1;
      if (!dateB) return -1;
      // Sort by nearest date first
      return dateA.getTime() - dateB.getTime();
    });

  const past = (data as EventItem[])
    .filter((e) => {
      const eventDate = parseDate(e.date);
      return eventDate && eventDate < now;
    })
    .sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      // Sort past events by most recent first
      return dateB!.getTime() - dateA!.getTime();
    });

  return (
    <section className="relative py-10">
      {/* Elegant gradient backdrop */}
      <div className="absolute inset-0 bg-white pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            <span className="text-black">
              Invitation Only Corporate Conferences
            </span>
          </h2>
          <p className="text-gray-900 text-[16px] font-semibold max-w-2xl mx-auto">
            Explore upcoming and past conferences curated by Cogent Solutions
            <sup>TM</sup>
          </p>
        </div>

        {/* Upcoming */}
        {upcoming.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center w-full border-b border-gray-200 pb-2">
                <h3 className="text-[18px] md:text-[20px] font-semibold text-gray-900 tracking-tight">
                  Upcoming Conferences ({upcoming.length})
                </h3>
              </div>
            </div>
            <EventGrid events={upcoming} />
          </div>
        )}

        {/* Past */}
        {past.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center w-full border-b border-gray-200 pb-2">
                <h3 className="text-[18px] md:text-[20px] font-semibold text-gray-900 tracking-tight">
                  Past Conferences ({past.length})
                </h3>
              </div>
            </div>

            <EventGrid events={past} />
          </div>
        )}
      </div>
    </section>
  );
}
