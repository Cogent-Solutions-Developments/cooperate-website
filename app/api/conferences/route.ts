import { NextResponse } from "next/server";

// Demo data — swap with your DB/CMS fetch
export async function GET() {
  const data = [
    {
      id: "cui-frp-ksa-2025",
      title:
        "9th Asset Integrity Management FRP & CUI Innovations Conference",
      dateLabel: "1st & 2nd October, 2025",
      country: "KSA",
      countryCode: "SA",
      tag: "Conference",
      imageUrl: "/images/home/card_bg.png",
      logoUrl: "/images/home/event_logo_low.png",
      href: "/events/ksa-cui-frp-2025",
    },
    {
      id: "water-dubai-2025",
      title: "2nd Water Management Conference",
      dateLabel: "7th October, 2025",
      country: "UAE",
      countryCode: "AE",
      tag: "Conference",
      imageUrl: "/images/events/water-dubai.jpg",
      logoUrl: "/images/logos/water.png",
      href: "/events/water-dubai-2025",
    },
    {
      id: "procurement-einv-tax-2025",
      title: "5th Procurement E-Invoicing & Tax Conference",
      dateLabel: "4th November, 2025",
      country: "UAE",
      countryCode: "AE",
      tag: "Conference",
      imageUrl: "/images/events/proc-tax.jpg",
      logoUrl: "/images/logos/proc.png",
      href: "/events/procurement-einv-tax-2025",
    },
    {
      id: "regtech-2025",
      title: "11th Regtech Conference",
      dateLabel: "6th November, 2025",
      country: "UAE",
      countryCode: "AE",
      tag: "Conference",
      imageUrl: "/images/events/regtech.jpg",
      logoUrl: "/images/logos/regtech.png",
      href: "/events/regtech-2025",
    },
    {
      id: "ksa-stadiums-2026",
      title: "Global Stadiums Congress",
      dateLabel: "5th February, 2026",
      country: "KSA",
      countryCode: "SA",
      tag: "Conference",
      imageUrl: "/images/events/stadiums-ksa.jpg",
      logoUrl: "/images/logos/stadiums.png",
      href: "/events/global-stadiums-ksa-2026",
    },
    {
      id: "nigeria-aim-2026",
      title: "Asset Integrity & Corrosion Management – CUI & FRP",
      dateLabel: "25th February, 2026",
      country: "NIGERIA",
      countryCode: "NG",
      tag: "Conference",
      imageUrl: "/images/events/aim-nigeria.jpg",
      logoUrl: "/images/logos/aim.png",
      href: "/events/aim-nigeria-2026",
    },
    {
      id: "qat-ar-aim-2026",
      title: "Asset Integrity & Corrosion Management – CUI & FRP",
      dateLabel: "19th & 20th May, 2026",
      country: "QATAR",
      countryCode: "QA",
      tag: "Conference",
      imageUrl: "/images/events/aim-qatar.jpg",
      logoUrl: "/images/logos/aim.png",
      href: "/events/aim-qatar-2026",
    },
  ];

  return NextResponse.json(data);
}
