"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let refreshTimeout: ReturnType<typeof setTimeout> | null = null;
const debouncedScrollTriggerRefresh = () => {
  if (refreshTimeout) clearTimeout(refreshTimeout);
  refreshTimeout = setTimeout(() => {
    ScrollTrigger.refresh();
    refreshTimeout = null;
  }, 100);
};

interface RevealAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
}

/**
 * Reusable scroll reveal component that fades and translates child elements into view
 * as they enter the browser viewport using GSAP ScrollTrigger.
 */
export default function RevealAnimation({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  y = 30,
  once = false,
}: RevealAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !ref.current) return;

    const el = ref.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            toggleActions: once ? "play none none none" : "play reverse play reverse",
            once,
          },
        }
      );
    }, ref);

    // Debounced refresh for dynamically loaded content
    debouncedScrollTriggerRefresh();

    return () => {
      ctx.revert();
    };
  }, [delay, duration, y, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

