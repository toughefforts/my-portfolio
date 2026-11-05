"use client";

import { useState, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import RevealAnimation from "@/components/animations/RevealAnimation";
import {
  Bookmark,
  LayoutGrid,
  Palette,
  Code2,
  Monitor,
  Layers,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

interface ArticleItem {
  id: string;
  articleNumber: string;
  title: string;
  category: "DESIGN" | "DEVELOPMENT" | "UI/UX" | "ARCHITECTURE";
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  categoryIcon: "code" | "layers" | "palette" | "monitor";
}

const articlesData: ArticleItem[] = [
  // ================= DESIGN =================
  {
    id: "design-1",
    articleNumber: "01",
    title: "DESIGN UNRAVELED: BEHIND THE SCENES OF UI/UX MAGIC",
    category: "DESIGN",
    date: "25 JULY 2024",
    readTime: "8 MIN READ",
    excerpt:
      "Exploring the creative process behind building intuitive and visually stunning user interfaces.",
    image: "/images/blogs/blog1/design-workspace.webp",
    categoryIcon: "palette",
  },
  {
    id: "design-2",
    articleNumber: "02",
    title: "MINIMALIST SYSTEMS: CRAFTING TIMELESS DIGITAL IDENTITIES",
    category: "DESIGN",
    date: "14 AUGUST 2024",
    readTime: "7 MIN READ",
    excerpt:
      "How reductionist aesthetics and intentional negative space drive user retention and brand authority.",
    image: "/images/blogs/blog2/minimalist-branding.webp",
    categoryIcon: "palette",
  },
  {
    id: "design-3",
    articleNumber: "03",
    title: "COLOR THEORY: PSYCHOLOGY BEHIND HIGH-CONTRAST PALETTES",
    category: "DESIGN",
    date: "28 AUGUST 2024",
    readTime: "5 MIN READ",
    excerpt:
      "Decoding how strategic high-contrast accents and curated dark modes guide cognitive attention.",
    image: "/images/blogs/blog3/color-palette-lab.webp",
    categoryIcon: "palette",
  },

  // ================= DEVELOPMENT =================
  {
    id: "dev-1",
    articleNumber: "04",
    title: "BEYOND AESTHETICS: CRAFTING INTUITIVE UX",
    category: "DEVELOPMENT",
    date: "18 JULY 2024",
    readTime: "10 MIN READ",
    excerpt:
      "How modern software engineering combines design principles with functional code architecture.",
    image: "/images/blogs/blog4/code-architecture.webp",
    categoryIcon: "code",
  },
  {
    id: "dev-2",
    articleNumber: "05",
    title: "NEXT.JS RUNTIMES: MAXIMIZING HYBRID EDGE PERFORMANCE",
    category: "DEVELOPMENT",
    date: "05 AUGUST 2024",
    readTime: "12 MIN READ",
    excerpt:
      "Benchmarking server components, streaming SSR, and edge middleware for sub-second page loads.",
    image: "/images/blogs/blog5/edge-architecture.webp",
    categoryIcon: "code",
  },
  {
    id: "dev-3",
    articleNumber: "06",
    title: "TYPESCRIPT MASTERY: ADVANCED PATTERNS FOR MODERN APPS",
    category: "DEVELOPMENT",
    date: "20 AUGUST 2024",
    readTime: "9 MIN READ",
    excerpt:
      "Leveraging template literal types, conditional generics, and branded types for bulletproof codebases.",
    image: "/images/blogs/blog6/type-system.webp",
    categoryIcon: "code",
  },

  // ================= UI/UX =================
  {
    id: "uiux-1",
    articleNumber: "07",
    title: "PIXELS & INSIGHTS: UNVEILING THE ART OF UI/UX",
    category: "UI/UX",
    date: "12 JULY 2024",
    readTime: "6 MIN READ",
    excerpt:
      "A deep dive into design systems, typography scales, and scalable component frameworks.",
    image: "/images/blogs/blog7/design-tokens.webp",
    categoryIcon: "monitor",
  },
  {
    id: "uiux-2",
    articleNumber: "08",
    title: "MICRO-INTERACTIONS: THE INVISIBLE DETAILS OF RETENTION",
    category: "UI/UX",
    date: "02 AUGUST 2024",
    readTime: "8 MIN READ",
    excerpt:
      "Crafting fluid tactile feedback, magnetic button states, and smooth gesture transitions.",
    image: "/images/blogs/blog8/gesture-animation.webp",
    categoryIcon: "monitor",
  },
  {
    id: "uiux-3",
    articleNumber: "09",
    title: "ACCESSIBILITY FIRST: DESIGNING EXPERIENCES FOR EVERYONE",
    category: "UI/UX",
    date: "16 AUGUST 2024",
    readTime: "7 MIN READ",
    excerpt:
      "Achieving WCAG AAA compliance without sacrificing high-end typography and immersive visual polish.",
    image: "/images/blogs/blog9/inclusive-design.webp",
    categoryIcon: "monitor",
  },

  // ================= ARCHITECTURE =================
  {
    id: "arch-1",
    articleNumber: "10",
    title: "SYSTEM SCALABILITY: ARCHITECTING RESILIENT WEB PLATFORMS",
    category: "ARCHITECTURE",
    date: "10 JULY 2024",
    readTime: "11 MIN READ",
    excerpt:
      "Deconstructing distributed caching, event-driven pipelines, and high-throughput micro-frontends.",
    image: "/images/blogs/blog10/distributed-caching.webp",
    categoryIcon: "layers",
  },
  {
    id: "arch-2",
    articleNumber: "11",
    title: "STATE ORCHESTRATION: CONCURRENCY PATTERNS IN CLIENT APPS",
    category: "ARCHITECTURE",
    date: "24 JULY 2024",
    readTime: "9 MIN READ",
    excerpt:
      "Comparing atomic stores, signal reactive paradigms, and optimistic mutation rollback pipelines.",
    image: "/images/blogs/blog11/atomic-stores.webp",
    categoryIcon: "layers",
  },
  {
    id: "arch-3",
    articleNumber: "12",
    title: "DISTRIBUTED CACHING: ZERO-DOWNTIME DATA SYNCHRONIZATION",
    category: "ARCHITECTURE",
    date: "11 AUGUST 2024",
    readTime: "10 MIN READ",
    excerpt:
      "Designing Redis cache invalidation strategies and edge geo-replication for global low latency.",
    image: "/images/blogs/blog12/redis-clusters.webp",
    categoryIcon: "layers",
  },
];

const categoryTabs = [
  { id: "ALL", label: "ALL", icon: LayoutGrid },
  { id: "DESIGN", label: "DESIGN", icon: Palette },
  { id: "DEVELOPMENT", label: "DEVELOPMENT", icon: Code2 },
  { id: "UI/UX", label: "UI/UX", icon: Monitor },
  { id: "ARCHITECTURE", label: "ARCHITECTURE", icon: Layers },
] as const;

/**
 * Blog Section Component.
 *
 * Publication feed and technical insight showcase featuring:
 * - Category tabs (Design, Development, UI/UX, Architecture).
 * - Interactive carousel slider showcasing featured articles.
 * - Bookmark toggle state per article card.
 * - Direct deep links to standalone article reading experiences.
 */
export default function BlogSection() {
  const [activeTab, setActiveTab] = useState<string>("ALL");
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(["design-1"]);
  const [featuredIndex, setFeaturedIndex] = useState<number>(0);
  const touchStartXRef = useRef<number | null>(null);

  // Filter articles based on active category
  const filteredArticles = useMemo(() => {
    if (activeTab === "ALL") return articlesData;
    return articlesData.filter((article) => article.category === activeTab);
  }, [activeTab]);

  // Handle Tab Change
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setFeaturedIndex(0);
  };

  // Safe featured index
  const safeFeaturedIndex =
    filteredArticles.length > 0
      ? ((featuredIndex % filteredArticles.length) + filteredArticles.length) %
        filteredArticles.length
      : 0;

  // The featured article on the left
  const featuredArticle =
    filteredArticles[safeFeaturedIndex] || articlesData[0];

  // The 2 side articles on the right (next 2 items in circular queue)
  const sideArticles = useMemo(() => {
    if (filteredArticles.length <= 1) return [];
    const first =
      filteredArticles[(safeFeaturedIndex + 1) % filteredArticles.length];
    const second =
      filteredArticles.length > 2
        ? filteredArticles[(safeFeaturedIndex + 2) % filteredArticles.length]
        : first;
    return [first, second];
  }, [filteredArticles, safeFeaturedIndex]);

  // Handle clicking on ANY side article to move it directly to featured slot
  const handleSelectArticle = (articleId: string) => {
    const targetIdx = filteredArticles.findIndex((a) => a.id === articleId);
    if (targetIdx !== -1) {
      setFeaturedIndex(targetIdx);
    }
  };

  // Pagination setup: 4 dots for ALL (clusters of 3), or 3 dots for category view
  const totalSlides =
    activeTab === "ALL"
      ? Math.max(1, Math.ceil(filteredArticles.length / 3))
      : Math.min(filteredArticles.length, 3);

  const activeDotIndex =
    activeTab === "ALL"
      ? Math.floor(safeFeaturedIndex / 3) % totalSlides
      : safeFeaturedIndex % totalSlides;

  // Handle Next
  const handleNext = () => {
    setFeaturedIndex((prev) => (prev + 1) % filteredArticles.length);
  };

  // Handle Prev
  const handlePrev = () => {
    setFeaturedIndex(
      (prev) => (prev - 1 + filteredArticles.length) % filteredArticles.length
    );
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  // Bookmark Toggle
  const isBookmarked = bookmarkedIds.includes(featuredArticle.id);
  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Render title with text after colon in red
  const renderTitle = (title: string, defaultColorClass = "text-white") => {
    if (title.includes(":")) {
      const [before, ...afterParts] = title.split(":");
      const after = afterParts.join(":");
      return (
        <>
          <span className={defaultColorClass}>{before}:</span>
          <span className="text-[#fa4d56]">{after}</span>
        </>
      );
    }
    return <span className={defaultColorClass}>{title}</span>;
  };

  // Helper for rendering category icon on badges
  const renderCategoryIcon = (icon: ArticleItem["categoryIcon"]) => {
    switch (icon) {
      case "code":
        return <Code2 className="w-3 h-3" />;
      case "palette":
        return <Palette className="w-3 h-3" />;
      case "monitor":
        return <Monitor className="w-3 h-3" />;
      case "layers":
      default:
        return <Layers className="w-3 h-3" />;
    }
  };

  return (
    <section
      id="blog"
      className="relative py-10 sm:py-14 border-b border-[#e2e2da] bg-[#f8f8f5] overflow-hidden"
    >
      {/* Subtle Ambient Radial Highlight in bottom-left */}
      <div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(250,77,86,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ======================================================== */}
        {/* TOP HEADER: Title (Left) & Filter Tabs (Right) */}
        {/* ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-5 sm:mb-6">
          {/* Left Block: Tag + Title & Description Side-by-Side */}
          <div className="flex flex-col">
            {/* Tag: — ARTICLES & INSIGHTS */}
            <RevealAnimation>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-5 h-[2px] bg-[#fa4d56] inline-block rounded-full" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#7c8ba1]">
                  ARTICLES &amp; INSIGHTS
                </span>
              </div>
            </RevealAnimation>

            {/* Title & Description Side-by-Side Row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <RevealAnimation delay={0.05}>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-heading tracking-tight leading-none text-[#090d15] whitespace-nowrap">
                  BLOG &amp;{" "}
                  <span className="text-[#fa4d56] tracking-tight">ARTICLES</span>
                </h2>
              </RevealAnimation>

              {/* Description Paragraph (Left vertical line removed on mobile, kept on sm+) */}
              <RevealAnimation delay={0.1}>
                <div className="max-w-[280px] sm:max-w-[260px] md:max-w-[300px] border-l-0 sm:border-l-2 border-[#e2e2da] pl-0 sm:pl-3.5 py-0.5 text-[#64748b] font-serif italic text-xs sm:text-[13px] leading-relaxed">
                  In-depth articles, case studies, and technical insights from
                  real projects and hands-on experiences.
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* Right: Filter Category Tabs with Professional Eyebrow Label */}
          <div className="w-full lg:w-auto flex flex-col items-start lg:items-end gap-2 shrink-0">
            <div className="flex items-center gap-2 font-mono text-[10.5px] font-bold uppercase tracking-widest text-[#7c8ba1]">
              <span>FILTER BY CATEGORY</span>
              <span className="w-5 h-[2px] bg-[#fa4d56] rounded-full inline-block" />
            </div>

            <div className="w-full max-w-full flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {categoryTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-[11px] uppercase font-bold tracking-wider transition-all duration-200 shrink-0 cursor-pointer ${
                      isActive
                        ? "bg-[#fa4d56] text-white shadow-xs border border-[#fa4d56]"
                        : "bg-white hover:bg-white text-[#334155] border border-[#e2e2da] hover:border-[#fa4d56]/50 shadow-2xs"
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* CARDS DISPLAY: 1 Featured Large (Left) + 2 Compact (Right) */}
        {/* Keyed by activeTab & featuredArticle.id for smooth transitions */}
        {/* ======================================================== */}
        <div
          key={`${activeTab}-${featuredArticle.id}`}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 transition-all duration-300"
        >
          {/* ==================================================== */}
          {/* LEFT: Large Dark Featured Article Card (Col Span 7) */}
          {/* ==================================================== */}
          <div className="lg:col-span-7">
            <RevealAnimation delay={0.15} className="w-full">
              <article className="relative w-full rounded-[20px] overflow-hidden bg-[#0a0d12] border border-[#27272a] shadow-xl flex flex-col justify-between p-5 sm:p-6 lg:p-7 min-h-[350px] sm:min-h-[370px] lg:min-h-[390px] group transition-all duration-300">
                {/* Background Image Setup: Full Width with Light Gradient for Clear Image Visibility */}
                <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center sm:object-right group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  {/* Subtle soft gradient overlay so image is visible while text remains crisp */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d12]/85 via-[#0a0d12]/40 to-black/15" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d12]/60 via-transparent to-transparent sm:hidden" />
                </div>

                {/* Left Floating Content with Maximum Clarity */}
                <div className="relative z-10 max-w-full sm:max-w-[62%] md:max-w-[56%] flex flex-col items-start">
                  {/* Category & Featured Badge */}
                  <div className="flex items-center gap-2">
                    <div className="bg-[#fa4d56] text-white px-2.5 py-0.5 rounded-md font-mono text-[10px] uppercase tracking-wider font-bold inline-flex items-center gap-1 shadow-xs">
                      <Star className="w-2.5 h-2.5 fill-current" />
                      <span>FEATURED</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-white/10 text-[#e2e8f0] font-mono text-[9px] uppercase tracking-wider font-semibold border border-white/15 backdrop-blur-xs">
                      {featuredArticle.category}
                    </span>
                  </div>

                  {/* Date & Read Time */}
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#94a3b8] mt-2.5 mb-1 font-medium">
                    {featuredArticle.date} &bull; {featuredArticle.readTime}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-[23px] font-black font-heading uppercase tracking-tight leading-[1.15] mt-0.5 mb-2">
                    {renderTitle(featuredArticle.title, "text-white")}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-[#cbd5e1] leading-relaxed mb-3.5 font-normal line-clamp-2">
                    {featuredArticle.excerpt}
                  </p>

                  {/* Action Buttons: Read Publication + Bookmark */}
                  <div className="flex items-center gap-2.5">
                    <Link
                      href={`/blog/${featuredArticle.id}`}
                      className="bg-white text-[#090d15] hover:bg-[#fa4d56] hover:text-white px-3.5 py-1.5 rounded-md font-mono text-[11px] uppercase font-bold inline-flex items-center gap-1.5 transition-all duration-300 shadow-xs group/btn"
                    >
                      <span>READ PUBLICATION</span>
                      <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>

                    <button
                      onClick={() => toggleBookmark(featuredArticle.id)}
                      aria-label="Bookmark article"
                      className={`w-8 h-8 rounded-md border flex items-center justify-center transition-all cursor-pointer ${
                        isBookmarked
                          ? "bg-[#fa4d56] border-[#fa4d56] text-white"
                          : "border-white/20 bg-white/5 hover:bg-white/15 text-white"
                      }`}
                    >
                      <Bookmark
                        className={`w-3.5 h-3.5 ${
                          isBookmarked ? "fill-current" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Bottom Index Outline & Track Segment */}
                <div className="relative z-10 flex items-center gap-3 mt-4 pt-2">
                  <span className="font-heading text-3xl sm:text-4xl font-black text-transparent [-webkit-text-stroke:1.2px_rgba(255,255,255,0.3)] select-none leading-none">
                    {String(safeFeaturedIndex + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-1.5 w-24">
                    <div
                      className={`h-[2px] rounded-full transition-all duration-300 ${
                        safeFeaturedIndex % 3 === 0
                          ? "w-8 bg-white"
                          : "w-5 bg-white/25"
                      }`}
                    />
                    <div
                      className={`h-[2px] rounded-full transition-all duration-300 ${
                        safeFeaturedIndex % 3 === 1
                          ? "w-8 bg-white"
                          : "w-5 bg-white/25"
                      }`}
                    />
                    <div
                      className={`h-[2px] rounded-full transition-all duration-300 ${
                        safeFeaturedIndex % 3 === 2
                          ? "w-8 bg-white"
                          : "w-5 bg-white/25"
                      }`}
                    />
                  </div>
                </div>
              </article>
            </RevealAnimation>
          </div>

          {/* ==================================================== */}
          {/* RIGHT: Two Stacked Compact Cards (Col Span 5) */}
          {/* Clickable cards to promote to featured slot */}
          {/* ==================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3.5 sm:gap-4">
            {sideArticles.map((article, index) => (
              <RevealAnimation key={article.id} delay={0.2 + index * 0.1}>
                <article
                  onClick={() => handleSelectArticle(article.id)}
                  className="bg-white rounded-[18px] p-4 sm:p-4.5 border border-[#e2e2da] shadow-xs hover:shadow-md hover:border-[#fa4d56]/70 transition-all flex flex-col sm:flex-row gap-3.5 sm:gap-4 items-stretch justify-between group cursor-pointer active:scale-[0.99]"
                >
                  {/* Left: Metadata, Title, Excerpt & Read Link */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {/* Top Meta Line: Date & Article Number */}
                      <div className="flex items-center justify-between font-mono text-[9px] uppercase text-[#7c8ba1] tracking-wider font-semibold mb-1">
                        <span>
                          {article.date} &bull; {article.readTime}
                        </span>
                        <span className="text-[#94a3b8]">
                          {article.articleNumber.startsWith("ARTICLE")
                            ? article.articleNumber
                            : `ARTICLE ${article.articleNumber}`}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-base sm:text-lg font-bold font-heading uppercase tracking-tight leading-snug mb-1 group-hover:text-[#fa4d56] transition-colors">
                        {renderTitle(article.title, "text-[#090d15]")}
                      </h4>

                      {/* Excerpt */}
                      <p className="text-xs text-[#475569] leading-relaxed line-clamp-2 mb-2">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Read Publication Link */}
                    <Link
                      href={`/blog/${article.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 font-mono text-[11px] uppercase font-bold text-[#090d15] hover:text-[#fa4d56] transition-colors pt-1 group/link"
                    >
                      <span>READ PUBLICATION</span>
                      <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>

                  {/* Right: Image Thumbnail with Floating Badges */}
                  <div className="relative w-full sm:w-36 md:w-40 aspect-[4/3] rounded-xl overflow-hidden shrink-0 border border-[#e2e2da] bg-[#0c0e12]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 160px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Floating Top-Left Category Badge */}
                    <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-white/95 shadow-xs flex items-center justify-center text-[#fa4d56]">
                      {renderCategoryIcon(article.categoryIcon)}
                    </div>
                  </div>
                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* BOTTOM BAR: Left Philosophy Tag + Divider + Right Controls */}
        {/* ======================================================== */}
        <div className="mt-5 sm:mt-6 flex items-center justify-between gap-4 sm:gap-6">
          {/* Left: Professional Tag with Active Category / Total Count */}
          <div className="flex items-center gap-2 shrink-0 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#fa4d56]" />
            <span className="font-bold text-[#090d15]">
              {activeTab === "ALL" ? "ALL PUBLICATIONS" : `${activeTab} ARCHIVE`}
            </span>
            <span className="text-[#cbd5e1] font-normal">&bull;</span>
            <span className="text-[#7c8ba1] font-medium hidden sm:inline">
              ARTICLE {safeFeaturedIndex + 1} OF {filteredArticles.length}
            </span>
          </div>

          {/* Center Hairline Divider */}
          <div className="flex-1 h-[1px] bg-[#e2e2da]" />

          {/* Right Controls: Dots & Circular Arrow Buttons */}
          <div className="flex items-center gap-4 sm:gap-5 shrink-0">
            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {Array.from({ length: totalSlides }).map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => {
                    const step = activeTab === "ALL" ? 3 : 1;
                    setFeaturedIndex(dotIndex * step);
                  }}
                  aria-label={`Go to slide ${dotIndex + 1}`}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    activeDotIndex === dotIndex
                      ? "w-2.5 h-2.5 bg-[#fa4d56]"
                      : "w-2 h-2 bg-[#cbd5e1] hover:bg-[#94a3b8]"
                  }`}
                />
              ))}
            </div>

            {/* Circular Prev/Next Buttons */}
            <div className="flex items-center gap-2">
              {/* Previous Button */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous article"
                className="group w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-[#fa4d56] text-[#090d15] hover:text-white border border-[#e2e2da] hover:border-[#fa4d56] shadow-[0_8px_24px_rgba(9,13,21,0.08)] hover:shadow-[0_12px_28px_rgba(250,77,86,0.3)] hover:ring-4 hover:ring-[#fa4d56]/20 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 active:scale-90 backdrop-blur-sm"
              >
                <ChevronLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.5] group-hover:-translate-x-0.5 transition-transform duration-300" />
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next article"
                className="group w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-[#fa4d56] text-[#090d15] hover:text-white border border-[#e2e2da] hover:border-[#fa4d56] shadow-[0_8px_24px_rgba(9,13,21,0.08)] hover:shadow-[0_12px_28px_rgba(250,77,86,0.3)] hover:ring-4 hover:ring-[#fa4d56]/20 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 active:scale-90 backdrop-blur-sm"
              >
                <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.5] group-hover:translate-x-0.5 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
