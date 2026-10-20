"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { scrollToCleanSection } from "@/lib/navigation";
import { services } from "@/data/services";
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
  Layers,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const filterCategories = [
  { id: "all", label: "All Services", icon: LayoutGrid },
  { id: "development", label: "Development", icon: Monitor },
  { id: "design", label: "UI/UX & Design", icon: Sparkles },
  { id: "ecommerce", label: "E-Commerce", icon: ShoppingCart },
  { id: "solutions", label: "Solutions", icon: Wrench },
];

const getServiceGradient = (serviceId: string, fallbackColor: string) => {
  switch (serviceId) {
    case "web-dev":
      return "linear-gradient(150deg, #fa4d56 0%, #ee2238 52%, #be123c 100%)";
    case "ui-ux":
      return "linear-gradient(150deg, #8b5cf6 0%, #7c3aed 52%, #5b21b6 100%)";
    case "landing-page":
      return "linear-gradient(150deg, #10b981 0%, #059669 52%, #047857 100%)";
    case "ecommerce":
      return "linear-gradient(150deg, #3b82f6 0%, #2563eb 52%, #1d4ed8 100%)";
    case "api-integration":
      return "linear-gradient(150deg, #f59e0b 0%, #ea580c 52%, #c2410c 100%)";
    case "responsive-design":
      return "linear-gradient(150deg, #06b6d4 0%, #0891b2 52%, #0e7490 100%)";
    default:
      return `linear-gradient(150deg, ${fallbackColor} 0%, ${fallbackColor} 65%, #0f172a 100%)`;
  }
};

