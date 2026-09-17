"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import RevealAnimation from "@/components/animations/RevealAnimation";
import CounterAnimation from "@/components/animations/CounterAnimation";
import { ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0); // Default to 01 Web Development

  const stats = [
    { value: 10, suffix: "+", label: "Projects\nDelivered" },
    { value: 5, suffix: "+", label: "Happy\nClients" },
    { value: 100, suffix: "%", label: "Focus on\nQuality" },
  ];

  const avatars = [
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      alt: "Client avatar 1",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      alt: "Client avatar 2",
    },
    {
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      alt: "Client avatar 3",
    },
  ];

  const handleNext = () => {
    setActiveServiceIndex((prev) => (prev + 1) % services.length);
  };

  // Symmetrical curved offsets for service items to align perfectly along the orbital arc
  const serviceOffsets = [
    "lg:ml-[62px]",  // 01 Web Development
    "lg:ml-[19px]",  // 02 UI/UX Design
    "lg:ml-0",       // 03 Landing Page
    "lg:ml-0",       // 04 E-commerce Solutions
    "lg:ml-[19px]",  // 05 API Integration
    "lg:ml-[62px]",  // 06 Responsive Design
  ];

  return (
    <section
      id="services"
      className="py-8 sm:py-10 lg:py-12 bg-[#f8f8f5] border-b border-[#e2e2da] relative overflow-hidden select-none"
    >
      {/* Soft Ambient Radial Glow */}
      <div className="absolute top-1/2 right-[30%] -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-radial from-[#fee2e2]/50 via-[#fee2e2]/15 to-transparent blur-3xl pointer-events-none -z-0" />

      {/* Main Full-Width Section Wrapper */}
      <div className="w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          
          {/* ========================================================
              LEFT COLUMN (~31%): BRANDING, STATS, CTA, AVATARS
             ======================================================== */}
          <div className="w-full lg:w-[32%] xl:w-[31%] shrink-0 pl-4 sm:pl-8 lg:pl-10 xl:pl-14 pr-4 lg:pr-2 flex flex-col justify-center relative z-20">
            <div>
              {/* Category / Eyebrow */}
              <RevealAnimation>
                <div className="flex items-center gap-2 font-mono text-[11px] sm:text-[11.5px] font-bold uppercase tracking-widest text-[#7c8ba1] mb-2">
                  <span>WHAT I DO</span>
                  <span className="w-8 h-[2px] bg-[#fa4d56]" />
                </div>
              </RevealAnimation>

              {/* Main Headline */}
              <RevealAnimation delay={0.05}>
                <h2 className="text-[38px] sm:text-[44px] lg:text-[46px] xl:text-[50px] font-black uppercase font-heading tracking-tight text-[#090d15] leading-[0.9]">
                  <span>SERVICES &amp;</span>
                  <br />
                  <span>
                    CONCEPT<span className="text-[#fa4d56] inline-block font-sans">.</span>
                  </span>
                </h2>
              </RevealAnimation>

              {/* Handwritten Red Cursive Accent */}
              <RevealAnimation delay={0.08}>
                <div className="mt-1 mb-2">
                  <span className="text-[26px] sm:text-[30px] xl:text-[34px] font-script text-[#fa4d56] font-bold -rotate-[2.5deg] inline-block select-none leading-none">
                    Capabilities &bull; Solutions
                  </span>
                </div>
              </RevealAnimation>

              {/* Paragraph Description */}
              <RevealAnimation delay={0.1}>
                <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-[1.5] max-w-[310px] mb-3.5 sm:mb-4">
                  Turning ideas into real digital solutions with clean design, modern technology, and a focus on performance.
                </p>
              </RevealAnimation>

              {/* Coral-Red CTA Button */}
              <RevealAnimation delay={0.12}>
                <Link
                  href="#contact"
                  className="group relative inline-flex items-center gap-2 bg-[#fa4d56] hover:bg-[#e03b44] text-white font-mono text-[11px] sm:text-[11.5px] font-bold tracking-wider uppercase px-5 py-2.5 rounded-xl shadow-[0_6px_20px_rgba(250,77,86,0.3)] hover:shadow-[0_10px_28px_rgba(250,77,86,0.45)] hover:-translate-y-0.5 transition-all mb-3.5 sm:mb-4 overflow-hidden"
                >
                  <span className="relative z-10">LET&apos;S WORK TOGETHER</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5] relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <div className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </RevealAnimation>

              {/* Stats Row (10+ Projects, 5+ Happy Clients, 100% Quality) */}
              <RevealAnimation delay={0.15}>
                <div className="grid grid-cols-3 gap-3 border-t border-b border-[#e5e1d8] py-2 mb-3.5 sm:mb-4 max-w-[330px]">
                  {stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className={
                        idx < 2
                          ? "border-r border-[#e5e1d8] pr-2"
                          : "pl-1"
                      }
                    >
                      <div className="text-[20px] sm:text-[22px] font-black font-heading text-[#090d15] leading-none mb-0.5">
                        <CounterAnimation
                          end={stat.value}
                          suffix={stat.suffix}
                          duration={1.8}
                        />
                      </div>
                      <div className="text-[9.5px] sm:text-[10px] font-mono text-[#64748b] leading-tight whitespace-pre-line">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </RevealAnimation>

              {/* Bottom Avatars & Doodle */}
              <RevealAnimation delay={0.18} start="top 98%">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 items-center">
                    {avatars.map((av, idx) => (
                      <div
                        key={idx}
                        className="relative w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full border-2 border-white overflow-hidden shadow-xs shrink-0"
                      >
                        <Image
                          src={av.src}
                          alt={av.alt}
                          fill
                          unoptimized
                          sizes="32px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                    {/* Pink + Badge */}
                    <div className="relative w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full border-2 border-white bg-[#fee2e2] text-[#fa4d56] font-mono text-[11px] font-bold flex items-center justify-center shadow-xs shrink-0 z-10">
                      +
                    </div>
                  </div>

                  {/* Red Hand-Drawn Curved Arrow */}
                  <svg
                    className="w-5.5 h-4 text-[#fa4d56] shrink-0 -mt-1"
                    viewBox="0 0 45 25"
                    fill="none"
                  >
                    <path
                      d="M 5 20 Q 22 5 38 15"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 30 8 L 40 16 L 30 22"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* Handwritten Annotation with Wavy Underline */}
                  <div className="font-script text-[14px] sm:text-[16px] font-bold text-[#090d15] leading-[1.05] select-none -rotate-[2.5deg]">
                    <span className="text-[#334155]">Let&apos;s build</span>
                    <br />
                    <span>Something amazing!</span>
                    <svg
                      className="w-16 h-2 text-[#fa4d56] -mt-0.5"
                      viewBox="0 0 100 20"
                      fill="none"
                    >
                      <path
                        d="M 5 14 Q 50 3 95 15"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* ========================================================
              CENTER COLUMN (~38%): 6 SERVICES + CIRCULAR ORBITAL ARC
             ======================================================== */}
          <div className="w-full lg:w-[39%] xl:w-[38%] relative z-30 py-2 lg:py-0 px-2 sm:px-4 lg:pl-6 xl:pl-8 lg:translate-x-3 xl:translate-x-5">
            
            {/* SVG Rounded Orbital Arc matching right image semi-circle curvature */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 450 500"
                fill="none"
              >
                {/* Pure circular arc with smooth curvature */}
                <path
                  d="M 490 20 A 270 270 0 0 0 490 480"
                  stroke="#fca5a5"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                {/* Mathematically Exact Positioned Red Dots lying on the circular arc */}
                {[
                  { cx: 426, cy: 75 },
                  { cx: 383, cy: 145 },
                  { cx: 364, cy: 215 },
                  { cx: 364, cy: 285 },
                  { cx: 383, cy: 355 },
                  { cx: 426, cy: 425 },
                ].map((dot, idx) => {
                  const isDotActive = idx === activeServiceIndex;
                  return (
                    <g key={idx} className="pointer-events-auto cursor-pointer" onClick={() => setActiveServiceIndex(idx)}>
                      {isDotActive && (
                        <circle
                          cx={dot.cx}
                          cy={dot.cy}
                          r="9"
                          fill="#fa4d56"
                          fillOpacity="0.25"
                          className="animate-pulse"
                        />
                      )}
                      <circle
                        cx={dot.cx}
                        cy={dot.cy}
                        r={isDotActive ? "4.5" : "3.5"}
                        fill="#fa4d56"
                        stroke="#ffffff"
                        strokeWidth={isDotActive ? "2" : "1.2"}
                        className="transition-all duration-300 drop-shadow-sm"
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Vertical Stack of 6 Services */}
            <div className="flex flex-col gap-[10px] pt-8 pb-8 relative z-10 items-start">
              {services.map((item, index) => {
                const isActive = index === activeServiceIndex;

                return (
                  <div
                    key={item.number}
                    onClick={() => setActiveServiceIndex(index)}
                    className={`group inline-flex items-center gap-2.5 pl-3.5 sm:pl-4 pr-2 sm:pr-2.5 h-[62px] rounded-full transition-all duration-300 cursor-pointer ${serviceOffsets[index]} ${
                      isActive
                        ? "bg-white/95 shadow-[0_4px_16px_rgba(250,77,86,0.15)] border border-[#fa4d56]/35 scale-[1.02]"
                        : "hover:bg-white/60 border border-transparent"
                    }`}
                  >
                    {/* Left: Number & Text Details */}
                    <div className="flex items-start gap-2.5 w-[180px] sm:w-[195px] shrink-0">
                      {/* Red Number */}
                      <span className={`font-mono text-[13px] sm:text-[14px] font-black shrink-0 pt-0.5 transition-colors ${
                        isActive ? "text-[#fa4d56]" : "text-[#fa4d56]/80 group-hover:text-[#fa4d56]"
                      }`}>
                        {item.number}
                      </span>

                      {/* Title & Description */}
                      <div className="flex flex-col">
                        <h3 className={`text-[14px] sm:text-[15px] font-black font-heading uppercase tracking-tight leading-tight transition-colors ${
                          isActive ? "text-[#fa4d56]" : "text-[#090d15] group-hover:text-[#fa4d56]"
                        }`}>
                          {item.title}
                        </h3>
                        <p className={`text-[10.5px] sm:text-[11px] leading-[1.3] whitespace-pre-line mt-0.5 transition-colors ${
                          isActive ? "text-[#334155] font-medium" : "text-[#64748b] group-hover:text-[#475569]"
                        }`}>
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Right: Direct 3D Floating PNG Icon */}
                    <div className="relative w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] shrink-0 flex items-center justify-center">
                      <Image
                        src={item.icon || item.image}
                        alt={item.alt}
                        fill
                        unoptimized
                        sizes="54px"
                        className={`object-contain transform transition-all duration-300 ${
                          isActive
                            ? "scale-110 drop-shadow-[0_4px_10px_rgba(250,77,86,0.3)]"
                            : "drop-shadow-sm group-hover:scale-110"
                        }`}
                      />
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Central Prominent Interactive Dial Hub */}
            <div className="absolute top-1/2 -right-4 sm:-right-6 lg:-right-8 xl:-right-10 -translate-y-1/2 z-50 hidden lg:flex items-center justify-center pointer-events-auto select-none">
              
              {/* Outer Frosted Glass Disc with Ambient Shadow */}
              <div className="relative w-22 h-22 sm:w-24 sm:h-24 rounded-full bg-white/95 backdrop-blur-md border border-white shadow-[0_14px_35px_rgba(250,77,86,0.22),0_4px_12px_rgba(0,0,0,0.06)] flex items-center justify-center ring-4 ring-white/70">
                
                {/* Dynamic SVG Circular Progress Arc Tracking Current Service (1 to 6) */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1" viewBox="0 0 100 100">
                  {/* Track Background */}
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="none"
                    stroke="#fee2e2"
                    strokeWidth="2.5"
                  />
                  {/* Animated Active Progress Stroke */}
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="none"
                    stroke="#fa4d56"
                    strokeWidth="2.5"
                    strokeDasharray={276.46}
                    strokeDashoffset={276.46 - (276.46 * (activeServiceIndex + 1)) / services.length}
                    strokeLinecap="round"
                    className="transition-all duration-500 ease-out"
                  />
                </svg>

                {/* Core Interactive Coral-Red Dial Trigger */}
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Click to explore next service"
                  title="Click to explore next service"
                  className="group relative w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-b from-[#ff5b64] via-[#fa4d56] to-[#dc2630] text-white flex flex-col items-center justify-center shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.45),0_8px_24px_rgba(250,77,86,0.48)] hover:shadow-[inset_0_1.5px_3px_rgba(255,255,255,0.6),0_12px_32px_rgba(250,77,86,0.62)] hover:scale-106 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Top Gloss Reflection Arc */}
                  <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-t-full pointer-events-none" />

                  {/* Big Sharp Active Service Number */}
                  <span className="text-[14px] sm:text-[15px] font-black font-heading tracking-tight leading-none text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform">
                    0{activeServiceIndex + 1}
                  </span>

                  {/* Sleek EXPLORE Label */}
                  <span className="font-mono text-[8px] sm:text-[8.5px] font-black uppercase tracking-[0.22em] text-white/95 mt-1 leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
                    EXPLORE
                  </span>

                  {/* Subtle pulsing live indicator dot */}
                  <div className="flex items-center gap-1 mt-1.5 z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-white shadow-xs group-hover:animate-ping" />
                  </div>
                </button>

              </div>
            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN (~33%): GIANT ARCH WORKSPACE SHOWCASE
             ======================================================== */}
          <div className="w-full lg:w-[30%] xl:w-[33%] ml-auto flex items-center justify-end pr-0 relative z-10">
            
            {/* Giant Circular / Arch Left Mask Frame matching the red outline in screenshot */}
            <div className="relative w-full h-[390px] sm:h-[440px] lg:h-[480px] xl:h-[500px] rounded-l-[9999px] overflow-hidden border-[7px] border-r-0 border-white shadow-[-20px_8px_45px_rgba(250,77,86,0.08),-8px_4px_18px_rgba(0,0,0,0.04)] bg-[#f8f8f5] mr-0">
              
              {/* Dynamic Service Showcase Images with Smooth Crossfade */}
              {services.map((service, idx) => {
                const isActive = idx === activeServiceIndex;
                return (
                  <div
                    key={service.number}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      unoptimized
                      priority={idx === 0 || idx === 1}
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      className={`object-cover object-center transform transition-transform duration-700 ${
                        isActive ? "scale-100" : "scale-105"
                      }`}
                    />
                    {/* Soft Gradient Overlay for Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                );
              })}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
