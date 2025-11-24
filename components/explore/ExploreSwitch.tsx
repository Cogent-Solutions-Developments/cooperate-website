"use client";

import clsx from "clsx";
import { ExploreCategory } from "@/types/explore";

type Props = {
  active: ExploreCategory;
  onChange: (category: ExploreCategory) => void;
  counts?: Record<ExploreCategory, number>; // optional: shows count badges
};

const tabs = [
  { key: "conferences", label: "Conferences" },
  { key: "boardrooms", label: "Boardrooms" },
  { key: "virtual", label: "Virtual Events" },
];

export default function ExploreSwitch({ active, onChange, counts }: Props) {
  return (
    <div className="flex justify-center py-10 ">
      <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm border border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key as ExploreCategory)}
            className={clsx(
              "relative flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300",
              active === tab.key
                ? "bg-[color:var(--brand-primary,#2563eb)] text-white shadow-sm"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            )}
          >
            {tab.label}

            {/* Count badge (optional) */}
            {counts?.[tab.key as ExploreCategory] && (
              <span
                className={clsx(
                  "ml-1 flex h-5 min-w-[20px] items-center justify-center rounded-full text-xs font-bold transition-all",
                  active === tab.key
                    ? "bg-white text-[color:var(--brand-primary,#2563eb)]"
                    : "bg-gray-100 text-gray-700"
                )}
              >
                {counts[tab.key as ExploreCategory]}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
