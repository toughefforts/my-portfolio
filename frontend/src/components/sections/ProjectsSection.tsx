"use client";

import Image from "next/image";
import { projects } from "@/data/projects";
import RevealAnimation from "@/components/animations/RevealAnimation";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-20 border-b border-[#e2e2da] bg-[#f8f8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Title with Cursive Accent */}
        <div className="relative mb-16">
          <RevealAnimation>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase font-heading tracking-tight text-[#090d15] leading-none inline-block">
              THE WORK<span className="text-[#fa4d56] ml-1 select-none">.</span>
            </h2>
          </RevealAnimation>
          <span className="absolute -bottom-5 left-6 sm:left-14 text-3xl sm:text-5xl font-script text-[#fa4d56] rotate-[-4deg] pointer-events-none font-semibold">
            Selected Projects &bull; Case Studies
          </span>
        </div>

        {/* 3-Column Projects Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <RevealAnimation key={project.id} delay={0.1 * (index + 1)}>
              <div className="studio-card p-5 flex flex-col justify-between h-full group">
                {/* Image Container */}
                <div>
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#f1f1eb] mb-5 border border-[#e2e2da]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[#090d15] text-white px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest font-bold">
                      FIG. 0{index + 1}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-heading uppercase text-[#090d15] tracking-tight group-hover:text-[#fa4d56] transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-[#f1f1eb] text-[#475569] text-[10px] font-mono uppercase font-semibold border border-[#e2e2da]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-[#e2e2da] flex items-center justify-between font-mono text-xs uppercase font-semibold">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#090d15] hover:text-[#fa4d56] transition-colors"
                  >
                    <span>Live Preview</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#fa4d56]" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#7c8ba1] hover:text-[#090d15] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
