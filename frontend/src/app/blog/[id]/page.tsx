"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { articlesData } from "@/data/articles";
import {
  Home,
  Calendar,
  Clock,
  Eye,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  List,
  Mail,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Check,
  Lightbulb,
  Globe,
  HeartHandshake,
  Sparkles,
  Compass,
  BookOpen,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from "@/components/ui/BrandIcons";

export default function ArticleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const [copied, setCopied] = useState<boolean>(false);
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const [readingProgress, setReadingProgress] = useState<number>(25);
  const [activeSection, setActiveSection] = useState<number>(0);
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);

  // Match by id or slug
  const articleIndex = articlesData.findIndex(
    (a) => a.id === resolvedParams.id || a.slug === resolvedParams.id
  );

  if (articleIndex === -1) {
    notFound();
  }

  const article = articlesData[articleIndex];
  const prevArticle =
    articleIndex > 0
      ? articlesData[articleIndex - 1]
      : articlesData[articlesData.length - 1];
  const nextArticle =
    articleIndex < articlesData.length - 1
      ? articlesData[articleIndex + 1]
      : articlesData[0];

  // Dynamic article gallery (100% unique per article)
  const galleryImages =
    article.gallery && article.gallery.length === 4
      ? article.gallery
      : [
          {
            src: article.image || "/images/blogs/blog1/blog1.jpg",
            title: "Primary View",
            step: "01 / 04",
          },
          {
            src: "/images/blogs/blog4/blog1.jpg",
            title: "Wireframing",
            step: "02 / 04",
          },
          {
            src: "/images/blogs/blog7/blog1.jpg",
            title: "Development",
            step: "03 / 04",
          },
          {
            src: "/images/blogs/blog10/blog1.jpg",
            title: "Final UI",
            step: "04 / 04",
          },
        ];

  // Real-time Reading Progress & Active Section Tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(5, currentProgress)));
      }

      // Track active section for Table of Contents
      const sectionElements = [0, 1, 2, 3, 4].map((i) =>
        document.getElementById(`section-${i}`)
      );

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 260) {
            setActiveSection(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail("");
      setNewsletterSubscribed(false);
    }, 3500);
  };

  const scrollToSection = (index: number) => {
    const el = document.getElementById(`section-${index}`);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  const nextGallery = () => {
    setActiveGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevGallery = () => {
    setActiveGalleryIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  // TOC Section Titles matching the reference design
  const tocItems = [
    { id: 0, title: "The Anatomy of Modern Interface Design" },
    { id: 1, title: "Wireframing to Execution" },
    { id: 2, title: "Key Learnings & Future Horizons" },
    { id: 3, title: "Tools & Workflow" },
    { id: 4, title: "Final Thoughts" },
  ];

  const navigateToSection = (section: string) => {
    sessionStorage.setItem("portfolio_active_section", section);
    sessionStorage.setItem("portfolio_target_scroll", section);
    window.location.href = section === "home" ? "/" : `/${section}`;
  };

  return (
    <article className="min-h-screen bg-[#faf7f2] text-[#090d15] pt-20 sm:pt-24 pb-12 sm:pb-16 selection:bg-[#fa4d56] selection:text-white relative">
      {/* Decorative top ambient swirl glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[350px] bg-[#fa4d56]/5 rounded-full blur-[100px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            BREADCRUMBS (Scroll Reveal)
           ======================================================== */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#7c8ba1] mb-6 sm:mb-8"
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("home");
            }}
            className="hover:text-[#fa4d56] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </a>
          <span className="text-[#cbd5e1]">&gt;</span>
          <a
            href="/blog"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection("blog");
            }}
            className="hover:text-[#fa4d56] transition-colors cursor-pointer"
          >
            Blog
          </a>
          <span className="text-[#cbd5e1]">&gt;</span>
          <span className="text-[#090d15] font-semibold truncate max-w-[320px]">
            {article.title.includes(":") ? article.title.split(":")[0] : article.title}
          </span>
        </motion.nav>

        {/* ========================================================
            HERO TOP ROW: (LEFT: TITLE & META) + (RIGHT: 4-IMAGE COLLAGE)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-12">
          
          {/* LEFT COLUMN: BADGES, TITLE, SUBTITLE, AUTHOR, META */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Pill Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2.5 mb-4"
            >
              <span className="px-3.5 py-1 rounded-full bg-[#fa4d56] text-white font-mono text-[10.5px] font-bold uppercase tracking-wider shadow-xs">
                {article.category || "UI/UX DESIGN"}
              </span>
              <span className="px-3.5 py-1 rounded-full bg-white border border-[#e2e2da] text-[#7c8ba1] font-mono text-[10.5px] font-bold uppercase tracking-wider">
                ARTICLE #{article.articleNumber || "01"}
              </span>
            </motion.div>

            {/* Main Headline with Red Accent */}
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-black font-heading uppercase tracking-tight leading-[1.06] text-[#090d15] mb-4"
            >
              DESIGN UNRAVELED:{" "}
              <span className="text-[#fa4d56]">
                BEHIND THE SCENES OF UI/UX MAGIC
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
              className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6 font-normal"
            >
              {article.subtitle}
            </motion.p>

            {/* Author Profile Strip */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.24, ease: "easeOut" }}
              className="flex items-center gap-3.5 mb-6"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#fa4d56]/20 bg-[#0c0e12] shrink-0">
                <Image
                  src={article.author.avatar || "/images/about/about-avatar.png"}
                  alt={article.author.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-heading font-black text-sm sm:text-base text-[#090d15] uppercase tracking-tight flex items-center gap-1.5">
                  <span>{article.author.name}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" title="Verified Creator" />
                </div>
                <div className="text-xs text-[#64748b] font-medium">
                  {article.author.role}
                </div>
              </div>
            </motion.div>

            {/* Meta Stats Row (Date, Read Time, Views, Save) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-5 sm:gap-6 font-mono text-xs text-[#64748b] pt-2 border-t border-[#e8e8e3]"
            >
              <div className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#fa4d56]" />
                <span className="uppercase">{article.date || "21 MAY 2024"}</span>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#fa4d56]" />
                <span className="uppercase">{article.readTime || "8 MIN READ"}</span>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-[#fa4d56]" />
                <span>12.4K VIEWS</span>
              </div>
              <button
                onClick={() => setBookmarked(!bookmarked)}
                className={`inline-flex items-center gap-1.5 cursor-pointer transition-colors ${
                  bookmarked ? "text-[#fa4d56] font-bold" : "hover:text-[#fa4d56]"
                }`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? "fill-current" : ""}`} />
                <span>{bookmarked ? "SAVED" : "SAVE"}</span>
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: 4-IMAGE HERO COLLAGE */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-3 h-[360px] sm:h-[400px] lg:h-[420px]">
              
              {/* Left Large Card: Featured Workspace View (7 Columns) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="col-span-7 relative rounded-2xl overflow-hidden border border-[#27272a] shadow-lg group bg-[#0a0d12]"
              >
                <Image
                  src={galleryImages[activeGalleryIndex].src}
                  alt={galleryImages[activeGalleryIndex].title}
                  fill
                  priority
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Top Right Arrow Controls */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
                  <button
                    onClick={prevGallery}
                    className="w-7 h-7 rounded-full bg-black/60 hover:bg-[#fa4d56] text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
                    aria-label="Previous view"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextGallery}
                    className="w-7 h-7 rounded-full bg-black/60 hover:bg-[#fa4d56] text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
                    aria-label="Next view"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-3 left-3 z-10">
                  <span className="font-mono text-[10px] sm:text-[11px] uppercase font-bold tracking-wider text-white bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15">
                    {galleryImages[activeGalleryIndex].step} {galleryImages[activeGalleryIndex].title}
                  </span>
                </div>
              </motion.div>

              {/* Right Column Stacked (5 Columns) */}
              <div className="col-span-5 grid grid-rows-2 gap-3 h-full">
                
                {/* Top Card: Wireframing */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
                  onClick={() => setActiveGalleryIndex(1)}
                  className={`relative rounded-2xl overflow-hidden border cursor-pointer transition-all ${
                    activeGalleryIndex === 1
                      ? "border-[#fa4d56] ring-2 ring-[#fa4d56]/40 shadow-md"
                      : "border-[#27272a] hover:border-white/50"
                  } bg-[#0a0d12] group`}
                >
                  <Image
                    src={galleryImages[1].src}
                    alt={galleryImages[1].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors" />
                  <div className="absolute bottom-2.5 left-2.5">
                    <span className="font-mono text-[9px] sm:text-[9.5px] uppercase font-bold tracking-wider text-white bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15">
                      {galleryImages[1].step} {galleryImages[1].title}
                    </span>
                  </div>
                </motion.div>

                {/* Bottom Row: 2 Mini Cards (Development + Final UI) */}
                <div className="grid grid-cols-2 gap-3">
                  
                  {/* Development */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.28, ease: "easeOut" }}
                    onClick={() => setActiveGalleryIndex(2)}
                    className={`relative rounded-2xl overflow-hidden border cursor-pointer transition-all ${
                      activeGalleryIndex === 2
                        ? "border-[#fa4d56] ring-2 ring-[#fa4d56]/40 shadow-md"
                        : "border-[#27272a] hover:border-white/50"
                    } bg-[#0a0d12] group`}
                  >
                    <Image
                      src={galleryImages[2].src}
                      alt={galleryImages[2].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors" />
                    <div className="absolute bottom-2 left-2">
                      <span className="font-mono text-[8px] sm:text-[8.5px] uppercase font-bold tracking-wider text-white bg-black/75 backdrop-blur-md px-2 py-0.5 rounded border border-white/15">
                        {galleryImages[2].step} {galleryImages[2].title}
                      </span>
                    </div>
                  </motion.div>

                  {/* Final UI */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.36, ease: "easeOut" }}
                    onClick={() => setActiveGalleryIndex(3)}
                    className={`relative rounded-2xl overflow-hidden border cursor-pointer transition-all ${
                      activeGalleryIndex === 3
                        ? "border-[#fa4d56] ring-2 ring-[#fa4d56]/40 shadow-md"
                        : "border-[#27272a] hover:border-white/50"
                    } bg-[#0a0d12] group`}
                  >
                    <Image
                      src={galleryImages[3].src}
                      alt={galleryImages[3].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors" />
                    <div className="absolute bottom-2 left-2">
                      <span className="font-mono text-[8px] sm:text-[8.5px] uppercase font-bold tracking-wider text-white bg-black/75 backdrop-blur-md px-2 py-0.5 rounded border border-white/15">
                        {galleryImages[3].step} {galleryImages[3].title}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            PUBLICATION BRIEF & FAST-TRACK CHAPTER NAVIGATION BAR
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 sm:mb-12 rounded-3xl bg-white border border-[#e8e8e3] p-5 sm:p-7 shadow-xs relative overflow-hidden group hover:border-[#fa4d56]/40 transition-colors"
        >
          {/* Subtle top red accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#fa4d56] via-[#ff737b] to-transparent" />
          
          {/* Ambient background glow */}
          <div className="absolute -top-16 -right-16 w-52 h-52 bg-[#fa4d56]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left 7 Columns: Executive Brief & Architecture Highlights */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fff1f2] border border-[#fecdd3] text-[#fa4d56] font-mono text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#fa4d56]" />
                  <span>PUBLICATION EXECUTIVE BRIEF</span>
                </span>
                <span className="font-mono text-[10.5px] text-[#64748b]">
                  5 CHAPTERS &bull; {article.readTime || "8 MIN"} FULL READ
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-auto sm:ml-0" title="Published Case Study" />
              </div>

              <p className="text-sm sm:text-[15.5px] text-[#334155] leading-relaxed font-normal">
                An architectural study on <span className="text-[#fa4d56] font-semibold bg-[#fff1f2] px-1.5 py-0.5 rounded border border-[#fecdd3]/60">intentional visual ergonomics</span>, eliminating layout shifts, and engineering intuitive digital product identities without compromising utility.
              </p>

              {/* Architecture Focus Badges */}
              <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-[#f1f1eb]">
                <span className="font-mono text-[10px] uppercase font-bold text-[#94a3b8] mr-1">
                  CORE FOCUS:
                </span>
                {[
                  "Design Systems",
                  "Visual Ergonomics",
                  "Modular Rhythm",
                  "WCAG AAA Contrast",
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[10.5px] text-[#475569] bg-[#faf7f2] hover:bg-[#fff1f2] hover:text-[#fa4d56] px-2.5 py-1 rounded-lg border border-[#e8e8e3] transition-colors"
                  >
                    #{item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: Fast-Track Chapter Nav */}
            <div className="lg:col-span-5 bg-[#faf7f2] p-4 sm:p-5 rounded-2xl border border-[#e8e8e3]">
              <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-[#e8e8e3]">
                <span className="font-mono text-[11px] uppercase font-bold tracking-wider text-[#090d15] flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#fa4d56]" />
                  <span>FAST-TRACK CHAPTER NAV</span>
                </span>
                <span className="font-mono text-[10.5px] text-[#fa4d56] font-bold">
                  0{activeSection + 1} / 05
                </span>
              </div>

              <div className="space-y-1.5">
                {tocItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left font-mono text-[11px] py-1.5 px-2.5 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between group/pill ${
                        isActive
                          ? "bg-white text-[#fa4d56] font-bold shadow-2xs border border-[#fecdd3]"
                          : "text-[#64748b] hover:text-[#090d15] hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span
                          className={`w-4 h-4 rounded-md text-[9.5px] font-bold flex items-center justify-center shrink-0 ${
                            isActive
                              ? "bg-[#fa4d56] text-white"
                              : "bg-[#e8e8e3] text-[#475569]"
                          }`}
                        >
                          0{item.id + 1}
                        </span>
                        <span className="truncate">{item.title}</span>
                      </div>
                      <ArrowRight
                        className={`w-3 h-3 shrink-0 transition-transform ${
                          isActive
                            ? "text-[#fa4d56] translate-x-0.5"
                            : "text-[#cbd5e1] group-hover/pill:text-[#fa4d56] group-hover/pill:translate-x-0.5"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </motion.div>

        {/* ========================================================
            MAIN 2-COLUMN EDITORIAL LAYOUT (SIDEBAR + CONTENT STREAM)
           ======================================================== */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
          
          {/* ======================================================
              RIGHT SIDEBAR: TOC, AUTHOR, NEWSLETTER, RELATED, TOPICS
             ====================================================== */}
          <aside className="w-full lg:w-[320px] shrink-0 space-y-6 lg:sticky lg:top-24 order-2 lg:order-2">
            
            {/* 1. TABLE OF CONTENTS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55 }}
              className="bg-white rounded-2xl p-5 border border-[#e8e8e3] shadow-xs"
            >
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase font-bold tracking-widest text-[#090d15] mb-3 pb-2.5 border-b border-[#f1f1eb]">
                <List className="w-3.5 h-3.5 text-[#fa4d56]" />
                <span>TABLE OF CONTENTS</span>
              </div>
              <nav className="space-y-1">
                {tocItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left font-mono text-xs py-2 px-3 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isActive
                          ? "bg-[#fee2e2]/80 text-[#fa4d56] font-bold shadow-2xs border-l-2 border-[#fa4d56] pl-2.5"
                          : "text-[#64748b] hover:text-[#090d15] hover:bg-[#faf7f2]"
                      }`}
                    >
                      <span className="truncate pr-2">
                        0{item.id + 1}. {item.title}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Reading Progress */}
              <div className="mt-4 pt-3.5 border-t border-[#f1f1eb]">
                <div className="flex items-center justify-between font-mono text-[11px] font-bold text-[#64748b] mb-1.5">
                  <span>READING PROGRESS</span>
                  <span className="text-[#fa4d56]">{Math.round(readingProgress)}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#f1f1eb] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#fa4d56] to-[#ff737b] transition-[width] duration-150"
                    style={{ width: `${readingProgress}%` }}
                  />
                </div>
              </div>
            </motion.div>

            {/* 2. AUTHOR CAPSULE CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="bg-white rounded-2xl p-5 border border-[#e8e8e3] shadow-xs text-center"
            >
              <div className="relative w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-[#fa4d56]/20 bg-[#0c0e12] mb-3">
                <Image
                  src={article.author.avatar || "/images/about/about-avatar.png"}
                  alt={article.author.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <h3 className="font-heading font-black text-base uppercase text-[#090d15] flex items-center justify-center gap-1.5">
                <span>{article.author.name}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              </h3>
              <p className="text-[11px] font-mono text-[#64748b] font-medium mt-0.5 mb-2.5">
                UI/UX Designer &amp; Full Stack Developer
              </p>
              <p className="text-xs text-[#475569] leading-relaxed mb-4">
                I share practical insights on design, development, and building digital products.
              </p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#fa4d56] hover:bg-[#e03b44] text-white py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-xs mb-4"
                >
                  <span>LET&apos;S CONNECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
              <div className="flex items-center justify-center gap-2.5 text-[#64748b]">
                <a
                  href="https://x.com/toughefforts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#faf7f2] hover:bg-black hover:text-white flex items-center justify-center transition-all hover:-translate-y-0.5"
                  title="Twitter / X"
                >
                  <TwitterIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/toughefforts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#faf7f2] hover:bg-[#0a66c2] hover:text-white flex items-center justify-center transition-all hover:-translate-y-0.5"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com/toughefforts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#faf7f2] hover:bg-[#e1306c] hover:text-white flex items-center justify-center transition-all hover:-translate-y-0.5"
                  title="Instagram"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://github.com/toughefforts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#faf7f2] hover:bg-[#090d15] hover:text-white flex items-center justify-center transition-all hover:-translate-y-0.5"
                  title="GitHub"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/"
                  className="w-8 h-8 rounded-lg bg-[#faf7f2] hover:bg-[#fa4d56] hover:text-white flex items-center justify-center transition-all hover:-translate-y-0.5"
                  title="Portfolio"
                >
                  <Globe className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* 3. NEWSLETTER INBOX CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="bg-gradient-to-br from-[#fff1f2] via-[#ffe4e6]/50 to-[#fed7aa]/25 rounded-2xl p-5 border border-[#fecdd3] shadow-xs"
            >
              <div className="w-9 h-9 rounded-xl bg-white border border-[#fecdd3] flex items-center justify-center text-[#fa4d56] mb-3 shadow-xs">
                <Mail className="w-4 h-4" />
              </div>
              <h4 className="font-heading font-black text-base uppercase text-[#090d15] leading-snug mb-1">
                Get the Latest Articles in Your Inbox
              </h4>
              <p className="text-xs text-[#64748b] leading-relaxed mb-4">
                Join my newsletter to get insights on design, development and tech directly in your inbox.
              </p>
              {newsletterSubscribed ? (
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-mono font-bold text-center border border-emerald-200">
                  Subscribed! Check your inbox soon.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-1.5">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 min-w-0 bg-white border border-[#fecdd3] rounded-xl px-3 py-2 text-xs text-[#090d15] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#fa4d56]"
                  />
                  <button
                    type="submit"
                    className="w-9 h-9 rounded-xl bg-[#fa4d56] hover:bg-[#e03b44] text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer shadow-xs"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* 4. RELATED ARTICLES */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="bg-white rounded-2xl p-5 border border-[#e8e8e3] shadow-xs"
            >
              <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-[#f1f1eb]">
                <span className="font-mono text-[11px] uppercase font-bold tracking-widest text-[#090d15]">
                  RELATED ARTICLES
                </span>
                <a
                  href="/blog"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToSection("blog");
                  }}
                  className="font-mono text-[10.5px] uppercase font-bold text-[#fa4d56] hover:underline cursor-pointer"
                >
                  View All &rarr;
                </a>
              </div>
              <div className="space-y-3">
                {articlesData
                  .filter((a) => a.id !== article.id)
                  .slice(0, 3)
                  .map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/blog/${rel.id}`}
                      className="flex items-center gap-3 group transition-transform hover:translate-x-1"
                    >
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-[#0c0e12]">
                        <Image
                          src={rel.image}
                          alt={rel.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="min-w-0">
                        <h5 className="font-heading font-bold text-xs uppercase text-[#090d15] group-hover:text-[#fa4d56] transition-colors line-clamp-1">
                          {rel.title.includes(":") ? rel.title.split(":")[1].trim() : rel.title}
                        </h5>
                        <div className="font-mono text-[9.5px] text-[#94a3b8] mt-0.5">
                          {rel.category} &bull; {rel.readTime}
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </motion.div>

            {/* 5. POPULAR TOPICS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="bg-white rounded-2xl p-5 border border-[#e8e8e3] shadow-xs"
            >
              <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-[#f1f1eb]">
                <span className="font-mono text-[11px] uppercase font-bold tracking-widest text-[#090d15]">
                  POPULAR TOPICS
                </span>
                <a
                  href="/blog"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToSection("blog");
                  }}
                  className="font-mono text-[10.5px] uppercase font-bold text-[#fa4d56] hover:underline cursor-pointer"
                >
                  View All &rarr;
                </a>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "UI/UX Design",
                  "Web Development",
                  "Design Systems",
                  "Frontend",
                  "Creative Process",
                  "Tools & Workflow",
                ].map((topic) => (
                  <motion.span
                    key={topic}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-2.5 py-1 rounded-lg bg-[#faf7f2] hover:bg-[#fa4d56] hover:text-white border border-[#e8e8e3] font-mono text-[10.5px] text-[#64748b] transition-colors cursor-pointer"
                  >
                    {topic}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* 6. INSPIRATIONAL QUOTE BOX */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="bg-white rounded-2xl p-5 border border-[#e8e8e3] shadow-xs relative overflow-hidden"
            >
              <span className="text-4xl text-[#fa4d56] font-serif leading-none block mb-1 opacity-80">
                &ldquo;
              </span>
              <p className="font-serif italic text-sm text-[#64748b] leading-relaxed mb-3">
                Good design is not just what it looks like, but how it makes people feel.
              </p>
              <div className="font-mono text-[11px] font-bold text-[#7c8ba1] uppercase">
                &mdash; Steve Jobs
              </div>
            </motion.div>
          </aside>

          {/* ======================================================
              LEFT MAIN EDITORIAL ARTICLE STREAM
             ====================================================== */}
          <main className="flex-1 min-w-0 w-full order-1 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#e8e8e3] shadow-xs"
            >
              
              {/* SECTION 01 (Scroll Motion) */}
              <section id="section-0" className="mb-14">
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="flex items-start gap-4 mb-4"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-4xl sm:text-5xl font-black font-heading bg-gradient-to-br from-[#fa4d56] to-[#e11d48] bg-clip-text text-transparent leading-none select-none tracking-tight">
                      01.
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fa4d56] mt-2 shadow-[0_0_8px_rgba(250,77,86,0.6)]" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#fff1f2] border border-[#fecdd3] text-[#fa4d56] font-mono text-[10px] font-bold tracking-widest uppercase mb-1.5 shadow-2xs">
                      <Sparkles className="w-3 h-3 text-[#fa4d56]" />
                      <span>SECTION 01 &bull; FOUNDATION</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-[26px] font-black font-heading uppercase text-[#090d15] tracking-tight leading-snug">
                      THE ANATOMY OF <span className="text-[#fa4d56] relative inline-block">MODERN INTERFACE</span> DESIGN
                    </h2>
                    <div className="flex items-center gap-2.5 mt-1.5">
                      <span className="w-6 h-[2px] bg-gradient-to-r from-[#fa4d56] to-transparent shrink-0" />
                      <p className="font-serif italic text-sm sm:text-base text-[#475569] leading-relaxed">
                        Moving from cosmetic ornamentation to <span className="text-[#fa4d56] font-medium not-italic font-sans underline decoration-[#fa4d56]/40 underline-offset-4">intentional visual ergonomics</span>.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Paragraphs with Drop Cap on First Paragraph */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.55, delay: 0.08 }}
                  className="mt-6 space-y-4 text-[15px] sm:text-[16.5px] text-[#334155] leading-[1.8] font-normal tracking-[-0.01em]"
                >
                  <p>
                    <span className="float-left text-5xl sm:text-6xl font-black font-heading text-[#fa4d56] pr-3 pt-1 leading-none select-none drop-shadow-[0_2px_8px_rgba(250,77,86,0.25)]">
                      B
                    </span>
                    uilding software that commands attention begins with an <span className="text-[#fa4d56] font-semibold bg-[#fff1f2] px-1.5 py-0.5 rounded border border-[#fecdd3]/60">uncompromising commitment to clarity</span>. In an ecosystem saturated with generic templates and uninspired cards, modern interfaces must establish an <span className="text-[#fa4d56] font-semibold">immediate visual signature</span> without sacrificing utility.
                  </p>
                  <p>
                    When architecting the visual grammar for this platform, <span className="text-[#fa4d56] font-semibold">every contrast ratio, margin multiplier</span>, and typography pairing was calibrated against real user cognitive load. High-contrast typography paired with tailored dark canvas backdrops ensures <span className="text-[#fa4d56] font-semibold">instant hierarchy recognition</span>.
                  </p>
                </motion.div>

                {/* Pull Quote (Scroll Scale-In Motion) */}
                <motion.blockquote
                  initial={{ opacity: 0, x: -25, scale: 0.98 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="my-8 p-6 rounded-2xl bg-gradient-to-r from-[#fff5f5] via-[#fff8f8] to-white border-l-4 border-[#fa4d56] relative shadow-xs"
                >
                  <div className="flex items-center gap-2 mb-2 font-mono text-[10px] uppercase font-bold text-[#fa4d56]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fa4d56]" />
                    <span>PHILOSOPHICAL MAXIM</span>
                  </div>
                  <span className="text-4xl text-[#fa4d56] font-serif leading-none block mb-1 opacity-70">
                    &ldquo;
                  </span>
                  <p className="font-serif italic text-base sm:text-lg text-[#64748b] leading-relaxed">
                    True interface sophistication is achieved not when there is nothing left to add, but when <span className="text-[#fa4d56] font-semibold not-italic font-sans">nothing can be taken away</span> without weakening the experience.
                  </p>
                </motion.blockquote>

                {/* Wide Media Card: UI/UX Process Mockup (Zoom Motion) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.65, delay: 0.08 }}
                  className="my-8 relative aspect-[16/8] sm:aspect-[16/7] w-full rounded-2xl overflow-hidden border border-[#27272a] shadow-lg bg-[#0a0d12] group"
                >
                  <Image
                    src={article.sectionMedia || galleryImages[0]?.src || article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3.5 left-4 z-10">
                    <span className="font-mono text-[10.5px] uppercase font-bold tracking-wider text-white bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15">
                      {article.category} PROCESS ARCHIVE
                    </span>
                  </div>
                </motion.div>

                {/* Core Architectural Takeaways Checklist (Staggered Children Motion) */}
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.55 }}
                  className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#fffbfa] to-[#fff5f5]/70 border border-[#fecdd3] space-y-3 shadow-2xs"
                >
                  <div className="font-mono text-[11px] uppercase font-bold tracking-widest text-[#090d15] flex items-center justify-between gap-2 mb-2 pb-2 border-b border-[#fa4d56]/15">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#fa4d56]" />
                      <span>CORE ARCHITECTURAL <span className="text-[#fa4d56]">TAKEAWAYS</span></span>
                    </div>
                    <span className="text-[10px] text-[#fa4d56] bg-[#fff1f2] border border-[#fecdd3] px-2 py-0.5 rounded-full font-bold">
                      VERIFIED
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {[
                      {
                        lead: "Modular typography rhythm",
                        highlight: "absolute alignment",
                        rest: "across responsive viewports.",
                      },
                      {
                        lead: "Curated accent palette centered on",
                        highlight: "vibrant coral (#fa4d56)",
                        rest: "for high-impact focal points.",
                      },
                      {
                        lead: "Micro-interactions designed as",
                        highlight: "tactile feedback",
                        rest: "rather than decorative distractions.",
                      },
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -14 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: idx * 0.1 }}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155] leading-relaxed"
                      >
                        <span className="w-4 h-4 rounded-full bg-[#fa4d56] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>
                          {item.lead} <span className="text-[#fa4d56] font-semibold">{item.highlight}</span> {item.rest}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </section>

              {/* SECTION 02 (Scroll Motion) */}
              <section id="section-1" className="mb-14 pt-10 border-t border-[#f1f1eb]">
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.55 }}
                  className="flex items-start gap-4 mb-4"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-4xl sm:text-5xl font-black font-heading bg-gradient-to-br from-[#fa4d56] to-[#e11d48] bg-clip-text text-transparent leading-none select-none tracking-tight">
                      02.
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fa4d56] mt-2 shadow-[0_0_8px_rgba(250,77,86,0.6)]" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#fff1f2] border border-[#fecdd3] text-[#fa4d56] font-mono text-[10px] font-bold tracking-widest uppercase mb-1.5 shadow-2xs">
                      <Sparkles className="w-3 h-3 text-[#fa4d56]" />
                      <span>SECTION 02 &bull; PROTOTYPING</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-[26px] font-black font-heading uppercase text-[#090d15] tracking-tight leading-snug">
                      WIREFRAMING TO <span className="text-[#fa4d56] relative inline-block">HIGH-FIDELITY</span> EXECUTION
                    </h2>
                    <div className="flex items-center gap-2.5 mt-1.5">
                      <span className="w-6 h-[2px] bg-gradient-to-r from-[#fa4d56] to-transparent shrink-0" />
                      <p className="font-serif italic text-sm sm:text-base text-[#475569] leading-relaxed">
                        Bridging the gap between <span className="text-[#fa4d56] font-medium not-italic font-sans underline decoration-[#fa4d56]/40 underline-offset-4">conceptual sketchbook ideation</span> and production code.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.55, delay: 0.08 }}
                  className="mt-6 space-y-4 text-[15px] sm:text-[16.5px] text-[#334155] leading-[1.8] font-normal tracking-[-0.01em]"
                >
                  <p>
                    The journey from a physical notebook sketch to an <span className="text-[#fa4d56] font-semibold bg-[#fff1f2] px-1.5 py-0.5 rounded border border-[#fecdd3]/60">interactive web component</span> requires rapid validation. We start with <span className="text-[#fa4d56] font-semibold">low-fidelity skeletal layouts</span> to test information density and screen balance before touching pixel-perfect styling.
                  </p>
                  <p>
                    Once hierarchy is locked, component tokens are translated into <span className="text-[#fa4d56] font-semibold">atomic design elements</span>: buttons, badges, typography scales, and glassmorphic cards. This systematic approach ensures that every page transition feels continuous and cohesive.
                  </p>
                </motion.div>

                {/* 2-Column Comparison Grid with Animated Arrow */}
                <div className="my-8 relative grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  
                  {/* Left Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-[#fbf8f4] p-3.5 rounded-2xl border border-[#e8dfd5] overflow-hidden group hover:border-[#fa4d56]/40 transition-colors"
                  >
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-3 bg-[#0c0e12]">
                      <Image
                        src={article.comparisonImages?.left?.src || galleryImages[1]?.src || "/images/blogs/blog4/blog1.jpg"}
                        alt={article.comparisonImages?.left?.title || "From Ideas on Paper"}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="font-heading font-black text-sm uppercase text-[#090d15] group-hover:text-[#fa4d56] transition-colors">
                      {article.comparisonImages?.left?.title || "From Ideas on Paper"}
                    </h4>
                    <p className="text-xs text-[#64748b] leading-relaxed mt-1">
                      {article.comparisonImages?.left?.desc || "Early sketches help visualize structure and flow before moving to digital design."}
                    </p>
                  </motion.div>

                  {/* Right Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-[#fbf8f4] p-3.5 rounded-2xl border border-[#e8dfd5] overflow-hidden group hover:border-[#fa4d56]/40 transition-colors"
                  >
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-3 bg-[#0c0e12]">
                      <Image
                        src={article.comparisonImages?.right?.src || galleryImages[2]?.src || "/images/blogs/blog7/blog1.jpg"}
                        alt={article.comparisonImages?.right?.title || "To Pixel-Perfect Execution"}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="font-heading font-black text-sm uppercase text-[#090d15] group-hover:text-[#fa4d56] transition-colors">
                      {article.comparisonImages?.right?.title ? (
                        <span>{article.comparisonImages.right.title}</span>
                      ) : (
                        <span>To <span className="text-[#fa4d56]">Pixel-Perfect</span> Execution</span>
                      )}
                    </h4>
                    <p className="text-xs text-[#64748b] leading-relaxed mt-1">
                      {article.comparisonImages?.right?.desc || "Refined into a clean, high-fidelity design with modern UI components."}
                    </p>
                  </motion.div>

                  {/* Floating Middle Chevron Circle with Pop-in Rotation */}
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 18, delay: 0.3 }}
                    className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-[#e2e2da] shadow-md items-center justify-center text-[#fa4d56] z-10 pointer-events-none"
                  >
                    <ChevronRight className="w-4 h-4 stroke-[3]" />
                  </motion.div>
                </div>

                {/* Core Takeaways */}
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.55 }}
                  className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#fffbfa] to-[#fff5f5]/70 border border-[#fecdd3] space-y-3 shadow-2xs"
                >
                  <div className="font-mono text-[11px] uppercase font-bold tracking-widest text-[#090d15] flex items-center justify-between gap-2 mb-2 pb-2 border-b border-[#fa4d56]/15">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#fa4d56]" />
                      <span>CORE ARCHITECTURAL <span className="text-[#fa4d56]">TAKEAWAYS</span></span>
                    </div>
                    <span className="text-[10px] text-[#fa4d56] bg-[#fff1f2] border border-[#fecdd3] px-2 py-0.5 rounded-full font-bold">
                      VERIFIED
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {[
                      {
                        lead: "Eliminating layout shifts (CLS) through",
                        highlight: "fixed aspect ratio media wrappers",
                        rest: ".",
                      },
                      {
                        lead: "Adaptive dark themes with",
                        highlight: "calibrated ambient radial gradients",
                        rest: ".",
                      },
                      {
                        lead: "Accessibility audits validating contrast ratios",
                        highlight: "exceeding WCAG AAA standards",
                        rest: ".",
                      },
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -14 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: idx * 0.1 }}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155] leading-relaxed"
                      >
                        <span className="w-4 h-4 rounded-full bg-[#fa4d56] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>
                          {item.lead} <span className="text-[#fa4d56] font-semibold">{item.highlight}</span>{item.rest}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </section>

              {/* SECTION 03 (Scroll Motion) */}
              <section id="section-2" className="mb-14 pt-10 border-t border-[#f1f1eb]">
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.55 }}
                  className="flex items-start gap-4 mb-4"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-4xl sm:text-5xl font-black font-heading bg-gradient-to-br from-[#fa4d56] to-[#e11d48] bg-clip-text text-transparent leading-none select-none tracking-tight">
                      03.
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fa4d56] mt-2 shadow-[0_0_8px_rgba(250,77,86,0.6)]" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#fff1f2] border border-[#fecdd3] text-[#fa4d56] font-mono text-[10px] font-bold tracking-widest uppercase mb-1.5 shadow-2xs">
                      <Sparkles className="w-3 h-3 text-[#fa4d56]" />
                      <span>SECTION 03 &bull; TELEMETRY</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-[26px] font-black font-heading uppercase text-[#090d15] tracking-tight leading-snug">
                      KEY LEARNINGS &amp; <span className="text-[#fa4d56] relative inline-block">FUTURE HORIZONS</span>
                    </h2>
                    <div className="flex items-center gap-2.5 mt-1.5">
                      <span className="w-6 h-[2px] bg-gradient-to-r from-[#fa4d56] to-transparent shrink-0" />
                      <p className="font-serif italic text-sm sm:text-base text-[#475569] leading-relaxed">
                        What data taught us about <span className="text-[#fa4d56] font-medium not-italic font-sans underline decoration-[#fa4d56]/40 underline-offset-4">interactive customer engagement</span>.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.55, delay: 0.08 }}
                  className="mt-6 space-y-4 text-[15px] sm:text-[16.5px] text-[#334155] leading-[1.8] font-normal tracking-[-0.01em]"
                >
                  <p>
                    Post-launch telemetry demonstrated a <span className="text-[#fa4d56] font-bold bg-[#fff1f2] px-1.5 py-0.5 rounded border border-[#fecdd3]/60">+48% increase</span> in average session duration. Users spent significantly more time interacting with dynamic spotlights, category filters, and curated portfolios.
                  </p>
                  <p>
                    As web technologies evolve, bridging <span className="text-[#fa4d56] font-semibold">engineering rigor with aesthetic excellence</span> will remain the definitive competitive advantage for digital products.
                  </p>
                </motion.div>

                {/* 2-Column Side by Side Card: Image Left + Callout Right */}
                <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.55 }}
                    className="relative aspect-[16/10] sm:aspect-auto sm:h-full rounded-2xl overflow-hidden border border-[#27272a] bg-[#0c0e12] min-h-[180px] group"
                  >
                    <Image
                      src={article.processImage?.src || galleryImages[3]?.src || "/images/blogs/blog10/blog1.jpg"}
                      alt={article.processImage?.caption || "Process Milestone"}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 text-white font-mono text-[10px] uppercase font-bold tracking-wider bg-black/60 px-2.5 py-1 rounded">
                      {article.processImage?.caption || "Ideas Design Develop Launch."}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.55, delay: 0.12 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-[#fff1f2] via-[#ffe4e6]/40 to-[#fed7aa]/20 border border-[#fecdd3] flex flex-col justify-center shadow-xs"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#fa4d56] text-white flex items-center justify-center mb-3 shadow-xs">
                      <Lightbulb className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <h4 className="font-heading font-black text-base uppercase text-[#090d15] mb-1.5">
                      Designing for <span className="text-[#fa4d56]">People</span>, Not Just Screens
                    </h4>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      A great interface disappears, letting users focus on what <span className="text-[#fa4d56] font-semibold">truly matters</span>.
                    </p>
                  </motion.div>
                </div>
              </section>

              {/* SECTION 04: TOOLS & WORKFLOW (Scroll Motion) */}
              <section id="section-3" className="mb-14 pt-10 border-t border-[#f1f1eb]">
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.55 }}
                  className="flex items-start gap-4 mb-4"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-4xl sm:text-5xl font-black font-heading bg-gradient-to-br from-[#fa4d56] to-[#e11d48] bg-clip-text text-transparent leading-none select-none tracking-tight">
                      04.
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fa4d56] mt-2 shadow-[0_0_8px_rgba(250,77,86,0.6)]" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#fff1f2] border border-[#fecdd3] text-[#fa4d56] font-mono text-[10px] font-bold tracking-widest uppercase mb-1.5 shadow-2xs">
                      <Sparkles className="w-3 h-3 text-[#fa4d56]" />
                      <span>SECTION 04 &bull; TECH STACK</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-[26px] font-black font-heading uppercase text-[#090d15] tracking-tight leading-snug">
                      TOOLS &amp; <span className="text-[#fa4d56] relative inline-block">WORKFLOW</span>
                    </h2>
                    <div className="flex items-center gap-2.5 mt-1.5">
                      <span className="w-6 h-[2px] bg-gradient-to-r from-[#fa4d56] to-transparent shrink-0" />
                      <p className="font-serif italic text-sm sm:text-base text-[#475569] leading-relaxed">
                        The modern stack powering <span className="text-[#fa4d56] font-medium not-italic font-sans underline decoration-[#fa4d56]/40 underline-offset-4">rapid prototyping to scalable code</span>.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.55, delay: 0.08 }}
                  className="mt-6 space-y-4 text-[15px] sm:text-[16.5px] text-[#334155] leading-[1.8] font-normal tracking-[-0.01em]"
                >
                  <p>
                    Streamlining our design-to-code pipeline required tight integration between <span className="text-[#fa4d56] font-semibold">Figma component variants</span> and <span className="text-[#fa4d56] font-semibold">React design tokens</span>. By establishing unified CSS variables for elevation, radii, and micro-delays, handoff became <span className="text-[#fa4d56] font-semibold bg-[#fff1f2] px-1.5 py-0.5 rounded border border-[#fecdd3]/60">completely frictionless</span>.
                  </p>
                </motion.div>

                {/* Modern Stack Pill Chips (Staggered Pop-In) */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="my-6 flex flex-wrap gap-2.5"
                >
                  {["Figma", "Next.js", "React 19", "Tailwind CSS", "TypeScript", "Framer Motion"].map((tool, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3.5 py-1.5 rounded-full bg-[#fbf8f4] hover:bg-[#fa4d56] hover:text-white border border-[#e8dfd5] hover:border-[#fa4d56] font-mono text-xs font-bold text-[#090d15] shadow-2xs transition-all duration-200 cursor-pointer flex items-center gap-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fa4d56] group-hover:bg-white transition-colors" />
                      <span>{tool}</span>
                    </motion.span>
                  ))}
                </motion.div>
              </section>

              {/* SECTION 05: FINAL THOUGHTS (Scroll Motion) */}
              <section id="section-4" className="mb-10 pt-10 border-t border-[#f1f1eb]">
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.55 }}
                  className="flex items-start gap-4 mb-4"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-4xl sm:text-5xl font-black font-heading bg-gradient-to-br from-[#fa4d56] to-[#e11d48] bg-clip-text text-transparent leading-none select-none tracking-tight">
                      05.
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fa4d56] mt-2 shadow-[0_0_8px_rgba(250,77,86,0.6)]" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#fff1f2] border border-[#fecdd3] text-[#fa4d56] font-mono text-[10px] font-bold tracking-widest uppercase mb-1.5 shadow-2xs">
                      <Sparkles className="w-3 h-3 text-[#fa4d56]" />
                      <span>SECTION 05 &bull; CONCLUSION</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-[26px] font-black font-heading uppercase text-[#090d15] tracking-tight leading-snug">
                      FINAL <span className="text-[#fa4d56] relative inline-block">THOUGHTS</span>
                    </h2>
                    <div className="flex items-center gap-2.5 mt-1.5">
                      <span className="w-6 h-[2px] bg-gradient-to-r from-[#fa4d56] to-transparent shrink-0" />
                      <p className="font-serif italic text-sm sm:text-base text-[#475569] leading-relaxed">
                        Empowering digital experiences that <span className="text-[#fa4d56] font-medium not-italic font-sans underline decoration-[#fa4d56]/40 underline-offset-4">leave a lasting mark</span>.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.55, delay: 0.08 }}
                  className="mt-6 space-y-4 text-[15px] sm:text-[16.5px] text-[#334155] leading-[1.8] font-normal tracking-[-0.01em]"
                >
                  <p>
                    Every thoughtful digital artifact is built on thousands of <span className="text-[#fa4d56] font-semibold">deliberate, unseen decisions</span>. As designers and engineers, our true craft lies in making complexity look <span className="text-[#fa4d56] font-semibold bg-[#fff1f2] px-1.5 py-0.5 rounded border border-[#fecdd3]/60">deceptively effortless</span>.
                  </p>
                </motion.div>
              </section>

              {/* TAGS ROW (Scroll Reveal) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className="pt-6 border-t border-[#f1f1eb] flex flex-wrap items-center gap-2 mb-10"
              >
                <span className="font-mono text-xs uppercase font-bold text-[#090d15] mr-1">
                  TAGS:
                </span>
                {["UI/UX Design", "Creative Process", "Visual Hierarchy", "Frontend Architecture"].map(
                  (tag, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3.5 py-1 rounded-full bg-[#faf7f2] hover:bg-[#fa4d56] hover:text-white border border-[#e8e8e3] font-mono text-[11px] text-[#475569] transition-colors cursor-pointer"
                    >
                      #{tag}
                    </motion.span>
                  )
                )}
              </motion.div>

              {/* ENJOYED THIS PUBLICATION? BAR */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55 }}
                className="p-6 rounded-2xl bg-[#faf7f2] border border-[#e8e8e3] flex flex-col sm:flex-row items-center justify-between gap-4 mb-10"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#fee2e2] text-[#fa4d56] flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-base uppercase text-[#090d15]">
                      ENJOYED THIS PUBLICATION?
                    </h4>
                    <p className="text-xs text-[#64748b] mt-0.5">
                      Share this case study with fellow engineers and designers.
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleShare}
                  className="px-5 py-2.5 bg-[#090d15] hover:bg-[#fa4d56] text-white font-mono text-xs font-bold uppercase rounded-xl transition-colors cursor-pointer inline-flex items-center gap-1.5 shrink-0 shadow-xs"
                >
                  <span>{copied ? "COPIED LINK!" : "SHARE ARTICLE"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </motion.button>
              </motion.div>

              {/* AUTHOR SIGNATURE CARD */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6 }}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#e8e8e3] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-10"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#fa4d56]/25 bg-[#0c0e12] shrink-0">
                    <Image
                      src={article.author.avatar || "/images/about/about-avatar.png"}
                      alt={article.author.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className="font-heading font-black text-base uppercase text-[#090d15]">
                        {article.author.name}
                      </h4>
                      <span className="px-2 py-0.5 rounded-full bg-[#fee2e2] text-[#fa4d56] font-mono text-[9px] font-bold uppercase">
                        AUTHOR
                      </span>
                    </div>
                    <p className="text-xs text-[#64748b] max-w-md leading-relaxed">
                      Full-Stack Software Engineer &amp; UI Architect passionate about high-performance web systems, clean architecture, and delightful interactive experiences.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#7c8ba1]">
                    Follow Me:
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://x.com/toughefforts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-lg bg-[#faf7f2] hover:bg-black hover:text-white flex items-center justify-center text-[#475569] transition-all hover:-translate-y-0.5"
                      title="Twitter / X"
                    >
                      <TwitterIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/toughefforts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-lg bg-[#faf7f2] hover:bg-[#0a66c2] hover:text-white flex items-center justify-center text-[#475569] transition-all hover:-translate-y-0.5"
                      title="LinkedIn"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://instagram.com/toughefforts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-lg bg-[#faf7f2] hover:bg-[#e1306c] hover:text-white flex items-center justify-center text-[#475569] transition-all hover:-translate-y-0.5"
                      title="Instagram"
                    >
                      <InstagramIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://github.com/toughefforts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-lg bg-[#faf7f2] hover:bg-[#090d15] hover:text-white flex items-center justify-center text-[#475569] transition-all hover:-translate-y-0.5"
                      title="GitHub"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* PREVIOUS & NEXT ARTICLE NAVIGATION (WITH THUMBNAIL IMAGES) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {/* Previous Article Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="h-full"
                >
                  <Link
                    href={`/blog/${prevArticle.id}`}
                    className="h-full bg-white hover:bg-gradient-to-br hover:from-white hover:to-[#fff5f5] p-3.5 sm:p-4 rounded-2xl border border-[#e8e8e3] hover:border-[#fa4d56] hover:shadow-md transition-all duration-300 group flex items-center gap-3.5 sm:gap-4 relative overflow-hidden"
                  >
                    {/* Background Ambient Glow */}
                    <div className="absolute -top-10 -left-10 w-28 h-28 bg-[#fa4d56]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    {/* Thumbnail Image */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-[#0c0e12] border border-[#e8e8e3] group-hover:border-[#fa4d56]/50 shadow-xs">
                      <Image
                        src={prevArticle.image || "/images/blogs/blog1/blog1.jpg"}
                        alt={prevArticle.title}
                        fill
                        sizes="(max-width: 640px) 80px, 96px"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                      <div className="absolute bottom-1.5 left-1.5">
                        <span className="w-5 h-5 rounded-full bg-black/75 backdrop-blur-xs text-white group-hover:bg-[#fa4d56] flex items-center justify-center transition-colors shadow-xs">
                          <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-0.5" />
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1 flex flex-col justify-between py-0.5">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="inline-flex items-center gap-1 font-mono text-[9.5px] uppercase font-bold text-[#fa4d56]">
                            <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
                            <span>PREVIOUS ARTICLE</span>
                          </span>
                          <span className="text-[9px] px-2 py-0.5 rounded-md bg-[#faf7f2] group-hover:bg-[#fff1f2] border border-[#e8e8e3] group-hover:border-[#fecdd3] text-[#64748b] group-hover:text-[#fa4d56] font-mono font-bold uppercase transition-colors ml-auto truncate max-w-[90px] sm:max-w-none">
                            {prevArticle.category}
                          </span>
                        </div>
                        <h4 className="font-heading font-black text-xs sm:text-sm uppercase text-[#090d15] group-hover:text-[#fa4d56] transition-colors line-clamp-2 leading-snug tracking-tight">
                          {prevArticle.title.includes(":") ? (
                            <>
                              <span>{prevArticle.title.split(":")[0]}:</span>{" "}
                              <span className="text-[#fa4d56]">{prevArticle.title.split(":")[1]}</span>
                            </>
                          ) : (
                            prevArticle.title
                          )}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-[10px] text-[#64748b] mt-2">
                        <span className="uppercase">{prevArticle.date}</span>
                        <span className="text-[#fa4d56] font-bold">&bull;</span>
                        <span className="uppercase">{prevArticle.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>

                {/* Next Article Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: 0.08 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="h-full"
                >
                  <Link
                    href={`/blog/${nextArticle.id}`}
                    className="h-full bg-white hover:bg-gradient-to-br hover:from-white hover:to-[#fff5f5] p-3.5 sm:p-4 rounded-2xl border border-[#e8e8e3] hover:border-[#fa4d56] hover:shadow-md transition-all duration-300 group flex items-center justify-between gap-3.5 sm:gap-4 relative overflow-hidden"
                  >
                    {/* Background Ambient Glow */}
                    <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#fa4d56]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    {/* Content (on left) */}
                    <div className="min-w-0 flex-1 flex flex-col justify-between py-0.5 text-left sm:text-right order-2 sm:order-1">
                      <div>
                        <div className="flex items-center sm:justify-end gap-2 mb-1.5">
                          <span className="text-[9px] px-2 py-0.5 rounded-md bg-[#faf7f2] group-hover:bg-[#fff1f2] border border-[#e8e8e3] group-hover:border-[#fecdd3] text-[#64748b] group-hover:text-[#fa4d56] font-mono font-bold uppercase transition-colors mr-auto sm:mr-0 truncate max-w-[90px] sm:max-w-none">
                            {nextArticle.category}
                          </span>
                          <span className="inline-flex items-center gap-1 font-mono text-[9.5px] uppercase font-bold text-[#fa4d56]">
                            <span>NEXT ARTICLE</span>
                            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                        <h4 className="font-heading font-black text-xs sm:text-sm uppercase text-[#090d15] group-hover:text-[#fa4d56] transition-colors line-clamp-2 leading-snug tracking-tight">
                          {nextArticle.title.includes(":") ? (
                            <>
                              <span>{nextArticle.title.split(":")[0]}:</span>{" "}
                              <span className="text-[#fa4d56]">{nextArticle.title.split(":")[1]}</span>
                            </>
                          ) : (
                            nextArticle.title
                          )}
                        </h4>
                      </div>
                      <div className="flex items-center sm:justify-end gap-2 font-mono text-[10px] text-[#64748b] mt-2">
                        <span className="uppercase">{nextArticle.date}</span>
                        <span className="text-[#fa4d56] font-bold">&bull;</span>
                        <span className="uppercase">{nextArticle.readTime}</span>
                      </div>
                    </div>

                    {/* Thumbnail Image (on right) */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-[#0c0e12] border border-[#e8e8e3] group-hover:border-[#fa4d56]/50 shadow-xs order-1 sm:order-2">
                      <Image
                        src={nextArticle.image || "/images/blogs/blog4/blog1.jpg"}
                        alt={nextArticle.title}
                        fill
                        sizes="(max-width: 640px) 80px, 96px"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                      <div className="absolute bottom-1.5 right-1.5">
                        <span className="w-5 h-5 rounded-full bg-black/75 backdrop-blur-xs text-white group-hover:bg-[#fa4d56] flex items-center justify-center transition-colors shadow-xs">
                          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </div>

              {/* RETURN TO ALL BLOG BUTTON */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <a
                  href="/blog"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToSection("blog");
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#090d15] hover:bg-[#fa4d56] text-white font-mono text-xs uppercase font-bold tracking-wider transition-all shadow-md group hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                  <span>RETURN TO ALL BLOG &amp; ARTICLES</span>
                </a>
              </motion.div>
            </motion.div>
          </main>
        </div>

      </div>
    </article>
  );
}
