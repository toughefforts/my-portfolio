"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { educationSlides } from "@/data/education";
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
  Play,
  LayoutGrid,
  List,
  Wrench,
  TrendingUp,
  Database,
  Cpu,
  Monitor,
  Lightbulb,
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

  const [activeTab, setActiveTab] = useState<string>("overview");
  const [viewMode, setViewMode] = useState<"card" | "list">("card");

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const renderCapabilityIcon = (iconName: string) => {
    switch (iconName) {
      case "sparkles":
        return <Sparkles className="w-4 h-4" />;
      case "layers":
        return <Layers className="w-4 h-4" />;
      case "database":
        return <Database className="w-4 h-4" />;
      case "code":
        return <Code2 className="w-4 h-4" />;
      case "laptop":
        return <Monitor className="w-4 h-4" />;
      case "chart":
        return <TrendingUp className="w-4 h-4" />;
      default:
        return <Lightbulb className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcf9] text-[#090d15] pt-24 pb-24 selection:bg-[#fa4d56] selection:text-white">
      {/* Background Subtle Texture */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(#e2e2da_1px,transparent_1px)] [background-size:24px_24px] opacity-40 z-0" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            TOP BAR: Breadcrumb + Step Indicators
           ======================================================== */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e5e5dc] pb-5 mb-8">
          <Link
            href="/#education"
            className="group inline-flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-wider text-[#64748b] hover:text-[#fa4d56] transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-white border border-[#e2e2da] group-hover:border-[#fa4d56] flex items-center justify-center shadow-2xs group-hover:-translate-x-1 transition-all">
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
                  className={`font-mono text-xs font-bold w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 border ${
                    isCurrent
                      ? "bg-[#090d15] text-white border-[#090d15] shadow-xs scale-105"
                      : "bg-white text-[#64748b] border-[#e2e2da] hover:border-[#fa4d56] hover:text-[#fa4d56]"
                  }`}
                >
                  0{idx + 1}
                </Link>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            HERO COMPOSITION: Headline, Laptop Canvas & Institution Card
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start mb-10">
          
          {/* Left Column (5 cols): Degree Title, Overview & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-center pt-2">
            
            {/* Category Eyebrow with red circle */}
            <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-[#7c8ba1] mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#fa4d56] ring-4 ring-[#fee2e2]" />
              <span>EDUCATION JOURNEY</span>
            </div>

            {/* Main Heading with Highlighted Subtitle */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black uppercase font-heading tracking-tight text-[#090d15] leading-[0.98] mb-4">
              <span>{slide.title}</span>{" "}
              {slide.highlightWord && (
                <span className="text-[#fa4d56] block sm:inline">{slide.highlightWord}</span>
              )}
            </h1>

            {/* Narrative Paragraph */}
            <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed mb-6 font-sans">
              {slide.overview}
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={slide.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#090d15] hover:bg-[#fa4d56] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95"
              >
                <span>View Official Program</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => scrollToSection("curriculum-overview")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#fee2e2]/40 text-[#090d15] hover:text-[#fa4d56] border border-[#e2e2da] hover:border-[#fecaca] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-2xs hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <Play className="w-3 h-3 text-[#fa4d56] fill-[#fa4d56]" />
                <span>Watch Overview</span>
              </button>
            </div>
          </div>

          {/* Center Column (4 cols): 3D Laptop on Campus with Handwriting Stamp */}
          <div className="lg:col-span-4 relative flex flex-col items-center justify-center">
            
            {/* Handwriting cursive stamp at top-right */}
            <div className="absolute -top-6 right-0 sm:right-2 z-20 pointer-events-none transform rotate-[-4deg]">
              <span className="font-serif italic text-xs sm:text-[13px] font-bold text-[#334155] tracking-tight block">
                {slide.quoteStamp || "Learning Today Building Tomorrow..."}
              </span>
              <svg className="w-28 h-2 text-[#fa4d56] -mt-0.5 ml-auto" viewBox="0 0 120 8" fill="none">
                <path d="M2 5C35 1 85 8 118 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* Organic Card with Campus Background + Realistic 3D Laptop Display */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#e2e2da] shadow-[0_16px_40px_rgba(9,13,21,0.06)] bg-white group">
              {/* Campus backdrop photo with soft tint */}
              <Image
                src={slide.campusImage || "/images/education/ignou-campus.jpg"}
                alt={`${slide.institution} Campus`}
                fill
                priority
                unoptimized
                className="object-cover opacity-60 scale-105 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

              {/* Floating Laptop Graphic */}
              <div className="absolute inset-x-4 bottom-2 top-8 flex items-center justify-center drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]">
                <div className="relative w-full max-w-[340px] aspect-[1526/1030]">
                  {/* Laptop Base */}
                  <Image
                    src="/images/education/laptop-base.png"
                    alt="Laptop Mockup Base"
                    fill
                    unoptimized
                    className="object-contain pointer-events-none z-10"
                  />
                  {/* Laptop Screen Display */}
                  <div className="absolute top-[9.6%] left-[calc(14.7%-1.5px)] w-[calc(70.6%+3px)] h-[64.4%] overflow-hidden z-0 rounded-t-[2px] bg-[#0a0a0a]">
                    <Image
                      src={slide.image || "/images/education/bca-screen.jpg"}
                      alt={slide.title}
                      fill
                      unoptimized
                      className="object-fill w-full h-full"
                    />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.12]" />
                  </div>
                  {/* Laptop Lid Bezel */}
                  <Image
                    src="/images/education/laptop-lid.png"
                    alt="Laptop Mockup Lid"
                    fill
                    unoptimized
                    className="object-contain pointer-events-none z-20"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (3 cols): Awarding Body Card with Floating Red Icon */}
          <div className="lg:col-span-3 relative">
            
            {/* Main Verified Card */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#e2e2da] shadow-[0_12px_36px_rgba(9,13,21,0.05)] relative overflow-visible">
              
              {/* Floating circular red badge in top-right */}
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#e11d48] to-[#fa4d56] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(250,77,86,0.35)] z-20 ring-4 ring-[#fcfcf9]">
                <GraduationCap className="w-5 h-5" />
              </div>

              {/* Institution Header */}
              <div className="mb-4 pr-6">
                <span className="font-mono text-[10px] font-bold text-[#7c8ba1] uppercase tracking-widest block mb-1">
                  AWARDING BODY
                </span>
                <h2 className="font-heading font-bold text-sm sm:text-base text-[#090d15] leading-snug uppercase tracking-tight">
                  {slide.institution}
                </h2>
              </div>

              {/* Verified Pill */}
              <div className="p-2.5 rounded-xl bg-[#fafaf8] border border-[#e2e2da] mb-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#16a34a] shrink-0" />
                  <span className="text-[11px] font-semibold text-[#090d15] truncate">
                    {slide.logoBadge}
                  </span>
                </div>
              </div>

              {/* Spec Rows */}
              <div className="space-y-2.5 text-xs border-t border-[#f1f1eb] pt-3.5 mb-5 font-mono">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="uppercase font-bold text-[#090d15] flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-[#fa4d56]" />
                    DURATION:
                  </span>
                  <span className="text-[#64748b] font-medium">{slide.duration}</span>
                </div>

                <div className="flex items-center justify-between text-[11px]">
                  <span className="uppercase font-bold text-[#090d15] flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-[#fa4d56]" />
                    PROGRAM:
                  </span>
                  <span className="text-[#64748b] font-medium truncate max-w-[120px] text-right">
                    {slide.program}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px]">
                  <span className="uppercase font-bold text-[#090d15] flex items-center gap-1.5">
                    <Globe className="w-3 h-3 text-[#fa4d56]" />
                    MODE:
                  </span>
                  <span className="text-[#64748b] font-medium">{slide.mode}</span>
                </div>

                <div className="flex items-center justify-between text-[11px]">
                  <span className="uppercase font-bold text-[#090d15] flex items-center gap-1.5">
                    <Building2 className="w-3 h-3 text-[#fa4d56]" />
                    WEBSITE:
                  </span>
                  <a
                    href={slide.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#64748b] hover:text-[#fa4d56] font-medium flex items-center gap-0.5 transition-colors"
                  >
                    <span>{slide.livePreview}</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              {/* Visit Official Website Button */}
              <a
                href={slide.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-center gap-2 bg-[#090d15] hover:bg-[#fa4d56] text-white font-mono font-bold text-xs uppercase tracking-wider py-2.5 rounded-xl transition-all duration-300 shadow-sm"
              >
                <span>Visit Official Website</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

            </div>
          </div>

        </div>

        {/* ========================================================
            4-FEATURE HORIZONTAL ROW
           ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {slide.features.map((feat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-[#e2e2da] shadow-[0_2px_12px_rgba(9,13,21,0.02)] flex items-start gap-3.5 hover:border-[#fa4d56]/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#fee2e2] text-[#fa4d56] flex items-center justify-center shrink-0">
                {feat.icon === "laptop" && <Monitor className="w-5 h-5" />}
                {feat.icon === "code" && <Code2 className="w-5 h-5" />}
                {feat.icon === "chart" && <TrendingUp className="w-5 h-5" />}
                {feat.icon === "users" && <Sparkles className="w-5 h-5" />}
              </div>
              <div>
                <h4 className="font-heading font-bold text-xs uppercase tracking-tight text-[#090d15] mb-1">
                  {feat.label}
                </h4>
                <p className="text-[11.5px] text-[#64748b] leading-snug">
                  {feat.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================
            SECTION NAVIGATION PILLS (Sticky-Ready Tab Bar)
           ======================================================== */}
        <div className="flex items-center justify-center mb-14">
          <div className="inline-flex items-center flex-wrap justify-center gap-1.5 p-1.5 rounded-full bg-white border border-[#e2e2da] shadow-[0_8px_24px_rgba(9,13,21,0.04)] backdrop-blur-md">
            <button
              type="button"
              onClick={() => scrollToSection("curriculum-overview")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "curriculum-overview"
                  ? "bg-[#090d15] text-white shadow-xs"
                  : "text-[#64748b] hover:text-[#090d15] hover:bg-[#fafaf8]"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-[#fa4d56]" />
              <span>Curriculum Overview</span>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("what-this-built")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "what-this-built"
                  ? "bg-[#090d15] text-white shadow-xs"
                  : "text-[#64748b] hover:text-[#090d15] hover:bg-[#fafaf8]"
              }`}
            >
              <Wrench className="w-3.5 h-3.5 text-[#fa4d56]" />
              <span>What This Built</span>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("technologies-tools")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "technologies-tools"
                  ? "bg-[#090d15] text-white shadow-xs"
                  : "text-[#64748b] hover:text-[#090d15] hover:bg-[#fafaf8]"
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#fa4d56]" />
              <span>Technologies & Tools</span>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("syllabus-modules")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "syllabus-modules"
                  ? "bg-[#090d15] text-white shadow-xs"
                  : "text-[#64748b] hover:text-[#090d15] hover:bg-[#fafaf8]"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 text-[#fa4d56]" />
              <span>Syllabus & Modules</span>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("career-scope")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "career-scope"
                  ? "bg-[#090d15] text-white shadow-xs"
                  : "text-[#64748b] hover:text-[#090d15] hover:bg-[#fafaf8]"
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5 text-[#fa4d56]" />
              <span>Career Scope</span>
            </button>
          </div>
        </div>

        {/* ========================================================
            SECTION 01: CURRICULUM OVERVIEW (Connected Step Columns)
           ======================================================== */}
        <section id="curriculum-overview" className="mb-20 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-4 flex flex-col pt-2">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-[#fa4d56] mb-3">
                <span className="px-2 py-0.5 rounded-md bg-[#fee2e2] text-[#fa4d56]">01</span>
                <span>› CURRICULUM OVERVIEW</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black uppercase font-heading tracking-tight text-[#090d15] leading-tight mb-4">
                A Well-Structured <span className="text-[#fa4d56] block">Learning Path</span>
              </h2>

              <p className="text-[13.5px] sm:text-[14px] text-[#475569] leading-relaxed mb-6 font-sans">
                {slide.curriculumIntro}
              </p>

              <div>
                <button
                  type="button"
                  onClick={() => scrollToSection("syllabus-modules")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fee2e2]/60 hover:bg-[#fee2e2] text-[#fa4d56] font-mono text-xs font-bold uppercase tracking-wider border border-[#fecaca] transition-all cursor-pointer"
                >
                  <span>Explore Syllabus</span>
                  <span className="text-sm">↓</span>
                </button>
              </div>
            </div>

            {/* Right Connected Step Cards (Timeline) */}
            <div className="lg:col-span-8">
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Horizontal subtle connector line (Desktop only) */}
                <div className="hidden md:block absolute top-5 left-10 right-10 h-[2px] bg-[#e2e2da] z-0" />

                {slide.curriculum.map((mod, idx) => (
                  <div key={idx} className="relative z-10 flex flex-col">
                    
                    {/* Numbered Red Circle Marker */}
                    <div className="w-9 h-9 rounded-full bg-[#fa4d56] text-white font-mono text-xs font-bold flex items-center justify-center shadow-md mb-4 ring-4 ring-[#fcfcf9]">
                      0{idx + 1}
                    </div>

                    {/* Step Card */}
                    <div className="p-5 rounded-2xl bg-white border border-[#e2e2da] shadow-[0_4px_20px_rgba(9,13,21,0.03)] h-full flex flex-col justify-between hover:border-[#fa4d56]/50 transition-colors">
                      <div>
                        <h3 className="font-heading font-bold text-sm uppercase tracking-tight text-[#090d15] mb-3 leading-snug">
                          {mod.title}
                        </h3>

                        <ul className="space-y-2">
                          {mod.topics.map((t, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-2 text-xs text-[#475569] leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#fa4d56] mt-1.5 shrink-0" />
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                ))}

              </div>
            </div>

          </div>
        </section>

        {/* ========================================================
            SECTION 02: WHAT THIS QUALIFICATION BUILT (Campus + Stats + 4 Cards)
           ======================================================== */}
        <section id="what-this-built" className="mb-20 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Campus Building Card with Stats Floating Bar */}
            <div className="lg:col-span-6 relative flex flex-col">
              <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] rounded-3xl overflow-hidden border border-[#e2e2da] shadow-[0_16px_40px_rgba(9,13,21,0.06)] group">
                {/* Campus Image */}
                <Image
                  src={slide.campusImage || "/images/education/ignou-campus.jpg"}
                  alt={`${slide.institution} Campus`}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d15]/90 via-[#090d15]/20 to-transparent" />

                {/* Dark Floating Stats Overlay at the bottom */}
                <div className="absolute inset-x-4 bottom-4 p-4 sm:p-5 rounded-2xl bg-[#090d15]/85 backdrop-blur-md border border-white/10 text-white flex items-center justify-around text-center">
                  <div>
                    <span className="font-heading font-black text-2xl sm:text-3xl text-white block">
                      {slide.stats.years}
                    </span>
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#94a3b8] block">
                      {slide.stats.yearsLabel}
                    </span>
                  </div>

                  <div className="w-[1px] h-8 bg-white/15" />

                  <div>
                    <span className="font-heading font-black text-2xl sm:text-3xl text-white block">
                      {slide.stats.metric1}
                    </span>
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#94a3b8] block">
                      {slide.stats.metric1Label}
                    </span>
                  </div>

                  <div className="w-[1px] h-8 bg-white/15" />

                  <div>
                    <span className="font-heading font-black text-2xl sm:text-3xl text-[#fa4d56] block">
                      {slide.stats.metric2}
                    </span>
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#94a3b8] block">
                      {slide.stats.metric2Label}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative + 2x2 Feature Grid */}
            <div className="lg:col-span-6 flex flex-col justify-between py-2">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-[#fa4d56] mb-3">
                  <span className="px-2 py-0.5 rounded-md bg-[#fee2e2] text-[#fa4d56]">02</span>
                  <span>› WHAT THIS QUALIFICATION BUILT</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black uppercase font-heading tracking-tight text-[#090d15] leading-tight mb-4">
                  More Than <span className="text-[#fa4d56]">Just a Degree</span>
                </h2>

                <p className="text-[13.5px] sm:text-[14px] text-[#475569] leading-relaxed mb-6 font-sans">
                  This journey helped me develop a strong technical foundation, problem-solving mindset, and the ability to work on real-world projects independently.
                </p>

                {/* 2x2 Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {slide.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white border border-[#e2e2da] shadow-[0_2px_12px_rgba(9,13,21,0.02)] hover:border-[#fa4d56]/40 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#fee2e2] text-[#fa4d56] flex items-center justify-center mb-2.5">
                        {renderCapabilityIcon(cap.icon)}
                      </div>
                      <h4 className="font-heading font-bold text-xs uppercase tracking-tight text-[#090d15] mb-1">
                        {cap.title}
                      </h4>
                      <p className="text-[11.5px] text-[#64748b] leading-relaxed">
                        {cap.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================
            SECTION 03: TECHNOLOGIES & TOOLS + CAREER POSSIBILITIES
           ======================================================== */}
        <section id="technologies-tools" className="mb-20 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left (7 cols): Tech Stack Grid (8 Cards) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-[#fa4d56] mb-3">
                <span className="px-2 py-0.5 rounded-md bg-[#fee2e2] text-[#fa4d56]">03</span>
                <span>› TECHNOLOGIES & DISCIPLINES</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black uppercase font-heading tracking-tight text-[#090d15] leading-tight mb-2">
                Tools & Technologies <span className="text-[#fa4d56]">I Learned</span>
              </h2>

              <p className="text-[13.5px] sm:text-[14px] text-[#475569] leading-relaxed mb-6 font-sans">
                A diverse set of technologies that helped me build practical skills and real-world applications.
              </p>

              {/* 4x2 Tech Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {slide.techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-[#e2e2da] shadow-[0_2px_12px_rgba(9,13,21,0.03)] hover:border-[#fa4d56] hover:shadow-md transition-all group flex flex-col items-center text-center justify-center min-h-[105px]"
                  >
                    {/* Tech Badge / Icon */}
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs text-white mb-2 shadow-2xs group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: tech.color || "#fa4d56" }}
                    >
                      {tech.name.substring(0, 2)}
                    </div>

                    <span className="font-heading font-bold text-xs uppercase tracking-tight text-[#090d15] group-hover:text-[#fa4d56] transition-colors block mb-0.5">
                      {tech.name}
                    </span>

                    <span className="font-mono text-[9px] font-semibold text-[#7c8ba1] uppercase tracking-wider block">
                      {tech.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right (5 cols): Career Possibilities Card */}
            <div id="career-scope" className="lg:col-span-5 scroll-mt-24">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e2e2da] shadow-[0_12px_36px_rgba(9,13,21,0.04)]">
                
                {/* Header with In Demand badge */}
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#fa4d56]" />
                    <h3 className="font-heading font-bold text-lg text-[#090d15] uppercase tracking-tight">
                      Career Possibilities
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#fa4d56] bg-[#fee2e2] px-2.5 py-1 rounded-full border border-[#fecaca]">
                    In Demand
                  </span>
                </div>

                <p className="text-xs text-[#64748b] leading-relaxed mb-5">
                  This qualification opens up a wide range of career opportunities in the tech industry.
                </p>

                {/* Career List with Arrows */}
                <div className="space-y-2">
                  {slide.careerOutcomes.map((career, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#fafaf8] border border-[#e2e2da]/70 hover:border-[#fa4d56]/40 hover:bg-white transition-all text-xs font-semibold text-[#090d15]"
                    >
                      <span className="text-[#fa4d56] font-bold">→</span>
                      <span>{career}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ========================================================
            SECTION 04: DETAILED SYLLABUS & MODULES (Breakdown)
           ======================================================== */}
        <section id="syllabus-modules" className="mb-20 scroll-mt-24">
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-9 border border-[#e2e2da] shadow-[0_8px_30px_rgba(9,13,21,0.03)]">
            
            {/* Header + View Mode Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#f1f1eb]">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-[#fa4d56] mb-1">
                  <span className="px-2 py-0.5 rounded-md bg-[#fee2e2] text-[#fa4d56]">04</span>
                  <span>› DETAILED SYLLABUS & MODULES</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase font-heading tracking-tight text-[#090d15]">
                  Semester Wise <span className="text-[#fa4d56]">Breakdown</span>
                </h2>
                <p className="text-xs text-[#64748b] mt-1">
                  A structured curriculum designed to build skills step by step.
                </p>
              </div>

              {/* View Mode Buttons */}
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="text-[#7c8ba1] text-[11px]">View Mode</span>
                <div className="p-1 rounded-full bg-[#f8f8f5] border border-[#e2e2da] flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setViewMode("card")}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold transition-all cursor-pointer ${
                      viewMode === "card"
                        ? "bg-[#090d15] text-white shadow-2xs"
                        : "text-[#64748b] hover:text-[#090d15]"
                    }`}
                  >
                    <LayoutGrid className="w-3 h-3" />
                    <span>Card View</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setViewMode("list")}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold transition-all cursor-pointer ${
                      viewMode === "list"
                        ? "bg-[#090d15] text-white shadow-2xs"
                        : "text-[#64748b] hover:text-[#090d15]"
                    }`}
                  >
                    <List className="w-3 h-3" />
                    <span>List View</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card View Layout */}
            {viewMode === "card" ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {slide.curriculum.map((module, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-[#fafaf8] border border-[#e2e2da] hover:border-[#fa4d56]/50 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Module Badge + Arrow */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#fa4d56] bg-[#fee2e2] px-2.5 py-1 rounded-md">
                          MODULE {idx + 1}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-white border border-[#e2e2da] group-hover:border-[#fa4d56] group-hover:text-[#fa4d56] flex items-center justify-center transition-colors">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      <h3 className="font-heading font-bold text-sm uppercase tracking-tight text-[#090d15] mb-4 leading-snug">
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
            ) : (
              /* List View Layout */
              <div className="space-y-4">
                {slide.curriculum.map((module, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#fafaf8] border border-[#e2e2da] hover:border-[#fa4d56]/40 transition-all"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#fa4d56] bg-[#fee2e2] px-2.5 py-1 rounded-md">
                          Module {idx + 1}
                        </span>
                        <h3 className="font-heading font-bold text-sm uppercase tracking-tight text-[#090d15]">
                          {module.title}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-[#7c8ba1]">
                        {module.topics.length} Key Topics
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-[#e5e5dc]">
                      {module.topics.map((topic, tIdx) => (
                        <div key={tIdx} className="flex items-center gap-2 text-xs text-[#475569]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#fa4d56] shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </section>

        {/* ========================================================
            BOTTOM SWITCHER BAR: Next & Previous Qualifications
           ======================================================== */}
        <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#e2e2da] shadow-[0_8px_30px_rgba(9,13,21,0.03)] flex flex-wrap items-center justify-between gap-4">
          
          {/* Previous Qualification */}
          <Link
            href={`/education/${prevSlide.id}`}
            className="group inline-flex items-center gap-3 text-left"
          >
            <div className="w-10 h-10 rounded-full bg-[#fee2e2] text-[#fa4d56] group-hover:bg-[#fa4d56] group-hover:text-white flex items-center justify-center transition-all group-hover:-translate-x-1 shrink-0">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7c8ba1] block">
                Previous Qualification
              </span>
              <span className="font-heading font-bold text-xs sm:text-sm uppercase tracking-tight text-[#090d15] group-hover:text-[#fa4d56] transition-colors block">
                {prevSlide.title} {prevSlide.highlightWord}
              </span>
            </div>
          </Link>

          {/* Center Overview Grid Icon */}
          <Link
            href="/#education"
            title="Return to Education Overview"
            className="w-10 h-10 rounded-full bg-[#fafaf8] border border-[#e2e2da] hover:border-[#fa4d56] hover:text-[#fa4d56] text-[#64748b] flex items-center justify-center transition-all shadow-2xs hover:scale-105"
          >
            <LayoutGrid className="w-4 h-4" />
          </Link>

          {/* Next Qualification */}
          <Link
            href={`/education/${nextSlide.id}`}
            className="group inline-flex items-center gap-3 text-right"
          >
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#7c8ba1] block">
                Next Qualification
              </span>
              <span className="font-heading font-bold text-xs sm:text-sm uppercase tracking-tight text-[#090d15] group-hover:text-[#fa4d56] transition-colors block">
                {nextSlide.title} {nextSlide.highlightWord}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#fee2e2] text-[#fa4d56] group-hover:bg-[#fa4d56] group-hover:text-white flex items-center justify-center transition-all group-hover:translate-x-1 shrink-0">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

        </div>

      </div>
    </div>
  );
}
