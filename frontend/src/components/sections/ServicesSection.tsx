"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { services as initialServices } from "@/data/services";
import RevealAnimation from "@/components/animations/RevealAnimation";
import { ArrowUpRight, ArrowRight, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const [orderedServices, setOrderedServices] = useState(initialServices);
  const [rotationCount, setRotationCount] = useState(0);
  const [mousePositions, setMousePositions] = useState<{ [key: number]: { x: number; y: number } }>({});

  const handleMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePositions((prev) => ({
      ...prev,
      [index]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    }));
  };

  const handleRotateClockwise = () => {
    setRotationCount((prev) => prev + 1);
    setOrderedServices((prev) => {
      // 2x2 grid positions: [0: Top-Left, 1: Top-Right, 2: Bottom-Left, 3: Bottom-Right]
      // Clockwise Shift:
      // Top-Left (0) -> Top-Right (1)
      // Top-Right (1) -> Bottom-Right (3)
      // Bottom-Right (3) -> Bottom-Left (2)
      // Bottom-Left (2) -> Top-Left (0)
      const [tl, tr, bl, br] = prev;
      return [bl, tl, br, tr];
    });
  };

  const slotNumbers = ["01.", "02.", "03.", "04."];

  const stats = [
    { value: "10+", label: "Projects\nDelivered" },
    { value: "5+", label: "Happy\nClients" },
    { value: "100%", label: "Focus on\nQuality" },
  ];

  const avatars = [
    { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80", alt: "Client 1" },
    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80", alt: "Client 2" },
    { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80", alt: "Client 3" },
    { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80", alt: "Client 4" },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 border-b border-[#e2e2da] bg-[#faf8f5] relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full bg-radial from-[#fee2e2]/40 via-[#fee2e2]/10 to-transparent blur-3xl -z-0" />
      </div>

      <div className="max-w-[1520px] w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        
        {/* Main 2-Column Grid: Left Sidebar + Right 4 Equal Cards Grid */}
        <div className="flex flex-col xl:flex-row gap-8 lg:gap-10 xl:gap-12 items-start">
          
          {/* ========================================================
              LEFT COLUMN (BRANDING, STATS, CTA, AVATARS)
             ======================================================== */}
          <div className="w-full xl:w-[340px] shrink-0 flex flex-col justify-between self-start">
            <div>
              {/* Category / Subtitle */}
              <RevealAnimation>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] sm:text-[12px] font-bold font-mono tracking-[0.2em] uppercase text-[#475569]">
                    WHAT I DO
                  </span>
                  <span className="w-9 h-[2px] bg-[#fa4d56] inline-block" />
                </div>
              </RevealAnimation>

              {/* Main Headline */}
              <RevealAnimation delay={0.06}>
                <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-black uppercase font-heading tracking-tight text-[#090d15] leading-[0.92]">
                  <span>SERVICES &amp;</span>
                  <br />
                  <span>
                    CONCEPT<span className="text-[#fa4d56] inline-block">.</span>
                  </span>
                </h2>
              </RevealAnimation>

              {/* Handwritten Red Cursive Accent */}
              <RevealAnimation delay={0.12}>
                <div className="mt-1 mb-2.5">
                  <span className="text-[28px] sm:text-[34px] font-script text-[#fa4d56] font-bold -rotate-[3deg] inline-block select-none leading-none">
                    Capabilities &bull; Solutions
                  </span>
                </div>
              </RevealAnimation>

              {/* Paragraph Description */}
              <RevealAnimation delay={0.18}>
                <p className="text-[13px] sm:text-[13.5px] text-[#52525b] leading-[1.6] max-w-[290px] mb-6">
                  Turning ideas into real digital solutions with clean design, modern technology, and a focus on performance.
                </p>
              </RevealAnimation>

              {/* Red CTA Button with Micro Glow */}
              <RevealAnimation delay={0.24}>
                <Link
                  href="#contact"
                  className="group relative inline-flex items-center gap-2 bg-[#fa4d56] hover:bg-[#e03b44] text-white font-mono text-[11.5px] font-bold tracking-wider uppercase px-5 py-3 rounded-xl shadow-[0_8px_20px_rgba(250,77,86,0.3)] hover:shadow-[0_12px_26px_rgba(250,77,86,0.45)] hover:-translate-y-0.5 transition-all mb-6 overflow-hidden"
                >
                  <span className="relative z-10">LET&apos;S WORK TOGETHER</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5] relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  <div className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </RevealAnimation>

              {/* Stats Row (10+ Projects, 5+ Happy Clients, 100% Quality) */}
              <RevealAnimation delay={0.3}>
                <div className="grid grid-cols-3 gap-2 border-t border-b border-[#e8e4db] py-3.5 mb-6">
                  {stats.map((stat, idx) => (
                    <div key={idx} className={idx < 2 ? "border-r border-[#e8e4db] pr-1.5" : "pl-1"}>
                      <div className="text-[22px] sm:text-[24px] font-black font-heading text-[#090d15] leading-none mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-mono text-[#64748b] leading-tight whitespace-pre-line">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </RevealAnimation>

              {/* Bottom Avatars & Doodle */}
              <RevealAnimation delay={0.36}>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 items-center">
                    {avatars.slice(0, 3).map((av, idx) => (
                      <div
                        key={idx}
                        className="relative w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden shadow-xs shrink-0"
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
                    {/* + Badge */}
                    <div className="relative w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-[#fee2e2] text-[#fa4d56] font-mono text-[12px] font-bold flex items-center justify-center shadow-xs shrink-0 z-10">
                      +
                    </div>
                  </div>

                  <svg className="w-6 h-5 text-[#fa4d56] shrink-0" viewBox="0 0 40 25" fill="none">
                    <path d="M 5 18 Q 20 5 35 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M 28 8 L 36 15 L 26 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  <div className="font-script text-[17px] sm:text-[19px] font-bold text-[#475569] leading-tight select-none -rotate-[3deg]">
                    <span>Let&apos;s build</span><br />
                    <span className="text-[#090d15]">Something amazing!</span>
                    <svg className="w-20 h-2 text-[#fa4d56] -mt-0.5" viewBox="0 0 100 20" fill="none">
                      <path d="M 5 13 Q 50 2 95 15" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </RevealAnimation>

            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: 4 EQUAL-SIZED HIGH-END CARDS (ROTATABLE)
             ======================================================== */}
          <div className="flex-1 w-full relative">
            
            {/* Center Interactive Clockwise Rotation Hub Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center">
              {/* Clean Minimal Circular Button */}
              <button
                onClick={handleRotateClockwise}
                type="button"
                aria-label="Rotate services clockwise"
                title="Click to rotate services clockwise"
                className="relative group flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white border border-[#e5e1d8] hover:border-[#090d15] shadow-[0_4px_18px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] text-[#090d15] hover:text-[#fa4d56] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <RefreshCcw
                  className="w-5 h-5 stroke-[2.2] transition-transform duration-500 group-hover:rotate-180"
                  style={{ transform: `rotate(${rotationCount * 90}deg)` }}
                />

                {/* Floating Micro-Badge Tooltip */}
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-20">
                  <span className="font-mono text-[9px] uppercase tracking-wider bg-[#090d15] text-white px-2 py-0.5 rounded-full shadow-md font-semibold">
                    Rotate
                  </span>
                </div>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5 sm:gap-5 auto-rows-fr">
              {orderedServices.map((service, index) => {
                const mousePos = mousePositions[index] || { x: 0, y: 0 };
                const currentSlotNumber = slotNumbers[index];

                return (
                  <motion.div
                    layout
                    key={service.title}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    className="h-full"
                  >
                    <div
                      onMouseMove={(e) => handleMouseMove(index, e)}
                      className="group h-full min-h-[215px] relative bg-[#ffffff] rounded-[24px] border border-[#ece8df] p-5 sm:p-5.5 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.045)] hover:border-[#fa4d56]/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                    >
                      {/* Ultra-Subtle Mouse Light Follower on Hover */}
                      <div
                        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[24px]"
                        style={{
                          background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(250, 77, 86, 0.02), transparent 75%)`,
                        }}
                      />

                      {/* Top Row: Number & Red Line Accent + Top-Right Script Annotation */}
                      <div className="flex items-center justify-between mb-2 relative z-10">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[12.5px] sm:text-[13px] font-bold text-[#fa4d56] tracking-wider transition-all">
                            {currentSlotNumber}
                          </span>
                          <span className="w-5 h-[2px] bg-[#fa4d56] rounded-full inline-block" />
                        </div>

                        {service.annotation && (
                          <span className="font-script text-[13.5px] sm:text-[15px] text-[#64748b] font-medium -rotate-[3deg] select-none group-hover:text-[#fa4d56] transition-colors">
                            {service.annotation}
                          </span>
                        )}
                      </div>

                      {/* Middle Row: Content on Left + 3D Illustration on Right */}
                      <div className="relative my-auto py-2 flex items-center justify-between gap-2.5 sm:gap-3.5 z-10">
                        
                        {/* Left Clean Text Block */}
                        <div className="flex-1 min-w-0 pr-1 flex flex-col justify-center">
                          <h3 className="text-[16.5px] sm:text-[18px] font-bold font-heading uppercase text-[#090d15] tracking-tight leading-tight mb-1.5 group-hover:text-[#fa4d56] transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-[11.5px] sm:text-[12px] text-[#52525b] leading-[1.45] max-w-[230px] mb-2.5">
                            {service.description}
                          </p>

                          {/* Pill Chips - Single Horizontal Row (No wrapping) */}
                          {service.tags && (
                            <div className="flex items-center gap-1 sm:gap-1.5 flex-nowrap overflow-x-visible">
                              {service.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[9px] sm:text-[9.5px] font-mono px-2 py-0.5 rounded-full bg-[#fdf2f2] text-[#52525b] border border-[#fecaca]/60 whitespace-nowrap shrink-0 group-hover:border-[#fa4d56]/20 group-hover:text-[#090d15] transition-colors"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Right 3D Illustration with Glowing Backdrop & Sparkles */}
                        {service.image && (
                          <div className="relative shrink-0 flex items-center justify-center">
                            {/* Soft Pink Radial Aura */}
                            <div className="absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#fee2e2]/60 pointer-events-none group-hover:scale-105 group-hover:bg-[#fee2e2]/75 transition-all duration-300" />
                            
                            {/* Sparkle Accent if enabled */}
                            {service.hasSparkle && (
                              <div
                                className={`absolute z-20 pointer-events-none ${
                                  service.sparklePos === "left"
                                    ? "-top-1 -left-1 sm:-left-2 -rotate-45"
                                    : service.sparklePos === "right"
                                    ? "top-5 -right-2 sm:-right-3 rotate-45"
                                    : "-top-1 right-1 sm:right-3"
                                }`}
                              >
                                <svg className="w-4 h-4 text-[#fa4d56]" viewBox="0 0 24 24" fill="none">
                                  <path d="M 12 2 L 12 8 M 5 6 L 9 10 M 19 6 L 15 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                </svg>
                              </div>
                            )}

                            <div className="relative w-24 h-20 sm:w-28 sm:h-24 lg:w-[130px] lg:h-[105px] overflow-hidden group-hover:scale-105 group-hover:-translate-y-0.5 transition-all duration-300 z-10 flex items-center justify-center">
                              <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                unoptimized
                                sizes="(max-width: 640px) 96px, 130px"
                                className="object-contain drop-shadow-[0_6px_14px_rgba(0,0,0,0.06)]"
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Bottom Action Footer */}
                      <div className="pt-2.5 mt-1.5 border-t border-[#f1ede4] flex items-center justify-between relative z-10">
                        <Link
                          href="#contact"
                          className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[10.5px] uppercase tracking-[0.15em] text-[#090d15] font-bold group-hover:text-[#fa4d56] transition-colors"
                        >
                          <span>EXPLORE MORE</span>
                          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                        
                        <Link
                          href="#contact"
                          aria-label={`Explore ${service.title}`}
                          className="w-6.5 h-6.5 rounded-full bg-[#fee2e2] text-[#fa4d56] flex items-center justify-center group-hover:bg-[#fa4d56] group-hover:text-white transition-all duration-300 shadow-xs group-hover:rotate-45 group-hover:scale-105"
                        >
                          <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                        </Link>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Section Sub-footer: YOUR VISION • MY EXPERTISE • REAL RESULTS */}
        <RevealAnimation delay={0.25}>
          <div className="mt-14 sm:mt-18 pt-5 border-t border-[#e8e4db] flex items-center justify-center relative">
            <div className="flex items-center gap-2 sm:gap-4 text-[11px] sm:text-[12px] font-mono tracking-[0.22em] uppercase text-[#64748b] font-medium text-center">
              <span className="hidden sm:inline-block w-12 h-[1px] bg-[#d4d4cb]" />
              <span>YOUR VISION</span>
              <span className="text-[#fa4d56]">&bull;</span>
              <span>MY EXPERTISE</span>
              <span className="text-[#fa4d56]">&bull;</span>
              <span>REAL RESULTS</span>
              <span className="hidden sm:inline-block w-12 h-[1px] bg-[#d4d4cb]" />
            </div>
          </div>
        </RevealAnimation>

      </div>
    </section>
  );
}
