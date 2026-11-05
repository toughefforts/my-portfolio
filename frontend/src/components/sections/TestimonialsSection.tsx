"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import RevealAnimation from "@/components/animations/RevealAnimation";
import { Star, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Testimonials Section Component.
 *
 * Client endorsements & social proof carousel featuring:
 * - 3D card tilt and scaling transitions with active central focus.
 * - Star rating badges, client avatars, and verification pills.
 * - Interactive pagination dots and carousel navigation controls.
 */
export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to middle card (Priya Verma)

  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const centerCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const isDesktop = window.innerWidth >= 768;

      if (isDesktop && leftCardRef.current && centerCardRef.current && rightCardRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        });

        // Fast & punchy: center card appears quickly
        tl.fromTo(
          centerCardRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.2, ease: "power2.out" }
        );

        // Left card fast-shoots outward from center to left column
        tl.fromTo(
          leftCardRef.current,
          { xPercent: 105, opacity: 0 },
          { xPercent: 0, opacity: 1, duration: 0.32, ease: "power3.out" },
          "-=0.1"
        );

        // Right card fast-shoots outward from center to right column simultaneously
        tl.fromTo(
          rightCardRef.current,
          { xPercent: -105, opacity: 0 },
          { xPercent: 0, opacity: 1, duration: 0.32, ease: "power3.out" },
          "<"
        );
      } else if (!isDesktop && cardsContainerRef.current) {
        const cards = [leftCardRef.current, centerCardRef.current, rightCardRef.current].filter(Boolean);
        gsap.fromTo(
          cards,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.25,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const touchStartXRef = useRef<number | null>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartXRef.current = null;
  };

  /**
   * Render distinct company logos for each testimonial
   */
  const renderCompanyLogo = (index: number, isActive: boolean) => {
    if (index === 0) {
      // TechStart — Startup Rocket / Tech Launch Emblem
      return (
        <div
          className={`w-9.5 h-9.5 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
            isActive
              ? "bg-gradient-to-br from-[#ff5e3a] via-[#fa4d56] to-[#d62838] text-white shadow-md shadow-rose-950/40"
              : "bg-[#f1f1eb] text-[#fa4d56] border border-[#e2e2da]"
          }`}
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.5s3.5 2 4.5 5.5c.7 2.4.2 5-1.5 7l2 4.5-3.5-1.5-1.5 3.5-1.5-3.5-3.5 1.5 2-4.5c-1.7-2-2.2-4.6-1.5-7C8.5 4.5 12 2.5 12 2.5z M12 7.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
          </svg>
        </div>
      );
    }

    if (index === 1) {
      // DesignHub — Stylized Creative Quill / Feather (Matching screenshot)
      return (
        <div
          className={`w-9.5 h-9.5 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
            isActive
              ? "bg-gradient-to-br from-[#ff4d5e] to-[#e62b3a] text-white shadow-md shadow-rose-950/40"
              : "bg-[#f1f1eb] text-[#fa4d56] border border-[#e2e2da]"
          }`}
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
              fill="currentColor"
              fillOpacity="0.3"
            />
            <line x1="16" y1="8" x2="2" y2="22" stroke="currentColor" strokeWidth="2.5" />
            <line x1="17.5" y1="15" x2="9" y2="15" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      );
    }

    // InnovateTech — AI Neural Core / Microchip Circuit
    return (
      <div
        className={`w-9.5 h-9.5 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
          isActive
            ? "bg-gradient-to-br from-[#e02838] via-[#b91c1c] to-[#7f1d1d] text-white shadow-md shadow-rose-950/40"
            : "bg-[#f1f1eb] text-[#fa4d56] border border-[#e2e2da]"
        }`}
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="4" width="16" height="16" rx="3" fill="currentColor" fillOpacity="0.25" />
          <rect x="8" y="8" width="8" height="8" rx="1.5" fill="currentColor" />
          <line x1="9" y1="1" x2="9" y2="4" stroke="currentColor" strokeWidth="2" />
          <line x1="15" y1="1" x2="15" y2="4" stroke="currentColor" strokeWidth="2" />
          <line x1="9" y1="20" x2="9" y2="23" stroke="currentColor" strokeWidth="2" />
          <line x1="15" y1="20" x2="15" y2="23" stroke="currentColor" strokeWidth="2" />
          <line x1="1" y1="9" x2="4" y2="9" stroke="currentColor" strokeWidth="2" />
          <line x1="1" y1="15" x2="4" y2="15" stroke="currentColor" strokeWidth="2" />
          <line x1="20" y1="9" x2="23" y2="9" stroke="currentColor" strokeWidth="2" />
          <line x1="20" y1="15" x2="23" y2="15" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-12 sm:py-14 md:py-16 overflow-hidden border-b border-[#e2e2da] bg-gradient-to-b from-[#fbfbf9] via-[#f8f8f5] to-[#f4f4ee]"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================
            HEADER AREA
           ======================================================== */}
        <div className="relative mb-8 sm:mb-10">
          {/* Subtle Neutral Gray Quote Watermark on Top Left */}
          <div className="absolute -top-4 left-0 sm:left-4 lg:left-8 pointer-events-none select-none text-[#e2e2da]">
            <svg
              className="w-16 h-16 sm:w-20 sm:h-20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Curved Dotted Line connecting quote mark to title */}
          <div className="hidden md:block absolute top-1 left-24 lg:left-32 pointer-events-none select-none text-[#cbd5e1]">
            <svg
              className="w-32 lg:w-40 h-12"
              viewBox="0 0 160 45"
              fill="none"
            >
              <path
                d="M 8 32 C 45 8, 105 8, 150 26"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Main Title Center Block */}
          <div className="text-center pt-2 sm:pt-3">
            {/* Eyebrow Tag: — TESTIMONIALS */}
            <RevealAnimation>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-5 h-[2px] bg-[#fa4d56] inline-block rounded-full" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#7c8ba1]">
                  TESTIMONIALS
                </span>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.04}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-heading tracking-tight leading-none text-[#090d15]">
                WHAT PEOPLE{" "}
                <span className="text-[#fa4d56] tracking-tight">SAY</span>
              </h2>
            </RevealAnimation>

            {/* Sub-description with font-serif italic */}
            <RevealAnimation delay={0.08}>
              <p className="text-xs sm:text-[13px] text-[#64748b] text-center max-w-lg mx-auto mt-2 font-serif italic leading-relaxed">
                Here&apos;s what clients, collaborators, and teammates have to say about working with me.
              </p>
            </RevealAnimation>
          </div>
        </div>

        {/* ========================================================
            TESTIMONIALS CARDS (INTERACTIVE 3D EQUAL OVERLAP STACK)
           ======================================================== */}
        <div
          className="relative flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="group absolute left-0 sm:-left-3.5 lg:-left-5 z-30 w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-white/95 hover:bg-[#fa4d56] text-[#090d15] hover:text-white border border-[#e2e2da] hover:border-[#fa4d56] shadow-[0_8px_24px_rgba(9,13,21,0.08)] hover:shadow-[0_12px_28px_rgba(250,77,86,0.3)] hover:ring-4 hover:ring-[#fa4d56]/20 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 active:scale-90 backdrop-blur-sm"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.5] group-hover:-translate-x-0.5 transition-transform duration-300" />
          </button>

          {/* 3-Card Grid Row (Desktop: 3 equal cards, Mobile: Active card only with swipe) */}
          <div
            ref={cardsContainerRef}
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6 lg:gap-7 px-10.5 xs:px-11 sm:px-6"
          >
            {testimonials.map((item, index) => {
              const isActive = activeIndex === index;
              const isLeft = index === 0;
              const isCenter = index === 1;
              const cardRef = isLeft ? leftCardRef : isCenter ? centerCardRef : rightCardRef;

              return (
                <div
                  key={item.id}
                  ref={cardRef}
                  className={`relative h-full pt-3 ${
                    isActive ? "z-20 block" : isCenter ? "z-10 hidden md:block" : "z-0 hidden md:block"
                  }`}
                >
                  <div
                    onClick={() => setActiveIndex(index)}
                    className={`relative rounded-[26px] p-5 xs:p-6 sm:p-7 flex flex-col justify-between h-full cursor-pointer select-none transition-all duration-150 ease-out active:scale-[0.985] ${
                      isActive
                        ? "bg-gradient-to-br from-[#181c28] via-[#121520] to-[#141724] border border-[#282f44] shadow-[0_22px_50px_-10px_rgba(0,0,0,0.7),0_0_40px_rgba(250,77,86,0.22)] ring-1 ring-[#fa4d56]/35 scale-[1.01] sm:scale-[1.02]"
                        : "bg-white border border-[#e2e2da] shadow-xs hover:border-[#090d15]/30 hover:shadow-md hover:-translate-y-0.5 opacity-90 hover:opacity-100"
                    }`}
                  >
                    {/* Dark Card Ambient Redness & Flowing 3D Wave Ribbons (Exact match to screenshot) */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-[26px] overflow-hidden pointer-events-none">
                        {/* Right side crimson ambient glow pool */}
                        <div className="absolute top-1/4 -right-10 w-44 h-56 bg-radial from-[#fa4d56]/40 via-[#e02838]/20 to-transparent blur-2xl" />

                        {/* Bottom-left corner red ambient glow */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-radial from-[#fa4d56]/30 via-[#e02838]/15 to-transparent blur-2xl" />

                        {/* Right edge flowing 3D ribbon wave lines */}
                        <svg
                          className="absolute right-0 top-20 w-48 h-44 pointer-events-none opacity-85"
                          viewBox="0 0 180 160"
                          fill="none"
                        >
                          <defs>
                            <linearGradient id={`waveGrad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#fa4d56" stopOpacity="0" />
                              <stop offset="40%" stopColor="#fa4d56" stopOpacity="0.4" />
                              <stop offset="80%" stopColor="#fa4d56" stopOpacity="0.85" />
                              <stop offset="100%" stopColor="#e02838" stopOpacity="0.95" />
                            </linearGradient>
                          </defs>
                          <path d="M0 80 C50 50, 110 135, 180 70" stroke={`url(#waveGrad-${index})`} strokeWidth="1.8" />
                          <path d="M10 95 C60 65, 120 145, 180 85" stroke={`url(#waveGrad-${index})`} strokeWidth="1.4" />
                          <path d="M20 110 C70 80, 130 155, 180 100" stroke={`url(#waveGrad-${index})`} strokeWidth="1.2" />
                          <path d="M30 125 C80 95, 140 165, 180 115" stroke={`url(#waveGrad-${index})`} strokeWidth="1.0" />
                          <path d="M40 140 C90 110, 150 175, 180 130" stroke={`url(#waveGrad-${index})`} strokeWidth="0.8" />
                        </svg>

                        {/* Bottom-left corner decorative wave petal */}
                        <svg
                          className="absolute bottom-0 left-0 w-28 h-28 pointer-events-none opacity-75"
                          viewBox="0 0 120 120"
                          fill="none"
                        >
                          <defs>
                            <linearGradient id={`cornerPetal-${index}`} x1="0%" y1="100%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#e02838" stopOpacity="0.6" />
                              <stop offset="60%" stopColor="#fa4d56" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#fa4d56" stopOpacity="0.8" />
                            </linearGradient>
                          </defs>
                          <path d="M0 120 C25 70, 70 25, 120 0 C70 60, 60 70, 0 120 Z" fill={`url(#cornerPetal-${index})`} />
                          <path d="M0 95 C30 60, 60 30, 95 0" stroke="#fa4d56" strokeWidth="1.4" strokeOpacity="0.45" />
                          <path d="M0 70 C35 45, 45 35, 70 0" stroke="#fa4d56" strokeWidth="1.0" strokeOpacity="0.35" />
                        </svg>
                      </div>
                    )}

                    {/* Circular "Featured Client" Badge with Crown (Only on Active Card) */}
                    {isActive && (
                      <div className="absolute -top-4 -right-3 sm:-top-5 sm:-right-3.5 z-30 pointer-events-none select-none">
                        <div className="w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-full bg-gradient-to-br from-[#ff5466] via-[#fa4d56] to-[#e02838] border-[3.5px] border-white shadow-[0_8px_22px_rgba(230,38,56,0.45)] flex flex-col items-center justify-center text-white">
                          {/* Crown Icon */}
                          <svg className="w-4 h-4 fill-white mb-0.5" viewBox="0 0 24 24">
                            <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                          </svg>
                          <span className="text-[9.5px] sm:text-[10px] font-bold leading-[1.08] text-center font-sans tracking-tight">
                            Featured<br />Client
                          </span>
                        </div>
                      </div>
                    )}

                    <div>
                      {/* Top Row: Author Avatar + Name & Role */}
                      <div className="relative z-10 flex items-center gap-3.5 mb-4">
                        <div
                          className={`relative w-14 h-14 sm:w-15 sm:h-15 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md ${
                            isActive
                              ? "ring-2 ring-[#fa4d56]/50 bg-rose-100"
                              : "ring-1 ring-black/5 bg-[#f1f1eb]"
                          }`}
                        >
                          <Image
                            src={item.avatar}
                            alt={item.name}
                            fill
                            sizes="64px"
                            priority
                            className="object-cover object-center"
                          />
                        </div>
                        <div>
                          <h3
                            className={`font-heading font-black text-base sm:text-lg uppercase tracking-tight leading-tight ${
                              isActive ? "text-white" : "text-[#090d15]"
                            }`}
                          >
                            {item.name}
                          </h3>
                          <p
                            className={`text-xs sm:text-[13px] font-sans mt-0.5 font-medium ${
                              isActive ? "text-[#8a99ad]" : "text-[#64748b]"
                            }`}
                          >
                            {item.role}
                          </p>
                        </div>
                      </div>

                      {/* Rating Stars + 5.0 */}
                      <div className="relative z-10 flex items-center gap-2 mb-3.5">
                        <div className="flex items-center gap-1">
                          {[...Array(item.rating || 5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]"
                            />
                          ))}
                        </div>
                        <span
                          className={`font-mono text-xs font-bold ml-1 ${
                            isActive ? "text-slate-300" : "text-[#090d15]"
                          }`}
                        >
                          5.0
                        </span>
                      </div>

                      {/* Testimonial Quote */}
                      <div className="relative z-10 mb-5">
                        <p
                          className={`text-[13.5px] sm:text-[14px] italic leading-relaxed font-sans ${
                            isActive ? "text-slate-200" : "text-[#334155]"
                          }`}
                        >
                          &ldquo;{item.quote}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Bottom Row: Company Info & Verified Badge */}
                    <div
                      className={`relative z-10 pt-3.5 border-t flex items-center justify-between ${
                        isActive ? "border-white/10" : "border-[#e2e2da]"
                      }`}
                    >
                      {/* Distinct Company Logo + Name & Type */}
                      <div className="flex items-center gap-2.5">
                        {renderCompanyLogo(index, isActive)}
                        <div>
                          <div
                            className={`font-heading font-black text-sm tracking-tight leading-none ${
                              isActive ? "text-white" : "text-[#090d15]"
                            }`}
                          >
                            {item.companyName || "Company"}
                          </div>
                          <div
                            className={`text-[10.5px] font-sans mt-0.5 ${
                              isActive ? "text-[#8a99ad]" : "text-[#7c8ba1]"
                            }`}
                          >
                            {item.companyType || "Client Organization"}
                          </div>
                        </div>
                      </div>

                      {/* Verified Pill Badge */}
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${
                          isActive
                            ? "bg-[#241720] border border-[#fa4d56]/40 text-slate-200"
                            : "bg-[#f8f8f5] border border-[#e2e2da] text-[#475569]"
                        }`}
                      >
                        <span className="w-4 h-4 rounded-full bg-[#fa4d56] flex items-center justify-center text-white shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="group absolute right-0 sm:-right-3.5 lg:-right-5 z-30 w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-white/95 hover:bg-[#fa4d56] text-[#090d15] hover:text-white border border-[#e2e2da] hover:border-[#fa4d56] shadow-[0_8px_24px_rgba(9,13,21,0.08)] hover:shadow-[0_12px_28px_rgba(250,77,86,0.3)] hover:ring-4 hover:ring-[#fa4d56]/20 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 active:scale-90 backdrop-blur-sm"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 transition-transform duration-300" />
          </button>
        </div>

        {/* ========================================================
            MODERN PILL PAGINATION INDICATORS
           ======================================================== */}
        <div className="flex items-center justify-center gap-2 mt-7 sm:mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full cursor-pointer transition-all duration-150 ease-out ${
                activeIndex === i
                  ? "w-7 h-2 bg-[#fa4d56] shadow-sm"
                  : "w-2 h-2 bg-[#d4d4cb] hover:bg-[#94a3b8]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
