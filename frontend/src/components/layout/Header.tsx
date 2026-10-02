"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navigationItems } from "@/data/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

/**
 * Fixed sticky header component featuring scroll-reactive blur styling,
 * smooth anchor scrolling with header height compensation, active section scroll-spy,
 * and responsive mobile drawer navigation.
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /**
   * Scrolls smoothly to the target section with an 80px offset to accommodate the fixed header.
   */
  const scrollToSection = (href: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const sectionId = href === "/" ? "home" : href.replace("/", "");
    const el = document.getElementById(sectionId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
      window.history.pushState(null, "", href);
      setActiveSection(sectionId);
    } else {
      window.location.href = href;
    }
  };

  useEffect(() => {
    // Initial scroll if URL has a clean path like /about or /projects
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      if (currentPath && currentPath !== "/") {
        const targetId = currentPath.replace("/", "");
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          setTimeout(() => {
            const top = targetEl.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: "smooth" });
            setActiveSection(targetId);
          }, 400);
        }
      }
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navigationItems.map((item) =>
        item.href === "/" ? "home" : item.href.replace("/", "")
      );
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            const targetPath = section === "home" ? "/" : `/${section}`;
            if (window.location.pathname !== targetPath) {
              window.history.replaceState(null, "", targetPath);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#fa4d56] transition-transform group-hover:scale-125" />
          <span className="font-heading font-bold text-lg sm:text-xl tracking-tight uppercase text-[#090d15]">
            SACHIN SHARMA
          </span>
        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs uppercase tracking-wider">
          {navigationItems.map((item) => {
            const sectionId = item.href === "/" ? "home" : item.href.replace("/", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(item.href, e)}
                className={`relative py-1 transition-colors cursor-pointer ${
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
