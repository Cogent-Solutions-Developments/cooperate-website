"use client";

import EventGrid from "@/components/explore/EventGrid";
import conferences from "@/data/explore/conferences.json";
import boardrooms from "@/data/explore/boardrooms.json";
// import virtuals from "@/data/explore/virtual.json";

type EventItem = {
  id: string;
  title: string;
  date: string;
  location: string;
  countryFlag?: string;
  logoUrl?: string;
  backgroundImage: string;
  link: string;
};

// Helper: parse and extract last date for comparison
const parseDate = (dateStr: string): Date | null => {
  if (!dateStr || dateStr.trim() === "") return null;

  try {
    let lastPart = dateStr;
    if (dateStr.includes("&")) {
      const parts = dateStr.split("&");
      lastPart = parts[parts.length - 1].trim();
    } else if (dateStr.includes(" to ")) {
      const parts = dateStr.split(" to ");
      lastPart = parts[parts.length - 1].trim();
    }

    const clean = lastPart.replace(/(\d+)(st|nd|rd|th)/, "$1").replace(",", "");
    return new Date(clean);
  } catch {
    return null;
  }
};

export default function UpcomingEventsSection() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  // Merge all event data
  const allEvents = [
    ...(conferences as EventItem[]),
    ...(boardrooms as EventItem[]),
    // ...(virtuals as EventItem[]),
  ];

  // Filter upcoming only
  const upcoming = allEvents
    .filter((e) => {
      const eventDate = parseDate(e.date);
      return !eventDate || eventDate >= now; // include TBA or future events
    })
    .sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      if (!dateA) return 1;
      if (!dateB) return -1;
      return dateA.getTime() - dateB.getTime(); // nearest first
    });

  if (upcoming.length === 0) return null; // nothing to show

  return (
    <section className="relative py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-gray-900 mb-3">
            Upcoming Events
          </h2>
          <p className="text-gray-600 text-[15px] font-medium max-w-xl mx-auto">
            Explore our upcoming conferences, boardrooms, and virtual forums —
            designed to drive industry transformation.
          </p>
        </div>

        {/* Event Grid (reusing your EventGrid component) */}
        <EventGrid events={upcoming} />

        {/* View More Button */}
        <div className="flex justify-center mt-10 mb-16">
          <a
            href="/explore"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition-all duration-300"
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
}