function ServiceCardOverlay({
  service,
  outlineColor,
  displayIndex,
  isOpen,
  onClose,
}: {
  service: (typeof services)[0];
  outlineColor: string;
  displayIndex: number;
  isOpen: boolean;
  onClose: () => void;
}) {
  const gradient = getServiceGradient(service.id, outlineColor);

  return (
    <div
      className={`absolute inset-0 z-30 transition-transform duration-300 ease-out p-3.5 sm:p-4 flex flex-col justify-between text-white overflow-hidden shadow-2xl rounded-2xl will-change-transform select-none ${
        isOpen
          ? "translate-y-0 pointer-events-auto"
          : "translate-y-full pointer-events-none"
      }`}
      style={{ background: gradient }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Ambient glass glows */}
      <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-white/20 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-black/20 blur-2xl pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col min-h-0">
        {/* Top Header: Ghost Number + Category Badge + Close Button */}
        <div className="flex items-center justify-between mb-1.5">
          <span className="font-mono font-black text-2xl sm:text-3xl tracking-tight leading-none text-white/30 select-none">
            {String(displayIndex).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-1.5">
            <span className="px-2.5 py-0.5 rounded-full font-mono text-[9px] sm:text-[9.5px] font-bold uppercase tracking-wider bg-white/25 border border-white/40 text-white shadow-xs backdrop-blur-md">
              {service.category}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              aria-label="Close details"
              className="group/close w-6 h-6 rounded-full bg-black/25 hover:bg-white text-white hover:text-[#090d15] border border-white/30 hover:border-white flex items-center justify-center transition-all duration-300 ease-out cursor-pointer shadow-xs hover:shadow-[0_0_12px_rgba(255,255,255,0.45)] hover:scale-115 active:scale-90 ml-0.5"
            >
              <X className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 ease-out group-hover/close:rotate-90 group-hover/close:scale-110 active:rotate-180" />
            </button>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-[17px] sm:text-lg font-black uppercase font-heading text-white tracking-tight leading-tight mb-1 drop-shadow-xs">
          {service.title}
        </h3>

        {/* Tagline / Subtitle */}
        {(service.doodleText || service.annotation) && (
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 animate-pulse" />
            <span className="font-mono text-[9.5px] sm:text-[10px] uppercase font-bold tracking-widest text-white/95 drop-shadow-2xs">
              {service.doodleText || service.annotation}
            </span>
          </div>
        )}

        {/* Description */}
        <p className="text-[11.5px] sm:text-xs text-white/95 leading-relaxed mb-2 line-clamp-2 font-normal drop-shadow-2xs">
          {service.description}
        </p>

        {/* Deliverables Checklist ("What's Included") */}
        {service.tags && service.tags.length > 0 && (
          <div className="bg-black/20 backdrop-blur-md rounded-xl p-2 sm:p-2.5 border border-white/20 mb-2 space-y-1 shadow-xs">
            <div className="flex items-center justify-between mb-0.5">
              <span className="font-mono text-[8.5px] sm:text-[9px] uppercase font-bold tracking-wider text-white/80">
                What&apos;s Included
              </span>
              <span className="w-1 h-1 rounded-full bg-white/70" />
            </div>
            {service.tags.slice(0, 3).map((tag) => (
              <div key={tag} className="flex items-center gap-1.5 text-[11px] sm:text-[11.5px] font-mono text-white">
                <div className="w-3.5 h-3.5 rounded-full bg-white text-[#090d15] flex items-center justify-center shrink-0 shadow-xs">
                  <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                </div>
                <span className="font-medium drop-shadow-2xs truncate">{tag}</span>
              </div>
            ))}
          </div>
        )}

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1">
          {service.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[9px] sm:text-[9.5px] font-mono font-bold uppercase rounded-md tracking-wider bg-white/20 border border-white/30 text-white backdrop-blur-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Actions Row */}
      <div className="relative z-10 pt-2 border-t border-white/25 flex items-center justify-between gap-2 mt-2">
        <a
          href="/contact"
          onClick={(e) => scrollToCleanSection("contact", e)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white hover:bg-neutral-100 text-[#090d15] font-mono font-bold text-[11px] sm:text-xs uppercase tracking-wider rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:shadow-[0_3px_10px_rgba(0,0,0,0.18)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
        >
          <span>Book Service</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#090d15] stroke-[2.5]" />
        </a>
        <a
          href="/projects"
          onClick={(e) => scrollToCleanSection("projects", e)}
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-black/25 hover:bg-black/45 text-white border border-white/30 hover:border-white/60 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-xl backdrop-blur-md transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
        >
          <Layers className="w-3.5 h-3.5 text-white" />
          <span>Projects</span>
        </a>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState("All Services");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"default" | "az" | "za">("default");
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);
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
  const leftCardRef = useRef<HTMLDivElement>(null);
  const centerCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  // Cleanup animation timeout on unmount
  useEffect(() => {
    return () => {
      if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    };
  }, []);

  // Extract all unique technologies / skills from services
  const allTechnologies = useMemo(() => {
    return Array.from(new Set(services.flatMap((s) => s.technologies)));
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

  // Close expanded service overlay on outside click
  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      if (
        cardsContainerRef.current &&
        !cardsContainerRef.current.contains(event.target as Node)
      ) {
        setExpandedServiceId(null);
      }
    }
    if (expandedServiceId) {
      document.addEventListener("mousedown", handleDocumentClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [expandedServiceId]);

  // Combined filtering & sorting pipeline
  const filteredServices = useMemo(() => {
    const list = services.filter((service) => {
      // 1. Category check
      let matchesCategory = true;
      if (activeFilter === "Development") matchesCategory = service.category === "Development";
      else if (activeFilter === "UI/UX & Design") matchesCategory = service.category === "Design";
      else if (activeFilter === "E-Commerce") matchesCategory = service.category === "E-Commerce";
      else if (activeFilter === "Solutions") matchesCategory = service.category === "Solutions";

      if (!matchesCategory) return false;

      // 2. Specific Tech / Deliverable check
      if (selectedTech && !service.technologies.includes(selectedTech)) {
        return false;
      }

      // 3. Search query check across title, description, and technologies
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      const titleMatch = service.title.toLowerCase().includes(query);
      const descMatch = service.description.toLowerCase().includes(query);
      const techMatch = service.technologies.some((t) => t.toLowerCase().includes(query));

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

  const N = filteredServices.length;

  // Reset activeIndex and animation when filters change
  useEffect(() => {
    if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    setActiveIndex(0);
    setTranslateX(0);
    setExpandedServiceId(null);
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

  // Responsive carousel measurements
  const isDesktop = containerWidth >= 1024;
  const isTablet = containerWidth >= 640 && containerWidth < 1024;
  const visibleCards = isDesktop ? 3 : isTablet ? 2 : 1;
  const gap = isDesktop ? 24 : isTablet ? 18 : 12;

  const cardWidth = containerWidth > 0
    ? Math.floor((containerWidth - (visibleCards - 1) * gap) / visibleCards)
    : 360;

  const stepSize = cardWidth + gap;
  const baseOffset = isDesktop ? -2 * stepSize : -3 * stepSize;
  const currentOffset = baseOffset + translateX;

  // Fixed 7 virtual sliding slots: [-3, -2, -1, 0, 1, 2, 3]
  const slots = [-3, -2, -1, 0, 1, 2, 3];

  const handlePrev = () => {
    if (isAnimatingRef.current || N <= 1) return;
    setExpandedServiceId(null);
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
    setExpandedServiceId(null);
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
    setExpandedServiceId(null);
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

  // ScrollTrigger entrance animation matching TestimonialsSection (center card appears, left & right cards emerge outward)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const isDesktop = window.innerWidth >= 768;

      if (isDesktop && leftCardRef.current && centerCardRef.current && rightCardRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        });

        // Fast & punchy: center card appears quickly
        tl.fromTo(
          centerCardRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.22, ease: "power2.out" }
        );

        // Left card fast-shoots outward from center to left column
        tl.fromTo(
          leftCardRef.current,
          { xPercent: 105, opacity: 0 },
          { xPercent: 0, opacity: 1, duration: 0.35, ease: "power3.out" },
          "-=0.1"
        );

        // Right card fast-shoots outward from center to right column simultaneously
        tl.fromTo(
          rightCardRef.current,
          { xPercent: -105, opacity: 0 },
          { xPercent: 0, opacity: 1, duration: 0.35, ease: "power3.out" },
          "<"
        );

        // Fade in any remaining outer slots cleanly
        const outerCards = cardsContainerRef.current?.querySelectorAll(".service-outer-slot");
        if (outerCards && outerCards.length > 0) {
          tl.fromTo(
            outerCards,
            { opacity: 0 },
            { opacity: 1, duration: 0.25, ease: "power2.out" },
            "<"
          );
        }
      } else if (!isDesktop && cardsContainerRef.current) {
        const cards = [leftCardRef.current, centerCardRef.current, rightCardRef.current].filter(Boolean);
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.25,
              stagger: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cardsContainerRef.current,
                start: "top 85%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [filteredServices.length, activeFilter]);

  const hasAdvancedFilters = selectedTech !== null || sortBy !== "default";

  const handleResetAll = () => {
    setActiveFilter("All Services");
    setSearchQuery("");
    setSelectedTech(null);
    setSortBy("default");
    setIsFilterMenuOpen(false);
  };

  return (
    <section ref={sectionRef} id="services" className="py-10 sm:py-14 border-b border-[#e2e2da] bg-[#f8f8f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Header Area: Title & Description */}
        <div className="flex flex-col mb-5 sm:mb-6">
          {/* Section Tag */}
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#7c8ba1] mb-2">
            <span className="w-8 h-[2px] bg-[#fa4d56]" />
            <span>SERVICES</span>
          </div>

          {/* Headline & Description Side-by-Side Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <RevealAnimation>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase font-heading tracking-tight text-[#090d15] leading-none whitespace-nowrap">
                WHAT I <span className="text-[#fa4d56]">OFFER</span>
              </h2>
            </RevealAnimation>

            {/* Description Paragraph with left vertical divider line */}
            <RevealAnimation delay={0.05}>
              <div className="max-w-[320px] sm:max-w-[340px] md:max-w-[380px] border-l-2 border-[#e2e2da] pl-3.5 py-0.5 text-[#1e293b] font-serif italic text-xs sm:text-[13px] leading-relaxed">
                Comprehensive web development, modern UI/UX design, and digital solutions crafted with precision and passion.
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
                placeholder="Search services..."
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
              <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-white border border-[#e2e2da] rounded-2xl shadow-[0_16px_40px_-10px_rgba(0,0,0,0.15)] p-4 sm:p-5 z-50 animate-in fade-in zoom-in-95 duration-150">
                
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

                {/* Tech & Skills Filter Section */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#7c8ba1]">
                      Skills &amp; Deliverables
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
                    disabled={!hasAdvancedFilters && activeFilter === "All Services" && !searchQuery}
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

        {/* Active Filter Chips Bar */}
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
            Strictly identical to ProjectsSection layout & peek mechanics
           ======================================================== */}
        <div className="relative flex items-center gap-2 sm:gap-3.5 md:gap-4.5 w-full">
          {/* Left Arrow Button */}
          {filteredServices.length > visibleCards && (
            <button
              onClick={handlePrev}
              aria-label="Previous service"
              className="group flex-shrink-0 z-30 w-8.5 h-8.5 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/95 hover:bg-[#fa4d56] text-[#090d15] hover:text-white border border-[#e2e2da] hover:border-[#fa4d56] shadow-[0_8px_24px_rgba(9,13,21,0.12)] hover:shadow-[0_12px_28px_rgba(250,77,86,0.3)] hover:ring-4 hover:ring-[#fa4d56]/20 flex items-center justify-center transition-all duration-150 ease-out cursor-pointer hover:scale-110 active:scale-90 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5] group-hover:-translate-x-0.5 transition-transform duration-150" />
            </button>
          )}

          {/* Services Viewport */}
          <div
            ref={cardsContainerRef}
            className="flex-1 min-w-0 overflow-hidden py-5 sm:py-7"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {filteredServices.length === 0 ? (
              <div className="w-full py-12 text-center bg-white rounded-2xl border border-[#e8e8e3] p-8 shadow-xs">
                <p className="font-mono text-xs font-bold text-[#7c8ba1] uppercase tracking-wider mb-1.5">
                  No services match your current filters
                </p>
                <p className="text-xs text-[#475569] mb-4">
                  Try searching for another keyword or clearing the skills filter.
                </p>
                <button
                  onClick={handleResetAll}
                  className="px-4 py-2 bg-[#fa4d56] text-white font-mono text-xs font-bold uppercase rounded-xl hover:bg-[#e03b44] transition-colors cursor-pointer shadow-xs"
                >
                  Reset All Filters
                </button>
              </div>
            ) : filteredServices.length < 3 ? (
              /* Centered layout when 1 or 2 services */
              <div className="flex items-stretch justify-center gap-5 px-4">
                {filteredServices.map((service, index) => {
                  const outlineColor = service.accentColor || (index === 0 ? "#fa4d56" : index === 1 ? "#3b82f6" : "#8b5cf6");
                  const isSingle = filteredServices.length === 1;
                  const isFirst = index === 0;
                  const cardAnimRef = isSingle ? centerCardRef : isFirst ? leftCardRef : rightCardRef;
                  return (
                    <div
                      key={service.id}
                      style={{ width: `${Math.min(cardWidth, 420)}px` }}
                      className="service-card-item relative flex-shrink-0 transition-all duration-150 ease-out select-none"
                    >
                      <div ref={cardAnimRef} className="h-full w-full">
                        <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-[#e8e8e3] shadow-[0_8px_25px_-6px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.1)] hover:border-[#090d15]/20 flex flex-col justify-between h-full group relative overflow-hidden min-h-[420px] sm:min-h-[440px]">
                          <div>
                            <div className="flex items-center justify-between mb-1 sm:mb-1.5 relative z-10">
                              <span
                                className="font-mono font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-none select-none text-outline-number"
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

                              {/* Category Badge */}
                              <span
                                className={`px-2.5 py-0.5 rounded-full font-mono text-[9px] sm:text-[9.5px] font-bold uppercase tracking-wider ${
                                  service.badgeBg || "bg-[#f1f5f9]"
                                } ${service.badgeTextColor || "text-[#475569]"}`}
                              >
                                {service.category}
                              </span>
                            </div>

                            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-2.5 bg-transparent flex items-center justify-center">
                              <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                unoptimized
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-contain group-hover:scale-[1.04] transition-transform duration-500"
                              />
                            </div>

                            <h3 className="text-base sm:text-lg font-black uppercase font-heading text-[#090d15] tracking-tight mb-1 group-hover:text-[#fa4d56] transition-colors">
                              {service.title}
                            </h3>

                            <p className="text-[11px] sm:text-xs text-[#475569] leading-relaxed line-clamp-2">
                              {service.description}
                            </p>
                          </div>

                          {/* Centered View Service Button */}
                          <div className="mt-3.5 pt-2.5 border-t border-[#f1f5f9] flex justify-center w-full relative z-10">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedServiceId(expandedServiceId === service.id ? null : service.id);
                              }}
                              style={{
                                background: getServiceGradient(service.id, outlineColor),
                                boxShadow: `0 4px 14px -2px ${outlineColor}66`,
                              }}
                              className="inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-xl font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white border border-white/20 hover:brightness-110 hover:scale-[1.04] active:scale-[0.96] transition-all duration-200 cursor-pointer shadow-sm"
                            >
                              <span>View Service</span>
                              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                            </button>
                          </div>

                          {/* Slide-up Color Overlay on Click */}
                          <ServiceCardOverlay
                            service={service}
                            outlineColor={outlineColor}
                            displayIndex={index + 1}
                            isOpen={expandedServiceId === service.id}
                            onClose={() => setExpandedServiceId(null)}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Infinite Peek Carousel Track matching ProjectsSection */
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
                  const serviceIndex = ((activeIndex + k) % N + N) % N;
                  const service = filteredServices[serviceIndex];
                  if (!service) return null;
                  const isCenter = isDesktop ? k === 0 : (isTablet ? k === 0 : true);
                  const isLeft = k === -1;
                  const isRight = k === 1;
                  const cardAnimRef = isCenter ? centerCardRef : isLeft ? leftCardRef : isRight ? rightCardRef : undefined;
                  const outlineColor = service.accentColor || (serviceIndex === 0 ? "#fa4d56" : serviceIndex === 1 ? "#3b82f6" : "#8b5cf6");

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
                        else if (k !== 0) handleDotClick(serviceIndex);
                      }}
                      className={`service-card-item relative flex-shrink-0 transition-all duration-150 ease-out select-none ${
                        !isCenter && !isLeft && !isRight ? "service-outer-slot" : ""
                      } ${
                        isCenter
                          ? "z-20 scale-[1.035] -translate-y-2.5 sm:-translate-y-3 cursor-default"
                          : "z-10 scale-[0.97] translate-y-0 opacity-85 hover:opacity-100 cursor-pointer"
                      }`}
                    >
                      <div ref={cardAnimRef} className="h-full w-full">
                        <div
                          className={`bg-white rounded-2xl p-3.5 sm:p-4 border transition-all duration-150 ease-out flex flex-col justify-between h-full group relative overflow-hidden min-h-[420px] sm:min-h-[440px] ${
                            isCenter
                              ? "ring-2"
                              : "border-[#e2e8f0] shadow-[0_4px_16px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_-6px_rgba(0,0,0,0.1)] hover:border-[#090d15]/20"
                          }`}
                          style={
                            isCenter
                              ? {
                                  borderColor: outlineColor,
                                  boxShadow: `0 20px 40px -12px rgba(9, 13, 21, 0.14), 0 8px 20px -6px ${outlineColor}30`,
                                }
                              : undefined
                          }
                        >
                          {/* Top Section */}
                          <div>
                            {/* Large Transparent Outline Number & Category Badge */}
                            <div className="flex items-center justify-between mb-1 sm:mb-1.5 relative z-10">
                              <span
                                className="font-mono font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-none select-none text-outline-number transition-all duration-150 ease-out"
                                style={{
                                  color: "transparent",
                                  WebkitTextFillColor: "transparent",
                                  WebkitTextStrokeWidth: isCenter ? "2.25px" : "1.75px",
                                  WebkitTextStrokeColor: outlineColor,
                                  filter: isCenter ? `drop-shadow(0 2px 10px ${outlineColor}40)` : "none",
                                  opacity: isCenter ? 1 : 0.75,
                                }}
                              >
                                {String(serviceIndex + 1).padStart(2, "0")}
                              </span>

                              {/* Category Badge */}
                              <span
                                className={`px-2.5 py-0.5 rounded-full font-mono text-[9px] sm:text-[9.5px] font-bold uppercase tracking-wider ${
                                  service.badgeBg || "bg-[#f1f5f9]"
                                } ${service.badgeTextColor || "text-[#475569]"}`}
                              >
                                {service.category}
                              </span>
                            </div>

                            {/* 3D Mockup Visual Image (Aspect Ratio 16/10 for slightly increased height) */}
                            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-2.5 bg-transparent flex items-center justify-center">
                              <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                unoptimized
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className={`object-contain transition-transform duration-500 ${
                                  isCenter ? "scale-[1.03]" : "scale-100"
                                } group-hover:scale-[1.05]`}
                              />
                            </div>

                            {/* Service Title */}
                            <h3 className="text-base sm:text-lg font-black uppercase font-heading text-[#090d15] tracking-tight mb-1 group-hover:text-[#fa4d56] transition-colors">
                              {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[11px] sm:text-xs text-[#475569] leading-relaxed line-clamp-2">
                              {service.description}
                            </p>
                          </div>

                          {/* Centered View Service Button */}
                          <div className="mt-3.5 pt-2.5 border-t border-[#f1f5f9] flex justify-center w-full relative z-10">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedServiceId(expandedServiceId === service.id ? null : service.id);
                              }}
                              style={{
                                background: getServiceGradient(service.id, outlineColor),
                                boxShadow: `0 4px 14px -2px ${outlineColor}66`,
                              }}
                              className="inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-xl font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white border border-white/20 hover:brightness-110 hover:scale-[1.04] active:scale-[0.96] transition-all duration-200 cursor-pointer shadow-sm"
                            >
                              <span>View Service</span>
                              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                            </button>
                          </div>

                          {/* Slide-up Color Overlay on Click */}
                          <ServiceCardOverlay
                            service={service}
                            outlineColor={outlineColor}
                            displayIndex={serviceIndex + 1}
                            isOpen={expandedServiceId === service.id}
                            onClose={() => setExpandedServiceId(null)}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Arrow Button */}
          {filteredServices.length > visibleCards && (
            <button
              onClick={handleNext}
              aria-label="Next service"
              className="group flex-shrink-0 z-30 w-8.5 h-8.5 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/95 hover:bg-[#fa4d56] text-[#090d15] hover:text-white border border-[#e2e2da] hover:border-[#fa4d56] shadow-[0_8px_24px_rgba(9,13,21,0.12)] hover:shadow-[0_12px_28px_rgba(250,77,86,0.3)] hover:ring-4 hover:ring-[#fa4d56]/20 flex items-center justify-center transition-all duration-150 ease-out cursor-pointer hover:scale-110 active:scale-90 backdrop-blur-sm"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 transition-transform duration-150" />
            </button>
          )}
        </div>

        {/* Modern Pill Pagination Indicators */}
        {filteredServices.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-7 sm:mt-8">
            {filteredServices.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                aria-label={`Go to service ${i + 1}`}
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
