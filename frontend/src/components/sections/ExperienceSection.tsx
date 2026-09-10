"use client";

import { experiences } from "@/data/experiences";
import RevealAnimation from "@/components/animations/RevealAnimation";

export default function ExperienceSection() {
  const workExp = experiences.filter((e) => e.type === "work");
  const eduExp = experiences.filter((e) => e.type === "education");

  return (
    <section id="experience" className="py-16 sm:py-20 border-b border-[#e2e2da] bg-[#f8f8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Index Header */}
        <div className="flex items-center justify-between border-b border-[#e2e2da] pb-3 mb-12 font-mono text-xs uppercase tracking-widest text-[#7c8ba1]">
          <div className="flex items-center gap-2">
            <span>[04]</span>
            <span>&bull;</span>
            <span>EXPERIENCE &bull; CHRONOLOGY</span>
          </div>
          <div>
            <span>CAREER TRACK RECORD</span>
          </div>
        </div>

        {/* Section Title with Cursive Accent */}
        <div className="relative mb-16">
          <RevealAnimation>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase font-heading tracking-tight text-[#090d15] leading-none inline-block">
              EXPERIENCE &amp; HISTORY<span className="text-[#fa4d56] ml-1 select-none">.</span>
            </h2>
          </RevealAnimation>
          <span className="absolute -bottom-5 left-6 sm:left-14 text-3xl sm:text-5xl font-script text-[#fa4d56] rotate-[-4deg] pointer-events-none font-semibold">
            Track Record &bull; Education
          </span>
        </div>

        {/* 2-Column Ledger: Work History & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work History */}
          <div className="studio-card p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-[#090d15] pb-3 mb-6 font-mono text-xs uppercase font-bold text-[#090d15]">
              <span>{"// PROFESSIONAL WORK HISTORY"}</span>
              <span className="text-[#fa4d56]">[ENGINEERING]</span>
            </div>

            <div className="divide-y divide-[#e2e2da]">
              {workExp.map((item, index) => (
                <RevealAnimation key={item.id} delay={0.1 * (index + 1)}>
                  <div className="py-5 space-y-2 group">
                    <div className="flex items-center justify-between font-mono text-xs text-[#7c8ba1]">
                      <span className="flex items-center gap-1.5 text-[#090d15] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#fa4d56]" />
                        {item.organization}
                      </span>
                      <span>{item.period}</span>
                    </div>

                    <h3 className="text-lg font-bold font-heading uppercase text-[#090d15] tracking-tight group-hover:text-[#fa4d56] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="studio-card p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-[#090d15] pb-3 mb-6 font-mono text-xs uppercase font-bold text-[#090d15]">
              <span>{"// ACADEMIC BACKGROUND"}</span>
              <span className="text-[#fa4d56]">[DEGREES]</span>
            </div>


            <div className="divide-y divide-[#e2e2da]">
              {eduExp.map((item, index) => (
                <RevealAnimation key={item.id} delay={0.1 * (index + 1)}>
                  <div className="py-5 space-y-2 group">
                    <div className="flex items-center justify-between font-mono text-xs text-[#7c8ba1]">
                      <span className="flex items-center gap-1.5 text-[#090d15] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#fa4d56]" />
                        {item.organization}
                      </span>
                      <span>{item.period}</span>
                    </div>

                    <h3 className="text-lg font-bold font-heading uppercase text-[#090d15] tracking-tight group-hover:text-[#fa4d56] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
