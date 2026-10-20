"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import {
  projectStagingData,
  defaultStagingConfig,
} from "@/data/project-staging";
import {
  Code2,
  Settings,
  Cloud,
  Rocket,
} from "lucide-react";

export default function UnderConstructionPreviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);

  // Match project by id
  const project = projects.find(
    (p) => p.id.toLowerCase() === resolvedParams.id.toLowerCase()
  );

  // If not found, fallback to first project or notFound
  if (!project) {
    notFound();
  }

  // Lookup distinct under-construction staging configuration for this specific project
  const staging =
    projectStagingData[project.id.toLowerCase()] || defaultStagingConfig;

  // Real-time animated counter and expanding progress line to this project's unique percentage
  const [progress, setProgress] = useState(0);

  // Typewriter live animation for status label
  const fullStatusLabel = staging.statusLabel.replace(/\.+$/, "");
  const [typedLabel, setTypedLabel] = useState("");

  useEffect(() => {
    let charIndex = 0;
    setTypedLabel("");
    let interval: NodeJS.Timeout;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        charIndex++;
        setTypedLabel(fullStatusLabel.slice(0, charIndex));
        if (charIndex >= fullStatusLabel.length) {
          clearInterval(interval);
        }
      }, 40);
    }, 300);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [fullStatusLabel]);

  useEffect(() => {
    const target = staging.progress;
    const duration = 2000; // 2 seconds smooth buildup
    const startTime = performance.now();
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);
      // Smooth ease-out cubic curve for natural acceleration and deceleration
      const easeOutProgress = 1 - Math.pow(1 - progressRatio, 3);
      const currentVal = Math.round(easeOutProgress * target);

      setProgress(currentVal);

      if (progressRatio < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, 250);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [staging.progress]);

  return (
    <div className="relative w-full min-h-screen min-h-[100dvh] md:min-h-[calc(100vw*964/1632)] bg-[#fbf5ee] select-none flex flex-col justify-between overflow-x-hidden">
      {/* Background 3D Illustration */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Full-Res Cinematic Rooftop Companions Background (Exact aspect ratio, 100% complete from top to bottom) */}
        <Image
          src="/images/under-construction/good-things-take-time-rooftop.png"
          alt="Under Construction - Good Things Take Time Rooftop"
          fill
          priority
          unoptimized
          className="object-cover object-top"
        />

        {/* Subtle wash on mobile/smaller screens to maintain perfect text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbf5ee] via-[#fbf5ee]/85 to-transparent lg:hidden pointer-events-none z-10" />
      </div>

      {/* Top Header / Brand Logo Only (Clicking returns to Portfolio) */}
      <header className="relative z-10 w-full px-5 sm:px-10 lg:px-14 pt-4 sm:pt-6 lg:pt-7 shrink-0 flex items-center justify-between">
        <Link
          href="/projects"
          title="Return to Portfolio"
          className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer select-none"
        >
          {/* Overlapping Circles Logo Mark */}
          <svg
            className="w-7 h-6 sm:w-8 sm:h-7 shrink-0 transition-transform duration-300 group-hover:scale-105"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9" cy="9" r="7.5" fill="#090d15" />
            <circle cx="18" cy="14" r="7.5" fill="#fd1a38" />
          </svg>
          <span className="font-heading font-black text-xl sm:text-2xl lg:text-[26px] tracking-tight uppercase leading-none">
            <span className="text-[#090d15]">SACHIN</span>{" "}
            <span className="text-[#fd1a38]">SHARMA</span>
          </span>
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 px-5 sm:px-10 lg:px-14 flex flex-col justify-center min-h-0 py-3 sm:py-5 lg:py-6">
        <div className="max-w-xl w-full flex flex-col justify-center -translate-y-4 sm:-translate-y-8 lg:-translate-y-12">
          
          {/* Pill Badge: ● STAGING STATUS */}
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:py-1.5 rounded-full bg-white/80 border border-[#e2e8f0] shadow-xs mb-2.5 sm:mb-3.5 backdrop-blur-sm w-fit">
            <span className="w-2 h-2 rounded-full bg-[#fd1a38] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#475569]">
              {staging.badgeText}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-2 sm:mb-3">
            <span className="block font-heading font-black text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] tracking-tight text-[#090d15] uppercase leading-[0.92]">
              UNDER
            </span>
            <span className="block font-heading font-black text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] tracking-tight text-[#fd1a38] uppercase leading-[0.92]">
              CONSTRUCTION
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="font-editorial text-[13px] sm:text-sm lg:text-[15.5px] font-medium text-[#334155] leading-relaxed tracking-[-0.015em] max-w-lg mb-3.5 sm:mb-5 lg:mb-6">
            {staging.description}
          </p>

          {/* Progress Bar with Animated Barber-Pole / Hazard Stripes + Inline Dynamic % & Label */}
          <div className="flex items-center gap-3 sm:gap-4 max-w-lg w-full mb-4 sm:mb-6">
            {/* The Bar Track */}
            <div className="flex-1 h-3 sm:h-3.5 lg:h-4 bg-slate-200/80 rounded-full p-0.5 border border-slate-300/40 relative overflow-hidden shadow-inner">
              <div
                className="h-full rounded-full animated-deploy-bar relative transition-[width] duration-75 ease-out"
                style={{ width: `${progress}%` }}
              >
                {/* Subtle sheen overlay */}
                <div className="absolute inset-0 bg-white/15 animate-pulse" />
              </div>
            </div>

            {/* Dynamic % and Custom Staging Status Label */}
            <div className="flex flex-col items-start leading-none shrink-0 min-w-[65px]">
              <span className="font-heading font-black text-base sm:text-lg text-[#090d15] block tabular-nums">
                {progress}%
              </span>
              <span className="font-mono text-[8.5px] sm:text-[9px] font-bold text-[#94a3b8] tracking-widest flex items-center uppercase mt-0.5">
                <span>{staging.statusLabel.replace(/\.+$/, "")}</span>
                <span className="inline-flex tracking-normal ml-0.5 font-black">
                  <span className="anim-dot-1">.</span>
                  <span className="anim-dot-2">.</span>
                  <span className="anim-dot-3">.</span>
                </span>
              </span>
            </div>
          </div>

          {/* Stepper Pipeline (Dynamic BUILD -> TEST -> DEPLOY -> LAUNCH Process) */}
          <div className="max-w-md w-full flex items-center justify-between">
            
            {/* Node 1: BUILD */}
            <div className="flex flex-col items-center text-center">
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center mb-1.5 sm:mb-2 relative transition-all duration-300 ${
                  staging.activeStage >= 1
                    ? "bg-[#fd1a38] text-white"
                    : "bg-white border border-slate-300 text-slate-400 shadow-xs"
                }`}
                style={
                  staging.activeStage === 1
                    ? { boxShadow: "0 0 18px 3px rgba(253, 26, 56, 0.65)" }
                    : staging.activeStage > 1
                    ? { boxShadow: "0 3px 12px 1px rgba(253, 26, 56, 0.4)" }
                    : undefined
                }
              >
                <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                {staging.activeStage === 1 && (
                  <span className="absolute -inset-1 rounded-full border-2 border-[#fd1a38]/40 animate-ping pointer-events-none" />
                )}
              </div>
              <span
                className={`font-heading font-bold text-[11px] sm:text-xs uppercase tracking-tight ${
                  staging.activeStage >= 1 ? "text-[#090d15]" : "text-[#64748b]"
                }`}
              >
                BUILD
              </span>
              <span
                className={`font-mono text-[8px] sm:text-[9px] uppercase tracking-wider ${
                  staging.activeStage === 1
                    ? "text-[#fd1a38] font-bold"
                    : "text-[#94a3b8] font-semibold"
                }`}
              >
                {staging.stageSublabels[0]}
              </span>
            </div>

            {/* Connector 1 */}
            <div
              className={`h-[2px] flex-1 mx-1.5 sm:mx-2.5 lg:mx-3 mb-5 sm:mb-6 transition-colors duration-500 ${
                staging.activeStage >= 2 ? "bg-[#fd1a38]" : "bg-slate-300"
              }`}
            />

            {/* Node 2: TEST */}
            <div className="flex flex-col items-center text-center relative">
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center mb-1.5 sm:mb-2 relative transition-all duration-300 ${
                  staging.activeStage >= 2
                    ? "bg-[#fd1a38] text-white"
                    : "bg-white border border-slate-300 text-slate-400 shadow-xs"
                }`}
                style={
                  staging.activeStage === 2
                    ? { boxShadow: "0 0 18px 3px rgba(253, 26, 56, 0.65)" }
                    : staging.activeStage > 2
                    ? { boxShadow: "0 3px 12px 1px rgba(253, 26, 56, 0.4)" }
                    : undefined
                }
              >
                <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                {staging.activeStage === 2 && (
                  <span className="absolute -inset-1 rounded-full border-2 border-[#fd1a38]/40 animate-ping pointer-events-none" />
                )}
              </div>
              <span
                className={`font-heading font-bold text-[11px] sm:text-xs uppercase tracking-tight ${
                  staging.activeStage >= 2 ? "text-[#090d15]" : "text-[#64748b]"
                }`}
              >
                TEST
              </span>
              <span
                className={`font-mono text-[8px] sm:text-[9px] uppercase tracking-wider ${
                  staging.activeStage === 2
                    ? "text-[#fd1a38] font-bold"
                    : "text-[#94a3b8] font-semibold"
                }`}
              >
                {staging.stageSublabels[1]}
              </span>
            </div>

            {/* Connector 2 */}
            <div
              className={`h-[2px] flex-1 mx-1.5 sm:mx-2.5 lg:mx-3 mb-5 sm:mb-6 transition-colors duration-500 ${
                staging.activeStage >= 3 ? "bg-[#fd1a38]" : "bg-slate-300"
              }`}
            />

            {/* Node 3: DEPLOY */}
            <div className="flex flex-col items-center text-center relative">
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center mb-1.5 sm:mb-2 relative transition-all duration-300 ${
                  staging.activeStage >= 3
                    ? "bg-[#fd1a38] text-white"
                    : "bg-white border border-slate-300 text-slate-400 shadow-xs"
                }`}
                style={
                  staging.activeStage === 3
                    ? { boxShadow: "0 0 18px 3px rgba(253, 26, 56, 0.65)" }
                    : staging.activeStage > 3
                    ? { boxShadow: "0 3px 12px 1px rgba(253, 26, 56, 0.4)" }
                    : undefined
                }
              >
                <Cloud className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                {staging.activeStage === 3 && (
                  <span className="absolute -inset-1 rounded-full border-2 border-[#fd1a38]/40 animate-ping pointer-events-none" />
                )}
              </div>
              <span
                className={`font-heading font-bold text-[11px] sm:text-xs uppercase tracking-tight ${
                  staging.activeStage >= 3 ? "text-[#090d15]" : "text-[#64748b]"
                }`}
              >
                DEPLOY
              </span>
              <span
                className={`font-mono text-[8px] sm:text-[9px] uppercase tracking-wider ${
                  staging.activeStage === 3
                    ? "text-[#fd1a38] font-bold"
                    : "text-[#94a3b8] font-semibold"
                }`}
              >
                {staging.stageSublabels[2]}
              </span>
            </div>

            {/* Connector 3 */}
            <div
              className={`h-[2px] flex-1 mx-1.5 sm:mx-2.5 lg:mx-3 mb-5 sm:mb-6 transition-colors duration-500 ${
                staging.activeStage >= 4 ? "bg-[#fd1a38]" : "bg-slate-300"
              }`}
            />

            {/* Node 4: LAUNCH */}
            <div className="flex flex-col items-center text-center relative">
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center mb-1.5 sm:mb-2 relative transition-all duration-300 ${
                  staging.activeStage >= 4
                    ? "bg-[#fd1a38] text-white"
                    : "bg-white border border-slate-300 text-slate-400 shadow-xs"
                }`}
                style={
                  staging.activeStage === 4
                    ? { boxShadow: "0 0 18px 3px rgba(253, 26, 56, 0.65)" }
                    : undefined
                }
              >
                <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
                {staging.activeStage === 4 && (
                  <span className="absolute -inset-1 rounded-full border-2 border-[#fd1a38]/40 animate-ping pointer-events-none" />
                )}
              </div>
              <span
                className={`font-heading font-bold text-[11px] sm:text-xs uppercase tracking-tight ${
                  staging.activeStage >= 4 ? "text-[#090d15]" : "text-[#64748b]"
                }`}
              >
                LAUNCH
              </span>
              <span
                className={`font-mono text-[8px] sm:text-[9px] uppercase tracking-wider ${
                  staging.activeStage === 4
                    ? "text-[#fd1a38] font-bold"
                    : "text-[#94a3b8] font-semibold"
                }`}
              >
                {staging.stageSublabels[3]}
              </span>
            </div>

          </div>

        </div>
      </main>

      {/* Bottom spacing to ensure clean visibility of the floor & cables */}
      <div className="h-10 sm:h-14 lg:h-20 shrink-0 relative z-10" />

      {/* Animation Styles for the Progress Line */}
      <style jsx global>{`
        @keyframes deploy-stripes {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 32px 0;
          }
        }

        .animated-deploy-bar {
          background-image: repeating-linear-gradient(
            45deg,
            #fd1a38,
            #fd1a38 8px,
            #e1132e 8px,
            #e1132e 16px
          );
          background-size: 32px 32px;
          animation: deploy-stripes 1.2s linear infinite;
          box-shadow: 0 0 14px 2px rgba(253, 26, 56, 0.55);
        }

        @keyframes dot-bounce {
          0%, 80%, 100% {
            opacity: 0.3;
            transform: translateY(0);
            color: #94a3b8;
          }
          40% {
            opacity: 1;
            transform: translateY(-2px);
            color: #fd1a38;
          }
        }

        .anim-dot-1 {
          display: inline-block;
          animation: dot-bounce 1.3s infinite ease-in-out;
        }
        .anim-dot-2 {
          display: inline-block;
          animation: dot-bounce 1.3s infinite ease-in-out 0.22s;
        }
        .anim-dot-3 {
          display: inline-block;
          animation: dot-bounce 1.3s infinite ease-in-out 0.44s;
        }
      `}</style>
    </div>
  );
}
