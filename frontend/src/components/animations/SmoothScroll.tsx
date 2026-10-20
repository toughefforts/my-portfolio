"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Global smooth-scroll wrapper utilizing Lenis synchronized with GSAP ScrollTrigger.
 * Automatically bypasses smoothing if the client requests prefers-reduced-motion
 * or if viewing reading-heavy article pages (/blog) for natural, crisp native scrolling.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Only disable smooth scroll on dedicated reading article pages or previews
    const isStandalonePage =
      (pathname?.startsWith("/blog/") && pathname !== "/blog") ||
      pathname?.startsWith("/preview");

    if (isStandalonePage) {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
        if (typeof window !== "undefined") {
          delete (window as unknown as { __lenis?: Lenis }).__lenis;
        }
      }
      return;
    }

    // If Lenis is already active on the homepage, keep it running smoothly
    if (lenisRef.current) {
      return;
    }

    // Respect accessibility preference for reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;
    if (typeof window !== "undefined") {
      (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    }

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);

    return () => {
      if (typeof window !== "undefined") {
        delete (window as unknown as { __lenis?: Lenis }).__lenis;
      }
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [pathname]);

  return <>{children}</>;
}
