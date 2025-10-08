"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type EventItem = {
  id: string;
  title: string;
  dateLabel: string;
  country: string;
  countryCode?: string;
  tag?: string;
  imageUrl: string;
  logoUrl?: string;
  href: string;
};

const flagEmoji = (iso2?: string) =>
  !iso2
    ? ""
    : String.fromCodePoint(
        ...iso2
          .toUpperCase()
          .split("")
          .map((c) => 127397 + c.charCodeAt(0))
      );

export default function UpcomingConferences() {
  const [events, setEvents] = useState<EventItem[] | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUrl = "/api/conferences";

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch(fetchUrl, { cache: "no-store" });
        const data = (await res.json()) as EventItem[];
        if (mounted) setEvents(data);
      } catch {
        if (mounted) setEvents([]);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [fetchUrl]);

  const items = useMemo(() => events ?? [], [events]);

  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-[color:var(--foreground)]">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Our Upcoming Conferences
          </h2>
          <Link
            href="/conferences"
            className="text-sm font-semibold underline-offset-4 hover:underline"
          >
            View All
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={`s-${i}`}
                  className="aspect-[4/5.2] rounded-2xl border border-black/10 bg-black/[.04] animate-pulse"
                />
              ))
            : items.length === 0
            ? (
              <div className="col-span-full rounded-xl border border-black/10 p-6 text-sm">
                No upcoming conferences right now. Please check back soon.
              </div>
            )
            : items.map((ev) => (
                <Link
                  key={ev.id}
                  href={ev.href}
                  className="group relative block overflow-hidden rounded-2xl border border-black/10 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-black/20"
                >
                  {/* Background */}
                  <div className="absolute inset-0">
                    <Image
                      src={ev.imageUrl}
                      alt={ev.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-7">
                    {/* Top Pills */}
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black shadow-sm">
                        {ev.dateLabel}
                      </span>
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black shadow-sm">
                        {ev.country} {flagEmoji(ev.countryCode)}
                      </span>
                      {ev.tag && (
                        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black shadow-sm">
                          {ev.tag}
                        </span>
                      )}
                    </div>

                    {/* Bottom Title + Logo */}
                    <div>
                      {ev.logoUrl && (
                        <div className="mb-3">
                          <Image
                            src={ev.logoUrl}
                            alt={`${ev.title} logo`}
                            width={160}
                            height={45}
                            className="h-10 w-auto"
                          />
                        </div>
                      )}
                      <h3 className="text-base sm:text-lg font-extrabold leading-snug text-white">
                        {ev.title}
                      </h3>
                    </div>

                    {/* Hover outline */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-inset ring-black/0 transition-all duration-300 group-hover:ring-2 group-hover:ring-white/40" />
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
}
