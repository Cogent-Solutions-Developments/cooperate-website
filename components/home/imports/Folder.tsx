import React, { useState, useEffect, useRef } from "react";

interface FolderProps {
  color?: string;
  size?: number;
  items?: (string | React.ReactNode)[];
  className?: string;
}

const darkenColor = (hex: string, percent: number): string => {
  let c = hex.startsWith("#") ? hex.slice(1) : hex;
  if (c.length === 3) c = c.split("").map((x) => x + x).join("");
  const num = parseInt(c, 16);
  let r = (num >> 16) & 255;
  let g = (num >> 8) & 255;
  let b = num & 255;
  r = Math.floor(r * (1 - percent));
  g = Math.floor(g * (1 - percent));
  b = Math.floor(b * (1 - percent));
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)
      .toUpperCase()
  );
};

const Folder: React.FC<FolderProps> = ({
  color = "#5227FF",
  size = 1,
  items = [],
  className = "",
}) => {
  const maxItems = 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) papers.push(null);

  const [inView, setInView] = useState(false);   // folder open (flaps)
  const [paperOpen, setPaperOpen] = useState(false); // delayed paper explosion

  const folderRef = useRef<HTMLDivElement | null>(null);

  const [paperOffsets, setPaperOffsets] = useState<{ x: number; y: number }[]>(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
  );

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor("#ffffff", 0.1);
  const paper2 = darkenColor("#ffffff", 0.05);
  const paper3 = "#ffffff";

  // Auto open/close based on scroll visibility
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;

        if (ratio >= 1) {
          // Fully visible → open + delayed paper pop
          setInView(true);
          setTimeout(() => setPaperOpen(true), 250);
        } else {
          // Not fully visible → close + reset
          setInView(false);
          setPaperOpen(false);

          setPaperOffsets(
            Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
          );
        }
      },
      { threshold: [0, 0.5, 0.9, 0.98, 1] }
    );

    if (folderRef.current) obs.observe(folderRef.current);

    return () => obs.disconnect();
  }, [maxItems]); // Added maxItems to dependency array to be safe, though constant

  const open = inView; // flaps open instantly

  const handlePaperMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    if (!paperOpen) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const offsetX = (e.clientX - cx) * 0.15;
    const offsetY = (e.clientY - cy) * 0.15;

    setPaperOffsets((prev) => {
      const clone = [...prev];
      clone[index] = { x: offsetX, y: offsetY };
      return clone;
    });
  };

  const handlePaperMouseLeave = (index: number) => {
    setPaperOffsets((prev) => {
      const clone = [...prev];
      clone[index] = { x: 0, y: 0 };
      return clone;
    });
  };

  const getOpenTransform = (i: number) => {
    if (i === 0) return "translate(-120%, -70%) rotate(-15deg)";
    if (i === 1) return "translate(10%, -70%) rotate(15deg)";
    if (i === 2) return "translate(-50%, -100%) rotate(5deg)";
    return "";
  };

  return (
    <div style={{ transform: `scale(${size})` }} className={className}>
      <div ref={folderRef} className="group relative transition-all duration-200 ease-in">

        {/* Folder Back */}
        <div
          className="relative w-[100px] h-[80px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]"
          style={{ backgroundColor: folderBackColor }}
        >
          {/* Top Tab */}
          <span
            className="absolute z-0 bottom-[98%] left-0 w-[30px] h-[10px] rounded-tl-[5px] rounded-tr-[5px]"
            style={{ backgroundColor: folderBackColor }}
          ></span>

          {/* Papers */}
          {papers.map((item, i) => {
            // FIX: Changed 'let' to 'const'
            const sizeClasses =
              i === 0
                ? "w-[70%] h-[80%]"
                : i === 1
                ? "w-[80%] h-[80%]"
                : "w-[90%] h-[80%]";

            const transformStyle = paperOpen
              ? `${getOpenTransform(i)} translate(${paperOffsets[i].x}px, ${paperOffsets[i].y}px)`
              : undefined;

            return (
              <div
                key={i}
                onMouseMove={(e) => handlePaperMouseMove(e, i)}
                onMouseLeave={() => handlePaperMouseLeave(i)}
                className={`absolute z-20 bottom-[10%] left-1/2 transition-all duration-300 ease-in-out 
                  ${
                    paperOpen
                      ? "hover:scale-110"
                      : "transform -translate-x-1/2 translate-y-[10%]"
                  }
                  ${sizeClasses}
                `}
                style={{
                  ...(paperOpen ? { transform: transformStyle } : {}),
                  ...(typeof item === "string"
                    ? {
                        backgroundImage: `url(${item})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "10px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                      }
                    : {
                        backgroundColor: i === 0 ? paper1 : i === 1 ? paper2 : paper3,
                        borderRadius: "10px",
                      }),
                }}
              >
                {typeof item !== "string" && item}
              </div>
            );
          })}

          {/* Folder Front - Flaps */}
          <div
            className="absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out"
            style={{
              backgroundColor: color,
              borderRadius: "5px 10px 10px 10px",
              transform: open ? "skew(15deg) scaleY(0.6)" : "none",
            }}
          ></div>

          <div
            className="absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out"
            style={{
              backgroundColor: color,
              borderRadius: "5px 10px 10px 10px",
              transform: open ? "skew(-15deg) scaleY(0.6)" : "none",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Folder;