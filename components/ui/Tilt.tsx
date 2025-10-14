"use client";
import { useRef } from "react";

type Props = React.PropsWithChildren<{ max?: number; glare?: boolean; className?: string }>;

export default function Tilt({ children, max = 12, glare = false, className = "" }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    function onMove(e: React.MouseEvent) {
        const el = ref.current!;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const rx = (py - 0.5) * max * -1;
        const ry = (px - 0.5) * max;
        el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
        if (glare) {
            (el.style as any).setProperty("--glx", `${px * 100}%`);
            (el.style as any).setProperty("--gly", `${py * 100}%`);
        }
    }
    function reset() {
        const el = ref.current!;
        el.style.transform = "";
    }

    return (
        <div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={reset}
            className={`will-change-transform ${glare ? "relative after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[radial-gradient(200px_200px_at_var(--glx,50%)_var(--gly,50%),rgba(255,255,255,.25),transparent_60%)]" : ""} ${className}`}
        >
            {children}
        </div>
    );
}
