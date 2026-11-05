"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import RevealAnimation from "@/components/animations/RevealAnimation";
import {
  LayoutGrid,
  Monitor,
  Sparkles,
  ShoppingCart,
  Wrench,
  ArrowUpRight,
  Search,
  SlidersHorizontal,
  X,
  RotateCcw,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const filterCategories = [
  { id: "all", label: "All Projects", icon: LayoutGrid },
  { id: "web", label: "Web Apps", icon: Monitor },
  { id: "ai", label: "AI / ML", icon: Sparkles },
  { id: "ecommerce", label: "E-Commerce", icon: ShoppingCart },
  { id: "tools", label: "Tools", icon: Wrench },
];

/**
 * Projects Section Component.
 *
 * Full-scale portfolio project showcase featuring:
 * - Multi-criteria project filtering by category (Web Apps, E-Commerce, AI/ML, Tools).
 * - Real-time keyword search across project titles, descriptions, and tags.
 * - Interactive slide-out drawer modals with project deep-dives.
 * - Direct external links to live interactive previews and GitHub source repositories.
 */
export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"default" | "az" | "za">("default");
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);
  const isAnimatingRef = useRef(false);
  const animTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const filterMenuRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Cleanup animation timeout on unmount
  useEffect(() => {
    return () => {
      if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    };
  }, []);

  // Extract all unique technologies from projects
  const allTechnologies = useMemo(() => {
    return Array.from(new Set(projects.flatMap((p) => p.technologies)));
  }, []);

  // Close filter dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        filterMenuRef.current &&
        !filterMenuRef.current.contains(event.target as Node)
      ) {
        setIsFilterMenuOpen(false);
      }
    }
    if (isFilterMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFilterMenuOpen]);

  // Combined filtering & sorting pipeline
  const filteredProjects = useMemo(() => {
    const list = projects.filter((project) => {
      // 1. Category check
      let matchesCategory = true;
      if (activeFilter === "Web Apps") matchesCategory = project.category === "Web Apps";
      else if (activeFilter === "AI / ML") matchesCategory = project.category === "AI / ML";
      else if (activeFilter === "E-Commerce") matchesCategory = project.category === "E-Commerce";
      else if (activeFilter === "Tools") matchesCategory = project.category === "Tools";

      if (!matchesCategory) return false;

      // 2. Specific Tech Stack check
      if (selectedTech && !project.technologies.includes(selectedTech)) {
        return false;
      }

      // 3. Search query check across title, description, and technologies
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      const titleMatch = project.title.toLowerCase().includes(query);
      const descMatch = project.description.toLowerCase().includes(query);
      const techMatch = project.technologies.some((t) => t.toLowerCase().includes(query));

      return titleMatch || descMatch || techMatch;
    });

    // 4. Sorting logic
    if (sortBy === "az") {
      return [...list].sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortBy === "za") {
      return [...list].sort((a, b) => b.title.localeCompare(a.title));
    }
    return list;
  }, [activeFilter, searchQuery, selectedTech, sortBy]);

  const N = filteredProjects.length;

  // Reset activeIndex and animation when filters change
  useEffect(() => {
    if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    setActiveIndex(0);
    setTranslateX(0);
    isAnimatingRef.current = false;
    setIsTransitioning(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    });
  }, [activeFilter, searchQuery, selectedTech, sortBy]);

  // Track container width dynamically with ResizeObserver
  useEffect(() => {
    const updateWidth = () => {
      if (cardsContainerRef.current) {
        setContainerWidth(cardsContainerRef.current.clientWidth);
      }
    };
    updateWidth();

    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && cardsContainerRef.current) {
      observer = new ResizeObserver(() => updateWidth());
      observer.observe(cardsContainerRef.current);
    }

    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
      if (observer) observer.disconnect();
    };
  }, []);

  // Responsive carousel measurements (peek = 0: no cards visible on left or right at rest)
  const isDesktop = containerWidth >= 1024;
  const isTablet = containerWidth >= 640 && containerWidth < 1024;
  const visibleCards = isDesktop ? 3 : isTablet ? 2 : 1;
  const gap = isDesktop ? 24 : isTablet ? 18 : 12;

  const cardWidth = containerWidth > 0
    ? Math.floor((containerWidth - (visibleCards - 1) * gap) / visibleCards)
    : 360;

  const stepSize = cardWidth + gap;
  // Slot order: [-3, -2, -1, 0, 1, 2, 3] -> Slot 0 is the spotlight CENTER card (index 3 in track)
  // On desktop (3 visible cards: Left k=-1, Center k=0, Right k=1):
  // k=0 sits in the center at x = stepSize. baseOffset = stepSize - 3 * stepSize = -2 * stepSize
  // On tablet/mobile: k=0 starts at x = 0. baseOffset = -3 * stepSize
  const baseOffset = isDesktop ? -2 * stepSize : -3 * stepSize;
  const currentOffset = baseOffset + translateX;

  // Fixed 7 virtual sliding slots: [-3, -2, -1, 0, 1, 2, 3]
  const slots = [-3, -2, -1, 0, 1, 2, 3];

  const handlePrev = () => {
    if (isAnimatingRef.current || N <= 1) return;
    isAnimatingRef.current = true;
    setIsTransitioning(true);
    setTranslateX(stepSize);

    if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    animTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      setActiveIndex((prev) => (prev - 1 + N) % N);
      setTranslateX(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          isAnimatingRef.current = false;
        });
      });
    }, 180);
  };

  const handleNext = () => {
    if (isAnimatingRef.current || N <= 1) return;
    isAnimatingRef.current = true;
    setIsTransitioning(true);
    setTranslateX(-stepSize);

    if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    animTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      setActiveIndex((prev) => (prev + 1) % N);
      setTranslateX(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          isAnimatingRef.current = false;
        });
      });
    }, 180);
  };

  const handleDotClick = (targetIndex: number) => {
    if (isAnimatingRef.current || targetIndex === activeIndex) return;
    const forwardDiff = (targetIndex - activeIndex + N) % N;
    if (forwardDiff === 1) {
      handleNext();
    } else if (forwardDiff === N - 1) {
      handlePrev();
    } else {
      setIsTransitioning(false);
      setActiveIndex(targetIndex);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartXRef.current = null;
  };

  // ScrollTrigger subtle reveal animation on mount
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (cardsContainerRef.current) {
        gsap.fromTo(
          cardsContainerRef.current,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const hasAdvancedFilters = selectedTech !== null || sortBy !== "default";

  const handleResetAll = () => {
    setActiveFilter("All Projects");
    setSearchQuery("");
    setSelectedTech(null);
    setSortBy("default");
    setIsFilterMenuOpen(false);
  };

  return (
    <section ref={sectionRef} id="projects" className="py-10 sm:py-14 border-b border-[#e2e2da] bg-[#f8f8f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Header Area: Title & Description */}
        <div className="flex flex-col mb-5 sm:mb-6">
          {/* Section Tag */}
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#7c8ba1] mb-2">
            <span className="w-8 h-[2px] bg-[#fa4d56]" />
            <span>PROJECTS</span>
          </div>

          {/* Headline & Description Side-by-Side Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <RevealAnimation>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase font-heading tracking-tight text-[#090d15] leading-none whitespace-nowrap">
                MY <span className="text-[#fa4d56]">CREATIONS</span>
              </h2>
            </RevealAnimation>

            {/* Description Paragraph (Left vertical line removed on mobile, kept on sm+) */}
            <RevealAnimation delay={0.05}>
              <div className="max-w-[320px] sm:max-w-[340px] md:max-w-[380px] border-l-0 sm:border-l-2 border-[#e2e2da] pl-0 sm:pl-3.5 py-0.5 text-[#64748b] font-serif italic text-xs sm:text-[13px] leading-relaxed">
                A collection of real-world projects showcasing my skills, problem-solving approach, and passion for building impactful digital products.
              </div>
            </RevealAnimation>
          </div>
        </div>

        {/* Filter Pills Tabs (Left) + Search Bar & Sliders Filter (Right) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4 sm:mb-5">
          {/* Left: Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {filterCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeFilter === cat.label;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.label)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl font-bold font-mono text-[11px] sm:text-xs transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#fa4d56] text-white shadow-xs shadow-[#fa4d56]/20 border border-transparent scale-[1.02]"
                      : "bg-white text-[#090d15] border border-[#e2e8f0] hover:border-[#090d15] hover:bg-[#f8fafc]"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-[#475569]"}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Search Input + Sliders Filter Button */}
          <div className="flex items-center gap-2 w-full lg:w-auto relative" ref={filterMenuRef}>
            {/* Search Input Bar */}
            <div className="relative flex items-center flex-1 lg:flex-none">
              <Search className="absolute left-3 w-4 h-4 text-[#7c8ba1] pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full lg:w-56 pl-9 pr-8 py-2 bg-white border border-[#e2e8f0] rounded-xl text-xs font-mono text-[#090d15] placeholder-[#94a3b8] focus:outline-none focus:border-[#fa4d56] focus:ring-1 focus:ring-[#fa4d56] transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 text-[#94a3b8] hover:text-[#090d15] transition-colors cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sliders Filter Trigger Button */}
            <button
              onClick={() => setIsFilterMenuOpen((prev) => !prev)}
              title="Filter & Sort Options"
              className={`relative p-2 sm:p-2.5 rounded-xl border transition-all cursor-pointer shadow-xs shrink-0 ${
                isFilterMenuOpen || hasAdvancedFilters
                  ? "bg-[#090d15] text-white border-[#090d15]"
                  : "bg-white border-[#e2e8f0] hover:border-[#090d15] text-[#475569] hover:text-[#090d15] hover:bg-[#f8fafc]"
              }`}
              aria-label="Open filter menu"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {hasAdvancedFilters && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#fa4d56] rounded-full border-2 border-white animate-pulse" />
              )}
            </button>

            {/* Floating Filter & Sort Dropdown Panel */}
            {isFilterMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-[calc(100vw-2rem)] max-w-[320px] sm:w-80 bg-white border border-[#e2e2da] rounded-2xl shadow-[0_16px_40px_-10px_rgba(0,0,0,0.15)] p-4 sm:p-5 z-50 animate-in fade-in zoom-in-95 duration-150">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#f1f5f9]">
                  <div className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#090d15]">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-[#fa4d56]" />
                    <span>Filter &amp; Sort</span>
                  </div>
                  <button
                    onClick={() => setIsFilterMenuOpen(false)}
                    className="text-[#94a3b8] hover:text-[#090d15] p-1 rounded-md transition-colors cursor-pointer"
                    aria-label="Close filters"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Sort Section */}
                <div className="mb-4">
                  <span className="block font-mono text-[10px] uppercase font-bold tracking-wider text-[#7c8ba1] mb-2">
                    Sort Order
                  </span>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { id: "default", label: "Default" },
                      { id: "az", label: "A → Z" },
                      { id: "za", label: "Z → A" },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setSortBy(opt.id as "default" | "az" | "za")}
                        className={`px-2 py-1.5 rounded-lg font-mono text-[10.5px] font-bold uppercase transition-all cursor-pointer ${
                          sortBy === opt.id
                            ? "bg-[#fa4d56] text-white shadow-xs"
                            : "bg-[#f8f8f5] text-[#475569] hover:bg-[#e2e8f0]/60 border border-[#e2e2da]"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Filter Section */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#7c8ba1]">
                      Tech Stack
                    </span>
                    {selectedTech && (
                      <button
                        onClick={() => setSelectedTech(null)}
                        className="text-[10px] font-mono text-[#fa4d56] hover:underline cursor-pointer"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
                    {allTechnologies.map((tech) => {
                      const isSelected = selectedTech === tech;
                      return (
                        <button
                          key={tech}
                          onClick={() => setSelectedTech(isSelected ? null : tech)}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-mono text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                            isSelected
                              ? "bg-[#090d15] text-white shadow-xs"
                              : "bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0] border border-[#e2e8f0]"
                          }`}
                        >
                          {isSelected && <Check className="w-2.5 h-2.5 text-[#fa4d56]" />}
                          <span>{tech}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Controls: Reset & Apply */}
                <div className="pt-3 border-t border-[#f1f5f9] flex items-center justify-between gap-2">
                  <button
                    onClick={handleResetAll}
                    disabled={!hasAdvancedFilters && activeFilter === "All Projects" && !searchQuery}
                    className="inline-flex items-center gap-1 font-mono text-[11px] font-bold uppercase text-[#7c8ba1] hover:text-[#fa4d56] transition-colors disabled:opacity-40 disabled:hover:text-[#7c8ba1] cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset All</span>
                  </button>

                  <button
                    onClick={() => setIsFilterMenuOpen(false)}
                    className="px-4 py-1.5 bg-[#090d15] hover:bg-[#fa4d56] text-white font-mono text-xs font-bold uppercase rounded-lg transition-colors cursor-pointer shadow-xs"
                  >
                    Apply
                  </button>
                </div>

              </div>
            )}
          </div>
        </div>

        {/* Active Filter Chips Bar (Shown when any filter or search is active) */}
        {(selectedTech || sortBy !== "default" || searchQuery) && (
          <div className="flex flex-wrap items-center gap-2 mb-4 pt-1">
            <span className="font-mono text-[10px] uppercase font-bold text-[#7c8ba1] tracking-wider">
              Active Filters:
            </span>

            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-[#e2e8f0] text-[#090d15] font-mono text-[10.5px]">
                Search: &quot;{searchQuery}&quot;
                <button onClick={() => setSearchQuery("")} className="hover:text-[#fa4d56] cursor-pointer ml-0.5">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {selectedTech && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#fa4d56]/10 border border-[#fa4d56]/20 text-[#fa4d56] font-mono text-[10.5px] font-bold">
                Tech: {selectedTech}
                <button onClick={() => setSelectedTech(null)} className="hover:text-[#090d15] cursor-pointer ml-0.5">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {sortBy !== "default" && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-[#e2e8f0] text-[#090d15] font-mono text-[10.5px]">
                Sort: {sortBy === "az" ? "A → Z" : "Z → A"}
                <button onClick={() => setSortBy("default")} className="hover:text-[#fa4d56] cursor-pointer ml-0.5">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={handleResetAll}
              className="text-[10.5px] font-mono font-bold text-[#fa4d56] hover:underline cursor-pointer ml-1"
            >
              Clear All
            </button>
          </div>
        )}

        {/* ========================================================
            CLEAN 3-CARD CAROUSEL: [PREV] [VIEWPORT (3 CARDS)] [NEXT]
            (No peek at rest - left and right cards strictly hidden until Next/Prev slide)
           ======================================================== */}
        <div className="relative flex items-center gap-2 sm:gap-3.5 md:gap-4.5 w-full">
          {/* Left Arrow Button */}
          {filteredProjects.length > visibleCards && (
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="group flex-shrink-0 z-30 w-8.5 h-8.5 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/95 hover:bg-[#fa4d56] text-[#090d15] hover:text-white border border-[#e2e2da] hover:border-[#fa4d56] shadow-[0_8px_24px_rgba(9,13,21,0.12)] hover:shadow-[0_12px_28px_rgba(250,77,86,0.3)] hover:ring-4 hover:ring-[#fa4d56]/20 flex items-center justify-center transition-all duration-150 ease-out cursor-pointer hover:scale-110 active:scale-90 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5] group-hover:-translate-x-0.5 transition-transform duration-150" />
            </button>
          )}

          {/* Projects Viewport (Strictly hides left & right cards at rest) */}
          <div
            ref={cardsContainerRef}
            className="flex-1 min-w-0 overflow-hidden py-5 sm:py-7"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {filteredProjects.length === 0 ? (
              <div className="w-full py-12 text-center bg-white rounded-2xl border border-[#e8e8e3] p-8 shadow-xs">
                <p className="font-mono text-xs font-bold text-[#7c8ba1] uppercase tracking-wider mb-1.5">
                  No projects match your current filters
                </p>
                <p className="text-xs text-[#475569] mb-4">
                  Try searching for another keyword or clearing tech stack filters.
                </p>
                <button
                  onClick={handleResetAll}
                  className="px-4 py-2 bg-[#fa4d56] text-white font-mono text-xs font-bold uppercase rounded-xl hover:bg-[#e03b44] transition-colors cursor-pointer shadow-xs"
                >
                  Reset All Filters
                </button>
              </div>
            ) : filteredProjects.length < 3 ? (
              /* Centered layout when 1 or 2 projects */
              <div className="flex items-stretch justify-center gap-5 px-4">
                {filteredProjects.map((project, index) => {
                  const outlineColor = project.accentColor || (index === 0 ? "#fa4d56" : index === 1 ? "#3b82f6" : "#8b5cf6");
                  return (
                    <div
                      key={project.id}
                      style={{ width: `${Math.min(cardWidth, 420)}px` }}
                      className="project-card-item relative flex-shrink-0 transition-all duration-150 ease-out cursor-pointer select-none"
                    >
                      <div className="bg-white rounded-2xl p-3.5 sm:p-4.5 border border-[#e8e8e3] shadow-[0_8px_25px_-6px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.1)] hover:border-[#090d15]/20 flex flex-col justify-between h-full group relative overflow-hidden">
                        <div>
                          <div className="flex items-center justify-between mb-1 sm:mb-1.5 relative z-10">
                            <span
                              className="font-mono font-bold text-3xl sm:text-4xl lg:text-[42px] tracking-tight leading-none select-none text-outline-number"
                              style={{
                                color: "transparent",
                                WebkitTextFillColor: "transparent",
                                WebkitTextStrokeWidth: "1.75px",
                                WebkitTextStrokeColor: outlineColor,
                                opacity: 0.9,
                              }}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3.5 bg-transparent">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-contain group-hover:scale-[1.03] transition-transform duration-500"
                            />
                          </div>
                          <h3 className="text-lg sm:text-xl font-black uppercase font-heading text-[#090d15] tracking-tight mb-1.5 group-hover:text-[#fa4d56] transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-[11px] sm:text-xs text-[#475569] leading-relaxed mb-3 line-clamp-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {project.technologies.map((tech) => (
                              <button
                                key={tech}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedTech(selectedTech === tech ? null : tech);
                                }}
                                className={`px-2 py-0.5 text-[9.5px] font-mono font-bold uppercase rounded-md tracking-wider border transition-colors cursor-pointer ${
                                  selectedTech === tech
                                    ? "bg-[#090d15] text-white border-[#090d15]"
                                    : "bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0] border-[#e2e8f0]/70"
                                }`}
                              >
                                {tech}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="pt-3 border-t border-[#f1f5f9] flex items-center justify-between gap-2">
                          <Link
                            href={project.liveUrl}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-[#fa4d56] hover:bg-[#e03b44] text-white font-mono font-bold text-[11px] uppercase tracking-wider rounded-lg shadow-xs transition-transform hover:scale-[1.02] active:scale-[0.98]"
                          >
                            <span>Live Preview</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-[#090d15] hover:text-[#fa4d56] font-mono text-[11px] font-bold uppercase tracking-wider transition-colors"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>Source Code</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Infinite Peek Carousel Track (Cards in center + ~12px peek of Prev & Next) */
              <div
                className="flex items-stretch"
                style={{
                  transform: `translateX(${currentOffset}px)`,
                  transition: isTransitioning
                    ? "transform 180ms cubic-bezier(0.16, 1, 0.3, 1)"
                    : "none",
                  willChange: "transform",
                }}
              >
                {slots.map((k) => {
                  const projectIndex = ((activeIndex + k) % N + N) % N;
                  const project = filteredProjects[projectIndex];
                  if (!project) return null;
                  const isCenter = isDesktop ? k === 0 : (isTablet ? k === 0 : true);
                  const outlineColor = project.accentColor || (projectIndex === 0 ? "#fa4d56" : projectIndex === 1 ? "#3b82f6" : "#8b5cf6");

                  return (
                    <div
                      key={`slot-${k}`}
                      style={{
                        width: `${cardWidth}px`,
                        minWidth: `${cardWidth}px`,
                        maxWidth: `${cardWidth}px`,
                        marginRight: `${gap}px`,
                      }}
                      onClick={() => {
                        if (isDesktop && k === -1) handlePrev();
                        else if (isDesktop && k === 1) handleNext();
                        else if (k !== 0) handleDotClick(projectIndex);
                      }}
                      className={`project-card-item relative flex-shrink-0 transition-all duration-150 ease-out select-none ${
                        isCenter
                          ? "z-20 scale-[1.035] -translate-y-2.5 sm:-translate-y-3 cursor-default"
                          : "z-10 scale-[0.97] translate-y-0 opacity-85 hover:opacity-100 cursor-pointer"
                      }`}
                    >
                      <div
                        className={`bg-white rounded-2xl p-3.5 sm:p-4.5 border transition-all duration-150 ease-out flex flex-col justify-between h-full group relative overflow-hidden ${
                          isCenter
                            ? "ring-2"
                            : "border-[#e2e8f0] shadow-[0_4px_16px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_-6px_rgba(0,0,0,0.1)] hover:border-[#090d15]/20"
                        }`}
                        style={
                          isCenter
                            ? {
                                borderColor: outlineColor,
                                boxShadow: `0 24px 50px -12px rgba(9, 13, 21, 0.16), 0 10px 24px -6px ${outlineColor}35`,
                              }
                            : undefined
                        }
                      >
                        {/* Top Section */}
                        <div>
                          {/* Large Transparent Outline Number with Matching Theme Color */}
                          <div className="flex items-center justify-between mb-1 sm:mb-1.5 relative z-10">
                            <span
                              className="font-mono font-bold text-3xl sm:text-4xl lg:text-[42px] tracking-tight leading-none select-none text-outline-number transition-all duration-150 ease-out"
                              style={{
                                color: "transparent",
                                WebkitTextFillColor: "transparent",
                                WebkitTextStrokeWidth: isCenter ? "2.25px" : "1.75px",
                                WebkitTextStrokeColor: outlineColor,
                                filter: isCenter ? `drop-shadow(0 2px 10px ${outlineColor}40)` : "none",
                                opacity: isCenter ? 1 : 0.75,
                              }}
                            >
                              {String(projectIndex + 1).padStart(2, "0")}
                            </span>
                          </div>

                          {/* 3D Mockup Visual Image (Optimized 4:3 Aspect Ratio for Larger Display) */}
                          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3.5 bg-transparent">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className={`object-contain transition-transform duration-500 ${
                                isCenter ? "scale-[1.03]" : "scale-100"
                              } group-hover:scale-[1.05]`}
                            />
                          </div>

                          {/* Project Title */}
                          <h3 className="text-lg sm:text-xl font-black uppercase font-heading text-[#090d15] tracking-tight mb-1.5 group-hover:text-[#fa4d56] transition-colors">
                            {project.title}
                          </h3>

                          {/* Description */}
                          <p className="text-[11px] sm:text-xs text-[#475569] leading-relaxed mb-3 line-clamp-2">
                            {project.description}
                          </p>

                          {/* Technology Badges */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {project.technologies.map((tech) => (
                              <button
                                key={tech}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedTech(selectedTech === tech ? null : tech);
                                }}
                                className={`px-2 py-0.5 text-[9.5px] font-mono font-bold uppercase rounded-md tracking-wider border transition-colors cursor-pointer ${
                                  selectedTech === tech
                                    ? "bg-[#090d15] text-white border-[#090d15]"
                                    : "bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0] border-[#e2e8f0]/70"
                                }`}
                              >
                                {tech}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Actions Row: Live Preview + Source Code */}
                        <div className="pt-3 border-t border-[#f1f5f9] flex flex-wrap xs:flex-nowrap items-center justify-between gap-2">
                          {/* Live Preview Button */}
                          <Link
                            href={project.liveUrl}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-[#fa4d56] hover:bg-[#e03b44] text-white font-mono font-bold text-[11px] uppercase tracking-wider rounded-lg shadow-xs transition-transform hover:scale-[1.02] active:scale-[0.98]"
                          >
                            <span>Live Preview</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </Link>

                          {/* Source Code Action */}
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-[#090d15] hover:text-[#fa4d56] font-mono text-[11px] font-bold uppercase tracking-wider transition-colors"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>Source Code</span>
                          </a>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Arrow Button */}
          {filteredProjects.length > visibleCards && (
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="group flex-shrink-0 z-30 w-8.5 h-8.5 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/95 hover:bg-[#fa4d56] text-[#090d15] hover:text-white border border-[#e2e2da] hover:border-[#fa4d56] shadow-[0_8px_24px_rgba(9,13,21,0.12)] hover:shadow-[0_12px_28px_rgba(250,77,86,0.3)] hover:ring-4 hover:ring-[#fa4d56]/20 flex items-center justify-center transition-all duration-150 ease-out cursor-pointer hover:scale-110 active:scale-90 backdrop-blur-sm"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 transition-transform duration-150" />
            </button>
          )}
        </div>

        {/* ========================================================
            MODERN PILL PAGINATION INDICATORS (Matching Testimonials)
           ======================================================== */}
        {filteredProjects.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-7 sm:mt-8">
            {filteredProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`rounded-full cursor-pointer transition-all duration-150 ease-out ${
                  activeIndex === i
                    ? "w-7 h-2 bg-[#fa4d56] shadow-sm"
                    : "w-2 h-2 bg-[#d4d4cb] hover:bg-[#94a3b8]"
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
