import { useEffect } from "react";

export function useOutsideClick<T extends HTMLElement>(
  ref: React.RefObject<T | null>,             // <-- allow null
  handler: (ev: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    function listener(ev: MouseEvent | TouchEvent) {
      const el = ref.current;
      if (!el) return;                         // guard null
      if (el.contains(ev.target as Node)) return;
      handler(ev);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
