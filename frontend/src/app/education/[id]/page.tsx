"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { educationSlides } from "@/data/education";
import RevealAnimation from "@/components/animations/RevealAnimation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Calendar,
  Layers,
  GraduationCap,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Code2,
  Briefcase,
  Building2,
  Globe,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export default function EducationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const slideIndex = educationSlides.findIndex((s) => s.id === resolvedParams.id);

  if (slideIndex === -1) {
    notFound();
  }

  const slide = educationSlides[slideIndex];
  const prevSlide =
    slideIndex > 0 ? educationSlides[slideIndex - 1] : educationSlides[educationSlides.length - 1];
  const nextSlide =
    slideIndex < educationSlides.length - 1 ? educationSlides[slideIndex + 1] : educationSlides[0];

  return (
    <div className="min-h-screen bg-[#f8f8f5] text-[#090d15] pt-24 pb-24 selection:bg-[#fa4d56] selection:text-white">
      {/* Background Decorative Grid */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(#e2e2da_1px,transparent_1px)] [background-size:24px_24px] opacity-40 z-0" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            TOP BAR: Breadcrumb + Quick Switcher
           ======================================================== */}
        <RevealAnimation>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e2e2da] pb-5 mb-10">
            <Link
              href="/education"
              className="group inline-flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-wider text-[#64748b] hover:text-[#fa4d56] transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-white border border-[#e2e2da] group-hover:border-[#fa4d56] flex items-center justify-center shadow-2xs group-hover:-translate-x-1 transition-all">
                <ArrowLeft className="w-3.5 h-3.5" />
              </div>
              <span>Back to Education Overview</span>
            </Link>

            {/* Quick Step Indicators */}
            <div className="flex items-center gap-2">
              {educationSlides.map((item, idx) => {
                const isCurrent = item.id === slide.id;
                return (
                  <Link
                    key={item.id}
                    href={`/education/${item.id}`}
                    title={item.title}
                    className={`font-mono text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-200 border ${
                      isCurrent
                        ? "bg-[#090d15] text-white border-[#090d15] shadow-xs"
                        : "bg-white text-[#64748b] border-[#e2e2da] hover:border-[#fa4d56] hover:text-[#fa4d56]"
                    }`}
                  >
                    0{idx + 1}
                  </Link>
                );
              })}
            </div>
          </div>
        </RevealAnimation>

        {/* ========================================================
            HERO HEADER SECTION: Big Title, Meta Grid & Institution Badge
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          
          {/* Left Column: Degree Title & Executive Narrative */}
          <div className="lg:col-span-8 flex flex-col">
            <RevealAnimation delay={0.05}>
              <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-widest text-[#fa4d56] mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fee2e2] border border-[#fecaca]">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>{slide.tag}</span>
                </span>
                <span className="text-[#94a3b8]">•</span>
                <span className="text-[#64748b]">{slide.code}</span>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black uppercase font-heading tracking-tight text-[#090d15] leading-[1.05] mb-5">
                {slide.title}
              </h1>
            </RevealAnimation>

            <RevealAnimation delay={0.15}>
              <p className="text-[15px] sm:text-[16px] text-[#475569] leading-relaxed max-w-3xl mb-8">
                {slide.overview}
              </p>
            </RevealAnimation>

            {/* 4 Feature Badges in Modern Glass Row */}
            <RevealAnimation delay={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#e2e2da]">
                {slide.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white border border-[#e2e2da] shadow-[0_2px_12px_rgba(9,13,21,0.03)] flex flex-col justify-between"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#fee2e2] text-[#fa4d56] flex items-center justify-center mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-heading font-bold text-xs uppercase tracking-tight text-[#090d15] leading-snug">
                      {feat.label}
                    </span>
                  </div>
                ))}
              </div>
            </RevealAnimation>
          </div>

          {/* Right Column: Verified Credential Card */}
          <div className="lg:col-span-4">
            <RevealAnimation delay={0.2}>
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e2e2da] shadow-[0_12px_36px_rgba(9,13,21,0.05)] relative overflow-hidden">
                
                {/* Accent Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#991b1b] via-[#fa4d56] to-[#991b1b]" />

                {/* Institution Header */}
                <div className="flex items-start justify-between gap-3 mb-4 pt-1">
                  <div>
                    <span className="font-mono text-[10px] font-bold text-[#7c8ba1] uppercase tracking-widest block mb-1">
                      AWARDING BODY
                    </span>
                    <h2 className="font-heading font-bold text-lg text-[#090d15] leading-snug uppercase tracking-tight">
                      {slide.institution}
                    </h2>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-[#fee2e2] text-[#fa4d56] flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#fafaf8] border border-[#e2e2da] mb-5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#16a34a] shrink-0" />
                    <span className="text-xs font-semibold text-[#090d15]">
                      {slide.logoBadge}
                    </span>
                  </div>
                </div>

                {/* Spec List */}
                <div className="space-y-3 text-xs border-t border-[#f1f1eb] pt-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase font-bold text-[#090d15] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#fa4d56]" />
                      DURATION:
                    </span>
                    <span className="font-mono text-[11.5px] text-[#64748b] font-medium">{slide.duration}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase font-bold text-[#090d15] flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#fa4d56]" />
                      FORMAT:
                    </span>
                    <span className="font-mono text-[11.5px] text-[#64748b] font-medium">Full Curriculum</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase font-bold text-[#090d15] flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-[#fa4d56]" />
                      PORTAL:
                    </span>
                    <span className="font-mono text-[11.5px] text-[#64748b] font-medium">{slide.livePreview}</span>
                  </div>
                </div>

                {/* Live Official Website Button */}
                <a
                  href={slide.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full inline-flex items-center justify-center gap-2 bg-[#090d15] hover:bg-[#fa4d56] text-white font-mono font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all duration-300 shadow-sm"
                >
                  <span>Visit Official Website</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

              </div>
            </RevealAnimation>
          </div>

        </div>

        {/* ========================================================
            PRESENTATION BROWSER FRAME: High-Res Curriculum Graphic
           ======================================================== */}
        <RevealAnimation delay={0.25}>
          <div className="mb-16 bg-white rounded-3xl p-3 sm:p-5 md:p-6 border border-[#e2e2da] shadow-[0_20px_50px_rgba(9,13,21,0.07)]">
            
            {/* Window Top Header Bar */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#f1f1eb] px-1">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                <span className="w-3 h-3 rounded-full bg-[#eab308]" />
                <span className="w-3 h-3 rounded-full bg-[#22c55e]" />
                <span className="text-xs text-[#7c8ba1] ml-3 hidden sm:inline-block font-medium">
                  Curriculum Overview • {slide.title}
                </span>
              </div>
              <div className="font-mono text-[10px] font-semibold text-[#64748b] bg-[#fafaf8] px-3 py-1 rounded-full border border-[#e2e2da]">
                🔒 {slide.livePreview}
              </div>
            </div>

            {/* High-Resolution Framed Graphic */}
            <div className="relative aspect-[1672/941] w-full rounded-2xl overflow-hidden bg-[#fafaf8] border border-[#e2e2da]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                unoptimized
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </RevealAnimation>

        {/* ========================================================
            2-COLUMN SECTION: Key Learning Highlights + Tech Stack & Disciplines
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left: What This Qualification Built (7 cols) */}
          <div className="lg:col-span-7">
            <RevealAnimation delay={0.3}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-9 border border-[#e2e2da] shadow-[0_8px_30px_rgba(9,13,21,0.03)] h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#fa4d56] mb-3">
                    <Sparkles className="w-4 h-4" />
                    <span>CORE LEARNING PILLARS</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase font-heading tracking-tight text-[#090d15] mb-6">
                    What This Qualification Built
                  </h2>

                  <div className="space-y-4">
                    {slide.keyHighlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#fafaf8] border border-[#e2e2da]/70 hover:border-[#fa4d56]/40 transition-colors"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#fee2e2] text-[#fa4d56] flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <p className="text-[13.5px] sm:text-[14px] text-[#334155] leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Outcomes Footer */}
                <div className="mt-8 pt-6 border-t border-[#f1f1eb] flex items-center justify-between text-xs">
                  <span className="text-[#64748b]">Focus: Practical Labs & Theory</span>
                  <span className="font-heading font-bold uppercase text-[#fa4d56] tracking-wider">100% Comprehensive</span>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Right: Disciplines & Applied Capabilities (5 cols) */}
          <div className="lg:col-span-5">
            <RevealAnimation delay={0.35}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-9 border border-[#e2e2da] shadow-[0_8px_30px_rgba(9,13,21,0.03)] h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#fa4d56] mb-3">
                    <Code2 className="w-4 h-4" />
                    <span>CURRICULUM STACK</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase font-heading tracking-tight text-[#090d15] mb-6">
                    Technologies & Disciplines
                  </h2>

                  {/* Tech / Subject Cards */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {slide.techStack.map((tech, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-[#fafaf8] border border-[#e2e2da] hover:border-[#fa4d56] hover:bg-white transition-all shadow-2xs group"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: tech.color || "#fa4d56" }}
                          />
                          <span className="font-mono text-[9.5px] font-bold text-[#64748b] uppercase tracking-wider truncate">
                            {tech.tag}
                          </span>
                        </div>
                        <span className="font-heading font-bold text-sm text-[#090d15] uppercase tracking-tight group-hover:text-[#fa4d56] transition-colors block">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applied Career Capabilities */}
                <div className="p-5 rounded-2xl bg-[#fee2e2]/40 border border-[#fecaca] mt-4">
                  <div className="flex items-center gap-2 mb-2.5 font-heading font-bold text-xs uppercase tracking-wider text-[#991b1b]">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Applied Career Capabilities</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {slide.careerOutcomes.map((career, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-white text-[#090d15] text-xs font-semibold border border-[#fecaca]/70 shadow-2xs"
                      >
                        {career}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </RevealAnimation>
          </div>

        </div>

        {/* ========================================================
            SYLLABUS & MODULES BREAKDOWN
           ======================================================== */}
        <RevealAnimation delay={0.4}>
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#e2e2da] shadow-[0_8px_30px_rgba(9,13,21,0.03)] mb-16">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#fa4d56] mb-2">
                  <BookOpen className="w-4 h-4" />
                  <span>STRUCTURED CURRICULUM</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase font-heading tracking-tight text-[#090d15]">
                  Detailed Syllabus & Modules
                </h2>
              </div>

              <span className="font-mono text-[11px] font-semibold text-[#64748b] bg-[#fafaf8] px-3.5 py-1.5 rounded-full border border-[#e2e2da]">
                {slide.curriculum.length} Core Modules
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {slide.curriculum.map((module, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#fafaf8] border border-[#e2e2da] hover:border-[#fa4d56]/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#fa4d56] bg-[#fee2e2] px-2.5 py-1 rounded-md">
                        MODULE {idx + 1}
                      </span>
                      <ChevronRight className="w-4 h-4 text-[#94a3b8] group-hover:text-[#fa4d56] group-hover:translate-x-1 transition-all" />
                    </div>
                    
                    <h3 className="font-heading font-bold text-base uppercase tracking-tight text-[#090d15] mb-4 leading-snug">
                      {module.title}
                    </h3>

                    <ul className="space-y-2.5">
                      {module.topics.map((topic, tIdx) => (
                        <li
                          key={tIdx}
                          className="flex items-start gap-2.5 text-xs text-[#475569] leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#fa4d56] mt-1.5 shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealAnimation>

        {/* ========================================================
            BOTTOM SWITCHER BAR: Next & Previous Qualifications
           ======================================================== */}
        <RevealAnimation delay={0.45}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#e2e2da] pt-8">
            
            {/* Previous Qualification */}
            <Link
              href={`/education/${prevSlide.id}`}
              className="group p-5 sm:p-6 rounded-2xl bg-white hover:bg-[#fee2e2]/30 border border-[#e2e2da] hover:border-[#fecaca] transition-all flex items-center gap-4 shadow-2xs"
            >
              <div className="w-11 h-11 rounded-xl bg-[#fee2e2] text-[#fa4d56] flex items-center justify-center shrink-0 group-hover:-translate-x-1 transition-transform">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <div className="truncate">
                <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-[#64748b]">
                  Previous Qualification
                </span>
                <span className="block font-heading font-bold text-sm uppercase tracking-tight text-[#090d15] group-hover:text-[#fa4d56] transition-colors truncate">
                  {prevSlide.title}
                </span>
              </div>
            </Link>

            {/* Next Qualification */}
            <Link
              href={`/education/${nextSlide.id}`}
              className="group p-5 sm:p-6 rounded-2xl bg-white hover:bg-[#fee2e2]/30 border border-[#e2e2da] hover:border-[#fecaca] transition-all flex items-center justify-end text-right gap-4 shadow-2xs"
            >
              <div className="truncate">
                <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-[#64748b]">
                  Next Qualification
                </span>
                <span className="block font-heading font-bold text-sm uppercase tracking-tight text-[#090d15] group-hover:text-[#fa4d56] transition-colors truncate">
                  {nextSlide.title}
                </span>
              </div>
              <div className="w-11 h-11 rounded-xl bg-[#fee2e2] text-[#fa4d56] flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>

          </div>
        </RevealAnimation>

      </div>
    </div>
  );
}
