"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

/**
 * Fixed sticky header component featuring scroll-reactive blur styling,
 * smooth anchor scrolling with header height compensation, active section scroll-spy,
 * and responsive mobile drawer navigation.
 */
export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const isProgrammaticScroll = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const restoreTimerRef = useRef<NodeJS.Timeout | null>(null);

  /**
   * Scrolls smoothly to the target section on a single click with an 80px offset
   * to accommodate the fixed header, while keeping clean URLs without '#' symbols.
   */
  const scrollToSection = (href: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    // Cancel any pending restoration timer so it doesn't fight the user's click
    if (restoreTimerRef.current) {
      clearTimeout(restoreTimerRef.current);
      restoreTimerRef.current = null;
    }

    const sectionId = href === "/" ? "home" : href.replace(/^\/?#?/, "");
    const el = document.getElementById(sectionId);

    // Check if we are on a subpage (e.g. /blog/[id], /preview/[id], /privacy-policy) where home sections don't exist
    const isSubpage =
      pathname?.startsWith("/blog/") ||
      pathname?.startsWith("/preview/") ||
      pathname?.startsWith("/education/") ||
      pathname?.startsWith("/privacy") ||
      pathname?.startsWith("/terms") ||
      pathname?.startsWith("/sitemap");

    // If on a subpage or the target element doesn't exist in current DOM:
    if (isSubpage || (!el && sectionId !== "home")) {
      sessionStorage.setItem("portfolio_active_section", sectionId);
      sessionStorage.setItem("portfolio_target_scroll", sectionId);
      window.location.href = sectionId === "home" ? "/" : `/${sectionId}`;
      return;
    }

    // If target is home or the DOM element exists on current page
    if (sectionId === "home" || el) {
      // 1. Instant 0ms visual tab highlight for immediate response
      setActiveSection(sectionId);
      sessionStorage.setItem("portfolio_active_section", sectionId);

      // 2. Lock scroll-spy updates during the animation
      isProgrammaticScroll.current = true;
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 1000);

      // 3. Compute exact pixel target position with 80px fixed header offset
      const navOffset = 80;
      const targetTop =
        sectionId === "home"
          ? 0
          : el
          ? Math.max(0, el.getBoundingClientRect().top + window.scrollY - navOffset)
          : 0;

      // 4. Update clean URL path without '#'
      const targetPath = sectionId === "home" ? "/" : `/${sectionId}`;
      window.history.replaceState(null, "", targetPath);
      sessionStorage.setItem("portfolio_scroll_y", String(targetTop));

      // 5. Infallible Dual-Engine Scroll Execution:
      // A) If Lenis smooth scroll is present, scroll using exact numeric targetTop
      const lenisInstance = (
        window as unknown as {
          __lenis?: {
            scrollTo: (
              target: number,
              opts?: {
                offset?: number;
                duration?: number;
                immediate?: boolean;
                force?: boolean;
                onComplete?: () => void;
              }
            ) => void;
            resize?: () => void;
          };
        }
      ).__lenis;

      if (lenisInstance && typeof lenisInstance.scrollTo === "function") {
        try {
          if (typeof lenisInstance.resize === "function") lenisInstance.resize();
          lenisInstance.scrollTo(targetTop, {
            offset: 0,
            duration: 0.9,
            force: true,
            onComplete: () => {
              isProgrammaticScroll.current = false;
            },
          });
        } catch {
          // If Lenis fails, native scroll below handles it
        }
      }

      // B) ALWAYS execute native browser smooth scroll as guaranteed primary/fallback
      window.scrollTo({ top: targetTop, behavior: "smooth" });
    } else {
      window.location.href = href.startsWith("/") ? href : `/${href}`;
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Save scroll position before reload
    const handleBeforeUnload = () => {
      sessionStorage.setItem("portfolio_scroll_y", String(window.scrollY));
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Initial scroll restoration on refresh or navigation from subpages
    const path = window.location.pathname;
    const cleanPath =
      path !== "/" &&
      !path.startsWith("/preview") &&
      !path.includes("/[") &&
      !path.startsWith("/education/") &&
      !path.startsWith("/blog/") &&
      !path.startsWith("/privacy") &&
      !path.startsWith("/terms") &&
      !path.startsWith("/sitemap")
        ? path.replace("/", "")
        : "";

    // Automatically detect and sanitize any '#' in incoming URLs (e.g. /services#projects -> /projects)
    let hashSection = "";
    if (typeof window !== "undefined" && window.location.hash) {
      const parsedHash = window.location.hash.replace(/^#+/, "");
      if (parsedHash) {
        hashSection = parsedHash;
        window.history.replaceState(null, "", `/${parsedHash}`);
      }
    }

    const targetScroll = sessionStorage.getItem("portfolio_target_scroll");
    const savedSection = sessionStorage.getItem("portfolio_active_section");
    const targetId =
      hashSection || targetScroll || cleanPath || (savedSection && savedSection !== "home" ? savedSection : "");

    // Clear one-time target scroll flag
    if (targetScroll) {
      sessionStorage.removeItem("portfolio_target_scroll");
    }

    if (targetId && targetId !== "home") {
      setActiveSection(targetId);

      const scrollToTarget = () => {
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return false;

        const navOffset = 80;
        const targetTop = Math.max(0, targetEl.getBoundingClientRect().top + window.scrollY - navOffset);

        // Native smooth scroll
        window.scrollTo({ top: targetTop, behavior: "smooth" });

        // Lenis sync
        const lenisInstance = (
          window as unknown as {
            __lenis?: {
              scrollTo: (
                target: number,
                opts?: { offset?: number; duration?: number; force?: boolean }
              ) => void;
              resize?: () => void;
            };
          }
        ).__lenis;

        if (lenisInstance && typeof lenisInstance.scrollTo === "function") {
          try {
            if (typeof lenisInstance.resize === "function") lenisInstance.resize();
            lenisInstance.scrollTo(targetTop, { offset: 0, duration: 0.9, force: true });
          } catch {}
        }

        return true;
      };

      // Try immediately, then at 60ms, 180ms, 400ms to guarantee execution as soon as element is ready
      if (!scrollToTarget()) {
        const t1 = setTimeout(scrollToTarget, 60);
        const t2 = setTimeout(scrollToTarget, 180);
        const t3 = setTimeout(scrollToTarget, 400);
        restoreTimerRef.current = t3;
      } else {
        setTimeout(scrollToTarget, 150);
      }
    } else if (targetId === "home") {
      setActiveSection("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Skip scroll-spy calculation during programmatic navigation
      if (isProgrammaticScroll.current) return;

      const sectionIds = [
        "home",
        "about",
        "services",
        "education",
        "skills",
        "projects",
        "testimonials",
        "blog",
        "cta",
        "contact",
      ];
      const scrollPosition = window.scrollY + 180;

      for (const section of sectionIds) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            sessionStorage.setItem("portfolio_active_section", section);
            sessionStorage.setItem("portfolio_scroll_y", String(window.scrollY));
            break;
          }
        }
      }
    };

    const handleHashChange = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const h = window.location.hash.replace(/^#+/, "");
        if (h) {
          window.history.replaceState(null, "", `/${h}`);
          scrollToSection(`/${h}`);
        }
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
      if (restoreTimerRef.current) clearTimeout(restoreTimerRef.current);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  if (pathname?.startsWith("/preview") || pathname?.startsWith("/under-construction")) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#f8f8f5]/95 backdrop-blur-md border-b border-[#e2e2da] py-3.5 shadow-xs"
          : "bg-[#f8f8f5] border-b border-[#e2e2da] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand Name */}
        <Link
          href="/"
          onClick={(e) => scrollToSection("/", e)}
          className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer select-none"
        >
          {/* Overlapping Circles Logo Mark */}
          <svg
            className="w-6 h-5 sm:w-7 sm:h-6 shrink-0 transition-transform duration-300 group-hover:scale-105"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9" cy="9" r="7.5" fill="#090d15" />
            <circle cx="18" cy="14" r="7.5" fill="#e02838" />
          </svg>
          <span className="font-heading font-black text-lg sm:text-xl tracking-tight uppercase leading-none">
            <span className="text-[#090d15]">SACHIN</span>{" "}
            <span className="text-[#e02838]">SHARMA</span>
          </span>
        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs uppercase tracking-wider">
          {navigationItems.map((item) => {
            const sectionId = item.href === "/" ? "home" : item.href.replace(/^\/?#?/, "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(item.href, e)}
                className={`relative py-2 px-1 transition-colors cursor-pointer select-none ${
                  isActive
                    ? "text-[#090d15] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#fa4d56]"
                    : "text-[#64748b] hover:text-[#090d15]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="/contact"
            onClick={(e) => scrollToSection("/contact", e)}
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#090d15] text-[#090d15] hover:bg-[#fa4d56] hover:border-[#fa4d56] hover:text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
          className="md:hidden p-2 text-[#090d15] border border-[#e2e2da] rounded-none cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#e2e2da] bg-[#f8f8f5] px-6 py-6 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 font-mono text-sm uppercase">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  scrollToSection(item.href, e);
                }}
                className="flex items-center justify-between py-2 border-b border-[#e2e2da] text-[#090d15] cursor-pointer"
              >
                <span>{item.label}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#fa4d56]" />
              </a>
            ))}
            <div className="pt-2">
              <a
                href="/contact"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  scrollToSection("/contact", e);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#090d15] hover:bg-[#fa4d56] text-white text-xs uppercase tracking-widest font-mono font-bold transition-colors cursor-pointer"
              >
                <span>Contact Sachin</span>
                <ArrowUpRight className="w-4 h-4 text-[#fa4d56]" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
