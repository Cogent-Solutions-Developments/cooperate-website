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

const parseDate = (dateStr: string): Date =>
  new Date(dateStr.replace(/(\d+)(st|nd|rd|th)/, "$1").replace(",", ""));

export default function ConferencesSection() {
  const now = new Date();

  const upcoming = (data as EventItem[]).filter(
    (e) => parseDate(e.date) >= now
  );
  const past = (data as EventItem[]).filter(
    (e) => parseDate(e.date) < now
  );

  return (
    <section className="relative py-10">
      {/* Elegant gradient backdrop */}
      <div className="absolute inset-0 bg-white pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            <span className="text-black">
              Conferences
            </span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Explore upcoming and past conferences curated by Cogent Solutions —
            connecting industries, ideas, and innovation.
          </p>
        </div>

        {/* Upcoming */}
        {upcoming.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold text-gray-800">
                Upcoming Conferences
              </h3>
              <div className="h-[2px] flex-1 ml-6 bg-gradient-to-r from-[color:var(--brand-primary,#2563eb)]/70 to-transparent"></div>
            </div>

            <EventGrid events={upcoming} />
          </div>
        )}

        {/* Past */}
        {past.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold text-gray-800">
                Past Conferences
              </h3>
              <div className="h-[2px] flex-1 ml-6 bg-gradient-to-r from-gray-300 to-transparent"></div>
            </div>

            <EventGrid events={past} />
          </div>
        )}
      </div>
    </section>
  );
}
