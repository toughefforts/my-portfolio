"use client";

import { navigationItems } from "@/data/navigation";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "@/components/ui/BrandIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#f8f8f5] text-[#090d15] py-14 border-t border-[#e2e2da]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#e2e2da]">
          {/* Brand */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-[#fa4d56]" />
              <span className="font-heading font-black text-2xl uppercase tracking-tight text-[#090d15]">
                SACHIN SHARMA
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] max-w-md font-sans">
              Full-Stack Software Developer dedicated to engineering clean, reliable, and high-performance digital architectures.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 border border-[#e2e2da] bg-white hover:border-[#090d15] hover:text-[#fa4d56] flex items-center justify-center transition-colors shadow-xs"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 border border-[#e2e2da] bg-white hover:border-[#090d15] hover:text-[#fa4d56] flex items-center justify-center transition-colors shadow-xs"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 border border-[#e2e2da] bg-white hover:border-[#090d15] hover:text-[#fa4d56] flex items-center justify-center transition-colors shadow-xs"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 border border-[#e2e2da] bg-white hover:border-[#090d15] hover:text-[#fa4d56] flex items-center justify-center transition-colors shadow-xs"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-mono text-[11px] uppercase font-bold text-[#7c8ba1] tracking-widest mb-3">
              INDEX
            </h4>
            <ul className="space-y-1.5 font-mono text-xs uppercase">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const sectionId = item.href === "/" ? "home" : item.href.replace("/", "");
                      const el = document.getElementById(sectionId);
                      if (el) {
                        const top = el.getBoundingClientRect().top + window.scrollY - 80;
                        window.scrollTo({ top, behavior: "smooth" });
                        window.history.pushState(null, "", item.href);
                      }
                    }}
                    className="text-[#475569] hover:text-[#fa4d56] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Details */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-mono text-[11px] uppercase font-bold text-[#7c8ba1] tracking-widest mb-3">
              OFFICE
            </h4>
            <div className="space-y-1 font-mono text-xs text-[#475569]">
              <p>Delhi, India</p>
              <p className="text-[#090d15] font-semibold">sachinsharma@awesome.com</p>
              <p>+91 90965 43310</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#7c8ba1] uppercase">
          <div>
            <span>&copy; {new Date().getFullYear()} SACHIN SHARMA // ALL RIGHTS RESERVED</span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#e2e2da] bg-white hover:border-[#090d15] text-[#090d15] transition-colors cursor-pointer shadow-xs"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3 h-3 text-[#fa4d56]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
