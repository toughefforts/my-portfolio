"use client";

import Image from "next/image";
import { blogPosts } from "@/data/blog-posts";
import RevealAnimation from "@/components/animations/RevealAnimation";
import { ArrowUpRight } from "lucide-react";

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 sm:py-20 border-b border-[#e2e2da] bg-[#f8f8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Index Header */}
        <div className="flex items-center justify-between border-b border-[#e2e2da] pb-3 mb-12 font-mono text-xs uppercase tracking-widest text-[#7c8ba1]">
          <div className="flex items-center gap-2">
            <span>[08]</span>
            <span>&bull;</span>
            <span>CASE STUDIES &bull; WRITINGS</span>
          </div>
          <div>
            <span>TECHNICAL INSIGHTS</span>
          </div>
        </div>

        {/* Section Title with Cursive Accent */}
        <div className="relative mb-16">
          <RevealAnimation>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase font-heading tracking-tight text-[#090d15] leading-none inline-block">
              CASE STUDIES<span className="text-[#fa4d56] ml-1 select-none">.</span>
            </h2>
          </RevealAnimation>
          <span className="absolute -bottom-5 left-6 sm:left-14 text-3xl sm:text-5xl font-script text-[#fa4d56] rotate-[-4deg] pointer-events-none font-semibold">
            Publications &bull; Analysis
          </span>
        </div>

        {/* 3-Column Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <RevealAnimation key={post.id} delay={0.1 * (index + 1)}>
              <article className="studio-card p-5 flex flex-col justify-between h-full group">
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f1f1eb] mb-5 border border-[#e2e2da]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#fa4d56] text-white px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest font-bold">
                      {post.category}
                    </div>
                  </div>

                  {/* Date */}
                  <div className="font-mono text-[10px] uppercase text-[#7c8ba1] mb-2 tracking-wider">
                    {post.date} &bull; ARTICLE 0{index + 1}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-heading uppercase text-[#090d15] tracking-tight group-hover:text-[#fa4d56] transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer Read Link */}
                <div className="pt-4 border-t border-[#e2e2da] flex items-center justify-between font-mono text-xs uppercase font-semibold text-[#090d15]">
                  <span>Read Publication</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#fa4d56] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </article>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
