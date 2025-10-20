// app/events-highlight/page.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "@/components/layout/NavBar";
import BreadcrumbVisual from "@/components/navigation/BreadcrumbVisual";
import { createPortal } from "react-dom";
import {
  CalendarDays,
  Play,
  Search,
  ChevronDown,
  Video,
  X,
  Tag,
  Check,
} from "lucide-react";

/* ================================
   Types
================================== */
type Provider = "youtube" | "mp4";

type VideoItem = {
  id: string;
  title: string;
  provider: Provider;
  /** for YouTube, provide the VIDEO ID only */
  src: string;
  /** optional poster/thumbnail image (only used for mp4) */
  thumbnail?: string;
  duration?: string;
  year: number;
  city?: string;
  country?: string;
  tags?: string[];
};

/* ================================
   Demo Data (replace with live feed)
================================== */
const VIDEOS: VideoItem[] = [
  {
    id: "8th-asset-integrity-conf-2025",
    title: "8th Asset Integrity & Corrosion Management Conference - 2025",
    provider: "youtube",
    src: "1b_dyIQqZxo",
    duration: "01:24",
    country: "Qatar",
    year: 2025,
    tags: ["Asset Integrity", "Corrosion", "AIM","Conference", "Qatar"],
  },
  {
    id: "10th-regtech-conf-2024",
    title: "10th Regtech Conference - 2024",
    provider: "youtube",
    src: "nG_Cw1xrMNw",
    duration: "01:48",
    country: "UAE",
    year: 2024,
    tags: ["RegTech", "Conference", "UAE", "Regulatory"],
  },
  {
    id: "water-management-conf-2024",
    title: "Water Management Conference - 2024",
    provider: "youtube",
    src: "K1B3gTGoiE8",
    duration: "01:42",
    year: 2024,
    country: "UAE",
    tags: ["Water", "Conference", "UAE"],
  },
  {
    id: "5th-asset-integrity-conf-2024",
    title: "5th Asset Integrity Management Conference - 2024",
    provider: "youtube",
    src: "3LwXop6BkhM",
    duration: "01:56",
    country: "Qatar",
    year: 2024,
    tags: ["Asset Integrity", "AIM", "Conference", "Qatar"],
  },
  {
    id: "stadium-innovation-conference-ksa-2024",
    title: "Stadium Innovation Conference KSA - 2024",
    provider: "youtube",
    src: "in1p0IKOaFE",
    duration: "00:32",
    year: 2024,
    tags: ["Stadium Innovation", "Conference", "KSA"],
  },
  {
    id: "dow-jones2023",
    title: "Dow Jones | Managing Compliance Complexities - Event Highlights",
    provider: "youtube",
    src: "k2iubR_Dj78",
    duration: "01:51",
    year: 2023,
    city: "Dubai",
    country: "UAE",
    tags: ["Dow Jones", "Compliance", "Risk Management", "UAE", "Dubai"],
  },
  {
    id: "Cognizant2023",
    title: "Saudi Aviation Leadership Meeting | Cognizant",
    provider: "youtube",
    src: "OeVGIcRadko",
    duration: "01:38",
    year: 2023,
    tags: ["Saudi Aviation", "Cognizant", "Leadership Meeting", "KSA"],
  },
  {
    id: "6th-open-banking2023",
    title: "6th Open Banking",
    provider: "youtube",
    src: "OQ6X8IcR8i4",
    duration: "02:08",
    year: 2023,
    city: "Riyadh",
    country: "KSA",
    tags: ["Open Banking", "Banking", "Riyadh", "KSA"],
  },
  {
    id: "7th-regtech-conference-2023",
    title: "7th RegTech Conference - 2023",
    provider: "youtube",
    src: "vz-smnOJTD8",
    duration: "01:41",
    year: 2023,
    city: "Abu Dhabi",
    country: "UAE",
    tags: ["RegTech", "Conference", "UAE", "Abu Dhabi"],
  },
  {
    id: "6th-mena-regtech-forum-2023",
    title: "6th MENA Regtech Forum - 2023",
    provider: "youtube",
    src: "sryi9PpjLuE",
    duration: "00:44",
    year: 2023,
    country: "Qatar",
    tags: ["RegTech", "MENA", "Regulatory", "Qatar", "Forum"],
  },
  {
    id: "5th-mena-regtech-forum-2023",
    title: "5th MENA Regtech Forum- 2023",
    provider: "youtube",
    src: "lcC_nby7FQY",
    duration: "00:45",
    year: 2023,
    country: "KSA",
    tags: ["RegTech", "MENA", "Regulatory", "KSA", "Forum"],
  },
  {
    id: "temenos-ivory-coast-2023",
    title: "Temenos Ivory Coast - 2023",
    provider: "youtube",
    src: "PLiqV3RDL_w",
    duration: "01:17",
    year: 2023,
    tags: ["Temenos", "Banking", "Digital Transformation", "Ivory Coast"],
  },
  {
    id: "hcl-boardroom-2023",
    title: "HCL Boardroom - 2023",
    provider: "youtube",
    src: "7e6Q3KYx70Y",
    duration: "00:28",
    year: 2023,
    city: "Dubai",
    country: "UAE",
    tags: ["HCL", "Boardroom", "HCLTech", "UAE", "Dubai"],
  },
  {
    id: "temenos-algeria-2023",
    title: "Temenos Algeria - 2023",
    provider: "youtube",
    src: "qWAgif7FzzM",
    duration: "00:45",
    year: 2023,
    tags: ["Temenos", "Banking", "Algeria"],
  },
  {
    id: "temenos-tunisia-2023",
    title: "Temenos Tunisia - 2023",
    provider: "youtube",
    src: "NvSh9S3VkXE",
    duration: "00:41",
    year: 2023,
    tags: ["Temenos", "Banking", "Tunisia"],
  },
  {
    id: "theme-parks-entertainment-confex-2023",
    title: "Theme Parks & Entertainment Confex - 2023",
    provider: "youtube",
    src: "qsz7OoIcBho",
    duration: "00:51",
    year: 2023,
    country: "KSA",
    tags: ["Theme Parks", "Confex", "KSA"],
  },
  {
    id: "airport-innovation-conf-2023",
    title: "Airport Innovation Conference - 2023",
    provider: "youtube",
    src: "ISKkbFSyhvQ",
    duration: "01:21",
    year: 2023,
    country: "KSA",
    tags: ["Airport Innovation", "Conference", "KSA"],
  },
  {
    id: "3rd-asset-integrity-management-conf-2023",
    title: "3rd Asset Integrity Management Conference - 2023",
    provider: "youtube",
    src: "H-KmmS6lfvE",
    duration: "01:27",
    year: 2023,
    country: "Oman",
    tags: ["Asset Integrity", "AIM", "Conference", "Oman"],
  },
  {
    id: "firecon-conf-2023",
    title: "Firecon Conference - 2023",
    provider: "youtube",
    src: "9TNhKChQZHU",
    duration: "01:54",
    year: 2023,
    country: "UAE",
    tags: ["Firecon", "Conference", "UAE"],
  },
  {
    id: "one-trust-boardroom-2023",
    title: "One Trust Boardroom - 2023",
    provider: "youtube",
    src: "xOksQhp2t-o",
    duration: "00:23",
    year: 2023,
    country: "UAE",
    tags: ["One Trust", "Boardroom", "UAE"],
  },
  {
    id: "accelerate-the-decarbonization-in-power-utilities-2023",
    title: "Accelerate the Decarbonization in Power & Utilities - 2023",
    provider: "youtube",
    src: "oglaVPzIMbE",
    duration: "00:50",
    year: 2023,
    tags: ["Decarbonization", "Utilities", "Power"],
  },
  {
    id: "2nd-uae-corporate-tax-2023",
    title: "2nd UAE Corporate Tax - 2023",
    provider: "youtube",
    src: "eAuUhRMerF0",
    duration: "02:00",
    year: 2023,
    country: "UAE",
    tags: ["UAE", "Corporate Tax", "Tax"],
  },
  {
    id: "4th-mena-regtech-forum-2022",
    title: "4th MENA RegTech Forum - 2022",
    provider: "youtube",
    src: "2ipvXSd1C70",
    duration: "02:00",
    year: 2022,
    country: "UAE",
    tags: ["RegTech", "Mena", "Regulatory", "UAE", "Forum"],
  },
  {
    id: "the-3rd-open-banking-forum-2022",
    title: "The 3rd Open Banking Forum - 2022",
    provider: "youtube",
    src: "VnC2ulUq2zw",
    duration: "02:00",
    year: 2022,
    country: "KSA",
    tags: ["Open Banking", "Banking", "Forum", "KSA"],
  },
  {
    id: "4th-digital-health-confex-2022",
    title: "4th Digital Health Confex - 2022",
    provider: "youtube",
    src: "fQMZ5V8XS1I",
    duration: "01:45",
    year: 2022,
    country: "KSA",
    tags: ["Digital Health", "Health", "Confex", "KSA"],
  },
  {
    id: "uae-corporate-tax-forum-2022",
    title: "UAE Corporate Tax Forum - 2022",
    provider: "youtube",
    src: "1F33tJenHOw",
    duration: "01:23",
    year: 2022,
    country: "UAE",
    tags: ["UAE", "Corporate Tax", "Tax", "Forum"],
  },
  {
    id: "2nd-middle-east-data-analytics-forum-2022",
    title: "2nd Middle East Data Analytics Forum - 2022",
    provider: "youtube",
    src: "VZ3KjsdSHp4",
    duration: "01:22",
    year: 2022,
    country: "UAE",
    tags: ["Data Analytics", "Analytics", "Middle East", "UAE", "Forum"],
  },
  {
    id: "asset-integrity-management-summit-2022",
    title: "Asset Integrity Management Summit - 2022",
    provider: "youtube",
    src: "6WIeDSJb9Mw",
    duration: "01:39",
    year: 2022,
    country: "Oman",
    tags: [
      "Asset Integrity",
      "Integrity",
      "Management",
      "Summit",
      "AIM",
      "Oman",
    ],
  },
  {
    id: "2nd-middle-east-banking-revolution-forum-2022",
    title: "2nd Middle East Banking Revolution Forum - 2022",
    provider: "youtube",
    src: "YplkUQ_aEbA",
    duration: "01:39",
    year: 2022,
    country: "UAE",
    tags: ["Banking Revolution", "Banking", "Middle East", "UAE", "Forum"],
  },
  {
    id: "3rd-digital-health-mena-forum-2022",
    title: "3rd Digital Health MENA Forum - 2022",
    provider: "youtube",
    src: "YtCGBWArxus",
    duration: "01:25",
    year: 2022,
    country: "UAE",
    tags: ["Digital Health", "Health", "MENA", "UAE", "Forum"],
  },
  {
    id: "future-worktech-summit-2022-speaker-highlights",
    title: "Future Worktech Summit - 2022 Speaker Highlights",
    provider: "youtube",
    src: "Ku172stDcSA",
    duration: "00:45",
    year: 2022,
    country: "UAE",
    tags: ["Future Worktech", "Worktech", "Summit", "UAE"],
  },
  {
    id: "digital-transformation-public-sector-2022",
    title:
      "Digital Transformation Public Sector Executive Boardroom Meeting Highlights - 2022",
    provider: "youtube",
    src: "SPHg6DgLCSk",
    duration: "00:41",
    year: 2022,
    country: "UAE",
    tags: [
      "Digital Transformation",
      "Public Sector",
      "Executive Boardroom Meeting",
      "UAE",
      "Boardroom",
    ],
  },
  {
    id: "3rd-mena-regtech-forum-2022",
    title: "3rd MENA RegTech Forum - 2022",
    provider: "youtube",
    src: "iAyuSAlZIxE",
    duration: "00:41",
    year: 2022,
    city: "Dubai",
    country: "UAE",
    tags: ["RegTech", "MENA", "Regulatory", "Forum", "UAE", "Dubai"],
  },
  {
    id: "cio-executive-summit-2022",
    title: "CIO Executive Summit - 2022",
    provider: "youtube",
    src: "_5FstrtkLkU",
    duration: "00:52",
    year: 2022,
    country: "KSA",
    tags: ["CIO", "Executive", "Summit", "KSA"],
  },
  {
    id: "future-worktech-summit-2022",
    title: "Future Worktech Summit - 2022",
    provider: "youtube",
    src: "qYWSZVZncHU",
    duration: "00:46",
    year: 2022,
    country: "UAE",
    tags: ["Future Worktech", "Worktech", "Summit", "UAE"],
  },
  {
    id: "2nd-open-banking-forum-2022",
    title: "2nd Open Banking Forum - 2022",
    provider: "youtube",
    src: "aF3Higz3Ehg",
    duration: "01:20",
    year: 2022,
    tags: ["Open Banking", "Banking", "Forum"],
  },
  {
    id: "middle-east-cybersecurity-forum-2022",
    title: "Middle East Cybersecurity Forum - 2022",
    provider: "youtube",
    src: "9UfFgzn24fA",
    duration: "02:53",
    year: 2022,
    tags: ["Cybersecurity", "Security", "MENA", "Forum"],
  },
];

