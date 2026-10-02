"use client";

import { useState } from "react";
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

export default function EducationSection() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const slide = educationSlides[activeSlideIndex];

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
      id="education"
      className="py-12 sm:py-16 border-b border-[#e2e2da] bg-[#f8f8f5] relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            TOP ROW (3 COLUMNS):
            Left: Headline, Narrative (~22%)
            Center: Balanced Realistic Laptop Mockup (~56%)
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
                <span>EDUCATION</span>
                <span className="w-8 h-[2px] bg-[#fa4d56]" />
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
              <p className="text-[13px] sm:text-[13.5px] text-[#475569] leading-relaxed max-w-[290px]">
                A journey of continuous learning, curiosity and self-improvement. Each qualification has added a new perspective and helped me build the person I am today.
              </p>
            </RevealAnimation>

          </div>

          {/* ========================================================
              CENTER COLUMN (w-full lg:w-[54%] xl:w-[56%]):
              Balanced Realistic Laptop Image Mockup on Stone Pedestal
             ======================================================== */}
          <div className="w-full lg:w-[54%] xl:w-[56%] flex flex-col items-center justify-center py-2 relative">
            
            {/* Outer Laptop Container (Exact 1526/1030 Aspect Ratio to Match Mockup) */}
            <div className="relative w-full max-w-[740px] sm:max-w-[780px] xl:max-w-[820px] aspect-[1526/1030] flex items-center justify-center">
              
              {/* Inner Active Screen Display Area (Width Expanded by additional 1px) */}
              <div className="absolute top-[9.6%] left-[calc(14.7%-2.5px)] w-[calc(70.6%+5px)] h-[64.4%] bg-white overflow-hidden z-0 rounded-t-[3px]">
                <Image
                  src={slide.image || "/images/education/bca-screen.jpg"}
                  alt={slide.title}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 820px"
                  className="object-fill w-full h-full transition-all duration-500"
                />
              </div>

              {/* Realistic Laptop Image on Stone Pedestal (Overlay with transparent display window) */}
              <Image
                src="/images/education/laptop-mockup.png"
                alt="Laptop Mockup on Stone Pedestal"
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 820px"
                className="object-contain pointer-events-none z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.22)]"
              />

              {/* Floating Interactive Chevron Buttons (Positioned close to laptop screen) */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Qualification"
                className="group absolute left-1 sm:left-2 md:left-3 top-[42%] -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/95 hover:bg-[#fa4d56] text-[#090d15] hover:text-white border border-[#e2e2da] hover:border-[#fa4d56] shadow-[0_8px_24px_rgba(9,13,21,0.08)] hover:shadow-[0_12px_28px_rgba(250,77,86,0.3)] hover:ring-4 hover:ring-[#fa4d56]/20 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 active:scale-90 backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.5] group-hover:-translate-x-0.5 transition-transform duration-300" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Qualification"
                className="group absolute right-1 sm:right-2 md:right-3 top-[42%] -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/95 hover:bg-[#fa4d56] text-[#090d15] hover:text-white border border-[#e2e2da] hover:border-[#fa4d56] shadow-[0_8px_24px_rgba(9,13,21,0.08)] hover:shadow-[0_12px_28px_rgba(250,77,86,0.3)] hover:ring-4 hover:ring-[#fa4d56]/20 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 active:scale-90 backdrop-blur-sm"
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

            {/* Description */}
            <RevealAnimation delay={0.08}>
              <p className="text-[12.5px] sm:text-xs text-[#475569] leading-relaxed mb-4">
                {slide.description}
              </p>
            </RevealAnimation>

            {/* 3 Info Items with Red Outlined Icons */}
            <RevealAnimation delay={0.1}>
              <div className="space-y-3.5 mb-5 text-xs">
                
                {/* Duration */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#fee2e2] text-[#fa4d56] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block font-mono font-bold text-[#7c8ba1] uppercase text-[9.5px] tracking-widest">
                      DURATION
                    </span>
                    <span className="font-heading font-black text-[13.5px] sm:text-[14px] text-[#090d15] uppercase tracking-tight mt-0.5 block">
                      {slide.duration}
                    </span>
                  </div>
                </div>

                {/* Core Areas */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#fee2e2] text-[#fa4d56] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block font-mono font-bold text-[#7c8ba1] uppercase text-[9.5px] tracking-widest">
                      CORE AREAS
                    </span>
                    <span className="font-heading font-bold text-[11.5px] sm:text-[12px] text-[#090d15] uppercase tracking-tight leading-snug mt-0.5 block">
                      {slide.coreAreas}
                    </span>
                  </div>
                </div>

                {/* Live Preview */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#fee2e2] text-[#fa4d56] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Link2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block font-mono font-bold text-[#7c8ba1] uppercase text-[9.5px] tracking-widest">
                      LIVE PREVIEW
                    </span>
                    <a
                      href={slide.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono font-bold text-[11px] sm:text-[11.5px] text-[#fa4d56] hover:text-[#090d15] uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors mt-0.5"
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
