"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const letterIRef = useRef<HTMLSpanElement>(null);
  const dotTargetRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  // Orchestrate the intro branding animation:
  // Dynamically measures the screen coordinates of the letter 'I' relative to the dot's
  // final top-right target position, creating a physics-based drop, squash on impact,
  // upward recoil arc, and final landing settle.
  useEffect(() => {
    if (dotRef.current && letterIRef.current && dotTargetRef.current) {
      const iRect = letterIRef.current.getBoundingClientRect();
      const targetRect = dotTargetRef.current.getBoundingClientRect();

      // Compute exact relative offset from resting spot to the top vertex of letter 'I'
      const deltaX = iRect.left + iRect.width / 2 - (targetRect.left + targetRect.width / 2);
      const deltaY = iRect.top - targetRect.top - targetRect.height * 0.2;

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ delay: 0.15 });


        // Step 1: Drop rapidly from sky above letter 'I'
        tl.fromTo(
          dotRef.current,
          {
            x: deltaX,
            y: deltaY - 280,
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
            duration: 0.45,
            ease: "power2.in",
          }
        )
          // Step 2: Squash on impact on top of letter 'I'
          .to(dotRef.current, {
            scaleX: 1.45,
            scaleY: 0.55,
            duration: 0.08,
            ease: "power1.out",
          })
          // Letter 'I' reacts to the physical bounce
          .to(
            letterIRef.current,
            {
              y: 7,
              duration: 0.08,
              yoyo: true,
              repeat: 1,
              ease: "power1.inOut",
            },
            "<"
          )
          // Step 3: Bounce up and arc towards top-right resting position
          .to(dotRef.current, {
            x: deltaX * 0.4,
            y: deltaY - 90,
            scaleX: 0.85,
            scaleY: 1.15,
            duration: 0.38,
            ease: "power1.out",
          })
          // Step 4: Fall into final top-right resting spot
          .to(dotRef.current, {
            x: 0,
            y: 0,
            scaleX: 1.2,
            scaleY: 0.8,
            duration: 0.32,
            ease: "power2.in",
          })
          // Step 5: Soft bounce settling
          .to(dotRef.current, {
            y: -10,
            scaleX: 0.95,
            scaleY: 1.05,
            duration: 0.16,
            ease: "power1.out",
          })
          .to(dotRef.current, {
            y: 0,
            scaleX: 1,
            scaleY: 1,
            duration: 0.16,
            ease: "power1.inOut",
          });
      }, containerRef);

      return () => ctx.revert();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoaded(true);
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col justify-between bg-[#f8f8f5] text-[#090d15] p-8 sm:p-14 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isLoaded ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      <div />

      {/* Centerpiece: PORTFOLIO with Coral Dot */}
      <div className="flex flex-col items-center justify-center my-auto relative text-center">
        <div ref={containerRef} className="relative inline-block">
          {/* Main Bold Title with isolated letters for physics */}
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter uppercase font-heading text-[#090d15] leading-none select-none">
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

          {/* Coral Dot Target Container at top-right */}
          <div
            ref={dotTargetRef}
            className="absolute -top-3 -right-4 sm:-top-4 sm:-right-6 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center pointer-events-none"
          >
            <span
              ref={dotRef}
              className="w-full h-full rounded-full bg-[#fa4d56] will-change-transform shadow-sm"
            />
          </div>
        </div>

        <p className="mt-6 text-xs sm:text-sm font-mono tracking-widest text-[#7c8ba1] uppercase">
          Website Developer &bull; Frontend &bull; Backend
        </p>
      </div>

      {/* Bottom Progress Ledger */}
      <div className="flex items-end justify-between border-t border-[#e2e2da] pt-4 font-mono text-xs text-[#7c8ba1]">
        <div className="space-y-1">
          <div className="text-[10px] tracking-widest text-[#7c8ba1] uppercase font-semibold">LOADING SYSTEM</div>
          <div className="w-48 sm:w-72 h-1 bg-[#e2e2da] relative overflow-hidden">
            <div
              className="h-full bg-[#fa4d56] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <div className="text-right">
          <span className="text-xl sm:text-2xl font-bold font-heading text-[#090d15]">
            {progress.toString().padStart(3, "0")}%
          </span>
        </div>
      </div>
    </div>
  );
}
