"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { scrollToCleanSection } from "@/lib/navigation";
import {
  ArrowUpRight,
  ChevronRight,
  MessageSquare,
  Mail,
  Monitor,
  Layers,
  Users,
  Briefcase,
  Plus,
} from "lucide-react";

/**
 * Call-To-Action (CTA) Section Component.
 *
 * Pre-contact conversion card featuring:
 * - High-impact editorial headline and service chips.
 * - Centerpiece 3D illustration asset with hover micro-motion.
 * - Interactive inquiry trigger steering visitors to the contact form.
 */
export default function CtaSection() {
  const [extraAvatars, setExtraAvatars] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setExtraAvatars((prev) => [...prev, url]);
    }
  };
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    scrollToCleanSection("contact", e);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#faf7f2] relative border-b border-[#e2e2da] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[32px] sm:rounded-[38px] bg-white border border-[#e8e8e3] p-6 sm:p-10 lg:p-12 shadow-[0_12px_45px_-15px_rgba(0,0,0,0.07)] overflow-hidden"
        >
          {/* ====================================================
              BACKGROUND DECORATIVE ELEMENTS (MATCHING REFERENCE)
             ==================================================== */}
          
          {/* Top-Right Curved Red Shape Accent */}
          <div className="absolute top-0 right-0 w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-bl from-[#fa4d56] to-[#e11d48] rounded-bl-[100px] pointer-events-none z-0" />

          {/* Bottom-Left 3D Glowing Sphere Accent */}
          <div className="absolute -bottom-10 -left-10 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-[#e11d48] via-[#fa4d56] to-[#fda4af] pointer-events-none z-0 shadow-lg" />
          <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-[#fa4d56]/20 blur-2xl pointer-events-none z-0" />



          {/* Background Connecting Wave Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30"
            viewBox="0 0 1200 400"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 400 360 C 550 390, 680 340, 800 240"
              stroke="#fecdd3"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M 460 380 C 620 400, 780 330, 980 370"
              stroke="#fecdd3"
              strokeWidth="1.5"
            />
          </svg>

          {/* ====================================================
              MAIN 3-COLUMN CONTENT GRID
             ==================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-10">
            
            {/* --------------------------------------------------
                LEFT COLUMN (5 COLS): HEADINGS, DESC & 4 SERVICE CHIPS
               -------------------------------------------------- */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              
              {/* Overline / Kicker with Dash & Red Dot */}
              <div className="flex items-center gap-2 font-mono text-[10.5px] sm:text-[11px] uppercase font-bold tracking-widest text-[#64748b] mb-3">
                <span className="w-5 h-[2px] bg-[#64748b]/50" />
                <span>LET&apos;S TURN IDEAS INTO REALITY</span>
                <span className="w-2 h-2 rounded-full bg-[#fa4d56]" />
              </div>

              {/* Main Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-black uppercase font-heading tracking-tight leading-[0.92] mb-4">
                <span className="text-[#090d15] block">HAVE A PROJECT</span>
                <span className="text-[#fa4d56] block">IN MIND?</span>
              </h2>

              {/* Description Paragraph */}
              <p className="text-xs sm:text-[13.5px] text-[#64748b] leading-relaxed max-w-md sm:max-w-lg mb-6 sm:mb-8 font-normal">
                Available for freelance engineering, high-scale web applications, consulting, and full-time technical roles. Let&apos;s create something meaningful together.
              </p>

              {/* 4 Service / Specialization Chips (2-Column Grid: 2 items per row) */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {[
                  { icon: Monitor, line1: "Web", line2: "Applications" },
                  { icon: Layers, line1: "Technical", line2: "Consulting" },
                  { icon: Users, line1: "Product", line2: "Development" },
                  { icon: Briefcase, line1: "Full-time", line2: "Roles" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-white/90 backdrop-blur-xs border border-[#e8e8e3] hover:border-[#fecdd3] p-2.5 sm:p-3 rounded-2xl flex items-center gap-2.5 shadow-2xs hover:shadow-xs transition-all group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#fff1f2] text-[#fa4d56] flex items-center justify-center shrink-0 group-hover:bg-[#fa4d56] group-hover:text-white transition-colors">
                      <item.icon className="w-4 h-4 stroke-[2.2]" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-heading font-black text-xs text-[#090d15] leading-tight truncate">
                        {item.line1}
                      </div>
                      <div className="text-[11px] text-[#64748b] leading-tight truncate">
                        {item.line2}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* --------------------------------------------------
                CENTER COLUMN (3 COLS): "CREATE SOMETHING GREAT TOGETHER" VISUAL
               -------------------------------------------------- */}
            <div className="lg:col-span-3 flex items-center justify-center my-6 lg:my-0 select-none relative">


              {/* Central Soft Red Ambient Glow */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[250px] h-[220px] sm:h-[250px] rounded-full pointer-events-none blur-3xl opacity-65"
                style={{
                  background: "radial-gradient(circle, rgba(250, 77, 86, 0.30) 0%, rgba(254, 205, 211, 0.40) 45%, transparent 75%)",
                }}
              />

              {/* Bottom Stand/Pedestal Red Reflection Glow */}
              <div 
                className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[170px] h-[65px] rounded-full pointer-events-none blur-xl opacity-80"
                style={{
                  background: "radial-gradient(ellipse, rgba(250, 77, 86, 0.38) 0%, rgba(254, 205, 211, 0.22) 55%, transparent 80%)",
                }}
              />

              {/* Center Image with interactive hover */}
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="relative z-10 w-full max-w-[250px] sm:max-w-[270px] flex items-center justify-center cursor-pointer"
              >
                <Image
                  src="/images/cta/create-something-great-together.png"
                  alt="Create Something Great Together"
                  width={1164}
                  height={1351}
                  sizes="(max-width: 640px) 250px, 270px"
                  style={{ width: "100%", height: "auto" }}
                  className="w-full h-auto object-contain drop-shadow-[0_16px_34px_rgba(250,77,86,0.15)] pointer-events-none select-none"
                  priority
                />
              </motion.div>
            </div>

            {/* --------------------------------------------------
                RIGHT COLUMN (4 COLS): "START A CONVERSATION" CARD
               -------------------------------------------------- */}
            <div className="lg:col-span-4 bg-white/95 backdrop-blur-md rounded-3xl border border-[#e8e8e3] p-5 sm:p-7 shadow-xs relative z-10 flex flex-col justify-between">
              
              {/* Overline with Pulsing Red Dot */}
              <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-[10.5px] uppercase font-bold tracking-widest text-[#7c8ba1] mb-2">
                <span className="w-2 h-2 rounded-full bg-[#fa4d56] animate-pulse" />
                <span>READY TO DISCUSS?</span>
              </div>

              {/* Title with Arrow */}
              <a
                href="/contact"
                onClick={handleScrollToContact}
                className="font-heading font-black text-xl sm:text-2xl text-[#090d15] hover:text-[#fa4d56] transition-colors tracking-tight flex items-center justify-between group cursor-pointer"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-5 h-5 text-[#fa4d56] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Subtitle */}
              <p className="text-xs text-[#64748b] leading-relaxed mt-1 mb-5">
                Tell me about your project, idea, or opportunity. I&apos;ll get back to you as soon as possible.
              </p>

              {/* Primary CTA Button (Start Conversation) */}
              <a
                href="/contact"
                onClick={handleScrollToContact}
                className="w-full bg-[#fa4d56] hover:bg-[#e03b44] text-white p-3.5 sm:p-4 rounded-2xl flex items-center justify-between font-mono text-xs uppercase font-bold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg group cursor-pointer mb-3"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 fill-white/20 stroke-[2.2]" />
                  <span>START CONVERSATION</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-white text-[#fa4d56] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 group-hover:translate-x-0.5 transition-all">
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </div>
              </a>

              {/* Secondary CTA Button (Email Directly) */}
              <a
                href="mailto:officialsachin9910@gmail.com"
                className="w-full bg-white hover:bg-[#090d15] hover:text-white text-[#090d15] border border-[#090d15] p-3.5 sm:p-4 rounded-2xl flex items-center justify-between font-mono text-xs uppercase font-bold tracking-wider transition-all duration-300 group cursor-pointer mb-5"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 stroke-[2.2]" />
                  <span>EMAIL DIRECTLY</span>
                </div>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Bottom Avatars & Worldwide Status */}
              <div className="flex items-center gap-3 pt-3.5 border-t border-[#f1f1eb]">
                <div className="flex items-center">
                  <div className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden shadow-2xs z-40 bg-[#0c0e12]">
                    <Image src="/images/testimonials/amit.jpg" alt="Client" fill sizes="28px" className="object-cover" />
                  </div>
                  <div className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden shadow-2xs z-30 -ml-2 bg-[#0c0e12]">
                    <Image src="/images/testimonials/priya.jpg" alt="Client" fill sizes="28px" className="object-cover" />
                  </div>
                  <div className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden shadow-2xs z-20 -ml-2 bg-[#0c0e12]">
                    <Image src="/images/testimonials/rahul.jpg" alt="Client" fill sizes="28px" className="object-cover" />
                  </div>
                  {/* Dynamically added avatars */}
                  {extraAvatars.map((src, idx) => (
                    <div
                      key={idx}
                      className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden shadow-2xs -ml-2 bg-[#0c0e12]"
                      style={{ zIndex: 19 - idx }}
                    >
                      <img src={src} alt="Client" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  {/* Plus button to add next avatar */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleAddAvatar}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    title="Add image"
                    className="relative w-7 h-7 rounded-full border-2 border-white bg-[#f1f1eb] text-[#090d15] flex items-center justify-center -ml-2 z-10 shadow-2xs font-bold text-xs hover:bg-[#fa4d56] hover:text-white transition-colors cursor-pointer select-none"
                  >
                    <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                  <span className="text-[11px] sm:text-[11.5px] text-[#475569] font-medium leading-tight">
                    Open to exciting opportunities worldwide.
                  </span>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
