"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const letterIRef = useRef<HTMLSpanElement>(null);
  const dotTargetRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  // Orchestrate the intro branding physics animation:
  // Measures exact coordinates of letter 'I' and the top-right resting target.
  // Carefully choreographed for ~4.5 seconds to match the 5-second total intro duration requested.
  useEffect(() => {
    if (!dotRef.current || !letterIRef.current || !dotTargetRef.current) return;

    let ctx: gsap.Context | null = null;
    let hasStarted = false;

    const runPhysics = () => {
      if (hasStarted) return;
      if (!letterIRef.current || !dotTargetRef.current || !dotRef.current || !containerRef.current) return;
      hasStarted = true;

      const iRect = letterIRef.current.getBoundingClientRect();
      const targetRect = dotTargetRef.current.getBoundingClientRect();

      // Precise relative offset from top-right target center to letter 'I' top center
      const targetCenterX = targetRect.left + targetRect.width / 2;
      const targetCenterY = targetRect.top + targetRect.height / 2;
      const iCenterX = iRect.left + iRect.width / 2;
      const iTopY = iRect.top;

      let deltaX = iCenterX - targetCenterX;
      let deltaY = iTopY - targetCenterY;
      const letterH = iRect.height > 20 ? iRect.height : 60;

      // Safe fallbacks if bounding rect isn't measured yet
      if (Math.abs(deltaX) < 1 || isNaN(deltaX)) {
        deltaX = -75;
        deltaY = 6;
      }

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 0.1 });

        // Step 1: Drop from sky above letter 'I' (0.52s drop)
        tl.fromTo(
          dotRef.current,
          {
            x: deltaX,
            y: deltaY - letterH * 2.6,
            scaleX: 0.7,
            scaleY: 1.3,
            opacity: 0,
          },
          {
            x: deltaX,
            y: deltaY,
            scaleX: 1,
            scaleY: 1,
            opacity: 1,
            duration: 0.52,
            ease: "power2.in",
          }
        )
          // Step 2: Squash upon impact on top of letter 'I'
          .to(dotRef.current, {
            scaleX: 1.5,
            scaleY: 0.55,
            duration: 0.08,
            ease: "power1.out",
          })
          // Letter 'I' reacts to the physical bounce
          .to(
            letterIRef.current,
            {
              y: letterH * 0.1,
              duration: 0.08,
              yoyo: true,
              repeat: 1,
              ease: "power1.inOut",
            },
            "<"
          )
          // Step 3: Bounce high up and arc towards top-right target (0.55s arc)
          .to(dotRef.current, {
            x: deltaX * 0.38,
            y: deltaY - letterH * 0.95,
            scaleX: 0.85,
            scaleY: 1.15,
            duration: 0.55,
            ease: "power1.out",
          })
          // Step 4: Fall into final top-right resting target (0.45s)
          .to(dotRef.current, {
            x: 0,
            y: 0,
            scaleX: 1.25,
            scaleY: 0.75,
            duration: 0.45,
            ease: "power2.in",
          })
          // Step 5: Soft double bounce settling into resting spot (~0.3s)
          .to(dotRef.current, {
            y: -letterH * 0.16,
            scaleX: 0.95,
            scaleY: 1.05,
            duration: 0.15,
            ease: "power1.out",
          })
          .to(dotRef.current, {
            y: 0,
            scaleX: 1,
            scaleY: 1,
            duration: 0.15,
            ease: "power1.inOut",
          });
      }, containerRef);
    };

    // Ensure layout and fonts are rendered before measuring
    const init = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(runPhysics);
      });
    };

    if (typeof document !== "undefined" && "fonts" in document && document.fonts.status !== "loaded") {
      document.fonts.ready.then(init).catch(init);
      const timer = setTimeout(init, 200);
      return () => {
        clearTimeout(timer);
        if (ctx) ctx.revert();
      };
    } else {
      const timer = setTimeout(init, 80);
      return () => {
        clearTimeout(timer);
        if (ctx) ctx.revert();
      };
    }
  }, []);

  // Progress counter timed for exactly ~2.5 seconds total intro experience
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // 200ms pause at 100%, then slide UP immediately at ~2.4s - 2.5s
          setTimeout(() => {
            setIsLoaded(true);
            if (typeof window !== "undefined") {
              window.dispatchEvent(new Event("intro-complete"));
            }
            if (onComplete) onComplete();
          }, 200);
          return 100;
        }
        // Increment smoothly across ~75 ticks (75 * 28ms = ~2100ms)
        const step = Math.random() > 0.35 ? 1 : 2;
        return Math.min(prev + step, 100);
      });
    }, 28);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Completely unmount from DOM after upward slide transition ends
  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setIsDismissed(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  if (isDismissed) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col justify-between bg-[#f8f8f5] text-[#090d15] p-6 sm:p-14 overflow-hidden select-none transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isLoaded ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
      style={{ willChange: "transform" }}
    >
      <div />

      {/* Centerpiece: PORTFOLIO with Coral Dot */}
      <div className="flex flex-col items-center justify-center my-auto relative text-center w-full px-2">
        <div ref={containerRef} className="relative inline-block max-w-full">
          {/* Main Bold Title with isolated letters for physics — increased font size on mobile */}
          <h1 className="text-[16vw] xs:text-7xl sm:text-8xl md:text-9xl font-black tracking-tight sm:tracking-tighter uppercase font-heading text-[#090d15] leading-none select-none whitespace-nowrap">
            <span>P</span>
            <span>O</span>
            <span>R</span>
            <span>T</span>
            <span>F</span>
            <span>O</span>
            <span>L</span>
            <span ref={letterIRef} className="inline-block origin-bottom will-change-transform">
              I
            </span>
            <span>O</span>
          </h1>

          {/* Coral Dot Target Container at top-right — proportionately scaled */}
          <div
            ref={dotTargetRef}
            className="absolute -top-2.5 -right-3.5 xs:-top-3 xs:-right-4 sm:-top-4 sm:-right-6 w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 flex items-center justify-center pointer-events-none"
          >
            <span
              ref={dotRef}
              className="w-full h-full rounded-full bg-[#fa4d56] will-change-transform shadow-sm"
              style={{ opacity: 0 }}
            />
          </div>
        </div>

        <p className="mt-4 sm:mt-6 text-[11px] xs:text-xs sm:text-sm font-mono tracking-wider sm:tracking-widest text-[#7c8ba1] uppercase whitespace-nowrap">
          Website Developer &bull; Frontend &bull; Backend
        </p>
      </div>

      {/* Bottom Progress Ledger */}
      <div className="flex items-end justify-between border-t border-[#e2e2da] pt-3 sm:pt-4 font-mono text-xs text-[#7c8ba1]">
        <div className="space-y-1">
          <div className="text-[9px] sm:text-[10px] tracking-widest text-[#7c8ba1] uppercase font-semibold">
            LOADING SYSTEM
          </div>
          <div className="w-44 xs:w-52 sm:w-72 h-1.5 sm:h-1 bg-[#e2e2da] relative overflow-hidden rounded-full">
            <div
              className="h-full bg-[#fa4d56] transition-all duration-75 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="text-right">
          <span className="text-xl xs:text-2xl sm:text-2xl font-bold font-heading text-[#090d15]">
            {progress.toString().padStart(3, "0")}%
          </span>
        </div>
      </div>
    </div>
  );
}
