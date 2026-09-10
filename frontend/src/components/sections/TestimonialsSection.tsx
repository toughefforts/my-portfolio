"use client";

import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import RevealAnimation from "@/components/animations/RevealAnimation";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 border-b border-[#e2e2da] bg-[#f8f8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Index Header */}
        <div className="flex items-center justify-between border-b border-[#e2e2da] pb-3 mb-12 font-mono text-xs uppercase tracking-widest text-[#7c8ba1]">
          <div className="flex items-center gap-2">
            <span>[07]</span>
            <span>&bull;</span>
            <span>TESTIMONIALS &bull; REVIEWS</span>
          </div>
          <div>
            <span>CLIENT ENDORSEMENTS</span>
          </div>
        </div>

        {/* Section Title with Cursive Accent */}
        <div className="relative mb-16">
          <RevealAnimation>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase font-heading tracking-tight text-[#090d15] leading-none inline-block">
              TESTIMONIALS<span className="text-[#fa4d56] ml-1 select-none">.</span>
            </h2>
          </RevealAnimation>
          <span className="absolute -bottom-5 left-6 sm:left-14 text-3xl sm:text-5xl font-script text-[#fa4d56] rotate-[-4deg] pointer-events-none font-semibold">
            Endorsements &bull; Praise
          </span>
        </div>

        {/* 3-Column Reviews Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#e2e2da] bg-white divide-y md:divide-y-0 md:divide-x divide-[#e2e2da] shadow-xs">
          {testimonials.map((item, index) => (
            <RevealAnimation key={item.id} delay={0.1 * (index + 1)}>
              <div className="p-8 sm:p-10 flex flex-col justify-between h-full group hover:bg-[#f8f8f5] transition-colors">
                <div>
                  {/* Rating & Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-[#fa4d56] fill-[#fa4d56]" />
                      ))}
                    </div>
                    <span className="font-mono text-xs text-[#7c8ba1]">[0{index + 1}]</span>
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-[#475569] leading-relaxed italic mb-8">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author attribution */}
                <div className="pt-6 border-t border-[#e2e2da] flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#f1f1eb] border border-[#e2e2da] shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm uppercase text-[#090d15] tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-[11px] font-mono text-[#7c8ba1] uppercase">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
