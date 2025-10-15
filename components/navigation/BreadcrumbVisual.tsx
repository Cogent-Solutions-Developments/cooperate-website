"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Home as HomeIcon, ChevronRight } from "lucide-react";

type Crumb = {
  label: string;
  /** ignored for visuals (kept so you can reuse same data shape) */
  href?: string;
  icon?: React.ReactNode;
};

type BreadcrumbVisualProps = {
  items?: Crumb[];
  auto?: boolean;
  rootLabel?: string;
  rootHref?: string; // ignored (visual only)
  segmentLabels?: Record<string, string>;
  separator?: React.ReactNode;
  className?: string;
  size?: "sm" | "md";
  /** inject JSON-LD for SEO; visual-only still benefits from structured data */
  structuredData?: boolean;
};

function titleCase(s: string) {
  return s.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
}

function buildAutoCrumbs(
  pathname: string,
  rootLabel = "Home",
  segmentLabels: Record<string, string> = {}
): Crumb[] {
  const parts = pathname.split("/").filter(Boolean);
  const crumbs: Crumb[] = [{ label: rootLabel, icon: <HomeIcon className="h-4 w-4" /> }];
  let cumulative = "";
  for (let i = 0; i < parts.length; i++) {
    cumulative += `/${parts[i]}`;
    const seg = parts[i];
    const label = segmentLabels[seg] || titleCase(seg.replace(/[-_]/g, " "));
    crumbs.push({ label });
  }
  return crumbs;
}

export default function BreadcrumbVisual({
  items,
  auto = false,
  rootLabel = "Home",
  rootHref, // ignored
  segmentLabels,
  separator,
  className,
  size = "md",
  structuredData = true,
}: BreadcrumbVisualProps) {
  const pathname = usePathname() || "/";
  const computed = React.useMemo(() => {
    if (items?.length) return items;
    if (auto) return buildAutoCrumbs(pathname, rootLabel, segmentLabels);
    return [{ label: rootLabel, icon: <HomeIcon className="h-4 w-4" /> }];
  }, [items, auto, pathname, rootLabel, segmentLabels]);

  const lastIdx = computed.length - 1;

  // baked-in tones (dark blue system)
  const styles = {
    container: "text-sm flex items-center gap-2",
    icon: "text-[#3366FF]", // darkblue-600
    text: "text-slate-500",
    current: "text-[#254EDA] font-medium", // darkblue-700
    separator: "text-slate-400",
    size: size === "sm" ? "text-[12px]" : "text-[14px]",
  };

  const jsonLd =
    structuredData &&
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: computed.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.label,
      })),
    };

  return (
    <nav
      aria-label="Breadcrumb"
      className={[styles.container, styles.text, styles.size, className].filter(Boolean).join(" ")}
    >
      {computed.map((c, i) => {
        const isLast = i === lastIdx;
        return (
          <React.Fragment key={`${c.label}-${i}`}>
            <div className="flex items-center gap-2">
              {i === 0 && (c.icon ?? <HomeIcon className={["h-4 w-4", styles.icon].join(" ")} />)}
              {/* visual only: always spans, never links */}
              <span className={isLast ? styles.current : undefined} aria-current={isLast ? "page" : undefined}>
                {c.label}
              </span>
            </div>
            {!isLast && (
              <span className={["mx-1", styles.separator].join(" ")}>
                {separator ?? <ChevronRight className="h-4 w-4 inline-block align-middle" />}
              </span>
            )}
          </React.Fragment>
        );
      })}
      {structuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
    </nav>
  );
}