/* ================================
   Utils
================================== */
const cx = (...a: (string | false | null | undefined)[]) =>
  a.filter(Boolean).join(" ");
const unique = <T,>(arr: T[]) => Array.from(new Set(arr));
const allYears = unique(VIDEOS.map((v) => v.year)).sort((a, b) => b - a);
const allTags = unique(VIDEOS.flatMap((v) => v.tags ?? []));

const ytThumb = (id: string) =>
  `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

function youTubeEmbedUrl(id: string, autoplay = 1) {
  const params = new URLSearchParams({
    autoplay: String(autoplay),
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  }).toString();
  return `https://www.youtube.com/embed/${id}?${params}`;
}

/* ================================
   Lightbox Player
================================== */
function Lightbox({
  open,
  video,
  onClose,
}: {
  open: boolean;
  video: VideoItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && video && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-5xl aspect-video overflow-hidden bg-black rounded-xl"
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-[95] inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {video.provider === "youtube" ? (
              <iframe
                title={video.title}
                src={youTubeEmbedUrl(video.src, 1)}
                className="h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                className="h-full w-full"
                src={video.src}
                autoPlay
                controls={false}
                muted
                playsInline
                loop
                poster={video.thumbnail}
              />
            )}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 className="text-white text-sm sm:text-base font-semibold">
                {video.title}
              </h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ================================
   Tiny Tilt
================================== */
function useTilt(max = 6) {
  const ref = useRef<HTMLDivElement | null>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(1000px) rotateX(${(py - 0.5) * -max
      }deg) rotateY(${(px - 0.5) * max}deg) scale(1.01)`;
    (el.style as any).setProperty("--glx", `${px * 100}%`);
    (el.style as any).setProperty("--gly", `${py * 100}%`);
  };
  const reset = () => {
    const el = ref.current!;
    el.style.transform = "";
  };
  return { ref, onMove, reset };
}

/* ================================
   Video Card
================================== */
function VideoCard({
  v,
  onOpen,
}: {
  v: VideoItem;
  onOpen: (video: VideoItem) => void;
}) {
  const { ref, onMove, reset } = useTilt(6);
  const thumb =
    v.provider === "youtube"
      ? ytThumb(v.src)
      : v.thumbnail ?? "/images/fallback-video.jpg";

  return (
    <motion.button
      onClick={() => onOpen(v)}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group relative block w-full overflow-hidden bg-black"
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className="relative aspect-video will-change-transform"
      >
        <Image
          src={thumb}
          alt={v.title}
          fill
          className="object-cover transition duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />

        {/* veil + glare */}
        <div className="absolute inset-0 bg-black/28 transition group-hover:bg-black/40" />
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(180px 180px at var(--glx,50%) var(--gly,50%), rgba(255,255,255,0.12), transparent 60%)",
          }}
        />

        {/* play */}
        <div className="absolute inset-0 grid place-items-center">
          <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-white/90 text-neutral-900 shadow transition group-hover:scale-110">
            <Play className="h-5 w-5 -ml-0.5" />
          </span>
        </div>

        {/* title/location */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
          <h3 className="text-white text-[15px] sm:text-[16px] font-semibold tracking-[0.12em] uppercase drop-shadow">
            {v.title}
          </h3>
          {(v.city || v.country) && (
            <p className="mt-0.5 text-white/85 text-[11px] tracking-[0.2em] uppercase">
              {[v.city, v.country].filter(Boolean).join(" — ")}
            </p>
          )}
        </div>

        {/* duration */}
        {v.duration && (
          <span className="absolute bottom-2 right-2 rounded-md bg-black/70 px-1.5 py-0.5 text-[11px] font-semibold text-white">
            {v.duration}
          </span>
        )}
      </div>
    </motion.button>
  );
}

/* ================================
   Select (for filters)
================================== */
function Select({
  icon,
  label,
  value,
  onChange,
  options,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const position = () => {
    const btn = btnRef.current;
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    const gap = 8;
    const width = r.width;
    let left = r.left + window.scrollX;
    const rightEdge = left + width;
    const vw = window.scrollX + window.innerWidth;
    if (rightEdge + 4 > vw) left = Math.max(window.scrollX + 8, vw - width - 8);
    setStyle({
      position: "absolute",
      top: r.bottom + window.scrollY + gap,
      left,
      width,
      zIndex: 9999,
    });
  };

  useEffect(() => {
    if (!open) return;
    position();

    // Use 'click' (not mousedown) + guard both button and menu
    const onClickAway = (e: MouseEvent) => {
      const btn = btnRef.current;
      const menu = menuRef.current;
      const t = e.target as Node;
      if ((btn && (t === btn || btn.contains(t))) || (menu && menu.contains(t)))
        return;
      setOpen(false);
    };
    const onScrollOrResize = () => position();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);

    document.addEventListener("click", onClickAway, true);
    window.addEventListener("scroll", onScrollOrResize, true);
    window.addEventListener("resize", onScrollOrResize);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClickAway, true);
      window.removeEventListener("scroll", onScrollOrResize, true);
      window.removeEventListener("resize", onScrollOrResize);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center justify-between gap-2 rounded-xl border border-darkblue-300 bg-white px-3 py-2.5 text-left text-slate-800 focus:outline-none focus:ring-4 ring-darkblue-300"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="inline-flex items-center gap-2 text-sm">
          <span className="text-darkblue-700">{icon}</span>
          <span className="text-slate-600">{label}:</span>
          <b className="text-slate-900">{value}</b>
        </span>
        <ChevronDown
          className={`h-4 w-4 text-slate-500 transition ${open ? "rotate-180" : ""
            }`}
        />
      </button>

      {open &&
        createPortal(
          <motion.div
            ref={menuRef}
            style={style}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
          >
            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xl ring-1 ring-black/5">
              <div className="px-3 py-2 text-[11px] font-semibold text-slate-600 bg-slate-50 border-b border-neutral-100">
                {label}
              </div>

              {/* Scrollable list */}
              <div
                className="max-h-80 overflow-y-auto custom-thin-scroll"
                role="listbox"
                aria-label={label}
              >
                {options.map((opt) => {
                  const selected = value === opt;
                  return (
                    <button
                      key={opt}
                      // Use onMouseDown so selection always fires before any click-away
                      onMouseDown={(e) => {
                        e.preventDefault(); // avoid focus steal blink
                        onChange(opt);
                        setOpen(false);
                      }}
                      className={`w-full flex items-center justify-between gap-2 px-3 py-2 text-left text-sm hover:bg-darkblue-50 ${selected
                          ? "bg-darkblue-50/70 text-darkblue-800 font-semibold"
                          : "text-slate-800"
                        }`}
                      role="option"
                      aria-selected={selected}
                    >
                      <span className="truncate">{opt}</span>
                      {selected && (
                        <Check className="h-4 w-4 text-darkblue-700 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>,
          document.body
        )}
    </>
  );
}

/* ================================
   Page
================================== */
export default function EventsHighlightPage() {
  const [q, setQ] = useState("");
  const [year, setYear] = useState<number | "All">("All");
  const [tag, setTag] = useState<string | "All">("All");
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<VideoItem | null>(null);

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    return VIDEOS.filter((v) => {
      const matchesQ =
        !t ||
        v.title.toLowerCase().includes(t) ||
        v.city?.toLowerCase().includes(t) ||
        v.country?.toLowerCase().includes(t) ||
        (v.tags ?? []).some((x) => x.toLowerCase().includes(t));
      const matchesYear = year === "All" || v.year === year;
      const matchesTag = tag === "All" || (v.tags ?? []).includes(tag);
      return matchesQ && matchesYear && matchesTag;
    });
  }, [q, year, tag]);

  const openPlayer = (v: VideoItem) => {
    setCurrent(v);
    setOpen(true);
  };
  const closePlayer = () => {
    setOpen(false);
    setTimeout(() => setCurrent(null), 200);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Nav + offset */}
      <NavBar />
      <div className="h-20 md:h-[84px]" />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <BreadcrumbVisual
          auto
          rootLabel="Home"
          segmentLabels={{ "events-highlight": "Events Highlight" }}
        />
      </div>

      {/* Hero banner (aligned with Contact/Help Center) */}
      <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-[#0A1E75]/15 bg-[#0A1E75] text-white shadow-lg"
        >
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="/images/BI1.jpeg" // swap if you have a specific media banner
              alt="Events Highlights"
              fill
              className="object-cover opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E75]/85 via-[#0A1E75]/65 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.25fr,0.75fr] items-center gap-6 px-6 py-10 sm:px-10 lg:px-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                <Video className="h-4 w-4" />
                Events Highlight
              </div>
              <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
                Here is what we’ve done.
              </h1>
              <p className="mt-2 max-w-2xl text-sm sm:text-base text-white/90">
                Watch quick recaps and highlight reels from our flagship
                conferences, boardrooms, and summits.
              </p>
            </div>

            {/* Search + Filters */}
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:w-[520px]">
              <label className="relative col-span-1 sm:col-span-3">
                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-white/70" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search title, city, tag…"
                  className="w-full rounded-xl border border-white/25 bg-white/10 pl-10 pr-3 py-2.5 text-white placeholder:text-white/70 outline-none focus:ring-4 ring-white/30"
                />
              </label>

              <Select
                icon={<CalendarDays className="h-4 w-4" />}
                label="Year"
                value={String(year)}
                onChange={(val) => setYear(val === "All" ? "All" : Number(val))}
                options={["All", ...allYears.map(String)]}
              />
              <Select
                icon={<Tag className="h-4 w-4" />}
                label="Tag"
                value={String(tag)}
                onChange={(val) => setTag(val as any)}
                options={["All", ...allTags]}
              />
              <div className="hidden sm:block" />
            </div>
          </div>
        </motion.div>
      </header>

      {/* Results summary */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-2">
        <div className="flex items-center justify-between text-sm text-neutral-600">
          <span>
            Showing <b>{results.length}</b>{" "}
            {results.length === 1 ? "video" : "videos"}
          </span>
          {(q || year !== "All" || tag !== "All") && (
            <button
              className="text-[#254EDA] underline decoration-[#84A9FF] underline-offset-4 hover:opacity-80"
              onClick={() => {
                setQ("");
                setYear("All");
                setTag("All");
              }}
            >
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        {results.length === 0 ? (
          <div className="grid place-items-center border border-dashed border-neutral-300 p-10 text-neutral-600 rounded-2xl">
            No videos found. Try different filters.
          </div>
        ) : (
          <div className="overflow-hidden bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
              {results.map((v) => (
                <VideoCard key={v.id} v={v} onOpen={openPlayer} />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Lightbox */}
      <Lightbox open={open} video={current} onClose={closePlayer} />

      {/* Theme tokens */}
      <style jsx global>{`
        :root {
          --darkblue-50: #f0f5ff;
          --darkblue-100: #d6e4ff;
          --darkblue-300: #84a9ff;
          --darkblue-600: #3366ff;
          --darkblue-700: #254eda;
          --darkblue-800: #1939b7;
          --darkblue-900: #102693;
        }
        .text-darkblue-600 {
          color: var(--darkblue-600);
        }
        .text-darkblue-700 {
          color: var(--darkblue-700);
        }
        .text-darkblue-800 {
          color: var(--darkblue-800);
        }
        .bg-darkblue-50 {
          background-color: var(--darkblue-50);
        }
        .bg-darkblue-100 {
          background-color: var(--darkblue-100);
        }
        .bg-darkblue-600 {
          background-color: var(--darkblue-600);
        }
        .bg-darkblue-700 {
          background-color: var(--darkblue-700);
        }
        .bg-darkblue-900 {
          background-color: var(--darkblue-900);
        }
        .ring-darkblue-300 {
          --tw-ring-color: var(--darkblue-300);
        }
        .border-darkblue-300 {
          border-color: var(--darkblue-300);
        }

        .custom-thin-scroll {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 transparent; /* slate-300 */
        }
        .custom-thin-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .custom-thin-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-thin-scroll::-webkit-scrollbar-thumb {
          background: #cbd5e1; /* slate-300 */
          border-radius: 999px;
        }
        .custom-thin-scroll::-webkit-scrollbar-thumb:hover {
          background: #94a3b8; /* slate-400 */
        }
      `}</style>
    </div>
  );
}
