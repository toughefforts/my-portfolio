"use client";

import { skills } from "@/data/skills";
import RevealAnimation from "@/components/animations/RevealAnimation";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-[#e2e2da] bg-[#f8f8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Index Header */}
        <div className="flex items-center justify-between border-b border-[#e2e2da] pb-3 mb-12 font-mono text-xs uppercase tracking-widest text-[#7c8ba1]">
          <div className="flex items-center gap-2">
            <span>[06]</span>
            <span>&bull;</span>
            <span>STACK &bull; CORE COMPETENCIES</span>
          </div>
          <div>
            <span>TECHNICAL SPECIFICATIONS</span>
          </div>
        </div>

        {/* Section Title with Cursive Accent */}
        <div className="relative mb-16">
          <RevealAnimation>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase font-heading tracking-tight text-[#090d15] leading-none inline-block">
              CORE SKILLS<span className="text-[#fa4d56] ml-1 select-none">.</span>
            </h2>
          </RevealAnimation>
          <span className="absolute -bottom-5 left-6 sm:left-14 text-3xl sm:text-5xl font-script text-[#fa4d56] rotate-[-4deg] pointer-events-none font-semibold">
            Technologies &bull; Tooling
          </span>
        </div>

        {/* Skills Architectural Table Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border border-[#e2e2da] bg-white divide-x divide-y divide-[#e2e2da] shadow-xs">
          {skills.map((skill, index) => (
            <RevealAnimation key={skill.name} delay={0.03 * (index + 1)}>
              <div className="p-6 flex flex-col justify-between h-36 group hover:bg-[#f8f8f5] transition-colors">
                <div className="flex items-center justify-between font-mono text-[10px] text-[#7c8ba1]">
                  <span>[0{index + 1}]</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#fa4d56] transition-colors" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg uppercase text-[#090d15] tracking-tight group-hover:text-[#fa4d56] transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-[10px] font-mono uppercase text-[#7c8ba1] mt-0.5">
                    Production Stack
                  </p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
