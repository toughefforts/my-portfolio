"use client";

import RevealAnimation from "@/components/animations/RevealAnimation";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-20 border-b border-[#e2e2da] bg-[#f1f1eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="studio-card p-8 sm:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden">
          {/* Left Text */}
          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="font-mono text-xs uppercase tracking-widest text-[#7c8ba1] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#fa4d56]" />
              <span>[09] &bull; PROJECT INQUIRY</span>
            </div>

            <div className="relative">
              <RevealAnimation>
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase font-heading tracking-tight text-[#090d15] leading-none">
                  HAVE A PROJECT <br />
                  IN MIND?
                </h2>
              </RevealAnimation>
              <span className="absolute -bottom-4 sm:-bottom-5 left-8 sm:left-20 text-4xl sm:text-6xl font-script text-[#fa4d56] rotate-[-5deg] pointer-events-none font-semibold">
                Let&apos;s Build
              </span>
            </div>

            <RevealAnimation delay={0.1}>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed pt-2">
                Available for freelance engineering, high-scale web applications, consulting, and full-time technical roles.
              </p>
            </RevealAnimation>
          </div>

          {/* Right Action Buttons */}
          <RevealAnimation delay={0.2}>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0 relative z-10">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("contact");
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top, behavior: "smooth" });
                    window.history.pushState(null, "", "/contact");
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#fa4d56] hover:bg-[#e03b44] text-white font-mono text-xs uppercase tracking-widest font-bold transition-colors shadow-xs cursor-pointer"
              >
                <span>Start Conversation</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:officialsachin9910@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#090d15] text-[#090d15] hover:bg-[#090d15] hover:text-white font-mono text-xs uppercase tracking-widest font-bold transition-colors"
              >
                <span>Email Directly</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
