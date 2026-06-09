"use client";

import { useEffect, useRef } from "react";

export function CustomCursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const pointerFine = window.matchMedia("(pointer: fine)").matches;
  if (!pointerFine) return;
    const onMove = (event: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.transform = `translate3d(${event.clientX - 180}px, ${event.clientY - 180}px, 0)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={ref} aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-[320px] w-[320px] rounded-full bg-[#B7C95A]/12 blur-3xl lg:block" />;
}


