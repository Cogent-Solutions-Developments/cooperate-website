"use client";

import Image from "next/image";
import { useMemo } from "react";
import conferencesRaw from "@/data/explore/conferences.json";
import boardroomsRaw from "@/data/explore/boardrooms.json";

const MONTHS: Record<string, number> = {
  january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
  july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
};

function stripOrdinals(s: string) {
  return s.replace(/\b(\d+)(st|nd|rd|th)\b/gi, "$1");
}

function parseHumanDate(input: string): Date | null {
  if (!input) return null;
  const clean = stripOrdinals(input.trim())
    .replace(/,/g, " ")
    .replace(/\s+/g, " ")
    .toLowerCase();
  const parts = clean.split("&").map(p => p.trim());
  let best: Date | null = null;
  for (const p of parts) {
    const m = p.match(/\b(\d{1,2})\s+([a-z]+)\s+(\d{4})\b/);
    if (m) {
      const day = parseInt(m[1], 10);
      const monthIdx = MONTHS[m[2]];
      const year = parseInt(m[3], 10);
      if (monthIdx !== undefined) {
        const d = new Date(Date.UTC(year, monthIdx, day));
        if (!best || d < best) best = d;
      }
    }
  }
  return best;
}

function isInFuture(date: Date): boolean {
  const now = new Date();
  return date.getTime() >= now.getTime() - 86400000;
}

export default function UpcomingCard() {
  const nearestEvent = useMemo(() => {
    const datasets = [conferencesRaw, boardroomsRaw];
    const all = datasets.flat();
    const parsed = all
      .map((ev: any) => ({ ...ev, parsed: parseHumanDate(ev.date) }))
      .filter(e => e.parsed && isInFuture(e.parsed));
    if (!parsed.length) return null;
    parsed.sort((a, b) => a.parsed - b.parsed);
    return parsed[0];
  }, []);

  if (!nearestEvent) return null;

  return (
    <div className="relative w-[340px] h-[290px] rounded-[48px] bg-gradient-to-br from-[#E5E9FF] to-[#F4F6FF] shadow-[0_6px_18px_rgba(0,0,0,0.12)] flex flex-col justify-between p-4 overflow-hidden">

      {/* === TOP RIGHT CORNER ACTIONS === */}
      <div className="absolute right-0 top-0 bg-[#E5E9FF] flex items-center gap-2 px-2 py-1 rounded-bl-[48px] shadow-sm">
        <button className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#1D309D] hover:text-white transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.85 23.85 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.26 24.26 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            <circle cx="19" cy="6" r="3" fill="#E63333" />
          </svg>
        </button>

        <button className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#1D309D] hover:text-white transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M17 7L6 18" />
            <path d="M8 7h9v9" />
          </svg>
        </button>
      </div>

      {/* === TOP FIGURE === */}
      <div className="flex items-center gap-4 mt-3">
        <div className="w-14 h-14 rounded-full overflow-hidden bg-white shadow-inner flex items-center justify-center">
          <Image src="/images/logo-icon.png" alt="Cogent Logo" width={50} height={50} className="object-contain" />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-[#1D309D] text-[16px]">Cogent Solutions</p>
          <p className="text-sm text-gray-600">Upcoming Event</p>
        </div>
      </div>

      {/* === BODY (event content) === */}
      <div className="flex items-center gap-4 mt-4">
        <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#1D309D]/10 flex-shrink-0">
          <Image
            src={nearestEvent.backgroundImage}
            alt="Event"
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-[#1D309D] leading-tight text-[15px]">
            {nearestEvent.title}
          </h4>
          <p className="text-[13px] text-gray-700 mt-1">
            {nearestEvent.date} — {nearestEvent.location}
          </p>
        </div>
      </div>

      {/* === FOOTER === */}
      <div className="flex items-center justify-between mt-5 border-t border-[#1D309D]/10 pt-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-[#1D309D] bg-[#E5E9FF] px-3 py-1.5 rounded-full shadow-inner">
            Upcoming
          </span>
        </div>

        <div className="flex gap-3">
          <a
            href={nearestEvent.link}
            target="_blank"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1D309D] hover:bg-[#3549E9] text-white shadow-md transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
              strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-[#E5E9FF] hover:bg-[#d8dcf9] text-[#1D309D] shadow-inner transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
              strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M4 11h16M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
