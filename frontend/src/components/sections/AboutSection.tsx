"use client";

import Image from "next/image";
import RevealAnimation from "@/components/animations/RevealAnimation";
import { MapPin, Briefcase, GraduationCap, Heart, Box, Quote } from "lucide-react";
import {
  SiPhp,
  SiJavascript,
  SiPython,
  SiDjango,
  SiMysql,
  SiFastapi,
  SiGit,
  SiGithub,
  SiXampp,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function AboutSection() {
  const infoCards = [
    {
      icon: MapPin,
      label: "LOCATION",
      value: "DELHI, INDIA",
    },
    {
      icon: Briefcase,
      label: "ROLE",
      value: "WEBSITE DEVELOPER",
    },
    {
      icon: GraduationCap,
      label: "FOCUS",
      value: "FULL-STACK & AI",
    },
    {
      icon: Heart,
      label: "INTEREST",
      value: "BUILD • LEARN • GROW",
    },
  ];

  const techStack = [
    {
      name: "PHP",
      tag: "Backend",
      icon: <SiPhp className="w-6 h-6 sm:w-7 sm:h-7 text-[#777BB4]" />,
    },
    {
      name: "JavaScript",
      tag: "Core / UI",
      icon: <SiJavascript className="w-5 h-5 sm:w-6 sm:h-6 text-[#F7DF1E] bg-[#000000] rounded-[2px]" />,
    },
    {
      name: "Python",
      tag: "Scripting / AI",
      icon: <SiPython className="w-5 h-5 sm:w-6 sm:h-6 text-[#3776AB]" />,
    },
    {
      name: "Django",
      tag: "Framework",
      icon: <SiDjango className="w-5 h-5 sm:w-6 sm:h-6 text-[#092E20]" />,
    },
    {
      name: "MySQL",
      tag: "Database",
      icon: <SiMysql className="w-6 h-6 sm:w-7 sm:h-7 text-[#00758F]" />,
    },
    {
      name: "FastAPI",
      tag: "APIs",
      icon: <SiFastapi className="w-5 h-5 sm:w-6 sm:h-6 text-[#05998B]" />,
    },
    {
      name: "Git",
      tag: "Version Control",
      icon: <SiGit className="w-5 h-5 sm:w-6 sm:h-6 text-[#F05032]" />,
    },
    {
      name: "VS Code",
      tag: "Code Editor",
      icon: <VscVscode className="w-5 h-5 sm:w-6 sm:h-6 text-[#007ACC]" />,
    },
    {
      name: "GitHub",
      tag: "Code Repository",
      icon: <SiGithub className="w-5 h-5 sm:w-6 sm:h-6 text-[#181717]" />,
    },
    {
      name: "XAMPP",
      tag: "Local Development",
      icon: <SiXampp className="w-5 h-5 sm:w-6 sm:h-6 text-[#FB7A24]" />,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 border-b border-[#e2e2da] bg-[#f8f8f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* 2-Column Master Layout: Left Avatar Stage (5 cols) | Right Content Arsenal (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: Seamless Avatar Stage with Hand-Drawn Notes & Centered Pedestal Badge */}
          <div className="lg:col-span-5 flex flex-col items-center justify-start pt-1">
            <div className="relative w-full max-w-[390px] sm:max-w-[420px] flex flex-col items-center">
              
              {/* Layered Graphic Soft Pastel Pink Circles Backdrop (Exact as reference image) */}
              <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                {/* 1. Top-Right Main Circle */}
                <div className="absolute top-[8%] right-[2%] w-[250px] sm:w-[290px] aspect-square rounded-full bg-[#fa4d56]/[0.08]" />
                
                {/* 2. Middle-Left Overlapping Circle (behind waving hand & arm) */}
                <div className="absolute top-[26%] left-[0%] w-[220px] sm:w-[260px] aspect-square rounded-full bg-[#fa4d56]/[0.05]" />
                
                {/* 3. Lower-Right Overlapping Circle (behind hip & waist) */}
                <div className="absolute bottom-[14%] right-[4%] w-[190px] sm:w-[230px] aspect-square rounded-full bg-[#fa4d56]/[0.035]" />
              </div>

              {/* Hand-Drawn Note on Left (Positioned right beside hand, slightly above palm) */}
              <div className="absolute top-[13%] sm:top-[14%] -left-3 sm:-left-7 lg:-left-8 z-20 select-none">
                <div className="rotate-[-6deg]">
                  <p className="font-script text-xl sm:text-2xl font-bold text-[#090d15] leading-[1.1]">
                    Hey!
                    <br />
                    I&apos;m Sachin
                  </p>
                  <svg viewBox="0 0 44 34" className="w-8 h-6.5 text-[#090d15] fill-none stroke-current stroke-[2.2] stroke-linecap-round stroke-linejoin-round mt-0.5 ml-1.5">
                    <path d="M6 4 C 4 16, 12 26, 36 24" />
                    <path d="M28 18 L 36 24 L 29 30" />
                  </svg>
                </div>
              </div>

              {/* Top-Right Red Celebration Spark Rays (Shifted further right) */}
              <div className="absolute -top-5 sm:-top-6 right-[12%] sm:right-[14%] z-20 select-none pointer-events-none">
                <svg
                  viewBox="0 0 100 100"
                  className="w-11 h-11 sm:w-14 sm:h-14 text-[#ff3344] fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Stroke 1: Short, slightly curved stroke toward upper-left (thickness matching Stroke 2 & 3) */}
                  <path d="M 23 52 C 21.5 45, 24 32, 28 23 C 29.5 20, 33 20.5, 34 24 C 35 29, 31 44, 27 54 C 26 56.5, 23.5 55.5, 23 52 Z" />
                  
                  {/* Stroke 2: Longer diagonal stroke near center, angled upward right with convex top arch */}
                  <path d="M 37 68 C 41 62, 51 50, 61 40 C 65 36, 69 37, 69 41 C 69 44, 66 48, 60 55 C 53 63, 44 70, 38.5 70.5 C 36.5 70.5, 36 69.5, 37 68 Z" />
                  
                  {/* Stroke 3: Shorter horizontal/diagonal stroke toward lower-right */}
                  <path d="M 47 86 C 47 83, 56 81.5, 68 79 C 76 77.5, 83 76.5, 83 80 C 83 83.5, 78 85, 71 86.5 C 62 88, 52 89, 48 88 C 46.5 87.5, 46.5 86.5, 47 86 Z" />
                </svg>
              </div>

              {/* 3D Character Avatar Image */}
              <div className="relative w-full aspect-[425/595] z-10 flex items-end justify-center">
                <Image
                  src="/images/about-avatar.png"
                  alt="Sachin Sharma — 3D Character Avatar"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
                  className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(9,13,21,0.18)]"
                />

                {/* Theme-Matching Pedestal Pill Badge: Centered symmetrically under avatar legs */}
                <div className="absolute -bottom-3.5 left-[57%] -translate-x-1/2 z-20 w-[74%] max-w-[260px]">
                  <div className="flex items-center justify-between gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-white text-[#090d15] shadow-[0_12px_28px_rgba(9,13,21,0.08),0_2px_6px_rgba(9,13,21,0.04)] border border-[#e2e2da] select-none mx-auto">
                    <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fa4d56] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fa4d56]"></span>
                      </span>
                      <span className="font-heading font-black text-[10.5px] sm:text-[11.5px] text-[#090d15] uppercase tracking-wider truncate">
                        SACHIN SHARMA
                      </span>
                    </div>
                    <span className="shrink-0 px-2 sm:px-2.5 py-0.5 rounded-full bg-[#fee2e2] text-[#fa4d56] font-mono font-bold text-[8px] sm:text-[9px] uppercase tracking-wider">
                      FULL-STACK
                    </span>
                  </div>
                </div>
              </div>

              {/* Ground Shadow centered with the avatar base */}
              <div className="w-[210px] h-2.5 mt-5 ml-[14%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(9,13,21,0.08)_0%,transparent_70%)] blur-sm pointer-events-none" />
            </div>
          </div>


          {/* RIGHT COLUMN: Bio, Philosophy Card, Stats Bar & Core Tech Arsenal */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 flex flex-col justify-start">

            {/* TOP ROW: Header & Bio (Left) + Philosophy Card (Right) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-stretch">
              
              {/* Left Bio Info */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-3">
                <div>
                  {/* Overline Label */}
                  <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-[#7c8ba1] mb-2">
                    <span>GET TO KNOW ME</span>
                    <span className="w-8 h-[2px] bg-[#fa4d56]" />
                  </div>

                  {/* Main Heading with Spark */}
                  <RevealAnimation>
                    <div className="inline-flex items-center gap-2.5 sm:gap-3">
                      <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase font-heading tracking-tight text-[#090d15] leading-none">
                        ABOUT ME
                      </h2>
                      <span className="inline-flex items-center justify-center text-[#fa4d56] filter drop-shadow-[0_0_12px_rgba(250,77,86,0.55)] select-none hover:scale-115 hover:rotate-45 transition-transform duration-300 cursor-default">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 text-[#fa4d56]"
                        >
                          <path d="M12 0C12.5 6 18 11.5 24 12C18 12.5 12.5 18 12 24C11.5 18 6 12.5 0 12C6 11.5 11.5 6 12 0Z" />
                        </svg>
                      </span>
                    </div>
                  </RevealAnimation>

                  {/* Cursive Subtitle */}
                  <p className="mt-1.5 text-xl sm:text-2xl font-script text-[#fa4d56] rotate-[-2deg] font-semibold">
                    Engineering &bull; Vision &bull; Craftsmanship
                  </p>
                </div>

                {/* Bio Paragraph */}
                <RevealAnimation delay={0.1}>
                  <p className="font-editorial text-sm sm:text-[15px] text-[#334155] leading-relaxed tracking-[-0.01em] pt-1 font-normal">
                    I&apos;m <strong className="font-bold text-[#090d15]">Sachin Sharma</strong>, a website developer passionate about building scalable backend systems, modern full-stack applications, and intelligent AI-powered solutions that turn ideas into impactful digital experiences.
                  </p>
                </RevealAnimation>
              </div>

              {/* Right Philosophy Card */}
              <div className="md:col-span-5">
                <RevealAnimation delay={0.15}>
                  <div className="h-full p-5 sm:p-6 rounded-2xl bg-[#fff8f8] border border-[#fce7e7] flex flex-col justify-between shadow-2xs relative">
                    {/* Quote Circle Badge */}
                    <div className="w-8 h-8 rounded-full bg-white border border-[#fca5a5] text-[#fa4d56] flex items-center justify-center mb-3 shadow-2xs">
                      <Quote className="w-4 h-4 fill-[#fa4d56] text-[#fa4d56]" />
                    </div>

                    {/* Quote Text */}
                    <blockquote className="font-serif italic text-xs sm:text-sm text-[#1e293b] leading-relaxed mb-4">
                      &ldquo;Software engineering is the delicate balance between technical precision, mathematical structure, and human-centered design.&rdquo;
                    </blockquote>

                    {/* Footer / Caption */}
                    <div>
                      <div className="w-5 h-[2px] bg-[#fa4d56] mb-1.5" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#94a3b8] font-bold">
                        MY PHILOSOPHY
                      </span>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
            </div>


            {/* MIDDLE ROW: 4-Item Quick Stats / Metadata Bar (Location left-aligned, other 3 centered) */}
            <RevealAnimation delay={0.2}>
              <div className="bg-white border border-[#e2e2da] rounded-2xl p-3 sm:p-3.5 shadow-xs">
                <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[#e2e2da]">
                  {infoCards.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={item.label}
                        className={`flex items-center gap-2.5 sm:gap-3 py-2 lg:py-0 px-2 sm:px-3 text-left ${
                          index === 0 ? "justify-start pl-1 sm:pl-2 lg:pl-3" : "justify-center"
                        }`}
                      >
                        <div className="w-8 h-8 rounded-full bg-[#fee2e2] text-[#ef4444] flex items-center justify-center shrink-0 shadow-2xs">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[8.5px] sm:text-[9px] font-mono uppercase tracking-wider text-[#94a3b8] font-semibold">
                            {item.label}
                          </div>
                          <div className="text-[10px] sm:text-[10.5px] lg:text-[11px] xl:text-[11.5px] font-heading font-black text-[#090d15] tracking-tight uppercase mt-0.5 whitespace-nowrap">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </RevealAnimation>


            {/* BOTTOM ROW: Core Tech Arsenal + Cursive Callout */}
            <RevealAnimation delay={0.25}>
              <div className="bg-white border border-[#e2e2da] rounded-2xl p-4 sm:p-5 shadow-xs">
                {/* Arsenal Header */}
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#e2e2da]/70">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-[#fee2e2] text-[#ef4444] flex items-center justify-center shrink-0">
                      <Box className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-[#090d15]">
                      CORE TECH ARSENAL
                    </h3>
                  </div>
                  <span className="font-mono font-bold text-[11px] sm:text-xs uppercase tracking-wider text-[#fa4d56]">
                    [ PRIMARY STACK ]
                  </span>
                </div>

                {/* Grid & Cursive Callout Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-center">
                  
                  {/* 10 Tech Cards (2 rows of 5) */}
                  <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-2.5">
                    {techStack.map((tech) => (
                      <div
                        key={tech.name}
                        className="p-2.5 sm:p-3 bg-white border border-[#e2e2da] rounded-xl flex flex-col items-center justify-center text-center shadow-2xs hover:shadow-md hover:border-[#090d15] transition-all duration-200 group cursor-default"
                      >
                        <div className="h-7 sm:h-8 flex items-center justify-center transition-transform group-hover:scale-110">
                          {tech.icon}
                        </div>
                        <span className="font-heading font-bold text-[11px] sm:text-xs text-[#090d15] mt-1.5 uppercase tracking-tight truncate w-full">
                          {tech.name}
                        </span>
                        <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-[#fef1f2] text-[#e11d48] text-[8px] sm:text-[9px] font-mono font-semibold uppercase tracking-wider truncate max-w-full">
                          {tech.tag}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Right Side Cursive Sticky Note Sticker */}
                  <div className="lg:col-span-3 flex items-center justify-center py-2 lg:py-0 border-t lg:border-t-0 lg:border-l border-[#e2e2da]/70 pl-0 lg:pl-2">
                    <div className="relative rotate-[-3deg] hover:rotate-0 transition-transform duration-300 select-none bg-gradient-to-b from-[#fef08a] via-[#fef9c3] to-[#fef08a]/90 border border-[#fde047]/70 rounded-lg p-3 sm:p-3.5 shadow-[3px_6px_16px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)] text-center max-w-[140px] w-full">
                      {/* Pushpin / Magnet Accent */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#090d15] shadow-sm border border-white/50 flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-white/70" />
                      </div>

                      {/* Sticky Note Content */}
                      <div className="pt-1.5">
                        <p className="font-script text-lg sm:text-xl text-[#090d15] font-bold leading-tight">
                          Turning
                          <br />
                          Ideas into
                          <br />
                          <span className="text-[#fa4d56]">Real Solutions</span>
                        </p>
                        <svg viewBox="0 0 100 20" className="w-14 sm:w-16 mx-auto mt-1 text-[#fa4d56] fill-none stroke-current stroke-[3] stroke-linecap-round">
                          <path d="M5 12 Q 50 18, 95 6" />
                        </svg>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </RevealAnimation>

          </div>
        </div>

      </div>
    </section>
  );
}
