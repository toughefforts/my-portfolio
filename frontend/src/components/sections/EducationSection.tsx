"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { educationSlides } from "@/data/education";
import RevealAnimation from "@/components/animations/RevealAnimation";
import {
  Calendar,
  Layers,
  Link2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EducationSection() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isLaptopOpen, setIsLaptopOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAutoOpenedRef = useRef(false);

  const slide = educationSlides[activeSlideIndex];

  // ScrollTrigger: automatically lift and open the laptop when scrolling into view
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setIsLaptopOpen(true);
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 72%",
        onEnter: () => {
          if (!hasAutoOpenedRef.current) {
            hasAutoOpenedRef.current = true;
            setIsLaptopOpen(true);
          }
        },
        onLeaveBack: () => {
          // Reset when scrolling back above so user can experience the open lift again
          hasAutoOpenedRef.current = false;
          setIsLaptopOpen(false);
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const handlePrev = () => {
    setActiveSlideIndex((prev) =>
      prev === 0 ? educationSlides.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveSlideIndex((prev) =>
      prev === educationSlides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-12 sm:py-16 border-b border-[#e2e2da] bg-[#f8f8f5] relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            TOP ROW (3 COLUMNS):
            Left: Headline, Narrative (~22%)
            Center: Balanced Realistic 3D Laptop Mockup (~56%)
            Right: Active Slide Metadata & Specs (~22%)
           ======================================================== */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 xl:gap-6">
          
          {/* ========================================================
              LEFT COLUMN (w-full lg:w-[23%] xl:w-[22%]): Narrative & Heading
             ======================================================== */}
          <div className="w-full lg:w-[23%] xl:w-[22%] shrink-0 lg:self-start lg:pt-6 xl:pt-8 flex flex-col">
            
            {/* Category / Eyebrow */}
            <RevealAnimation>
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#7c8ba1] mb-3">
                <span className="w-8 h-[2px] bg-[#fa4d56]" />
                <span>EDUCATION</span>
              </div>
            </RevealAnimation>

            {/* Main Title */}
            <RevealAnimation delay={0.05}>
              <h2 className="text-[36px] sm:text-[42px] lg:text-[34px] xl:text-[42px] font-black uppercase font-heading tracking-tight text-[#090d15] leading-[0.92] mb-4">
                <span>MY</span>
                <br />
                <span>EDUCATION</span>
                <br />
                <span className="text-[#fa4d56]">JOURNEY.</span>
              </h2>
            </RevealAnimation>

            {/* Narrative Paragraph */}
            <RevealAnimation delay={0.08}>
              <p className="font-serif italic text-[#1e293b] text-xs sm:text-[13px] leading-relaxed max-w-[290px]">
                A journey of continuous learning, curiosity and self-improvement. Each qualification has added a new perspective and helped me build the person I am today.
              </p>
            </RevealAnimation>

          </div>

          {/* ========================================================
              CENTER COLUMN (w-full lg:w-[54%] xl:w-[56%]):
              Interactive 3D Opening / Closing Laptop on Stone Pedestal
             ======================================================== */}
          <div className="w-full lg:w-[54%] xl:w-[56%] flex flex-col items-center justify-center py-2 relative">
            
            {/* Outer Laptop Container with 3D Perspective */}
            <div
              className="relative w-full max-w-[740px] sm:max-w-[780px] xl:max-w-[820px] aspect-[1526/1030] flex items-center justify-center"
              style={{ perspective: "1800px" }}
            >
              
              {/* Layer 1: Static Laptop Base on Stone Pedestal (Does not rotate) */}
              <Image
                src="/images/education/laptop-base.png"
                alt="Laptop Base on Stone Pedestal"
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 820px"
                className="object-contain pointer-events-none z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.22)]"
              />

              {/* Layer 2: 3D Rotating Laptop Lid (Lifts open smoothly on scroll) */}
              <div
                className="absolute inset-0 z-20 pointer-events-none will-change-transform"
                style={{
                  transformOrigin: "50% 74.2%",
                  transform: isLaptopOpen ? "rotateX(0deg)" : "rotateX(-90deg)",
                  transition: "transform 1.1s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Screen Display Area — illuminates as laptop lifts open on scroll */}
                <div
                  className="absolute top-[9.6%] left-[calc(14.7%-2.5px)] w-[calc(70.6%+5px)] h-[64.4%] overflow-hidden z-0 rounded-t-[3px]"
                  style={{
                    backgroundColor: "#0a0a0a",
                  }}
                >
                  <div
                    style={{
                      opacity: isLaptopOpen ? 1 : 0,
                      transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
                      width: "100%",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={slide.image || "/images/education/bca-screen.jpg"}
                      alt={slide.title}
                      fill
                      priority
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 820px"
                      className="object-fill w-full h-full transition-all duration-500"
                    />
                    {/* Realistic Glossy Glass Glare Overlay */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.12]" />
                  </div>
                </div>

                {/* Screen Bezel with Web Camera */}
                <Image
                  src="/images/education/laptop-lid.png"
                  alt="Laptop Screen Bezel"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 820px"
                  className="object-contain pointer-events-none z-10"
                />
              </div>

              {/* Floating Interactive Chevron Buttons (Positioned close to laptop screen) */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Qualification"
                className="group absolute left-1 sm:left-2 md:left-3 top-[42%] -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/95 hover:bg-[#fa4d56] text-[#090d15] hover:text-white border border-[#e2e2da] hover:border-[#fa4d56] shadow-[0_8px_24px_rgba(9,13,21,0.08)] hover:shadow-[0_12px_28px_rgba(250,77,86,0.3)] hover:ring-4 hover:ring-[#fa4d56]/20 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 active:scale-90 backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.5] group-hover:-translate-x-0.5 transition-transform duration-300" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Qualification"
                className="group absolute right-1 sm:right-2 md:right-3 top-[42%] -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/95 hover:bg-[#fa4d56] text-[#090d15] hover:text-white border border-[#e2e2da] hover:border-[#fa4d56] shadow-[0_8px_24px_rgba(9,13,21,0.08)] hover:shadow-[0_12px_28px_rgba(250,77,86,0.3)] hover:ring-4 hover:ring-[#fa4d56]/20 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 active:scale-90 backdrop-blur-sm"
              >
                <ChevronRight className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.5] group-hover:translate-x-0.5 transition-transform duration-300" />
              </button>

            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN (w-full lg:w-[23%] xl:w-[22%]): Active Specs
             ======================================================== */}
          <div className="w-full lg:w-[23%] xl:w-[22%] shrink-0 flex flex-col justify-center">
            
            {/* Step Counter */}
            <RevealAnimation>
              <div className="font-mono text-sm font-bold text-[#fa4d56] mb-1">
                {slide.stepNumber} / {slide.totalSteps}
              </div>
            </RevealAnimation>

            {/* Active Degree Title */}
            <RevealAnimation delay={0.05}>
              <h3 className="text-[20px] sm:text-[22px] font-black font-heading uppercase text-[#090d15] tracking-tight leading-tight mb-1">
                {slide.title}
              </h3>
              <p className="font-mono text-xs uppercase tracking-wider text-[#64748b] font-semibold mb-2.5">
                {slide.shortInstitution}
              </p>
            </RevealAnimation>

            {/* Description Paragraph under Title (Smaller & clean font) */}
            <RevealAnimation delay={0.08}>
              <p className="font-sans text-[11.5px] sm:text-[12px] text-[#64748b] leading-relaxed mb-4">
                {slide.description}
              </p>
            </RevealAnimation>

            {/* 3 Info Items with Red Outlined Icons */}
            <RevealAnimation delay={0.1}>
              <div className="space-y-3 mb-5 text-xs">
                
                {/* Duration */}
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-[#fee2e2] text-[#fa4d56] flex items-center justify-center shrink-0 mt-0.5">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block font-mono font-bold text-[#090d15] uppercase text-[10px] tracking-wider">
                      DURATION
                    </span>
                    <span className="font-mono text-[11.5px] text-[#64748b] block mt-0.5">
                      {slide.duration}
                    </span>
                  </div>
                </div>

                {/* Core Areas */}
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-[#fee2e2] text-[#fa4d56] flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block font-mono font-bold text-[#090d15] uppercase text-[10px] tracking-wider">
                      CORE AREAS
                    </span>
                    <span className="font-mono text-[11.5px] text-[#64748b] leading-tight block mt-0.5">
                      {slide.coreAreas}
                    </span>
                  </div>
                </div>

                {/* Live Preview */}
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-[#fee2e2] text-[#fa4d56] flex items-center justify-center shrink-0 mt-0.5">
                    <Link2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block font-mono font-bold text-[#090d15] uppercase text-[10px] tracking-wider">
                      LIVE PREVIEW
                    </span>
                    <a
                      href={slide.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11.5px] text-[#fa4d56] hover:underline inline-flex items-center gap-1 font-semibold mt-0.5"
                    >
                      <span>{slide.livePreview}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>
            </RevealAnimation>

            {/* View Details Action Button */}
            <RevealAnimation delay={0.12}>
              <div>
                <Link
                  href={`/education/${slide.id}`}
                  className="group inline-flex items-center gap-2 bg-[#090d15] hover:bg-[#fa4d56] text-white font-mono text-xs uppercase tracking-wider font-bold px-5 py-2.5 rounded-full shadow-[0_4px_16px_rgba(9,13,21,0.15)] hover:shadow-[0_8px_24px_rgba(250,77,86,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </RevealAnimation>

          </div>

        </div>

      </div>
    </section>
  );
}
