"use client";

import React from "react";

interface BoxProps {
  color?: string;
  size?: number;
  items?: (string | React.ReactNode)[];
  className?: string;
}

const Box: React.FC<BoxProps> = ({
  color = "#2f53bd",
  size = 1,
  items = [],
  className = "",
}) => {
  const maxItems = 4;
  const displayItems = items.slice(0, maxItems);

  // Ring radiuses:
  const outer = 130;
  const middle = 100;
  const inner = 70;

  // 4 orbiting items – left & right only:
  const positions = [
    { ring: outer, angle: -190, size: 58 }, // big left outer
    { ring: middle, angle: -150, size: 50 }, // left middle
    { ring: outer, angle: -20, size: 55 }, // big right outer
    { ring: inner, angle: 40, size: 40 }, // right inner
  ];

  return (
    <div style={{ transform: `scale(${size})` }} className={className}>
      <div
        className="relative"
        style={{
          width: 320,
          height: 320,
        }}
      >

        {/* ========= RINGS WITH FADE + ANIMATED GLOW ========= */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          
          <div
            className="relative group pointer-events-auto"
            style={{
              width: 260,
              height: 260,
              maskImage:
                "linear-gradient(to bottom, transparent 0%, transparent 12%, black 48%, transparent 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, transparent 12%, black 48%, transparent 88%, transparent 100%)",
            }}
          >

            {/* GLOW ANIMATION LAYER */}
            <div
              className="
        absolute inset-0 rounded-full opacity-0
        transition-opacity duration-300
        group-hover:opacity-100
        animate-spinGlow
      "
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, rgba(29,48,157,0.45) 90deg, transparent 180deg)",
                filter: "blur(6px)",
              }}
            />

            {/* OUTER RING */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                border: `1px solid ${color}18`,
                filter:
                  "drop-shadow(0 0 6px rgba(29,48,157,0.35)) drop-shadow(0 0 12px rgba(29,48,157,0.18))",
              }}
            />

            {/* MIDDLE RING */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                transform: "scale(0.77)",
                border: `1px solid ${color}22`,
                filter: "drop-shadow(0 0 4px rgba(29,48,157,0.25))",
              }}
            />

            {/* INNER RING */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                transform: "scale(0.54)",
                border: `1px solid ${color}28`,
                filter: "drop-shadow(0 0 3px rgba(29,48,157,0.15))",
              }}
            />
          </div>
        </div>

        {/* ========= ORBIT ITEMS ========= */}
        <div className="absolute inset-0 z-10">
          {displayItems.map((item, i) => {
            const pos = positions[i];

            const angleRad = pos.angle * (Math.PI / 180);
            const x = Math.cos(angleRad) * pos.ring;
            const y = Math.sin(angleRad) * pos.ring;

            return (
              <div
                key={i}
                className="absolute"
                style={{
                  width: pos.size,
                  height: pos.size,
                  top: "50%",
                  left: "50%",
                  transform: `
                    translate(-50%, -50%)
                    translate(${x}px, ${y}px)
                  `,
                }}
              >
                <div
                  className="
                    w-full h-full rounded-full overflow-hidden
                    transition-transform duration-300 ease-out
                    hover:scale-[1.12]
                  "
                  style={{
                    border: "3px solid white",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.20)",
                    backgroundColor: "#fff",
                    backgroundImage:
                      typeof item === "string" ? `url(${item})` : undefined,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {typeof item !== "string" && item}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Box;
